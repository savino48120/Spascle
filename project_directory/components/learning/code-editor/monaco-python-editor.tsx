"use client";

import Editor, { type BeforeMount, type OnMount } from "@monaco-editor/react";
import { useLayoutEffect, useRef, useState } from "react";
import type { EditorTheme } from "@/hooks/use-learning-preferences";
import { EditorLoadingState } from "./editor-loading-state";

const LINE_HEIGHT_PX = 21;
const MIN_HEIGHT_PX = 120;
const MAX_HEIGHT_PX = 420;

const MONACO_THEME: Record<EditorTheme, string> = { dark: "spascle-dark", light: "spascle-light" };

/** Editor themes matched to the SPASCLE code tokens (styles/tokens.css). */
const defineSpascleThemes: BeforeMount = (monaco) => {
  monaco.editor.defineTheme("spascle-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "8b9bb4", fontStyle: "italic" },
      { token: "string", foreground: "86efac" },
      { token: "number", foreground: "f0b43c" },
      { token: "keyword", foreground: "8ab0fb" },
    ],
    colors: {
      "editor.background": "#0f172a",
      "editor.lineHighlightBackground": "#1e293b",
      "editorLineNumber.foreground": "#64748b",
      "editorGutter.background": "#0f172a",
    },
  });
  monaco.editor.defineTheme("spascle-light", {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "5b6b80", fontStyle: "italic" },
      { token: "string", foreground: "15803d" },
      { token: "number", foreground: "8a5a00" },
      { token: "keyword", foreground: "1d5bd8" },
    ],
    colors: {
      "editor.background": "#ffffff",
      "editor.lineHighlightBackground": "#f1f5f9",
      "editorLineNumber.foreground": "#94a3b8",
    },
  });
};

interface MonacoPythonEditorProps {
  value: string;
  onChange: (nextValue: string) => void;
  /** Triggered by Ctrl/Cmd + Enter inside the editor. */
  onRun: () => void;
  theme: EditorTheme;
  ariaLabel: string;
}

/**
 * Monaco editor configured for short Python learning exercises. Grows with
 * the code up to MAX_HEIGHT_PX. Load it with `next/dynamic` (`ssr: false`):
 * Monaco needs the browser and is fetched from its CDN on first use.
 */
export default function MonacoPythonEditor({ value, onChange, onRun, theme, ariaLabel }: MonacoPythonEditorProps) {
  const onRunRef = useRef(onRun);
  useLayoutEffect(() => {
    onRunRef.current = onRun;
  });

  // Start from the line count, then follow Monaco's real content height so wrapped lines on narrow screens aren't clipped.
  const [heightPx, setHeightPx] = useState(() => clampHeight(value.split("\n").length * LINE_HEIGHT_PX + 24));

  const handleMount: OnMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => onRunRef.current());
    editor.onDidContentSizeChange((sizeChange) => {
      if (sizeChange.contentHeightChanged) setHeightPx(clampHeight(sizeChange.contentHeight));
    });
    setHeightPx(clampHeight(editor.getContentHeight()));
  };

  return (
    <div style={{ height: heightPx }}>
      <Editor
        language="python"
        value={value}
        onChange={(nextValue) => onChange(nextValue ?? "")}
        theme={MONACO_THEME[theme]}
        beforeMount={defineSpascleThemes}
        onMount={handleMount}
        loading={<EditorLoadingState />}
        options={{
          ariaLabel,
          fontFamily: getCodeFontFamily(),
          fontSize: 14,
          lineHeight: LINE_HEIGHT_PX,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          insertSpaces: true,
          padding: { top: 12, bottom: 12 },
          renderLineHighlight: "line",
          overviewRulerLanes: 0,
          scrollbar: { alwaysConsumeMouseWheel: false },
          wordWrap: "on",
        }}
      />
    </div>
  );
}

function clampHeight(contentHeightPx: number) {
  return Math.min(Math.max(contentHeightPx, MIN_HEIGHT_PX), MAX_HEIGHT_PX);
}

/** Monaco measures fonts itself, so it needs the real family name next/font generated, not a CSS variable. */
function getCodeFontFamily() {
  const generatedFamily = getComputedStyle(document.documentElement).getPropertyValue("--font-jetbrains-mono").trim();
  return `${generatedFamily ? `${generatedFamily}, ` : ""}ui-monospace, SFMono-Regular, Menlo, monospace`;
}
