import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Mail, MapPin, Clock, ShieldCheck, Star, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Boileri Teenused Tallinnas",
  description: "Vajad boileri abi? Helista kohe +37253684587! Teenindame Tallinnat ja Harjumaad 24/7. Kiireim reageerimine, tasuta hindamine ja töögarantii.",
  keywords: [
    "boileri kontakt",
    "torumees Tallinnas",
    "boileri abi telefon",
    "hädaabi boiler",
    "boileri remont Tallinnas",
    "veesoojendi teenused",
    "boileri paigaldus kontakt"
  ],
  alternates: {
    canonical: "https://www.boileriabi.ee/kontakt",
  },
  openGraph: {
    title: "Kontakt - Boileri Teenused Tallinnas",
    description: "Vajad boileri abi? Helista kohe +37253684587! Teenindame Tallinnat ja Harjumaad 24/7. Kiireim reageerimine.",
    url: "https://boileriabi.ee/kontakt",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Kontakt&description=Kiire%20boileri%20abi%20Tallinnas",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Kontakt",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* ✅ JSON-LD SCHEMA FOR CONTACTS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Boileriabi.ee",
            "description": "Professionaalne boileri paigaldus, remont ja hooldus Tallinnas ja Harjumaal",
            "telephone": "+37253684587",
            "email": "info@boileriabi.ee",
            "url": "https://boileriabi.ee",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tallinn",
              "addressRegion": "Harjumaa",
              "addressCountry": "EE"
            },
            "areaServed": ["Tallinn", "Harjumaa"],
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceType": [
              "Boileri paigaldus",
              "Boileri remont", 
              "Boileri hooldus",
              "Hädaabi boiler"
            ],
            "priceRange": "€€"
          }),
        }}
      />

      <div className="w-full flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-6xl">

          {/* ✅ HERO CONTACT SECTION */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-gray-900 mb-4">
              Kontakt
            </h1>

            {/* Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
              <Image
                src="/static/images/generated/hero-kontakt.webp"
                alt="Võtke meiega ühendust - Boileriabi professionaalne teenindus"
                width={800}
                height={533}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Vajad kiiret ja professionaalset boileri abi? Oleme sinuga ühenduses mõne minuti jooksul!
            </p>

            {/* ✅ URGENT CONTACT BADGES */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full">
                <PhoneCall className="w-4 h-4" />
                <span className="text-sm font-semibold">Hädaabi 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">Kiire reageerimine</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm font-semibold">Töögarantii</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold">Kogu Harjumaa</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">

            {/* ✅ CONTACT INFORMATION CARD */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Võta Ühendust</h2>
              
              <div className="space-y-6">
                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <PhoneCall className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
                    <a 
                      href="tel:+37253684587" 
                      className="text-xl font-bold text-red-600 hover:text-red-700 transition-colors"
                    >
                      +372 5368 4587
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Hädaabi - 24/7 kättesaadav</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">E-post</h3>
                    <a 
                      href="mailto:info@boileriabi.ee" 
                      className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      info@boileriabi.ee
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Vastame 24 tunni jooksul</p>
                  </div>
                </div>

                {/* AREA */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Teeninduspiirkond</h3>
                    <p className="text-lg font-bold text-gray-900">Tallinn ja Harjumaa</p>
                    <p className="text-gray-600 text-sm mt-1">Tasuta sõit Tallinna piires</p>
                  </div>
                </div>

                {/* WORKING HOURS */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Tööaeg</h3>
                    <p className="text-lg font-bold text-gray-900">24/7 - iga päev</p>
                    <p className="text-gray-600 text-sm mt-1">Hädaabi öösel ja nädalavahetustel</p>
                  </div>
                </div>
              </div>

              {/* ✅ URGENT CTA */}
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl">
                <h3 className="text-xl font-bold text-red-900 mb-2">Hädaolukord?</h3>
                <p className="text-red-700 mb-4">
                  Kui boiler lekib või on ohtlik olukord - ära oota, helista kohe!
                </p>
                <a
                  href="tel:+37253684587"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-center py-4 px-6 rounded-lg text-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg"
                >
                  <PhoneCall className="w-6 h-6" />
                  HÄDAABI: +372 5368 4587
                </a>
              </div>
            </div>

            {/* ✅ SERVICE AREAS CARD */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Teeninduspiirkonnad</h2>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Pakume boileri teenuseid kogu <strong>Tallinnas ja Harjumaal</strong>. 
                  Tasuta sõit Tallinna piires, Harjumaal sõidutasu kokkuleppel.
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-100 p-3 rounded text-center font-semibold">🏙️ Tallinn</div>
                  <div className="bg-gray-100 p-3 rounded text-center font-semibold">🌊 Viimsi</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🏡 Rae</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🔥 Harku</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🏞️ Saue</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🚰 Maardu</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🔧 Keila</div>
                  <div className="bg-gray-100 p-3 rounded text-center">⚡ Laagri</div>
                  <div className="bg-gray-100 p-3 rounded text-center">💧 Saku</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🏘️ Peetri</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🌳 Nõmme</div>
                  <div className="bg-gray-100 p-3 rounded text-center">🌇 Kesklinn</div>
                </div>
              </div>

              {/* ✅ SERVICE TYPES */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Meie Teenused</h3>
                <div className="space-y-3">
                  <Link href="/paigaldus" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Wrench className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Boileri Paigaldus</span>
                  </Link>
                  <Link href="/remont" className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <Wrench className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">Boileri Remont</span>
                  </Link>
                  <Link href="/hooldus" className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <Wrench className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Boileri Hooldus</span>
                  </Link>
                  <Link href="/hadaabi" className="flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <Wrench className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-red-800">Hädaabi 24/7</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ REVIEWS SECTION */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Klientide Arvamused</h2>
            <p className="text-gray-600 text-center mb-8">Üle 3000 rahuloleva kliendi kogemus</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Tuli kohale 30 minutiga hädaabikõne peale. Väga professionaalne ja kiire töö! Boiler parandatud ja kõik lekked kõrvaldatud."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">JT</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Jaan Tamm</div>
                    <div className="text-sm text-gray-600">Tallinn, Lasnamäe</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Parandas boileri samal õhtul, kui helistasin. Aus hind ja super kvaliteet. Soovitan kõigile oma sõpradele!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-600">KM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Kertu Mäger</div>
                    <div className="text-sm text-gray-600">Viimsi</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Uue boileri paigaldus tehti kiirelt ja korralikult. Hind oli läbipaistev ja said kohe hinnapakkumise. Töögarantiiga rahulik."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-purple-600">AR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Andrus Raud</div>
                    <div className="text-sm text-gray-600">Tallinn, Nõmme</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ GUARANTEE SECTION */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Töögarantii Annab Kindluse
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Kõikidele meie tehtud töödele anname ametliku garanti - paigaldustele 2 aastat, remonditöödele 1 aasta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+37253684587"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                <PhoneCall className="w-6 h-6" />
                Kõne garantiiga: +372 5368 4587
              </a>
              <Link
                href="/hinnad"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                <ShieldCheck className="w-6 h-6" />
                Vaata hinnapakkumist
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              🛡️ 2 aastat paigaldustele • 1 aasta remonditöödele • 24/7 hädaabi
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
