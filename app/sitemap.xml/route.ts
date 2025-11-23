import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.boileriabi.ee/</loc><lastmod>2025-01-20</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.boileriabi.ee/paigaldus</loc><lastmod>2025-01-20</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.boileriabi.ee/remont</loc><lastmod>2025-01-20</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.boileriabi.ee/hooldus</loc><lastmod>2025-01-20</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.boileriabi.ee/boileri-paigaldus-tallinna-piirkonnas</loc><lastmod>2025-01-20</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.boileriabi.ee/boileri-remont-tallinna-piirkonnas</loc><lastmod>2025-01-20</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.boileriabi.ee/boileri-hooldus-tallinna-piirkonnas</loc><lastmod>2025-01-20</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.boileriabi.ee/hadaabi</loc><lastmod>2025-01-20</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.boileriabi.ee/hinnad</loc><lastmod>2025-01-20</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.boileriabi.ee/meist</loc><lastmod>2025-01-20</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://www.boileriabi.ee/garantii</loc><lastmod>2025-01-20</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://www.boileriabi.ee/kontakt</loc><lastmod>2025-01-20</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // Кэшируем на 24 часа
    },
  });
}
