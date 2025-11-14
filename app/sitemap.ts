import { MetadataRoute } from "next";
import { siteConfig } from "@/data/config/site.settings";
import { allBlogs } from "contentlayer/generated";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;
  const currentDate = new Date();

  // ✅ ВСЕ СТАТИЧЕСКИЕ СТРАНИЦЫ С ПРИОРИТЕТАМИ
  const staticPages = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // ✅ ОСНОВНЫЕ УСЛУГИ - ВЫСОКИЙ ПРИОРИТЕТ
    {
      url: `${siteUrl}/paigaldus`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/remont`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hooldus`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hadaabi`, // ✅ ИСПРАВИЛ ОПЕЧАТКУ
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // ✅ ВТОРОСТЕПЕННЫЕ СТРАНИЦЫ - СРЕДНИЙ ПРИОРИТЕТ
    {
      url: `${siteUrl}/teenused`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/hinnad`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/garantii`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/konsultatsioon`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // ✅ ИНФОРМАЦИОННЫЕ СТРАНИЦЫ - НИЗКИЙ ПРИОРИТЕТ
    {
      url: `${siteUrl}/meist`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/vorm`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    // ✅ ЮРИДИЧЕСКИЕ СТРАНИЦЫ - МИНИМАЛЬНЫЙ ПРИОРИТЕТ
    {
      url: `${siteUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    // ✅ БЛОГ И ТЕГИ - СРЕДНИЙ ПРИОРИТЕТ
    {
      url: `${siteUrl}/all-articles`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/tags`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // ✅ СТАТЬИ БЛОГА ИЗ CONTENTLAYER
  const blogPosts = allBlogs.map((post) => {
    const postDate = post.lastmod || post.date;
    return {
      url: `${siteUrl}/${post._raw.flattenedPath}`,
      lastModified: new Date(postDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      // ✅ ДОПОЛНИТЕЛЬНЫЕ МЕТАДАННЫЕ ДЛЯ СТАТЕЙ
      ...(post.images && post.images.length > 0 && {
        images: post.images.map(img => ({
          url: img.startsWith('http') ? img : `${siteUrl}${img}`,
          caption: post.title,
          title: post.title,
        }))
      }),
    };
  });

  // ✅ ТЕГИ СТАТЕЙ (ДИНАМИЧЕСКИЕ СТРАНИЦЫ)
  const allTags = [...new Set(allBlogs.flatMap(post => post.tags || []))];
  const tagPages = allTags.map(tag => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  // ✅ ПАГИНАЦИЯ БЛОГА (если есть)
  const totalPosts = allBlogs.length;
  const postsPerPage = 10; // или любое другое значение, которое ты используешь
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const paginationPages = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter(page => page > 1) // первая страница уже есть в all-articles
    .map(page => ({
      url: `${siteUrl}/all-articles/page/${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    }));

  // ✅ ОБЪЕДИНЯЕМ ВСЕ КАРТЫ САЙТА
  return [
    ...staticPages,
    ...blogPosts,
    ...tagPages,
    ...paginationPages,
  ];
}
