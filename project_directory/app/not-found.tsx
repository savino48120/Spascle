import { Compass } from "lucide-react";
import Link from "next/link";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-reading flex-1 items-center px-4 py-16">
      <EmptyState
        headingLevel={1}
        Icon={Compass}
        title="Page not found"
        description="This page doesn't exist. It may have moved, or the link may be mistyped."
        actions={
          <>
            <Button asChild>
              <Link href={ROUTES.python}>Go to the Python course</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={ROUTES.home}>Home</Link>
            </Button>
          </>
        }
      />
    </main>
  );
}
