import { Wrench, ShieldCheck, Flame, Droplets, PhoneCall, Clock, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Hooldus Tallinnas",
  description: "Professionaalne boileri hooldus Tallinnas ja Harjumaal. Katlakivi eemaldamine, anoodi vahetus, energiasääst kuni 20%. Ennetage rikkeid! Helista +37253684587",
  keywords: [
    "boileri hooldus",
    "boileri hooldus Tallinnas",
    "katlakivi eemaldamine",
    "boileri puhastus",
    "anoodi vahetus",
    "veesoojendi hooldus",
    "boileri hoolduse hind",
    "regulaarne boileri hooldus",
    "energiasääst boileriga"
  ],
  alternates: {
    canonical: "https://www.boileriabi.ee/hooldus",
  },
  openGraph: {
    title: "Boileri Hooldus Tallinnas",
    description: "Professionaalne boileri hooldus Tallinnas ja Harjumaal. Katlakivi eemaldamine, anoodi vahetus, energiasääst kuni 20%. Ennetage rikkeid!",
    url: "https://boileriabi.ee/hooldus",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Boileri%20Hooldus&description=Ennetav%20hooldus%20katlakivi%20vastu",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Boileri hooldus Tallinnas",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function Hooldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      {/* ✅ JSON-LD SCHEMA FOR MAINTENANCE SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Boileri Hooldus Tallinnas",
            "description": "Professionaalne boileri hooldus Tallinnas ja Harjumaal. Katlakivi eemaldamine, anoodi vahetus, energiasääst kuni 20%.",
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
            "serviceType": "Boileri hooldus ja puhastus",
            "offers": {
              "@type": "Offer",
              "description": "Regulaarne boileri hooldus koos energiasäästu ja pikendatud elueaga"
            }
          }),
        }}
      />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* ✅ OPTIMIZED HERO SECTION */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-gray-900">
            Boileri Hooldus Tallinnas | Ennetav Hooldus
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            <strong>Professionaalne boileri hooldus Tallinnas ja Harjumaal</strong> - 
            Regulaarne hooldus tagab seadme pikema eluea, kuni <strong>20% madalama energiakulu</strong> ja ohutu töö. 
            Boileriabi.ee teostab kvaliteetset hooldusteenust: puhastame katlakivi, eemaldame setteid, 
            kontrollime anoodi, küttespiraali ja kõiki ohutusseadmeid.
          </p>

          {/* ✅ PREVENTIVE CTA BLOCK */}
          <div className="mt-10 p-6 bg-green-50 border border-green-200 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-600 w-8 h-8" />
              <div>
                <p className="text-lg font-semibold text-green-900">
                  Ennetage boileri rikkeid - tellige hooldus!
                </p>
                <p className="text-green-700 text-sm">
                  Säästke raha ja vältige ootamatuid remonde
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37253684587"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow transition text-lg font-semibold flex items-center gap-2 text-center justify-center"
              >
                <PhoneCall className="w-5 h-5" />
                Helista: +372 5368 4587
              </a>
              <Link
                href="/kontakt"
                className="bg-white text-green-600 border border-green-300 hover:bg-green-50 px-6 py-3 rounded-lg shadow transition text-lg font-semibold flex items-center gap-2 text-center justify-center"
              >
                📩 Broneeri hooldus
              </Link>
            </div>
          </div>

          {/* ✅ BENEFITS GRID */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Energiasääst</span>
              </div>
              <p className="text-sm text-green-700">Kuni 20% väiksem elektrikulu</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Pikem eluiga</span>
              </div>
              <p className="text-sm text-blue-700">Boileri eluiga pikeneb 2-3x</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">Ohutus</span>
              </div>
              <p className="text-sm text-purple-700">Vähem lekkeid ja rikkeid</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Puhtam vesi</span>
              </div>
              <p className="text-sm text-orange-700">Parem veekvaliteet</p>
            </div>
          </div>

          {/* ✅ ENHANCED MAIN CONTENT */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">

            {/* 1. WHY MAINTENANCE - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Droplets className="w-7 h-7 text-blue-500" />
                Miks Boiler Vajab Regulaarset Hooldust?
              </h2>
              <p className="mb-4">
                Eesti vesi on väga lubjarikas - üks kõvemaid Euroopas. See põhjustab kiiret katlakivi kogunemist 
                boileri põhja ja seintele, mis toob kaasa mitmeid probleeme:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Ilma hoolduseta:</h3>
                  <ul className="list-disc list-inside space-y-1 text-red-700">
                    <li>Energiakulu suureneb 20-30%</li>
                    <li>Küttespiraal kuumeneb üle</li>
                    <li>Vee maht väheneb 30-40%</li>
                    <li>Tekivad lekked ja korrosioon</li>
                    <li>Boileri eluiga lüheneb 3x</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Hooldusega:</h3>
                  <ul className="list-disc list-inside space-y-1 text-green-700">
                    <li>Energiasääst 15-20%</li>
                    <li>Pikem eluiga (10-15 aastat)</li>
                    <li>Stabiilne veetemperatuur</li>
                    <li>Puhtam vee kvaliteet</li>
                    <li>Vähem remondikulusid</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. ENHANCED WHAT'S INCLUDED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-7 h-7 text-gray-700" />
                Mis Kuulub Professionaalsesse Hooldusse?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Põhjalik puhastus:</h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Katlakivi eemaldamine seintelt ja põhjast</li>
                    <li>Muda ja setete eemaldamine</li>
                    <li>Küttespiraali puhastus</li>
                    <li>Sisemuse desinfitseerimine</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Tehniline kontroll:</h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700">
                    <li>Anoodi seisukorra kontroll ja vahetus</li>
                    <li>Küttespiraali takistuse mõõtmine</li>
                    <li>Termostaadi kalibreerimine</li>
                    <li>Ohutusklapi ja rõhusüsteemi testimine</li>
                    <li>Elektriühenduste ja maanduse kontroll</li>
                    <li>Tihendite ja ühenduste tiheduse kontroll</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. ENHANCED FREQUENCY */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Flame className="w-7 h-7 text-orange-500" />
                Kui Tihti Boileri Hooldust Teha?
              </h2>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Soovitused sageduse kohta:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 px-3 py-1 rounded-full text-orange-800 font-semibold text-sm">STANDARD</div>
                    <div>
                      <p className="font-semibold text-gray-900">Tavaline veetarbimine</p>
                      <p className="text-gray-700">Soovitame hooldust iga <strong>2 aasta järel</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 px-3 py-1 rounded-full text-red-800 font-semibold text-sm">SUUR TARBIMINE</div>
                    <div>
                      <p className="font-semibold text-gray-900">Suur pere või korteriühistu</p>
                      <p className="text-gray-700">Soovitame hooldust <strong>iga aasta</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-semibold text-sm">KÕVA VESI</div>
                    <div>
                      <p className="font-semibold text-gray-900">Eriti lubjane vee piirkond</p>
                      <p className="text-gray-700">Soovitame hooldust <strong>iga 1-2 aasta järel</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. ENHANCED BENEFITS */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Hoolduse Põhilised Eelised</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Rahaline kokkuhoid</h3>
                      <p className="text-gray-700">Energiakulu väheneb 15-20%, remondikulud vähenevad 80%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Pikem seadme eluiga</h3>
                      <p className="text-gray-700">Boileri eluiga pikeneb 8-10 aastalt 15-20 aastani</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Ohutus</h3>
                      <p className="text-gray-700">Vähem lekkeohte, ülekuumenemist ja elektrikahjustusi</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Mugavus</h3>
                      <p className="text-gray-700">Stabiilne kuum vesi ilma ootamatute katkestusteta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Keskkonnasõbralikkus</h3>
                      <p className="text-gray-700">Väiksem energiatarbimine ja jäätmete teke</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Rahulolu</h3>
                      <p className="text-gray-700">Parem veekvaliteet ja usaldusväärne kuumavesi</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. WARNING SIGNS */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-yellow-500" />
                Millal On Aeg Boileri Hooldust Tellida?
              </h2>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Hoiatussümptomid:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Vee soojenemine aeglustunud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Elektriarve tõuseb</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Vesi on veidi pruunikas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Boiler teeb rohkem müra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Kuum vesi otsa saab kiiremini</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Viimane hooldus üle 2 aasta tagasi</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. ENHANCED AREAS */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Teeninduspiirkond: Tallinn ja Harjumaa</h2>
              <p className="mb-4">
                Pakume boileri hooldusteenuseid kogu <strong>Tallinnas ja Harjumaal</strong>. 
                Tasuta sõit Tallinna piires, Harjumaal sõidutasu kokkuleppel.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-gray-100 p-2 rounded text-center">Tallinn</div>
                <div className="bg-gray-100 p-2 rounded text-center">Viimsi</div>
                <div className="bg-gray-100 p-2 rounded text-center">Rae</div>
                <div className="bg-gray-100 p-2 rounded text-center">Saue</div>
                <div className="bg-gray-100 p-2 rounded text-center">Saku</div>
                <div className="bg-gray-100 p-2 rounded text-center">Maardu</div>
                <div className="bg-gray-100 p-2 rounded text-center">Keila</div>
                <div className="bg-gray-100 p-2 rounded text-center">Laagri</div>
                <div className="bg-gray-100 p-2 rounded text-center">Kogu Harjumaa</div>
              </div>
            </section>

            {/* 7. ENHANCED FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Korduma Kippuvad Küsimused Boileri Hoolduse Kohta</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kui kaua hooldus aega võtab?</h3>
                  <p className="text-gray-700">Tavaline hooldus võtab 1-2 tundi. Põhjalik hooldus koos anoodi vahetusega kuni 3 tundi.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas hoolduse ajal jääb soe vesi puudu?</h3>
                  <p className="text-gray-700">Jah, boiler tuleb hoolduse ajaks välja lülitada. Soovitame hooldust planeerida nii, et see ei häiriks teie igapäevaelu.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mis on anood ja miks seda vahetada?</h3>
                  <p className="text-gray-700">Anood on magneesiumist kaitseelement, mis kaitseb boileri sisemust korrosiooni eest. Seda tuleb vahetada iga 2-5 aasta järel.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas ma saan boilerit ise hooldada?</h3>
                  <p className="text-gray-700">Lihtsat puhastust saab teha ise, kuid põhjalik hooldus nõuab spetsiaalist teadmisi ja seadmeid. Soovitame professionaalset teenust.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kui palju hooldus maksab?</h3>
                  <p className="text-gray-700">Hind sõltub boileri suurusest ja hoolduse ulatusest. Anname alati tasuta hindamise enne töö alustamist.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kas hooldus tagab garantiid?</h3>
                  <p className="text-gray-700">Jah, kõikidele hooldustöödele anname 6 kuuse garanti. See kattub hooldusel tehtud tööd ja vahetatud komponendid.</p>
                </div>
              </div>
            </section>

          </div>

          {/* ✅ FINAL PREVENTIVE CTA */}
          <section className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ära oota boileri riket - telli ennetav hooldus!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Säästa raha ja välti ootamatuid remondikulusid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+37253684587"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                <PhoneCall className="w-6 h-6" />
                Helista: +372 5368 4587
              </a>
              <Link
                href="/kontakt"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
              >
                📩 Broneeri hooldus
              </Link>
            </div>
            <p className="mt-4 text-green-200 text-sm">
              💰 Säästa kuni 20% elektriarvel ja pikenda boileri eluiga 2-3 korda
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
              
              <Link href="/remont" className="bg-orange-50 p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Flame className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-orange-800">Boileri Remont</h3>
                </div>
                <p className="text-orange-700">Kiire ja kvaliteetne boileri remont</p>
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
    </div>
  );
}
