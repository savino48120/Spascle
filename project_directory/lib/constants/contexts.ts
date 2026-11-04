import type { ScientificContext, ScientificContextSlug } from "@/types/content";

/**
 * Scientific contexts (information_architecture.md §5, database_design.md §5.4).
 * Static for now; will come from the backend later.
 */
export const SCIENTIFIC_CONTEXTS: ScientificContext[] = [
  { slug: "materials-science", name: "Materials Science", displayOrder: 1, isActive: true },
  { slug: "chemistry", name: "Chemistry", displayOrder: 2, isActive: true },
  { slug: "physics", name: "Physics", displayOrder: 3, isActive: true },
  { slug: "biology", name: "Biology", displayOrder: 4, isActive: true },
  { slug: "biochemistry", name: "Biochemistry", displayOrder: 5, isActive: true },
  { slug: "general-programming", name: "General Programming", displayOrder: 6, isActive: true },
];

export const DEFAULT_CONTEXT: ScientificContextSlug = "materials-science";
