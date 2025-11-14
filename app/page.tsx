import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./client-wrapper";
import type { Metadata } from "next";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Boileri Paigaldus, Remont ja Hooldus Tallinnas | Boileriabi.ee",
  description: "Kogenud torumees Tallinnas - boileri paigaldus, remont, hooldus ja 24/7 hädaabi. Tasuta hindamine, kiire reageerimine ja töögarantii. Helista +37253684587",
  keywords: [
    "boileri paigaldus",
    "boileri remont", 
    "boileri hooldus",
    "torumees Tallinnas",
    "hädaabi boiler",
    "boileri teenused Tallinnas",
    "veesoojendi paigaldus",
    "boileri parandus",
    "24/7 boileriabi"
  ],
  alternates: {
    canonical: "https://boileriabi.ee/",
  },
  openGraph: {
    title: "Boileri Paigaldus, Remont ja Hooldus Tallinnas | Boileriabi.ee",
    description: "Kogenud torumees Tallinnas - boileri paigaldus, remont, hooldus ja 24/7 hädaabi. Tasuta hindamine, kiire reageerimine ja töögarantii.",
    url: "https://boileriabi.ee/",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Boileri paigaldus, remont ja hooldus Tallinnas",
      },
    ],
    locale: "et_EE",
    type: "website",
    emails: ["info@boileriabi.ee"],
    phoneNumbers: ["+37253684587"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boileri Paigaldus, Remont ja Hooldus Tallinnas | Boileriabi.ee",
    description: "Kogenud torumees Tallinnas - boileri paigaldus, remont, hooldus ja 24/7 hädaabi.",
    images: ["https://boileriabi.ee/api/og"],
    site: "@boileriabi",
    creator: "@boileriabi",
  },
};

export default function Page() {
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
            // ✅ АГГРЕГАТНЫЕ ОТЗЫВЫ ДЛЯ ЗВЕЗДОЧЕК В ПОИСКЕ
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            // ✅ GEO КООРДИНАТЫ ДЛЯ ЛОКАЛЬНОГО SEO
            geo: {
              "@type": "GeoCoordinates",
              latitude: "59.4370",
              longitude: "24.7536",
            },
            // ✅ ОСНОВНЫЕ УСЛУГИ С ЦЕНАМИ
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
                "name": "Kui kiiresti saab boileri remondi teha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hädaabijuhul saame Tallinnas kohale olla juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel."
                }
              },
              {
                "@type": "Question", 
                "name": "Kas andsite töödele garantii?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jah, kõikidele meie tehtud töödele anname garantii - paigaldustele 2 aastat, remonditöödele 1 aasta."
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
              <a 
                href="/kontakt" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                📝 Tasuta konsultatsioon
              </a>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              ⚡ <strong>Hädaabi:</strong> Saame kohale 1-2 tunni jooksul Tallinnas
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 2) HERO-БЛОК — картинка + текст */}
      <ClientWrapper />

      {/* 🔥 3) ПАРТНЁРЫ */}
      <section className="w-full py-16 bg-[#E4FAFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meie Usaldusvärted Partnerid</h2>
          <LogoCarousel />
        </div>
      </section>

      {/* ✅ FAQ БЛОК ДЛЯ ПОИСКОВИКОВ */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Korduma Kippuvad Küsimused
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kui kiiresti saab boileri remondi teha?</h3>
              <p className="text-gray-700">Hädaabijuhul saame Tallinnas kohale olla juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kas andsite töödele garantii?</h3>
              <p className="text-gray-700">Jah, kõikidele meie tehtud töödele anname garantii - paigaldustele 2 aastat, remonditöödele 1 aasta.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Millised piirkonnad teenindate?</h3>
              <p className="text-gray-700">Teenindame kogu Tallinnat ja Harjumaad. Tasuta sõit Tallinna piires, Harjumaal sõidutasu kokkuleppel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔽 FOOTER */}
      <Footer />
    </>
  );
}
