import { MetadataRoute } from "next";
import { siteConfig } from "@/data/config/site.settings";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },

    {
      url: `${baseUrl}/teenused`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/meist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/hinnad`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Добавляем разделы услуг (паигалдус, hooldus, remont)
    {
      url: `${baseUrl}/paigaldus`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hooldus`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/remont`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
