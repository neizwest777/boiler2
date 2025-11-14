import 'css/prism.css';
import 'katex/dist/katex.css';
import Link from 'next/link';
import { Metadata } from 'next';

import PageTitle from '@/components/shared/PageTitle';
import { components } from '@/components/MDXComponents';
import { MDXLayoutRenderer } from '@shipixen/pliny/mdx-components';
import {
  sortPosts,
  coreContent,
  allCoreContent,
} from '@shipixen/pliny/utils/contentlayer';
import { allBlogs, allAuthors } from 'contentlayer/generated';
import type { Authors, Blog } from 'contentlayer/generated';
import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import PostSimple from '@/layouts/PostSimple';
import PostLayout from '@/layouts/PostLayout';
import PostBanner from '@/layouts/PostBanner';

import { siteConfig } from '@/data/config/site.settings';

const BLOG_URL = siteConfig.blogPath ? `/${siteConfig.blogPath}` : '';

const defaultLayout = 'PostLayout';
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
};

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const path = BLOG_URL + decodeURI(params.slug.join('/'));
  const post = allBlogs.find((p) => p.path === path);
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.lastmod || post.date).toISOString();
  const authors = authorDetails.map((author) => author.name);
  let imageList = [siteConfig.socialBanner];
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteConfig.siteUrl + img,
    };
  });

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteConfig.title,
      locale: 'et_EE', // Изменено на эстонскую локаль
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteConfig.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
    keywords: post.tags?.join(', '), // Добавлены ключевые слова
    ...(post.canonicalUrl
      ? {
          alternates: {
            canonical: post.canonicalUrl,
          },
        }
      : {
          alternates: {
            canonical: `${siteConfig.siteUrl}/${post.path}`,
          },
        }),
  };
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.path.split('/') }));
  return paths;
};

// JSON-LD для организации на странице статьи
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': siteConfig.businessName,
  'url': siteConfig.siteUrl,
  'logo': `${siteConfig.siteUrl}/static/favicons/favicon-32x32.png`,
  'description': 'Boileri paigaldus, remont ja hooldus Tallinnas ja Harjumaal',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Tallinn',
    'addressCountry': 'EE'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+37253684587',
    'contactType': 'customer service',
    'areaServed': ['EE'],
    'availableLanguage': ['et']
  },
  'sameAs': []
};

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const path = decodeURI(params.slug.join('/'));
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs));
  const postIndex = sortedCoreContents.findIndex((p) => p.path === path);
  if (postIndex === -1) {
    return (
      <div className="w-full flex flex-col items-center fancy-overlay">
        <Header />

        <div className="mt-24 text-center min-h-[40vh]">
          <PageTitle>
            Lehte Ei Leitud{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>

          <p className="mt-4 text-lg">
            Vabandame, seda lehte ei eksisteeri või on see eemaldatud.
          </p>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-yellow-800">
              Kas otsite boileri teenuseid? Tutvuge meie{' '}
              <Link href="/teenused" className="font-semibold hover:underline">
                teenustega
              </Link>{' '}
              või{' '}
              <Link href="/kontakt" className="font-semibold hover:underline">
                võtke ühendust
              </Link>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/">Avalehele</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/all-articles">Kõik Artiklid</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/kontakt">Kontakt</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  const prev = sortedCoreContents[postIndex + 1];
  const next = sortedCoreContents[postIndex - 1];
  const post = allBlogs.find((p) => p.path === path) as Blog;
  const authorList = post?.authors || ['default'];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Authors);
  });
  const mainContent = coreContent(post);
  const jsonLd = post.structuredData;
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    };
  });

  // Добавляем информацию об организации в JSON-LD статьи
  if (jsonLd['publisher'] === undefined) {
    jsonLd['publisher'] = {
      '@type': 'Organization',
      'name': siteConfig.businessName,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteConfig.siteUrl}/static/favicons/favicon-32x32.png`
      }
    };
  }

  const Layout = layouts[post.layout || defaultLayout];

  return (
    <>
      {/* JSON-LD для статьи */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Дополнительный JSON-LD для организации */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* SEO-улучшения для статьи */}
      <div className="hidden" aria-hidden="true">
        <link rel="canonical" href={`${siteConfig.siteUrl}/${post.path}`} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={post.tags?.join(', ') || 'boileri paigaldus, boileri remont, boileri hooldus, Tallinn'} />
      </div>

      {/* Breadcrumb navigation */}
      <nav className="container-narrow py-4 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-blue-600">Avaleht</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link href="/all-articles" className="hover:text-blue-600">Blogi</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium truncate" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        next={next}
        prev={prev}
      >
        <MDXLayoutRenderer
          code={post.body.code}
          components={components}
          toc={post.toc}
        />
      </Layout>

      {/* Дополнительный SEO-контент после статьи */}
      <div className="container-narrow py-8 mt-12 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Kas Olid See Artikkel Kasulik?</h3>
          <p className="text-gray-700 mb-6">
            Kui vajad professionaalset boileri abi, võta meiega julgelt ühendust. 
            Pakume tasuta konsultatsiooni ja täpset hinnapakkumist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/kontakt">Küsi Pakkumist</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/hadaabi">Hädaabi (24/7)</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/teenused">Vaata Teenuseid</Link>
            </Button>
          </div>
        </div>
        
        {/* Связанные теги */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-semibold mb-4 text-center">Seotud Teemad</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
