/**
 * Splits program output into comparable lines: ignores trailing spaces on each
 * line and blank lines at the end, which learners can't see in the output panel.
 */
function toComparableLines(programOutput: string): string[] {
  const lines = programOutput.replace(/\r\n/g, "\n").split("\n").map((line) => line.trimEnd());
  while (lines.length > 0 && lines[lines.length - 1] === "") lines.pop();
  return lines;
}

/**
 * Checks whether a program printed the output an exercise expects.
 *
 * @param actualOutput - Everything the learner's program printed.
 * @param expectedOutput - What a correct solution prints.
 * @param allowsInputPrompts - When true, a line may start with extra text. `input()` prompts are printed
 *   without a newline, so they end up at the start of the next output line, and learners may word them freely.
 * @returns True when every line matches.
 *
 * @example
 * isExpectedOutput("Mass (g): Density: 2.70\n", "Density: 2.70", true); // true
 */
export function isExpectedOutput(actualOutput: string, expectedOutput: string, allowsInputPrompts = false): boolean {
  const actualLines = toComparableLines(actualOutput);
  const expectedLines = toComparableLines(expectedOutput);
  if (actualLines.length !== expectedLines.length) return false;

  return expectedLines.every((expectedLine, lineIndex) =>
    allowsInputPrompts ? actualLines[lineIndex].endsWith(expectedLine) : actualLines[lineIndex] === expectedLine,
  );
}
