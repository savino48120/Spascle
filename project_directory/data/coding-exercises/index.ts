import type { CodingExercise } from "@/types/lesson";
import { MODULE_2_CODING_EXERCISES } from "./module-2-fundamentals";
import { MODULE_3_CODING_EXERCISES } from "./module-3-data-structures";
import { MODULE_4_CODING_EXERCISES } from "./module-4-control-flow";
import { MODULE_5_CODING_EXERCISES } from "./module-5-functions";
import { MODULE_6_CODING_EXERCISES } from "./module-6-scientific-python";
import { MODULE_7_CODING_EXERCISES } from "./module-7-computational-materials-science";

/**
 * Hands-on coding exercises, one per lesson from Module 2 onwards (Module 1
 * is too early for learners to write a program on their own). Each only uses ideas
 * taught up to and including its lesson. Static until the content API exists.
 */
export const CODING_EXERCISES: CodingExercise[] = [
  ...MODULE_2_CODING_EXERCISES,
  ...MODULE_3_CODING_EXERCISES,
  ...MODULE_4_CODING_EXERCISES,
  ...MODULE_5_CODING_EXERCISES,
  ...MODULE_6_CODING_EXERCISES,
  ...MODULE_7_CODING_EXERCISES,
];

const CODING_EXERCISE_BY_KEY = new Map(
  CODING_EXERCISES.map((codingExercise) => [`${codingExercise.moduleSlug}/${codingExercise.lessonSlug}`, codingExercise]),
);

/**
 * Looks up the hands-on exercise that follows a lesson.
 *
 * @returns The exercise, or `null` when the lesson has none yet.
 */
export function getCodingExercise(moduleSlug: string, lessonSlug: string): CodingExercise | null {
  return CODING_EXERCISE_BY_KEY.get(`${moduleSlug}/${lessonSlug}`) ?? null;
}
