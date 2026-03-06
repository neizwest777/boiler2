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
import FloatingButtons from "@/components/shared/FloatingButtons";

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

        {/* Consent Mode v2 default — MUST be before gtag.js */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
          });

          // Restore consent from localStorage if user already accepted
          try {
            var saved = localStorage.getItem('cookie_preferences');
            if (saved) {
              var prefs = JSON.parse(saved);
              gtag('consent', 'update', {
                'ad_storage': prefs.marketing ? 'granted' : 'denied',
                'ad_user_data': prefs.marketing ? 'granted' : 'denied',
                'ad_personalization': prefs.marketing ? 'granted' : 'denied',
                'analytics_storage': prefs.analytics ? 'granted' : 'denied'
              });
            }
          } catch(e) {}
        `}} />

        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BZJEP1SLG"
          strategy="afterInteractive"
        />

        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            if (!window.gtag) {
              function gtag(){ dataLayer.push(arguments); }
              window.gtag = gtag;
            }
            window.gtag('js', new Date());
            window.gtag('config', 'G-6BZJEP1SLG', { anonymize_ip: true });
            window.gtag('config', 'AW-17959368156');
          `}
        </Script>

        <Script id="conversions" strategy="afterInteractive">
          {`
            // ====== GOOGLE ADS CONVERSION HELPER ======
            window.gtag_report_conversion = function(url, sendTo, value) {
              var redirectDone = false;
              var callback = function () {
                if (!redirectDone && typeof url !== 'undefined') {
                  redirectDone = true;
                  window.location = url;
                }
              };
              window.gtag('event', 'conversion', {
                'send_to': sendTo,
                'value': value || 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              setTimeout(callback, 1500);
              return false;
            };

            // ====== CLICK TRACKING: Phone / WhatsApp / Viber ======
            document.addEventListener('click', function(e) {
              var el;
              el = e.target.closest('a[href^="tel:"]');
              if (el && typeof window.gtag === 'function') {
                e.preventDefault();
                window.gtag_report_conversion(el.href, 'AW-17959368156/t09xCNnonfwbENzr2PNC', 25.0);
                return;
              }
              el = e.target.closest('a[href*="wa.me"]');
              if (el && typeof window.gtag === 'function') {
                e.preventDefault();
                window.gtag_report_conversion(el.href, 'AW-17959368156/ACk8CLSNm_wbENzr2PNC', 15.0);
                return;
              }
              el = e.target.closest('a[href*="viber"]');
              if (el && typeof window.gtag === 'function') {
                e.preventDefault();
                window.gtag_report_conversion(el.href, 'AW-17959368156/oVtzCMiTnvwbENzr2PNC', 15.0);
                return;
              }
            });

            // ====== FORM CONVERSION: вызывается из React после успешного ответа ======
            window.sendFormConversion = function() {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-17959368156/we1OCNqynPwbENzr2PNC',
                  'value': 25.0,
                  'currency': 'EUR'
                });
              }
            };
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

          <FloatingButtons />
        </ThemeProviders>

      </body>
    </html>
  );
}


