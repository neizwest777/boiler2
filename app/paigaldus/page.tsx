import {
  Wrench,
  Flame,
  Layers,
  GaugeCircle,
  PhoneCall,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PHONE_E164 = "+37253684587";
const PHONE_HUMAN = "+372 5368 4587";
const CANONICAL = "https://www.boileriabi.ee/paigaldus";
const OG_IMAGE =
  "https://boileriabi.ee/api/og?title=Boileri%20Paigaldus&description=Professionaalne%20boileri%20paigaldus%20Tallinnas";

const SERVICE_AREAS = [
  "Tallinn",
  "Viimsi",
  "Rae",
  "Saue",
  "Saku",
  "Maardu",
  "Keila",
  "Laagri",
  "Kogu Harjumaa",
];

const BOILER_TYPES = [
  { title: "Elektriboilerid", desc: "Lihtne ja töökindel lahendus kodudesse ja korteritesse." },
  { title: "Mahuboilerid (kogumisboiler)", desc: "Soojendab ja hoiab veevaru — sobib perele ja suuremale tarbimisele." },
  { title: "Läbivooluboilerid", desc: "Kompaktne lahendus, soojendab vett kasutamise hetkel." },
  { title: "Päikeseboilerid", desc: "Energiasäästlik lahendus koos päikesesüsteemiga." },
  { title: "Soojuspumba boilerid", desc: "Kõrge energiatõhusus, sobib majja/eramajja." },
  { title: "Kombiboilerid", desc: "Mitme soojusallika kasutus (nt elekter + küte)." },
];

const BOILER_BRANDS_FULL = [
  "Ariston",
  "Atlantic",
  "Tesy",
  "Bosch",
  "Thermor",
  "Electrolux",
  "Drazice",
  "Stiebel Eltron",
  "Gorenje",
  "Thermex",
  "Vaillant",
  "Baxi",
  "Ferroli",
  "A.O. Smith",
  "Nibe",
  "Daikin",
  "Panasonic",
  "Samsung",
  "LG",
  "Siemens",
  "Rheem",
  "OSO",
  "Eldom",
  "Hajdu",
  "Buderus",
  "Junkers",
  "Argo",
  "Kospel",
  "Clage",
  "Tatramat",
];

const FAQ = [
  { q: "Kui kaua aega võtab boileri paigaldus?", a: "Keskmiselt 1–2 tundi, keerukamatel töödel kuni 4h." },
  { q: "Kas vana boileri äravedu on võimalik?", a: "Jah — viime vana boileri ära vastavalt nõuetele." },
  { q: "Millal peaks boileri välja vahetama (boileri vahetus)?", a: "Kui boiler lekib, ei hoia temperatuuri, kütab aeglaselt või on üle 12–15 aasta vana." },
  { q: "Kas pakute töödele garantiid?", a: "Paigaldustöödele 2 aastat, remondile 1 aasta (sõltub töö iseloomust ja varuosast)." },
  { q: "Kui tihti on vaja boileri hooldust teha (boileri hooldus)?", a: "Soovitame hooldust iga 1–2 aasta tagant (anood + katlakivi), sõltuvalt vee karedusest." },
  { q: "Mis on boileri küttekeha vahetus?", a: "Küttekeha vahetus tähendab kütteelementi (TEN) asendamist, kui boiler ei kuumuta või kuumutab halvasti." },
  { q: "Kas teete Ariston boileri küttekeha vahetust?", a: "Jah — teostame Ariston boileri küttekeha vahetust ning ka teiste brändide remonti ja hooldust." },
  { q: "Kas teete boileri termostaadi vahetust?", a: "Jah — boileri termostaadi vahetus on levinud töö, kui temperatuur kõigub või boiler ei lülitu õigesti." },
  { q: "Kas hooldus aitab katlakivi vastu?", a: "Jah — katlakivi eemaldus ja anoodi kontroll pikendavad boileri eluiga ja vähendavad elektrikulu." },
  { q: "Milline boiler sobib minu koju/korterisse?", a: "Anname tasuta konsultatsiooni: arvestame inimeste arvu, tarbimist, ruumi ja boileri tüüpi." },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://boileriabi.ee"),
  title: "Boileri paigaldus Tallinnas | Remont, hooldus ja vahetus",
  description:
    "Boileri paigaldus Tallinnas ja Harjumaal: remont, hooldus, boileri vahetus, küttekeha vahetus, termostaadi vahetus. Kiire kohaletulek, tasuta hindamine, garantii. Helista +372 5368 4587.",
  keywords: [
    // Основные “коммерческие”
    "boileri paigaldus",
    "boileri paigaldus tallinnas",
    "boileri remont",
    "boileri remont tallinnas",
    "boileri hooldus",
    "boileri hooldus tallinnas",
    "boileri vahetus",
    "boileri vahetus tallinnas",
    // Со скрина
    "boileri küttekeha vahetus",
    "boileri küttekeha vahetus tallinnas",
    "ariston boileri küttekeha vahetus",
    "boileri termostaadi vahetus",
    // Дополнительно по интентам
    "veesoojendi paigaldus",
    "boileri montaaž",
    "boileri paigaldus hind",
    "katlakivi eemaldus boilerist",
    "anoodi vahetus boileris",
    "boileri hädaabi tallinn",
  ],
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    title: "Boileri paigaldus Tallinnas | Remont, hooldus ja vahetus",
    description:
      "Professionaalne boilerite paigaldus, remont, hooldus ja vahetus Tallinnas ja Harjumaal. Küttekeha/termostaadi vahetus, tasuta hindamine, garantii.",
    url: CANONICAL,
    siteName: "Boileriabi.ee",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Boileriabi.ee - Boileri paigaldus Tallinnas" }],
    locale: "et_EE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boileri paigaldus Tallinnas | Remont, hooldus ja vahetus",
    description:
      "Boileri paigaldus, remont, hooldus ja vahetus Tallinnas/Harjumaal. Küttekeha ja termostaadi vahetus. Helista.",
    images: [OG_IMAGE],
  },
  category: "Plumbing service",
};

