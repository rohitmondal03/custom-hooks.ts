import { type Metadata } from "next";
import { Montserrat as Mont } from "next/font/google";

import { cn } from "@/lib/shadcn-utils";
import { siteConfig } from "@/config/site-config";
import type { ILayout } from "@/types/layout";
import SmoothScrollProvier from "@/components/providers/SmoothScrollProvider";
import SharedNavbar from "@/components/layouts/shared-navbar";
import SharedFooter from "@/components/layouts/shared-footer";

import "@/styles/globals.css";


const montFont = Mont({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
})


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ['react', 'hooks', 'react-hooks', 'usehooks', 'typescript', "nextjs", "custom-hooks"],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.github,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.links.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.links.url}/og.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.links.url}/site.webmanifest`,
}



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
