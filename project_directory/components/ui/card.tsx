import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** shadcn/ui Card, styled with SPASCLE tokens (ui_specification §9.5). */
function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("flex flex-col gap-4 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-xs", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("flex flex-col gap-1.5", className)} {...props} />;
}

function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("text-h4 text-foreground", className)} {...props} />;
}

function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return <p data-slot="card-description" className={cn("text-body-sm text-foreground-secondary", className)} {...props} />;
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-content" className={className} {...props} />;
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