export default function Paigaldus() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://boileriabi.ee/#business",
        name: "Boileriabi.ee",
        url: "https://boileriabi.ee",
        telephone: PHONE_E164,
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tallinn",
          addressRegion: "Harjumaa",
          addressCountry: "EE",
        },
        areaServed: ["Tallinn", "Harjumaa"],
        openingHours: "Mo-Su 00:00-23:59",
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL}#service`,
        name: "Boileri teenused Tallinnas",
        serviceType: [
          "Boileri paigaldus",
          "Boileri remont",
          "Boileri hooldus",
          "Boileri vahetus",
          "Boileri küttekeha vahetus",
          "Boileri termostaadi vahetus",
        ],
        description:
          "Boileri paigaldus, remont, hooldus ja vahetus Tallinnas ja Harjumaal. Teostame ka boileri küttekeha vahetust ja termostaadi vahetust.",
        provider: { "@id": "https://boileriabi.ee/#business" },
        areaServed: ["Tallinn", "Harjumaa"],
        offers: {
          "@type": "Offer",
          url: CANONICAL,
          priceCurrency: "EUR",
          price: "150",
          description:
            "Boileri paigaldus — hind alates 150 €. Täpne hind selgub tasuta hindamise käigus.",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Avaleht", item: "https://boileriabi.ee/" },
          { "@type": "ListItem", position: 2, name: "Boileri teenused", item: CANONICAL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL}#faq`,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          {/* H1 */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-gray-900">
            Boileri Paigaldus Tallinnas | Professionaalne Teenus
          </h1>

          {/* Hero Image */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/static/images/generated/hero-paigaldus.webp"
              alt="Professionaalne boileri paigaldus Tallinnas - kogenud torumees paigaldab boilerit"
              width={800}
              height={533}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            <strong>Professionaalne boileri paigaldus Tallinnas ja Harjumaal</strong> – Boileriabi.ee
            pakub kvaliteetset ja kiiret boilerite <strong>paigaldust</strong>, <strong>hooldust</strong>,{" "}
            <strong>remonti</strong> ja <strong>vahetust</strong>. Teostame ka{" "}
            <strong>boileri küttekeha vahetust</strong> ning <strong>boileri termostaadi vahetust</strong>.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Kiire montaaž</span>
              </div>
              <p className="text-sm text-green-700">1–2 tunni jooksul</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Töögarantii</span>
              </div>
              <p className="text-sm text-blue-700">2 aastat paigaldustele</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">Tasuta hindamine</span>
              </div>
              <p className="text-sm text-purple-700">Enne töö alustamist</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Kogu Harjumaa</span>
              </div>
              <p className="text-sm text-orange-700">Tallinn ja ümbrus</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Wrench className="text-blue-600 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold text-blue-900">
                  Vajate boileri paigaldust, remonti, hooldust või vahetust?
                </p>
                <p className="text-blue-700">Tasuta hindamine ja kiire kohaletulek Tallinnas</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE_E164}`}
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition text-lg font-semibold flex items-center gap-2"
                aria-label={`Helista: ${PHONE_HUMAN}`}
              >
                <PhoneCall className="w-5 h-5" />
                Helista: {PHONE_HUMAN}
              </a>

              <Link
                href="/kontakt"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition text-lg font-semibold flex items-center gap-2"
              >
                📝 Tasuta hindamine
              </Link>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">
            {/* INSTALLATION */}
            <section id="paigaldus">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-7 h-7 text-blue-500" />
                Professionaalne Boileri Paigaldus Tallinnas
              </h2>

              <p>
                Korralik <strong>boileri paigaldus Tallinnas</strong> tagab seadme pika eluea ja madalama
                energiakulu. Paigaldame elektriboilereid, mahuboilereid (kogumisboiler), läbivooluboilereid,
                soojuspumba boilereid ja päikeseboilereid.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-semibold mb-2">Paigalduse käigus teostame:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Seina kandevõime kontroll</li>
                  <li>Elektri ja torustiku testimine</li>
                  <li>Ohutusseadmete kontroll</li>
                  <li>Tühjenduskraani lisamine</li>
                  <li>Lõplik testimine ja kasutusjuhend</li>
                </ul>
              </div>
            </section>

            {/* VAHETUS */}
            <section id="vahetus">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-7 h-7 text-purple-600" />
                Boileri Vahetus (Tallinnas ja Harjumaal)
              </h2>

              <p>
                <strong>Boileri vahetus</strong> on vajalik, kui vana boiler lekib, ei kuumuta korralikult,
                tarbib liiga palju elektrit või on üle 12–15 aasta vana. Pakume kiiret boileri vahetust ning
                aitame valida sobiva mudeli ja mahu (nt 30L, 50L, 80L, 100L, 120L, 150L, 200L).
              </p>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mt-4">
                <h3 className="text-xl font-semibold mb-2">Populaarsed otsingufraasid:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>boileri vahetus</li>
                  <li>boileri vahetus tallinnas</li>
                  <li>boileri paigaldus, vahetus</li>
                </ul>
              </div>
            </section>

            {/* HOOLDUS */}
            <section id="hooldus">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GaugeCircle className="w-7 h-7 text-green-600" />
                Boileri Hooldus – Katlakivi Ennetamine
              </h2>

              <p>
                <strong>Boileri hooldus</strong> aitab vältida rikkeid, vähendada elektrikulu ja pikendada
                seadme eluiga. Eesti vesi on lubjarikas — seepärast tekib katlakivi kiiresti. Hooldus sisaldab
                katlakivi eemaldust, anoodi kontrolli/vahetust ja elektri-ohutuse kontrolli.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-2">Hooldus sisaldab:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Anoodi kontroll ja vajadusel vahetus</li>
                    <li>Katlakivi eemaldus</li>
                    <li>Küttespiraali kontroll</li>
                    <li>Termostaadi testimine</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold mb-2">Soovitused:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hooldus iga 1–2 aasta tagant</li>
                    <li>Kuni 15% elektrisääst</li>
                    <li>Eluea pikenemine 2–3×</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* REMONT + küttekeha/termostaat */}
            <section id="remont">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Flame className="w-7 h-7 text-orange-500" />
                Boileri Remont, Küttekeha Vahetus ja Termostaadi Vahetus
              </h2>

              <p>
                Kui boiler ei kuumuta, lekib või teeb müra — teostame <strong>boileri remonti Tallinnas</strong> ning
                pakume hädaabi. Levinud tööd: <strong>boileri küttekeha vahetus</strong>,{" "}
                <strong>boileri termostaadi vahetus</strong>, anoodi vahetus ja lekkekohtade parandamine.
              </p>

              <div className="bg-orange-50 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-semibold mb-2">Otsingufraasid, mida katame:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>boileri küttekeha vahetus</li>
                  <li>boileri küttekeha vahetus tallinnas</li>
                  <li>ariston boileri küttekeha vahetus</li>
                  <li>boileri termostaadi vahetus</li>
                  <li>boileri remont</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-2">Remondime ja hooldame erinevaid brände:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {BOILER_BRANDS_FULL.map((b) => (
                    <div key={b}>{b}</div>
                  ))}
                </div>
              </div>

              <p id="hadaabi" className="mt-4">
                <strong>Hädaabi Tallinnas:</strong> vajadusel kohale 1–2 tunni jooksul.
              </p>
            </section>

            {/* TYPES */}
            <section id="tuuBid">
              <h2 className="text-3xl font-bold mb-6">Paigaldame Kõiki Boileritüüpe</h2>

              <div className="space-y-6">
                {BOILER_TYPES.map((t) => (
                  <div key={t.title} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold">{t.title}</h3>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PRICING */}
            <section id="hinnad">
              <h2 className="text-3xl font-bold mb-6">Boileri Paigalduse Hinnad</h2>

              <p>
                Hind sõltub boileri tüübist, mahust ja paigalduskohast. Pakume tasuta hindamist enne töö
                alustamist.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <ul className="list-disc list-inside space-y-1">
                  <li>Boileri tüüp ja maht</li>
                  <li>Paigalduskoha keerukus</li>
                  <li>Lisatarvikud</li>
                  <li>Vana boileri eemaldus</li>
                </ul>
              </div>
            </section>

            {/* AREA */}
            <section id="piirkond">
              <h2 className="text-3xl font-bold mb-6">Teeninduspiirkond: Tallinn ja Harjumaa</h2>

              <p>
                Teenindame kogu Harjumaad: korterid, eramajad, äripinnad. Kõige sagedamini: Tallinn, Viimsi,
                Rae, Saue, Saku, Maardu, Keila, Laagri.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {SERVICE_AREAS.map((a) => (
                  <div key={a} className="bg-gray-100 p-2 rounded text-center">
                    {a}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-bold mb-6">Korduma Kippuvad Küsimused</h2>

              <div className="space-y-6">
                {FAQ.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FINAL CTA */}
          <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Valmis boileri paigalduseks?</h2>
            <p className="text-xl mb-6 opacity-90">
              Paigaldus • Remont • Hooldus • Vahetus • Küttekeha vahetus • Termostaadi vahetus
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${PHONE_E164}`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 shadow-lg"
                aria-label={`Helista: ${PHONE_HUMAN}`}
              >
                <PhoneCall className="w-6 h-6" />
                Helista: {PHONE_HUMAN}
              </a>

              <Link
                href="/kontakt"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 shadow-lg"
              >
                📩 Saada päring
              </Link>
            </div>

            <p className="mt-4 text-blue-200 text-sm">⚡ Hädaabi: Kohal 1–2 tunni jooksul Tallinnas</p>
          </section>

          {/* RELATED SERVICES (оставляем как у тебя, чтобы ничего не ломать) */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Seotud Teenused</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/remont"
                className="bg-orange-50 p-6 rounded-lg border border-orange-200 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Flame className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-orange-800">Boileri Remont</h3>
                </div>
                <p className="text-orange-700">Kiire ja kvaliteetne boileri remont Tallinnas</p>
              </Link>

              <Link
                href="/hooldus"
                className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GaugeCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">Boileri Hooldus</h3>
                </div>
                <p className="text-green-700">Regulaarne hooldus katlakivi ennetamiseks</p>
              </Link>

              <Link
                href="/hadaabi"
                className="bg-red-50 p-6 rounded-lg border border-red-200 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-800">Hädaabi</h3>
                </div>
                <p className="text-red-700">24/7 hädaabi boileri rikete korral</p>
              </Link>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
