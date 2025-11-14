// @ts-nocheck
"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Hooldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold">
            Boileri hooldus Tallinnas ja Harjumaal
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Regulaarne boileri hooldus tagab seadme pika eluea, madalama energiakulu ja ohutu töö.
            BoileriABI.ee pakub professionaalset hooldusteenust Tallinnas ja Harjumaal, eemaldades katlakivi,
            setted ning kontrollides kõiki olulisi komponente nagu anood, küttespiraal, termostaat ja kaitselüliti.
          </p>

          <div className="mt-12 space-y-12 text-lg text-gray-800 leading-relaxed">

            <div>
              <h2 className="text-3xl font-bold mb-4">Miks boiler vajab regulaarset hooldust?</h2>
              <p>
                Eesti vesi sisaldab palju lubjakivi, mis koguneb boileri põhja ja seintele.
                Selle tulemusena väheneb vee maht, suureneb elektrikulu, küttespiraal kuumeneb üle
                ja võivad tekkida lekked. Regulaarne hooldus hoiab süsteemi stabiilsena ja ohutuna.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Mis kuulub hoolduse sisse?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Boileri sisemine puhastus (katlakivi ja muda eemaldamine)</li>
                <li>Anoodi kontroll ja vajadusel vahetus</li>
                <li>Küttespiraali testimine ja hindamine</li>
                <li>Tihendite ja ühenduste kontroll</li>
                <li>Kaitseklapi ja rõhusüsteemi kontroll</li>
                <li>Elektriühenduste ülevaatus</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Kui tihti hooldust teha?</h2>
              <p>
                Soovitame hooldust teha iga 1–2 aasta tagant. Suurema veetarbimise või lubjase vee korral isegi sagedamini.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Hoolduse eelised</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Madal elektrikulu</li>
                <li>Parem veekvaliteet</li>
                <li>Pikem eluiga</li>
                <li>Väiksem oht riketele ja ülekuumenemisele</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Piirkonnad</h2>
              <p>
                Teenindame Tallinnat ja kogu Harjumaad: Viimsi, Rae, Peetri, Tabasalu, Saku, Saue,
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
