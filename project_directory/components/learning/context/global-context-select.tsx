"use client";

import { useGlobalContext } from "@/hooks/use-learning-preferences";
import { SCIENTIFIC_CONTEXTS } from "@/lib/constants/contexts";
import { ContextSelect } from "./context-select";

/**
 * Header control for the learner's preferred scientific context across all
 * lessons (information_architecture §5.1). Saved on this device.
 */
export function GlobalContextSelect() {
  const [globalContext, setGlobalContext] = useGlobalContext();

  return (
    <div className="flex min-w-0 items-center gap-2">
      <span className="hidden text-label text-foreground-secondary xl:inline">Default field</span>
      <ContextSelect
        value={globalContext}
        onValueChange={setGlobalContext}
        contexts={SCIENTIFIC_CONTEXTS}
        ariaLabel="Default scientific field for all lessons"
        menuLabel="Use examples from"
        triggerClassName="sm:w-52"
      />
    </div>
  );
}
