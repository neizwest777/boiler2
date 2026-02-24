import { Wrench, ShieldCheck, Flame, Droplets, PhoneCall, Clock, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Hooldus Tallinnas - Ennetav Hooldus",
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
    title: "Boileri Hooldus Tallinnas - Ennetav Hooldus",
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
  const INCLUDES = ['Katlakivi eemaldamine', 'Anoodi kontroll ja vahetus', 'Küttespiraali puhastus', 'Termostaadi testimine', 'Ohutusklapi kontroll', 'Torustike kontroll'];
  const BENEFITS = ['Energiakulu väheneb 15-20%', 'Eluiga pikeneb 2-3 korda', 'Parem veekvaliteet', 'Vältite ootamatuid rikkeid', 'Ohutum kasutamine', 'Väiksem elektrikulu'];
  const SIGNS = ['Vesi kuumeneb aeglaselt', 'Pruunikas või sogane vesi', 'Kõva müra töö ajal', 'Suurenenud elektrikulu', 'Üle 2 aasta hooldamata', 'Vesi lõhnab halvasti'];
  const AREAS = ['Kesklinn', 'Mustamäe', 'Lasnamäe', 'Õismäe', 'Nõmme', 'Pirita', 'Viimsi', 'Rae', 'Saue', 'Kogu Harjumaa'];
  const FAQ = [
    { q: 'Kui tihti peab boilerit hooldama?', a: 'Soovitame hooldust iga 1-2 aasta tagant, sõltuvalt vee karedusest ja kasutusintensiivsusest.' },
    { q: 'Kui kaua hooldus kestab?', a: 'Tavaline hooldus kestab 1-2 tundi, sõltuvalt boileri seisukorrast ja katlakivi hulgast.' },
    { q: 'Mis juhtub, kui boilerit mitte hooldada?', a: 'Katlakivi koguneb, energiakulu kasvab, boiler töötab üha halvemini ja lõpuks rikki.' },
    { q: 'Kas hoolduse ajal on vesi kinni?', a: 'Jah, hoolduse ajal lülitame boileri välja. Tavaliselt kestab protsess 1-2 tundi.' },
    { q: 'Kas hooldus aitab elektrit säästa?', a: 'Jah! Puhas boiler tarbib kuni 15-20% vähem elektrit kui katlakiviga boiler.' },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", "name": "Boileri Hooldus Tallinnas",
        "provider": { "@type": "LocalBusiness", "name": "Boileriabi.ee", "telephone": "+37253684587",
          "address": { "@type": "PostalAddress", "addressLocality": "Tallinn", "addressRegion": "Harjumaa", "addressCountry": "EE" } },
        "areaServed": ["Tallinn", "Harjumaa"], "serviceType": "Boileri hooldus", "hoursAvailable": "Mo-Su 08:00-20:00"
      }) }} />

      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Ennetav hooldus
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">Boileri Hooldus Tallinnas</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Regulaarne hooldus pikendab boileri eluiga, vähendab energiakulu kuni 20% ja ennetab kulukaid rikkeid. Katlakivi eemaldus, anoodi vahetus ja täielik kontroll.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">1–2 tundi</div><div className="text-xs text-gray-500">Hooldusaeg</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">-20%</div><div className="text-xs text-gray-500">Elektrikulu</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">2–3×</div><div className="text-xs text-gray-500">Pikem eluiga</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Droplets className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">Puhas</div><div className="text-xs text-gray-500">Veekvaliteet</div></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg shadow-green-600/25 transition-all">
                <PhoneCall className="w-5 h-5" /> +372 5368 4587
              </a>
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl text-lg border-2 border-gray-200 hover:border-green-300 shadow-sm transition-all">
                📝 Broneeri hooldus
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <Image src="/static/images/generated/hero-hooldus.webp" alt="Boileri hooldus Tallinnas" width={800} height={800} className="w-full h-auto object-cover" priority />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-2xl font-bold text-green-600">60–120€</div>
              <div className="text-xs text-gray-500">Hoolduse hind</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* WHAT'S INCLUDED */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3"><Wrench className="w-7 h-7 text-green-600" /> Mida Hooldus Sisaldab</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">Eesti lubjarikas vesi põhjustab katlakivi kiiresti. Regulaarne hooldus tagab seadme efektiivse töö.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h3 className="font-semibold mb-4 text-green-900">Hooldus sisaldab:</h3>
              <div className="space-y-3">
                {INCLUDES.map(item => (
                  <div key={item} className="flex items-center gap-2 text-green-800"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}</div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-semibold mb-4 text-blue-900">Hoolduse kasu:</h3>
              <div className="space-y-3">
                {BENEFITS.map(item => (
                  <div key={item} className="flex items-center gap-2 text-blue-800"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" /> {item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHEN TO DO MAINTENANCE */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3"><AlertTriangle className="w-7 h-7 text-orange-500" /> Millal On Hooldus Vajalik?</h2>
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <div className="grid md:grid-cols-2 gap-3">
              {SIGNS.map(item => (
                <div key={item} className="flex items-center gap-2 text-orange-800"><AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0" /> {item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Hoolduse Protsess</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-green-600">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Helistage</h3>
              <p className="text-sm text-gray-500">Lepime kokku sobiva aja hoolduseks</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-green-600">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Hooldus</h3>
              <p className="text-sm text-gray-500">Põhjalik puhastus ja kontroll 1-2h</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-green-600">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Tulemus</h3>
              <p className="text-sm text-gray-500">Puhas boiler, madalam elektrikulu</p>
            </div>
          </div>
        </section>

        {/* AREA */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Teeninduspiirkond</h2>
          <div className="flex flex-wrap gap-2">
            {AREAS.map(a => <span key={a} className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-gray-700">{a}</span>)}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Korduma Kippuvad Küsimused</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-green-600 transition-colors">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">{item.a}</div>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Broneeri hooldus</h2>
              <p className="text-lg text-green-100 mb-8">Ennetage rikkeid ja säästke elektrit!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-green-50 shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold py-4 px-8 rounded-xl text-lg border border-white/30 transition-all">📩 Saada päring</Link>
              </div>
              <p className="mt-6 text-green-200 text-sm">✓ 60–120€ · ✓ 1–2 tundi · ✓ Kuni 20% elektrisääst</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="w-full pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Seotud Teenused</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/paigaldus" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><Wrench className="w-5 h-5 text-blue-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Paigaldus</h3></div>
              <p className="text-sm text-gray-500">Professionaalne paigaldus</p>
            </Link>
            <Link href="/remont" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center"><Flame className="w-5 h-5 text-red-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">Remont</h3></div>
              <p className="text-sm text-gray-500">Kiire remont ja hädaabi</p>
            </Link>
            <Link href="/hadaabi" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-orange-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Hädaabi 24/7</h3></div>
              <p className="text-sm text-gray-500">Ööpäevaringne kiire abi</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
