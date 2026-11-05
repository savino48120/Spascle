"use client";

import { Fragment, type ReactNode } from "react";
import { resolveDisplayedContext, useLessonContext } from "@/components/learning/context/lesson-context";
import type { ScientificContextSlug } from "@/types/content";

interface ExerciseVariantSwitchProps {
  /** Server-rendered exercise for each scientific context it has a version for. */
  renderedVariants: Partial<Record<ScientificContextSlug, ReactNode>>;
}

/**
 * Shows the version of a coding exercise that matches the page's current
 * scientific context, falling back to materials science. Must be used inside
 * `LessonContextProvider`.
 */
export function ExerciseVariantSwitch({ renderedVariants }: ExerciseVariantSwitchProps) {
  const { requestedContext } = useLessonContext();
  const variantContexts = Object.keys(renderedVariants) as ScientificContextSlug[];
  const displayedContext = resolveDisplayedContext(requestedContext, variantContexts);

  // Keyed by context so switching fields resets the editor, hints and answer check for the new problem.
  return <Fragment key={displayedContext}>{renderedVariants[displayedContext]}</Fragment>;
}
