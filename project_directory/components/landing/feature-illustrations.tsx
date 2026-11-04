import { ChevronDown, CircleCheck, CircleX, Sparkles } from "lucide-react";
import { CodeWindow } from "@/components/shared/code-window";
import { cn } from "@/lib/utils";

/*
 * Small, decorative UI previews shown at the top of each "How learning works"
 * card. They are aria-hidden by the parent; card text carries the meaning.
 */

export function LessonsIllustration() {
  const lessons = ["Variables and Data Types", "Operators and Expressions", "Strings"];
  return (
    <div className="w-full max-w-56 rounded-lg border border-border bg-surface-secondary p-2 shadow-sm">
      <div className="flex items-center justify-between px-2 py-1 text-caption font-semibold text-foreground">
        Module 2: Fundamentals
        <ChevronDown className="size-3.5 text-foreground-muted" />
      </div>
      <ul className="mt-1 flex flex-col gap-0.5">
        {lessons.map((lessonTitle, index) => (
          <li
            key={lessonTitle}
            className={cn(
              "rounded-sm border-l-2 py-1.5 pr-2 pl-4 text-caption",
              index === 1
                ? "border-primary bg-primary-subtle font-medium text-primary-emphasis"
                : "border-transparent text-foreground-secondary",
            )}
          >
            {lessonTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CodingIllustration() {
  return (
    <CodeWindow
      size="sm"
      filename="melting.py"
      code={`t_melt = 1085  # °C\nprint(t_melt + 273.15)`}
      output="1358.15"
      className="w-full max-w-60 shadow-sm"
    />
  );
}

export function AssessmentIllustration() {
  return (
    <div className="flex w-full max-w-56 flex-col gap-2">
      <div className="rounded-lg border border-border bg-surface p-3 shadow-sm">
        <div className="flex items-center justify-between text-caption">
          <span className="font-semibold text-foreground">Tests</span>
          <span className="font-medium text-foreground-secondary">Score 2 / 3</span>
        </div>
        <ul className="mt-2 flex flex-col gap-1.5 text-caption text-foreground-secondary">
          <li className="flex items-center gap-1.5">
            <CircleCheck className="size-3.5 text-success-emphasis" /> Returns a float
          </li>
          <li className="flex items-center gap-1.5">
            <CircleCheck className="size-3.5 text-success-emphasis" /> Handles one atom
          </li>
          <li className="flex items-center gap-1.5">
            <CircleX className="size-3.5 text-error-emphasis" /> Uses atomic mass
          </li>
        </ul>
      </div>
      <div className="ml-6 flex items-start gap-1.5 rounded-lg border border-secondary-subtle-border bg-secondary-subtle p-2.5 text-caption text-foreground shadow-sm">
        <Sparkles className="mt-0.5 size-3.5 shrink-0 text-secondary-emphasis" />
        Hint: multiply by the atomic mass before dividing.
      </div>
    </div>
  );
}

export function LabIllustration() {
  const labSteps = ["Load", "Fit", "Plot"];
  return (
    <div className="w-full max-w-56 rounded-lg border border-border bg-surface p-3 shadow-sm">
      <ol className="flex items-center gap-1.5 text-caption">
        {labSteps.map((stepName, index) => (
          <li key={stepName} className="flex items-center gap-1.5">
            <span
              className={cn(
                "grid size-5 place-items-center rounded-full font-semibold",
                index < 1 && "bg-success-subtle text-success-emphasis",
                index === 1 && "bg-primary text-on-primary",
                index > 1 && "bg-surface-secondary text-foreground-muted",
              )}
            >
              {index + 1}
            </span>
            <span className={index === 1 ? "font-medium text-foreground" : "text-foreground-muted"}>{stepName}</span>
          </li>
        ))}
      </ol>
      <svg viewBox="0 0 200 80" className="mt-3 h-20 w-full" role="presentation">
        <line x1="10" y1="70" x2="195" y2="70" className="stroke-border-strong" strokeWidth="1" />
        <line x1="10" y1="5" x2="10" y2="70" className="stroke-border-strong" strokeWidth="1" />
        <polyline
          points="15,62 50,52 85,44 120,33 155,24 190,12"
          fill="none"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [20, 64],
          [48, 49],
          [88, 47],
          [118, 30],
          [152, 27],
          [186, 10],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="2.5" className="fill-secondary" />
        ))}
      </svg>
      <p className="text-caption text-foreground-muted">Thermal expansion of copper</p>
    </div>
  );
}
