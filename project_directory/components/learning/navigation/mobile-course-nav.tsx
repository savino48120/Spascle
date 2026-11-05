"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { IconButton } from "@/components/ui/icon-button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PYTHON_COURSE } from "@/data/python-course";
import { CourseSidebar } from "./course-sidebar";

/** Course navigation drawer for screens narrower than `lg` (ui_specification §17.2–17.3). */
export function MobileCourseNav({
  publishedLessonKeys,
  exerciseLessonKeys,
}: {
  publishedLessonKeys: string[];
  exerciseLessonKeys: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <IconButton label="Open course navigation" icon={<Menu />} className="lg:hidden" />
      </SheetTrigger>
      <SheetContent>
        <div className="border-b border-border px-4 py-4 pr-14">
          <SheetTitle>{PYTHON_COURSE.title}</SheetTitle>
          <SheetDescription>Modules and lessons</SheetDescription>
        </div>
        <div className="flex-1 overflow-y-auto">
          <CourseSidebar
            publishedLessonKeys={publishedLessonKeys}
            exerciseLessonKeys={exerciseLessonKeys}
            onNavigate={() => setIsOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
