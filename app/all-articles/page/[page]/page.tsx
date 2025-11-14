import { allCoreContent, sortPosts } from '@shipixen/pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { POSTS_PER_PAGE } from '@/app/all-articles/settings';
import ListLayout from '@/layouts/ListLayoutWithTags';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { genPageMetadata } from 'app/seo';
import Link from 'next/link'; // 🔥 ДОЛЖЕН БЫТЬ

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const page = Number(params.page || 1);

  return genPageMetadata({
    title: `Boileri Artiklid - Leht ${page} | Boileriabi.ee`,
    description: `Boileri paigalduse, remondi ja hoolduse artiklid - leht ${page}. Lugege kasulikke nõuandeid boilerite kohta Tallinnas ja Harjumaal.`,
    canonical:
      page === 1
        ? 'https://boileriabi.ee/all-articles'
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
      description: 'Boileri paigalduse, remondi ja hoolduse artiklid',
    },
    pagination: {
      '@type': 'Pagination',
      currentPage: pageNumber,
      totalPages: totalPages,
      firstPage: `${baseUrl}/all-articles`,
      previousPage:
        pageNumber > 1
          ? `${baseUrl}/all-articles/page/${pageNumber - 1}`
          : undefined,
      nextPage:
        pageNumber < totalPages
          ? `${baseUrl}/all-articles/page/${pageNumber + 1}`
          : undefined,
      lastPage: `${baseUrl}/all-articles/page/${totalPages}`,
    },
  };
}

export default async function Page(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = parseInt(params.page as string);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );

  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  };

  const blogPageJsonLd = getBlogPageJsonLd(pageNumber, totalPages);

  return (
    <div className="flex flex-col w-full items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageJsonLd) }}
      />

      <Header />

      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Boileri Artiklid - Leht {pageNumber}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Jätkake boileri paigalduse, remondi ja hoolduse artiklite lugemist.
            Leht {pageNumber} / {totalPages}
          </p>

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

      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={`Artiklid - Leht ${pageNumber}`}
      />

      <div className="container-narrow py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Boileri Teemade Kogu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">Paigaldus ja Remont</h3>
              <p className="text-gray-600 text-sm">
                Professionaalsed nõuanded boileri paigalduseks ja remondiks
              </p>
            </div>

            <div className="p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold text-xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Energiasääst</h3>
              <p className="text-gray-600 text-sm">
                Kuidas säästa energiat ja vähendada kulusid
              </p>
            </div>

            <div className="p-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold text-xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">Hooldus ja Turvalisus</h3>
              <p className="text-gray-600 text-sm">
                Korrashoiu ja ohutuse nõuanded boileritele
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-center mb-4">Kas Teadsid?</h3>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/paigaldus" className="text-blue-600 hover:underline">
                Boileri Paigaldus Tallinnas →
              </Link>

              <Link href="/remont" className="text-blue-600 hover:underline">
                Boileri Remonditeenused →
              </Link>

              <Link href="/hooldus" className="text-blue-600 hover:underline">
                Boileri Hooldus ja Profülaktika →
              </Link>

              <Link href="/hadaabi" className="text-blue-600 hover:underline">
                24/7 Hädaabi Teenused →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
