import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Wrench, AlertTriangle, Flame, GaugeCircle, PhoneCall, Clock, Shield, CheckCircle, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Remont Tallinnas | Kiire Hädaabi 24/7 | Boileriabi.ee",
  description: "Boileri remont Tallinnas ja Harjumaal. Kiire hädaabi 24/7, diagnostika, küttespiraali vahetus, lekke kõrvaldamine. Garantii töödele. Helista +37253684587",
  keywords: [
    "boileri remont",
    "boileri remont Tallinnas",
    "boileri parandus",
    "hädaabi boiler",
    "küttespiraali vahetus",
    "boileri lekke parandus",
    "veesoojendi remont",
    "boileri rike",
    "24/7 boileri remont"
  ],
  alternates: {
    canonical: "https://boileriabi.ee/remont",
  },
  openGraph: {
    title: "Boileri Remont Tallinnas | Kiire Hädaabi 24/7 | Boileriabi.ee",
    description: "Boileri remont Tallinnas ja Harjumaal. Kiire hädaabi 24/7, diagnostika, küttespiraali vahetus, lekke kõrvaldamine. Garantii töödele.",
    url: "https://boileriabi.ee/remont",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Boileri%20Remont&description=Kiire%20hädaabi%2024%2F7%20Tallinnas",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Boileri remont Tallinnas",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function Remont() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      <Header />

      {/* ✅ JSON-LD SCHEMA FOR REPAIR SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Boileri Remont Tallinnas",
            "description": "Professionaalne boileri remont Tallinnas ja Harjumaal. Kiire hädaabi 24/7, diagnostika ja kvaliteetne parandus.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Boileriabi.ee",
              "telephone": "+37253684587",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tallinn",
                "addressRegion": "Harjumaa",
                "addressCountry": "EE"
              }
            },
            "areaServed": ["Tallinn", "Harjumaa"],
            "serviceType": "Boileri remont ja parandus",
            "hoursAvailable": "Mo-Su 00:00-23:59",
            "offers": {
              "@type": "Offer",
              "description": "Kiire boileri remont koos töögarantiiga"
            }
          }),
        }}
      />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* ✅ OPTIMIZED HERO SECTION */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-gray-900">
            Boileri Remont Tallinnas | Kiire Hädaabi 24/7
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            <strong>Professionaalne boileri remont Tallinnas ja Harjumaal</strong> - 
            Kui boiler ei tööta korrektselt, lekib, ei kuumuta vett või teeb kummalisi helisid, 
            pakume kiiret ja kvaliteetset remonditeenust. Meie kogenud torumehed diagnostivad 
            probleemi kiiresti ja parandavad selle vastavalt Eesti standarditele.
          </p>

          <p className="mt-4 md:text-xl text-gray-800 leading-relaxed">
            Remondime kõiki tuntud boileri tootjaid: <strong>Ariston, Atlantic, Tesy, Drazice, Bosch, 
            Regent, Thermor, Electrolux, Stiebel Eltron</strong> ja paljud teised.
          </p>

          {/* ✅ URGENT CTA BLOCK */}
          <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold text-red-900">
                  Hädaabi boileriga? Saame kiiresti kohale!
                </p>
                <p className="text-red-700 text-sm">
                  24/7 hädaabi - reageerime võimalusel samal päeval
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37253684587"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow transition text-lg font-semibold flex items-center gap-2 text-center justify-center"
              >
                <PhoneCall className="w-5 h-5" />
                Hädaabi: +372 5368 4587
              </a>
              <Link
                href="/kontakt"
                className="bg-white text-red-600 border border-red-300 hover:bg-red-50 px-6 py-3 rounded-lg shadow transition text-lg font-semibold flex items-center gap-2 text-center justify-center"
              >
                📩 Saada päring
              </Link>
            </div>
          </div>

          {/* ✅ BENEFITS GRID */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-800">Kiire reageerimine</span>
              </div>
              <p className="text-sm text-red-700">Samal päeval või 1-2h hädaabijuhul</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Töögarantii</span>
              </div>
              <p className="text-sm text-blue-700">1 aastane garantii remonditöödele</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Tasuta diagnostika</span>
              </div>
              <p className="text-sm text-green-700">Enne remondi alustamist</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">Kogemus</span>
              </div>
              <p className="text-sm text-purple-700">430+ boileri remonti tehtud</p>
            </div>
          </div>

          {/* ✅ ENHANCED MAIN CONTENT */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">

            {/* 1. DIAGNOSTICS - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GaugeCircle className="w-7 h-7 text-blue-500" />
                Kiire Boileri Diagnostika ja Rikke Tuvastamine
              </h2>
              <p className="mb-4">
                Boileri diagnostika algab põhjaliku ülevaatusega: kontrollime küttespiraali,
                termostaati, anoodi seisukorda, rõhutaset, torustikku ja elektriühendusi. 
                Tuvastame rikke põhjuse ning pakume välja kulutõhusa lahenduse.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Diagnostika käigus kontrollime:</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>Küttespiraali takistust ja isolatsiooni</li>
                  <li>Termostaadi töökorrasolekut</li>
                  <li>Anoodi kulumist ja seisukorda</li>
                  <li>Rõhuregulaatori ja ohutusklapi funktsiooni</li>
                  <li>Torustike ja ühenduste tihedust</li>
                  <li>Elektriühenduste ja maanduse korrasolekut</li>
                </ul>
              </div>
            </section>

            {/* 2. ENHANCED COMMON FAULTS */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-7 h-7 text-gray-700" />
                Levinumad Boileri Rikked ja Lahendused
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Ei kuumuta vett</h3>
                  <p className="text-gray-700 mt-2">Põhjused: katlakivi kogunemine, defektne küttekeha, rikkis termostaat</p>
                  <p className="text-green-600 font-semibold mt-1">Lahendus: puhastus või küttespiraali vahetus</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Pruunikas või sogane vesi</h3>
                  <p className="text-gray-700 mt-2">Põhjused: setete kogunemine, rooste boileri sees, vana anood</p>
                  <p className="text-green-600 font-semibold mt-1">Lahendus: puhastus ja anoodi vahetus</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Kõva müra või praksumine</h3>
                  <p className="text-gray-700 mt-2">Põhjused: katlakivi kihid küttespiraalil, kuumenemine üle</p>
                  <p className="text-green-600 font-semibold mt-1">Lahendus: kiire puhastus ja hooldus</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Boiler lekib</h3>
                  <p className="text-gray-700 mt-2">Põhjused: tihendite kulumine, korpuserooste, liigne rõhk</p>
                  <p className="text-green-600 font-semibold mt-1">Lahendus: tihendite vahetus või uus boiler</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Elektriline rike</h3>
                  <p className="text-gray-700 mt-2">Põhjused: rikkis termostaat, kaitsmed, halvad ühendused</p>
                  <p className="text-green-600 font-semibold mt-1">Lahendus: elektrikomponentide vahetus</p>
                </div>
              </div>
            </section>

            {/* 3. MAINTENANCE - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Flame className="w-7 h-7 text-orange-500" />
                Regulaarne Hooldus Pikendab Boileri Eluiga
              </h2>
              <p className="mb-4">
                Eesti lubjarikas vesi põhjustab boilerisse kiiresti katlakivi kogunemist. 
                Regulaarne hooldus tagab stabiilse töö, madalama elektrikulu ja parema veekvaliteedi.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Hoolduse sisaldab:</h3>
                  <ul className="list-disc list-inside space-y-1 text-orange-700">
                    <li>Katlakivi eemaldamine</li>
                    <li>Anoodi seisukorra kontroll ja vahetus</li>
                    <li>Küttespiraali ja termostaadi testimine</li>
                    <li>Ohutusklapi ja rõhuregulaatori kontroll</li>
                    <li>Torustike ja ühenduste kontroll</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Hoolduse eelised:</h3>
                  <ul className="list-disc list-inside space-y-1 text-green-700">
                    <li>Energiakulu väheneb 15-20%</li>
                    <li>Boileri eluiga pikeneb 2-3 korda</li>
                    <li>Vältite ootamatuid rikkeid</li>
                    <li>Parem veekvaliteet</li>
                    <li>Ohutum kasutamine</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. WHEN IS REPAIR REQUIRED - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Millal On Boileri Remont Vältimatu?</h2>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Hädaabimärgid - helista kohe:</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Kuum vesi kaob või temperatuur kõigub</li>
                  <li>Boiler kuumeneb üle või lülitab ennast välja</li>
                  <li>Seade teeb kõva müra või praksumist</li>
                  <li>Pruunikas või must vesi torust</li>
                  <li>Kaitseklapp tilgub pidevalt</li>
                  <li>Boiler lekib või on tugevalt roostes</li>
                  <li>Elektriarvuti näitab viga</li>
                  <li>Põlemislõhn ruumis</li>
                </ul>
              </div>
            </section>

            {/* 5. ENHANCED PRICING */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Boileri Remondi Hinnad Tallinnas</h2>
              <p className="mb-4">
                Remondi hind sõltub rikke iseloomust, vajaminevatest varuosadest ja töömahust.
                Anname alati <strong>läbipaistva ja täpse hinnapakkumise enne töö alustamist.</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Levinumad remonditööd:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Küttespiraali vahetus</li>
                    <li>Termostaadi vahetus</li>
                    <li>Anoodi vahetus</li>
                    <li>Katlakivi eemaldamine</li>
                    <li>Elektriliste ühenduste korrastamine</li>
                    <li>Tihendite vahetus</li>
                    <li>Rõhuregulaatori vahetus</li>
                    <li>Ohutusklapi vahetus</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Hinnamõjutavad tegurid:</h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Boileri tüüp ja mudel</li>
                    <li>Vajalike varuosade hind</li>
                    <li>Rikke keerukus</li>
                    <li>Paigalduskoha ligipääsetavus</li>
                    <li>Tööaja kestus</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. ENHANCED AREA */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Teeninduspiirkond: Tallinn ja Harjumaa</h2>
              <p className="mb-4">
                Pakume boileri remondi- ja hooldusteenuseid kogu <strong>Tallinnas ja Harjumaal</strong>. 
                Hädaabi teenus on saadaval 24/7, tavaremondid kokkuleppel sobival ajal.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-gray-100 p-2 rounded text-center">Lasnamäe</div>
                <div className="bg-gray-100 p-2 rounded text-center">Mustamäe</div>
                <div className="bg-gray-100 p-2 rounded text-center">Õismäe</div>
                <div className="bg-gray-100 p-2 rounded text-center">Kesklinn</div>
                <div className="bg-gray-100 p-2 rounded text-center">Nõmme</div>
                <div className="bg-gray-100 p-2 rounded text-center">Viimsi</div>
                <div className="bg-gray-100 p-2 rounded text-center">Rae</div>
                <div className="bg-gray-100 p-2 rounded text-center">Saue</div>
                <div className="bg-gray-100 p-2 rounded text-center">Kogu Harjumaa</div>
              </div>
            </section>

            {/* 7. ENHANCED FAQ WITH SCHEMA */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Korduma Kippuvad Küsimused Boileri Remondi Kohta</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kui kiiresti saate remondile tulla?</h3>
                  <p className="text-gray-700">Hädaabijuhul saame Tallinnas kohale juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas vana boiler tasub remontida?</h3>
                  <p className="text-gray-700">Kui boiler on üle 12-15 aasta vana või korpus on roostes, soovitame pigem uue paigaldamist. Anname ausa hinnangu.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas pruunikas vesi tähendab riket?</h3>
                  <p className="text-gray-700">Jah, see on märk setetest ja katlakivist. Vajab puhastust ja võib-olla anoodi vahetust.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas töödele kehtib garantii?</h3>
                  <p className="text-gray-700">Jah - kõikidele remonditöödele anname 1-aastase garanti, paigaldustele 2 aastat.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas saate remontida kõiki boileri marke?</h3>
                  <p className="text-gray-700">Jah, remondime kõiki tuntud ja vähemtuntud boileri marke. Oleme teinud üle 430 remondi.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mis juhtub, kui boilerit ei saa remontida?</h3>
                  <p className="text-gray-700">Annime ausa hinnangu ja soovitame uut boilerit. Pakume vana boileri utiliseerimist ja uue paigaldust.</p>
                </div>
              </div>
            </section>

          </div>

          {/* ✅ FINAL URGENT CTA */}
          <section className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Boileriga probleem? Ära oota - helista kohe!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              24/7 hädaabi - reageerime kiiresti ja parandame probleemi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+37253684587"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                <PhoneCall className="w-6 h-6" />
                Hädaabi: +372 5368 4587
              </a>
              <Link
                href="/kontakt"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                📩 Saada remondipäring
              </Link>
            </div>
            <p className="mt-4 text-red-200 text-sm">
              ⚡ Kiireim reageerimine Tallinnas - samal päeval või 1-2 tunni jooksul
            </p>
          </section>

          {/* ✅ RELATED SERVICES */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Seotud Teenused</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/paigaldus" className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-800">Boileri Paigaldus</h3>
                </div>
                <p className="text-blue-700">Professionaalne boileri paigaldus Tallinnas</p>
              </Link>
              
              <Link href="/hooldus" className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <GaugeCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">Boileri Hooldus</h3>
                </div>
                <p className="text-green-700">Regulaarne hooldus katlakivi ennetamiseks</p>
              </Link>
              
              <Link href="/hadaabi" className="bg-red-50 p-6 rounded-lg border border-red-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-800">Hädaabi</h3>
                </div>
                <p className="text-red-700">24/7 hädaabi boileri rikete korral</p>
              </Link>
            </div>
          </section>

        </section>
      </div>

      <Footer />
    </div>
  );
}
