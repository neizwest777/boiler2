import { Wrench, AlertTriangle, Flame, GaugeCircle, PhoneCall, Clock, Shield, CheckCircle, Zap } from "lucide-react";
import BookingForm from '@/components/BookingForm';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Remont Tallinnas - Kiire Parandus",
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
    canonical: "https://www.boileriabi.ee/remont",
  },
  openGraph: {
    title: "Boileri Remont Tallinnas - Kiire Parandus",
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
  const AREAS = ['Lasnamäe', 'Mustamäe', 'Õismäe', 'Kesklinn', 'Nõmme', 'Viimsi', 'Rae', 'Saue', 'Kogu Harjumaa'];
  const FAULTS = [
    { title: 'Ei kuumuta vett', cause: 'Katlakivi, defektne küttekeha, rikkis termostaat', fix: 'Puhastus või küttespiraali vahetus' },
    { title: 'Pruunikas vesi', cause: 'Setete kogunemine, rooste, vana anood', fix: 'Puhastus ja anoodi vahetus' },
    { title: 'Kõva müra', cause: 'Katlakivi kihid küttespiraalil', fix: 'Kiire puhastus ja hooldus' },
    { title: 'Boiler lekib', cause: 'Tihendite kulumine, korpuserooste, liigne rõhk', fix: 'Tihendite vahetus või uus boiler' },
    { title: 'Elektriline rike', cause: 'Rikkis termostaat, kaitsmed, halvad ühendused', fix: 'Elektrikomponentide vahetus' },
  ];
  const FAQ = [
    { q: 'Kui kiiresti saate remondile tulla?', a: 'Hädaabijuhul saame Tallinnas kohale juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel.' },
    { q: 'Kas vana boiler tasub remontida?', a: 'Kui boiler on üle 12-15 aasta vana või korpus on roostes, soovitame pigem uue paigaldamist.' },
    { q: 'Kas pruunikas vesi tähendab riket?', a: 'Jah, see on märk setetest ja katlakivist. Vajab puhastust ja anoodi vahetust.' },
    { q: 'Kas töödele kehtib garantii?', a: 'Jah - remonditöödele 1 aasta garantii, paigaldustele 2 aastat.' },
    { q: 'Kas saate remontida kõiki marke?', a: 'Jah, remondime kõiki tuntud ja vähemtuntud boileri marke. Üle 430 remondi tehtud.' },
    { q: 'Mis juhtub, kui boilerit ei saa remontida?', a: 'Anname ausa hinnangu ja soovitame uut boilerit. Pakume vana utiliseerimist ja uue paigaldust.' },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", "name": "Boileri Remont Tallinnas",
        "provider": { "@type": "LocalBusiness", "name": "Boileriabi.ee", "telephone": "+37253684587",
          "address": { "@type": "PostalAddress", "addressLocality": "Tallinn", "addressRegion": "Harjumaa", "addressCountry": "EE" } },
        "areaServed": ["Tallinn", "Harjumaa"], "serviceType": "Boileri remont", "hoursAvailable": "Mo-Su 00:00-23:59"
      }) }} />

      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Hädaabi 24/7
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">Boileri Remont Tallinnas</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Kiire diagnostika ja kvaliteetne remont. Remondime kõiki marke: Ariston, Atlantic, Bosch, Tesy, Drazice, Electrolux ja teised.</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">1–2 tundi</div><div className="text-xs text-gray-500">Hädaabi</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">1 aasta</div><div className="text-xs text-gray-500">Garantii</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">Tasuta</div><div className="text-xs text-gray-500">Diagnostika</div></div>
              </div>
              <div className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <Zap className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <div><div className="text-sm font-semibold text-gray-900">430+</div><div className="text-xs text-gray-500">Remonti</div></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg shadow-red-600/25 transition-all">
                <PhoneCall className="w-5 h-5" /> +372 5368 4587
              </a>
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl text-lg border-2 border-gray-200 hover:border-red-300 shadow-sm transition-all">
                📩 Saada päring
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <Image src="/static/images/generated/hero-remont.webp" alt="Boileri remont Tallinnas" width={800} height={800} className="w-full h-auto object-cover" priority />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-2xl font-bold text-red-600">Alates 80€</div>
              <div className="text-xs text-gray-500">Remondi hind</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* FAULTS */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"><Wrench className="w-7 h-7 text-gray-700" /> Levinumad Rikked</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAULTS.map(f => (
              <div key={f.title} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{f.cause}</p>
                <p className="text-sm text-green-600 font-medium flex items-center gap-1.5"><CheckCircle className="w-4 h-4 flex-shrink-0" /> {f.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIAGNOSTICS */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3"><GaugeCircle className="w-7 h-7 text-blue-500" /> Diagnostika</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">Põhjalik ülevaatus: küttespiraal, termostaat, anood, rõhutase, torustik ja elektriühendused.</p>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-3">
              {['Küttespiraali takistus', 'Termostaadi töökorrasolek', 'Anoodi seisukord', 'Rõhuregulaator', 'Torustike tihedus', 'Elektriühendused'].map(item => (
                <div key={item} className="flex items-center gap-2 text-blue-800 text-sm"><CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" /> {item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3"><Flame className="w-7 h-7 text-orange-500" /> Hooldus Pikendab Eluiga</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
              <h3 className="font-semibold mb-3 text-orange-900">Sisaldab:</h3>
              <div className="space-y-2">
                {['Katlakivi eemaldamine', 'Anoodi kontroll ja vahetus', 'Küttespiraali testimine', 'Ohutusklapi kontroll'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-orange-800 text-sm"><CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" /> {item}</div>
                ))}
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
              <h3 className="font-semibold mb-3 text-green-900">Kasu:</h3>
              <div className="space-y-2">
                {['Energiakulu -15-20%', 'Eluiga pikeneb 2-3×', 'Vähem rikkeid', 'Parem veekvaliteet'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-green-800 text-sm"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WARNING */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Millal On Remont Vältimatu?</h2>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h3 className="font-semibold text-red-900 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Helista kohe:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {['Kuum vesi kaob', 'Boiler kuumeneb üle', 'Kõva müra', 'Pruunikas vesi', 'Kaitseklapp tilgub', 'Boiler lekib', 'Elektriarvuti viga', 'Põlemislõhn'].map(item => (
                <div key={item} className="flex items-center gap-2 text-red-800 text-sm"><AlertTriangle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> {item}</div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Boileriga probleem?</h2>
              <p className="text-lg text-red-100 mb-8">24/7 hädaabi — reageerime kiiresti</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-red-50 shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold py-4 px-8 rounded-xl text-lg border border-white/30 transition-all">📩 Saada päring</Link>
              </div>
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
              <p className="text-sm text-gray-500">Professionaalne paigaldus Tallinnas</p>
            </Link>
            <Link href="/hooldus" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"><GaugeCircle className="w-5 h-5 text-green-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">Hooldus</h3></div>
              <p className="text-sm text-gray-500">Regulaarne hooldus</p>
            </Link>
            <Link href="/hadaabi" className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-red-600" /></div><h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">Hädaabi 24/7</h3></div>
              <p className="text-sm text-gray-500">Ööpäevaringne kiire abi</p>
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
