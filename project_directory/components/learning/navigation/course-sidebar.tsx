"use client";

import { BookOpen, ChevronDown, FlaskConical } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { PYTHON_COURSE } from "@/data/python-course";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

interface CourseSidebarProps {
  /** `"module/lesson"` keys of lessons with written content; others are marked "Soon". */
  publishedLessonKeys: string[];
  /** Called after a link is chosen, e.g. to close the mobile drawer. */
  onNavigate?: () => void;
}

/**
 * Course navigation: course home, expandable modules with their lessons, and
 * guided labs (ui_specification §8.4). The active lesson (also while on its
 * hands-on exercise) is highlighted and its module expands automatically. No completion indicators in the MVP.
 */
export function CourseSidebar({ publishedLessonKeys, onNavigate }: CourseSidebarProps) {
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
                    "mt-1 size-4 shrinPythonk-0 text-foreground-muted transition-transform",
                    isExpanded && "rotate-180",
                  )}
                />
              </button>

              <ul id={lessonListId} hidden={!isExpanded} className="mt-0.5 mb-2 flex flex-col">
                {courseModule.lessons.map((lesson) => {
                  const lessonHref = ROUTES.lesson(courseModule.slug, lesson.slug);
                  const isPublished = publishedLessonKeys.includes(`${courseModule.slug}/${lesson.slug}`);
                  return (
                    <li key={lesson.slug}>
                      <SidebarLink
                        href={lessonHref}
                        isActive={pathname === lessonHref || pathname.startsWith(`${lessonHref}/`)}
                        onNavigate={onNavigate}
                        isIndented
                      >
                        <span className="flex-1">{lesson.title}</span>
                        {!isPublished && <span className="text-caption text-foreground-muted">Soon</span>}
                      </SidebarLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      <div className="mt-2 border-t border-divider pt-3">
        <SidebarLink href={ROUTES.labs} isActive={pathname === ROUTES.labs} onNavigate={onNavigate}>
          <FlaskConical aria-hidden className="size-4 shrink-0" />
          <span className="flex-1">Guided labs</span>
          <span className="text-caption text-foreground-muted">Soon</span>
        </SidebarLink>
      </div>
    </nav>
  );
}

interface SidebarLinkProps {
  href: string;
  isActive: boolean;
  isIndented?: boolean;
  onNavigate?: () => void;
  children: ReactNode;
}

function SidebarLink({ href, isActive, isIndented = false, onNavigate, children }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex items-center gap-2 py-1.5 pr-4 text-body-sm transition-colors",
        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
        isIndented ? "pl-8" : "pl-4",
        isActive
          ? "bg-primary-subtle font-semibold text-primary-emphasis border-l-0"
          : "text-foreground-secondary hover:bg-surface hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
