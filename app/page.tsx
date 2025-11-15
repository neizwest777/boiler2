"use client";

import { useState } from 'react';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./client-wrapper";
import type { Metadata } from "next";
import LogoCarousel from "@/components/LogoCarousel";
import Link from 'next/link';
import { Button } from '@/components/shared/ui/button';

// Компонент модального окна
function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // ... (остальной код модального окна без изменений)
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />

      {/* ✅ УЛУЧШЕННАЯ JSON-LD LOCALBUSINESS СХЕМА */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Boileriabi.ee",
            description: "Boileri paigaldus, remont ja hooldus Tallinnas ja Harjumaal. Kogenud torumehed, kiire reageerimine ja töögarantii.",
            telephone: "+37253684587",
            email: "info@boileriabi.ee",
            url: "https://boileriabi.ee/",
            image: "https://boileriabi.ee/api/og",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallinn",
              addressRegion: "Harjumaa",
              addressCountry: "EE",
            },
            areaServed: ["Tallinn", "Harjumaa", "Harju maakond"],
            serviceType: [
              "Boileri paigaldus",
              "Boileri remont",
              "Boileri hooldus", 
              "Hädaabi boiler",
              "Veesoojendi teenused"
            ],
            openingHours: "Mo-Su 00:00-23:59",
            priceRange: "€€",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "59.4370",
              longitude: "24.7536",
            },
            makesOffer: [
              {
                "@type": "Offer",
                name: "Boileri paigaldus",
                description: "Professionaalne boileri paigaldus Tallinnas ja Harjumaal",
                areaServed: ["Tallinn", "Harjumaa"],
              },
              {
                "@type": "Offer", 
                name: "Boileri remont",
                description: "Kiire ja kvaliteetne boileri remont",
                areaServed: ["Tallinn", "Harjumaa"],
              },
              {
                "@type": "Offer",
                name: "Boileri hooldus",
                description: "Regulaarne boileri hooldus ja kontroll",
                areaServed: ["Tallinn", "Harjumaa"],
              }
            ]
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA ДЛЯ ЧАСТЫХ ВОПРОСОВ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Kui kiiresti saate kohale tulla?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hädaabijuhul saame Tallinnas kohale olla juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel."
                }
              },
              {
                "@type": "Question", 
                "name": "Kas pakute garantiid?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jah, kõikidele meie tehtud töödele anname garantiid - paigaldustele 2 aastat, remonditöödele 1 aasta."
                }
              },
              {
                "@type": "Question",
                "name": "Kas töötate nädalavahetustel?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Jah, töötame iga päev, sealhulgas nädalavahetustel. Hädaabi on saadaval 24/7."
                }
              },
              {
                "@type": "Question",
                "name": "Millised piirkonnad teenindate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Teenindame kogu Tallinnat ja Harjumaad. Tasuta sõit Tallinna piires, Harjumaal sõidutasu kokkuleppel."
                }
              }
            ]
          }),
        }}
      />

      {/* 🔥 1) STATISTIKA С УЛУЧШЕННОЙ СЕМАНТИКОЙ */}
      <section className="w-full py-20 bg-[#E4FAFF]" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4" itemProp="name">
            Boileri Paigaldus, Remont ja Hooldus Tallinnas
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            <span itemProp="description">Kogenud torumehed Tallinnas ja Harjumaal. Kiire 24/7 hädaabi, tasuta konsultatsioon ja töögarantii. Helista <span itemProp="telephone" className="font-semibold">+37253684587</span></span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div itemProp="review" itemScope itemType="https://schema.org/Review">
              <p className="text-4xl font-bold text-primary-600" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="430"/>
                430+
              </p>
              <p className="text-gray-700 text-lg font-medium mt-1" itemProp="name">Boileri remonti</p>
            </div>

            <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <p className="text-3xl font-bold text-yellow-500 flex items-center justify-center gap-2">
                ⭐ <span className="text-gray-900" itemProp="ratingValue">4.9</span>
              </p>
              <p className="text-gray-700 text-lg font-medium mt-1">
                <span itemProp="ratingCount">127</span> klientide hinnangut
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">24/7</p>
              <p className="text-gray-700 text-lg font-medium mt-1" itemProp="openingHours">Saadavus & hädaabi</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">3000+</p>
              <p className="text-gray-700 text-lg font-medium mt-1">Rahulolevat klienti</p>
            </div>
          </div>

          {/* ✅ CTA КНОПКИ ДЛЯ ПОИСКОВИКОВ */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+37253684587" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                itemProp="telephone"
              >
                📞 Helista kohe: +372 5368 4587
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                📝 Tasuta konsultatsioon
              </button>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              ⚡ <strong>Hädaabi:</strong> Saame kohale 1-2 tunni jooksul Tallinnas
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 2) HERO-БЛОК — картинка + текст */}
      <ClientWrapper />

      {/* 🔥 3) ПАРТНЁРЫ - ИСПРАВЛЕННЫЙ ТЕКСТ */}
      <section className="w-full py-16 bg-[#E4FAFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meie Usaldusvärted Partnerid</h2>
          <p className="text-gray-600 mb-2">Usaldusväärne partner</p>
          <p className="text-gray-700 mb-8">Töötame koos juhtivate tootjate ja partneritega</p>
          <LogoCarousel />
        </div>
      </section>

      {/* ✅ FAQ БЛОК ДЛЯ ПОИСКОВИКОВ */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Korduma Kippuvad Küsimused
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Leiate vastused kõige sagedamini esitatud küsimustele
          </p>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kui kiiresti saate kohale tulla?</h3>
              <p className="text-gray-700">Hädaabijuhul saame Tallinnas kohale olla juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kas pakute garantiid?</h3>
              <p className="text-gray-700">Jah, kõikidele meie tehtud töödele anname garantiid - paigaldustele 2 aastat, remonditöödele 1 aasta.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kas töötate nädalavahetustel?</h3>
              <p className="text-gray-700">Jah, töötame iga päev, sealhulgas nädalavahetustel. Hädaabi on saadaval 24/7.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Millised piirkonnad teenindate?</h3>
              <p className="text-gray-700">Teenindame kogu Tallinnat ja Harjumaad. Tasuta sõit Tallinna piires, Harjumaal sõidutasu kokkuleppel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* 🔽 FOOTER */}
      <Footer />
    </>
  );
}
