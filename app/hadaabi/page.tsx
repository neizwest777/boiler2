import { PhoneCall, AlertTriangle, Flame, Droplets, Clock, Shield, Zap, MapPin, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Hädaabi 24/7 Tallinnas | Kiire Reageerimine 1-2h | Boileriabi.ee",
  description: "BOILER LEEKIB VÕI EI TÖÖTA? Hädaabi 24/7 Tallinnas ja Harjumaal. Kiireim reageerimine 1-2 tunni jooksul. Lekete kõrvaldamine, remont, ohutus. HELISTA KOHE: +37253684587",
  keywords: [
    "boileri hädaabi",
    "hädaabi boiler",
    "boiler lekib",
    "boileri remont 24/7",
    "kiire boileri abi",
    "boileri hädaabi Tallinnas",
    "veesoojendi hädaabi",
    "boiler ei tööta",
    "boileri lekke parandus"
  ],
  alternates: {
    canonical: "https://www.boileriabi.ee/hadaabi",
  },
  openGraph: {
    title: "BOILERI HÄDAABI 24/7 | Kiireim Reageerimine Tallinnas | Boileriabi.ee",
    description: "BOILER LEEKIB? Hädaabi 24/7 Tallinnas. Kiireim reageerimine 1-2 tunni jooksul. Lekete kõrvaldamine, remont, ohutus. HELISTA KOHE!",
    url: "https://boileriabi.ee/hadaabi",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=H%C3%A4daabi%2024%2F7&description=Kiireim%20reageerimine%201-2h%20Tallinnas",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Hädaabi 24/7 Tallinnas",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function HadaabiPage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      {/* ✅ JSON-LD SCHEMA FOR EMERGENCY SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Boileri Hädaabi 24/7 Tallinnas",
            "description": "Kiireim boileri hädaabi Tallinnas ja Harjumaal. Reageerime 1-2 tunni jooksul lekete, rikete ja ohtlike olukordade korral.",
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
            "serviceType": "Boileri hädaabi ja kiire remont",
            "hoursAvailable": "Mo-Su 00:00-23:59",
            "offers": {
              "@type": "Offer",
              "description": "24/7 hädaabiteenus kohesel reageerimisel"
            }
          }),
        }}
      />

      {/* ✅ URGENT HERO SECTION */}
      <div className="w-full bg-red-600 text-white py-8">
        <div className="container-narrow text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 animate-pulse" />
            <span className="text-xl font-bold">HÄDAABI - 24/7 - KIIREIM REAGEERIMINE</span>
            <AlertTriangle className="w-8 h-8 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            BOILERI HÄDAABI 24/7 TALLINNAS
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Kiireim reageerimine - <strong>1-2 tunni jooksul Tallinnas</strong>
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* ✅ EMERGENCY ALERT BANNER */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-3">
                <p className="text-red-800 font-semibold">
                  HÄDAOLUKORD? ÄRA OOTA - HELISTA KOHE!
                </p>
                <p className="text-red-700 text-sm mt-1">
                  Lekiv boiler võib põhjustada suuri kahjustusi. Elektrilised rikked on ohtlikud.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            <strong>BOILER LEEKIB, EI KUMUTA VETT VÕI TEKITAB OHTLIKKU OLUKORDA?</strong> 
            Meie <strong>24/7 hädaabiteenus</strong> on mõeldud just sellisteks kiireloomulisteks juhtumiteks. 
            Reageerime <strong>1-2 tunni jooksul Tallinnas</strong> ja kõrvaldame ohu ning parandame rikke.
          </p>

          {/* ✅ URGENT CTA BLOCK */}
          <div className="mt-10 p-6 bg-red-50 border-2 border-red-300 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-10 h-10 animate-pulse" />
              <div>
                <p className="text-xl font-bold text-red-900">
                  HÄDAABI - HELISTA KOHE!
                </p>
                <p className="text-red-700">
                  Kiireim reageerimine Tallinnas - 1-2 tunni jooksul kohal
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37253684587"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg shadow-lg transition text-xl font-bold flex items-center gap-3 text-center justify-center animate-bounce"
              >
                <PhoneCall className="w-6 h-6" />
                HÄDAABI: +372 5368 4587
              </a>
            </div>
          </div>

          {/* ✅ EMERGENCY FEATURES GRID */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-800">Kiire reageerimine</span>
              </div>
              <p className="text-sm text-red-700">1-2h Tallinnas, 24/7</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Ohu kõrvaldamine</span>
              </div>
              <p className="text-sm text-orange-700">Lekked, lühised, ülekuumenemine</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Kogenud meeskond</span>
              </div>
              <p className="text-sm text-blue-700">430+ hädaabikõnet tehtud</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Kogu Harjumaa</span>
              </div>
              <p className="text-sm text-green-700">Tallinn ja ümbrus</p>
            </div>
          </div>

          {/* ✅ ENHANCED MAIN CONTENT */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">

            {/* 1. URGENT SITUATIONS - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Droplets className="w-7 h-7 text-red-500" />
                HÄDAOLUKORRAD - HELISTA KOHE!
              </h2>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Ohtlikud olukorrad - VAJATE KOHET ABi:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-900">Boiler lekib tugevalt</p>
                        <p className="text-red-700 text-sm">Vesi tilgub pidevalt, voolab laiali</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt=2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-900">Elektrilised probleemid</p>
                        <p className="text-red-700 text-sm">Lühis, sädemed, põlemislõhn</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-900">Ülekuumenemine</p>
                        <p className="text-red-700 text-sm">Boiler on liiga kuum, auru tekkimine</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-900">Tugev müra või põrkamine</p>
                        <p className="text-red-700 text-sm">Kõva praksumine, pomina</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-900">Gaasi boileri rike</p>
                        <p className="text-red-700 text-sm">Gaasilõhn, kollane leek</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-red-900">Vee kvaliteedi probleem</p>
                        <p className="text-red-700 text-sm">Must vesi, tugev roostelõhn</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. FAST RESPONSE - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Flame className="w-7 h-7 text-orange-500" />
                KIIREIM REAGEERIMINE TALLINNAS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Meie reageerimisaja lubadus:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                      <Clock className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Tallinn - kiireim</p>
                        <p className="text-green-700">1-2 tunni jooksul kohal</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-blue-800">Harjumaa - kiire</p>
                        <p className="text-blue-700">2-4 tunni jooksul kohal</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <Clock className="w-6 h-6 text-orange-600" />
                      <div>
                        <p className="font-semibold text-orange-800">Ööaeg ja nädalavahetused</p>
                        <p className="text-orange-700">24/7 - alati saadaval</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mida teha enne meie saabumist?</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Lülitage boiler välja (elekter/gaas)</li>
                    <li>Sulgege boileri toitevesi (kraan boileri lähedal)</li>
                    <li>Pühkige lekkinud vesi kuivaks</li>
                    <li>Hoiduge elektrilistest osadest eemal</li>
                    <li>Avage aknad ventileerimiseks</li>
                    <li>Valmistage tee meie meeskonnale</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. EMERGENCY SERVICES - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-yellow-500" />
                HÄDAABITEENUSED - MIDA PAKUME
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-3">Kiire ohu kõrvaldamine:</h3>
                  <ul className="list-disc list-inside space-y-2 text-yellow-700">
                    <li>Lekete ajutine peatamine</li>
                    <li>Elektriliste rikete isoleerimine</li>
                    <li>Gaasilekete kontroll ja kõrvaldamine</li>
                    <li>Ülekuumenemise peatamine</li>
                    <li>Vee äravoolu korraldamine</li>
                    <li>Ohutu seisukorra tagamine</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Hädaabi remont:</h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-700">
                    <li>Tihendite ja liitmike vahetus</li>
                    <li>Küttespiraali kiire remont/vahetus</li>
                    <li>Termostaadi vahetus</li>
                    <li>Ohutusklapi remont</li>
                    <li>Elektriühenduste parandus</li>
                    <li>Ajutine lahendus kuni põhiremontini</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. COVERAGE AREA - OPTIMIZED */}
            <section>
              <h2 className="text-3xl font-bold mb-6">HÄDAABI TEOINDUSPIIRKOND</h2>
              <p className="mb-4">
                Pakume <strong>24/7 hädaabiteenust</strong> kogu <strong>Tallinnas ja Harjumaal</strong>. 
                Kiireim reageerimine Tallinna piirides, Harjumaal vastavalt kaugusele.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-red-100 p-2 rounded text-center font-semibold">Tallinn</div>
                <div className="bg-red-100 p-2 rounded text-center font-semibold">Viimsi</div>
                <div className="bg-red-100 p-2 rounded text-center font-semibold">Rae</div>
                <div className="bg-orange-100 p-2 rounded text-center">Saue</div>
                <div className="bg-orange-100 p-2 rounded text-center">Saku</div>
                <div className="bg-orange-100 p-2 rounded text-center">Maardu</div>
                <div className="bg-yellow-100 p-2 rounded text-center">Keila</div>
                <div className="bg-yellow-100 p-2 rounded text-center">Laagri</div>
                <div className="bg-yellow-100 p-2 rounded text-center">Kogu Harjumaa</div>
              </div>
            </section>

            {/* 5. EMERGENCY FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6">HÄDAABI KÜSIMUSED JA VASTUSED</h2>

              <div className="space-y-6">
                <div className="bg-white border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Kas tulete öösel või nädalavahetusel?</h3>
                  <p className="text-gray-700">JAH! Hädaabiteenus on saadaval 24 tundi päevas, 7 päeva nädalas, sealhulgas öösel ja pühadel.</p>
                </div>

                <div className="bg-white border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Kui kiiresti saate kohale tulla?</h3>
                  <p className="text-gray-700">Tallinnas 1-2 tunni jooksul, Harjumaal 2-4 tunni jooksul. Tõsiste ohtlike olukordade korral proovime tulla veel kiiremini.</p>
                </div>

                <div className="bg-white border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Kas hädaabiteenus on kallim?</h3>
                  <p className="text-gray-700">Jah, hädaabiteenusel on erinev tariif tavateenusest, kuid meie hinnad on ausad ja läbipaistvad. Hind sõltub olukorra tõsidusest.</p>
                </div>

                <div className="bg-white border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Mis juhtub, kui boilerit ei saa remontida?</h3>
                  <p className="text-gray-700">Kõrvaldame ohu ja anname ausa hinnangu. Kui remont ei ole võimalik, pakume uue boileri kiiret paigaldust.</p>
                </div>

                <div className="bg-white border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Kas saate gaasiboileritega tegeleda?</h3>
                  <p className="text-gray-700">Jah, meil on kogenud meeskond, kes tegeleb nii elektriliste kui ka gaasiboilerite hädaabiremondiga.</p>
                </div>

                <div className="bg-white border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Mida teha, kui boiler lekib ja ma ei tea, kust kraani kinni panna?</h3>
                  <p className="text-gray-700">HELISTA KOHE! Juhime teid telefoni teel. Tavaliselt on boileri lähedal eraldi sulgeventiil.</p>
                </div>
              </div>
            </section>

          </div>

          {/* ✅ FINAL EMERGENCY CTA */}
          <section className="mt-16 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              HÄDAOLUKORD? ÄRA OOTA - HELISTA KOHE!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              24/7 hädaabi - kiireim reageerimine Tallinnas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+37253684587"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-2xl font-bold flex items-center gap-3 transition-colors shadow-lg animate-pulse"
              >
                <PhoneCall className="w-6 h-6" />
                HÄDAABI: +372 5368 4587
              </a>
            </div>
            <p className="mt-4 text-red-200 text-sm">
              ⚡ Kiireim reageerimine - 1-2 tunni jooksul Tallinnas • 24/7 • Ööd ja nädalavahetused
            </p>
          </section>

          {/* ✅ RELATED SERVICES */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Teised Meie Teenused</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/remont" className="bg-orange-50 p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Flame className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-orange-800">Boileri Remont</h3>
                </div>
                <p className="text-orange-700">Kiire ja kvaliteetne boileri remont</p>
              </Link>
              
              <Link href="/hooldus" className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">Boileri Hooldus</h3>
                </div>
                <p className="text-green-700">Ennetav hooldus rikete vältimiseks</p>
              </Link>
              
              <Link href="/paigaldus" className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-800">Boileri Paigaldus</h3>
                </div>
                <p className="text-blue-700">Professionaalne boileri paigaldus</p>
              </Link>
            </div>
          </section>

        </section>
      </div>
    </div>
  );
}
