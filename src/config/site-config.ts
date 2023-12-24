import { AUTHOR_GITHUB_LINK, AUTHOR_NAME, AUTHOR_WEBSITE, PROJECT_GITHUB_LINK, PROJECT_TITLE, PROJECT_URL } from "./constants";

export const siteConfig = {
  title: PROJECT_TITLE,
  description: "Pre-made custom hooks provider made with TypeScript ensuring type-safety.",
  ogImage: "https://via.placeholder.com/1200x630.png/007ACC/fff/?text=custom-hooks.ts",
  links: {
    github: PROJECT_GITHUB_LINK,
    url: PROJECT_URL,
  },
  author: {
    name: AUTHOR_NAME,
    github: AUTHOR_GITHUB_LINK,
    website: AUTHOR_WEBSITE
  }
}
