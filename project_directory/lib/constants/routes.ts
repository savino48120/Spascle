/**
 * Central route map. Always link through these so URLs stay consistent
 * when pages are added (information_architecture.md §3–4).
 *
 * Only `home` exists as a page right now; the learning-area routes are
 * referenced from the landing page and will be built later.
 */
export const ROUTES = {
  home: "/",
  learn: "/learn",
  /** Python learning home (SCR-002). */
  python: "/learn/python",
  lesson: (moduleSlug: string, lessonSlug: string) =>
    `/learn/python/${moduleSlug}/${lessonSlug}`,
  /** Hands-on coding exercise that follows a lesson. */
  exercise: (moduleSlug: string, lessonSlug: string) =>
    `/learn/python/${moduleSlug}/${lessonSlug}/exercise`,
  /** Guided labs (placeholder until labs are published). */
  labs: "/learn/python/labs",
} as const;

/** In-page anchors on the landing page (used by header/footer links). */
export const LANDING_SECTIONS = {
  about: "about",
  howItWorks: "how-it-works",
  applications: "applications",
  pathway: "pathway",
} as const;
