"use client";

import { CONTEXT_ICONS } from "@/components/shared/context-icons";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { ScientificContext, ScientificContextSlug } from "@/types/content";
import { Select as SelectPrimitive } from "radix-ui";

interface ContextSelectProps {
  /** `undefined` shows the placeholder (used when the current context isn't offered). */
  value: ScientificContextSlug | undefined;
  onValueChange: (nextContext: ScientificContextSlug) => void;
  contexts: ScientificContext[];
  /** Accessible name for the trigger. */
  ariaLabel: string;
  menuLabel: string;
  placeholder?: string;
  triggerClassName?: string;
}

/**
 * Dropdown for choosing a scientific context, shared by the global and
 * lesson-level selectors. The trigger is filled with the primary colour so
 * the field switch stands out.
 */
export function ContextSelect({
  value,
  onValueChange,
  contexts,
  ariaLabel,
  menuLabel,
  placeholder = "Choose a field",
  triggerClassName,
}: ContextSelectProps) {
  return (
    <Select
      value={value ?? ""}
      onValueChange={(nextValue) => {
        const matchedContext = contexts.find((scientificContext) => scientificContext.slug === nextValue);
        if (matchedContext) onValueChange(matchedContext.slug);
      }}
    >
      <SelectTrigger
        aria-label={ariaLabel}
        className={cn(
          "border-primary bg-primary font-medium text-on-primary hover:border-primary-hover hover:bg-primary-hover",
          "data-[state=open]:border-primary-hover data-[state=open]:bg-primary-hover [&_svg]:text-on-primary",
          triggerClassName,
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectPrimitive.Group>
          <SelectLabel>{menuLabel}</SelectLabel>
          {contexts.map((scientificContext) => {
            const ContextIcon = CONTEXT_ICONS[scientificContext.slug];
            return (
              <SelectItem key={scientificContext.slug} value={scientificContext.slug}>
                <ContextIcon aria-hidden className="text-primary-emphasis" />
                <span className="truncate">{scientificContext.name}</span>
              </SelectItem>
            );
          })}
        </SelectPrimitive.Group>
      </SelectContent>
    </Select>
  );
}
