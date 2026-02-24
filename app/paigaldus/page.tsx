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
    <div className="w-full min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO - Split Layout */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wrench className="w-4 h-4" />
              Professionaalne teenus
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Boileri Paigaldus Tallinnas
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professionaalne boileri paigaldus, vahetus, remont ja hooldus Tallinnas ja Harjumaal. 
              Kiire kohaletulek, tasuta hindamine ja 2 aastat garantii.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">1–2 tundi</div><div className="text-xs text-gray-500">Paigaldusaeg</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">2 aastat</div><div className="text-xs text-gray-500">Töögarantii</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">Tasuta</div><div className="text-xs text-gray-500">Hindamine</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">Tallinn</div><div className="text-xs text-gray-500">& Harjumaa</div></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${PHONE_E164}`} className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg shadow-green-600/25 transition-all">
                <PhoneCall className="w-5 h-5" /> {PHONE_HUMAN}
              </a>
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl text-lg border-2 border-gray-200 hover:border-blue-300 shadow-sm transition-all">
                📝 Tasuta hindamine
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <Image
                src="/static/images/generated/hero-paigaldus.webp"
                alt="Professionaalne boileri paigaldus Tallinnas"
                width={800} height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">150–300€</div>
              <div className="text-xs text-gray-500">Paigalduse hind</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

        {/* PAIGALDUS */}
        <section id="paigaldus">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <Layers className="w-7 h-7 text-blue-500" />
            Professionaalne Boileri Paigaldus
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Korralik boileri paigaldus tagab seadme pika eluea ja madalama energiakulu. 
            Paigaldame elektriboilereid, mahuboilereid, läbivooluboilereid, soojuspumba boilereid ja päikeseboilereid.
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Paigalduse käigus teostame:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {['Seina kandevõime kontroll', 'Elektri ja torustiku testimine', 'Ohutusseadmete kontroll', 'Tühjenduskraani lisamine', 'Lõplik testimine ja kasutusjuhend'].map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VAHETUS */}
        <section id="vahetus">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <Wrench className="w-7 h-7 text-purple-600" />
            Boileri Vahetus
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Boileri vahetus on vajalik, kui vana boiler lekib, ei kuumuta korralikult, tarbib liiga palju elektrit 
            või on üle 12–15 aasta vana. Aitame valida sobiva mudeli ja mahu (30L–200L).
          </p>
        </section>

        {/* HOOLDUS */}
        <section id="hooldus">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <GaugeCircle className="w-7 h-7 text-green-600" />
            Boileri Hooldus – Katlakivi Ennetamine
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Boileri hooldus aitab vältida rikkeid, vähendada elektrikulu ja pikendada seadme eluiga. 
            Eesti vesi on lubjarikas — seepärast tekib katlakivi kiiresti.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
              <h3 className="font-semibold mb-3 text-green-900">Hooldus sisaldab:</h3>
              <div className="space-y-2">
                {['Anoodi kontroll ja vahetus', 'Katlakivi eemaldus', 'Küttespiraali kontroll', 'Termostaadi testimine'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-green-800 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
              <h3 className="font-semibold mb-3 text-blue-900">Kasu:</h3>
              <div className="space-y-2">
                {['Hooldus iga 1–2 aasta tagant', 'Kuni 15% elektrisääst', 'Eluea pikenemine 2–3×'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-blue-800 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REMONT */}
        <section id="remont">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <Flame className="w-7 h-7 text-orange-500" />
            Boileri Remont ja Küttekeha Vahetus
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Kui boiler ei kuumuta, lekib või teeb müra — teostame boileri remonti Tallinnas ning pakume hädaabi. 
            Levinud tööd: küttekeha vahetus, termostaadi vahetus, anoodi vahetus ja lekkekohtade parandamine.
          </p>
          <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
            <h3 className="font-semibold mb-3 text-orange-900">Remondime kõiki brände:</h3>
            <div className="flex flex-wrap gap-2">
              {BOILER_BRANDS_FULL.slice(0, 15).map(b => (
                <span key={b} className="bg-white px-3 py-1 rounded-full text-sm text-orange-800 border border-orange-200">{b}</span>
              ))}
              <span className="bg-white px-3 py-1 rounded-full text-sm text-orange-600 border border-orange-200 font-medium">+ {BOILER_BRANDS_FULL.length - 15} muud</span>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            <strong>Hädaabi Tallinnas:</strong> vajadusel kohal 1–2 tunni jooksul.
          </p>
        </section>

        {/* BOILER TYPES */}
        <section id="tuuBid">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Paigaldame Kõiki Boileritüüpe</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {BOILER_TYPES.map(t => (
              <div key={t.title} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">{t.title}</h3>
                <p className="text-sm text-gray-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE AREA */}
        <section id="piirkond">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Teeninduspiirkond</h2>
          <p className="text-lg text-gray-600 mb-6">
            Teenindame kogu Harjumaad: korterid, eramajad, äripinnad.
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map(a => (
              <span key={a} className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-gray-700">{a}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Korduma Kippuvad Küsimused</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">{item.a}</div>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* FINAL CTA */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Valmis boileri paigalduseks?</h2>
              <p className="text-lg text-blue-100 mb-8">
                Paigaldus · Remont · Hooldus · Vahetus · Küttekeha vahetus
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={`tel:${PHONE_E164}`} className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 shadow-lg transition-all">
                  <PhoneCall className="w-5 h-5" /> {PHONE_HUMAN}
                </a>
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl text-lg border border-white/30 transition-all">
                  📩 Saada päring
                </Link>
              </div>
              <p className="mt-6 text-blue-200 text-sm">⚡ Hädaabi: Kohal 1–2 tunni jooksul</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="w-full pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Seotud Teenused</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/remont" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><Flame className="w-5 h-5 text-orange-600" /></div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Boileri Remont</h3>
              </div>
              <p className="text-sm text-gray-500">Kiire ja kvaliteetne boileri remont Tallinnas</p>
            </Link>
            <Link href="/hooldus" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"><GaugeCircle className="w-5 h-5 text-green-600" /></div>
                <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">Boileri Hooldus</h3>
              </div>
              <p className="text-sm text-gray-500">Regulaarne hooldus katlakivi ennetamiseks</p>
            </Link>
            <Link href="/hadaabi" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center"><Wrench className="w-5 h-5 text-red-600" /></div>
                <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">Hädaabi 24/7</h3>
              </div>
              <p className="text-sm text-gray-500">Ööpäevaringne hädaabi boileri rikete korral</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
