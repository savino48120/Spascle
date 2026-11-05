import { Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LessonContextProvider } from "@/components/learning/context/lesson-context";
import { LessonContextSelect } from "@/components/learning/context/lesson-context-select";
import { CodingExerciseWorkspace } from "@/components/learning/exercise/coding-exercise-workspace";
import { ExerciseVariantSwitch } from "@/components/learning/exercise/exercise-variant-switch";
import { LessonNavigation } from "@/components/learning/lesson/lesson-navigation";
import { RichText } from "@/components/learning/lesson/rich-text";
import { findExerciseLocation } from "@/lib/course";
import type { ScientificContextSlug } from "@/types/content";
import type { CodingExerciseVariant } from "@/types/lesson";

/** Reads the URL params inside the page's Suspense boundary and rejects lessons without an exercise. */
export async function ExerciseFromParams({
  params,
}: Pick<PageProps<"/learn/python/[moduleSlug]/[lessonSlug]/exercise">, "params">) {
  const { moduleSlug, lessonSlug } = await params;
  if (!findExerciseLocation(moduleSlug, lessonSlug)) notFound();
  return <ExerciseView moduleSlug={moduleSlug} lessonSlug={lessonSlug} />;
}

/** The rendered exercise. Cached so the lesson's prefetched "Next" link resolves it before the click. */
async function ExerciseView({ moduleSlug, lessonSlug }: { moduleSlug: string; lessonSlug: string }) {
  "use cache";

  const exerciseLocation = findExerciseLocation(moduleSlug, lessonSlug);
  if (!exerciseLocation) return null;
  const { lesson, lessonHref, codingExercise, previousLesson, nextLesson } = exerciseLocation;
  const exerciseVariants = Object.entries(codingExercise.variants) as [ScientificContextSlug, CodingExerciseVariant][];
  const renderedVariants: Partial<Record<ScientificContextSlug, ReactNode>> = {};
  for (const [contextSlug, exerciseVariant] of exerciseVariants) {
    renderedVariants[contextSlug] = <ExerciseVariantContent exerciseVariant={exerciseVariant} />;
  }

  return (
    <>
      <LessonContextProvider
        key={`${moduleSlug}/${lessonSlug}/exercise`}
        availableContexts={exerciseVariants.map(([contextSlug]) => contextSlug)}
      >
        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-3">
            <h1 className="text-h1 text-balance text-foreground">Hands-on exercise – {lesson.title}</h1>
            <p className="text-body-lg text-foreground-secondary">
              Put the lesson{" "}
              <Link href={lessonHref} className="font-medium text-primary-emphasis underline-offset-2 hover:underline">
                {lesson.title}
              </Link>{" "}
              into practice by writing a program yourself.
            </p>
          </header>
          <LessonContextSelect scope="exercise" />
        </div>

        <ExerciseVariantSwitch renderedVariants={renderedVariants} />
      </LessonContextProvider>

      <LessonNavigation previousLesson={previousLesson} nextLesson={nextLesson} />
    </>
  );
}

/** One scientific context's version of the exercise: its problem statement and the workspace to solve it in. */
function ExerciseVariantContent({ exerciseVariant }: { exerciseVariant: CodingExerciseVariant }) {
  return (
    <>
      <section aria-labelledby="problem-heading" className="flex flex-col gap-4">
        <h2 className="text-h2 text-balance text-foreground">{exerciseVariant.title}</h2>
        <h3 id="problem-heading" className="text-h3 text-foreground">
          The problem
        </h3>
        {exerciseVariant.problem.map((paragraph) => (
          <p key={paragraph} className="text-body text-foreground-secondary">
            <RichText text={paragraph} />
          </p>
        ))}

        <div className="rounded-lg border border-border bg-surface-secondary p-4 sm:p-5">
          <h4 className="text-h4 text-foreground">Your program should</h4>
          <ul className="mt-3 flex flex-col gap-2">
            {exerciseVariant.requirements.map((requirement) => (
              <li key={requirement} className="flex items-start gap-3 text-body-sm text-foreground-secondary">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-subtle text-primary-emphasis">
                  <Check aria-hidden className="size-3.5" />
                </span>
                <span>
                  <RichText text={requirement} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-label text-foreground">Expected output</h4>
          <pre className="overflow-x-auto rounded-md border border-border bg-surface-secondary px-4 py-3 font-mono text-code whitespace-pre-wrap text-foreground">
            {exerciseVariant.expectedOutput}
          </pre>
        </div>
      </section>

      <CodingExerciseWorkspace codingExercise={exerciseVariant} />
    </>
  );
}
