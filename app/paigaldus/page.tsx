// @ts-nocheck
"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Wrench, Flame, Layers, GaugeCircle, PhoneCall } from "lucide-react";

export default function Paigaldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold">
            Boileri paigaldus ja hooldus Tallinnas & Harjumaal
          </h1>

          {/* SEO INTRO */}
          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Otsite usaldusväärset boileri paigaldust, hooldust või remonti Tallinnas ja Harjumaal?
            <strong> BoileriABI.ee</strong> pakub professionaalset, kiiret ja kvaliteetset boilerite paigaldust,
            hooldust ning remonti nii eramajadele, korteritele, ettevõtetele kui ka korteriühistutele.
            Meie meeskond tegeleb igapäevaselt erinevate boileri tüüpide ja mudelitega – tagame teile
            ohutu ja energiatõhusa kuumaveesüsteemi.
          </p>

          {/* CTA BLOCK */}
          <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Wrench className="text-blue-600 w-8 h-8" />
              <p className="text-lg font-semibold text-blue-700">
                Vajate boileri paigaldust või hooldust? Tuleme kiiresti!
              </p>
            </div>

            <a
              href="tel:+37253684587"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition text-lg font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Helista: 53684587
            </a>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">

            {/* 1. INSTALLATION */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Layers className="w-7 h-7 text-blue-500" />
                Professionaalne boileri paigaldus
              </h2>
              <p>
                Korralik boileri paigaldus tagab seadme pika eluea, madalama energiakulu ja töökindla
                kuumaveesüsteemi. Paigaldame nii elektriboilereid, horisontaalseid ja vertikaalseid mahuboilereid kui ka läbivooluboilereid.
              </p>
              <p className="mt-4">
                Kontrollime seina kandevõimet, torustiku seisukorda ja elektriühendusi vastavalt Eesti standarditele.
                Paigalduse käigus kontrollime maandust, kaitsmeid, termostaati ja ohutusseadmeid ning paigaldame lisakraani boileri tühjendamiseks.
              </p>
            </div>

            {/* 2. MAINTENANCE */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <GaugeCircle className="w-7 h-7 text-green-600" />
                Boileri hooldus – miks see on oluline?
              </h2>
              <p>
                Eesti vesi on lubjarikas, mis põhjustab boileri sisse kiiret katlakivi kogunemist.
                Hooldamata boiler kuumeneb üle, kulutab rohkem elektrit ja võib hakata lekkima.
              </p>
              <p className="mt-4">
                Soovitame hooldust iga <strong>1–2 aasta jooksul</strong>. Kontrollime anoodi kulumist,
                puhastame sisemuse, testime küttespiraali ja kontrollime kõiki ohutusseadmeid.
              </p>
            </div>

            {/* 3. REPAIR */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Flame className="w-7 h-7 text-orange-500" />
                Boileri remont ja diagnostika
              </h2>
              <p>
                Kui boiler ei kuumuta vett, lekib, teeb müra või annab roostes vett, teostame kiire diagnostika ja remondi.
              </p>
              <p className="mt-4">
                Remondime kõiki tuntud brände: Ariston, Atlantic, Tesy, Drazice, Bosch, Stiebel Eltron, Regent,
                Thermor, Electrolux ja palju muud.
              </p>
            </div>

            {/* 4. TYPES */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Paigaldame ja hooldame kõiki boileritüüpe</h2>

              <h3 className="text-xl font-semibold mt-4">• Elektriboilerid</h3>
              <p>Lihtne paigaldus, töökindel ja populaarne lahendus.</p>

              <h3 className="text-xl font-semibold mt-4">• Mahuboilerid</h3>
              <p>Sobib suurematele peredele — alati soe vesi kohe saadaval.</p>

              <h3 className="text-xl font-semibold mt-4">• Läbivooluboilerid</h3>
              <p>Kompaktne, energiatõhus ja kohene kuum vesi.</p>

              <h3 className="text-xl font-semibold mt-4">• Päikesesüsteemiga boilerid</h3>
              <p>Ideaalne energiasäästlikesse majadesse.</p>
            </div>

            {/* 5. PRICING */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Boileri paigaldus hinnad</h2>
              <p>
                Hinnad sõltuvad boileri tüübist, suurusest ja paigalduskohast.  
                <strong> Täpne hinnapakkumine antakse alati enne töö alustamist.</strong>
              </p>
            </div>

            {/* 6. AREA */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Töötame Tallinnas ja Harjumaal</h2>
              <p>
                Teeninduspiirkond: Tallinn, Viimsi, Rae, Peetri, Saue, Saku, Harku, Tabasalu, Pirita,
                Mustamäe, Õismäe, Maardu, Keila, Laagri ja kogu Harjumaa.
              </p>
            </div>

            {/* 7. FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Korduma kippuvad küsimused</h2>

              <h3 className="text-xl font-semibold mt-4">Kui kaua boileri paigaldus aega võtab?</h3>
              <p>Keskmiselt 1–2 tundi.</p>

              <h3 className="text-xl font-semibold mt-4">Kas vana boileri utiliseerimine on võimalik?</h3>
              <p>Jah — viime vana boileri ära.</p>

              <h3 className="text-xl font-semibold mt-4">Millal boiler tuleks välja vahetada?</h3>
              <p>Kui see lekib, ei hoia temperatuuri või on üle 12–15 aasta vana.</p>

              <h3 className="text-xl font-semibold mt-4">Kas paigaldate ka keerulistes tingimustes?</h3>
              <p>Jah — kitsad ruumid, lisatorud, ebastandardsed lahendused.</p>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
