"use client";

import { useSyncExternalStore } from "react";
import {
  getThemePreference,
  setThemePreference,
  subscribeToTheme,
  type ThemePreference,
} from "@/lib/theme";

/**
 * Current theme preference. Returns `null` during SSR/hydration (the server
 * can't know localStorage), so render a neutral placeholder in that case.
 */
export function useTheme() {
  const preference = useSyncExternalStore<ThemePreference | null>(
    subscribeToTheme,
    getThemePreference,
    () => null,
  );
  return { preference, setPreference: setThemePreference };
}
