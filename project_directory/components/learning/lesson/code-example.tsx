import { TryItToggle } from "@/components/learning/code-editor/try-it-toggle";
import { CodeWindow } from "@/components/shared/code-window";
import type { CodeSample } from "@/types/lesson";

interface CodeExampleProps extends CodeSample {
  /** Used as the editor's accessible name. */
  label: string;
}

/** A lesson code example: read-only code, its expected output, and an optional hands-on editor. */
export function CodeExample({ code, output, stdin, isTryable = true, label }: CodeExampleProps) {
  return (
    <div className="flex flex-col gap-3">
      <CodeWindow filename="example.py" code={code} output={output} hasRunBadge={false} />
      {isTryable && <TryItToggle code={code} stdin={stdin} label={label} />}
    </div>
  );
}
