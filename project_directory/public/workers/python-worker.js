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
 *   { type: "stdout" | "stderr", runId, text }
 *   { type: "done", runId, isSuccess, errorMessage?, isTruncated }
 */

const MAX_OUTPUT_CHARACTERS = 50_000;

let pyodidePromise = null;

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

  // A fresh namespace per run, so variables from a previous run don't leak in.
  const namespace = pyodide.globals.get("dict")();
  try {
    await pyodide.runPythonAsync(code, { globals: namespace, filename: "main.py" });
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

/** Drops Pyodide's internal frames so learners only see lines from their own code. */
function formatTraceback(rawMessage) {
  const lines = rawMessage.trimEnd().split("\n");
  const firstUserFrame = lines.findIndex((line) => line.includes('File "main.py"') || line.includes('File "<exec>"'));
  if (firstUserFrame === -1) return lines.slice(-1).join("\n");
  const userLines = lines.slice(firstUserFrame).map((line) => line.replace('File "<exec>"', 'File "main.py"'));
  return lines[0].startsWith("Traceback") ? ["Traceback (most recent call last):", ...userLines].join("\n") : userLines.join("\n");
}
