import type { LessonContent } from "@/types/lesson";
import { MODULE_1_LESSONS } from "./module-1-introduction";
import { MODULE_2_LESSONS } from "./module-2-fundamentals";
import { MODULE_3_LESSONS } from "./module-3-control-flow";
import { MODULE_4_LESSONS } from "./module-4-data-structures";

export const ALL_LESSON_CONTENT: LessonContent[] = [
  ...MODULE_1_LESSONS,
  ...MODULE_2_LESSONS,
  ...MODULE_4_LESSONS,
  ...MODULE_3_LESSONS,
];

const LESSON_CONTENT_BY_KEY = new Map(
  ALL_LESSON_CONTENT.map((lessonContent) => [`${lessonContent.moduleSlug}/${lessonContent.lessonSlug}`, lessonContent]),
);

/**
 * Static lesson content lookup. Will be replaced by an API call once the
 * content database exists.
 *
 * @returns The lesson content, or `null` when the lesson has not been written yet.
 */
export function getLessonContent(moduleSlug: string, lessonSlug: string): LessonContent | null {
  return LESSON_CONTENT_BY_KEY.get(`${moduleSlug}/${lessonSlug}`) ?? null;
}
