"use client";

import { BookOpen, ChevronDown, FlaskConical, SquareTerminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { PYTHON_COURSE } from "@/data/python-course";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

interface CourseSidebarProps {
  /** `"module/lesson"` keys of lessons with written content; others are marked "Soon". */
  publishedLessonKeys: string[];
  /** `"module/lesson"` keys of lessons followed by a hands-on exercise. */
  exerciseLessonKeys: string[];
  /** Called after a link is chosen, e.g. to close the mobile drawer. */
  onNavigate?: () => void;
}

/**
 * Course navigation (ui_specification §8.4): course home, then expandable
 * modules listing each lesson, its hands-on exercise, and the module's lab.
 * The current page is highlighted and its module expands automatically.
 * No completion indicators in the MVP.
 */
export function CourseSidebar({ publishedLessonKeys, exerciseLessonKeys, onNavigate }: CourseSidebarProps) {
  const pathname = usePathname();
  const activeModuleSlug =
    PYTHON_COURSE.modules.find((courseModule) => pathname.startsWith(`${ROUTES.python}/${courseModule.slug}/`))?.slug ??
    null;

  const [expandedModules, setExpandedModules] = useState(
    () => new Set([activeModuleSlug ?? PYTHON_COURSE.modules[0].slug]),
  );
  const [lastActiveModule, setLastActiveModule] = useState(activeModuleSlug);

  // Expand the module of a lesson reached through prev/next links. Adjusting state while rendering avoids an extra effect.
  if (activeModuleSlug !== lastActiveModule) {
    setLastActiveModule(activeModuleSlug);
    if (activeModuleSlug && !expandedModules.has(activeModuleSlug)) {
      setExpandedModules(new Set(expandedModules).add(activeModuleSlug));
    }
  }

  function toggleModule(moduleSlug: string) {
    const nextExpandedModules = new Set(expandedModules);
    if (nextExpandedModules.has(moduleSlug)) nextExpandedModules.delete(moduleSlug);
    else nextExpandedModules.add(moduleSlug);
    setExpandedModules(nextExpandedModules);
  }

  return (
    <nav aria-label="Course" className="flex flex-col gap-1 py-3">
      <SidebarLink href={ROUTES.python} isActive={pathname === ROUTES.python} onNavigate={onNavigate}>
        <BookOpen aria-hidden className="size-4 shrink-0" />
        Course overview
      </SidebarLink>

      <ul className="mt-2 flex flex-col gap-1">
        {PYTHON_COURSE.modules.map((courseModule) => {
          const isExpanded = expandedModules.has(courseModule.slug);
          const lessonListId = `sidebar-module-${courseModule.slug}`;
          return (
            <li key={courseModule.slug}>
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={lessonListId}
                onClick={() => toggleModule(courseModule.slug)}
                className={cn(
                  "flex w-full items-start gap-2 px-4 py-2 text-left transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                  isExpanded && "bg-surface",
                )}
              >
                <span className="flex-1">
                  <span className="block text-caption font-medium text-foreground-muted">
                    Module {courseModule.displayOrder}
                  </span>
                  <span className="block text-body-sm font-semibold text-foreground">{courseModule.title}</span>
                </span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "mt-1 size-4 shrink-0 text-foreground-muted transition-transform",
                    isExpanded && "rotate-180",
                  )}
                />
              </button>

              <ul id={lessonListId} hidden={!isExpanded} className="mt-0.5 mb-2 flex flex-col">
                {courseModule.lessons.map((lesson) => {
                  const lessonKey = `${courseModule.slug}/${lesson.slug}`;
                  const lessonHref = ROUTES.lesson(courseModule.slug, lesson.slug);
                  const exerciseHref = ROUTES.exercise(courseModule.slug, lesson.slug);
                  const isPublished = publishedLessonKeys.includes(lessonKey);
                  return (
                    <li key={lesson.slug}>
                      <SidebarLink href={lessonHref} isActive={pathname === lessonHref} onNavigate={onNavigate} depth={1}>
                        <span className="flex-1">{lesson.title}</span>
                        {!isPublished && <span className="text-caption text-foreground-muted">Soon</span>}
                      </SidebarLink>
                      {exerciseLessonKeys.includes(lessonKey) && (
                        <SidebarLink
                          href={exerciseHref}
                          isActive={pathname === exerciseHref}
                          onNavigate={onNavigate}
                          depth={2}
                          ariaLabel={`Exercise: ${lesson.title}`}
                        >
                          <SquareTerminal aria-hidden className="size-4 shrink-0" />
                          Exercise
                        </SidebarLink>
                      )}
                    </li>
                  );
                })}
                {courseModule.hasLab && (
                  <li>
                    <SidebarLink
                      href={ROUTES.lab(courseModule.slug)}
                      isActive={pathname === ROUTES.lab(courseModule.slug)}
                      onNavigate={onNavigate}
                      depth={1}
                      ariaLabel={`Lab: ${courseModule.title}`}
                    >
                      <FlaskConical aria-hidden className="size-4 shrink-0" />
                      <span className="flex-1">Lab</span>
                      <span className="text-caption text-foreground-muted">Soon</span>
                    </SidebarLink>
                  </li>
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const SIDEBAR_INDENT = { 0: "pl-4", 1: "pl-8", 2: "pl-12" } as const;

interface SidebarLinkProps {
  href: string;
  isActive: boolean;
  /** Nesting level: 0 top level, 1 a module's lessons and lab, 2 a lesson's exercise. */
  depth?: keyof typeof SIDEBAR_INDENT;
  /** Fuller accessible name when the visible text alone is ambiguous (e.g. "Exercise"). */
  ariaLabel?: string;
  onNavigate?: () => void;
  children: ReactNode;
}

function SidebarLink({ href, isActive, depth = 0, ariaLabel, onNavigate, children }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "flex items-center gap-2 py-1.5 pr-4 text-body-sm transition-colors",
        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
        SIDEBAR_INDENT[depth],
        isActive
          ? "bg-primary-subtle font-semibold text-primary-emphasis border-l-0"
          : "text-foreground-secondary hover:bg-surface hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
