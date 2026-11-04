import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PythonLogo } from "@/components/shared/python-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LANDING_NAV, PRIMARY_CTA, PYTHON_COURSE_LINK } from "@/lib/constants/site";
import { SiteLogo } from "./site-logo";

/**
 * Landing page header (ui_specification §8.2): brand, section links, the
 * Python course button, theme switcher and primary CTA.
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/100">
      <Container className="flex h-header items-center justify-between gap-4">
        <SiteLogo />

        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center md:flex">
            {LANDING_NAV.map((navLink) => (
              <li key={navLink.href}>
                <Link
                  href={navLink.href}
                  className="rounded-md px-3 py-2 text-body-sm font-medium text-foreground-secondary transition-colors hover:text-primary-emphasis"
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex sm:h-10 sm:px-3 [&_svg]:size-5">
            <Link href={PYTHON_COURSE_LINK.href}>
              <PythonLogo />
              {PYTHON_COURSE_LINK.label}
            </Link>
          </Button>
          <ThemeToggle />
          <Button asChild size="sm" className="sm:h-10 sm:px-4">
            <Link href={PRIMARY_CTA.href}>
              {PRIMARY_CTA.label}
              <ArrowRight aria-hidden className="hidden sm:block" />
            </Link>
          </Button>
        </nav>
      </Container>
    </header>
  );
}
