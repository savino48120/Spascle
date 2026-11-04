/** Placeholder shown while Monaco downloads. Kept separate so it doesn't pull Monaco into the main bundle. */
export function EditorLoadingState() {
  return (
    <div className="flex h-full min-h-30 items-center justify-center bg-code-surface text-caption text-code-comment">
      Loading editor…
    </div>
  );
}
