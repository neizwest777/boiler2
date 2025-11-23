import { Wrench, Droplets, AlertTriangle, CheckCircle, PhoneCall, Shield, Clock, Euro, Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Teenuste Hinnad 2024 | Läbipaistvad Hinnad | Boileriabi.ee",
  description: "Boileri paigalduse, remondi ja hoolduse hinnad 2024. Läbipaistvad hinnad: paigaldus 120-250€, hooldus 80-150€, remont 50-200€. Tasuta hindamine!",
  keywords: [
    "boileri hinnad",
    "boileri paigalduse hind",
    "boileri remondi hind",
    "boileri hoolduse hind",
    "veesoojendi hinnad",
    "boileri teenuse hind",
    "hädaabi boileri hind",
    "küttespiraali vahetuse hind"
  ],
  alternates: {
    canonical: "https://boileriabi.ee/hinnad",
  },
  openGraph: {
    title: "Boileri Teenuste Hinnad 2024 | Läbipaistvad Hinnad | Boileriabi.ee",
    description: "Boileri paigalduse, remondi ja hoolduse hinnad 2024. Läbipaistvad hinnad koos töögarantiiga.",
    url: "https://boileriabi.ee/hinnad",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Boileri%20Hinnad&description=L%C3%A4bipaistvad%20hinnad%202024",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Boileri teenuste hinnad",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* ✅ JSON-LD SCHEMA FOR PRICE INFORMATION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Boileri Teenuste Hinnad",
            "description": "Läbipaistvad hinnad boileri paigaldusele, remondile ja hooldusele Tallinnas ja Harjumaal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Boileriabi.ee",
              "telephone": "+37253684587",
              "priceRange": "€€"
            },
            "areaServed": ["Tallinn", "Harjumaa"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Boileri Teenuste Hinnakiri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Boileri paigaldus"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": 120,
                    "maxPrice": 250,
                    "priceCurrency": "EUR"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Boileri hooldus"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": 80,
                    "maxPrice": 150,
                    "priceCurrency": "EUR"
                  }
                }
              ]
            }
          }),
        }}
      />

      <div className="w-full flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-6xl bg-white/70 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-200">

          {/* ✅ OPTIMIZED HERO SECTION */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-center mb-6 text-gray-900">
            Boileri Teenuste Hinnad 2024
          </h1>

          <p className="md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8">
            <strong>Läbipaistvad hinnad boileri paigaldusele, remondile ja hooldusele.</strong> Kõik tööd teostatakse professionaalselt, kiirelt ja töögarantiiga.
          </p>

          {/* ✅ TRANSPARENCY BADGES */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Läbipaistvad hinnad</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Töögarantii</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <Euro className="w-4 h-4" />
              <span className="text-sm font-semibold">Tasuta hindamine</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">Kiire kalkulatsioon</span>
            </div>
          </div>

          {/* ✅ PRICE GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            <div className="rounded-2xl shadow-lg p-6 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-8 h-8 text-primary-500" />
                <h2 className="text-xl font-bold text-gray-900">Boileri Paigaldus</h2>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Professionaalne paigaldus uutele ja olemasolevatele süsteemidele. Sisaldab kõiki vajalikke komponente ja seadistusi.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary-600">120–250 €</span>
                <span className="text-gray-500 text-sm">alates</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Elektriühendused ja maandus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Torustiku ühendamine</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Ohutusseadmete paigaldus</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-8 h-8 text-blue-500" />
                <h2 className="text-xl font-bold text-gray-900">Boileri Hooldus</h2>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Põhjalik hooldus katlakivi eemaldamisega, anoodi kontroll ja süsteemi ülevaatus. Säästab elektrit ja pikendab eluiga.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary-600">80–150 €</span>
                <span className="text-gray-500 text-sm">alates</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Katlakivi eemaldamine</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Anoodi kontroll ja vahetus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Ohutusseadmete testimine</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <h2 className="text-xl font-bold text-gray-900">Boileri Remont</h2>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Kiire rikke tuvastamine ja kvaliteetne parandamine. Remondime kõiki tuntud brände ja mudeleid.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary-600">50–200 €</span>
                <span className="text-gray-500 text-sm">alates</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Diagnostika ja rikke tuvastamine</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Vajalike varuosade vahetus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Süsteemi testimine ja katsetamine</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                <h2 className="text-xl font-bold text-gray-900">Hädaabi 24/7</h2>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Kiire reageerimine lekete, lühiste või ohtlike olukordade korral. 24/7 kättesaadavus.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary-600">90–150 €</span>
                <span className="text-gray-500 text-sm">alates</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Kiireim reageerimine 1-2h</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Ohu kiire kõrvaldamine</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Ajutine lahendus või remont</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h2 className="text-xl font-bold text-gray-900">Anoodi Vahetus</h2>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Magneesiumanoodi vahetus, mis kaitseb boilerit rooste ja korrosiooni eest. Eluea pikenemine 2-3x.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary-600">30–90 €</span>
                <span className="text-gray-500 text-sm">alates</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Anoodi seisukorra kontroll</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Vajadusel uue anoodi paigaldus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Süsteemi testimine pärast vahetust</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-8 h-8 text-primary-700" />
                <h2 className="text-xl font-bold text-gray-900">Küttespiraali Vahetus</h2>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                Vajalik, kui boiler ei kuumuta vett või lülitab kaitse välja. Kasutame kvaliteetseid varuosasid.
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary-600">60–150 €</span>
                <span className="text-gray-500 text-sm">alates</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Vana küttespiraali eemaldamine</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Uue küttespiraali paigaldus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Süsteemi funktsionaalsuse kontroll</span>
                </div>
              </div>
            </div>

          </div>

          {/* ✅ PRICE FACTORS SECTION */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Mis Mõjutab Boileri Teenuse Hinda?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Peamised hinnamõjutajad:</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Boileri tüüp ja mudel</strong> - erinevad mudelid nõuavad erinevaid varuosasid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Paigalduskoha keerukus</strong> - ligipääsetavus ja ruumitingimused</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Vajalike varuosade hind</strong> - kvaliteetsed originaalvaruosad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Tööaja kestus</strong> - keerukamad remondid võtavad rohkem aega</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Meie hinnaeelised:</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Tasuta hindamine</strong> - täpne hinnapakkumine enne töö alustamist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Läbipaistvad hinnad</strong> - puuduvad varjatud kulud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Töögarantii</strong> - kõikidele töödele anname garanti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ausad soovitused</strong> - ei soovita üleliigseid remonte</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ✅ CTA SECTION */}
          <div className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vajad Täpset Hinnapakkumist?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Saada pilt või kirjelda oma boileri probleemi - anname tasuta täpse hinnapakkumise!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+37253684587"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                <PhoneCall className="w-6 h-6" />
                Helista: +372 5368 4587
              </a>
              <Link
                href="/kontakt"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                📩 Saada päring
              </Link>
            </div>
            <p className="mt-4 text-primary-200 text-sm">
              ⚡ Tasuta hindamine • Täpne kalkulatsioon • Läbipaistvad hinnad
            </p>
          </div>

          {/* ✅ FAQ SECTION */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Korduma Kippuvad Küsimused Hindade Kohta</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas hinnad sisaldavad käibemaksu?</h3>
                <p className="text-gray-700">Jah, kõik meie hinnad on käibemaksuga (20%). Lõpliku hinnapakkumise saate tasuta enne töö alustamist.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas pakute soodustusi?</h3>
                <p className="text-gray-700">Jah, pensionäridele ja korduvatele klientidele pakume soodustusi. Küsi täpsemalt!</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Millal pean maksma?</h3>
                <p className="text-gray-700">Tasute tööde lõpetamise järel, kui olete rahul tulemusega. Aktsepteerime sularaha ja pangamakseid.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mis juhtub, kui hind muutub töö käigus?</h3>
                <p className="text-gray-700">Kõik muudatused arutatakse ja kinnitatakse enne jätkamist. Teie nõusolekuta hindu ei tõsteta.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
