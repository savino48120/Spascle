import { Fragment } from "react";

const INLINE_PATTERN = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;

/**
 * Renders lesson text with minimal inline formatting: `code`, **bold** and
 * *italic*. Everything else is plain text, so no HTML from content is ever
 * injected into the page.
 */
export function RichText({ text }: { text: string }) {
  const segments = text.split(INLINE_PATTERN);

  return (
    <>
      {segments.map((segment, index) => {
        if (segment.startsWith("`") && segment.endsWith("`") && segment.length > 2) {
          return (
            <code
              key={index}
              className="rounded-sm bg-code-inline px-1 py-0.5 font-mono text-[0.9em] text-code-inline-foreground"
            >
              {segment.slice(1, -1)}
            </code>
          );
        }
        if (segment.startsWith("**") && segment.endsWith("**") && segment.length > 4) {
          return (
            <strong key={index} className="font-semibold text-foreground">
              {segment.slice(2, -2)}
            </strong>
          );
        }
        if (segment.startsWith("*") && segment.endsWith("*") && segment.length > 2) {
          return <em key={index}>{segment.slice(1, -1)}</em>;
        }
        return <Fragment key={index}>{segment}</Fragment>;
      })}
    </>
  );
}
