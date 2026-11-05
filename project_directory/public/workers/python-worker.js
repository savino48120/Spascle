/*
 * Runs learner Python code with Pyodide inside a Web Worker, so long or
 * infinite programs never freeze the page. The main thread
 * (lib/python-runner.ts) terminates this worker when a run times out.
 *
 * Plain JavaScript in /public because it is loaded with
 * `new Worker(url, { type: "module" })` and imports Pyodide from its CDN.
 * Pyodide 314+ only supports module workers.
 *
 * Protocol (main -> worker):
 *   { type: "init", indexURL }
 *   { type: "run", runId, code, stdin }
 * Protocol (worker -> main):
 *   { type: "ready" } | { type: "load-error", message }
 *   { type: "phase", runId, phase: "loading-packages" | "running" }
 *   { type: "stdout" | "stderr", runId, text }
 *   { type: "figure", runId, dataUrl }
 *   { type: "done", runId, isSuccess, errorMessage?, isTruncated }
 *
 * Packages a program imports (NumPy, Matplotlib, ...) are downloaded on first
 * use. The "phase" messages let the main thread pause its time limit while
 * that happens. Matplotlib figures are rendered to PNG after the program
 * finishes and sent back as data URLs, since a worker has no screen.
 */

const MAX_OUTPUT_CHARACTERS = 50_000;
const MAX_FIGURES = 6;

const MATPLOTLIB_SETUP = `
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
plt.close("all")
plt.show = lambda *args, **kwargs: None
`;

const COLLECT_FIGURES = `
import base64, io
import matplotlib.pyplot as plt
_figures = []
for _figure_number in plt.get_fignums()[:${MAX_FIGURES}]:
    _buffer = io.BytesIO()
    plt.figure(_figure_number).savefig(_buffer, format="png", dpi=110, bbox_inches="tight")
    _figures.append(base64.b64encode(_buffer.getvalue()).decode("ascii"))
plt.close("all")
_figures
`;

let pyodidePromise = null;
/** Import names already prepared in this worker, so later runs skip the loading phase. */
const preparedImports = new Set();

self.onmessage = async (event) => {
  const message = event.data;
  if (message.type === "init") {
    pyodidePromise = loadRuntime(message.indexURL);
  } else if (message.type === "run") {
    await runCode(message);
  }
};

async function loadRuntime(indexURL) {
  try {
    const { loadPyodide } = await import(`${indexURL}pyodide.mjs`);
    const pyodide = await loadPyodide({ indexURL });
    self.postMessage({ type: "ready" });
    return pyodide;
  } catch (error) {
    self.postMessage({ type: "load-error", message: String(error && error.message ? error.message : error) });
    return null;
  }
}

async function runCode({ runId, code, stdin }) {
  const pyodide = await pyodidePromise;
  if (!pyodide) return;

  let outputCharacters = 0;
  let isTruncated = false;

  const createWriter = (streamType) => {
    const decoder = new TextDecoder();
    return {
      write(buffer) {
        if (isTruncated) return buffer.length;
        const text = decoder.decode(buffer, { stream: true });
        outputCharacters += text.length;
        if (outputCharacters > MAX_OUTPUT_CHARACTERS) {
          isTruncated = true;
        } else {
          self.postMessage({ type: streamType, runId, text });
        }
        return buffer.length;
      },
    };
  };

  const inputLines = stdin ? stdin.split(/\r?\n/) : [];
  pyodide.setStdout(createWriter("stdout"));
  pyodide.setStderr(createWriter("stderr"));
  pyodide.setStdin({ stdin: () => (inputLines.length > 0 ? inputLines.shift() : undefined) });

  const usesMatplotlib = /\bmatplotlib\b/.test(code);
  await preparePackages(pyodide, code, runId, usesMatplotlib);
  if (usesMatplotlib) closeOpenFigures(pyodide);

  // A fresh namespace per run, so variables from a previous run don't leak in.
  const namespace = pyodide.globals.get("dict")();
  try {
    await pyodide.runPythonAsync(code, { globals: namespace, filename: "main.py" });
    if (usesMatplotlib) postFigures(pyodide, runId);
    self.postMessage({ type: "done", runId, isSuccess: true, isTruncated });
  } catch (error) {
    self.postMessage({
      type: "done",
      runId,
      isSuccess: false,
      errorMessage: formatTraceback(String(error && error.message ? error.message : error)),
      isTruncated,
    });
  } finally {
    namespace.destroy();
  }
}

/**
 * Downloads packages the code imports and configures Matplotlib for
 * off-screen rendering. Import errors are left for the program itself to
 * report, so learners see a normal `ModuleNotFoundError`.
 */
async function preparePackages(pyodide, code, runId, usesMatplotlib) {
  let importNames = [];
  try {
    const foundImports = pyodide.pyimport("pyodide.code").find_imports(code);
    importNames = foundImports.toJs();
    foundImports.destroy();
  } catch {
    // Code with a syntax error can't be scanned; running it reports the error.
  }

  const newImports = importNames.filter((importName) => !preparedImports.has(importName));
  if (newImports.length === 0) return;

  self.postMessage({ type: "phase", runId, phase: "loading-packages" });
  try {
    await pyodide.loadPackagesFromImports(code, { messageCallback: () => {}, errorCallback: () => {} });
    if (usesMatplotlib) await pyodide.runPythonAsync(MATPLOTLIB_SETUP);
    newImports.forEach((importName) => preparedImports.add(importName));
  } catch {
    // Leave it to the program's own import to raise a readable error.
  }
  self.postMessage({ type: "phase", runId, phase: "running" });
}

/** Clears figures left over from a previous run that stopped with an error. */
function closeOpenFigures(pyodide) {
  if (!preparedImports.has("matplotlib")) return;
  try {
    pyodide.runPython('import matplotlib.pyplot as plt\nplt.close("all")');
  } catch {
    // Matplotlib unavailable: the program's own import will report it.
  }
}

function postFigures(pyodide, runId) {
  try {
    const figureProxy = pyodide.runPython(COLLECT_FIGURES);
    const pngImages = figureProxy.toJs();
    figureProxy.destroy();
    for (const pngBase64 of pngImages) {
      self.postMessage({ type: "figure", runId, dataUrl: `data:image/png;base64,${pngBase64}` });
    }
  } catch (error) {
    self.postMessage({ type: "stderr", runId, text: `Could not draw the figure: ${String(error && error.message ? error.message : error)}\n` });
  }
}

/** Drops Pyodide's internal frames so learners only see lines from their own code. */
function formatTraceback(rawMessage) {
  const lines = rawMessage.trimEnd().split("\n");
  const firstUserFrame = lines.findIndex((line) => line.includes('File "main.py"') || line.includes('File "<exec>"'));
  if (firstUserFrame === -1) return lines.slice(-1).join("\n");
  const userLines = lines.slice(firstUserFrame).map((line) => line.replace('File "<exec>"', 'File "main.py"'));
  return lines[0].startsWith("Traceback") ? ["Traceback (most recent call last):", ...userLines].join("\n") : userLines.join("\n");
}
