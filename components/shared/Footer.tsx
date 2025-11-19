"use client";

import {
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink,
} from '@/components/landing';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = ({ className }: { className?: string }) => {

  // Универсальный трекер событий GA4 (без any)
  const track = (event: string, label: string) => {
    if (typeof window !== "undefined") {
      const g = (
        window as unknown as {
          gtag?: (...args: unknown[]) => void;
        }
      ).gtag;

      if (typeof g === "function") {
        g("event", event, {
          event_category: "engagement",
          event_label: label,
          value: 1,
        });
      }
    }
  };

  return (
    <LandingFooter
      className={`bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 ${className}`}
      title="BoileriABI.ee"
      description="Professionaalne boilerite paigaldus, remont ja hooldus Tallinnas ja Harjumaal."
      withBackground={false}
      variant="primary"
      logoComponent={
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/static/images/logo.png"
              alt="BoileriABI logo"
              width={46}
              height={46}
              className="h-12 w-12 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
            BoileriABI.ee
          </span>
        </div>
      }
      footnote={
        <div className="text-center p-6 text-gray-500 text-sm border-t border-gray-100 bg-white/50">
          © {new Date().getFullYear()} BoileriABI.ee — Kõik õigused kaitstud.
        </div>
      }
    >

      {/* === TEENUSED === */}
      <LandingFooterColumn
        title="Teenused"
        className="space-y-3 [&>h3]:bg-gradient-to-r [&>h3]:from-blue-600 [&>h3]:to-blue-800 [&>h3]:bg-clip-text [&>h3]:text-transparent [&>h3]:font-semibold"
      >
        <LandingFooterLink href="/paigaldus">Boileri paigaldus</LandingFooterLink>
        <LandingFooterLink href="/remont">Boileri remont</LandingFooterLink>
        <LandingFooterLink href="/hooldus">Boileri hooldus</LandingFooterLink>

        <Link
          href="/hadaabi"
          className="group flex items-center gap-2 transition-all duration-200 hover:translate-x-1 text-red-600 hover:text-red-700"
        >
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          Hädaabi 24/7
        </Link>
      </LandingFooterColumn>

      {/* === ETTEVÕTE === */}
      <LandingFooterColumn
        title="Ettevõte"
        className="space-y-3 [&>h3]:bg-gradient-to-r [&>h3]:from-gray-700 [&>h3]:to-gray-900 [&>h3]:bg-clip-text [&>h3]:text-transparent [&>h3]:font-semibold"
      >
        {[ 
          { href: "/meist", label: "Meist" },
          { href: "/hinnad", label: "Hinnad" },
          { href: "/garantii", label: "Garantii" },
          { href: "/kontakt", label: "Kontakt" }
        ].map((item) => (
          <Link key={item.href} href={item.href} className="group flex items-center gap-2 transition-all duration-200 hover:translate-x-1 text-gray-700 hover:text-gray-900">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            {item.label}
          </Link>
        ))}
      </LandingFooterColumn>

      {/* === KONTAKT === */}
      <LandingFooterColumn
        title="Kontakt"
        className="space-y-4 [&>h3]:bg-gradient-to-r [&>h3]:from-green-600 [&>h3]:to-green-800 [&>h3]:bg-clip-text [&>h3]:text-transparent [&>h3]:font-semibold"
      >

        {/* Телефон */}
        <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
          <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full group-hover:bg-red-100">
            <span className="text-red-600 text-sm">📞</span>
          </div>
          <a
            href="tel:+37253684587"
            onClick={() => track("click_phone_footer", "Footer Phone")}
            className="font-medium text-gray-800 hover:text-red-600 transition-colors"
          >
            +372 5368 4587
          </a>
        </div>

        {/* Email */}
        <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-full group-hover:bg-blue-100">
            <span className="text-blue-600 text-sm">✉️</span>
          </div>
          <a
            href="mailto:info@prism.ee"
            onClick={() => track("click_email_footer", "Footer Email")}
            className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            info@prism.ee
          </a>
        </div>

        {/* Aadress */}
        <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-50 rounded-full group-hover:bg-gray-100">
            <span className="text-gray-700 text-sm">📍</span>
          </div>
          <Link href="/kontakt" className="font-medium text-gray-800 hover:text-gray-900 transition-colors">
            Tallinn, Eesti
          </Link>
        </div>

        {/* Отзывы */}
        <div className="pt-4 mt-4 border-t border-gray-100">
          <a
            href="https://www.facebook.com/boileriabi.ee/reviews"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_review", "Footer Review")}
            className="group flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
          >
            <div className="flex items-center justify-center w-6 h-6 bg-green-50 rounded-full group-hover:bg-green-100">
              <span className="text-green-600 text-xs">⭐</span>
            </div>
            Jäta arvustus
          </a>
        </div>
      </LandingFooterColumn>

      {/* === SOTSIAALMEEDIA === */}
      <LandingFooterColumn
        title="Jälgi meid"
        className="space-y-4 [&>h3]:bg-gradient-to-r [&>h3]:from-purple-600 [&>h3]:to-pink-600 [&>h3]:bg-clip-text [&>h3]:text-transparent [&>h3]:font-semibold"
      >
        {[
          { href: "https://www.facebook.com/boileriabi.ee", label: "Facebook", emoji: "📘", color: "blue", event: "click_facebook" },
          { href: "https://www.instagram.com/the.vzglyad_/", label: "Instagram", emoji: "📷", color: "pink", event: "click_instagram" },
          { href: "https://www.tiktok.com/@the.vzglyad_", label: "TikTok", emoji: "🎵", color: "black", event: "click_tiktok" }
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(item.event, item.label)}
            className={`group flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all ${
              item.color === "blue"
                ? "hover:text-blue-600"
                : item.color === "pink"
                ? "hover:text-pink-600"
                : "hover:text-gray-900"
            }`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                item.color === "blue"
                  ? "bg-blue-50 group-hover:bg-blue-100"
                  : item.color === "pink"
                  ? "bg-pink-50 group-hover:bg-pink-100"
                  : "bg-gray-50 group-hover:bg-gray-100"
              }`}
            >
              <span className="text-sm">{item.emoji}</span>
            </div>
            <span className="font-medium text-gray-800">{item.label}</span>
          </a>
        ))}

        <div className="pt-4 mt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Küsi tasuta pakkumust</p>
          <Link
            href="/hinnad"
            onClick={() => track("click_cta_prices_footer", "Footer CTA Prices")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-sm hover:shadow"
          >
            <span>💬</span>
            Saada päring
          </Link>
        </div>
      </LandingFooterColumn>

    </LandingFooter>
  );
};

export default Footer;
