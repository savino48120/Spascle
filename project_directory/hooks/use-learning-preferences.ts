"use client";

import { DEFAULT_CONTEXT, SCIENTIFIC_CONTEXTS } from "@/lib/constants/contexts";
import { createLocalPreference } from "@/lib/local-preference";
import type { ScientificContextSlug } from "@/types/content";

/** Global scientific context preference (information_architecture §5.1). Defaults to materials science. */
export const useGlobalContext = createLocalPreference<ScientificContextSlug>(
  "spascle-context",
  SCIENTIFIC_CONTEXTS.map((scientificContext) => scientificContext.slug),
  DEFAULT_CONTEXT,
);

export type EditorTheme = "dark" | "light";

/** Code editor colour theme. Dark by default in both site themes (ui_specification §12.2). */
export const useEditorTheme = createLocalPreference<EditorTheme>("spascle-editor-theme", ["dark", "light"], "dark");
