import { LandingHeader } from "@/components/layout/landing-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";

export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SkipLink />
      <LandingHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
