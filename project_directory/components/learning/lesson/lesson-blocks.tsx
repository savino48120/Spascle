import { Info, Lightbulb, TriangleAlert, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ContextExampleSwitch } from "@/components/learning/context/context-example-switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SCIENTIFIC_CONTEXTS } from "@/lib/constants/contexts";
import { cn } from "@/lib/utils";
import type { ScientificContextSlug } from "@/types/content";
import type { CalloutTone, ContextExampleVariant, LessonBlock } from "@/types/lesson";
import { CodeExample } from "./code-example";
import { RichText } from "./rich-text";

const CALLOUT_ICONS: Record<CalloutTone, { Icon: LucideIcon; defaultTitle: string }> = {
  info: { Icon: Info, defaultTitle: "Note" },
  tip: { Icon: Lightbulb, defaultTitle: "Tip" },
  warning: { Icon: TriangleAlert, defaultTitle: "Watch out" },
};

/** Renders a lesson's content blocks in order (database_design §5.3 block types). */
export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, index) => (
        <LessonBlockView key={index} block={block} blockIndex={index} />
      ))}
    </div>
  );
}

function LessonBlockView({ block, blockIndex }: { block: LessonBlock; blockIndex: number }) {
  switch (block.type) {
    case "heading":
      return <h2 className="mt-6 text-h2 text-foreground first:mt-0">{block.text}</h2>;
    case "paragraph":
      return (
        <p className="text-body text-foreground-secondary">
          <RichText text={block.text} />
        </p>
      );
    case "explanation":
      return (
        <p className="border-l-2 border-secondary pl-4 text-body-sm text-foreground-secondary">
          <RichText text={block.text} />
        </p>
      );
    case "list": {
      const ListTag = block.isOrdered ? "ol" : "ul";
      return (
        <ListTag
          className={cn(
            "flex flex-col gap-2 pl-6 text-body text-foreground-secondary marker:text-foreground-muted",
            block.isOrdered ? "list-decimal" : "list-disc",
          )}
        >
          {block.items.map((listItem) => (
            <li key={listItem}>
              <RichText text={listItem} />
            </li>
          ))}
        </ListTag>
      );
    }
    case "code":
      return <CodeExample {...block} label={block.title ?? `Example ${blockIndex + 1}`} />;
    case "callout": {
      const { Icon, defaultTitle } = CALLOUT_ICONS[block.tone];
      return (
        <Alert tone={block.tone}>
          <Icon aria-hidden />
          <AlertTitle>
            <RichText text={block.title ?? defaultTitle} />
          </AlertTitle>
          <AlertDescription>
            <RichText text={block.text} />
          </AlertDescription>
        </Alert>
      );
    }
    case "contextExample": {
      const renderedVariants: Partial<Record<ScientificContextSlug, ReactNode>> = {};
      for (const [contextSlug, variant] of Object.entries(block.variants) as [ScientificContextSlug, ContextExampleVariant][]) {
        renderedVariants[contextSlug] = <ContextVariantView variant={variant} label={`${block.title} (${getContextName(contextSlug)})`} />;
      }
      return <ContextExampleSwitch title={block.title} renderedVariants={renderedVariants} />;
    }
  }
}

function ContextVariantView({ variant, label }: { variant: ContextExampleVariant; label: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-body text-foreground-secondary">
        <RichText text={variant.intro} />
      </p>
      <CodeExample {...variant} label={label} />
      {variant.explanation && (
        <p className="border-l-2 border-secondary pl-4 text-body-sm text-foreground-secondary">
          <RichText text={variant.explanation} />
        </p>
      )}
    </div>
  );
}

function getContextName(contextSlug: ScientificContextSlug) {
  return SCIENTIFIC_CONTEXTS.find((scientificContext) => scientificContext.slug === contextSlug)?.name ?? contextSlug;
}
