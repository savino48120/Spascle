"use client";

import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { CONTEXT_ICONS } from "@/components/shared/context-icons";
import { Badge } from "@/components/ui/badge";
import { SCIENTIFIC_CONTEXTS } from "@/lib/constants/contexts";
import type { ScientificContextSlug } from "@/types/content";
import { resolveDisplayedContext, useLessonContext } from "./lesson-context";

interface ContextExampleSwitchProps {
  title: string;
  /** Server-rendered content for each available variant. */
  renderedVariants: Partial<Record<ScientificContextSlug, ReactNode>>;
}

/** Shows the variant of a context-specific example that matches the lesson's current scientific context. */
export function ContextExampleSwitch({ title, renderedVariants }: ContextExampleSwitchProps) {
  const { requestedContext, availableContexts } = useLessonContext();
  const variantContexts = Object.keys(renderedVariants).filter((slug): slug is ScientificContextSlug =>
    SCIENTIFIC_CONTEXTS.some((scientificContext) => scientificContext.slug === slug),
  );
  const displayedContext = resolveDisplayedContext(requestedContext, variantContexts);
  const displayedContextInfo = SCIENTIFIC_CONTEXTS.find((scientificContext) => scientificContext.slug === displayedContext);
  const requestedContextName = SCIENTIFIC_CONTEXTS.find((scientificContext) => scientificContext.slug === requestedContext)?.name;
  const ContextIcon = CONTEXT_ICONS[displayedContext];

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-h4 text-foreground">{title}</h3>
        <Badge variant="primary">
          <ContextIcon aria-hidden />
          {displayedContextInfo?.name}
        </Badge>
      </div>
      {displayedContext !== requestedContext && availableContexts.includes(requestedContext) && (
        <p className="flex items-start gap-2 text-caption text-foreground-secondary">
          <Info aria-hidden className="mt-0.5 size-3.5 shrink-0 text-info-emphasis" />
          No {requestedContextName} version of this example yet. Showing {displayedContextInfo?.name}.
        </p>
      )}
      {renderedVariants[displayedContext]}
    </section>
  );
}
