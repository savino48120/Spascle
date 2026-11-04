export type PythonTokenKind = "plain" | "comment" | "string" | "number" | "function";

export interface PythonToken {
  text: string;
  kind: PythonTokenKind;
}

const TOKEN_PATTERN = /(f?"[^"]*"|f?'[^']*')|(\b\d+(?:\.\d+)?\b)|(\b(?:print|len|round|range|sum|abs)\b(?=\())/g;

/**
 * Minimal Python syntax tokenizer for short, static display snippets
 * (comments, strings, numbers, common built-ins). Not a full parser; use a
 * real editor/highlighter for learner code.
 *
 * @param line - A single line of Python source.
 * @returns Tokens in source order; concatenated `text` equals `line`.
 */
export function tokenizePythonLine(line: string): PythonToken[] {
  const tokens: PythonToken[] = [];
  const commentStart = findCommentStart(line);
  const codePart = commentStart === -1 ? line : line.slice(0, commentStart);

  let cursor = 0;
  for (const match of codePart.matchAll(TOKEN_PATTERN)) {
    const start = match.index;
    if (start > cursor) tokens.push({ text: codePart.slice(cursor, start), kind: "plain" });
    const kind: PythonTokenKind = match[1] ? "string" : match[2] ? "number" : "function";
    tokens.push({ text: match[0], kind });
    cursor = start + match[0].length;
  }
  if (cursor < codePart.length) tokens.push({ text: codePart.slice(cursor), kind: "plain" });
  if (commentStart !== -1) tokens.push({ text: line.slice(commentStart), kind: "comment" });

  return tokens;
}

/** Index of the first `#` that is outside a string literal, or -1. */
function findCommentStart(line: string) {
  let openQuote: string | null = null;
  for (let index = 0; index < line.length; index++) {
    const character = line[index];
    if (openQuote) {
      if (character === openQuote) openQuote = null;
    } else if (character === '"' || character === "'") {
      openQuote = character;
    } else if (character === "#") {
      return index;
    }
  }
  return -1;
}
