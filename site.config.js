const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Dwiky Prias Marliansah",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I develop everything using node.",
    email: "contact@dwikypm.me",
    linkedin: "dwiky-prias-marliansah",
    github: "dwikypm",
    instagram: "dwiky_pm",
  },
  projects: [
    {
      name: `Personal Portfolio`,
      href: "https://dwikypm.me",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Dwiky Blog",
    description: "welcome to Dwiky Blog!",
  },

  // CONFIG configration (required)
  link: "https://blog.dwikypm.me/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "G-NDH53V6C2R",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "WWnNLibKANrCEkDiInjaAskK7GyiwFZHlONx0BU5rvY",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "dwikypm/Dwiky-Blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
