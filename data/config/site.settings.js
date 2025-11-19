const { metadata } = require('./metadata');

/** @type {import("siteSettingsInterface.ts").SiteConfig} */
const siteConfig = {
  ...metadata,
  theme: 'system',

  // ✅ ДОБАВЛЕНЫ ОТСУТСТВУЮЩИЕ ПОЛЯ ДЛЯ LAYOUT.TSX
  siteUrl: metadata.siteUrl, // Явно указываем siteUrl
  businessName: metadata.businessName,
  title: metadata.title,
  description: metadata.description,
  keywords: metadata.keywords,
  author: metadata.author,
  email: metadata.email,
  telephone: metadata.telephone,
  socialBanner: metadata.socialBanner,

  blogPath: '',
  allArticlesPath: '/all-articles',

  disableAnalytics: false,
  analytics: {},

  newsletter: {},
  search: true,
};

module.exports = { siteConfig };
