import {
  Settings,
  Globe,
  Languages,
  BookOpenTextIcon,
  UserCog,
  UserCheck,
} from "lucide-react"

import type { TFeaturesList } from "@/types/site"
import { PROJECT_TITLE } from "./constants"



export const siteHeroText = {
  title: PROJECT_TITLE,
  subheading: "A collection of custom React hooks for common use cases.",
  heroDescription: "Made with TypeScript ensuring type-safety and modern development techniques.",
}


export const siteFeatures: {
  heading: string,
  description: string,
  features: TFeaturesList[]
} = {
  heading: "Features",
  description: "",
  features: [
    {
      title: "Easy to use",
      description: `Just import and use the hook you need, no configuration required.`,
      Icon: Settings,
    },
    {
      title: "TypeScript support",
      description: "Use TypeScript with full type inference and type-safety",
      Icon: Languages,
    },
    {
      title: "Customizable",
      description: "You can customize everything from the UI to the data fetching logic.",
      Icon: UserCog,

    },
    {
      title: "Easy Documentation",
      description: "Simply head to documentation to explore different hooks and their working",
      Icon: BookOpenTextIcon,
    },
    {
      title: "Developer Friendly",
      description: "custom-hooks.ts provides developer friendly hooks, that are mostly use in day-to-day application",
      Icon: UserCheck,
    },
    {
      title: "Open-Source",
      description: "Join the vibrant community! Collaborate, contribute, and unlock endless possibilities together.",
      Icon: Globe,
    },
  ]
}


export const siteOpenSourceSection = {
  heading: "Open Source",
  description: "This project is open source on GitHub. Feel free to contribute!",
  buttonLabel: "View on GitHub",
}