import { PhoneCall, CheckCircle, Clock, Shield, MapPin, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Remont Tallinna Piirkonnas - 24/7",
  description: "Kiire boileri remont Tallinna piirkonnas. Hädaabi 24/7, diagnostika kohapeal, originaalvaruosad. Helista +372 5368 4587",
  keywords: "boileri remont tallinnas, boileri parandus, boileri rike, veesoojendi remont tallinn",
  openGraph: { title: "Boileri Remont Tallinna Piirkonnas", description: "Kiire boileri remont kogu Tallinna piirkonnas 24/7.", type: "website", locale: "et_EE", url: "https://www.boileriabi.ee/boileri-remont-tallinna-piirkonnas" },
  alternates: { canonical: "https://www.boileriabi.ee/boileri-remont-tallinna-piirkonnas" },
};

export default function Page() {
  const AREAS = ['Kesklinn','Mustamäe','Lasnamäe','Õismäe','Nõmme','Pirita','Haabersti','Kristiine','Põhja-Tallinn','Viimsi','Rae','Saue','Saku','Harku','Jüri','Keila'];
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-red-600 via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"><span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span> Hädaabi 24/7</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1]">Boileri Remont<br/><span className="text-orange-200">Tallinna Piirkonnas</span></h1>
            <p className="text-lg text-orange-100 mb-8 max-w-lg">Kiire rikke tuvastamine ja kvaliteetne parandamine. Meister on kohal 1–2 tunni jooksul kogu Tallinnas ja Harjumaal.</p>
            <a href="tel:+37253684587" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-orange-200">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 1–2h kohaletulek</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> 1 aasta garantii</div>
            </div>
          </div>
          <div className="relative"><div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"><Image src="/static/images/generated/hero-remont.webp" alt="Boileri remont Tallinnas" width={800} height={800} className="w-full h-auto object-cover" priority /></div><div className="absolute -bottom-3 -left-3 bg-white text-red-600 font-bold px-4 py-2 rounded-xl shadow-lg text-lg">Alates 80€</div></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kiire Boileri Remont Tallinnas</h2>
          <p className="text-gray-600 leading-relaxed">Remondime kõiki boileri brände ja mudeleid — Electrolux, Gorenje, Ariston, Bosch, Atlantic, Thermex jt. Meie meistrid tuvastavad rikke kohapeal ja parandavad selle kiirelt, kasutades kvaliteetseid originaalvaruosasid.</p>
          <p className="text-gray-600 leading-relaxed">Levinumad rikked: boiler ei kuumuta vett, pruunikas vesi, kõva müra, leke, elektriline rike. Kõikidele remonttöödele anname 1 aasta garantii.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Levinumad Rikked</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Ei kuumuta vett', desc: 'Küttekeha või termostaadi rike' },
              { title: 'Pruunikas vesi', desc: 'Katlakivi või anoodi probleem' },
              { title: 'Kõva müra', desc: 'Katlakivi kogunemine' },
              { title: 'Boiler lekib', desc: 'Tihendite kulumine' },
              { title: 'Elektriline rike', desc: 'Kaitsmed, lühis' },
              { title: 'Ülekütumine', desc: 'Ohutusklapi rike' },
            ].map(r => (
              <div key={r.title} className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-sm text-gray-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Teeninduspiirkond</h2>
          <div className="flex flex-wrap gap-2">{AREAS.map(a => <span key={a} className="bg-slate-100 px-4 py-2 rounded-xl text-sm font-medium text-gray-700">{a}</span>)}</div>
        </section>
      </div>

      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Boiler Ei Tööta?</h2>
              <p className="text-lg text-orange-100 mb-8">Helistage kohe — meister on kohal 1–2 tunni jooksul!</p>
              <a href="tel:+37253684587" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
