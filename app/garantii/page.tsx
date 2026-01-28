import { ShieldCheck, CheckCircle, BadgeCheck, Wrench, Clock, PhoneCall, AlertTriangle, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toogarantii 2 Aastat Boileri Toodele",
  description: "Ametlik töögarantii boileri paigaldustele (2 aastat), remonditöödele (1 aasta) ja hooldustöödele. Kasutame kvaliteetseid materjale ja järgime Eesti standardeid.",
  keywords: [
    "boileri garantii",
    "töögarantii",
    "boileri paigalduse garantii",
    "remondi garantii",
    "veesoojendi garantii",
    "boileri töögarantii",
    "garantii boilerile",
    "boileri teenuse garantii"
  ],
  alternates: {
    canonical: "https://www.boileriabi.ee/garantii",
  },
  openGraph: {
    title: "Toogarantii 2 Aastat Boileri Toodele",
    description: "Ametlik töögarantii boileri paigaldustele (2 aastat), remonditöödele (1 aasta) ja hooldustöödele.",
    url: "https://boileriabi.ee/garantii",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=T%C3%B6%C3%B6garantii&description=2%20aastat%20paigaldustele",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Töögarantii boileriteenustele",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function Garantii() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      {/* ✅ JSON-LD SCHEMA FOR WARRANTY */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WarrantyPromise",
            "name": "Boileri Töögarantii",
            "description": "Ametlik töögarantii boileri paigaldustele, remonditöödele ja hooldustöödele",
            "duration": "P2Y",
            "warrantyScope": {
              "@type": "WarrantyScope",
              "name": "Boileri paigaldus, remont ja hooldus"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Boileriabi.ee",
              "telephone": "+37253684587"
            },
            "termsAndConditions": "https://boileriabi.ee/garantii"
          }),
        }}
      />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* ✅ OPTIMIZED HERO SECTION */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-center text-gray-900">
            Boileri Töögarantii | 2 Aastat Paigaldustele
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed text-center max-w-3xl mx-auto">
            <strong>Boileriabi.ee pakub kõigile klientidele ametlikku töögarantiid</strong> - 
            paigaldustele, remonditöödele ja hooldustele. Kasutame kvaliteetseid materjale, 
            järgime Eesti tehnilisi standardeid ning tagame, et teie boiler töötab turvaliselt, 
            säästlikult ja tõrgeteta.
          </p>

          {/* ✅ WARRANTY BADGES */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">2 aastat paigaldustele</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <BadgeCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">1 aasta remonditöödele</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Kvaliteetsed varuosad</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">Kiire garantii teenindus</span>
            </div>
          </div>

          {/* ✅ ENHANCED WARRANTY GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="rounded-2xl shadow-lg p-6 border border-green-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-10 h-10 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Paigaldustööde Garantii</h2>
              </div>
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-green-800 font-bold text-lg text-center">2 AASTAT</p>
              </div>
              <p className="text-gray-700 text-sm">
                Kõikidele boileri paigaldustele kehtib pikk ametlik töögarantii. Tagame, 
                et ühendused, elektriühendus ja paigaldus vastavad Eesti standarditele.
              </p>
              <div className="mt-4 text-xs text-green-700 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span>Elektriühendused ja maandus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span>Torustiku ühendused</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span>Ohutusseadmete paigaldus</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 border border-blue-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="w-10 h-10 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Remonditööde Garantii</h2>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-blue-800 font-bold text-lg text-center">1 AASTA</p>
              </div>
              <p className="text-gray-700 text-sm">
                Vahetatud varuosadele ja remondile kehtib tootja või meiepoolne garantii. 
                Kasutame ainult kvaliteetseid ja sertifitseeritud komponente.
              </p>
              <div className="mt-4 text-xs text-blue-700 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Küttespiraali vahetus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Termostaadi vahetus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Anoodi ja tihendite vahetus</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-6 border border-yellow-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-10 h-10 text-yellow-600" />
                <h2 className="text-xl font-bold text-gray-900">Hooldustööde Garantii</h2>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                <p className="text-yellow-800 font-bold text-lg text-center">6 KUUD</p>
              </div>
              <p className="text-gray-700 text-sm">
                Teostame hoolduse vastavalt tootjapoolsetele juhistele ning tagame 
                korrektse ja põhjaliku katlakivi eemaldamise ja anoodi kontrolli.
              </p>
              <div className="mt-4 text-xs text-yellow-700 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                  <span>Katlakivi eemaldamine</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                  <span>Anoodi kontroll ja vahetus</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                  <span>Süsteemi ülevaatus</span>
                </div>
              </div>
            </div>

          </div>

          {/* ✅ WARRANTY CTA */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Garantiijuhtum?</h2>
            <p className="text-blue-700 mb-4">
              Kui teil on garantii ajal tekkinud probleem, võtke kohe ühendust! 
              Reageerime kiiresti ja parandame probleemi tasuta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+37253684587"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition text-lg font-semibold flex items-center gap-2 justify-center"
              >
                <PhoneCall className="w-5 h-5" />
                Helista: +372 5368 4587
              </a>
              <Link
                href="/kontakt"
                className="bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 px-6 py-3 rounded-lg transition text-lg font-semibold flex items-center gap-2 justify-center"
              >
                <FileText className="w-5 h-5" />
                Saada garantii taotlus
              </Link>
            </div>
          </div>

          {/* ✅ ENHANCED CONTENT SECTIONS */}
          <div className="mt-16 space-y-12 text-gray-800 leading-relaxed">

            {/* WHAT'S COVERED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-7 h-7 text-green-500" />
                Mida Täpselt Garantii Katab?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Kaetud garantii all:</h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Kõik meie poolt teostatud ühendused ja kinnitused</li>
                    <li>Elektriühenduste kvaliteet ja ohutus</li>
                    <li>Tööde vastavus tehnilistele nõuetele</li>
                    <li>Vahetatud varuosad (anood, küttespiraal, tihendid, termostaat)</li>
                    <li>Kaitseklapi ja turvasüsteemide korrektne töö</li>
                    <li>Paigalduse ja seadistuse kvaliteet</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Garantiist välja jääb:</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700">
                    <li>Kahjustused, mis tulenevad valest kasutamisest</li>
                    <li>Välised veekahjustused (torustiku lekked, üleujutused)</li>
                    <li>Elektriprobleemid hoone juhtmestikust</li>
                    <li>Üle 10–15 aasta vanuste boilerite korrosioon</li>
                    <li>Loodusjõudude või pinge kõikumise põhjustatud rikked</li>
                    <li>Kolmandate isikute poolt tehtud sekkumised</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* WARRANTY PERIODS */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-7 h-7 text-blue-500" />
                Garantii Perioodid Ja Tingimused
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="pb-3 font-semibold text-gray-900">Teenuse liik</th>
                        <th className="pb-3 font-semibold text-gray-900">Garantii pikkus</th>
                        <th className="pb-3 font-semibold text-gray-900">Mis kaetud</th>
                        <th className="pb-3 font-semibold text-gray-900">Tingimused</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 font-medium text-gray-900">Paigaldus</td>
                        <td className="py-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">24 kuud</span>
                        </td>
                        <td className="py-3 text-sm text-gray-700">Kõik paigaldustööd ja ühendused</td>
                        <td className="py-3 text-sm text-gray-700">Korrekne kasutus, aastane hooldus</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-gray-900">Remont</td>
                        <td className="py-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">12 kuud</span>
                        </td>
                        <td className="py-3 text-sm text-gray-700">Vahetatud varuosad ja remonditööd</td>
                        <td className="py-3 text-sm text-gray-700">Sama rike, korrekne kasutus</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-gray-900">Hooldus</td>
                        <td className="py-3">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">6 kuud</span>
                        </td>
                        <td className="py-3 text-sm text-gray-700">Hooldustööde kvaliteet</td>
                        <td className="py-3 text-sm text-gray-700">Regulaarne kasutus, vee kvaliteet</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-gray-900">Varuosad</td>
                        <td className="py-3">
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-semibold">12-24 kuud</span>
                        </td>
                        <td className="py-3 text-sm text-gray-700">Tootja garantii varuosadele</td>
                        <td className="py-3 text-sm text-gray-700">Vastavalt tootja tingimustele</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* WARRANTY PROCESS */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7 text-purple-500" />
                Kuidas Garantiijuhtumit Esitada?
              </h2>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Võta ühendust</h3>
                  <p className="text-sm text-gray-700">Helista või saada e-kiri koheselt</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Probleemi kirjeldus</h3>
                  <p className="text-sm text-gray-700">Anna detailne kirjeldus probleemist</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kiire reageerimine</h3>
                  <p className="text-sm text-gray-700">Tuleme kohale 1-2 päeva jooksul</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tasuta parandus</h3>
                  <p className="text-sm text-gray-700">Parandame probleemi garantii alusel</p>
                </div>
              </div>
            </section>

            {/* ENHANCED FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Korduma Kippuvad Küsimused Garantii Kohta</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas garantii kehtib ka vanale boilerile?</h3>
                  <p className="text-gray-700">Jah — töödele kehtib garantii isegi siis, kui boiler on vana, kuid see ei laiene seadmele endale, vaid ainult meie tehtud töödele.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas garantii kehtib, kui klient ise boilerit avab?</h3>
                  <p className="text-gray-700">Kahjuks mitte. Enese tehtud muudatused või sekkumised katkestavad garantii, kuna me ei saa tagada nende tehtud tööde kvaliteeti.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kui kiiresti reageerite garantiijuhtumile?</h3>
                  <p className="text-gray-700">Garantii puhul reageerime alati prioriteetselt — tavaliselt samal või järgmisel tööpäeval. Hädaolukordades kiiremini.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas pean garantiiremondi eest maksma?</h3>
                  <p className="text-gray-700">Ei, garantiiremondid on täielikult tasuta, kui rike on kaetud meie garantiitingimustega.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kuidas saan garantiid pikendada?</h3>
                  <p className="text-gray-700">Pakkume pikendatud garantii võimalusi suurematele projektidele. Küsi täpsemat infot meie meeskonnalt.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mis juhtub, kui garantii aeg on läbi?</h3>
                  <p className="text-gray-700">Pakkume samuti abi, kuid tööde eest tuleb tasuda vastavalt meie kehtivale hinnakirjale. Soovitame regulaarset hooldust.</p>
                </div>
              </div>
            </section>

          </div>

          {/* ✅ FINAL WARRANTY CTA */}
          <section className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Töögarantii Annab Rahu Mõneks!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Vali kvaliteet ja kindlus - vali Boileriabi.ee koos pika töögarantiiga
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+37253684587"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                <PhoneCall className="w-6 h-6" />
                Kõne garantiiga: +372 5368 4587
              </a>
              <Link
                href="/kontakt"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                <FileText className="w-6 h-6" />
                Taotle garantiid
              </Link>
            </div>
            <p className="mt-4 text-green-200 text-sm">
              🛡️ 2 aastat paigaldustele • 1 aasta remonditöödele • Kiire garantii teenindus
            </p>
          </section>

        </section>
      </div>
    </div>
  );
}
