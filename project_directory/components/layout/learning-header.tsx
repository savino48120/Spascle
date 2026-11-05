import Link from "next/link";
import { GlobalContextSelect } from "@/components/learning/context/global-context-select";
import { MobileCourseNav } from "@/components/learning/navigation/mobile-course-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { PYTHON_COURSE } from "@/data/python-course";
import { ROUTES } from "@/lib/constants/routes";
import { SiteLogo } from "./site-logo";

/**
 * Compact learning-area header (ui_specification §8.3): brand, current course,
 * global scientific-context selector and theme switcher.
 */
export function LearningHeader({
  publishedLessonKeys,
  exerciseLessonKeys,
}: {
  publishedLessonKeys: string[];
  exerciseLessonKeys: string[];
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="flex h-header items-center gap-2 px-4 sm:gap-4 lg:px-6">
        <MobileCourseNav publishedLessonKeys={publishedLessonKeys} exerciseLessonKeys={exerciseLessonKeys} />
        <SiteLogo className="shrink-0" />
        <span aria-hidden className="hidden h-6 w-px bg-divider md:block" />
        <Link
          href={ROUTES.python}
          className="hidden truncate text-body-sm font-medium text-foreground-secondary hover:text-primary-emphasis md:block"
        >
          {PYTHON_COURSE.title}
        </Link>
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <GlobalContextSelect />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
