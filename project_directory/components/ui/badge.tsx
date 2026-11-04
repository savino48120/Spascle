import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-label [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface text-foreground-secondary",
        primary: "border-primary-subtle-border bg-primary-subtle text-primary-emphasis",
        accent: "border-secondary-subtle-border bg-secondary-subtle text-secondary-emphasis",
        success: "border-success-border bg-success-subtle text-success-emphasis",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    /** Prefix the label with a small brand-coloured dot. */
    hasDot?: boolean;
  };

/** Pill label for section eyebrows, statuses and metadata. */
function Badge({ className, variant, hasDot = false, children, ...props }: BadgeProps) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props}>
      {hasDot && <span aria-hidden className="size-1.5 rounded-full bg-primary" />}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
