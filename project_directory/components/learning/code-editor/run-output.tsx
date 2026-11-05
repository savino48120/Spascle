import { CircleAlert, CircleCheck, CircleX, Clock, Loader2, WifiOff } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { RUN_TIMEOUT_MS, type RunOutcome } from "@/lib/python-runner";
import { cn } from "@/lib/utils";

export type RunState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "loading-packages" }
  | { status: "running" }
  | RunOutcome;

interface StatusDisplay {
  label: string;
  icon: ReactNode;
  className: string;
}

function getStatusDisplay(runState: RunState): StatusDisplay | null {
  switch (runState.status) {
    case "idle":
      return null;
    case "loading":
      return { label: "Loading Python (first run only)…", icon: <Loader2 className="animate-spin" />, className: "text-foreground-secondary" };
    case "loading-packages":
      return { label: "Loading packages (first use only)…", icon: <Loader2 className="animate-spin" />, className: "text-foreground-secondary" };
    case "running":
      return { label: "Running…", icon: <Loader2 className="animate-spin" />, className: "text-foreground-secondary" };
    case "success":
      return { label: "Ran successfully", icon: <CircleCheck />, className: "text-success-emphasis" };
    case "error":
      return { label: "Your code raised an error", icon: <CircleX />, className: "text-error-emphasis" };
    case "timeout":
      return { label: "Stopped: time limit reached", icon: <Clock />, className: "text-warning-emphasis" };
    case "unavailable":
      return { label: "Python is unavailable", icon: <WifiOff />, className: "text-error-emphasis" };
  }
}

interface RunOutputProps {
  runState: RunState;
  outputText: string;
  /** PNG data URLs of Matplotlib figures the program drew. */
  figureUrls?: string[];
  onRetry: () => void;
}

/** Output panel for TryItEditor: status, program output, and error/timeout/unavailable messages (ui_specification §12.3, §12.5). */
export function RunOutput({ runState, outputText, figureUrls = [], onRetry }: RunOutputProps) {
  const statusDisplay = getStatusDisplay(runState);
  const isTruncated = (runState.status === "success" || runState.status === "error") && runState.isTruncated;

  return (
    <div className="border-t border-border bg-surface-secondary px-3 py-3">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-label text-foreground">Output</h4>
        <p
          role="status"
          className={cn("flex items-center gap-1.5 text-caption font-medium [&_svg]:size-3.5", statusDisplay?.className)}
        >
          {statusDisplay?.icon}
          {statusDisplay?.label}
        </p>
      </div>

      {runState.status === "idle" && (
        <p className="mt-2 text-body-sm text-foreground-muted">Press Run to see what your program prints.</p>
      )}

      {outputText && (
        <pre className="mt-2 max-h-72 overflow-auto rounded-md bg-surface px-3 py-2 font-mono text-code whitespace-pre-wrap text-foreground">
          {outputText}
        </pre>
      )}

      {figureUrls.length > 0 && (
        <div className="mt-2 flex flex-col gap-2">
          {figureUrls.map((figureUrl, figureIndex) => (
            // A data URL generated in the browser at run time; next/image can't optimise it.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={figureIndex}
              src={figureUrl}
              alt={`Figure ${figureIndex + 1} drawn by your program`}
              className="max-w-full self-start rounded-md border border-border bg-white"
            />
          ))}
        </div>
      )}

      {runState.status === "success" && !outputText && figureUrls.length === 0 && (
        <p className="mt-2 text-body-sm text-foreground-muted">The program finished without printing anything.</p>
      )}

      {isTruncated && (
        <p className="mt-2 text-caption text-warning-emphasis">Output was shortened because the program printed a lot of text.</p>
      )}

      {runState.status === "error" && (
        <pre className="mt-2 overflow-auto rounded-md border border-error-border bg-error-subtle px-3 py-2 font-mono text-code whitespace-pre-wrap text-error-emphasis">
          {runState.errorMessage}
        </pre>
      )}

      {runState.status === "timeout" && (
        <Notice icon={<Clock />}>
          Your program ran for more than {RUN_TIMEOUT_MS / 1000} seconds and was stopped. This usually means a loop never
          ends: check that its condition eventually becomes false.
        </Notice>
      )}

      {runState.status === "unavailable" && (
        <Notice icon={<CircleAlert />} action={<Button size="sm" variant="secondary" onClick={onRetry}>Try again</Button>}>
          The Python runtime could not be loaded. Check your internet connection, then try again. You can keep reading the
          lesson in the meantime.
        </Notice>
      )}
    </div>
  );
}

function Notice({ icon, children, action }: { icon: ReactNode; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mt-2 flex flex-col items-start gap-3 rounded-md border border-warning-border bg-warning-subtle px-3 py-2 text-body-sm text-foreground sm:flex-row sm:items-center">
      <span className="flex gap-2 [&_svg]:mt-0.5 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-warning-emphasis">
        {icon}
        <span>{children}</span>
      </span>
      {action}
    </div>
  );
}
