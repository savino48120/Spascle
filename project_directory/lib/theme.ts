/**
 * Theme preference store (ui_specification §5.4).
 * - Preference: light | dark | system (default system).
 * - Saved to localStorage; a manual choice overrides the OS preference.
 * - Resolved theme is written to <html data-theme>, which drives the tokens.
 *
 * THEME_INIT_SCRIPT runs inline in <head> before first paint (no flash);
 * the functions below keep React in sync afterwards.
 */

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "spascle-theme";
const THEME_EVENT = "spascle-theme-change";
const DARK_QUERY = "(prefers-color-scheme: dark)";

/** Kept dependency-free and minified-friendly: it is inlined as a string. */
export const THEME_INIT_SCRIPT = `(function(){try{var p=localStorage.getItem("${THEME_STORAGE_KEY}");var d=p==="dark"||((p!=="light")&&window.matchMedia("${DARK_QUERY}").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){}})()`;

function isPreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function getThemePreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isPreference(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference !== "system") return preference;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;
  root.classList.add("theme-switching");
  root.setAttribute("data-theme", resolveTheme(preference));
  // Re-enable transitions on the next frame.
  requestAnimationFrame(() => root.classList.remove("theme-switching"));
}

export function setThemePreference(preference: ThemePreference) {
  try {
    if (preference === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    /* storage unavailable: still apply for this session */
  }
  applyTheme(preference);
  window.dispatchEvent(new Event(THEME_EVENT));
}

/** For useSyncExternalStore: fires on our own changes, other tabs, and OS changes. */
export function subscribeToTheme(onChange: () => void) {
  const media = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    if (getThemePreference() === "system") applyTheme("system");
    onChange();
  };
  const onStorage = (e: StorageEvent) => {
    if (e.key !== THEME_STORAGE_KEY) return;
    applyTheme(getThemePreference());
    onChange();
  };
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", onSystemChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", onSystemChange);
  };
}
