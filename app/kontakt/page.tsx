import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Mail, MapPin, Clock, ShieldCheck, Star, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Boileri Teenused Tallinnas",
  description: "Vajad boileri abi? Helista kohe +37253684587! Teenindame Tallinnat ja Harjumaad 24/7. Kiireim reageerimine, tasuta hindamine ja töögarantii.",
  keywords: [
    "boileri kontakt",
    "torumees Tallinnas",
    "boileri abi telefon",
    "hädaabi boiler",
    "boileri remont Tallinnas",
    "veesoojendi teenused",
    "boileri paigaldus kontakt"
  ],
  alternates: {
    canonical: "https://www.boileriabi.ee/kontakt",
  },
  openGraph: {
    title: "Kontakt - Boileri Teenused Tallinnas",
    description: "Vajad boileri abi? Helista kohe +37253684587! Teenindame Tallinnat ja Harjumaad 24/7. Kiireim reageerimine.",
    url: "https://boileriabi.ee/kontakt",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Kontakt&description=Kiire%20boileri%20abi%20Tallinnas",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Kontakt",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function Page() {
  const AREAS = ['Kesklinn', 'Mustamäe', 'Lasnamäe', 'Õismäe', 'Nõmme', 'Pirita', 'Haabersti', 'Viimsi', 'Rae', 'Saue', 'Saku', 'Kogu Harjumaa'];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Boileriabi.ee",
        "telephone": "+37253684587", "email": "info@prism.ee", "url": "https://www.boileriabi.ee",
        "address": { "@type": "PostalAddress", "addressLocality": "Tallinn", "addressRegion": "Harjumaa", "addressCountry": "EE" },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
      }) }} />

      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <PhoneCall className="w-4 h-4" /> Ööpäevaringne teenus
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Võtke Meiega<br/><span className="text-emerald-400">Ühendust</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Vajad boileri abi? Helistage, kirjutage WhatsApp'is või saatke e-mail — vastame kiirelt!
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* CONTACT CARDS */}
        <section className="grid md:grid-cols-3 gap-5">
          <a href="tel:+37253684587" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4"><PhoneCall className="w-6 h-6 text-emerald-600" /></div>
            <h2 className="font-bold text-xl text-gray-900 mb-2">Telefon</h2>
            <p className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-500 transition-colors">+372 5368 4587</p>
            <p className="text-sm text-gray-500 mt-2">24/7 kättesaadav</p>
          </a>
          <a href="https://wa.me/37253684587" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4"><span className="text-2xl">💬</span></div>
            <h2 className="font-bold text-xl text-gray-900 mb-2">WhatsApp</h2>
            <p className="text-lg font-bold text-green-600 group-hover:text-green-500 transition-colors">Kirjutage meile</p>
            <p className="text-sm text-gray-500 mt-2">Saatke pilt probleemist</p>
          </a>
          <a href="mailto:info@prism.ee" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4"><Mail className="w-6 h-6 text-blue-600" /></div>
            <h2 className="font-bold text-xl text-gray-900 mb-2">E-mail</h2>
            <p className="text-lg font-bold text-blue-600 group-hover:text-blue-500 transition-colors">info@prism.ee</p>
            <p className="text-sm text-gray-500 mt-2">Vastame 1 tunni jooksul</p>
          </a>
        </section>

        {/* INFO */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-slate-600" /> Tööaeg</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-600">Esmaspäev – Reede</span><span className="font-medium text-gray-900">08:00 – 20:00</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Laupäev – Pühapäev</span><span className="font-medium text-gray-900">10:00 – 18:00</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Hädaabi</span><span className="font-medium text-red-600">24/7</span></div>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-slate-600" /> Asukoht</h3>
            <p className="text-gray-600 mb-2">Tallinn, Harjumaa, Eesti</p>
            <p className="text-sm text-gray-500 mb-4">NB! Tegemist on väljasõiduteenusega — meil puudub füüsiline esindus klientidele.</p>
            <div className="flex items-center gap-2 text-emerald-600 font-medium"><ShieldCheck className="w-4 h-4" /> Prism Hooldus OÜ (reg. 16718539)</div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Teeninduspiirkond</h2>
          <p className="text-lg text-gray-600 mb-6">Teenindame kogu Tallinnat ja Harjumaad.</p>
          <div className="flex flex-wrap gap-2">
            {AREAS.map(a => <span key={a} className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-gray-700">{a}</span>)}
          </div>
        </section>

        {/* WHY US */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Miks Valida Meid?</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: <Clock className="w-5 h-5" />, title: '1–2h kohaletulek', desc: 'Kiire reageerimine Tallinnas' },
              { icon: <ShieldCheck className="w-5 h-5" />, title: 'Töögarantii', desc: 'Kõikidele töödele garantii' },
              { icon: <Star className="w-5 h-5" />, title: '4.9/5.0 hinnang', desc: '430+ rahulolev klient' },
              { icon: <Wrench className="w-5 h-5" />, title: 'Kõik brändid', desc: 'Telia, Electrolux, Gorenje jt' },
            ].map(item => (
              <div key={item.title} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-3 text-emerald-600">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vajad Abi?</h2>
              <p className="text-lg text-emerald-100 mb-8">Helistage kohe — meister on kohal 1–2 tunni jooksul!</p>
              <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition-all">
                <PhoneCall className="w-5 h-5" /> +372 5368 4587
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
