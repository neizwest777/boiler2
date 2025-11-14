import { Metadata } from 'next';
import { slug } from 'github-slugger';
import { allCoreContent } from '@shipixen/pliny/utils/contentlayer';
import { siteConfig } from '@/data/config/site.settings';
import { allBlogs } from 'contentlayer/generated';
import tagData from 'app/tag-data.json';
import { genPageMetadata } from 'app/seo';
import ListLayout from '@/layouts/ListLayoutWithTags';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Link from '@/components/shared/Link';

// Определяем тип для поста в JSON-LD
interface JsonLdPost {
  title: string;
  summary: string;
  slug: string;
  date: string;
  lastmod?: string;
}

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const tag = decodeURI(params.tag);
  const tagDisplay = tag.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return genPageMetadata({
    title: `${tagDisplay} - Boileri Artiklid | Boileriabi.ee`,
    description: `Lugege boileri teemalisi artikleid sildiga "${tagDisplay}". Professionaalsed nõuanded boileri paigalduse, remondi ja hoolduse kohta Tallinnas.`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteConfig.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  });
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag: slug(tag),
  }));
  return paths;
};

// JSON-LD для страницы тега
function getTagPageJsonLd(tag: string, posts: JsonLdPost[]) {
  const tagDisplay = tag.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': `Artiklid sildiga "${tagDisplay}"`,
    'description': `Boileri teemalised artiklid sildiga ${tagDisplay}`,
    'url': `${siteConfig.siteUrl}/tags/${tag}`,
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': posts.length,
      'itemListElement': posts.slice(0, 10).map((post, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Article',
          'headline': post.title,
          'description': post.summary,
          'url': `${siteConfig.siteUrl}/${post.slug}`,
          'datePublished': post.date,
          'dateModified': post.lastmod || post.date,
          'articleSection': tagDisplay,
        }
      }))
    },
    'about': {
      '@type': 'Thing',
      'name': tagDisplay,
      'description': `Boileri teema: ${tagDisplay}`
    }
  };
}

// Функция для получения связанных тегов
function getRelatedTags(currentTag: string, allTags: Record<string, number>) {
  const currentTagNormalized = currentTag.toLowerCase();
  const relatedTags = Object.keys(allTags)
    .filter(tag => {
      const normalizedTag = tag.toLowerCase();
      return normalizedTag !== currentTagNormalized && 
        (normalizedTag.includes(currentTagNormalized) || 
         currentTagNormalized.includes(normalizedTag));
    })
    .sort((a, b) => allTags[b] - allTags[a])
    .slice(0, 6);
  
  return relatedTags;
}

export default async function TagPage(props: {
  params: Promise<{ tag: string }>;
}) {
  const params = await props.params;
  const tag = decodeURI(params.tag);
  const tagDisplay = tag.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const filteredPosts = allCoreContent(
    allBlogs.filter(
      (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag),
    ),
  );

  const tagCounts = tagData as Record<string, number>;
  const relatedTags = getRelatedTags(tag, tagCounts);
  
  // Преобразуем посты в тип для JSON-LD
  const jsonLdPosts: JsonLdPost[] = filteredPosts.map(post => ({
    title: post.title,
    summary: post.summary || '',
    slug: post.slug,
    date: post.date,
    lastmod: post.lastmod,
  }));
  
  const tagPageJsonLd = getTagPageJsonLd(tag, jsonLdPosts);

  return (
    <div className="flex flex-col w-full items-center justify-between">
      {/* JSON-LD структура */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tagPageJsonLd) }}
      />
      
      <Header />
      
      {/* SEO-заголовок для страницы тега */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artiklid sildiga: {tagDisplay}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Avasta {filteredPosts.length} boileri artiklit teemal "{tagDisplay}". 
            Professionaalsed nõuanded boileri paigalduse, remondi ja hoolduse kohta.
          </p>
          
          {/* Статистика тега */}
          <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{filteredPosts.length}</div>
              <div>Artiklit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Object.keys(tagCounts).length}
              </div>
              <div>Erinevat Sildi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Связанные теги */}
      {relatedTags.length > 0 && (
        <div className="container-narrow py-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Seotud Teemad</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedTags.map((relatedTag) => (
                <Link
                  key={relatedTag}
                  href={`/tags/${slug(relatedTag)}`}
                  className="bg-gray-100 px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  {relatedTag} <span className="text-blue-600">({tagCounts[relatedTag]})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <ListLayout 
        posts={filteredPosts} 
        title={`Artiklid sildiga: ${tagDisplay}`}
      />
      
      {/* Дополнительный SEO-контент для страницы тега */}
      <div className="container-narrow py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Rohkem Boileri Teavet Teemal "{tagDisplay}"
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-3">🔧</span>
                Kasulikud Ressursid
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Professionaalsed boileri paigaldusnõuanded</li>
                <li>• Remondi ja hoolduse juhendid</li>
                <li>• Energiasäästu soovitused</li>
                <li>• Turvalisuse ja ohutuse nõuded</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <span className="bg-green-100 p-2 rounded-lg mr-3">📞</span>
                Abi ja Toetus
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tasuta konsultatsioon boileri teemadel</li>
                <li>• 24/7 hädaabi teenused Tallinnas</li>
                <li>• Kogenud torumehed ja spetsialistid</li>
                <li>• Töögarantii kõikidele teenustele</li>
              </ul>
            </div>
          </div>
          
          {/* Призыв к действию */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <h3 className="text-xl font-bold mb-4">Vajad Boileri Abi?</h3>
            <p className="text-gray-700 mb-6">
              Meie kogenud torumehed on valmis aitama Sul boileri paigalduse, remondi või hooldusega.
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
      </div>

      {/* Навигация по тегам */}
      <div className="container-narrow py-6">
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">Leia Rohkem Boileri Teemasid</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/tags" className="text-blue-600 hover:underline">
              Kõik Sildid
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/all-articles" className="text-blue-600 hover:underline">
              Kõik Artiklid
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/paigaldus" className="text-blue-600 hover:underline">
              Paigaldus
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/remont" className="text-blue-600 hover:underline">
              Remont
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/hooldus" className="text-blue-600 hover:underline">
              Hooldus
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
