const siteConfig = {
  // ✅ ОСНОВНЫЕ НАСТРОЙКИ САЙТА
  siteUrl: 'https://boileriabi.ee', // БЕЗ слеша в конце!
  businessName: 'Boileriabi',
  title: 'Boileri paigaldus ja hooldus Tallinnas | Boileriabi',
  description: 'Professionaalne boileri paigaldus, hooldus ja remont Tallinnas. Kiire ja kvaliteetne teenus. Tasuta läbivaatus!',
  keywords: 'boileri paigaldus, boileri hooldus, boileri remont, boiler Tallinnas',
  author: 'Boileriabi',
  email: 'info@boileriabi.ee',
  telephone: '+3721234567',
  socialBanner: '/images/social-banner.jpg',

  // ✅ ТЕМА И НАСТРОЙКИ
  theme: 'system',

  // ✅ ПУТИ
  blogPath: '',
  allArticlesPath: '/all-articles',

  // ✅ АНАЛИТИКА
  disableAnalytics: false,
  analytics: {
    // Настройки аналитики
  },

  newsletter: {
    // provider: 'emailoctopus',
  },
  
  search: true,
};

module.exports = { siteConfig };
