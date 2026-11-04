import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Button variants (ui_specification §9.1–9.2). Each variant defines hover,
 * focus-visible, active and disabled states. `accent` (gold) is for rare
 * emphasis only; do not use it as the default secondary action.
 */
const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none",
    "transition-colors duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:border-transparent disabled:bg-disabled disabled:text-disabled-foreground disabled:shadow-none",
    "[&_svg]:pointer-events-none [&_svg]:size-[1.125em] [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary shadow-xs hover:bg-primary-hover active:bg-primary-active",
        secondary:
          "border border-border bg-surface text-foreground shadow-xs hover:border-primary-subtle-border hover:bg-primary-subtle active:bg-primary-subtle",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:border-primary hover:text-primary-emphasis active:bg-primary-subtle",
        ghost: "bg-transparent text-foreground-secondary hover:bg-surface-secondary hover:text-foreground active:bg-divider",
        destructive: "bg-error text-white shadow-xs hover:bg-error-emphasis active:bg-error-emphasis",
        accent: "bg-secondary text-on-secondary shadow-xs hover:bg-secondary-hover",
      },
      size: {
        sm: "h-8 px-3 text-body-sm",
        md: "h-10 px-4 text-body-sm",
        lg: "h-12 px-6 text-body",
        icon: "size-10 [&_svg]:size-5",
        "icon-sm": "size-8 [&_svg]:size-4",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the single child (e.g. a `next/link`) with button styling instead of a `<button>`. */
    asChild?: boolean;
    /** Shows a spinner, disables the button and sets `aria-busy`. Ignored with `asChild`. */
    isLoading?: boolean;
  };

/**
 * Primary action component.
 *
 * @example
 * <Button onClick={runCode} isLoading={isRunning}>Run</Button>
 * <Button asChild variant="secondary"><Link href="/learn">Learn</Link></Button>
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (asChild) {
    return (
      <Slot.Root data-slot="button" className={classes} {...props}>
        {children}
      </Slot.Root>
    );
  }

  return (
    <button
      data-slot="button"
      type="button"
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin" aria-hidden />}
      {children}
    </button>
  );
}

export { Button, buttonVariants };
