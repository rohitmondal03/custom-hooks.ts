import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

import { cn } from "@/lib/shadcn-utils";
import { siteHeroText, siteFeatures, siteOpenSourceSection } from "@/config/site";
import { PROJECT_GITHUB_LINK } from "@/config/constants";
import SiteLogo from "@/components/site-logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";


export default function WebSitePage() {
  return (
    <>
      <section className="site_section">
        <div className={cn(
          "flex flex-row items-center justify-center gap-x-7"
        )}>
          <SiteLogo />
          <h1 className="site_heading_text">{siteHeroText.title}</h1>
        </div>

        <div className="text-lg space-y-6">
          <div>
            <p className="site_description_text">{siteHeroText.subheading}</p>
            <p className="site_description_text">{siteHeroText.heroDescription}</p>
          </div>

          <div className="space-x-10 font-bold">
            <Link
              href={"/docs"}
              className={buttonVariants({ size: "lg", variant: "secondary", className: "scale-110" })}
            >
              Get Started
            </Link>
            <Link
              href={PROJECT_GITHUB_LINK}
              className={buttonVariants({ size: "lg", variant: "default", className: "scale-110" })}
              target="_blank"
            >
              Github
              <Github className="ml-3" />
            </Link>
          </div>
        </div>
      </section>


      <section className="site_section">
        <h1 className="site_heading_text">
          {siteFeatures.heading}
        </h1>

        <div className={cn(
          "grid grid-cols-3 gap-8",
        )}>
          {Object.values(siteFeatures.features).map(({ Icon, description, title }) => (
            <Card
              key={title}
              className={cn(
                "bg-transparent text-white",
                "border-zinc-500 border-2",
              )}
            >
              <CardHeader className="pb-0">
                <CardTitle className="text-3xl font-bold">
                  {title}
                </CardTitle>
              </CardHeader>

              <Icon color="whitesmoke" className="mx-auto my-5 scale-125" />

              <CardContent className="text-left site_description_text">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      <section className="site_section">
        <h1 className="site_heading_text">
          {siteOpenSourceSection.heading}
        </h1>

        <div className="space-y-3">
          <p className="site_description_text text-lg">
            {siteOpenSourceSection.description}
          </p>

          <Link
            href={PROJECT_GITHUB_LINK}
            className={buttonVariants({ size: "default", variant: "secondary" })}
            target="_blank"
          >
            <Github />
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}