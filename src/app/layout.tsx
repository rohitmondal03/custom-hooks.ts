import { Montserrat as Mont } from "next/font/google";

import { cn } from "@/lib/shadcn-utils";
import { RootMetadata } from "@/config/metadata";
import type { ILayout } from "@/types/layout";
import SmoothScrollProvier from "@/components/providers/SmoothScrollProvider";
import SharedNavbar from "@/components/layouts/shared-navbar";
import SharedFooter from "@/components/layouts/shared-footer";
import "@/styles/globals.css";


const montFont = Mont({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
})


export const metadata = RootMetadata;


export default function RootLayout({ children }: ILayout) {
  return (
    <SmoothScrollProvier>
      <html lang="en">
        <body className={cn(
          `${montFont.className}`,
          "text-white bg-slate-950",
        )}>
          <SharedNavbar />
          <main className="px-40">{children}</main>
          <SharedFooter />
        </body>
      </html>
    </SmoothScrollProvier>
  );
}
