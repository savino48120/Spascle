import type { Metadata } from "next";
import { Suspense } from "react";
import { LessonSkeleton } from "@/components/learning/lesson/lesson-skeleton";
import { ROUTES } from "@/lib/constants/routes";
import { findExerciseLocation, getAllExerciseParams } from "@/lib/course";
import { ExerciseFromParams } from "./exercise-view";

type ExercisePageProps = PageProps<"/learn/python/[moduleSlug]/[lessonSlug]/exercise">;

/** Prerenders the exercise for every lesson that has one. Others reach `notFound()` in `ExerciseFromParams`. */
export function generateStaticParams() {
  return getAllExerciseParams();
}

export async function generateMetadata({ params }: ExercisePageProps): Promise<Metadata> {
  const { moduleSlug, lessonSlug } = await params;
  const exerciseLocation = findExerciseLocation(moduleSlug, lessonSlug);
  if (!exerciseLocation) return {};
  return {
    title: `Exercise: ${exerciseLocation.codingExercise.title} · Python`,
    description: `Hands-on coding exercise for the lesson “${exerciseLocation.lesson.title}”.`,
    alternates: { canonical: ROUTES.exercise(moduleSlug, lessonSlug) },
  };
}

/** Hands-on coding exercise that follows a lesson. Same streaming shell as the lesson page. */
export default function ExercisePage({ params }: ExercisePageProps) {
  return (
    <article className="flex max-w-5xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <Suspense fallback={<LessonSkeleton />}>
        <ExerciseFromParams params={params} />
      </Suspense>
    </article>
  );
}
