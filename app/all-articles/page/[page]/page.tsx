import { allCoreContent, sortPosts } from '@shipixen/pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { POSTS_PER_PAGE } from '@/app/all-articles/settings';

import ListLayout from '@/layouts/ListLayoutWithTags';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';
import { genPageMetadata } from 'app/seo';

export function generateStaticParams() {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const resolvedParams = await params;
  const page = Number(resolvedParams.page || 1);

  return genPageMetadata({
    title: `Boileri Artiklid - Leht ${page} | Boileriabi.ee`,
    description: `Boileri paigalduse, remondi ja hoolduse artiklid - leht ${page}. Kasulik info boileri teenustest Tallinnas ja Harjumaal.`,
    canonical:
      page === 1
        ? `https://boileriabi.ee/all-articles`
        : `https://boileriabi.ee/all-articles/page/${page}`,
  });
}

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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const resolvedParams = await params;
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = parseInt(resolvedParams.page);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );

  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  };

  const jsonLd = getBlogPageJsonLd(pageNumber, totalPages);

  return (
    <div className="flex flex-col w-full items-center justify-between">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* HERO */}
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
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={`Artiklid - Leht ${pageNumber}`}
      />

      {/* CTA BOX */}
      <div className="container-narrow py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Kas vajad boileri abi?</h2>

          <p className="text-gray-700 mb-6">
            Professionaalne paigaldus, remont ja hooldus Tallinnas ja Harjumaal.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Võta Ühendust
            </Link>
            <Link
              href="/hadaabi"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              24/7 Hädaabi
            </Link>
            <Link
              href="/hinnad"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Hinnapakkumine
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
