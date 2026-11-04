import { Play } from "lucide-react";
import type { ReactNode } from "react";
import { tokenizePythonLine, type PythonTokenKind } from "@/lib/highlight-python";
import { cn } from "@/lib/utils";

const TOKEN_CLASS: Record<PythonTokenKind, string> = {
  plain: "",
  comment: "text-code-comment",
  string: "text-code-string",
  number: "text-code-number",
  function: "text-code-function",
};

interface CodeWindowProps {
  filename: string;
  code: string;
  /** Program output shown in a separate panel under the code. */
  output?: string;
  /** Extra content for the output panel header, e.g. a status. */
  outputStatus?: ReactNode;
  size?: "sm" | "md";
  /** Show the decorative "Run" chip. Turn off where a real Run control exists. */
  hasRunBadge?: boolean;
  className?: string;
}

/**
 * Static, read-only preview of a Python editor and its output. Always dark,
 * matching the editor default (ui_specification §12.2). Decorative previews
 * only; the interactive editor is a separate component.
 */
export function CodeWindow({
  filename,
  code,
  output,
  outputStatus,
  size = "md",
  hasRunBadge = true,
  className,
}: CodeWindowProps) {
  const lines = code.split("\n");
  const textSize = size === "sm" ? "text-caption" : "text-code";

  return (
    <figure className={cn("overflow-hidden rounded-lg border border-code-border bg-code-surface text-code-foreground", className)}>
      <figcaption className="flex items-center justify-between gap-3 border-b border-code-border px-3 py-2">
        <span className="flex items-center gap-2">
          <span aria-hidden className="flex gap-1">
            <span className="size-2 rounded-full bg-error" />
            <span className="size-2 rounded-full bg-secondary" />
            <span className="size-2 rounded-full bg-success" />
          </span>
          <span className="font-mono text-caption text-code-comment">{filename}</span>
        </span>
        {hasRunBadge && (
          <span aria-hidden className="inline-flex items-center gap-1 rounded-sm bg-primary px-2 py-0.5 text-caption font-medium text-on-primary">
            <Play className="size-3 fill-current" />
            Run
          </span>
        )}
      </figcaption>

      <pre className={cn("overflow-x-auto px-4 py-3 font-mono", textSize)}>
        <code>
          {lines.map((line, lineIndex) => (
            <span key={lineIndex} className="block min-h-[1lh]">
              {tokenizePythonLine(line).map((token, tokenIndex) => (
                <span key={tokenIndex} className={TOKEN_CLASS[token.kind]}>
                  {token.text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>

      {output !== undefined && (
        <div className="border-t border-code-border px-4 py-3">
          <div className="mb-1 flex items-center justify-between text-caption text-code-comment">
            <span>Output</span>
            {outputStatus}
          </div>
          <output className={cn("block font-mono whitespace-pre-wrap", textSize)}>{output}</output>
        </div>
      )}
    </figure>
  );
}
