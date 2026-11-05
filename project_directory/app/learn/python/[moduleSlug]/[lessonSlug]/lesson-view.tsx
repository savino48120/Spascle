import { BookOpen, PenLine } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonContextProvider } from "@/components/learning/context/lesson-context";
import { LessonContextSelect } from "@/components/learning/context/lesson-context-select";
import { KnowledgeCheck } from "@/components/learning/lesson/knowledge-check";
import { LessonBlocks } from "@/components/learning/lesson/lesson-blocks";
import { LessonHeader } from "@/components/learning/lesson/lesson-header";
import { LessonNavigation } from "@/components/learning/lesson/lesson-navigation";
import { EmptyState } from "@/components/shared/empty-state";
import { UnderConstructionNotice } from "@/components/shared/under-construction-notice";
import { Button } from "@/components/ui/button";
import { getLessonContent } from "@/data/lessons";
import { PYTHON_COURSE } from "@/data/python-course";
import { LAB_SLUG, ROUTES } from "@/lib/constants/routes";
import { findLabLocation, findLessonLocation } from "@/lib/course";
import { getLessonContexts } from "@/lib/lesson-content";
import { LabView } from "./lab-view";

/**
 * Reads the URL params (inside the page's Suspense boundary), rejects slugs
 * that aren't in the course outline, then renders the cached lesson or lab.
 * A module without a lab shows the under-construction notice rather than a 404.
 */
export async function LessonFromParams({ params }: Pick<PageProps<"/learn/python/[moduleSlug]/[lessonSlug]">, "params">) {
  const { moduleSlug, lessonSlug } = await params;

  if (lessonSlug === LAB_SLUG) {
    if (findLabLocation(moduleSlug)) return <LabView moduleSlug={moduleSlug} />;
    if (PYTHON_COURSE.modules.some((courseModule) => courseModule.slug === moduleSlug)) {
      return <UnderConstructionNotice headingLevel={1} />;
    }
    notFound();
  }

  if (!findLessonLocation(moduleSlug, lessonSlug)) notFound();
  return <LessonView moduleSlug={moduleSlug} lessonSlug={lessonSlug} />;
}

/**
 * The rendered lesson for one module/lesson pair. Cached so `<Link prefetch>`
 * (used by previous/next) can resolve the whole lesson before the click.
 */
async function LessonView({ moduleSlug, lessonSlug }: { moduleSlug: string; lessonSlug: string }) {
  "use cache";

  const lessonLocation = findLessonLocation(moduleSlug, lessonSlug);
  if (!lessonLocation) return null;
  const { courseModule, lesson, previousLesson, nextLesson } = lessonLocation;
  const lessonContent = getLessonContent(moduleSlug, lessonSlug);

  return (
    <>
      {lessonContent ? (
        <LessonContextProvider key={`${moduleSlug}/${lessonSlug}`} availableContexts={getLessonContexts(lessonContent)}>
          <div className="flex flex-col gap-6">
            <LessonHeader
              courseModule={courseModule}
              lessonTitle={lesson.title}
              lessonNumber={lesson.displayOrder}
              description={lessonContent.description}
              estimatedMinutes={lessonContent.estimatedMinutes}
              learningObjectives={lessonContent.learningObjectives}
            />
            <LessonContextSelect />
          </div>

          <LessonBlocks blocks={lessonContent.blocks} />

          {lessonContent.exercises.length > 0 && (
            <section aria-labelledby="knowledge-check-heading" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 id="knowledge-check-heading" className="text-h2 text-foreground">
                  Knowledge check
                </h2>
                <p className="text-body text-foreground-secondary">
                  Choose an answer and press <strong className="font-semibold text-foreground">Check answer</strong>. You
                  can retry as often as you like.
                </p>
              </div>
              <KnowledgeCheck exercises={lessonContent.exercises} />
            </section>
          )}
        </LessonContextProvider>
      ) : (
        <>
          <LessonHeader courseModule={courseModule} lessonTitle={lesson.title} lessonNumber={lesson.displayOrder} />
          <EmptyState
            Icon={PenLine}
            title="This lesson is being written"
            description="Its explanations, examples and exercises are still going through review. Carry on with the other lessons in the meantime."
            actions={
              <Button asChild variant="secondary">
                <Link href={ROUTES.python}>
                  <BookOpen aria-hidden />
                  Back to the course overview
                </Link>
              </Button>
            }
          />
        </>
      )}

      <LessonNavigation previousLesson={previousLesson} nextLesson={nextLesson} />
    </>
  );
}
