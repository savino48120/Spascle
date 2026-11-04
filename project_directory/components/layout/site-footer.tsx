import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FOOTER_NAV, SITE } from "@/lib/constants/site";
import { SiteLogo } from "./site-logo";

/** Public site footer (ui_specification §10.5): brand summary and essential links only. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <SiteLogo />
          <p className="text-body-sm text-foreground-secondary">{SITE.fullName}.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:gap-6">
            {FOOTER_NAV.map((navLink) => (
              <li key={navLink.href}>
                <Link
                  href={navLink.href}
                  className="text-body-sm text-foreground-secondary transition-colors hover:text-primary-emphasis"
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="border-t border-divider py-6">
        <p className="text-caption text-foreground-muted">
          © {SITE.copyrightYear} {SITE.name}. Free to learn, no account required.
        </p>
      </Container>
    </footer>
  );
}
