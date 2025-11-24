import { Lato, Playfair_Display } from 'next/font/google';
import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { Metadata, Viewport } from 'next';
import Script from "next/script";

import { colors } from '@/data/config/colors.js';

import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';
import Header from '@/components/shared/Header';
import CookieConsent from "@/components/shared/CookieConsent";

const displayFont = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-display',
  preload: true,
  adjustFontFallback: false,
  weight: ['400', '700'],
});

const baseFont = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-default',
  weight: ['400', '700'],
  preload: true,
  adjustFontFallback: false,
});

const globalColors = colors;
const style = Object.entries(globalColors).flatMap(([variant, colors]) =>
  Object.entries(colors).map(([color, value]) => `--${variant}-${color}:${value}`)
).join(';');

export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  publisher: siteConfig.businessName,
  category: 'Home Services',

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
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
    emails: [siteConfig.email],
    phoneNumbers: [siteConfig.telephone],
  },

  alternates: {
    canonical: siteConfig.siteUrl.replace(/\/$/, ''),
    languages: {
      'et-EE': siteConfig.siteUrl.replace(/\/$/, ''),
      'x-default': siteConfig.siteUrl.replace(/\/$/, ''),
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  manifest: '/site.webmanifest',
  other: {
    'application-name': siteConfig.businessName,
    'msapplication-TileColor': '#ffffff',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="et"
      className={`${displayFont.variable} ${baseFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: `:root{${style}}` }} />
        
        {/* ✅ Критический CSS для быстрой загрузки */}
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-white { background: #fff; }
          .text-slate-900 { color: #0f172a; }
          .antialiased { -webkit-font-smoothing: antialiased; }
          .above-the-fold { opacity: 1; visibility: visible; }
        `}} />

        {/* ✅ Preconnect для внешних ресурсов */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />

        <meta name="google-site-verification" content="CQJJxJWmNzJ0fgOSj3gPL_kKRMEwoQp3wnhXFsT3bRc" />

        <meta name="geo.region" content="EE-37" />
        <meta name="geo.placename" content="Tallinn, Harjumaa" />
        <meta name="geo.position" content="59.4370;24.7536" />
        <meta name="ICBM" content="59.4370, 24.7536" />

        {/* ✅ Ahrefs с отложенной загрузкой */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="bomHtA+1BUw6NP0zbOTTrg"
          strategy="lazyOnload"
        />
      </head>

      <body className="bg-white text-slate-900 antialiased">
        {/* ✅ Google Analytics с оптимизацией */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BZJEP1SLG"
          strategy="afterInteractive"
          fetchPriority="low"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6BZJEP1SLG', {
              transport_url: 'https://gtm.googleapis.com',
              first_party_collection: true,
              anonymize_ip: true
            });
          `}
        </Script>

        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            window.gtag = window.gtag || function(){ (window.dataLayer = window.dataLayer || []).push(arguments); };
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>

        <ThemeProviders>
          <AnalyticsWrapper />
          <CookieConsent />
          <div className="w-full flex flex-col items-center font-sans">
            <Header />
            <SearchProvider>
              <main className="w-full flex flex-col items-center mb-auto" role="main">
                {children}
              </main>
            </SearchProvider>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
