import 'css/prism.css'
import 'katex/dist/katex.css'

import Link from 'next/link'
import { Metadata } from 'next'

import PageTitle from '@/components/shared/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from '@shipixen/pliny/mdx-components'

import {
  sortPosts,
  coreContent,
  allCoreContent,
} from '@shipixen/pliny/utils/contentlayer'

import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'

import { siteConfig } from '@/data/config/site.settings'

// ------------------------------------------------------------------

const BLOG_URL = siteConfig.blogPath ? `/${siteConfig.blogPath}` : ''

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

// ------------------------------------------------------------------
// METADATA
// ------------------------------------------------------------------

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> }
): Promise<Metadata | undefined> {

  const resolved = await params
  const path = BLOG_URL + decodeURI(resolved.slug.join('/'))
  const post = allBlogs.find((p) => p.path === path)

  if (!post) return

  const authorList = post.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const result = allAuthors.find((a) => a.slug === author)
    return coreContent(result as Authors)
  })

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()

  let imageList = [siteConfig.socialBanner]

  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }

  const ogImages = imageList.map((img) => ({
    url: img.includes('http') ? img : siteConfig.siteUrl + img,
  }))

  return {
    title: post.title,
    description: post.summary,

    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteConfig.title,
      locale: 'et_EE',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: `${siteConfig.siteUrl}/${post.path}`,
      images: ogImages,
      authors: authorDetails.map((a) => a.name),
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },

    alternates: {
      canonical: `${siteConfig.siteUrl}/${post.path}`,
    },
  }
}

// ------------------------------------------------------------------
// STATIC PARAMS
// ------------------------------------------------------------------

export function generateStaticParams() {
  return allBlogs.map((p) => ({
    slug: p.path.replace(/^\//, '').split('/'),
  }))
}

// ------------------------------------------------------------------
// PAGE RENDER
// ------------------------------------------------------------------

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  // Await the params promise
  const resolvedParams = await params
  const path = decodeURI(resolvedParams.slug.join('/'))

  const sorted = allCoreContent(sortPosts(allBlogs))
  const postIndex = sorted.findIndex((p) => p.path === path)

  if (postIndex === -1) {
    return (
      <div className="w-full flex flex-col items-center fancy-overlay">
        <Header />

        <div className="mt-24 text-center min-h-[40vh]">
          <PageTitle>
            Lehte Ei Leitud <span role="img" aria-label="roadwork">🚧</span>
          </PageTitle>

          <p className="mt-4 text-lg">Seda lehte ei eksisteeri.</p>

          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/" className="btn-primary">Avalehele</Link>
            <Link href="/all-articles" className="btn-outline">Kõik Artiklid</Link>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  const prev = sorted[postIndex + 1]
  const next = sorted[postIndex - 1]

  const post = allBlogs.find((p) => p.path === path) as Blog

  const authorList = post.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const r = allAuthors.find((p) => p.slug === author)
    return coreContent(r as Authors)
  })

  const mainContent = coreContent(post)
  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <Header />

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

      <Footer />
    </>
  )
}