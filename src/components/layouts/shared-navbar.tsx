import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/shadcn-utils";
import { PROJECT_GITHUB_LINK, PROJECT_TITLE } from "@/config/constants";
import ProfileDrawer from "../profile-drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";


export default function SharedNavbar() {
  return (
    <nav className={cn(
      "z-10",
      "py-5",
      "flex flex-row items-center justify-around",
      "sticky top-0 left-0 w-full",
      "backdrop-blur-lg",
      "border-b border-gray-300",
    )}>
      <div className={cn("flex flex-row items-center gap-x-16")}>
        <Link
          href={"/"}
          className={cn(
            "font-bold text-2xl",
            "hover:scale-110 transition duration-200 ease-out",
          )}
        >
          {PROJECT_TITLE}
        </Link>

        <Link
          href={PROJECT_GITHUB_LINK}
          className={cn(
            "font-bold text-xl", "underline",
            "scale-[1.75]",
            "hover:scale-[2.25] hover:rotate-6 transition duration-300",
          )}
        >
          <GitHubLogoIcon />
        </Link>
      </div>


      <div className={cn(
        "flex flex-row items-center justify-between gap-x-10"
      )}>
        <Link
          href={"/docs"}
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white",
          )}
        >
          docs
        </Link>

        <Drawer>
          <DrawerTrigger asChild>
            <Button type="button" className="text-white" variant={"link"}>@rohit</Button>
          </DrawerTrigger>

          <ProfileDrawer />
        </Drawer>
      </div>
    </nav>
  )
}