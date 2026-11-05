import { ArrowRight, Check, FlaskConical } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BrandPattern } from "@/components/shared/brand-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PYTHON_COURSE, PYTHON_COURSE_FACTS } from "@/data/python-course";
import { ROUTES } from "@/lib/constants/routes";
import { FIRST_LESSON_HREF, getPublishedLessonKeys } from "@/lib/course";

export const metadata: Metadata = {
  title: PYTHON_COURSE.title,
  description: PYTHON_COURSE.description,
  alternates: { canonical: ROUTES.python },
};

/** Python learning home (SCR-002): course overview and entry point to the first lesson. */
export default function PythonCourseHomePage() {
  const publishedLessonKeys = new Set(getPublishedLessonKeys());

  return (
    <div className="flex max-w-page flex-col gap-12 px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <header className="relative isolate flex flex-col items-start gap-5 overflow-hidden rounded-xl bg-linear-to-br from-gradient-strong to-gradient-soft p-5 sm:p-10">
        <BrandPattern className="-z-10" />
        <Badge variant="primary" className="bg-surface/70 whitespace-normal">
          {PYTHON_COURSE.programmingLanguage} · Default field: {PYTHON_COURSE.subjectArea}
        </Badge>
        <h1 className="text-h1 text-balance text-foreground">{PYTHON_COURSE.title}</h1>
        <p className="text-body-lg text-foreground-secondary">{PYTHON_COURSE.description}</p>
        <dl className="flex flex-wrap gap-3">
          {PYTHON_COURSE_FACTS.map((courseFact) => (
            <div
              key={courseFact.label}
              className="flex items-baseline gap-2 rounded-md border border-primary-subtle-border bg-surface/70 px-3 py-2"
            >
              <dt className="text-label text-foreground-secondary">{courseFact.label}</dt>
              <dd className="text-body font-semibold text-foreground">{courseFact.value}</dd>
            </div>
          ))}
        </dl>
        <Button asChild size="lg" isFullWidthOnMobile>
          <Link href={FIRST_LESSON_HREF}>
            Start the first lesson
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </header>

      <section aria-labelledby="objectives-heading" className="flex flex-col gap-4">
        <h2 id="objectives-heading" className="text-h2 text-foreground">
          What you&apos;ll learn
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {PYTHON_COURSE.learningObjectives.map((objective) => (
            <li key={objective} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4 text-body-sm text-foreground">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-success-subtle text-success-emphasis">
                <Check aria-hidden className="size-3.5" />
              </span>
              {objective}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="modules-heading" className="flex flex-col gap-4">
        <h2 id="modules-heading" className="text-h2 text-foreground">
          Course modules
        </h2>
        <ol className="grid gap-4 md:grid-cols-2">
          {PYTHON_COURSE.modules.map((courseModule) => {
            const publishedCount = courseModule.lessons.filter((lesson) =>
              publishedLessonKeys.has(`${courseModule.slug}/${lesson.slug}`),
            ).length;
            return (
              <li key={courseModule.slug} className="min-w-0">
                <Card className="h-full gap-3 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-label text-foreground-muted">Module {courseModule.displayOrder}</p>
                      <h3 className="text-h4 text-foreground">{courseModule.title}</h3>
                    </div>
                    {publishedCount === 0 && <Badge>Coming soon</Badge>}
                  </div>
                  <p className="text-body-sm text-foreground-secondary">{courseModule.description}</p>
                  <Button asChild variant="secondary" className="mt-auto self-start">
                    <Link
                      href={ROUTES.lesson(courseModule.slug, courseModule.lessons[0].slug)}
                      aria-label={`Visit module ${courseModule.displayOrder}: ${courseModule.title}`}
                    >
                      Visit module
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </Card>
              </li>
            );
          })}
          <li className="min-w-0">
            <Card className="h-full gap-3 border-dashed p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-label text-foreground-muted">Practical</p>
                  <h3 className="text-h4 text-foreground">Guided computational labs</h3>
                </div>
                <Badge>Coming soon</Badge>
              </div>
              <p className="text-body-sm text-foreground-secondary">
                Step-by-step materials science problems with supplied data and starter code.
              </p>
              <Link
                href={ROUTES.labs}
                className="mt-auto flex items-center gap-2 text-body-sm font-medium text-primary-emphasis hover:underline"
              >
                <FlaskConical aria-hidden className="size-4" />
                About the labs
              </Link>
            </Card>
          </li>
        </ol>
      </section>
    </div>
  );
}
