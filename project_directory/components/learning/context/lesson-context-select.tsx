"use client";

import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SCIENTIFIC_CONTEXTS } from "@/lib/constants/contexts";
import { ContextSelect } from "./context-select";
import { useLessonContext } from "./lesson-context";

function getContextName(slug: string) {
  return SCIENTIFIC_CONTEXTS.find((scientificContext) => scientificContext.slug === slug)?.name ?? slug;
}

/**
 * Lesson-level context selector. Lists only the fields this lesson has
 * examples for, and explains when the learner's default isn't available.
 */
export function LessonContextSelect() {
  const { requestedContext, globalContext, isOverridden, availableContexts, setLessonContext } = useLessonContext();
  const lessonContexts = SCIENTIFIC_CONTEXTS.filter((scientificContext) =>
    availableContexts.includes(scientificContext.slug),
  );
  const isRequestedAvailable = availableContexts.includes(requestedContext);

  if (lessonContexts.length < 2) return null;

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface px-4 py-3">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-label text-foreground">Examples in this lesson</span>
        <ContextSelect
          value={isRequestedAvailable ? requestedContext : undefined}
          onValueChange={setLessonContext}
          contexts={lessonContexts}
          ariaLabel="Scientific field for this lesson's examples"
          menuLabel="Available in this lesson"
          triggerClassName="w-56"
        />
        {isOverridden && (
          <Button variant="ghost" size="sm" onClick={() => setLessonContext(null)}>
            Use my default ({getContextName(globalContext)})
          </Button>
        )}
      </div>
      {!isRequestedAvailable && (
        <p className="flex items-start gap-2 text-body-sm text-foreground-secondary">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-info-emphasis" />
          {getContextName(requestedContext)} examples aren&apos;t available for this lesson yet, so it shows Materials
          Science. Pick another field above to switch.
        </p>
      )}
      {isOverridden && isRequestedAvailable && (
        <p className="text-caption text-foreground-muted">
          This choice applies to this lesson only. Other lessons use your default field.
        </p>
      )}
    </div>
  );
}
