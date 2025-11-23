import { Lato, Playfair_Display } from 'next/font/google';
import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { Metadata, Viewport } from 'next';
import Script from "next/script";
import dynamic from 'next/dynamic';

import { colors } from '@/data/config/colors.js';

import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';
import Header from '@/components/shared/Header';

// Динамический импорт для CookieConsent
const CookieConsent = dynamic(() => import("@/components/shared/CookieConsent"), {
  ssr: false,
  loading: () => null,
});

const displayFont = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-space-display',
  preload: true,
  adjustFontFallback: false,
});

const baseFont = Lato({
  subsets: ['latin', 'latin-ext'],
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
  // ... без изменений
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
        
        {/* Preconnect для сторонних ресурсов */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />

        <meta name="google-site-verification" content="CQJJxJWmNzJ0fgOSj3gPL_kKRMEwoQp3wnhXFsT3bRc" />

        <meta name="geo.region" content="EE-37" />
        <meta name="geo.placename" content="Tallinn, Harjumaa" />
        <meta name="geo.position" content="59.4370;24.7536" />
        <meta name="ICBM" content="59.4370, 24.7536" />

        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="bomHtA+1BUw6NP0zbOTTrg"
          strategy="afterInteractive"
        />
      </head>

      <body className="bg-white text-slate-900 antialiased">
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
