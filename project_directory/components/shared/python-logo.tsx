import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const UPPER_SNAKE_PATH =
  "M54.919 0c-4.584.022-8.961.413-12.813 1.095C30.76 3.099 28.7 7.295 28.7 15.032v10.219h26.813v3.406H18.638c-7.793 0-14.616 4.684-16.75 13.594-2.462 10.213-2.571 16.586 0 27.25 1.905 7.938 6.457 13.594 14.25 13.594h9.218v-12.25c0-8.85 7.657-16.657 16.75-16.657h26.782c7.454 0 13.406-6.138 13.406-13.625V15.032c0-7.266-6.13-12.725-13.406-13.937C64.282.328 59.502-.02 54.918 0zm-14.5 8.219c2.77 0 5.031 2.298 5.031 5.125 0 2.816-2.262 5.093-5.031 5.093-2.78 0-5.031-2.277-5.031-5.093 0-2.827 2.251-5.125 5.031-5.125z";
const LOWER_SNAKE_PATH =
  "M85.638 28.657v11.906c0 9.231-7.826 17-16.75 17H42.106c-7.336 0-13.406 6.279-13.406 13.625v25.531c0 7.267 6.319 11.541 13.406 13.625 8.488 2.496 16.627 2.947 26.782 0 6.75-1.954 13.406-5.888 13.406-13.625V86.501H55.513v-3.406H95.7c7.793 0 10.696-5.436 13.406-13.594 2.8-8.399 2.68-16.476 0-27.25-1.925-7.758-5.604-13.594-13.406-13.594zM70.575 93.313c2.78 0 5.031 2.278 5.031 5.094 0 2.827-2.251 5.125-5.031 5.125-2.77 0-5.031-2.298-5.031-5.125 0-2.816 2.261-5.094 5.031-5.094z";

/** Official Python logo colours (Python Software Foundation). */
const PYTHON_BLUE = "#3776AB";
const PYTHON_YELLOW = "#FFD43B";

interface PythonLogoProps extends Omit<ComponentProps<"svg">, "children"> {
  /**
   * `color` uses the official blue and yellow. `mono` draws both snakes in
   * `currentColor` (the lower one lighter), for decorative brand-tinted use.
   */
  variant?: "color" | "mono";
}

/**
 * The Python "two snakes" logo as an inline SVG. Decorative by default
 * (`aria-hidden`); pass `aria-label` and `role="img"` when it carries meaning.
 */
export function PythonLogo({ variant = "color", className, ...props }: PythonLogoProps) {
  const isMono = variant === "mono";

  return (
    <svg viewBox="0 0 110 110" aria-hidden className={cn("shrink-0", className)} {...props}>
      <path d={UPPER_SNAKE_PATH} fill={isMono ? "currentColor" : PYTHON_BLUE} />
      <path d={LOWER_SNAKE_PATH} fill={isMono ? "currentColor" : PYTHON_YELLOW} fillOpacity={isMono ? 0.55 : 1} />
    </svg>
  );
}
