import type { Metadata } from "next";
import { Suspense } from "react";
import { LessonSkeleton } from "@/components/learning/lesson/lesson-skeleton";
import { getLessonContent } from "@/data/lessons";
import { LAB_SLUG, ROUTES } from "@/lib/constants/routes";
import { PYTHON_COURSE } from "@/data/python-course";
import { findLabLocation, findLessonLocation, getAllLessonParams } from "@/lib/course";
import { LessonFromParams } from "./lesson-view";

type LessonPageProps = PageProps<"/learn/python/[moduleSlug]/[lessonSlug]">;

/**
 * Prerenders every lesson in the outline, plus a lab page (lessonSlug `lab`)
 * for every module: the lab itself, or an under-construction notice for
 * modules without one. Unknown slugs reach `notFound()` in `LessonFromParams`.
 */
export function generateStaticParams() {
  return [
    ...getAllLessonParams(),
    ...PYTHON_COURSE.modules.map((courseModule) => ({ moduleSlug: courseModule.slug, lessonSlug: LAB_SLUG })),
  ];
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { moduleSlug, lessonSlug } = await params;
  if (lessonSlug === LAB_SLUG) {
    const labLocation = findLabLocation(moduleSlug);
    if (!labLocation) return {};
    return {
      title: `Lab: ${labLocation.courseModule.title} · Python`,
      description: `Guided computational lab for the module “${labLocation.courseModule.title}”.`,
      alternates: { canonical: ROUTES.lab(moduleSlug) },
    };
  }

  const lessonLocation = findLessonLocation(moduleSlug, lessonSlug);
  if (!lessonLocation) return {};
  const lessonContent = getLessonContent(moduleSlug, lessonSlug);
  return {
    title: `${lessonLocation.lesson.title} · Python`,
    description: lessonContent?.description ?? `${lessonLocation.courseModule.title}: ${lessonLocation.lesson.title}`,
    alternates: { canonical: ROUTES.lesson(moduleSlug, lessonSlug) },
  };
}

/**
 * Lesson view (SCR-004), also used for module labs. The page itself doesn't
 * read `params`, so the shared App Shell (article frame + skeleton) renders instantly on client navigation
 * while the lesson for this URL streams in.
 */
export default function LessonPage({ params }: LessonPageProps) {
  return (
    <article className="flex max-w-5xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <Suspense fallback={<LessonSkeleton />}>
        <LessonFromParams params={params} />
      </Suspense>
    </article>
  );
}
