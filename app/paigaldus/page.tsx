import { 
  Wrench, 
  Flame, 
  Layers, 
  GaugeCircle, 
  PhoneCall, 
  CheckCircle, 
  Clock, 
  Shield, 
  MapPin 
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Paigaldus Tallinnas | Professionaalne Teenus | Boileriabi.ee",
  description:
    "Professionaalne boileri paigaldus Tallinnas ja Harjumaal. Kogenud torumehed, kiire montaaž 1-2h, töögarantii ja tasuta hindamine. Helista +37253684587",
  keywords: [
    "boileri paigaldus",
    "boileri paigaldus Tallinnas",
    "veesoojendi paigaldus",
    "boileri montaaž",
    "elektriboileri paigaldus",
    "mahuboileri paigaldus",
    "torumees boileri paigalduseks",
    "boileri paigaldus hind",
  ],
  alternates: {
    canonical: "https://boileriabi.ee/paigaldus",
  },
  openGraph: {
    title:
      "Boileri Paigaldus Tallinnas | Professionaalne Teenus | Boileriabi.ee",
    description:
      "Professionaalne boileri paigaldus Tallinnas ja Harjumaal. Kogenud torumehed, kiire montaaž, töögarantii ja tasuta hindamine.",
    url: "https://boileriabi.ee/paigaldus",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Boileri%20Paigaldus&description=Professionaalne%20boileri%20paigaldus%20Tallinnas",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Boileri paigaldus Tallinnas",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function Paigaldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      {/* JSON-LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Boileri Paigaldus Tallinnas",
            description:
              "Professionaalne boileri paigaldus Tallinnas ja Harjumaal. Kogenud torumehed, kiire montaaž, töögarantii.",
            provider: {
              "@type": "LocalBusiness",
              name: "Boileriabi.ee",
              telephone: "+37253684587",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tallinn",
                addressRegion: "Harjumaa",
                addressCountry: "EE",
              },
            },
            areaServed: ["Tallinn", "Harjumaa"],
            serviceType: "Boileri paigaldus",
            offers: {
              "@type": "Offer",
              description:
                "Professionaalne boileri paigaldus koos töögarantiiga",
            },
          }),
        }}
      />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          {/* H1 */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-gray-900">
            Boileri Paigaldus Tallinnas | Professionaalne Teenus
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            <strong>Professionaalne boileri paigaldus Tallinnas ja Harjumaal</strong> – Boileriabi.ee
            pakub kvaliteetset ja kiiret boilerite paigaldust, hooldust ja remonti. Meie kogenud torumehed tagavad ohutu ja energiatõhusa lahenduse.
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
                  Vajate boileri paigaldust?
                </p>
                <p className="text-blue-700">Tasuta hindamine ja kiire montaaž Tallinnas</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37253684587"
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition text-lg font-semibold flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Helista: +372 5368 4587
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
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-7 h-7 text-blue-500" />
                Professionaalne Boileri Paigaldus Tallinnas
              </h2>

              <p>
                Korralik <strong>boileri paigaldus Tallinnas</strong> tagab seadme pika eluea ja
                madalama energiakulu. Paigaldame elektriboilereid, mahuboilereid ja läbivooluboilereid.
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

            {/* MAINTENANCE */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GaugeCircle className="w-7 h-7 text-green-600" />
                Boileri Hooldus – Katlakivi Ennetamine
              </h2>

              <p>
                Eesti vesi on kõva ja lubjarikas, mis põhjustab kiiret katlakivi teket. Regulaarne hooldus
                pikendab boileri eluiga ja vähendab elektrikulu.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold mb-2">Hooldus sisaldab:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Anoodi kontroll</li>
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

            {/* REPAIR */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Flame className="w-7 h-7 text-orange-500" />
                Boileri Remont ja Hädaabi Tallinnas
              </h2>

              <p>
                Kui boiler ei kuumuta, lekib või teeb müra — pakume kiiret hädaabi Tallinnas 1–2h jooksul.
              </p>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Remondime kõiki brände:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div>Ariston</div>
                  <div>Atlantic</div>
                  <div>Tesy</div>
                  <div>Bosch</div>
                  <div>Thermor</div>
                  <div>Electrolux</div>
                  <div>Drazice</div>
                  <div>Stiebel Eltron</div>
                </div>
              </div>
            </section>

            {/* TYPES */}
            <section>
              <h2 className="text-3xl font-bold mb-6">
                Paigaldame Kõiki Boileritüüpe
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold">Elektriboilerid</h3>
                  <p>Lihtne ja töökindel lahendus.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold">Mahuboilerid</h3>
                  <p>Alati soe vesi — ideaalne suuremale perele.</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold">Läbivooluboilerid</h3>
                  <p>Kompaktne ja kiire kuum vesi.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold">Päikeseboilerid</h3>
                  <p>Energiasäästlik lahendus päikesesüsteemiga.</p>
                </div>
              </div>
            </section>

            {/* PRICING */}
            <section>
              <h2 className="text-3xl font-bold mb-6">
                Boileri Paigalduse Hinnad
              </h2>

              <p>
                Hind sõltub boileri tüübist ja paigalduskohast. Pakume tasuta hindamist.
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
            <section>
              <h2 className="text-3xl font-bold mb-6">
                Teeninduspiirkond: Tallinn ja Harjumaa
              </h2>

              <p>Pakkume paigaldust kogu Harjumaal.</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {[
                  "Tallinn", "Viimsi", "Rae", "Saue",
                  "Saku", "Maardu", "Keila", "Laagri", "Kogu Harjumaa",
                ].map((a) => (
                  <div key={a} className="bg-gray-100 p-2 rounded text-center">
                    {a}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6">
                Korduma Kippuvad Küsimused
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "Kui kaua aega võtab boileri paigaldus?",
                    a: "Keskmiselt 1–2 tundi, keerukamatel töödel kuni 4h.",
                  },
                  {
                    q: "Kas vana boileri äravedu on võimalik?",
                    a: "Jah — viime vana boileri ära vastavalt nõuetele.",
                  },
                  {
                    q: "Millal peaks boileri välja vahetama?",
                    a: "Kui see lekib, ei hoia temperatuuri või on üle 12–15 aasta vana.",
                  },
                  {
                    q: "Kas pakute töödele garantiid?",
                    a: "Paigaldustöödele 2 aastat, remondile 1 aasta.",
                  },
                  {
                    q: "Kas uus boiler vajab hooldust?",
                    a: "Esimest hooldust soovitame 2 aasta pärast, seejärel iga 1–2 aasta järel.",
                  },
                  {
                    q: "Milline boiler sobib minu koju?",
                    a: "Anname tasuta konsultatsiooni vastavalt teie vajadustele.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FINAL CTA */}
          <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Valmis boileri paigalduseks?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Võta ühendust ja saa tasuta hindamine juba täna!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+37253684587"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 shadow-lg"
              >
                <PhoneCall className="w-6 h-6" />
                Helista: +372 5368 4587
              </a>

              <Link
                href="/kontakt"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 shadow-lg"
              >
                📩 Saada päring
              </Link>
            </div>

            <p className="mt-4 text-blue-200 text-sm">
              ⚡ Hädaabi: Kohal 1–2 tunni jooksul Tallinnas
            </p>
          </section>

          {/* RELATED SERVICES */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Seotud Teenused
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/remont"
                className="bg-orange-50 p-6 rounded-lg border border-orange-200 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Flame className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-semibold text-orange-800">
                    Boileri Remont
                  </h3>
                </div>
                <p className="text-orange-700">
                  Kiire ja kvaliteetne boileri remont Tallinnas
                </p>
              </Link>

              <Link
                href="/hooldus"
                className="bg-green-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <GaugeCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Boileri Hooldus
                  </h3>
                </div>
                <p className="text-green-700">
                  Regulaarne hooldus katlakivi ennetamiseks
                </p>
              </Link>

              <Link
                href="/hadaabi"
                className="bg-red-50 p-6 rounded-lg border border-red-200 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-800">
                    Hädaabi
                  </h3>
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
