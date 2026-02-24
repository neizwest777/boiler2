'use client';

import { useState } from 'react';
import ClientWrapper from "./client-wrapper";
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/shared/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

/* ===========================================================
   ✅ GA4 tracking
=========================================================== */
const track = (event: string, label: string) => {
  if (typeof window === "undefined") return;

  const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof g === "function") {
    g("event", event, {
      event_category: "engagement",
      event_label: label,
      value: 1,
    });
  }
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ✅ РАСШИРЕННЫЙ JSON-LD ДЛЯ ЛУЧШЕГО SEO */}
      <Script id="local-business-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Boileriabi - Boileri Paigaldus, Remont ja Hooldus Tallinnas",
          "description": "Professionaalne boileri paigaldus, remont ja hooldus Tallinnas ja Harjumaal. 24/7 häireteenus, 2 aastat garantii, kogenud torumehed.",
          "telephone": "+37253684587",
          "email": "info@boileriabi.ee",
          "url": "https://boileriabi.ee/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tallinn",
            "addressLocality": "Tallinn",
            "addressRegion": "Harjumaa",
            "postalCode": "10111",
            "addressCountry": "EE"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "areaServed": ["Tallinn", "Harjumaa", "Harju maakond"],
          "serviceType": ["Boileri paigaldus", "Boileri remont", "Boileri hooldus", "Häireteenus"],
          "priceRange": "€€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "127"
          }
        })}
      </Script>

      {/* 🔥 MODERN HERO WITH IMAGE */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Töötame 24/7 — helistage kohe
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Boileri{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Paigaldus</span>,{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Remont</span>{' '}
              ja <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Hooldus</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Professionaalne boileriteenused kogu Tallinna ja Harjumaa piirkonnas.
              Kiire kohaletulek, 2 aastat garantii, tasuta hindamine.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:+37253684587"
                onClick={() => track("click_phone", "Homepage Hero Phone")}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-green-600/25 hover:shadow-green-600/40"
              >
                📞 +372 5368 4587
              </a>
              <button
                onClick={() => {
                  track("open_modal", "Homepage Consultation Modal");
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 border-2 border-gray-200 hover:border-blue-300 shadow-sm"
              >
                📝 Tasuta hindamine
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">500+</div>
                <span>Paigaldust</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">24/7</div>
                <span>Hädaabi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">2a</div>
                <span>Garantii</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">98%</div>
                <span>Rahulolu</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <Image
                src="/static/images/generated/hero-paigaldus.webp"
                alt="Professionaalne boileri paigaldus ja remont Tallinnas"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">⭐</div>
                <div>
                  <div className="font-bold text-gray-900">4.9 / 5.0</div>
                  <div className="text-xs text-gray-500">127+ arvustust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 SERVICES WITH IMAGES */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meie Boileriteenused
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Kõik teenused ühest kohast — paigaldus, remont ja hooldus kogu Tallinna piirkonnas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paigaldus */}
            <Link href="/boileri-paigaldus-tallinna-piirkonnas" className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image src="/static/images/generated/hero-paigaldus.webp" alt="Boileri paigaldus Tallinnas" width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Paigaldus
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Boileri Paigaldus</h3>
                  <p className="text-gray-500 text-sm mb-4">Professionaalne paigaldus vastavalt ohutusstandarditele. 2 aastat garantii.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">150–300€</span>
                    <span className="text-sm text-blue-600 font-medium group-hover:translate-x-1 transition-transform">Loe rohkem →</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Remont */}
            <Link href="/boileri-remont-tallinna-piirkonnas" className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image src="/static/images/generated/hero-remont.webp" alt="Boileri remont Tallinnas" width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 text-red-600 text-sm font-medium mb-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    Remont & Hädaabi
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Boileri Remont</h3>
                  <p className="text-gray-500 text-sm mb-4">Kiire diagnostika ja remont 24/7. Parandame kõik tüüpi rikkeid.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">Alates 80€</span>
                    <span className="text-sm text-red-600 font-medium group-hover:translate-x-1 transition-transform">Loe rohkem →</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Hooldus */}
            <Link href="/boileri-hooldus-tallinna-piirkonnas" className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <Image src="/static/images/generated/hero-hooldus.webp" alt="Boileri hooldus Tallinnas" width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mb-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Hooldus
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Boileri Hooldus</h3>
                  <p className="text-gray-500 text-sm mb-4">Ennetav hooldus vähendab energiakulusid kuni 30% ja pikendab eluiga.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">60–120€</span>
                    <span className="text-sm text-green-600 font-medium group-hover:translate-x-1 transition-transform">Loe rohkem →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 📍 SERVICE AREA - MODERN */}
      <section className="w-full py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            📍 Kogu Tallinn ja Harjumaa
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Teeninduspiirkond</h2>
          <p className="text-lg text-blue-100 mb-12 max-w-xl mx-auto">
            Kiire kohaletulek igas Tallinna linnaosas ja Harjumaal
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {['Kesklinn', 'Mustamäe', 'Lasnamäe', 'Õismäe', 'Pirita', 'Nõmme', 'Haabersti', 'Viimsi'].map(area => (
              <div key={area} className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-sm text-sm font-medium transition-colors">
                {area}
              </div>
            ))}
          </div>

          <p className="mt-8 text-blue-200 text-sm">
            Samuti: Saue, Rae, Saku, Kiili, Kose, Anija ja teised Harjumaa piirkonnad
          </p>
        </div>
      </section>

      {/* ❓ FAQ - CLEAN */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Korduma Kippuvad Küsimused
            </h2>
            <p className="text-gray-500">Vastused levinumatele küsimustele</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                Kui kaua aega võtab boileri paigaldus?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Tavaline boileri paigaldus võtab <strong>2–4 tundi</strong>, olenevalt boileri tüübist ja paigalduskeskkonnast. 
                Kiirpaigalduse korral saame töö valmis sama päeva jooksul.
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                Millised on boileri remondi levinumad põhjused?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Enim esinevad rikked on <strong>veelekked, termostaadi probleemid, katlakivi kogunemine</strong> ja 
                <strong> tsirkulatsioonipumba rikked</strong>. Enamiku neist saame parandada kohapeal.
              </div>
            </details>

            <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                Kui sageli peaksin boilerit hooldama?
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Soovitame <strong>korra aastas</strong> teha põhjaliku boileri hoolduse. 
                See pikendab seadme eluiga 5–7 aastat ja vähendab energiakulusid kuni 30%.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 📞 FINAL CTA */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vajate boileriabi?</h2>
              <p className="text-lg text-green-100 mb-8 max-w-lg mx-auto">
                Helistage kohe ja saage tasuta hindamine. Tuleme kohale 2 tunni jooksul!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="tel:+37253684587"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:bg-green-50 shadow-lg"
                >
                  📞 +372 5368 4587
                </a>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 border border-white/30"
                >
                  📩 Saada päring
                </button>
              </div>

              <p className="mt-6 text-green-200 text-sm font-medium">
                ✓ Tasuta hindamine &nbsp;·&nbsp; ✓ 24/7 hädaabi &nbsp;·&nbsp; ✓ 2 aastat garantii
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClientWrapper />

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
