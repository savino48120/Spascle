import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LessonLink } from "@/lib/course";

/**
 * Previous/next controls at the end of a lesson or exercise (ui_specification
 * §11.4). The visible text is just "Previous" / "Next"; screen readers also
 * hear the destination. `prefetch` resolves the neighbouring page's cached
 * content ahead of the click, so sequential learning navigates instantly.
 */
export function LessonNavigation({ previousLesson, nextLesson }: { previousLesson: LessonLink | null; nextLesson: LessonLink | null }) {
  return (
    <nav aria-label="Lesson navigation" className="flex items-center justify-between gap-3 border-t border-divider pt-8">
      {previousLesson ? (
        <Button asChild variant="secondary" size="lg">
          <Link href={previousLesson.href} prefetch aria-label={`Previous: ${previousLesson.title}`}>
            <ChevronLeft aria-hidden />
            Previous
          </Link>
        </Button>
      ) : (
        <span />
      )}
      {nextLesson && (
        <Button asChild size="lg" className="group">
          <Link href={nextLesson.href} prefetch aria-label={`Next: ${nextLesson.title}`}>
            Next
            <ChevronRight aria-hidden className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      )}
    </nav>
  );
}
