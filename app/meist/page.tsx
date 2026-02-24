import { LandingAboutSection } from '@/components/landing';
import { PhoneCall, ShieldCheck, Clock, Users, Award, CheckCircle, MapPin, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meist - Kogenud Torumehed",
  description: "Boileriabi.ee - kogenud torumehed Tallinnas ja Harjumaal. Üle 430 boileri remondi, 24/7 hädaabi, töögarantii. Professionaalne boileriteenus alates 2018.",
  keywords: [
    "torumees Tallinnas",
    "boileri meister",
    "kogenud torumehed",
    "boileri teenused",
    "veesoojendi spetsialist",
    "boileri remondi ettevõte",
    "professionaalne boileriteenus"
  ],
  alternates: {
    canonical: "https://www.boileriabi.ee/meist",
  },
  openGraph: {
    title: "Meist - Kogenud Torumehed",
    description: "Boileriabi.ee - kogenud torumehed Tallinnas ja Harjumaal. Üle 430 boileri remondi, 24/7 hädaabi, töögarantii.",
    url: "https://boileriabi.ee/meist",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Meist&description=Kogenud%20torumehed%20Tallinnas",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Meist",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};

export default function MeistPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Users className="w-4 h-4" /> Alates 2018
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Kogenud<br/><span className="text-emerald-400">Torumehed</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Professionaalne boileriteenus Tallinnas ja Harjumaal. Üle 500 eduka paigalduse ja remondi.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '500+', label: 'Eduka tööd' },
            { num: '4.9', label: 'Kliendi hinnang' },
            { num: '24/7', label: 'Hädaabi' },
            { num: '2a', label: 'Töögarantii' },
          ].map(s => (
            <div key={s.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">{s.num}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Kes Me Oleme?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Boileriabi.ee on Prism Hooldus OÜ professionaalne boileriteenuste bränd. Alates 2018. aastast oleme teostanud üle 500 boileri paigalduse, remondi ja hooldustöö Tallinnas ja Harjumaal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Meie meeskond koosneb kogenud torumeestritest, kes tunnevad kõiki populaarseid brände — Electrolux, Gorenje, Ariston, Bosch, Atlantic, Thermex ja paljud teised.
            </p>
            <div className="space-y-3">
              {[
                'Professionaalsed ja sertifitseeritud meistrid',
                'Kõik populaarsed boileri brändid',
                'Kvaliteetsed originaalvaruosad',
                'Töögarantii kõikidele teenustele',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" /> {item}</div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-emerald-600" /> Ettevõtte Info</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between"><span>Ettevõte</span><span className="font-medium text-gray-900">Prism Hooldus OÜ</span></div>
              <div className="flex justify-between"><span>Reg. number</span><span className="font-medium text-gray-900">16718539</span></div>
              <div className="flex justify-between"><span>Asutatud</span><span className="font-medium text-gray-900">2018</span></div>
              <div className="flex justify-between"><span>Piirkond</span><span className="font-medium text-gray-900">Tallinn, Harjumaa</span></div>
              <div className="flex justify-between"><span>Teenused</span><span className="font-medium text-gray-900">Paigaldus, remont, hooldus</span></div>
              <div className="flex justify-between"><span>Kättesaadavus</span><span className="font-medium text-red-600">24/7</span></div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Meie Väärtused</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'Kvaliteet', desc: 'Kasutame ainult kvaliteetseid originaalvaruosasid ja professionaalseid töövahendeid. Iga töö saab garantii.' },
              { icon: <Clock className="w-6 h-6" />, title: 'Kiirus', desc: 'Kiire reageerimine ja efektiivne töö. Enamik remonte teostatakse 1–2 tunni jooksul kohapeal.' },
              { icon: <Users className="w-6 h-6" />, title: 'Ausus', desc: 'Läbipaistvad hinnad, ausad soovitused. Ei soovita üleliigseid remonte ega vahetusi.' },
            ].map(v => (
              <div key={v.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">{v.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Meie Teenused</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/paigaldus" className="group bg-blue-50 p-5 rounded-2xl border border-blue-100 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">Paigaldus</h3>
              <p className="text-sm text-gray-500 mb-2">Uue boileri paigaldamine</p>
              <span className="text-blue-600 text-sm font-medium">150–300€ →</span>
            </Link>
            <Link href="/remont" className="group bg-orange-50 p-5 rounded-2xl border border-orange-100 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">Remont</h3>
              <p className="text-sm text-gray-500 mb-2">Kiire rikke parandamine</p>
              <span className="text-orange-600 text-sm font-medium">80–200€ →</span>
            </Link>
            <Link href="/hooldus" className="group bg-green-50 p-5 rounded-2xl border border-green-100 hover:shadow-md transition-all">
              <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-1">Hooldus</h3>
              <p className="text-sm text-gray-500 mb-2">Ennetav hooldus katlakivi vastu</p>
              <span className="text-green-600 text-sm font-medium">60–120€ →</span>
            </Link>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vajad Meistrit?</h2>
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
