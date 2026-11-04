"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useGlobalContext } from "@/hooks/use-learning-preferences";
import { DEFAULT_CONTEXT } from "@/lib/constants/contexts";
import type { ScientificContextSlug } from "@/types/content";

interface LessonContextValue {
  /** Context requested for this lesson: the lesson override if set, otherwise the global preference. */
  requestedContext: ScientificContextSlug;
  globalContext: ScientificContextSlug;
  isOverridden: boolean;
  /** Contexts with at least one example in this lesson. */
  availableContexts: ScientificContextSlug[];
  setLessonContext: (nextContext: ScientificContextSlug | null) => void;
}

const LessonContextState = createContext<LessonContextValue | null>(null);

/**
 * Holds the lesson-level context override (information_architecture §5.2,
 * §5.4). The override is not saved: render with `key` set to the lesson so
 * moving to another lesson falls back to the global preference.
 */
export function LessonContextProvider({
  availableContexts,
  children,
}: {
  availableContexts: ScientificContextSlug[];
  children: ReactNode;
}) {
  const [globalContext] = useGlobalContext();
  const [lessonOverride, setLessonOverride] = useState<ScientificContextSlug | null>(null);

  const value: LessonContextValue = {
    requestedContext: lessonOverride ?? globalContext,
    globalContext,
    isOverridden: lessonOverride !== null && lessonOverride !== globalContext,
    availableContexts,
    setLessonContext: setLessonOverride,
  };

  return <LessonContextState.Provider value={value}>{children}</LessonContextState.Provider>;
}

/** Reads the current lesson's context state. Must be used inside `LessonContextProvider`. */
export function useLessonContext(): LessonContextValue {
  const lessonContext = useContext(LessonContextState);
  if (!lessonContext) throw new Error("useLessonContext must be used inside LessonContextProvider");
  return lessonContext;
}

/** Picks the variant to show: the requested context if it exists, otherwise the default (materials science). */
export function resolveDisplayedContext(
  requestedContext: ScientificContextSlug,
  availableContexts: readonly ScientificContextSlug[],
): ScientificContextSlug {
  return availableContexts.includes(requestedContext) ? requestedContext : DEFAULT_CONTEXT;
}
