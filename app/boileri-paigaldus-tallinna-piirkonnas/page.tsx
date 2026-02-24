import { PhoneCall, CheckCircle, Clock, Shield, MapPin, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Paigaldus Tallinna Piirkonnas",
  description: "Professionaalne boileri paigaldus Tallinna piirkonnas. Kiire paigaldus, 2 aastat garantii, tasuta konsultatsioon. Helista +372 5368 4587",
  keywords: "boileri paigaldus tallinnas, boileri paigaldamine tallinnas, boileri montaaž, odav boileri paigaldus",
  openGraph: { title: "Boileri Paigaldus Tallinna Piirkonnas", description: "Professionaalne boileri paigaldus kogu Tallinna piirkonnas.", type: "website", locale: "et_EE", url: "https://www.boileriabi.ee/boileri-paigaldus-tallinna-piirkonnas" },
  alternates: { canonical: "https://www.boileriabi.ee/boileri-paigaldus-tallinna-piirkonnas" },
};

export default function Page() {
  const AREAS = ['Kesklinn','Mustamäe','Lasnamäe','Õismäe','Nõmme','Pirita','Haabersti','Kristiine','Põhja-Tallinn','Viimsi','Rae','Saue','Saku','Harku','Jüri','Keila'];
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"><MapPin className="w-4 h-4" /> Tallinn ja Harjumaa</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1]">Boileri Paigaldus<br/><span className="text-blue-200">Tallinna Piirkonnas</span></h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">Professionaalne boileri paigaldus kõikidele brändidele. Kiire kohaletulek, 2 aasta garantii ja tasuta hindamine.</p>
            <a href="tel:+37253684587" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-blue-200">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Sama päeva teenus</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> 2 aastat garantii</div>
            </div>
          </div>
          <div className="relative"><div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"><Image src="/static/images/generated/hero-paigaldus.webp" alt="Boileri paigaldus Tallinnas" width={800} height={800} className="w-full h-auto object-cover" priority /></div><div className="absolute -bottom-3 -left-3 bg-white text-blue-700 font-bold px-4 py-2 rounded-xl shadow-lg text-lg">150–300€</div></div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professionaalne Boileri Paigaldus Tallinnas</h2>
          <p className="text-gray-600 leading-relaxed">Pakume professionaalset boileri paigaldust kogu Tallinna piirkonnas ja Harjumaal. Meie kogenud meistrid paigaldavad kõiki populaarseid brände — Electrolux, Gorenje, Ariston, Bosch, Atlantic, Thermex ja paljud teised. Iga paigaldus sisaldab elektriühendusi, torustiku ühendamist, ohutusseadmete kontrolli ja süsteemi seadistamist.</p>
          <p className="text-gray-600 leading-relaxed">Kõikidele paigaldustöödele anname 2 aasta garantii. Enne töö alustamist saate tasuta hinnapakkumise — ilma üllatusteta.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Paigaldus Sisaldab</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {['Vana boileri demonteerimine','Uue boileri paigaldamine seinale','Elektriühendused ja maandus','Torustiku ühendamine','Ohutusseadmete paigaldus ja kontroll','Süsteemi seadistamine ja testimine','Kliendi juhendamine','2 aasta töögarantii'].map(item => (
              <div key={item} className="flex items-center gap-2 text-gray-700 bg-blue-50 px-4 py-3 rounded-xl"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" /> {item}</div>
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
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vajad Boileri Paigaldust?</h2>
              <p className="text-lg text-blue-100 mb-8">Helistage ja meister on kohal juba täna!</p>
              <a href="tel:+37253684587" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition-all"><PhoneCall className="w-5 h-5" /> +372 5368 4587</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
