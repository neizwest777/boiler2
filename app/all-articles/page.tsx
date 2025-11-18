import { allCoreContent, sortPosts } from '@shipixen/pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import { genPageMetadata } from 'app/seo';
import { POSTS_PER_PAGE } from '@/app/all-articles/settings';
import ListLayout from '@/layouts/ListLayoutWithTags';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata = genPageMetadata({
  title: 'Boileri Blogi ja Kasulikud Artiklid | Boileriabi.ee',
  description: 'Lugege boileri paigalduse, remondi, hoolduse ja energiasäästu kohta kasulikke artikleid. Professionaalsed nõuanded boilerite kohta Tallinnas ja Harjumaal.',
  canonical: 'https://boileriabi.ee/all-articles',
});

// JSON-LD для страницы блога
const blogPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Boileri Blogi ja Kasulikud Artiklid',
  'description': 'Boileri paigalduse, remondi, hoolduse ja energiasäästu artiklid',
  'url': 'https://boileriabi.ee/all-articles',
  'mainEntity': {
    '@type': 'ItemList',
    'numberOfItems': allBlogs.length,
    'itemListElement': allBlogs.slice(0, 10).map((post, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Article',
        'headline': post.title,
        'description': post.summary,
        'url': `https://boileriabi.ee/${post._raw.flattenedPath}`,
        'datePublished': post.date,
        'dateModified': post.lastmod || post.date,
      }
    }))
  }
};

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs));
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <div className="flex flex-col w-full items-center justify-between">
      {/* JSON-LD структура */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageJsonLd) }}
      />
      
      <Header />
      
      {/* SEO-заголовок перед ListLayout */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Boileri Blogi ja Kasulikud Artiklid
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professionaalsed nõuanded boileri paigalduse, remondi, hoolduse ja energiasäästu kohta. 
            Kõik, mida pead teadma boilerite kohta Tallinnas ja Harjumaal.
          </p>
          
          {/* Статистика для SEO */}
          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{allBlogs.length}+</div>
              <div>Artiklit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div>Professionaalne</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div>Hädaabi</div>
            </div>
          </div>
        </div>
      </div>

      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Kõik Artiklid"
      />
      
      {/* Дополнительный SEO-контент */}
      <div className="container-narrow py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Miks Lugeda Meie Boileri Blogi?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-bold">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Energiasäästlikud Lahendused</h3>
                  <p className="text-gray-600 text-sm">
                    Õpi, kuidas säästa energiat ja vähendada kulusid oma boileri kasutamisel.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <span className="text-green-600 font-bold">🔧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hooldusnõuanded</h3>
                  <p className="text-gray-600 text-sm">
                    Professionaalsed nõuanded boileri korrashoiuks ja pikendatud kasutusiga.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <span className="text-purple-600 font-bold">🚨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Probleemide Lahendamine</h3>
                  <p className="text-gray-600 text-sm">
                    Levinud boileri probleemid ja nende lahendused kogenud torumeeste poolt.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <span className="text-orange-600 font-bold">📈</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Uued Tehnoloogiad</h3>
                  <p className="text-gray-600 text-sm">
                    Uusimad trendid ja tehnoloogiad boileri maailmas - püsige ajaga kaasas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
