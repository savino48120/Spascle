/**
 * Frontend content types, mirroring database_design.md §5.
 * Kept to the fields the UI needs; extend as the API contracts are written.
 */

export type ScientificContextSlug =
  | "materials-science"
  | "chemistry"
  | "physics"
  | "biology"
  | "biochemistry"
  | "general-programming";

export interface ScientificContext {
  slug: ScientificContextSlug;
  name: string;
  description?: string;
  icon?: string;
  isActive: boolean;
  displayOrder: number;
}

export type DifficultyLevel = "beginner" | "intermediate" | "advanced";
export type LessonType = "concept" | "tutorial" | "exercise" | "lab";

export interface Course {
  slug: string;
  title: string;
  description?: string;
  subjectArea: string;
  programmingLanguage: string;
  defaultContext: ScientificContextSlug;
  difficultyLevel: DifficultyLevel;
  learningObjectives: string[];
  modules: Module[];
}

export interface Module {
  slug: string;
  title: string;
  description?: string;
  displayOrder: number;
  lessons: LessonSummary[];
  /** Whether a guided lab follows the module's lessons. */
  hasLab: boolean;
}

export interface LessonSummary {
  slug: string;
  title: string;
  description?: string;
  lessonType: LessonType;
  estimatedDuration?: number;
  displayOrder: number;
}
