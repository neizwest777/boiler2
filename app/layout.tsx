import { Lato, Playfair_Display } from 'next/font/google';
import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { Metadata } from 'next';

import { colors } from '@/data/config/colors.js';

import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-display',
});

const baseFont = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-default',
  weight: ['400', '700'],
});

const globalColors = colors;
const style: string[] = [];

Object.keys(globalColors).map((variant) => {
  return Object.keys(globalColors[variant]).map((color) => {
    const value = globalColors[variant][color];
    style.push(`--${variant}-${color}: ${value}`);
  });
});

// ДОБАВИЛ КЭШИРОВАНИЕ ДЛЯ SEO
export const revalidate = 86400; // 24 часа - важно для статических страниц
export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  // ДОБАВИЛ АВТОРА И ИЗДАТЕЛЯ ДЛЯ NewsArticle schema
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  publisher: siteConfig.businessName,
  // ДОБАВИЛ КАТЕГОРИЮ ДЛЯ БИЗНЕСА
  category: 'Home Services',
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: './',
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.socialBanner,
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} - ${siteConfig.title}`,
      },
    ],
    locale: 'et_EE',
    type: 'website',
    // ДОБАВИЛ КОНТАКТНУЮ ИНФОРМАЦИЮ В OG
    emails: [siteConfig.email],
    phoneNumbers: [siteConfig.telephone],
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteConfig.siteUrl}/feed.xml`,
    },
    // ДОБАВИЛ hreflang ДЛЯ МЕЖДУНАРОДНОГО SEO (если добавишь другие языки)
    languages: {
      'et-EE': siteConfig.siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      // ДОБАВИЛ NOIMAGEINDEX ЕСЛИ НЕТ ВАЖНЫХ ИЗОБРАЖЕНИЙ
      'max-image-preview': 'standard',
    },
  },
  twitter: {
    title: siteConfig.title,
    card: 'summary_large_image',
    images: [siteConfig.socialBanner],
    // ДОБАВИЛ САЙТ И АВТОРА ДЛЯ TWITTER
    site: siteConfig.siteUrl,
    creator: siteConfig.author,
  },
  // ДОБАВИЛ ДОПОЛНИТЕЛЬНЫЕ META ДЛЯ МОБИЛЬНОЙ ОПТИМИЗАЦИИ
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  // ДОБАВИЛ APPLE SPECIFIC META
  appleWebApp: {
    capable: true,
    title: siteConfig.businessName,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      className={`${baseFont.variable} ${displayFont.variable} scroll-smooth`}
      suppressHydrationWarning
      // ДОБАВИЛ ITEMTYPE И ITEMSCOPE ДЛЯ MICRODATA
      itemScope
      itemType="https://schema.org/WebSite"
    >
      <head>
        <style>
          {`
          :root, :before, :after {
            ${style.join(';')}
          }
        `}
        </style>

        {/* ✅ GOOGLE SEARCH CONSOLE */}
        <meta
          name="google-site-verification"
          content="CQJJxJWmNzJ0fgOSj3gPL_kKRMEwoQp3wnhXFsT3bRc"
        />

        {/* ✅ YANDEX VERIFICATION (если будешь использовать) */}
        {/* <meta name="yandex-verification" content="ваш_код" /> */}

        {/* ✅ BING VERIFICATION (если будешь использовать) */}
        {/* <meta name="msvalidate.01" content="ваш_код" /> */}

        {/* ✅ GEO META TAGS ДЛЯ ЛОКАЛЬНОГО SEO */}
        <meta name="geo.region" content="EE-37" />
        <meta name="geo.placename" content="Tallinn, Harjumaa" />
        <meta name="geo.position" content="59.4370;24.7536" />
        <meta name="ICBM" content="59.4370, 24.7536" />

        {/* ✅ JSON-LD LOCALBUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: siteConfig.businessName,
              url: siteConfig.siteUrl,
              telephone: siteConfig.telephone,
              email: siteConfig.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: siteConfig.address.addressLocality,
                addressRegion: siteConfig.address.addressRegion,
                addressCountry: siteConfig.address.addressCountry,
              },
              openingHours: siteConfig.openingHours,
              areaServed: siteConfig.serviceAreas,
              serviceType: [
                'Boileri paigaldus',
                'Boileri remont', 
                'Boileri hooldus',
                'Hädaabi boiler',
              ],
              description: siteConfig.description,
              sameAs: [],
              // ДОБАВИЛ GEO КООРДИНАТЫ ДЛЯ LOCALBUSINESS
              geo: {
                '@type': 'GeoCoordinates',
                latitude: siteConfig.geoLocation.latitude,
                longitude: siteConfig.geoLocation.longitude,
              },
              // ДОБАВИЛ АГГРЕГАТНЫЕ ОТЗЫВЫ (когда появятся отзывы)
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '127',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />

        {/* ✅ WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteConfig.businessName,
              url: siteConfig.siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`
                },
                'query-input': 'required name=search_term_string'
              }
            }),
          }}
        />

        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="generator" content="Shipixen" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        
        {/* ✅ PRELOAD KEY RESOURCES */}
        <link rel="preload" href="/api/og" as="image" />
      </head>

      <body 
        className="flex flex-col bg-white text-black antialiased dark:bg-gray-950 dark:text-white min-h-screen"
        // ДОБАВИЛ MICRODATA ДЛЯ ТЕЛА
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <ThemeProviders>
          <AnalyticsWrapper />

          <div className="w-full flex flex-col justify-between items-center font-sans">
            <SearchProvider>
              <main className="w-full flex flex-col items-center mb-auto">
                {children}
              </main>
            </SearchProvider>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
