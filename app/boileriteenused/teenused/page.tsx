import { Wrench, Droplets, Flame, AlertTriangle, PhoneCall, Shield, Clock, CheckCircle, Zap } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PHONE_E164 = "+37253684587";
const PHONE_HUMAN = "+372 5368 4587";

export const metadata: Metadata = {
  title: "Boileri Teenused Tallinnas | Paigaldus, Remont, Hooldus 24/7 | Boileriabi",
  description: "Professionaalsed boileri teenused Tallinnas: paigaldus, remont, hooldus ja hädaabi 24/7. Kiire kohaletulek, kogenud meistrid, garantii. Helista: +372 5368 4587",
  keywords: ["boileri teenused", "boileri teenused tallinn", "boileri paigaldus", "boileri remont", "boileri hooldus", "torumees tallinn"],
  alternates: { canonical: "https://www.boileriabi.ee/boileriteenused/teenused" },
  openGraph: {
    title: "Boileri Teenused Tallinnas | Paigaldus, Remont, Hooldus 24/7",
    description: "Kõik boileri teenused ühest kohast. Kiire kohaletulek Tallinnas ja Harjumaal.",
    url: "https://www.boileriabi.ee/boileriteenused/teenused",
    locale: "et_EE",
    type: "website",
  },
};

export default function BoileriteenusedTeenusedPage() {
  const SERVICES = [
    { title: 'Boileri Paigaldus', desc: 'Uue boileri paigaldus, vana asendamine. Kõik brändid ja tüübid. Ühendused, seadistamine ja ohutuskontroll.', price: 'al. 150€', href: '/paigaldus', icon: Wrench },
    { title: 'Boileri Remont', desc: 'Rikke diagnostika ja professionaalne parandamine. Küttespiraalid, termostaadid, ohutusventiilid, elektroonikaplaadid.', price: 'al. 80€', href: '/remont', icon: Flame },
    { title: 'Boileri Hooldus', desc: 'Katlakivi eemaldamine, anoodi kontroll ja vahetus, süsteemi pesu. Pikendab boileri eluiga 2-3 korda.', price: 'al. 60€', href: '/hooldus', icon: Shield },
    { title: 'Hädaabi 24/7', desc: 'Kiire abi lekete, rikete ja ohtlike olukordade korral. Kohaletulek 1-2 tunni jooksul.', price: 'al. 90€', href: '/hadaabi', icon: AlertTriangle },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Clock className="w-4 h-4" />
            Kiire kohaletulek Tallinnas ja Harjumaal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Boileri Teenused Tallinnas
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professionaalne boileri paigaldus, remont ja hooldus. Kogenud meistrid, garantii kõikidele töödele, 24/7 hädaabi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg"
            >
              <PhoneCall className="w-5 h-5" />
              {PHONE_HUMAN}
            </a>
            <Link
              href="#teenused"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all"
            >
              Vaata teenuseid
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="teenused" className="w-full py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Meie boileri teenused</h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">Kõik boileri teenused ühest kohast – alates paigaldusest kuni hädaabini.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <Link key={s.title} href={s.href} className="group block p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-emerald-600 transition-colors">{s.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{s.desc}</p>
                <span className="text-emerald-600 font-bold">{s.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Miks valida Boileriabi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Kiire kohaletulek', desc: 'Kohal 1–2 tunni jooksul Tallinnas ja lähiümbruses.' },
              { icon: Shield, title: 'Garantii töödele', desc: 'Kuni 2 aastat garantiid kõikidele paigaldus- ja remonditöödele.' },
              { icon: CheckCircle, title: 'Aus hinnakiri', desc: 'Hind kokkuleppel enne tööd. Tasuta esmane konsultatsioon.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-emerald-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Vajate boileri abi?</h2>
          <p className="text-lg text-emerald-100 mb-8">Helistage meile või saatke päring – vastame kiiresti!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              {PHONE_HUMAN}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all"
            >
              Saada päring
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
