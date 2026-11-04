import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTEXT_ICONS } from "@/components/shared/context-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SCIENTIFIC_CONTEXTS } from "@/lib/constants/contexts";
import { LANDING_SECTIONS } from "@/lib/constants/routes";
import { PRIMARY_CTA } from "@/lib/constants/site";
import { HeroPreviewCards } from "./hero-preview-cards";

/** Hero (ui_specification §10.2): what SPASCLE is, who it's for, and how to start. */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative -mt-header overflow-hidden bg-linear-to-b from-gradient-strong via-gradient-soft to-background pt-header"
    >
      <Container className="relative flex flex-col items-center py-16 text-center sm:py-20 lg:pb-24">
        <HeroPreviewCards />

        <Badge variant="primary" className="bg-surface/70 whitespace-normal text-center">
          Python for Scientific Computing · Free, no sign-up
        </Badge>

        <h1 id="hero-heading" className="mt-6 max-w-3xl text-display text-balance text-foreground">
          Learn programming through{" "}
          <span className="text-primary-emphasis">the science concepts you know</span>
        </h1>

        <p className="mt-6 max-w-2xl text-body-lg text-pretty text-foreground-secondary">
          SPASCLE teaches Python from the very first line using examples from materials science, chemistry, physics,
          biology and biochemistry. Write and run code in your browser, get instant feedback, and build skills you can use in your field.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <Link href={PRIMARY_CTA.href}>
              {PRIMARY_CTA.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={`#${LANDING_SECTIONS.pathway}`}>View the course</Link>
          </Button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-label font-semibold text-foreground">Examples drawn from</p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 rounded-sm border border-border bg-surface px-6 py-4 shadow-xs">
            {SCIENTIFIC_CONTEXTS.map((scientificContext) => {
              const ContextIcon = CONTEXT_ICONS[scientificContext.slug];
              return (
                <li
                  key={scientificContext.slug}
                  className="flex items-center gap-2 text-body-sm font-medium text-foreground-secondary"
                >
                  <ContextIcon aria-hidden className="size-4 text-primary-emphasis" />
                  {scientificContext.name}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
