import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  Icon: LucideIcon;
  title: string;
  description: ReactNode;
  /** Buttons or links offering a useful next step (ux_specification: unavailable content). */
  actions?: ReactNode;
  /** Heading level for the title; use 1 when the empty state is the whole page. */
  headingLevel?: 1 | 2;
}

/** Explains why content is unavailable and what the learner can do instead. */
export function EmptyState({ Icon, title, description, actions, headingLevel = 2 }: EmptyStateProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-border-strong bg-surface px-6 py-12 text-center">
      <span className="grid size-12 place-items-center rounded-lg bg-primary-subtle text-primary-emphasis">
        <Icon aria-hidden className="size-6" />
      </span>
      <Heading className="text-h3 text-foreground">{title}</Heading>
      <div className="max-w-md text-body text-foreground-secondary">{description}</div>
      {actions && <div className="mt-2 flex flex-wrap justify-center gap-3">{actions}</div>}
    </div>
  );
}
