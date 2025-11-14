import { MetadataRoute } from "next";
import { siteConfig } from "@/data/config/site.settings";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "meist",
    "kontakt",
    "paigaldus",
    "remont",
    "hooldus",
    "hadabi",
    "hinnad",
    "garantii",
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return staticRoutes;
}
