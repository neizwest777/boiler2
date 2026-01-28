import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

Allow: /paigaldus
Allow: /remont
Allow: /hooldus
Allow: /boileri-paigaldus-tallinna-piirkonnas
Allow: /boileri-remont-tallinna-piirkonnas
Allow: /boileri-hooldus-tallinna-piirkonnas
Allow: /hadaabi
Allow: /hinnad
Allow: /meist
Allow: /garantii
Allow: /kontakt
Allow: /teenused
Allow: /vorm

Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: https://www.boileriabi.ee/sitemap.xml`;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
