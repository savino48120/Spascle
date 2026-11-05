import type { ReactNode } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { LANDING_SECTIONS } from "@/lib/constants/routes";
import {
  AssessmentIllustration,
  CodingIllustration,
  LabIllustration,
  LessonsIllustration,
} from "./feature-illustrations";
import { SectionHeading } from "./section-heading";

interface LearningFeature {
  title: string;
  description: string;
  illustration: ReactNode;
}

const LEARNING_FEATURES: LearningFeature[] = [
  {
    title: "Structured lessons",
    description: "Short, beginner-friendly lessons organised into modules, with clear objectives and next steps.",
    illustration: <LessonsIllustration />,
  },
  {
    title: "Code in your browser",
    description: "Edit and run real Python alongside each explanation, with output and readable error messages.",
    illustration: <CodingIllustration />,
  },
  {
    title: "Instant feedback",
    description: "Exercises are checked automatically. See which tests passed and ask for an AI hint when you're stuck.",
    illustration: <AssessmentIllustration />,
  },
  {
    title: "Guided labs",
    description: "Work through step-by-step computational materials science problems with supplied data and starter code.",
    illustration: <LabIllustration />,
  },
];

/** Learning features (ui_specification §10.3, information_architecture §4.1 "How learning works"). */
export function FeaturesSection() {
  return (
    <section
      id={LANDING_SECTIONS.howItWorks}
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-header bg-surface-secondary py-20"
    >
      <Container className="flex flex-col gap-12">
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="How learning works"
          title="From your first line of code to real scientific analysis"
          description="Read a concept, try it straight away, and get feedback that tells you what to do next."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_FEATURES.map((learningFeature) => (
            <li key={learningFeature.title} className="min-w-0">
              <Card className="h-full">
                <div
                  aria-hidden
                  className="flex h-48 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-gradient-strong to-gradient-soft p-4"
                >
                  {learningFeature.illustration}
                </div>
                <CardHeader className="px-1 pb-2">
                  <CardTitle>{learningFeature.title}</CardTitle>
                  <CardDescription>{learningFeature.description}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
