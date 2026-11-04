import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Id for the heading, so the section can use `aria-labelledby`. */
  id: string;
  align?: "center" | "start";
  className?: string;
}

/** Eyebrow badge, H2 and supporting copy used at the top of each landing section. */
export function SectionHeading({ eyebrow, title, description, id, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "items-start",
        className,
      )}
    >
      <Badge hasDot>{eyebrow}</Badge>
      <h2 id={id} className="text-h1 text-balance text-foreground">
        {title}
      </h2>
      {description && <p className="text-body-lg text-pretty text-foreground-secondary">{description}</p>}
    </div>
  );
}
