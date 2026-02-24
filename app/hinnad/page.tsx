import { Wrench, Droplets, AlertTriangle, CheckCircle, PhoneCall, Shield, Clock, Euro, Info } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boileri Hinnad",
  description: "Boileri paigalduse, remondi ja hoolduse hinnad 2025. Läbipaistvad hinnad: paigaldus 120-250€, hooldus 80-150€, remont 50-200€. Tasuta hindamine!",
  keywords: [
    "boileri hinnad",
    "boileri paigalduse hind",
    "boileri remondi hind",
    "boileri hoolduse hind",
    "veesoojendi hinnad",
    "boileri teenuse hind",
    "hädaabi boileri hind",
    "küttespiraali vahetuse hind"
  ],
  alternates: {
    canonical: "https://www.boileriabi.ee/hinnad",
  },
  openGraph: {
    title: "Boileri Hinnad",
    description: "Boileri paigalduse, remondi ja hoolduse hinnad 2025. Läbipaistvad hinnad koos töögarantiiga.",
    url: "https://boileriabi.ee/hinnad",
    siteName: "Boileriabi.ee",
    images: [
      {
        url: "https://boileriabi.ee/api/og?title=Boileri%20Hinnad&description=L%C3%A4bipaistvad%20hinnad%202025",
        width: 1200,
        height: 630,
        alt: "Boileriabi.ee - Boileri teenuste hinnad",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
};


export default function Page() {
  const SERVICES = [
    { title: 'Boileri Paigaldus', price: '150–300', unit: '€', desc: 'Uue boileri professionaalne paigaldamine koos ühenduste ja seadistusega', items: ['Elektri ühendused ja maandus', 'Torustiku ühendamine', 'Ohutusseadmete paigaldus'], color: 'blue', href: '/paigaldus' },
    { title: 'Boileri Hooldus', price: '60–120', unit: '€', desc: 'Põhjalik hooldus katlakivi eemaldamisega, anoodi kontroll ja süsteemi ülevaatus', items: ['Katlakivi eemaldamine', 'Anoodi kontroll ja vahetus', 'Ohutusseadmete testimine'], color: 'green', href: '/hooldus' },
    { title: 'Boileri Remont', price: '80–200', unit: '€', desc: 'Kiire rikke tuvastamine ja kvaliteetne parandamine kõikide brändide mudeleid', items: ['Diagnostika ja rikke tuvastamine', 'Vajalike varuosade vahetus', 'Süsteemi testimine ja käivitamine'], color: 'orange', href: '/remont' },
    { title: 'Hädaabi 24/7', price: '90–150', unit: '€', desc: 'Kiire reageerimine lekete, lühiste või ohtlike olukordade korral. 24/7 kättesaadavus', items: ['Kiireim reageerimine 1-2h', 'Ohu kiire kõrvaldamine', 'Ajutine lahendus või remont'], color: 'red', href: '/hadaabi' },
    { title: 'Anoodi Vahetus', price: '30–90', unit: '€', desc: 'Magneesiumanoodi vahetus, mis kaitseb boilerit rooste ja korrosiooni eest', items: ['Anoodi seisukorra kontroll', 'Uue anoodi paigaldus', 'Süsteemi testimine'], color: 'teal', href: '/hooldus' },
    { title: 'Küttespiraali Vahetus', price: '60–150', unit: '€', desc: 'Vajalik, kui boiler ei kuumuta vett või lülitab kaitset välja', items: ['Vana küttespiraali eemaldamine', 'Uue küttespiraali paigaldus', 'Süsteemi funktsionaalsuse kontroll'], color: 'purple', href: '/remont' },
  ];
  const COLORS: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', badge: 'bg-blue-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', badge: 'bg-green-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', badge: 'bg-orange-100' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', badge: 'bg-red-100' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100', badge: 'bg-teal-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', badge: 'bg-purple-100' },
  };
  const FAQ = [
    { q: 'Kas hinnad sisaldavad käibemaksu?', a: 'Jah, kõik meie hinnad on käibemaksuga (20%). Lõpliku hinnapakkumise saate tasuta enne töö alustamist.' },
    { q: 'Kas pakute soodustusi?', a: 'Jah, pensionäridele ja korduvklientidele pakume soodustusi. Küsi täpsemalt!' },
    { q: 'Millal pean maksma?', a: 'Tasute tööde lõpetamise järel, kui olete rahul tulemusega. Aktsepteerime sularaha ja pangamakseid.' },
    { q: 'Mis juhtub, kui hind muutub töö käigus?', a: 'Kõik muudatused arutatakse ja kinnitatakse enne jätkamist. Teie nõusolekuta hindu ei tõsteta.' },
    { q: 'Kas väljasõidutasu on eraldi?', a: 'Ei, meie hinnad sisaldavad väljasõidutasu Tallinnas. Harjumaal võib lisanduda väike transporditasu.' },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Euro className="w-4 h-4" /> Läbipaistvad hinnad 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Boileri Teenuste<br/>
              <span className="text-emerald-400">Hinnad</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
              Kõik hinnad on läbipaistvad ja sisaldavad käibemaksu. Tasuta hindamine enne töö alustamist — ei mingeid üllatusi.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl"><CheckCircle className="w-4 h-4 text-emerald-400" /> Tasuta hindamine</div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl"><Shield className="w-4 h-4 text-emerald-400" /> Töögarantii</div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl"><Clock className="w-4 h-4 text-emerald-400" /> Kiire kalkulatsioon</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image src="/static/images/generated/hero-hinnad.webp" alt="Boileri teenuste hinnad" width={800} height={800} className="w-full h-auto object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* PRICING CARDS */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Teenuste Hinnad</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.map(s => {
              const c = COLORS[s.color];
              return (
                <Link href={s.href} key={s.title} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <div className={`px-6 pt-6 pb-4 ${c.bg}`}>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{s.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold ${c.text}`}>{s.price}</span>
                      <span className="text-gray-500 text-sm">{s.unit}</span>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-500 mb-3">{s.desc}</p>
                    <div className="space-y-2">
                      {s.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className={`w-3.5 h-3.5 ${c.text} flex-shrink-0`} /> {item}
                        </div>
                      ))}
                    </div>
                    <div className={`mt-4 text-sm font-medium ${c.text} group-hover:underline`}>Loe rohkem →</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* WHAT AFFECTS PRICE */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Mis Mõjutab Hinda?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-gray-900 mb-4">Peamised hinnamõjutajad</h3>
              <div className="space-y-3">
                {[
                  { t: 'Boileri tüüp ja mudel', d: 'erinevad mudelid nõuavad erinevaid varuosasid' },
                  { t: 'Paigalduskoha keerukus', d: 'ligipääsetavus ja ruumitingimused' },
                  { t: 'Vajalike varuosade hind', d: 'kvaliteetsed originaalvaruosad' },
                  { t: 'Tööaja kestus', d: 'keerukamad remondid võtavad rohkem aega' },
                ].map(item => (
                  <div key={item.t} className="flex items-start gap-2"><Info className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" /><div><span className="font-medium text-gray-900">{item.t}</span><span className="text-gray-500"> — {item.d}</span></div></div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-4">Meie hinnaeelised</h3>
              <div className="space-y-3">
                {[
                  { t: 'Tasuta hindamine', d: 'täpne hinnapakkumine enne töö alustamist' },
                  { t: 'Läbipaistvad hinnad', d: 'puuduvad varjatud kulud' },
                  { t: 'Töögarantii', d: 'kõikidele töödele anname garanti' },
                  { t: 'Ausad soovitused', d: 'ei soovita üleliigseid remonte' },
                ].map(item => (
                  <div key={item.t} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /><div><span className="font-medium text-gray-900">{item.t}</span><span className="text-gray-500"> — {item.d}</span></div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Korduma Kippuvad Küsimused Hindade Kohta</h2>
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
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_50%)]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vajad Täpset Hinnapakkumist?</h2>
              <p className="text-lg text-slate-300 mb-8">Saada pilt või kirjelda oma boileri probleemi — anname tasuta täpse hinnapakkumise!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+37253684587" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all">
                  <PhoneCall className="w-5 h-5" /> +372 5368 4587
                </a>
                <a href="https://wa.me/37253684587" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg border border-white/20 transition-all">
                  💬 Saada päring WhatsApp
                </a>
              </div>
              <p className="mt-6 text-slate-400 text-sm">✓ Tasuta hindamine · ✓ Täpne kalkulatsioon · ✓ Läbipaistvad hinnad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
