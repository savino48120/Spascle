"use client";

import { useLayoutEffect } from "react";
import { applyTheme, getThemePreference } from "@/lib/theme";

/**
 * Re-applies the theme after React's dev Strict Mode remount clears the
 * attribute the inline script set. No visible effect in production.
 */
export function ThemeSync() {
  useLayoutEffect(() => {
    applyTheme(getThemePreference());
  }, []);
  return null;
}
