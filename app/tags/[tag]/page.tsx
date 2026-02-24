import { Metadata } from 'next';
import { slug } from 'github-slugger';
import { allCoreContent } from '@shipixen/pliny/utils/contentlayer';
import { siteConfig } from '@/data/config/site.settings';
import { allBlogs } from 'contentlayer/generated';

import tagData from 'app/tag-data.json';

import { genPageMetadata } from 'app/seo';
import ListLayout from '@/layouts/ListLayoutWithTags';


import Link from '@/components/shared/Link';

// Тип поста для JSON-LD
interface JsonLdPost {
  title: string;
  summary: string;
  slug: string;
  date: string;
  lastmod?: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const tag = decodeURI(resolvedParams.tag);
  const tagDisplay = tag
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return genPageMetadata({
    title: `${tagDisplay} – Boileri Artiklid | Boileriabi.ee`,
    description: `Artiklid teemal "${tagDisplay}". Professionaalsed nõuanded boileri paigalduse, remondi ja hoolduse kohta.`,
    canonical: `${siteConfig.siteUrl}/tags/${tag}`,
  });
}

export function generateStaticParams() {
  const tagCounts = tagData as Record<string, number>;
  return Object.keys(tagCounts).map((tag) => ({
    tag: slug(tag),
  }));
}

function getTagPageJsonLd(tag: string, posts: JsonLdPost[]) {
  const tagDisplay = tag
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Artiklid sildiga "${tagDisplay}"`,
    description: `Boileri teemalised artiklid: ${tagDisplay}`,
    url: `${siteConfig.siteUrl}/tags/${tag}`,

    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: post.title,
          description: post.summary,
          url: `${siteConfig.siteUrl}/${post.slug}`,
          datePublished: post.date,
          dateModified: post.lastmod || post.date,
          articleSection: tagDisplay,
        },
      })),
    },

    about: {
      '@type': 'Thing',
      name: tagDisplay,
    },
  };
}

function getRelatedTags(currentTag: string, allTags: Record<string, number>) {
  const normalized = currentTag.toLowerCase();

  return Object.keys(allTags)
    .filter((tag) => {
      const t = tag.toLowerCase();
      return (
        t !== normalized &&
        (t.includes(normalized) || normalized.includes(t))
      );
    })
    .slice(0, 6);
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const resolvedParams = await params;
  const tag = decodeURI(resolvedParams.tag);
  const tagDisplay = tag
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  const filteredPosts = allCoreContent(
    allBlogs.filter(
      (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)
    )
  );

  const tagCounts = tagData as Record<string, number>;
  const relatedTags = getRelatedTags(tag, tagCounts);

  const jsonLdPosts: JsonLdPost[] = filteredPosts.map((post) => ({
    title: post.title,
    summary: post.summary || '',
    slug: post.slug,
    date: post.date,
    lastmod: post.lastmod,
  }));

  const jsonLd = getTagPageJsonLd(tag, jsonLdPosts);

  return (
    <div className="flex flex-col w-full items-center justify-between">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      

      {/* HERO */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artiklid sildiga: {tagDisplay}
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Leitud {filteredPosts.length} artiklit teemal "{tagDisplay}".
          </p>

          {/* Статистика */}
          <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {filteredPosts.length}
              </div>
              <div>Artiklit</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Object.keys(tagCounts).length}
              </div>
              <div>Kokku Sildid</div>
            </div>
          </div>
        </div>
      </div>

      {/* Связанные теги */}
      {relatedTags.length > 0 && (
        <div className="container-narrow py-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 text-center">
              Seotud Teemad
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {relatedTags.map((t) => (
                <Link
                  key={t}
                  href={`/tags/${slug(t)}`}
                  className="bg-gray-100 px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-100 transition"
                >
                  {t} <span className="text-blue-600">({tagCounts[t]})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Список статей */}
      <ListLayout
        posts={filteredPosts}
        title={`Artiklid sildiga: ${tagDisplay}`}
      />

      {/* CTA блок */}
      <div className="container-narrow py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Vajad Boileri Abi?
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Võta Ühendust
            </Link>

            <Link
              href="/hadaabi"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              24/7 Hädaabi
            </Link>

            <Link
              href="/hinnad"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Hinnapakkumine
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}