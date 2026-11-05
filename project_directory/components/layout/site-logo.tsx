import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  /** Classes for the "SPASCLE" text, e.g. to hide it on narrow screens. The link keeps its accessible name. */
  wordmarkClassName?: string;
}

/** SPASCLE wordmark linking to the landing page. Placeholder mark until a final logo exists. */
export function SiteLogo({ className, wordmarkClassName }: SiteLogoProps) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} home`}
      className={cn("inline-flex items-center gap-2 rounded-md text-foreground", className)}
    >
      <span aria-hidden className="relative grid size-8 place-items-center rounded-md bg-primary font-mono text-body font-bold text-on-primary">
        S
        <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background bg-secondary" />
      </span>
      <span className={cn("text-h4 font-bold tracking-tight", wordmarkClassName)}>{SITE.name}</span>
    </Link>
  );
}
