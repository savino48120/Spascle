import { Check } from "lucide-react";
import { CodeWindow } from "@/components/shared/code-window";
import { CONTEXT_ICONS } from "@/components/shared/context-icons";
import { Container } from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VARIABLES_CONTEXT_EXAMPLES } from "@/data/context-examples";
import { DEFAULT_CONTEXT, SCIENTIFIC_CONTEXTS } from "@/lib/constants/contexts";
import { LANDING_SECTIONS } from "@/lib/constants/routes";
import { SectionHeading } from "./section-heading";

const CONTEXT_BENEFITS = [
  "Materials science is the default for every lesson",
  "Set a preferred field for the whole course",
  "Switch fields for a single lesson without changing your default",
];

/** Scientific applications: demonstrates the context switcher with one concept in six fields. */
export function ContextsSection() {
  const contextsWithExamples = SCIENTIFIC_CONTEXTS.filter((scientificContext) =>
    VARIABLES_CONTEXT_EXAMPLES.some((example) => example.context === scientificContext.slug),
  );

  return (
    <section id={LANDING_SECTIONS.applications} aria-labelledby="contexts-heading" className="scroll-mt-header py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            id="contexts-heading"
            align="start"
            eyebrow="Scientific contexts"
            title="Same concept, examples from your field"
            description="See a programming idea in a setting you recognise. Choose chemistry, physics, biology, biochemistry or general programming wherever examples are available."
          />
          <ul className="flex flex-col gap-3">
            {CONTEXT_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-body text-foreground-secondary">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-success-subtle text-success-emphasis">
                  <Check aria-hidden className="size-3.5" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 rounded-xl bg-linear-to-br from-gradient-strong to-gradient-soft p-4 sm:p-6">
          <p className="mb-3 text-label text-foreground-secondary">Lesson: Variables and Data Types</p>
          <Tabs defaultValue={DEFAULT_CONTEXT}>
            <TabsList aria-label="Scientific context" className="flex-wrap bg-surface/80">
              {contextsWithExamples.map((scientificContext) => {
                const ContextIcon = CONTEXT_ICONS[scientificContext.slug];
                return (
                  <TabsTrigger key={scientificContext.slug} value={scientificContext.slug}>
                    <ContextIcon aria-hidden />
                    {scientificContext.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {VARIABLES_CONTEXT_EXAMPLES.map((example) => (
              <TabsContent key={example.context} value={example.context}>
                <CodeWindow
                  filename={example.filename}
                  code={example.code}
                  output={example.output}
                  className="shadow-sm"
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
