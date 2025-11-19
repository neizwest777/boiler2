import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/config/site.settings';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.siteUrl;
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // ✅ УПРОЩЕННЫЙ DISALLOW - Next.js сам управляет статикой
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    // ✅ Host больше не поддерживается современными ботами
  };
}
