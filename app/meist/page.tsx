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
    <>
      {/* ✅ JSON-LD SCHEMA FOR ABOUT PAGE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Meist",
            "description": "Boileriabi.ee - kogenud torumehed Tallinnas ja Harjumaal. Üle 430 boileri remondi, 24/7 hädaabi, töögarantii.",
            "publisher": {
              "@type": "Organization",
              "name": "Boileriabi.ee",
              "description": "Professionaalne boileri paigaldus, remont ja hooldus Tallinnas ja Harjumaal",
              "url": "https://boileriabi.ee",
              "telephone": "+37253684587",
              "areaServed": ["Tallinn", "Harjumaa"],
              "founder": "Boileriabi.ee meeskond",
              "foundingDate": "2018",
              "numberOfEmployees": "5-10",
              "serviceType": [
                "Boileri paigaldus",
                "Boileri remont",
                "Boileri hooldus",
                "Hädaabi boiler"
              ]
            }
          }),
        }}
      />

      {/* ✅ ENHANCED HERO ABOUT */}
      <div className="container-narrow py-16">
        <LandingAboutSection
          title="Meist - Boileriabi.ee"
          description="Boileriabi.ee on Tallinnas ja Harjumaal tegutsev ettevõte, mis on täielikult keskendunud boilerite hooldusele, remondile ning professionaalsele paigaldusele. Meie tugevuseks on pikaajaline kogemus, süsteemne lähenemine ja praktilised oskused, mis on välja arendatud aastate jooksul töötades erinevate tootjate ja mudelitega – alates väiksematest kodustest boileritest kuni suuremate mahutiteni kortermajades ja ärihoonetes."
          imageSrc="/static/images/generated/hero-meist.webp" imageAlt="Boileriabi meeskond Tallinnas - professionaalsed torumehed"
        />
      </div>

      {/* ✅ COMPANY STATS */}
      <section className="bg-gray-50 py-16">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Meie Numbrid Räägivad Enda Eest
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">430+</div>
              <div className="text-gray-700">Boileri remonti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">3000+</div>
              <div className="text-gray-700">Rahulolevat klienti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700">Hädaabi saadaval</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-700">Keskmine hinnang</div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ VALUES SECTION */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Meie Väärtused Ja Põhimõtted
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Usaldusväärsus</h3>
              <p className="text-gray-700">
                Pakume ainult kvaliteetseid teenuseid ja kasutame sertifitseeritud varuosasid. 
                Kõikidel töödel on ametlik garantii.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kiirus</h3>
              <p className="text-gray-700">
                Reageerime kiiresti - hädaabijuhul juba 1-2 tunni jooksul Tallinnas. 
                Aega väärtustame nii enda kui klientide jaoks.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kliendikesksus</h3>
              <p className="text-gray-700">
                Kuulame klienti ja pakume parimat lahendust tema vajadustele. 
                Ausus ja läbipaistvus on meie põhiväärtused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ENHANCED SEO CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-16 text-lg leading-relaxed">
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-500" />
            Pikaajaline Kogemus Ja Kvaliteet, Mida Saab Usaldada
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Boileriabi.ee eesmärk on pakkuda teenust, mis on kiire, usaldusväärne ja aus.</strong> Kõik tööd teostab
            sertifitseeritud meister isiklikult, mitte juhuslik brigaad. Oleme spetsialiseerunud just boileritele –
            see tähendab, et meie igapäevane töö hõlmab nii hooldust, remonti kui ka paigaldust.
          </p>
          <p className="text-gray-700">
            Alates <strong>2018. aastast</strong> oleme aidanud tuhandel Tallinna ja Harjumaa elanikel 
            lahendada nende boileriga seotud probleeme. Meie kogemus hõlmab kõiki suuremaid boileri tootjaid 
            nagu Ariston, Atlantic, Tesy, Drazice, Bosch, Stiebel Eltron ja paljud teised.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              Miksi Kliendid Valivad Meid?
            </h3>
            <ul className="space-y-3 text-blue-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Tegutseme ainult boileritega</strong> – sügav spetsialiseerumine</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Pikaajaline kogemus</strong> erinevate tootjate ja mudelitega</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Kiire reageerimine</strong> Tallinnas ja Harjumaal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Aus ja läbipaistev hinnastamine</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Hädaabi 24/7</strong> võimalus</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Kohapealne nõustamine</strong> ja professionaalne diagnoos</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-green-600" />
              Töötame Tallinnas Ja Kogu Harjumaal
            </h3>
            <p className="text-green-700 mb-4">
              Teenindame nii eraisikuid, korteriühistuid kui ka ettevõtteid. Reageerime kiiresti piirkondades nagu
              Tallinn, Viimsi, Rae, Peetri, Saue, Saku, Harku, Keila, Maardu, Tabasalu ja kõik ümbritsevad piirkonnad.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-green-700">
              <div>🏙️ Tallinn</div>
              <div>🌊 Viimsi</div>
              <div>🏡 Rae</div>
              <div>🔥 Harku</div>
              <div>🏞️ Saue</div>
              <div>🚰 Maardu</div>
              <div>🔧 Keila</div>
              <div>⚡ Laagri</div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Wrench className="w-8 h-8 text-orange-500" />
            Miks On Boileri Hooldus Oluline?
          </h2>
          <p className="text-orange-700 mb-4">
            Eesti lubjane vesi põhjustab boileri sisse katlakivi ja setete kogunemist. Hooldamata boiler hakkab
            tarbima rohkem elektrit, kuumeneb üle ja võib tekitada lekkeid. Regulaarne hooldus pikendab boileri eluiga
            ja tagab puhta vee.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-xl font-semibold text-orange-800 mb-3">Kui tihti tuleb boilerit hooldada?</h4>
              <p className="text-orange-700">
                Soovitame hooldust vähemalt kord iga 1–2 aasta tagant. Suurema kasutuse või halva vee kvaliteedi puhul
                sagedamini. Kuna boiler ei anna hooldusvajadusest ise märku, peaksite arvestust pidama.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-orange-800 mb-3">Kas vana boilerit tasub puhastada?</h4>
              <p className="text-orange-700">
                Jah, kui boiler ei leki ja korpus on korras. Pruunikas vesi tekib settest, mis koguneb aastatega boileri
                põhja. Puhastamine taastab vee kvaliteedi ja vähendab energiakulu.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">Meie Tööprotsess</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Kontakt</h3>
              <p className="text-purple-700 text-sm">Helistad või saadad päringu</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Diagnoos</h3>
              <p className="text-purple-700 text-sm">Teeme kiire ja täpse diagnoosi</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Lahendus</h3>
              <p className="text-purple-700 text-sm">Pakume parimat lahendust</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Garantii</h3>
              <p className="text-purple-700 text-sm">Anname töödele garanti</p>
            </div>
          </div>
        </div>

      </section>

      {/* ✅ CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="container-narrow text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vali Usaldusväärne Partner
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Üle 430 boileri remondi kogemus, 24/7 hädaabi ja ametlik töögarantii - 
            vali professionaal, kellele saab usaldada oma boileri hooldust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+37253684587"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
            >
              <PhoneCall className="w-6 h-6" />
              Helista: +372 5368 4587
            </a>
            <Link
              href="/kontakt"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-colors shadow-lg"
            >
              📩 Saada päring
            </Link>
          </div>
          <p className="mt-6 text-primary-200">
            ⚡ Kiireim reageerimine Tallinnas • 24/7 hädaabi • Professionaalne nõustamine
          </p>
        </div>
      </section>
    </>
  );
}
