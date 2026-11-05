import { LessonNavigation } from "@/components/learning/lesson/lesson-navigation";
import { UnderConstructionNotice } from "@/components/shared/under-construction-notice";
import { findLabLocation } from "@/lib/course";

/**
 * A module's guided lab: a placeholder until lab content is written. Cached
 * so the prefetched "Next" link from the module's last exercise resolves it
 * before the click.
 */
export async function LabView({ moduleSlug }: { moduleSlug: string }) {
  "use cache";

  const labLocation = findLabLocation(moduleSlug);
  if (!labLocation) return null;
  const { courseModule, previousLesson, nextLesson } = labLocation;

  return (
    <>
      <header className="flex flex-col gap-3">
        <p className="text-label text-secondary-emphasis">Module {courseModule.displayOrder} lab</p>
        <h1 className="text-h1 text-balance text-foreground">Lab – {courseModule.title}</h1>
      </header>

      <UnderConstructionNotice />

      <LessonNavigation previousLesson={previousLesson} nextLesson={nextLesson} />
    </>
  );
}
