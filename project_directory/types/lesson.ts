import type { ScientificContextSlug } from "./content";

/*
 * Lesson content model. Block types follow database_design.md §5.3
 * (heading, paragraph, code, explanation, callout, ...), so static content
 * can later be replaced by the `lessons.content` JSONB from the API.
 *
 * Inline text supports `code` (backticks) and **bold**; nothing else is parsed.
 */

export interface CodeSample {
  code: string;
  /** Expected output shown under the example. Omit when output depends on input. */
  output?: string;
  /** Pre-filled program input for examples that call `input()`. One value per line. */
  stdin?: string;
  /** Show the "Try it hands-on" editor for this sample. Defaults to true. */
  isTryable?: boolean;
  /** Pre-rendered plot for Matplotlib examples, stored under /public. */
  outputImage?: LessonImage;
}

export interface LessonImage {
  src: string;
  /** Describes what the plot shows, for screen readers. */
  alt: string;
  width: number;
  height: number;
}

/**
 * One version of a piece of content per scientific context. Materials science
 * is the default context and must always be present; the others are optional
 * and fall back to it when missing.
 */
export type ContextVariants<Variant> = { "materials-science": Variant } & Partial<
  Record<Exclude<ScientificContextSlug, "materials-science">, Variant>
>;

export interface ContextExampleVariant extends CodeSample {
  intro: string;
  explanation?: string;
}

export type CalloutTone = "info" | "tip" | "warning";

export type LessonBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "table"; caption?: string; columns: string[]; rows: string[][] }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; isOrdered?: boolean }
  | ({ type: "code"; title?: string } & CodeSample)
  | { type: "explanation"; text: string }
  | { type: "callout"; tone: CalloutTone; title?: string; text: string }
  | {
      type: "contextExample";
      title: string;
      variants: ContextVariants<ContextExampleVariant>;
    };

export interface MultipleChoiceOption {
  id: string;
  text: string;
}

export interface MultipleChoiceExercise {
  id: string;
  question: string;
  /** Optional code shown with the question. */
  code?: string;
  options: MultipleChoiceOption[];
  correctOptionId: string;
  /** Shown after checking, for both correct and incorrect answers. */
  explanation: string;
}

export interface LessonContent {
  moduleSlug: string;
  lessonSlug: string;
  description: string;
  learningObjectives: string[];
  estimatedMinutes: number;
  blocks: LessonBlock[];
  exercises: MultipleChoiceExercise[];
}

/**
 * Hands-on coding exercise shown on its own page after a lesson, with one
 * version per scientific context (see `CodingExerciseVariant`).
 */
export interface CodingExercise {
  moduleSlug: string;
  lessonSlug: string;
  variants: ContextVariants<CodingExerciseVariant>;
}

/**
 * One scientific context's version of a coding exercise. The learner writes a
 * program; each run is checked by comparing what it prints with `expectedOutput`.
 */
export interface CodingExerciseVariant {
  title: string;
  /** Problem statement, one paragraph per entry. Supports inline formatting. */
  problem: string[];
  /** What a correct program must do, shown as a checklist. */
  requirements: string[];
  starterCode: string;
  /** Pre-filled program input for exercises that use `input()`. One value per line. */
  stdin?: string;
  /** Exactly what a correct solution prints. */
  expectedOutput: string;
  /** Revealed one at a time, from a gentle nudge to an almost-complete answer. */
  hints: string[];
  solution: string;
}
