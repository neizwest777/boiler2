import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config/site.settings';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*?*',                    // Запрет всех URL с параметрами
          '/*&*',                    // Запрет URL с амперсандами
          '/api/',                   // Запрет API routes
          '/_next/static/',          // Запрет внутренних Next.js файлов
          '/_next/data/',            // Запрет данных Next.js
          '/admin/',                 // Запрет админки (если будет)
          '/dashboard/',             // Запрет дашборда
          '/private/',               // Запрет приватных зон
          '/test/',                  // Запрет тестовых страниц
          '/tmp/',                   // Запрет временных файлов
          '/backup/',                // Запрет бэкапов
        ],
        crawlDelay: 1,               // Задержка для всех ботов 1 сек
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/*?*',
          '/*&*',
          '/api/',
          '/_next/static/chunks/pages/api/',
        ],
        crawlDelay: 0.5,             // Google может ползать быстрее
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/static/images/',
          '/public/images/',
          '/_next/image/',
        ],
        disallow: [
          '/*?*',
          '/api/og',                 // OG изображения генерируются динамически
        ],
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
        disallow: ['/*?*', '/*&*'],
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
        disallow: ['/*?*', '/*&*'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: [
          '/*?*',
          '/*&*',
          '/api/',
          '/_next/static/chunks/pages/api/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: [
          '/*?*',
          '/*&*',
          '/api/',
          '/_next/static/chunks/pages/api/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexImages',
        allow: [
          '/',
          '/static/images/',
          '/public/images/',
          '/_next/image/',
        ],
        disallow: ['/*?*', '/api/og'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 5,               // Baidu - медленнее
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'TelegramBot',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Slackbot',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
        disallow: ['/*?*', '/*&*', '/api/'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-pages.xml`,    // Если будешь разделять карты
      `${baseUrl}/sitemap-posts.xml`,    // Если будешь разделять карты
    ],
    host: new URL(baseUrl).host,         // ТОЛЬКО ДОМЕН: boileriabi.ee
  };
}
