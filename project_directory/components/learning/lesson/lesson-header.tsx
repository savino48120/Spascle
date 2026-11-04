import { Clock, Target } from "lucide-react";
import type { Module } from "@/types/content";
import { RichText } from "./rich-text";

interface LessonHeaderProps {
  courseModule: Module;
  lessonTitle: string;
  lessonNumber: number;
  description?: string;
  estimatedMinutes?: number;
  learningObjectives?: string[];
}

/** Lesson title, location in the course, description and learning objectives (information_architecture §4.4). */
export function LessonHeader({
  courseModule,
  lessonTitle,
  lessonNumber,
  description,
  estimatedMinutes,
  learningObjectives,
}: LessonHeaderProps) {
  return (
    <header className="flex flex-col gap-4">

      <div className="flex flex-col gap-3">
        <p className="text-label text-secondary-emphasis">
          Lesson {lessonNumber} of {courseModule.lessons.length}
        </p>
        <h1 className="text-h1 text-balance text-foreground">{lessonTitle}</h1>
        {description && (
          <p className="text-body-lg text-foreground-secondary">
            <RichText text={description} />
          </p>
        )}
        {estimatedMinutes && (
          <p className="flex items-center gap-1.5 text-caption text-foreground-muted">
            <Clock aria-hidden className="size-3.5" />
            About {estimatedMinutes} minutes
          </p>
        )}
      </div>

      {learningObjectives && learningObjectives.length > 0 && (
        <section aria-labelledby="objectives-heading" className="rounded-xl border border-border bg-surface-secondary p-4 sm:p-5">
          <h2 id="objectives-heading" className="flex items-center gap-2 text-h4 text-foreground">
            <Target aria-hidden className="size-4 text-primary-emphasis" />
            In this lesson you will
          </h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-6 text-body-sm text-foreground-secondary marker:text-foreground-muted">
            {learningObjectives.map((objective) => (
              <li key={objective}>
                <RichText text={objective} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </header>
  );
}
