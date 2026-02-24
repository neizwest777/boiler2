import { ShieldCheck, CheckCircle, BadgeCheck, Wrench, Clock, PhoneCall, AlertTriangle, FileText } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
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
  const FAQ = [
    { q: 'Kuidas garantiid kasutada?', a: 'Helistage meile numbril +372 5368 4587. Kirjeldage probleemi ja me lepime kokku kiire lahenduse.' },
    { q: 'Kas garantii kehtib ka varuosadele?', a: 'Jah, kõik meie poolt paigaldatud varuosad on garantiiga kaetud.' },
    { q: 'Kas pean arvet säilitama?', a: 'Soovitame arvet säilitada, kuid meil on kõik tööd dokumenteeritud meie süsteemis.' },
    { q: 'Millal garantii ei kehti?', a: 'Garantii ei laiene tahtlikule kahjustamisele, volitamata remonttöödele kolmandate osapoolte poolt ega väärkasutusele.' },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <ShieldCheck className="w-4 h-4" /> Teie kindlustunne
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Töögarantii<br/><span className="text-emerald-300">Kuni 2 Aastat</span>
          </h1>
          <p className="text-lg text-emerald-100 max-w-xl mx-auto">
            Kõikidele boileri paigaldus-, remondi- ja hooldustöödele. Kasutame kvaliteetseid materjale ja vastutame tulemuse eest.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* WARRANTY CARDS */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Garantii Tingimused</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Paigaldus', period: '2 aastat', desc: 'Kõik boileri paigaldus- ja ühendustööd', color: 'blue', items: ['Elektriühendused', 'Torustik', 'Ohutusseadmed', 'Seadistamine'] },
              { title: 'Remont', period: '1 aasta', desc: 'Kõik remondi- ja vahetustööd', color: 'orange', items: ['Küttespiraalid', 'Termostaadid', 'Ohutusventiilid', 'Varuosad'] },
              { title: 'Hooldus', period: '6 kuud', desc: 'Hooldusega seotud probleemide korral', color: 'green', items: ['Katlakivi puhastus', 'Anoodi vahetus', 'Tihendid', 'Seadistused'] },
            ].map(g => {
              const colors: Record<string, { bg: string; text: string; border: string }> = {
                blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
                orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
                green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100' },
              };
              const c = colors[g.color];
              return (
                <div key={g.title} className={`rounded-2xl overflow-hidden border ${c.border}`}>
                  <div className={`${c.bg} px-6 pt-6 pb-4`}>
                    <h3 className="font-bold text-lg text-gray-900">{g.title}</h3>
                    <div className={`text-3xl font-bold ${c.text} mt-1`}>{g.period}</div>
                    <p className="text-sm text-gray-500 mt-1">{g.desc}</p>
                  </div>
                  <div className="px-6 py-4 bg-white space-y-2">
                    {g.items.map(item => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className={`w-3.5 h-3.5 ${c.text} flex-shrink-0`} /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHAT'S COVERED */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-600" /> Garantii Katab</h3>
            <div className="space-y-3">
              {['Meie poolt teostatud tööde defektid', 'Paigaldatud varuosade rikked', 'Ühenduste ja tihendite probleemid', 'Seadistuste häired meie tööde tõttu', 'Korduvdiagnostika tasuta'].map(item => (
                <div key={item} className="flex items-center gap-2 text-emerald-900"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /> {item}</div>
              ))}
            </div>
          </div>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" /> Garantii Ei Kata</h3>
            <div className="space-y-3">
              {['Tahtlik kahjustamine või väärkasutus', 'Kolmandate osapoolte remonttööd', 'Loomulik kulumine (nt katlakivi)', 'Veekvaliteedist tulenevad kahjustused', 'Force majeure (üleujutus, pikselöök)'].map(item => (
                <div key={item} className="flex items-center gap-2 text-red-900"><AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Kuidas Garantiid Kasutada</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Helistage meile', desc: 'Kirjeldage probleemi ja öelge töö kuupäev' },
              { step: '2', title: 'Hindame olukorda', desc: 'Meister tuleb kohale ja teeb diagnostika' },
              { step: '3', title: 'Tasuta parandus', desc: 'Garantii korral on parandus täiesti tasuta' },
            ].map(s => (
              <div key={s.step} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-3 text-lg font-bold text-emerald-600">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Korduma Kippuvad Küsimused</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
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
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kvaliteet Garantiiga</h2>
              <p className="text-lg text-emerald-100 mb-8">Kõik meie tööd on garantiiga kaetud. Helistage ja küsige pakkumist!</p>
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
