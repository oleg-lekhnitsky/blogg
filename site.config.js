const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Hello! Here you can look at my portfolio',
    image: '/images/Olegg.png',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Conent creator',
    bio: '',
    email: 'yuli.naida15@gmail.com',
    linkedin: 'yuliananaida',
    github: '',
    instagram: 'yuli.naida',
    vimeo: 'yulianaida',
  },
  projects: [
    {
      name: `FSP`,
      href: 'https://github.com/oleg-lekhnitsky/blogg'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Oleg Lekhnitsky',
    description: 'Looking for a job',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://blogg-omega.vercel.app',
  since: 2017, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'oleg-lekhnitsky/blogg',
      'issue-term': 'og:title',
      label: 'Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
