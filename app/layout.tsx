import { Lato, Playfair_Display } from 'next/font/google';
import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { Metadata, Viewport } from 'next';
import Script from "next/script";

import { colors } from '@/data/config/colors.js';

import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';
import CookieConsent from "@/components/shared/CookieConsent";

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

// Generate CSS variables
const globalColors = colors;
const style: string[] = [];

Object.keys(globalColors).map((variant) => {
  return Object.keys(globalColors[variant]).map((color) => {
    const value = globalColors[variant][color];
    style.push(`--${variant}-${color}: ${value}`);
  });
});

// SEO caching + static pages
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

  // ✅ ИСПРАВЛЕННЫЙ CANONICAL - без trailing slash
  alternates: {
    canonical: `${siteConfig.siteUrl.replace(/\/$/, '')}`,
    languages: {
      et: `${siteConfig.siteUrl.replace(/\/$/, '')}`,
      'x-default': `${siteConfig.siteUrl.replace(/\/$/, '')}`,
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="et"
      className={`${displayFont.variable} ${baseFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CSS Variables */}
        <style>{`:root{${style.join('')}}`}</style>

        {/* PRELOAD FONTS */}
        <link rel="preload" href="/fonts/playfair-display-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair-display-latin-700-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/lato-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/lato-latin-700-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="CQJJxJWmNzJ0fgOSj3gPL_kKRMEwoQp3wnhXFsT3bRc" />

        {/* GEO TAGS */}
        <meta name="geo.region" content="EE-37" />
        <meta name="geo.placename" content="Tallinn, Harjumaa" />
        <meta name="geo.position" content="59.4370;24.7536" />
        <meta name="ICBM" content="59.4370, 24.7536" />

        {/* ✅ AHREFS WEB ANALYTICS - CORRECTED */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="bomHtA+1BUw6NP0zbOTTrg"
          strategy="afterInteractive"
        />
      </head>

      <body className="bg-white text-slate-900 antialiased">

        {/* ✅ GA4 Loader */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BZJEP1SLG"
          strategy="afterInteractive"
        />

        {/* ✅ GA4 Config */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());
            gtag('config', 'G-6BZJEP1SLG', { 
              anonymize_ip: true,
              page_title: document.title,
              page_location: window.location.href
            });

            window.sendGAEvent = function(action, params = {}) {
              try { 
                gtag('event', action, {
                  ...params,
                  send_to: 'G-6BZJEP1SLG'
                }); 
              } catch (e) {
                console.log('GA Event error:', e);
              }
            };
          `}
        </Script>

        {/* ✅ Consent Mode */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            (function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted'
              });

              window.__updateConsent = function(consent) { 
                gtag('consent', 'update', consent);
              };
            })();
          `}
        </Script>

        <ThemeProviders>
          <AnalyticsWrapper />
          <CookieConsent />
          <div className="w-full flex flex-col items-center font-sans">
            <SearchProvider>
              <main className="w-full flex flex-col items-center mb-auto">{children}</main>
            </SearchProvider>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
