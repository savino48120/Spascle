import { Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodingExerciseWorkspace } from "@/components/learning/exercise/coding-exercise-workspace";
import { LessonNavigation } from "@/components/learning/lesson/lesson-navigation";
import { RichText } from "@/components/learning/lesson/rich-text";
import { findExerciseLocation } from "@/lib/course";

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

  return (
    <>
      <header className="flex flex-col gap-3">
        <h1 className="text-h1 text-balance text-foreground">Hands-on exercise – {lesson.title}</h1>
        <h2 className="text-h2 text-balance text-foreground">{codingExercise.title}</h2>
        <p className="text-body-lg text-foreground-secondary">
          Put the lesson{" "}
          <Link href={lessonHref} className="font-medium text-primary-emphasis underline-offset-2 hover:underline">
            {lesson.title}
          </Link>{" "}
          into practice by writing a program yourself.
        </p>
      </header>

      <section aria-labelledby="problem-heading" className="flex flex-col gap-4">
        <h3 id="problem-heading" className="text-h3 text-foreground">
          The problem
        </h3>
        {codingExercise.problem.map((paragraph) => (
          <p key={paragraph} className="text-body text-foreground-secondary">
            <RichText text={paragraph} />
          </p>
        ))}

        <div className="rounded-lg border border-border bg-surface-secondary p-4 sm:p-5">
          <h4 className="text-h4 text-foreground">Your program should</h4>
          <ul className="mt-3 flex flex-col gap-2">
            {codingExercise.requirements.map((requirement) => (
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
            {codingExercise.expectedOutput}
          </pre>
        </div>
      </section>

      <CodingExerciseWorkspace codingExercise={codingExercise} />

      <LessonNavigation previousLesson={previousLesson} nextLesson={nextLesson} />
    </>
  );
}
