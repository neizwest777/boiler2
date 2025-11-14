// @ts-nocheck
"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Wrench, ShieldCheck, Flame, Droplets, PhoneCall } from "lucide-react";

export default function Hooldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold">
            Boileri hooldus Tallinnas ja Harjumaal
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Regulaarne boileri hooldus tagab seadme pikema eluea, madalama energiakulu ja ohutu töö.
            <strong> BoileriABI.ee</strong> teostab professionaalset hooldusteenust Tallinnas ja Harjumaal:
            puhastame katlakivi, eemaldame setteid, kontrollime anoodi, küttespiraali, termostaati ja
            kõiki ohutusseadmeid.
          </p>

          {/* CTA BLOCK */}
          <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-md 
                          flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600 w-8 h-8" />
              <p className="text-lg font-semibold text-blue-700">
                Vajad boileri hooldust? Tuleme kiiresti kohale!
              </p>
            </div>

            <a
              href="tel:+37253684587"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 
                         transition text-lg font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Helista: 53684587
            </a>
          </div>

          {/* CONTENT */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">

            {/* WHY MAINTENANCE */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Droplets className="w-7 h-7 text-blue-500" />
                Miks boiler vajab regulaarset hooldust?
              </h2>
              <p>
                Eesti vesi on väga lubjarikas. Katlakivi koguneb boileri põhja ja seintele, mille tõttu:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>väheneb efektiivne veemaht</li>
                <li>tõuseb elektrikulu</li>
                <li>küttespiraal kuumeneb üle</li>
                <li>tekivad lekked ja korrosioon</li>
              </ul>
              <p className="mt-4">
                Regulaarne hooldus hoiab süsteemi stabiilsena, töökindlana ja ohutuna.
              </p>
            </div>

            {/* WHAT’S INCLUDED */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Wrench className="w-7 h-7 text-gray-700" />
                Mis kuulub hoolduse sisse?
              </h2>

              <ul className="list-disc ml-6 space-y-2">
                <li>Boileri sisemine puhastus (katlakivi + muda eemaldamine)</li>
                <li>Anoodi kontroll ja vajadusel vahetus</li>
                <li>Küttespiraali testimine ja hindamine</li>
                <li>Tihendite ja ühenduste kontroll</li>
                <li>Kaitseklapi ning rõhusüsteemi kontroll</li>
                <li>Elektriühenduste ülevaatus</li>
              </ul>
            </div>

            {/* HOW OFTEN */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Flame className="w-7 h-7 text-orange-500" />
                Kui tihti hooldust teha?
              </h2>
              <p>
                Soovitame hooldust teha <strong>iga 1–2 aasta järel</strong>.  
                Suurema veetarbimise või eriti lubjase vee korral isegi sagedamini.
              </p>
            </div>

            {/* BENEFITS */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Hoolduse eelised</h2>

              <ul className="list-disc ml-6 space-y-2">
                <li>Madal elektrikulu</li>
                <li>Parem ja puhtam veekvaliteet</li>
                <li>Pikem boileri eluiga</li>
                <li>Väiksem ülekuumenemise ja rikete oht</li>
              </ul>
            </div>

            {/* AREAS */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Piirkonnad, kus töötame</h2>
              <p>
                Teenindame kogu Harjumaad: Tallinn, Viimsi, Rae, Peetri, Tabasalu, Saku, Saue,
                Harku, Laagri, Maardu, Keila ja paljud teised piirkonnad.
              </p>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
