/**
 * Browser-side Python execution via Pyodide in a Web Worker
 * (public/workers/python-worker.js). There is no backend yet, so learner
 * code runs entirely in the learner's own browser.
 *
 * One worker is shared by every editor on the page and runs one program at a
 * time. A run that exceeds RUN_TIMEOUT_MS terminates the worker; a new one is
 * created (and Pyodide reloaded from the browser cache) on the next run.
 */

export const PYODIDE_VERSION = "314.0.7";
const PYODIDE_INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const WORKER_URL = "/workers/python-worker.js";
export const RUN_TIMEOUT_MS = 10_000;

export type RunOutcome =
  | { status: "success"; isTruncated: boolean }
  | { status: "error"; errorMessage: string; isTruncated: boolean }
  | { status: "timeout" }
  | { status: "unavailable"; errorMessage: string };

export interface RunRequest {
  code: string;
  /** Lines fed to `input()`, separated by newlines. */
  stdin?: string;
  onStdout: (text: string) => void;
  onStderr: (text: string) => void;
  /** Called with "loading" while Pyodide downloads, then "running". */
  onPhaseChange?: (phase: "loading" | "running") => void;
}

type WorkerMessage =
  | { type: "ready" }
  | { type: "load-error"; message: string }
  | { type: "stdout" | "stderr"; runId: number; text: string }
  | { type: "done"; runId: number; isSuccess: boolean; errorMessage?: string; isTruncated: boolean };

interface RuntimeHandle {
  worker: Worker;
  ready: Promise<void>;
  isReady: boolean;
}

let runtime: RuntimeHandle | null = null;
let nextRunId = 1;
let runQueue: Promise<unknown> = Promise.resolve();

function startRuntime(): RuntimeHandle {
  const worker = new Worker(WORKER_URL, { type: "module" });
  const handle: RuntimeHandle = { worker, isReady: false, ready: Promise.resolve() };

  handle.ready = new Promise<void>((resolve, reject) => {
    const onMessage = (event: MessageEvent<WorkerMessage>) => {
      if (event.data.type === "ready") {
        handle.isReady = true;
        worker.removeEventListener("message", onMessage);
        resolve();
      } else if (event.data.type === "load-error") {
        worker.removeEventListener("message", onMessage);
        reject(new Error(event.data.message));
      }
    };
    worker.addEventListener("message", onMessage);
    worker.addEventListener("error", () => reject(new Error("The Python worker could not start.")), { once: true });
  });

  worker.postMessage({ type: "init", indexURL: PYODIDE_INDEX_URL });
  return handle;
}

function stopRuntime() {
  runtime?.worker.terminate();
  runtime = null;
}

function getRuntime() {
  runtime ??= startRuntime();
  return runtime;
}

/** Starts downloading Pyodide in the background so the first Run is faster. */
export function preloadPython() {
  getRuntime().ready.catch(() => stopRuntime());
}

/**
 * Runs a Python program and streams its output.
 *
 * @param request - The code, optional stdin, and output callbacks.
 * @returns How the run ended. Never rejects: failures are returned as outcomes.
 */
export function runPython(request: RunRequest): Promise<RunOutcome> {
  const queuedRun = runQueue.then(() => executeRun(request));
  runQueue = queuedRun.catch(() => undefined);
  return queuedRun;
}

async function executeRun({ code, stdin, onStdout, onStderr, onPhaseChange }: RunRequest): Promise<RunOutcome> {
  const activeRuntime = getRuntime();

  if (!activeRuntime.isReady) onPhaseChange?.("loading");
  try {
    await activeRuntime.ready;
  } catch (error) {
    stopRuntime();
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Pyodide failed to load:", errorMessage);
    return { status: "unavailable", errorMessage };
  }
  onPhaseChange?.("running");

  const runId = nextRunId++;
  const { worker } = activeRuntime;

  return new Promise<RunOutcome>((resolve) => {
    const timeoutId = window.setTimeout(() => {
      cleanUp();
      stopRuntime();
      resolve({ status: "timeout" });
    }, RUN_TIMEOUT_MS);

    function onMessage(event: MessageEvent<WorkerMessage>) {
      const message = event.data;
      if (!("runId" in message) || message.runId !== runId) return;
      if (message.type === "stdout") onStdout(message.text);
      else if (message.type === "stderr") onStderr(message.text);
      else if (message.type === "done") {
        cleanUp();
        resolve(
          message.isSuccess
            ? { status: "success", isTruncated: message.isTruncated }
            : { status: "error", errorMessage: message.errorMessage ?? "Unknown error", isTruncated: message.isTruncated },
        );
      }
    }

    function onWorkerError() {
      cleanUp();
      stopRuntime();
      resolve({ status: "unavailable", errorMessage: "The Python runtime stopped unexpectedly." });
    }

    function cleanUp() {
      window.clearTimeout(timeoutId);
      worker.removeEventListener("message", onMessage);
      worker.removeEventListener("error", onWorkerError);
    }

    worker.addEventListener("message", onMessage);
    worker.addEventListener("error", onWorkerError);
    worker.postMessage({ type: "run", runId, code, stdin: stdin ?? "" });
  });
}
