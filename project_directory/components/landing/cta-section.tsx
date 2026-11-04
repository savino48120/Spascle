import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrandPattern } from "@/components/shared/brand-pattern";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PRIMARY_CTA } from "@/lib/constants/site";

/** Closing call to action (ui_specification §10.1 item 6). */
export function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="py-20">
      <Container>
        <div className="relative isolate flex flex-col items-center gap-6 overflow-hidden rounded-xl border border-primary-subtle-border bg-linear-to-br from-gradient-strong to-gradient-soft px-6 py-16 text-center">
          <BrandPattern className="-z-10" />
          <h2 id="cta-heading" className="max-w-2xl text-h1 text-balance text-foreground">
            Write your first line of scientific Python today
          </h2>
          <p className="max-w-xl text-body-lg text-foreground-secondary">
            No installation and no account. Open the first lesson and start coding in your browser.
          </p>
          <Button asChild size="lg">
            <Link href={PRIMARY_CTA.href}>
              {PRIMARY_CTA.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
