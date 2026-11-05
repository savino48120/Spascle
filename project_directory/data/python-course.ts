import type { Course, Module } from "@/types/content";

/**
 * Illustrative Python course outline (information_architecture.md §4.3).
 * Static until the content API exists; the final list is still being confirmed.
 */

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function defineModule(
  displayOrder: number,
  title: string,
  description: string,
  lessonTitles: string[],
  { hasLab = true }: { hasLab?: boolean } = {},
): Module {
  return {
    slug: toSlug(title),
    title,
    description,
    displayOrder,
    hasLab,
    lessons: lessonTitles.map((lessonTitle, index) => ({
      slug: toSlug(lessonTitle),
      title: lessonTitle,
      lessonType: "concept",
      displayOrder: index + 1,
    })),
  };
}

export const PYTHON_COURSE: Course = {
  slug: "python",
  title: "Python for Scientific Computing",
  description:
    "A beginner course that introduces Python through computational materials science, from your first program to analysing and visualising materials data with NumPy and Matplotlib.",
  subjectArea: "Materials Science",
  programmingLanguage: "Python",
  defaultContext: "materials-science",
  difficultyLevel: "beginner",
  learningObjectives: [
    "Write and run Python programs from scratch",
    "Work with scientific data using NumPy",
    "Visualise materials properties with Matplotlib",
  ],
  modules: [
    defineModule(1, "Introduction to Python", "What programming is and how to run your first program.", [
      "Introduction to Programming",
      "Setting Up Your Python Environment",
      "Your First Python Program",
    ], {
      // Too early for a lab: learners have only just written their first program.
      hasLab: false,
    }),
    defineModule(2, "Python Fundamentals", "Variables, operators, strings, and input and output.", [
      "Variables and Data Types",
      "Operators and Expressions",
      "Strings",
      "Input and Output",
    ]),
    defineModule(3, "Data Structures", "Organise measurements and properties.", ["Lists", "Tuples", "Dictionaries", "Sets"]),
    defineModule(4, "Control Flow", "Make decisions and repeat calculations.", [
      "Conditional Statements",
      "For Loops",
      "While Loops",
    ]),
    defineModule(5, "Functions", "Package calculations into reusable code.", [
      "Introduction to Functions",
      "Function Arguments",
      "Return Values",
    ]),
    defineModule(6, "Scientific Python", "Fast numerical work and plotting.", [
      "Introduction to NumPy",
      "NumPy Arrays",
      "Array Operations",
      "Introduction to Matplotlib",
    ]),
    defineModule(7, "Computational Materials Science", "Apply everything to real materials problems.", [
      "Representing Materials Data",
      "Working with Scientific Data",
      "Visualizing Materials Properties",
    ]),
  ],
};

export const PYTHON_COURSE_LESSON_COUNT = PYTHON_COURSE.modules.reduce(
  (lessonTotal, courseModule) => lessonTotal + courseModule.lessons.length,
  0,
);

/** Headline facts shown on the landing page and the course home. */
export const PYTHON_COURSE_FACTS = [
  { label: "Level", value: "Beginner" },
  { label: "Modules", value: String(PYTHON_COURSE.modules.length) },
  { label: "Lessons", value: String(PYTHON_COURSE_LESSON_COUNT) },
  { label: "Cost", value: "Free" },
];
