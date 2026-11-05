import type { LessonContent } from "@/types/lesson";
import { MODULE_1_LESSONS } from "./module-1-introduction";
import { MODULE_2_LESSONS } from "./module-2-fundamentals";
import { MODULE_3_LESSONS } from "./module-3-data-structures";
import { MODULE_4_LESSONS } from "./module-4-control-flow";
import { MODULE_5_LESSONS } from "./module-5-functions";
import { MODULE_6_LESSONS } from "./module-6-scientific-python";
import { MODULE_7_LESSONS } from "./module-7-computational-materials-science";

export const ALL_LESSON_CONTENT: LessonContent[] = [
  ...MODULE_1_LESSONS,
  ...MODULE_2_LESSONS,
  ...MODULE_3_LESSONS,
  ...MODULE_4_LESSONS,
  ...MODULE_5_LESSONS,
  ...MODULE_6_LESSONS,
  ...MODULE_7_LESSONS,
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
