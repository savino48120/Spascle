"use client";

import { Check, Copy, Download, Moon, Play, RotateCcw, Sun } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { useEditorTheme } from "@/hooks/use-learning-preferences";
import { preloadPython, runPython, type RunOutcome } from "@/lib/python-runner";
import { cn } from "@/lib/utils";
import { EditorLoadingState } from "./editor-loading-state";
import { RunOutput, type RunState } from "./run-output";

const MonacoPythonEditor = dynamic(() => import("./monaco-python-editor"), {
  ssr: false,
  loading: () => <EditorLoadingState />,
});

interface TryItEditorProps {
  initialCode: string;
  /** Pre-filled program input for code that calls `input()`. */
  initialStdin?: string;
  /** Accessible name for the editor, e.g. the example title. */
  label: string;
  /** Called after each run with how it ended and everything the program printed to stdout. */
  onRunComplete?: (runOutcome: RunOutcome, programOutput: string) => void;
  className?: string;
}

/**
 * Editable, runnable Python editor with output panel ("Try it hands-on",
 * like W3Schools' "Try it Yourself"). Runs code in the browser via Pyodide.
 * Changes are kept only while the page is open.
 */
export function TryItEditor({ initialCode, initialStdin = "", label, onRunComplete, className }: TryItEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [stdin, setStdin] = useState(initialStdin);
  const [runState, setRunState] = useState<RunState>({ status: "idle" });
  const [outputText, setOutputText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [editorTheme, setEditorTheme] = useEditorTheme();
  const stdinFieldId = useId();
  const pendingOutputRef = useRef("");
  const flushFrameRef = useRef<number | null>(null);

  const isBusy = runState.status === "loading" || runState.status === "running";
  const usesInput = /\binput\s*\(/.test(code);

  useEffect(() => {
    preloadPython();
    return () => {
      if (flushFrameRef.current !== null) cancelAnimationFrame(flushFrameRef.current);
    };
  }, []);

  // Output can arrive in thousands of small chunks; batch them into one state update per frame.
  function appendOutput(text: string) {
    pendingOutputRef.current += text;
    if (flushFrameRef.current !== null) return;
    flushFrameRef.current = requestAnimationFrame(() => {
      flushFrameRef.current = null;
      const chunk = pendingOutputRef.current;
      pendingOutputRef.current = "";
      setOutputText((previousText) => previousText + chunk);
    });
  }

  async function handleRun() {
    if (isBusy) return;
    setOutputText("");
    pendingOutputRef.current = "";
    setRunState({ status: "running" });

    let programOutput = "";
    const outcome = await runPython({
      code,
      stdin: usesInput ? stdin : "",
      onStdout: (text) => {
        programOutput += text;
        appendOutput(text);
      },
      onStderr: appendOutput,
      onPhaseChange: (phase) => setRunState({ status: phase }),
    });
    setRunState(outcome);
    onRunComplete?.(outcome, programOutput);
  }

  function handleReset() {
    setCode(initialCode);
    setStdin(initialStdin);
    setOutputText("");
    setRunState({ status: "idle" });
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
    }
  }

  function handleDownload() {
    const fileUrl = URL.createObjectURL(new Blob([code], { type: "text/x-python" }));
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "main.py";
    downloadLink.click();
    URL.revokeObjectURL(fileUrl);
  }

  const nextEditorTheme = editorTheme === "dark" ? "light" : "dark";

  return (
    <section
      aria-label={`Code editor: ${label}`}
      className={cn("overflow-hidden rounded-lg border border-border bg-surface shadow-xs", className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-secondary px-3 py-2">
        <span className="font-mono text-label text-foreground-secondary">main.py</span>
        <div className="flex items-center gap-1">
          <IconButton
            size="sm"
            label={`Switch editor to ${nextEditorTheme} theme`}
            icon={editorTheme === "dark" ? <Sun /> : <Moon />}
            onClick={() => setEditorTheme(nextEditorTheme)}
          />
          <IconButton size="sm" label={isCopied ? "Copied" : "Copy code"} icon={isCopied ? <Check /> : <Copy />} onClick={handleCopy} />
          <IconButton size="sm" label="Download as main.py" icon={<Download />} onClick={handleDownload} />
          <IconButton size="sm" label="Reset to the original code" icon={<RotateCcw />} onClick={handleReset} disabled={isBusy} />
        </div>
      </div>

      <MonacoPythonEditor value={code} onChange={setCode} onRun={handleRun} theme={editorTheme} ariaLabel={`Python code: ${label}`} />

      {usesInput && (
        <div className="border-t border-border px-3 py-3">
          <label htmlFor={stdinFieldId} className="text-label text-foreground">
            Program input
          </label>
          <p className="text-caption text-foreground-muted">One value per line, used by each <code className="font-mono">input()</code> in order.</p>
          <textarea
            id={stdinFieldId}
            value={stdin}
            onChange={(event) => setStdin(event.target.value)}
            rows={Math.max(2, stdin.split("\n").length)}
            spellCheck={false}
            className="mt-2 w-full resize-y rounded-md border border-input bg-surface px-3 py-2 font-mono text-code text-foreground focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring"
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 border-t border-border px-3 py-3">
        <Button onClick={handleRun} isLoading={isBusy}>
          {!isBusy && <Play className="fill-current" aria-hidden />}
          {runState.status === "loading" ? "Loading Python…" : isBusy ? "Running…" : "Run"}
        </Button>
        <span className="hidden text-caption text-foreground-muted sm:inline">
          or press <kbd className="rounded-sm border border-border bg-surface-secondary px-1 font-mono">Ctrl</kbd> +{" "}
          <kbd className="rounded-sm border border-border bg-surface-secondary px-1 font-mono">Enter</kbd> in the editor
        </span>
      </div>

      <RunOutput runState={runState} outputText={outputText} onRetry={handleRun} />
    </section>
  );
}
