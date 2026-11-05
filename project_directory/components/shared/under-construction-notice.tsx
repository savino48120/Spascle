import { Construction } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants/routes";
import { BackButton } from "./back-button";
import { EmptyState } from "./empty-state";

/** Notice for areas of the site that aren't built yet (currently the module labs). */
export function UnderConstructionNotice({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  return (
    <EmptyState
      headingLevel={headingLevel}
      Icon={Construction}
      title="Under construction"
      description="This is a project currently under construction by Savino Owiredu Mensah. Check back soon for updates."
      actions={
        <>
          <BackButton />
          <Button asChild variant="secondary">
            <Link href={ROUTES.python}>Course overview</Link>
          </Button>
        </>
      }
    />
  );
}
