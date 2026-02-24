import { Wrench, Droplets, Flame, AlertTriangle, PhoneCall, Shield, Clock, CheckCircle, Zap } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Teenused Tallinnas - Paigaldus, Remont, Hooldus",
  description: "Kõik boileri teenused ühest kohast: paigaldus, remont, hooldus, hädaabi 24/7. Professionaalsed torumehed Tallinnas ja Harjumaal. Tasuta hindamine!",
  keywords: ["boileri teenused", "boileri teenused tallinnas", "torumees tallinn", "boileri paigaldus", "boileri remont", "boileri hooldus"],
  alternates: { canonical: "https://www.boileriabi.ee/teenused" },
  openGraph: {
    title: "Boileri Teenused Tallinnas - Paigaldus, Remont, Hooldus",
    description: "Kõik boileri teenused ühest kohast: paigaldus, remont, hooldus, hädaabi 24/7.",
    url: "https://www.boileriabi.ee/teenused",
    locale: "et_EE",
    type: "website",
  },
};

export default function TeenusedPage() {
  const SERVICES = [
    { title: 'Boileri Paigaldus', desc: 'Professionaalne paigaldus uutele ja olemasolevatele süsteemidele. Kõik ühendused, seadistused ja ohutuskontroll.', price: '150–300€', features: ['Tasuta hindamine', 'Kõik brändid', '2a garantii', 'Sama päeva teenus'], color: 'blue', href: '/paigaldus', img: '/static/images/generated/hero-paigaldus.webp' },
    { title: 'Boileri Remont', desc: 'Kiire rikke tuvastamine ja kvaliteetne parandamine. Küttespiraalid, termostaadid, ohutusventiilid.', price: '80–200€', features: ['Diagnostika kohapeal', 'Originaalvaruosad', '1a garantii', '24/7 hädaabi'], color: 'orange', href: '/remont', img: '/static/images/generated/hero-remont.webp' },
    { title: 'Boileri Hooldus', desc: 'Ennetav hooldus katlakivi eemaldamisega, anoodi kontroll ja süsteemi ülevaatus. Pikendab eluiga 2–3×.', price: '60–120€', features: ['Katlakivi puhastus', 'Anoodi vahetus', '-20% elektrikulu', 'Puhas veekvaliteet'], color: 'green', href: '/hooldus', img: '/static/images/generated/hero-hooldus.webp' },
    { title: 'Hädaabi 24/7', desc: 'Ööpäevaringne abi lekete, rikete ja ohtlike olukordade korral. Kiireim reageerimine Tallinnas.', price: '90–150€', features: ['1–2h kohaletulek', 'Öösel ja pühapäeval', 'Lekete kõrvaldamine', 'Ohu likvideerimine'], color: 'red', href: '/hadaabi', img: '/static/images/generated/hero-hadaabi.webp' },
  ];
  const COLORS: Record<string, { bg: string; text: string; border: string; badge: string; hover: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', badge: 'bg-blue-100', hover: 'group-hover:text-blue-600' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', badge: 'bg-orange-100', hover: 'group-hover:text-orange-600' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', badge: 'bg-green-100', hover: 'group-hover:text-green-600' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', badge: 'bg-red-100', hover: 'group-hover:text-red-600' },
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Wrench className="w-4 h-4" /> Kõik teenused ühest kohast
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Boileri Teenused<br/><span className="text-emerald-400">Tallinnas</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
            Professionaalne paigaldus, remont ja hooldus. Kiire kohaletulek, kvaliteetne töö ja garantii kõikidele teenustele.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl"><Clock className="w-4 h-4 text-emerald-400" /> 1–2h kohaletulek</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl"><Shield className="w-4 h-4 text-emerald-400" /> Kuni 2a garantii</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl"><Zap className="w-4 h-4 text-emerald-400" /> 24/7 hädaabi</div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* SERVICE CARDS */}
        <section>
          <div className="space-y-6">
            {SERVICES.map((s, i) => {
              const c = COLORS[s.color];
              const reverse = i % 2 === 1;
              return (
                <Link href={s.href} key={s.title} className={`group grid md:grid-cols-2 gap-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden`}>
                  <div className={`relative h-64 md:h-auto ${reverse ? 'md:order-2' : ''}`}>
                    <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute top-4 left-4 ${c.badge} ${c.text} px-3 py-1 rounded-lg text-sm font-bold`}>{s.price}</div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className={`text-2xl font-bold text-gray-900 ${c.hover} transition-colors mb-3`}>{s.title}</h2>
                    <p className="text-gray-600 mb-5">{s.desc}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {s.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className={`w-4 h-4 ${c.text} flex-shrink-0`} /> {f}
                        </div>
                      ))}
                    </div>
                    <span className={`${c.text} font-medium text-sm`}>Loe rohkem →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* BOILER TYPES */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Boilerite Tüübid</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Läbivooluboilerid', desc: 'Kompaktsed ja ruumisäästlikud. Kuumutavad vett ainult kasutamise ajal — väga energiasäästlikud.', icon: '⚡' },
              { title: 'Mahuboilerid', desc: 'Hoiavad kuuma vett suuremas koguses. Sobivad suurematesse majapidamistesse pidevaks sooja vee kasutuseks.', icon: '🛁' },
              { title: 'Elektriboilerid', desc: 'Lihtsad paigaldada, töökindlad ja madala hooldusvajadusega. Sobivad korteritesse ja väiksematesse elamutesse.', icon: '🔌' },
            ].map(t => (
              <div key={t.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Miks Valida Meid?</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { num: '500+', label: 'Eduka tööd' },
              { num: '4.9', label: 'Kliendi hinnang' },
              { num: '24/7', label: 'Kättesaadavus' },
              { num: '2a', label: 'Töögarantii' },
            ].map(s => (
              <div key={s.label} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{s.num}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vajad Boileri Abi?</h2>
              <p className="text-lg text-emerald-100 mb-8">Helistage ja meister on kohal 1–2 tunni jooksul!</p>
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
