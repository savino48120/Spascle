"use client";

import { CircleCheck, CircleX, RotateCcw, Trophy } from "lucide-react";
import { useId, useState } from "react";
import { CodeWindow } from "@/components/shared/code-window";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MultipleChoiceExercise } from "@/types/lesson";
import { RichText } from "./rich-text";

interface AnswerState {
  selectedOptionId: string | null;
  /** The option that was submitted with "Check answer"; null until checked. */
  checkedOptionId: string | null;
}

const EMPTY_ANSWER: AnswerState = { selectedOptionId: null, checkedOptionId: null };

/**
 * Multiple-choice knowledge check, marked in the browser against each
 * exercise's `correctOptionId` (ui_specification §13.2). Answers are not saved
 * because the MVP has no learner accounts.
 */
export function KnowledgeCheck({ exercises }: { exercises: MultipleChoiceExercise[] }) {
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  const checkedExercises = exercises.filter((exercise) => answers[exercise.id]?.checkedOptionId);
  const correctCount = checkedExercises.filter(
    (exercise) => answers[exercise.id]?.checkedOptionId === exercise.correctOptionId,
  ).length;
  const isComplete = checkedExercises.length === exercises.length;

  function updateAnswer(exerciseId: string, nextAnswer: Partial<AnswerState>) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [exerciseId]: { ...EMPTY_ANSWER, ...previousAnswers[exerciseId], ...nextAnswer },
    }));
  }

  return (
    <div className="flex flex-col gap-4">
      {exercises.map((exercise, index) => (
        <MultipleChoiceQuestion
          key={exercise.id}
          exercise={exercise}
          questionNumber={index + 1}
          questionCount={exercises.length}
          answer={answers[exercise.id] ?? EMPTY_ANSWER}
          onSelect={(optionId) => updateAnswer(exercise.id, { selectedOptionId: optionId })}
          onCheck={() => updateAnswer(exercise.id, { checkedOptionId: answers[exercise.id]?.selectedOptionId ?? null })}
          onRetry={() => updateAnswer(exercise.id, EMPTY_ANSWER)}
        />
      ))}

      <div role="status" aria-live="polite">
        {isComplete && (
          <Alert tone={correctCount === exercises.length ? "success" : "info"}>
            <Trophy aria-hidden />
            <AlertTitle>
              Score: {correctCount} / {exercises.length}
            </AlertTitle>
            <AlertDescription className="flex flex-col items-start gap-3">
              <span>
                {correctCount === exercises.length
                  ? "Every answer is correct. You're ready for the next lesson."
                  : "Review the explanations above, then retry the questions you missed."}
              </span>
              <Button size="sm" variant="secondary" onClick={() => setAnswers({})}>
                <RotateCcw aria-hidden />
                Start again
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}

interface MultipleChoiceQuestionProps {
  exercise: MultipleChoiceExercise;
  questionNumber: number;
  questionCount: number;
  answer: AnswerState;
  onSelect: (optionId: string) => void;
  onCheck: () => void;
  onRetry: () => void;
}

function MultipleChoiceQuestion({
  exercise,
  questionNumber,
  questionCount,
  answer,
  onSelect,
  onCheck,
  onRetry,
}: MultipleChoiceQuestionProps) {
  const radioGroupName = useId();
  const isChecked = answer.checkedOptionId !== null;
  const isCorrect = answer.checkedOptionId === exercise.correctOptionId;

  return (
    <fieldset className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 sm:p-5">
      <legend className="sr-only">
        Question {questionNumber} of {questionCount}
      </legend>
      <div className="flex flex-col gap-1">
        <span aria-hidden className="text-label text-foreground-muted">
          Question {questionNumber} of {questionCount}
        </span>
        <p className="text-body font-medium text-foreground">
          <RichText text={exercise.question} />
        </p>
      </div>

      {exercise.code && <CodeWindow filename="question.py" code={exercise.code} hasRunBadge={false} />}

      <div className="flex flex-col gap-2">
        {exercise.options.map((option) => {
          const isSelected = answer.selectedOptionId === option.id;
          const isCorrectOption = option.id === exercise.correctOptionId;
          const showAsCorrect = isChecked && isCorrect && isCorrectOption;
          const showAsIncorrect = isChecked && !isCorrect && answer.checkedOptionId === option.id;

          return (
            <label
              key={option.id}
              className={cn(
                "flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-border px-3 py-2 text-body-sm text-foreground transition-colors",
                "hover:border-primary-subtle-border hover:bg-primary-subtle has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring",
                isSelected && !isChecked && "border-primary bg-primary-subtle",
                showAsCorrect && "border-success-border bg-success-subtle hover:border-success-border hover:bg-success-subtle",
                showAsIncorrect && "border-error-border bg-error-subtle hover:border-error-border hover:bg-error-subtle",
                isChecked && "cursor-default",
              )}
            >
              <input
                type="radio"
                name={radioGroupName}
                value={option.id}
                checked={isSelected}
                disabled={isChecked}
                onChange={() => onSelect(option.id)}
                className="size-4 shrink-0 accent-primary"
              />
              <span className="flex-1">
                <RichText text={option.text} />
              </span>
              {showAsCorrect && <CircleCheck aria-label="Correct answer" className="size-4 text-success-emphasis" />}
              {showAsIncorrect && <CircleX aria-label="Incorrect answer" className="size-4 text-error-emphasis" />}
            </label>
          );
        })}
      </div>

      <div aria-live="polite">
        {isChecked ? (
          <Alert tone={isCorrect ? "success" : "error"}>
            {isCorrect ? <CircleCheck aria-hidden /> : <CircleX aria-hidden />}
            <AlertTitle>{isCorrect ? "Correct!" : "Not quite. Have another go."}</AlertTitle>
            <AlertDescription className="flex flex-col items-start gap-3">
              <span>
                <RichText text={exercise.explanation} />
              </span>
              {!isCorrect && (
                <Button size="sm" variant="secondary" onClick={onRetry}>
                  <RotateCcw aria-hidden />
                  Try again
                </Button>
              )}
            </AlertDescription>
          </Alert>
        ) : (
          <Button size="sm" onClick={onCheck} disabled={!answer.selectedOptionId}>
            Check answer
          </Button>
        )}
      </div>
    </fieldset>
  );
}
