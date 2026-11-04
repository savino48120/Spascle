"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { useTheme } from "@/hooks/use-theme";
import type { ThemePreference } from "@/lib/theme";

const ORDER: ThemePreference[] = ["light", "dark", "system"];

const META: Record<ThemePreference, { label: string; Icon: typeof Sun }> = {
  light: { label: "Light", Icon: Sun },
  dark: { label: "Dark", Icon: Moon },
  system: { label: "System", Icon: Monitor },
};

/**
 * Icon-only theme switcher (ui_specification §8.2): cycles
 * Light → Dark → System. The icon shows the active preference and the
 * accessible label names both the current and the next theme.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { preference, setPreference } = useTheme();

  if (preference === null) {
    // Same footprint as the real button to avoid layout shift on hydrate.
    return <IconButton label="Change theme" variant="ghost" className={className} disabled icon={<Sun />} />;
  }

  const next = ORDER[(ORDER.indexOf(preference) + 1) % ORDER.length];
  const { label, Icon } = META[preference];

  return (
    <IconButton
      label={`Theme: ${label}. Switch to ${META[next].label.toLowerCase()} theme`}
      tooltip={`Theme: ${label}`}
      variant="ghost"
      className={className}
      onClick={() => setPreference(next)}
      icon={<Icon />}
    />
  );
}
