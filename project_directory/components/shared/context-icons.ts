import { Code, Dna, FlaskConical, Gem, Orbit, TestTubes, type LucideIcon } from "lucide-react";
import type { ScientificContextSlug } from "@/types/content";

/** One consistent icon per scientific context, used wherever contexts are listed. */
export const CONTEXT_ICONS: Record<ScientificContextSlug, LucideIcon> = {
  "materials-science": Gem,
  chemistry: FlaskConical,
  physics: Orbit,
  biology: Dna,
  biochemistry: TestTubes,
  "general-programming": Code,
};
