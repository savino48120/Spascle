"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes";

/**
 * Returns to the previous page in the browser history. When the page was
 * opened directly (no history to go back to), it links to the course overview.
 */
export function BackButton() {
  const router = useRouter();

  return (
    <Button asChild>
      <Link
        href={ROUTES.python}
        onClick={(event) => {
          if (window.history.length > 1) {
            event.preventDefault();
            router.back();
          }
        }}
      >
        <ArrowLeft aria-hidden />
        Go back
      </Link>
    </Button>
  );
}
