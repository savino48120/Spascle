import { DEFAULT_CONTEXT } from "@/lib/constants/contexts";
import type { ScientificContextSlug } from "@/types/content";
import type { LessonContent } from "@/types/lesson";

/**
 * Scientific contexts that have at least one example in the lesson. Materials
 * science is always included because it is the default for every lesson.
 */
export function getLessonContexts(lessonContent: LessonContent): ScientificContextSlug[] {
  const lessonContexts = new Set<ScientificContextSlug>([DEFAULT_CONTEXT]);
  for (const block of lessonContent.blocks) {
    if (block.type !== "contextExample") continue;
    for (const contextSlug of Object.keys(block.variants) as ScientificContextSlug[]) lessonContexts.add(contextSlug);
  }
  return [...lessonContexts];
}
