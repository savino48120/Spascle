import { LANDING_SECTIONS, ROUTES } from "./routes";

export const SITE = {
  name: "SPASCLE",
  fullName: "Scientific Programming and Computational Science Learning Environment",
  tagline: "Learn scientific programming through the science you already know.",
  description:
    "SPASCLE is a free, self-paced learning environment that helps beginners in materials science, chemistry and other sciences learn Python through field-specific examples, in-browser coding and instant feedback.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Static so pages stay prerenderable under Cache Components. */
  copyrightYear: 2026,
} as const;

export interface NavLink {
  label: string;
  href: string;
}

const HOW_IT_WORKS_LINK: NavLink = { label: "How it works", href: `/#${LANDING_SECTIONS.howItWorks}` };
const SCIENTIFIC_CONTEXTS_LINK: NavLink = { label: "Scientific contexts", href: `/#${LANDING_SECTIONS.applications}` };

/** Python course link, shown as a logo button in the landing header (ui_specification §8.2). */
export const PYTHON_COURSE_LINK: NavLink = { label: "Python", href: ROUTES.python };

/** Landing page header section links (ui_specification §8.2). */
export const LANDING_NAV: NavLink[] = [HOW_IT_WORKS_LINK, SCIENTIFIC_CONTEXTS_LINK];

export const FOOTER_NAV: NavLink[] = [
  { label: "Learn Python", href: ROUTES.python },
  HOW_IT_WORKS_LINK,
  SCIENTIFIC_CONTEXTS_LINK,
  { label: "Course outline", href: `/#${LANDING_SECTIONS.pathway}` },
];

/**
 * Right-hand advertising column in the learning area. Kept in the layout but
 * hidden until ads are introduced; while hidden, lesson content takes its space.
 */
export const IS_LEARNING_AD_RAIL_VISIBLE = false;

export const PRIMARY_CTA: NavLink = { label: "Start Learning", href: ROUTES.python };
