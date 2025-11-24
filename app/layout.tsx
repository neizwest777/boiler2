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
const style = Object.entries(globalColors)
  .flatMap(([variant, colors]) =>
    Object.entries(colors).map(([color, value]) => `--${variant}-${color}:${value}`)
  )
  .join(';');

export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boileriabi.ee"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  alternates: {
    canonical: "https://www.boileriabi.ee",
    languages: {
      "et-EE": "https://www.boileriabi.ee",
      "x-default": "https://www.boileriabi.ee",
    },
  },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://www.boileriabi.ee",
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.socialBanner,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'et_EE',
    type: 'website',
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
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-white { background:#fff; }
          .text-slate-900 { color:#0f172a; }
          .antialiased { -webkit-font-smoothing: antialiased; }
        `}} />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />

        <meta name="google-site-verification" content="CQJJxJWmNzJ0fgOSj3gPL_kKRMEwoQp3wnhXFsT3bRc" />
      </head>

      <body className="bg-white text-slate-900 antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6BZJEP1SLG" strategy="lazyOnload" />

        <Script id="ga-config" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-6BZJEP1SLG', { anonymize_ip:true });
          `}
        </Script>

        <ThemeProviders>
          <AnalyticsWrapper />
          <CookieConsent />
          <Header />
          <SearchProvider>
            <main className="w-full flex flex-col items-center mb-auto">
              {children}
            </main>
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
