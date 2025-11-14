import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./client-wrapper";
import type { Metadata } from "next";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata: Metadata = {
  title: "Boileri hooldus, paigaldus ja remont Tallinnas | BoileriABI.ee",
  description:
    "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire abi, 24/7 hädaabi, professionaalne teenus ja garantiiga tööd.",
  alternates: {
    canonical: "https://www.boileriabi.ee/",
  },
  openGraph: {
    title: "Boileri hooldus Tallinnas – Kiire abi | BoileriABI.ee",
    description:
      "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire tulek, garantiiga tööd.",
    url: "https://www.boileriabi.ee/",
    siteName: "BoileriABI.ee",
    images: [
      {
        url: "https://www.boileriabi.ee/static/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Boileri hooldus Tallinnas",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boileri hooldus ja paigaldus Tallinnas | BoileriABI.ee",
    images: ["https://www.boileriabi.ee/static/images/og-main.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "BoileriABI.ee",
            telephone: "+37253684587",
            url: "https://www.boileriabi.ee/",
            image: "https://www.boileriabi.ee/static/images/og-main.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallinn",
              addressRegion: "Harjumaa",
              addressCountry: "EE",
            },
            areaServed: ["Tallinn", "Harjumaa"],
            priceRange: "€€",
          }),
        }}
      />

      {/* 🔥 STATISTIKA BLOKK */}
      <section className="w-full py-20 bg-[#E4FAFF]">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Statistika meie töödest
          </h2>

          <p className="text-gray-600 text-center mb-12 text-lg">
            Kliendid usaldavad meid — tulemused räägivad enda eest.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <p className="text-4xl font-bold text-primary-600">430+</p>
              <p className="text-gray-700 text-lg font-medium mt-1">
                Boileri remonti
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-yellow-500 flex items-center justify-center gap-2">
                ⭐ <span className="text-gray-900">4.9</span>
              </p>
              <p className="text-gray-700 text-lg font-medium mt-1">
                Klientide hinnang
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">24/7</p>
              <p className="text-gray-700 text-lg font-medium mt-1">
                Saadavus & tugi
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">3000+</p>
              <p className="text-gray-700 text-lg font-medium mt-1">
                Rahulolevat klienti
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🔧 Основной клиентский контент */}
      <ClientWrapper />

      {/* 🔥 Партнёры — КАРУСЕЛЬ ВНИЗУ */}
      <div className="mt-20 mb-20">
        <LogoCarousel />
      </div>

      <Footer />
    </>
  );
}
