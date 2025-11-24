'use client';

import { useState } from 'react';
import ClientWrapper from "./client-wrapper";
import Script from 'next/script';
import LogoCarousel from "@/components/LogoCarousel";
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

      {/* 🔥 УЛУЧШЕННЫЙ HERO С SEO-ТЕКСТОМ */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Boileri <span className="text-blue-600">Paigaldus</span>, <span className="text-red-600">Remont</span> ja <span className="text-green-600">Hooldus</span> Tallinnas
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professionaalne boileriteenused kogu <strong>Tallinna ja Harjumaa piirkonnas</strong>. 
            Kiire 24/7 häireteenus, <strong>2 aastat garantii</strong> ja üle 10 aasta kogemusega torumehed.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Paigaldatud boilerit</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-red-200">
              <div className="text-2xl font-bold text-red-600">24/7</div>
              <div className="text-sm text-gray-600">Häireteenus</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">2 a</div>
              <div className="text-sm text-gray-600">Töögarantii</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Rahulolevaid kliente</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+37253684587"
              onClick={() => track("click_phone", "Homepage Hero Phone")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Helista kohe: +372 5368 4587
            </a>

            <button
              onClick={() => {
                track("open_modal", "Homepage Consultation Modal");
                setIsModalOpen(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-blue-600"
            >
              📝 Tasuta konsultatsioon
            </button>
          </div>
        </div>
      </section>

      {/* 🎯 СЕКЦИЯ УСЛУГ С ВНУТРЕННИМИ ССЫЛКАМИ */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Meie Boileriteenused Tallinnas
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Pakume terviklikke lahendusi boileri paigalduseks, remondiks ja hoolduseks 
            kogu <strong>Tallinna ja Harjumaa piirkonnas</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paigaldus */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Boileri Paigaldus</h3>
              <p className="text-gray-600 mb-6">
                Professionaalne boileri paigaldus vastavalt kõigile ohutusstandarditele. 
                Valime parima lahendusi teie vajadustele.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">150-300€</div>
              <Link 
                href="/boileri-paigaldus-tallinna-piirkonnas" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => track("click_service", "Boiler Installation")}
              >
                Vaata detailsemalt
              </Link>
            </div>

            {/* Remont */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Boileri Remont</h3>
              <p className="text-gray-600 mb-6">
                Kiire ja usaldusväärne boileri remont 24/7. Parandame kõik tüüpi rikkeid 
                ja taastame teie soojusvarustuse.
              </p>
              <div className="text-2xl font-bold text-red-600 mb-4">Alates 80€</div>
              <Link 
                href="/boileri-remont-tallinna-piirkonnas" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => track("click_service", "Boiler Repair")}
              >
                Vaata detailsemalt
              </Link>
            </div>

            {/* Hooldus */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Boileri Hooldus</h3>
              <p className="text-gray-600 mb-6">
                Ennetav hooldus väldib kulukaid remonte ja pikendab boileri eluiga. 
                Säästke raha ja olge muretu.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">60-120€</div>
              <Link 
                href="/boileri-hooldus-tallinna-piirkonnas" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => track("click_service", "Boiler Maintenance")}
              >
                Vaata detailsemalt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 📍 ГЕО-СЕКЦИЯ ДЛЯ LOCAL SEO */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Teeninduspiirkond</h2>
          <p className="text-xl mb-12 opacity-90">
            Teenindame kogu <strong>Tallinna ja Harjumaa piirkonda</strong> kiire ja kvaliteetse teenusega
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Kesklinn</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Mustamäe</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Lasnamäe</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Õismäe</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Pirita</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Nõmme</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Haabersti</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Viimsi</div>
          </div>

          <p className="mt-8 text-lg opacity-90">
            <strong>Harjumaa:</strong> Saue, Rae, Saku, Kiili, Kose, Anija jt.
          </p>
        </div>
      </section>

      {/* ❓ FAQ СЕКЦИЯ ДЛЯ SEO */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Korduma Kippuvad Küsimused
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Vastused kõigile teie boileriga seotud küsimustele
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kui kaua aega võtab boileri paigaldus?
              </h3>
              <p className="text-gray-600">
                Tavaline boileri paigaldus võtab <strong>2-4 tundi</strong>, olenevalt boileri tüübist ja paigalduskeskkonnast. 
                Kiirpaigalduse korral saame töö valmis sama päeva jooksul.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Millised on boileri remondi levinumad põhjused?
              </h3>
              <p className="text-gray-600">
                Enim esinevad rikked on <strong>veelekked, termostaadi probleemid, katlakivi kogunemine</strong> ja 
                <strong> tsirkulatsioonipumba rikked</strong>. Enamiku neist saame parandada kohapeal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kui sageli peaksin boilerit hooldama?
              </h3>
              <p className="text-gray-600">
                Soovitame <strong>korra aastas</strong> teha põhjaliku boileri hoolduse. 
                See pikendab seadme eluiga 5-7 aastat ja vähendab energiakulusid kuni 30%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 ФИНАЛЬНЫЙ CTA */}
      <section className="w-full py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Valmis Lahendama Oma Boileriprobleemi?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Võtke ühendust juba täna ja saage tasuta hindamine meie professionaalsetelt torumeestelt
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+37253684587"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              📞 Helista: +372 5368 4587
            </a>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border-2 border-blue-500"
            >
              📩 Saada päring
            </button>
          </div>
          
          <p className="mt-6 text-lg opacity-80">
            <strong>24/7 häireteenus:</strong> Tuleme kohale 2 tunni jooksul!
          </p>
        </div>
      </section>

      <ClientWrapper />

      {/* Логотипы партнеров */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Saa meie partneriks</h3>
          <LogoCarousel />
        </div>
      </section>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
