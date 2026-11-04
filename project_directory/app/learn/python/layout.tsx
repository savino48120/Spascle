import { LearningHeader } from "@/components/layout/learning-header";
import { SkipLink } from "@/components/layout/skip-link";
import { CourseSidebar } from "@/components/learning/navigation/course-sidebar";
import { IS_LEARNING_AD_RAIL_VISIBLE } from "@/lib/constants/site";
import { getPublishedLessonKeys } from "@/lib/course";
import { cn } from "@/lib/utils";

/**
 * Python learning area shell (ui_specification §11.1): header across the top,
 * then three columns: grey course sidebar (a drawer below `lg`), white lesson
 * content, and an advertising column that stays hidden until ads are
 * introduced, so the content column takes the full remaining width.
 */
export default function PythonLearningLayout({ children }: LayoutProps<"/learn/python">) {
  const publishedLessonKeys = getPublishedLessonKeys();

  return (
    <>
      <SkipLink />
      <LearningHeader publishedLessonKeys={publishedLessonKeys} />
      <div className="flex flex-1">
        <aside className="sticky top-header hidden h-[calc(100dvh-var(--spacing-header))] w-sidebar shrink-0 overflow-y-auto border-r border-border bg-surface-secondary lg:block">
          <CourseSidebar publishedLessonKeys={publishedLessonKeys} />
        </aside>
        <main id="main-content" className="min-w-0 flex-1 bg-surface">
          {children}
        </main>
        <aside
          aria-label="Sponsored"
          className={cn(
            "sticky top-header hidden h-[calc(100dvh-var(--spacing-header))] w-ad-rail shrink-0 overflow-y-auto border-l border-border bg-surface-secondary",
            IS_LEARNING_AD_RAIL_VISIBLE && "xl:block",
          )}
        />
      </div>
    </>
  );
}
