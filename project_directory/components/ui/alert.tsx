import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-1 rounded-lg border px-4 py-3 text-body-sm text-foreground [&>svg]:mt-0.5 [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      tone: {
        info: "border-info-border bg-info-subtle [&>svg]:text-info-emphasis",
        tip: "border-primary-subtle-border bg-primary-subtle [&>svg]:text-primary-emphasis",
        warning: "border-warning-border bg-warning-subtle [&>svg]:text-warning-emphasis",
        success: "border-success-border bg-success-subtle [&>svg]:text-success-emphasis",
        error: "border-error-border bg-error-subtle [&>svg]:text-error-emphasis",
      },
    },
    defaultVariants: { tone: "info" },
  },
);

/**
 * shadcn/ui Alert with semantic tones (ui_specification §4.5). Always pair the
 * tone with an icon and a title so meaning never relies on colour alone.
 */
function Alert({ className, tone, ...props }: ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div data-slot="alert" className={cn(alertVariants({ tone }), className)} {...props} />;
}

function AlertTitle({ className, ...props }: ComponentProps<"p">) {
  return <p data-slot="alert-title" className={cn("col-start-2 font-semibold", className)} {...props} />;
}

function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="alert-description" className={cn("col-start-2 text-foreground-secondary", className)} {...props} />
  );
}

export { Alert, AlertDescription, AlertTitle };
