// @ts-nocheck
"use client";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { LandingAboutSection } from '@/components/landing';

export default function MeistPage() {
  return (
    <>
      <Header className="mb-6" />

      {/* --- HERO ABOUT --- */}
      <div className="container-narrow py-16">
        <LandingAboutSection
          title="Meist"
          description="BoileriABI.ee on Tallinnas ja Harjumaal tegutsev ettevõte, mis on täielikult keskendunud boilerite hooldusele, remondile ning professionaalsele paigaldusele. Meie tugevuseks on pikaajaline kogemus, süsteemne lähenemine ja praktilised oskused, mis on välja arendatud aastate jooksul töötades erinevate tootjate ja mudelitega – alates väiksematest kodustest boileritest kuni suuremate mahutiteni kortermajades ja ärihoonetes."
          imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80"
        />
      </div>

      {/* --- CUSTOM SEO SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-lg leading-relaxed">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">Pikaajaline kogemus ja kvaliteet, mida saab usaldada</h2>
          <p className="text-gray-700">
            BoileriABI.ee eesmärk on pakkuda teenust, mis on kiire, usaldusväärne ja aus. Kõik tööd teostab
            sertifitseeritud meister isiklikult, mitte juhuslik brigaad. Oleme spetsialiseerunud just boileritele –
            see tähendab, et meie igapäevane töö hõlmab nii hooldust, remonti kui ka paigaldust.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Miks kliendid valivad meid?</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Tegutseme ainult boileritega – sügav spetsialiseerumine</li>
            <li>Pikaajaline kogemus erinevate tootjate ja mudelitega</li>
            <li>Kiire reageerimine Tallinnas ja Harjumaal</li>
            <li>Aus ja läbipaistev hinnastamine</li>
            <li>Hädaabi 24/7 võimalus</li>
            <li>Kohapealne nõustamine ja professionaalne diagnoos</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Töötame Tallinnas ja kogu Harjumaal</h3>
          <p className="text-gray-700">
            Teenindame nii eraisikuid, korteriühistuid kui ka ettevõtteid. Reageerime kiiresti piirkondades nagu
            Tallinn, Viimsi, Rae, Peetri, Saue, Saku, Harku, Keila, Maardu, Tabasalu ja kõik ümbritsevad piirkonnad.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Miks on boileri hooldus oluline?</h2>
          <p className="text-gray-700">
            Eesti lubjane vesi põhjustab boileri sisse katlakivi ja setete kogunemist. Hooldamata boiler hakkab
            tarbima rohkem elektrit, kuumeneb üle ja võib tekitada lekkeid. Regulaarne hooldus pikendab boileri eluiga
            ja tagab puhta vee.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Kui tihti tuleb boilerit hooldada?</h3>
          <p className="text-gray-700">
            Soovitame hooldust vähemalt kord iga 1–2 aasta tagant. Suurema kasutuse või halva vee kvaliteedi puhul
            sagedamini. Kuna boiler ei anna hooldusvajadusest ise märku, peaksite arvestust pidama.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Kas vana boilerit tasub puhastada?</h3>
          <p className="text-gray-700 mb-3">
            Jah, kui boiler ei leki ja korpus on korras. Pruunikas vesi tekib settest, mis koguneb aastatega boileri
            põhja. Puhastamine taastab vee kvaliteedi ja vähendab energiakulu.
          </p>
          <p className="text-gray-700">
            Vajadusel vahetame ka anoodi ning kontrollime küttespiraali ja regulaatori tööd. Enamasti pole regulaatori
            väljavahetamine vajalik – piisab katlakivi eemaldamisest.
          </p>
        </div>

      </section>

      <Footer className="mt-8" />
    </>
  );
}
