import { allCoreContent, sortPosts } from '@shipixen/pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { POSTS_PER_PAGE } from '@/app/all-articles/settings';

import ListLayout from '@/layouts/ListLayoutWithTags';


import Link from 'next/link';
import { genPageMetadata } from 'app/seo';

// -----------------------------------------------------------
// STATIC PARAMS
// -----------------------------------------------------------

export function generateStaticParams() {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

// -----------------------------------------------------------
// FIXED METADATA (NO PROMISE)
// -----------------------------------------------------------

export async function generateMetadata(
  { params }: { params: Promise<{ page: string }> }
) {
  const { page } = await params;
  const pageNumber = Number(page || 1);

  return genPageMetadata({
    title: `Boileri Artiklid - Leht ${pageNumber} | Boileriabi.ee`,
    description: `Boileri paigalduse, remondi ja hoolduse artiklid - leht ${pageNumber}. Kasulik info boileri teenustest Tallinnas ja Harjumaal.`,
    canonical:
      pageNumber === 1
        ? `https://boileriabi.ee/all-articles`
        : `https://boileriabi.ee/all-articles/page/${pageNumber}`,
  });
}

// -----------------------------------------------------------
// JSON-LD
// -----------------------------------------------------------

function getBlogPageJsonLd(pageNumber: number, totalPages: number) {
  const baseUrl = 'https://boileriabi.ee';

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Boileri Artiklid - Leht ${pageNumber}`,
    description: `Boileri paigalduse, remondi ja hoolduse artiklid - leht ${pageNumber}`,
    url:
      pageNumber === 1
        ? `${baseUrl}/all-articles`
        : `${baseUrl}/all-articles/page/${pageNumber}`,
    isPartOf: {
      '@type': 'Blog',
      name: 'Boileriabi.ee Blogi',
    },
    pagination: {
      '@type': 'Pagination',
      currentPage: pageNumber,
      totalPages: totalPages,
      previousPage:
        pageNumber > 1
          ? `${baseUrl}/all-articles/page/${pageNumber - 1}`
          : undefined,
      nextPage:
        pageNumber < totalPages
          ? `${baseUrl}/all-articles/page/${pageNumber + 1}`
          : undefined,
    },
  };
}

// -----------------------------------------------------------
// PAGE COMPONENT (UPDATED FOR NEXT.JS 15)
// -----------------------------------------------------------

export default async function BlogPaginationPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = Number(page) || 1;

  const posts = allCoreContent(sortPosts(allBlogs));
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, end);

  const jsonLd = getBlogPageJsonLd(pageNumber, totalPages);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      

      {/* HERO / TITLE BLOCK */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Boileri Artiklid – Leht {pageNumber}
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Lugege boileri paigalduse, remondi ja hoolduse kasulikke nõuandeid.
          </p>

          {/* PAGINATION TOP */}
          <div className="mt-6 flex justify-center items-center space-x-4 text-sm">
            {pageNumber > 1 && (
              <Link
                href={
                  pageNumber === 2
                    ? '/all-articles'
                    : `/all-articles/page/${pageNumber - 1}`
                }
                className="bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors"
              >
                ← Eelmine leht
              </Link>
            )}

            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Leht {pageNumber} / {totalPages}
            </span>

            {pageNumber < totalPages && (
              <Link
                href={`/all-articles/page/${pageNumber + 1}`}
                className="bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors"
              >
                Järgmine leht →
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="container py-12">
        <ListLayout posts={pagePosts} title="" />
      </div>

      {/* PAGINATION BOTTOM */}
      <div className="w-full bg-gray-50 py-8">
        <div className="container flex justify-center space-x-8">
          {pageNumber > 1 && (
            <Link
              href={
                pageNumber === 2
                  ? '/all-articles'
                  : `/all-articles/page/${pageNumber - 1}`
              }
              className="bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors"
            >
              ← Eelmine leht
            </Link>
          )}

          <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            {pageNumber} / {totalPages}
          </span>

          {pageNumber < totalPages && (
            <Link
              href={`/all-articles/page/${pageNumber + 1}`}
              className="bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors"
            >
              Järgmine leht →
            </Link>
          )}
        </div>
      </div>

      
    </div>
  );
}
