import { THEME_INIT_SCRIPT } from "@/lib/theme";

/**
 * Sets <html data-theme> during HTML parsing, before first paint, so a saved
 * dark preference never flashes light. Render inside <head> in the root layout.
 * (See node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md)
 */
export function ThemeScript() {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
    />
  );
}
