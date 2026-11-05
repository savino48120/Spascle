import { SITE } from "@/lib/constants/site";

const GTAG_INIT_SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.googleAnalyticsId}');`;

/**
 * Google Analytics 4 tag (gtag.js), as supplied by Google. Render it first
 * inside <head> in the root layout so tracking starts as early as possible on
 * every page. Client-side navigations are recorded by GA4's enhanced
 * measurement ("page changes based on browser history events").
 *
 * Only rendered in production builds, so local development doesn't add visits.
 */
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${SITE.googleAnalyticsId}`} />
      <script
        type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: GTAG_INIT_SCRIPT }}
      />
    </>
  );
}
