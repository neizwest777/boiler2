import { PhoneCall, CheckCircle, Clock, Shield, MapPin, Droplets } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Hooldus Tallinna Piirkonnas",
  description: "Professionaalne boileri hooldus Tallinna piirkonnas. Katlakivi eemaldamine, anoodi vahetus, süsteemi kontroll. Helista +372 5368 4587",
  keywords: "boileri hooldus tallinnas, boileri puhastus, katlakivi eemaldamine, anoodi vahetus tallinn",
  openGraph: { title: "Boileri Hooldus Tallinna Piirkonnas", description: "Professionaalne boileri hooldus kogu Tallinna piirkonnas.", type: "website", locale: "et_EE", url: "https://www.boileriabi.ee/boileri-hooldus-tallinna-piirkonnas" },
  alternates: { canonical: "https://www.boileriabi.ee/boileri-hooldus-tallinna-piirkonnas" },
};

export default function Page() {
  const AREAS = ['Kesklinn','Mustamäe','Lasnamäe','Õismäe','Nõmme','Pirita','Haabersti','Kristiine','Põhja-Tallinn','Viimsi','Rae','Saue','Saku','Harku','Jüri','Keila'];
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-green-600 via-emerald-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"><Droplets className="w-4 h-4" /> Ennetav hooldus</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1]">Boileri Hooldus<br/><span className="text-emerald-200">Tallinna Piirkonnas</span></h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-lg">Ennetav hooldus pikendab boileri eluiga 2–3 korda ja vähendab elektrikulu kuni 20%. Katlakivi eemaldamine, anoodi vahetus ja süsteemi kontroll.</p>
            <a href="tel:+37253684587" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-emerald-200">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 1–2 tundi</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> 6 kuud garantii</div>
            </div>
          </div>
          <div className="relative"><div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"><Image src="/static/images/generated/hero-hooldus.webp" alt="Boileri hooldus Tallinnas" width={800} height={800} className="w-full h-auto object-cover" priority /></div><div className="absolute -bottom-3 -left-3 bg-white text-emerald-700 font-bold px-4 py-2 rounded-xl shadow-lg text-lg">60–120€</div></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professionaalne Boileri Hooldus Tallinnas</h2>
          <p className="text-gray-600 leading-relaxed">Regulaarne hooldus on kõige olulisem samm boileri pikaajalise töö tagamiseks. Katlakivi kogunemine vähendab boileri efektiivsust, suurendab elektrikulu ja lühendab seadme eluiga. Soovitame teha hooldust vähemalt kord aastas.</p>
          <p className="text-gray-600 leading-relaxed">Meie hooldus sisaldab katlakivi eemaldamist, anoodi kontrolli ja vajadusel vahetust, tihendite kontrolli, ohutusseadmete testimist ja süsteemi seadistamist.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Hoolduse Eelised</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: '-20% elektrikulu', desc: 'Puhas boiler tarbib oluliselt vähem elektrit' },
              { title: '2–3× pikem eluiga', desc: 'Regulaarne hooldus pikendab seadme eluiga märkimisväärselt' },
              { title: 'Puhas veekvaliteet', desc: 'Katlakivi ja setete eemaldamine tagab puhta vee' },
              { title: 'Ennetab rikkeid', desc: 'Varajane probleemide tuvastamine hoiab ära kulukaid remonte' },
            ].map(b => (
              <div key={b.title} className="bg-green-50 p-5 rounded-xl border border-green-100">
                <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
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
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Broneeri Hooldus</h2>
              <p className="text-lg text-emerald-100 mb-8">Helistage ja lepime kokku sobiva aja!</p>
              <a href="tel:+37253684587" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
