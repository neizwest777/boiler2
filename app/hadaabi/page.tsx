import { PhoneCall, AlertTriangle, Flame, Droplets, Clock, Shield, Zap, MapPin, CheckCircle } from "lucide-react";
import BookingForm from '@/components/BookingForm';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hadaabi 24/7 Boileri Remont Tallinnas",
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
    title: "BOILERI HÄDAABI 24/7 | Kiireim Reageerimine Tallinnas",
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
  const EMERGENCIES = [
    { title: 'Boiler lekib', desc: 'Vee lekke kiire kõrvaldamine ja tihendite vahetus', icon: '💧' },
    { title: 'Ei kuumuta vett', desc: 'Küttekeha, termostaadi diagnostika ja remont', icon: '🔥' },
    { title: 'Elektriline rike', desc: 'Kaitsmed, lühis, ohtlikud ühendused', icon: '⚡' },
    { title: 'Ülekütumine', desc: 'Ohutusklapi ja termostaadi kiire kontroll', icon: '🌡️' },
    { title: 'Kummalised helid', desc: 'Katlakivi, lahtised osad, pumba rike', icon: '🔊' },
    { title: 'Põlemislõhn', desc: 'Elektriline rike — helistage kohe!', icon: '⚠️' },
  ];
  const AREAS = ['Kesklinn', 'Mustamäe', 'Lasnamäe', 'Õismäe', 'Nõmme', 'Pirita', 'Haabersti', 'Viimsi', 'Rae', 'Saue', 'Saku', 'Kogu Harjumaa'];
  const FAQ = [
    { q: 'Kui kiiresti saate kohale?', a: 'Tallinnas 1-2 tunni jooksul, Harjumaal kuni 3 tundi.' },
    { q: 'Kas hädaabi teenus maksab rohkem?', a: 'Hädaabi väljasõidu tasu on sama. Remondi hind sõltub töö mahust.' },
    { q: 'Kas töötate öösiti ja nädalavahetusel?', a: 'Jah, meie hädaabi teenus on saadaval 24/7, ka pühade ajal.' },
    { q: 'Mida teha enne meistri tulekut?', a: 'Lülitage boiler voolust välja ja sulgege veekraan. Ärge proovige ise remontida.' },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", "name": "Boileri Hädaabi 24/7 Tallinnas",
        "provider": { "@type": "LocalBusiness", "name": "Boileriabi.ee", "telephone": "+37253684587",
          "address": { "@type": "PostalAddress", "addressLocality": "Tallinn", "addressRegion": "Harjumaa", "addressCountry": "EE" } },
        "areaServed": ["Tallinn", "Harjumaa"], "serviceType": "Boileri hädaabi", "hoursAvailable": "Mo-Su 00:00-23:59"
      }) }} />

      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              Hädaabi 24/7 — helistage kohe
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Boileri Hädaabi<br/>
              <span className="text-yellow-300">24/7 Tallinnas</span>
            </h1>
            <p className="text-lg text-red-100 mb-8 leading-relaxed max-w-lg">
              Boiler lekib, ei kuumuta või on ohtlik rike? Meie meister on kohal 1–2 tunni jooksul. Ööpäevaringne teenus kogu Tallinnas ja Harjumaal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-5 px-10 rounded-xl text-xl shadow-lg shadow-yellow-400/30 transition-all">
                <PhoneCall className="w-6 h-6" /> +372 5368 4587
              </a>
              <a href="https://wa.me/37253684587" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold py-5 px-8 rounded-xl text-lg border border-white/30 transition-all">
                💬 WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-red-200">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 1–2h kohaletulek</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> Garantii töödele</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kogu Tallinn</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image src="/static/images/generated/hero-hadaabi.webp" alt="Boileri hädaabi 24/7 Tallinnas" width={800} height={800} className="w-full h-auto object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* EMERGENCIES */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"><AlertTriangle className="w-7 h-7 text-red-500" /> Hädaolukorrad</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {EMERGENCIES.map(e => (
              <div key={e.title} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{e.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{e.title}</h3>
                <p className="text-sm text-gray-500">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Kuidas Hädaabi Toimib</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Helistage', desc: 'Kirjeldage probleemi' },
              { step: '2', title: 'Diagnostika', desc: 'Hindame olukorda telefoni teel' },
              { step: '3', title: 'Kohaletulek', desc: '1–2 tunni jooksul Tallinnas' },
              { step: '4', title: 'Remont', desc: 'Kiire parandus ja garantii' },
            ].map(s => (
              <div key={s.step} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mx-auto mb-3 text-lg font-bold text-red-600">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT TO DO */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Mida Teha Enne Meistri Tulekut</h2>
          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
            <div className="grid md:grid-cols-2 gap-3">
              {['Lülitage boiler voolust välja', 'Sulgege veekraan', 'Koguge lekkinud vesi ämbritesse', 'Ärge proovige ise remontida', 'Tuulutage ruum (põlemislõhna korral)', 'Helistage meile kohe'].map(item => (
                <div key={item} className="flex items-center gap-2 text-yellow-900"><CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" /> {item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* AREA */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Teeninduspiirkond</h2>
          <p className="text-lg text-gray-600 mb-6">Hädaabi teenus on saadaval 24/7 kogu Tallinnas ja Harjumaal.</p>
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
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-red-600 transition-colors">
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
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hädaolukord?</h2>
              <p className="text-lg text-red-100 mb-8">Ärge oodake — helistage kohe! Kohal 1–2 tunni jooksul.</p>
              <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-5 px-10 rounded-xl text-xl shadow-lg transition-all">
                <PhoneCall className="w-6 h-6" /> +372 5368 4587
              </a>
              <p className="mt-6 text-red-200 text-sm">✓ 24/7 · ✓ 1–2h kohaletulek · ✓ Garantii</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="w-full pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Seotud Teenused</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/remont" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center"><Flame className="w-5 h-5 text-orange-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Remont</h3></div>
              <p className="text-sm text-gray-500">Kiire ja kvaliteetne remont</p>
            </Link>
            <Link href="/hooldus" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"><Droplets className="w-5 h-5 text-green-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">Hooldus</h3></div>
              <p className="text-sm text-gray-500">Ennetav hooldus katlakivi vastu</p>
            </Link>
            <Link href="/paigaldus" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><Zap className="w-5 h-5 text-blue-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Paigaldus</h3></div>
              <p className="text-sm text-gray-500">Uue boileri paigaldus</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BOOKING FORM ===== */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6">
          <BookingForm source="page-cta" />
        </div>
      </section>
    </div>
  );
}
