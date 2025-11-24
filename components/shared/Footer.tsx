"use client";

import Image from 'next/image';
import Link from 'next/link';

export const Footer = ({ className }: { className?: string }) => {

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
    <footer className={`bg-gradient-to-br from-slate-900 to-slate-800 text-white ${className}`}>
      {/* Основной контент футера */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Верхняя часть с лого и контактами */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Лого и описание */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Image
                  src="/static/images/logo.png"
                  alt="BoileriABI logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BoileriABI
                </h3>
                <p className="text-sm text-gray-300">Professionaalne boileriteenus</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professionaalne boilerite paigaldus, remont ja hooldus Tallinnas ja Harjumaal. 
              24/7 hädaabiteteenus.
            </p>
            
            {/* Социальные сети */}
            <div className="flex space-x-3">
              {[
                { href: "https://www.facebook.com/boileriabi.ee", icon: "📘", label: "Facebook" },
                { href: "https://www.instagram.com/the.vzglyad_/", icon: "📷", label: "Instagram" },
                { href: "https://www.tiktok.com/@the.vzglyad_", icon: "🎵", label: "TikTok" }
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(`click_${social.label.toLowerCase()}`, `Footer ${social.label}`)}
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white border-l-4 border-blue-500 pl-3">
              Teenused
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/paigaldus", label: "Boileri paigaldus" },
                { href: "/remont", label: "Boileri remont" },
                { href: "/hooldus", label: "Boileri hooldus" },
                { href: "/hadaabi", label: "Hädaabi 24/7", highlight: true }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group flex items-center gap-2 transition-all duration-200 ${
                      link.highlight 
                        ? "text-red-400 hover:text-red-300" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      link.highlight ? "bg-red-500" : "bg-blue-500"
                    } opacity-0 group-hover:opacity-100 transition-opacity`} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Региональные услуги */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white border-l-4 border-green-500 pl-3">
              Teenused Tallinnas
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/boileri-paigaldus-tallinna-piirkonnas", label: "Paigaldus Tallinnas" },
                { href: "/boileri-remont-tallinna-piirkonnas", label: "Remont Tallinnas" },
                { href: "/boileri-hooldus-tallinna-piirkonnas", label: "Hooldus Tallinnas" },
                { href: "/hinnad", label: "Hinnakiri" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white border-l-4 border-purple-500 pl-3">
              Kontakt
            </h4>
            <div className="space-y-3">
              {/* Телефон */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                  <span className="text-red-400">📞</span>
                </div>
                <a
                  href="tel:+37253684587"
                  onClick={() => track("click_phone_footer", "Footer Phone")}
                  className="text-white hover:text-red-300 transition-colors font-medium"
                >
                  +372 5368 4587
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-blue-400">✉️</span>
                </div>
                <a
                  href="mailto:info@prism.ee"
                  onClick={() => track("click_email_footer", "Footer Email")}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  info@prism.ee
                </a>
              </div>

              {/* Адрес */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center group-hover:bg-gray-500/30 transition-colors">
                  <span className="text-gray-400">📍</span>
                </div>
                <Link href="/kontakt" className="text-white hover:text-gray-300 transition-colors">
                  Tallinn, Eesti
                </Link>
              </div>

              {/* CTA Кнопка */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <Link
                  href="/hinnad"
                  onClick={() => track("click_cta_footer", "Footer CTA")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span>💬</span>
                  Tasuta konsultatsioon
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть с копирайтом */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BoileriABI.ee — Kõik õigused kaitstud.
            </div>
            
            <div className="flex space-x-6">
              <Link href="/privaatsuspoliitika" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privaatsuspoliitika
              </Link>
              <Link href="/tingimused" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kasutingimused
              </Link>
              <a
                href="https://www.facebook.com/boileriabi.ee/reviews"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_review_footer", "Footer Review")}
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors flex items-center gap-1"
              >
                <span>⭐</span>
                Jäta arvustus
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
