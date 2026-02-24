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
import Footer from '@/components/shared/Footer'; // ✅ ДОБАВЛЕН ИМПОРТ ФУТЕРА
import CookieConsent from "@/components/shared/CookieConsent";

/* ==========================
   ШРИФТЫ
========================== */
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

/* ==========================
   CSS VARIABLES
========================== */
const globalColors = colors;
const style = Object.entries(globalColors)
  .flatMap(([variant, colors]) =>
    Object.entries(colors).map(([color, value]) => `--${variant}-${color}:${value}`)
  )
  .join(';');

/* ==========================
   SEO STATIC
========================== */
export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boileriabi.ee"),
  title: {
    default: siteConfig.title,
    template: `%s | Boileriabi`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  

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
  alternates: {
    canonical: 'https://www.boileriabi.ee',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

/* ==========================
   ROOT LAYOUT (ИСПРАВЛЕННЫЙ)
========================== */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="et"
      className={`${displayFont.variable} ${baseFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CSS VARIABLES */}
        <style dangerouslySetInnerHTML={{ __html: `:root{${style}}` }} />

        {/* КРИТИЧЕСКИЙ CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-white { background:#fff; }
          .text-slate-900 { color:#0f172a; }
          .antialiased { -webkit-font-smoothing: antialiased; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { width: 100%; overflow-x: hidden; }
        `}} />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />

        <meta name="google-site-verification" content="CQJJxJWmNzJ0fgOSj3gPL_kKRMEwoQp3wnhXFsT3bRc" />
      </head>

      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col w-full">

        {/* GA4 (lazy) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BZJEP1SLG"
          strategy="lazyOnload"
        />

        <Script id="ga-config" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-6BZJEP1SLG', { anonymize_ip: true });
            gtag('config', 'AW-17959368156');
          `}
        </Script>

        <Script id="conversions" strategy="lazyOnload">
          {`
            function gtag_report_conversion(url, sendTo) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': sendTo,
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              return false;
            }
            document.addEventListener('click', function(e) {
              var el;
              // WhatsApp
              el = e.target.closest('a[href*="wa.me"]');
              if (el && typeof gtag === 'function') {
                e.preventDefault();
                gtag_report_conversion(el.href, 'AW-17959368156/ACk8CLSNm_wbENzr2PNC');
                return;
              }
              // Phone
              el = e.target.closest('a[href^="tel:"]');
              if (el && typeof gtag === 'function') {
                e.preventDefault();
                gtag_report_conversion(el.href, 'AW-17959368156/t09xCNnonfwbENzr2PNC');
                return;
              }
              // Viber
              el = e.target.closest('a[href*="viber"]');
              if (el && typeof gtag === 'function') {
                e.preventDefault();
                gtag_report_conversion(el.href, 'AW-17959368156/oVtzCMiTnvwbENzr2PNC');
                return;
              }
            });
            // Form submit conversion
            document.addEventListener('submit', function(e) {
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17959368156/we1OCNqynPwbENzr2PNC',
                  'value': 1.0,
                  'currency': 'EUR'
                });
              }
            });
          `}
        </Script>

        <ThemeProviders>

          <AnalyticsWrapper />
          <CookieConsent />

          {/* Header теперь занимает всю ширину */}
          <Header />

          <SearchProvider>
            {/* Основной контент */}
            <main className="w-full flex-1">
              {children}
            </main>
          </SearchProvider>

          {/* ✅ ДОБАВЛЕН ФУТЕР */}
          <Footer />

        </ThemeProviders>

      </body>
    </html>
  );
}


