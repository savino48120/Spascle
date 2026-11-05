import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PYTHON_COURSE, PYTHON_COURSE_FACTS } from "@/data/python-course";
import { LANDING_SECTIONS, ROUTES } from "@/lib/constants/routes";

/** Python course introduction (ui_specification §10.4). */
export function PathwaySection() {
  return (
    <section
      id={LANDING_SECTIONS.pathway}
      aria-labelledby="pathway-heading"
      className="scroll-mt-header bg-surface-secondary py-20"
    >
      <Container>
        <Card className="grid gap-10 p-4 sm:p-6 lg:grid-cols-2 lg:gap-16 lg:p-10">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <Badge variant="success">Available now</Badge>
            <div className="flex flex-col gap-4">
              <h2 id="pathway-heading" className="text-h1 text-balance text-foreground">
                {PYTHON_COURSE.title}
              </h2>
              <p className="text-body-lg leading-normal text-pretty text-foreground-secondary">{PYTHON_COURSE.description}</p>
            </div>

            <dl className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {PYTHON_COURSE_FACTS.map((courseFact) => (
                <div key={courseFact.label} className="min-w-0 rounded-lg border border-border bg-surface-secondary px-3 py-3 sm:px-4">
                  <dt className="text-label text-foreground-muted">{courseFact.label}</dt>
                  <dd className="text-h4 text-foreground">{courseFact.value}</dd>
                </div>
              ))}
            </dl>

            <Button asChild size="lg">
              <Link href={ROUTES.python}>
                Start the Python course
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <h3 className="text-label tracking-wide text-foreground-muted uppercase">Course outline</h3>
            <ol className="flex flex-col divide-y divide-divider rounded-lg border border-border">
              {PYTHON_COURSE.modules.map((courseModule) => (
                <li key={courseModule.slug} className="flex items-start gap-3 px-3 py-3 sm:gap-4 sm:px-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-primary-subtle text-label font-semibold text-primary-emphasis">
                    {courseModule.displayOrder}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-body-sm font-semibold text-foreground">{courseModule.title}</p>
                      <span className="shrink-0 text-caption text-foreground-muted">
                        {courseModule.lessons.length} lessons
                      </span>
                    </div>
                    <p className="line-clamp-2 text-caption leading-snug text-foreground-secondary lg:line-clamp-1">
                      {courseModule.lessons.map((lesson) => lesson.title).join(" · ")}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Card>
      </Container>
    </section>
  );
}
