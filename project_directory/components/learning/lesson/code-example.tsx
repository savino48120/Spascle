import Image from "next/image";
import { TryItToggle } from "@/components/learning/code-editor/try-it-toggle";
import { CodeWindow } from "@/components/shared/code-window";
import type { CodeSample } from "@/types/lesson";

interface CodeExampleProps extends CodeSample {
  /** Used as the editor's accessible name. */
  label: string;
}

/** A lesson code example: read-only code, its expected output or plot, and an optional hands-on editor. */
export function CodeExample({ code, output, stdin, isTryable = true, outputImage, label }: CodeExampleProps) {
  return (
    <div className="flex flex-col gap-3">
      <CodeWindow filename="example.py" code={code} output={output} hasRunBadge={false} />
      {outputImage && (
        <figure className="flex flex-col gap-1.5 self-start">
          {/* Plots are drawn on white, so keep a white mat in both themes. */}
          <Image
            src={outputImage.src}
            alt={outputImage.alt}
            width={outputImage.width}
            height={outputImage.height}
            className="h-auto max-w-full rounded-lg border border-border bg-white p-2"
          />
          <figcaption className="text-caption text-foreground-muted">Plot produced by this example</figcaption>
        </figure>
      )}
      {isTryable && <TryItToggle code={code} stdin={stdin} label={label} />}
    </div>
  );
}
