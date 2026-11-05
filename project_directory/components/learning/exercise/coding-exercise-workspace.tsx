"use client";

import { CircleCheck, CircleDashed, Eye, EyeOff, Lightbulb } from "lucide-react";
import { useId, useState } from "react";
import { TryItEditor } from "@/components/learning/code-editor/try-it-editor";
import { RichText } from "@/components/learning/lesson/rich-text";
import { CodeWindow } from "@/components/shared/code-window";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { isExpectedOutput } from "@/lib/exercise-check";
import type { RunOutcome } from "@/lib/python-runner";
import type { CodingExerciseVariant } from "@/types/lesson";

type AnswerCheck = "unchecked" | "correct" | "incorrect";

interface CodingExerciseWorkspaceProps {
  codingExercise: Pick<CodingExerciseVariant, "title" | "starterCode" | "stdin" | "expectedOutput" | "hints" | "solution">;
}

/**
 * Where the learner solves a coding exercise: an editor whose every successful
 * run is checked against the expected output, hints revealed one at a time,
 * and the model solution behind a button. Nothing is saved (no accounts in the MVP).
 */
export function CodingExerciseWorkspace({ codingExercise }: CodingExerciseWorkspaceProps) {
  const [answerCheck, setAnswerCheck] = useState<AnswerCheck>("unchecked");
  const [revealedHintCount, setRevealedHintCount] = useState(0);
  const [isSolutionVisible, setIsSolutionVisible] = useState(false);
  const hintListId = useId();
  const solutionPanelId = useId();

  const hintCount = codingExercise.hints.length;
  const hasMoreHints = revealedHintCount < hintCount;

  function handleRunComplete(runOutcome: RunOutcome, programOutput: string) {
    if (runOutcome.status !== "success") {
      setAnswerCheck("unchecked");
      return;
    }
    const isCorrect = isExpectedOutput(programOutput, codingExercise.expectedOutput, Boolean(codingExercise.stdin));
    setAnswerCheck(isCorrect ? "correct" : "incorrect");
  }

  return (
    <div className="flex flex-col gap-6">
      <section aria-labelledby="your-solution-heading" className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 id="your-solution-heading" className="text-h3 text-foreground">
            Your solution
          </h3>
          <p className="text-body text-foreground-secondary">
            Write your program below and press <strong className="font-semibold text-foreground">Run</strong>. Each run is
            checked against the expected output.
          </p>
        </div>

        <TryItEditor
          initialCode={codingExercise.starterCode}
          initialStdin={codingExercise.stdin}
          label={codingExercise.title}
          onRunComplete={handleRunComplete}
        />

        <div aria-live="polite">
          {answerCheck === "correct" && (
            <Alert tone="success">
              <CircleCheck aria-hidden />
              <AlertTitle>Correct! Your output matches.</AlertTitle>
              <AlertDescription>Well done. Compare your code with the solution, or move on to the next lesson.</AlertDescription>
            </Alert>
          )}
          {answerCheck === "incorrect" && (
            <Alert tone="warning">
              <CircleDashed aria-hidden />
              <AlertTitle>Not quite yet</AlertTitle>
              <AlertDescription>
                Your program ran, but its output doesn&apos;t match the expected output. Check spelling, spacing and decimal
                places, or show a hint.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </section>

      <section aria-labelledby="exercise-help-heading" className="flex flex-col gap-4 border-t border-divider pt-6">
        <h3 id="exercise-help-heading" className="text-h4 text-foreground">
          Need help?
        </h3>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            onClick={() => setRevealedHintCount((previousCount) => previousCount + 1)}
            disabled={!hasMoreHints}
            aria-controls={hintListId}
          >
            <Lightbulb aria-hidden />
            {revealedHintCount === 0
              ? "Show a hint"
              : hasMoreHints
                ? `Show another hint (${revealedHintCount + 1} of ${hintCount})`
                : "No more hints"}
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsSolutionVisible((wasVisible) => !wasVisible)}
            aria-expanded={isSolutionVisible}
            aria-controls={solutionPanelId}
          >
            {isSolutionVisible ? <EyeOff aria-hidden /> : <Eye aria-hidden />}
            {isSolutionVisible ? "Hide solution" : "Reveal solution"}
          </Button>
        </div>

        <ol id={hintListId} aria-live="polite" className="flex flex-col gap-3 empty:hidden">
          {codingExercise.hints.slice(0, revealedHintCount).map((hint, hintIndex) => (
            <li key={hint}>
              <Alert tone="tip">
                <Lightbulb aria-hidden />
                <AlertTitle>Hint {hintIndex + 1}</AlertTitle>
                <AlertDescription>
                  <RichText text={hint} />
                </AlertDescription>
              </Alert>
            </li>
          ))}
        </ol>

        <div id={solutionPanelId} hidden={!isSolutionVisible} className="flex flex-col gap-2">
          <p className="text-body-sm text-foreground-secondary">
            One possible solution. Other programs that print the same output are correct too.
          </p>
          <CodeWindow filename="solution.py" code={codingExercise.solution} output={codingExercise.expectedOutput} hasRunBadge={false} />
        </div>
      </section>
    </div>
  );
}
