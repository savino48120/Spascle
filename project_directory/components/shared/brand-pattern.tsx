import { cn } from "@/lib/utils";
import { PythonLogo } from "./python-logo";

const DOT_GRID = Array.from({ length: 5 }, (_, row) =>
  Array.from({ length: 6 }, (_, column) => ({ cx: 248 + column * 18, cy: 278 + row * 18 })),
).flat();

/**
 * Decorative background for brand panels (landing CTA, course overview):
 * simple plum shapes and a large Python logo that fade in from transparent
 * on the left to full strength on the right.
 *
 * Place inside a `relative overflow-hidden` container and give the panel's
 * content `relative` so it stacks above the pattern.
 */
export function BrandPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 w-full text-primary select-none sm:w-4/5 lg:w-3/5",
        "[mask-image:linear-gradient(to_right,transparent,black_65%)]",
        className,
      )}
    >
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 size-full">
        <circle cx="520" cy="70" r="130" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="2" />
        <circle cx="520" cy="70" r="90" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="2" />
        <circle cx="470" cy="360" r="90" fill="currentColor" fillOpacity="0.07" />
        <rect
          x="300"
          y="50"
          width="64"
          height="64"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="2"
          transform="rotate(18 332 82)"
        />
        <circle cx="352" cy="310" r="16" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
        <circle cx="578" cy="250" r="6" className="fill-secondary" fillOpacity="0.55" />
        <path d="M410 30v20M400 40h20" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
        <path d="M268 170v16M260 178h16" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
        {DOT_GRID.map((dot) => (
          <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r="2" fill="currentColor" fillOpacity="0.22" />
        ))}
      </svg>
      <PythonLogo
        variant="mono"
        className="absolute top-1/2 right-6 size-48 -translate-y-1/2 -rotate-6 opacity-15 sm:right-12 sm:size-64 lg:size-72"
      />
    </div>
  );
}
