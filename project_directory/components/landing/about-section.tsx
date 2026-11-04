import { Globe, GraduationCap, Microscope, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LANDING_SECTIONS } from "@/lib/constants/routes";
import { SectionHeading } from "./section-heading";

interface ValuePoint {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const VALUE_POINTS: ValuePoint[] = [
  {
    title: "Starts from zero",
    description: "No programming experience needed. Every term is explained before you use it.",
    Icon: GraduationCap,
  },
  {
    title: "Grounded in your field",
    description: "Concepts are taught with problems scientists recognise, not shopping carts and to-do lists.",
    Icon: Microscope,
  },
  {
    title: "Nothing to install",
    description: "Python, NumPy and Matplotlib run in your browser. Open a lesson and start coding.",
    Icon: Globe,
  },
];

/** Platform introduction (ui_specification §10.1 item 3). */
export function AboutSection() {
  return (
    <section id={LANDING_SECTIONS.about} aria-labelledby="about-heading" className="scroll-mt-header py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          id="about-heading"
          eyebrow="Why SPASCLE"
          title="Programming, taught in the language of your science"
          description="General coding courses rarely use scientific examples, and computational science resources often assume you can already program. SPASCLE bridges that gap."
        />

        <ul className="grid gap-8 md:grid-cols-3">
          {VALUE_POINTS.map(({ title, description, Icon }) => (
            <li key={title} className="flex flex-col items-center gap-3 rounded-md border border-border p-6 text-center">
              <span className="grid size-12 place-items-center rounded-lg bg-primary-subtle text-primary-emphasis">
                <Icon aria-hidden className="size-6" />
              </span>
              <h3 className="text-h4 text-foreground">{title}</h3>
              <p className="max-w-xs text-body-sm text-foreground-secondary">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
