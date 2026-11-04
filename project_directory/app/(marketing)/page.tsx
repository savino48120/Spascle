import type { Metadata } from "next";
import { AboutSection } from "@/components/landing/about-section";
import { ContextsSection } from "@/components/landing/contexts-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { PathwaySection } from "@/components/landing/pathway-section";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name}: learn Python through the science you know`,
    description: SITE.description,
  },
};

/** Landing page (SCR-001). */
export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ContextsSection />
      <PathwaySection />
      <CtaSection />
    </>
  );
}
