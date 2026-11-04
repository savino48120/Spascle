/** Placeholder shown while a lesson streams in after a client navigation. Mirrors the lesson header layout. */
export function LessonSkeleton() {
  return (
    <div role="status" aria-label="Loading lesson" className="flex animate-pulse flex-col gap-6">
      <div className="h-3 w-64 rounded-sm bg-surface-secondary" />
      <div className="flex flex-col gap-3">
        <div className="h-3 w-20 rounded-sm bg-secondary-subtle" />
        <div className="h-9 w-3/4 rounded-md bg-surface-secondary" />
        <div className="h-5 w-full rounded-sm bg-surface-secondary" />
      </div>
      <div className="h-32 rounded-xl border border-border bg-surface-secondary" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-full rounded-sm bg-surface-secondary" />
        <div className="h-4 w-11/12 rounded-sm bg-surface-secondary" />
        <div className="h-4 w-4/5 rounded-sm bg-surface-secondary" />
      </div>
      <div className="h-40 rounded-lg bg-code-surface" />
    </div>
  );
}
