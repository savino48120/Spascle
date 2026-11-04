import { CircleCheck, Sparkles } from "lucide-react";
import { CodeWindow } from "@/components/shared/code-window";

const DENSITY_SNIPPET = `mass = 8.96     # g
volume = 1.0    # cm³
print(mass / volume)`;

const TEST_RESULTS = ["Uses a variable for mass", "Divides mass by volume", "Prints the density"];

/**
 * Decorative product previews floating beside the hero copy on wide screens.
 * Hidden from assistive tech; the hero text carries the message.
 */
export function HeroPreviewCards() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden text-left xl:block">
      <div className="absolute top-16 -left-4 w-56 -rotate-3">
        <CodeWindow
          size="sm"
          filename="density.py"
          code={DENSITY_SNIPPET}
          output="8.96"
          className="shadow-md"
        />
      </div>

      <div className="absolute top-36 -right-4 w-56 rotate-2 rounded-lg border border-border bg-surface p-4 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-label text-foreground-secondary">Exercise result</span>
          <span className="rounded-sm bg-success-subtle px-1.5 py-0.5 text-caption font-medium text-success-emphasis">
            3 / 3 passed
          </span>
        </div>
        <ul className="mt-3 flex flex-col gap-2">
          {TEST_RESULTS.map((testName) => (
            <li key={testName} className="flex items-center gap-2 text-caption text-foreground-secondary">
              <CircleCheck className="size-3.5 shrink-0 text-success-emphasis" />
              {testName}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center gap-1.5 border-t border-divider pt-3 text-caption text-secondary-emphasis">
          <Sparkles className="size-3.5" />
          AI hint available
        </div>
      </div>
    </div>
  );
}
