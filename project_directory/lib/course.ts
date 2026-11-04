import { getCodingExercise } from "@/data/coding-exercises";
import { getLessonContent } from "@/data/lessons";
import { PYTHON_COURSE } from "@/data/python-course";
import { ROUTES } from "@/lib/constants/routes";
import type { LessonSummary, Module } from "@/types/content";
import type { CodingExercise } from "@/types/lesson";

export interface LessonLink {
  title: string;
  href: string;
  moduleTitle: string;
}

export interface LessonLocation {
  courseModule: Module;
  lesson: LessonSummary;
  /** The page before this one in the learning sequence (a lesson or an exercise). */
  previousLesson: LessonLink | null;
  /** The page after this one: the lesson's exercise when it has one, otherwise the next lesson. */
  nextLesson: LessonLink | null;
}

export interface ExerciseLocation extends LessonLocation {
  codingExercise: CodingExercise;
  /** The lesson this exercise practises. */
  lessonHref: string;
}

const ORDERED_LESSONS = PYTHON_COURSE.modules.flatMap((courseModule) =>
  courseModule.lessons.map((lesson) => ({ courseModule, lesson })),
);

function toLessonLink({ courseModule, lesson }: (typeof ORDERED_LESSONS)[number]): LessonLink {
  return { title: lesson.title, href: ROUTES.lesson(courseModule.slug, lesson.slug), moduleTitle: courseModule.title };
}

/** Every page in reading order: each lesson, followed by its hands-on exercise when one exists. */
const LEARNING_SEQUENCE: LessonLink[] = ORDERED_LESSONS.flatMap((orderedLesson) => {
  const lessonLink = toLessonLink(orderedLesson);
  const { courseModule, lesson } = orderedLesson;
  if (!getCodingExercise(courseModule.slug, lesson.slug)) return [lessonLink];
  return [
    lessonLink,
    { title: `Exercise: ${lesson.title}`, href: ROUTES.exercise(courseModule.slug, lesson.slug), moduleTitle: courseModule.title },
  ];
});

function findNeighbouringPages(href: string) {
  const pageIndex = LEARNING_SEQUENCE.findIndex((learningPage) => learningPage.href === href);
  return {
    previousLesson: LEARNING_SEQUENCE[pageIndex - 1] ?? null,
    nextLesson: LEARNING_SEQUENCE[pageIndex + 1] ?? null,
  };
}

/**
 * Finds a lesson in the Python course outline with its neighbours, for
 * breadcrumbs and previous/next navigation.
 *
 * @returns The lesson's location, or `null` when the slugs are not in the outline.
 */
export function findLessonLocation(moduleSlug: string, lessonSlug: string): LessonLocation | null {
  const lessonIndex = ORDERED_LESSONS.findIndex(
    ({ courseModule, lesson }) => courseModule.slug === moduleSlug && lesson.slug === lessonSlug,
  );
  if (lessonIndex === -1) return null;

  const { courseModule, lesson } = ORDERED_LESSONS[lessonIndex];
  return { courseModule, lesson, ...findNeighbouringPages(ROUTES.lesson(moduleSlug, lessonSlug)) };
}

/**
 * Finds the hands-on exercise that follows a lesson, with the pages either
 * side of it (previous: the lesson; next: the following lesson).
 *
 * @returns The exercise's location, or `null` when the lesson is unknown or has no exercise.
 */
export function findExerciseLocation(moduleSlug: string, lessonSlug: string): ExerciseLocation | null {
  const lessonLocation = findLessonLocation(moduleSlug, lessonSlug);
  const codingExercise = getCodingExercise(moduleSlug, lessonSlug);
  if (!lessonLocation || !codingExercise) return null;

  return {
    ...lessonLocation,
    ...findNeighbouringPages(ROUTES.exercise(moduleSlug, lessonSlug)),
    codingExercise,
    lessonHref: ROUTES.lesson(moduleSlug, lessonSlug),
  };
}

/** Every lesson that has a hands-on exercise, for the exercise page's `generateStaticParams`. */
export function getAllExerciseParams() {
  return getAllLessonParams().filter(({ moduleSlug, lessonSlug }) => getCodingExercise(moduleSlug, lessonSlug));
}

/** Every lesson route in the course, for `generateStaticParams`. */
export function getAllLessonParams() {
  return ORDERED_LESSONS.map(({ courseModule, lesson }) => ({ moduleSlug: courseModule.slug, lessonSlug: lesson.slug }));
}

/** `"module/lesson"` keys for lessons whose content has been written. Serializable for the client sidebar. */
export function getPublishedLessonKeys(): string[] {
  return ORDERED_LESSONS.filter(({ courseModule, lesson }) => getLessonContent(courseModule.slug, lesson.slug)).map(
    ({ courseModule, lesson }) => `${courseModule.slug}/${lesson.slug}`,
  );
}

export const FIRST_LESSON_HREF = toLessonLink(ORDERED_LESSONS[0]).href;
