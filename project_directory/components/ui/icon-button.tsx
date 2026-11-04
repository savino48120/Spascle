import type { ComponentProps, ReactNode } from "react";
import { Button } from "./button";

type IconButtonProps = Omit<ComponentProps<typeof Button>, "children" | "size" | "asChild"> & {
  icon: ReactNode;
  /** Accessible name; required because the button has no visible text. */
  label: string;
  /** Native tooltip text. Defaults to `label`. */
  tooltip?: string;
  size?: "sm" | "md";
};

/** Square, icon-only button built on `Button`. */
export function IconButton({ icon, label, tooltip, size = "md", variant = "ghost", ...props }: IconButtonProps) {
  return (
    <Button
      aria-label={label}
      title={tooltip ?? label}
      size={size === "sm" ? "icon-sm" : "icon"}
      variant={variant}
      {...props}
    >
      {icon}
    </Button>
  );
}
