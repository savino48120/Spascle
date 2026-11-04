"use client";

import { ChevronUp, SquareTerminal } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { TryItEditor } from "./try-it-editor";

interface TryItToggleProps {
  code: string;
  stdin?: string;
  label: string;
}

/**
 * "Try it hands-on" button that opens an editable copy of an example directly
 * below it, so learners never leave the lesson (information_architecture §6).
 * The editor (and Monaco) only loads once opened.
 */
export function TryItToggle({ code, stdin, label }: TryItToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="flex flex-col gap-3">
      <Button
        variant={isOpen ? "secondary" : "primary"}
        size="sm"
        className="self-start"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
      >
        {isOpen ? <ChevronUp aria-hidden /> : <SquareTerminal aria-hidden />}
        {isOpen ? "Hide editor" : "Try it hands-on"}
      </Button>
      <div id={panelId} hidden={!isOpen}>
        {isOpen && <TryItEditor initialCode={code} initialStdin={stdin} label={label} />}
      </div>
    </div>
  );
}
