import { ArrowRight, FlaskConical } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes";
import { FIRST_LESSON_HREF } from "@/lib/course";

export const metadata: Metadata = {
  title: "Guided labs · Python",
  description: "Guided computational materials science labs are coming soon to SPASCLE.",
};

const UPCOMING_LAB_FEATURES = [
  "A scientific problem with background and a clear goal",
  "Step-by-step instructions alongside the code editor",
  "Supplied datasets and starter code",
  "Feedback on each step and a final assessment",
];

/** Guided labs placeholder (SCR-013 to SCR-015 are planned but not built yet). */
export default function GuidedLabsPage() {
  return (
    <div className="flex max-w-reading flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <EmptyState
        headingLevel={1}
        Icon={FlaskConical}
        title="Guided labs will be added soon"
        description="Labs will walk you through real computational materials science problems using Python. They are being prepared and reviewed now."
        actions={
          <>
            <Button asChild>
              <Link href={FIRST_LESSON_HREF}>
                Continue with the lessons
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={ROUTES.python}>Course overview</Link>
            </Button>
          </>
        }
      />
      <section aria-labelledby="lab-features-heading" className="flex flex-col gap-3">
        <h2 id="lab-features-heading" className="text-h4 text-foreground">
          What each lab will include
        </h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-6 text-body-sm text-foreground-secondary marker:text-foreground-muted">
          {UPCOMING_LAB_FEATURES.map((labFeature) => (
            <li key={labFeature}>{labFeature}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
