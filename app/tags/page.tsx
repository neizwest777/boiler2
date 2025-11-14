import { slug } from 'github-slugger';
import tagData from 'app/tag-data.json';
import { genPageMetadata } from 'app/seo';
import Link from '@/components/shared/Link';
import Tag from '@/components/blog/Tag';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export const metadata = genPageMetadata({
  title: 'Boileri Teemade Sildid | Kõik Kategooriad | Boileriabi.ee',
  description: 'Avage boileri paigalduse, remondi, hoolduse ja energiasäästu teemade sildid. Leidke kiirelt artikleid oma boileri probleemide lahendamiseks Tallinnas.',
  canonical: 'https://boileriabi.ee/tags',
});

// JSON-LD для страницы тегов
function getTagsPageJsonLd(tagCounts: Record<string, number>) {
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Boileri Teemade Sildid',
    'description': 'Boileri paigalduse, remondi, hoolduse ja energiasäästu sildid',
    'url': 'https://boileriabi.ee/tags',
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': Object.keys(tagCounts).length,
      'itemListElement': sortedTags.slice(0, 15).map((tag, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Thing',
          'name': tag,
          'description': `Artiklid sildiga "${tag}" boileri teemadel`,
          'url': `https://boileriabi.ee/tags/${slug(tag)}`,
          'additionalProperty': {
            '@type': 'PropertyValue',
            'name': 'articleCount',
            'value': tagCounts[tag]
          }
        }
      }))
    }
  };
}

export default async function Page() {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  
  const tagsPageJsonLd = getTagsPageJsonLd(tagCounts);

  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      {/* JSON-LD структура */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tagsPageJsonLd) }}
      />
      
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          {/* SEO-оптимизированный заголовок */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-5xl fancy-heading">
              Boileri Teemade Sildid
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Leidke kiirelt artikleid boileri paigalduse, remondi ja hoolduse teemadel
            </p>
            
            {/* Статистика тегов */}
            <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{tagKeys.length}</div>
                <div>Erinevat Sildi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Object.values(tagCounts).reduce((a, b) => a + b, 0)}
                </div>
                <div>Artiklit Kokku</div>
              </div>
            </div>
          </div>

          {/* Популярные теги */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Populaarsemad Sildid</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {sortedTags.slice(0, 8).map((t) => (
                <Link
                  key={t}
                  href={`/tags/${slug(t)}`}
                  className="bg-white px-4 py-2 rounded-full border border-blue-200 hover:border-blue-500 hover:bg-blue-100 transition-colors font-medium"
                >
                  {t} <span className="text-blue-600">({tagCounts[t]})</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Все теги с категориями */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Технические теги */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-3">🔧</span>
                Tehnilised Teemad
              </h3>
              <div className="flex flex-wrap gap-2">
                {sortedTags
                  .filter(tag => 
                    tag.toLowerCase().includes('paigaldus') || 
                    tag.toLowerCase().includes('remont') ||
                    tag.toLowerCase().includes('hooldus') ||
                    tag.toLowerCase().includes('parandus') ||
                    tag.toLowerCase().includes('probleem')
                  )
                  .slice(0, 12)
                  .map((t) => (
                    <div key={t} className="mb-2">
                      <Tag text={t} />
                      <Link
                        href={`/tags/${slug(t)}`}
                        className="ml-1 text-sm font-semibold text-gray-600 hover:text-blue-600"
                        aria-label={`Vaata artikleid sildiga ${t}`}
                      >
                        ({tagCounts[t]})
                      </Link>
                    </div>
                  ))}
              </div>
            </div>

            {/* Энергия и советы */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <span className="bg-green-100 p-2 rounded-lg mr-3">💡</span>
                Nõuanded ja Sääst
              </h3>
              <div className="flex flex-wrap gap-2">
                {sortedTags
                  .filter(tag => 
                    tag.toLowerCase().includes('nõuanne') || 
                    tag.toLowerCase().includes('sääst') ||
                    tag.toLowerCase().includes('energia') ||
                    tag.toLowerCase().includes('soovitused') ||
                    tag.toLowerCase().includes('kulu')
                  )
                  .slice(0, 12)
                  .map((t) => (
                    <div key={t} className="mb-2">
                      <Tag text={t} />
                      <Link
                        href={`/tags/${slug(t)}`}
                        className="ml-1 text-sm font-semibold text-gray-600 hover:text-green-600"
                        aria-label={`Vaata artikleid sildiga ${t}`}
                      >
                        ({tagCounts[t]})
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Все теги алфавитно */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Kõik Sildid</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-wrap justify-center gap-3">
                {tagKeys.length === 0 && 'Silde ei leitud.'}
                {sortedTags.map((t) => {
                  return (
                    <div key={t} className="mb-2">
                      <Tag text={t} />
                      <Link
                        href={`/tags/${slug(t)}`}
                        className="ml-1 text-sm font-semibold text-gray-600 hover:text-blue-600"
                        aria-label={`Vaata artikleid sildiga ${t}`}
                      >
                        ({tagCounts[t]})
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SEO-блок с полезной информацией */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Kas Teadsid?</h2>
            <p className="text-gray-700 mb-4">
              Meie blogis leiad üle <strong>{Object.values(tagCounts).reduce((a, b) => a + b, 0)} artikli</strong> boileri paigalduse, remondi ja hoolduse kohta. 
              Kõik artiklid on koostatud kogenud torumeeste poolt.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link 
                href="/all-articles" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Vaata Kõiki Artikleid
              </Link>
              <Link 
                href="/paigaldus" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Boileri Paigaldus
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
