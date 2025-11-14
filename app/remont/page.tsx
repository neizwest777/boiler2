// @ts-nocheck
"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Wrench, AlertTriangle, Flame, GaugeCircle, PhoneCall } from "lucide-react";

export default function Remont() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* HERO */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold">
            Boileri remont ja hooldus Tallinnas & Harjumaal
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Kui boiler ei tööta korrektselt, lekib, ei kuumuta vett, teeb ebaharilikke hääli 
            või annab pruunikat vett – <strong>BoileriABI.ee</strong> pakub professionaalset 
            boilerite remonti ja hooldust Tallinnas ja Harjumaal. Diagnoosime probleemi kiiresti 
            ja teostame kvaliteetse remondi, et tagada ohutu ja energiatõhus soojaveesüsteem.
          </p>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Remondime kõiki tuntud boileri tootjaid: Ariston, Atlantic, Tesy, Drazice, Bosch, 
            Regent, Thermor, Electrolux, Stiebel Eltron ja paljud teised. 
          </p>

          {/* CTA BLOCK */}
          <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-8 h-8" />
              <p className="text-lg font-semibold text-red-700">
                Kiire reageerimine – tuleme võimalusel samal päeval!
              </p>
            </div>

            <a
              href="tel:+37253684587"
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition text-lg font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Helista: 53684587
            </a>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">

            {/* 1. DIAGNOSTICS */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <GaugeCircle className="w-7 h-7 text-blue-500" />
                Kiire boileri diagnostika ja rikke tuvastamine
              </h2>
              <p>
                Boileri diagnostika algab põhjaliku ülevaatusega: kontrollime küttespiraali,
                termostaati, anoodi seisukorda, rõhutaset, torustikku ja elektriühendusi. 
                Tuvastame rikke põhjuse ning pakume välja kulutõhusa lahenduse.
              </p>

              <p className="mt-4">
                Remondime elektriboilereid, mahuboilereid, läbivooluboilereid ja mitmesüsteemseid 
                veesoojendajaid. 
              </p>
            </div>

            {/* 2. COMMON FAULTS */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Wrench className="w-7 h-7 text-gray-700" />
                Levinumad boileri rikked, mida parandame
              </h2>

              <h3 className="text-2xl font-semibold mt-4">Ei kuumuta vett</h3>
              <p>Tihti põhjuseks katlakivi või defektne küttekeha.</p>

              <h3 className="text-2xl font-semibold mt-4">Pruunikas või sogane vesi</h3>
              <p>Märk setetest ja mudast boileri põhjas.</p>

              <h3 className="text-2xl font-semibold mt-4">Kõva müra või praksumine</h3>
              <p>Katlakivi kihid kuumenemisspiraalil.</p>

              <h3 className="text-2xl font-semibold mt-4">Boiler lekib</h3>
              <p>Tihend, rõhuprobleem või korpus on roostetanud.</p>

              <h3 className="text-2xl font-semibold mt-4">Elektriline rike</h3>
              <p>Termostaat, kaitsmed, küttekeha või ühendused.</p>
            </div>

            {/* 3. MAINTENANCE */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Flame className="w-7 h-7 text-orange-500" />
                Regulaarne hooldus pikendab boileri eluiga
              </h2>
              <p>
                Eesti lubjarikas vesi põhjustab boilerisse kiiresti katlakivi kogunemist. 
                Regulaarne hooldus tagab stabiilse töö, madalama elektrikulu ja parema veekvaliteedi.
              </p>

              <p className="mt-4">
                Soovitame hooldust <strong>kord 1–2 aasta jooksul</strong>. 
                Teostame katlakivi eemaldamist, anoodi vahetust ja küttespiraali testimist.
              </p>
            </div>

            {/* 4. WHEN IS REPAIR REQUIRED */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Millal on boileri remont vältimatu?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kuum vesi kaob või temperatuur kõigub</li>
                <li>Boiler kuumeneb üle või lülitab ennast välja</li>
                <li>Seade teeb kõva müra või praksumist</li>
                <li>Pruunikas või must vesi torust</li>
                <li>Kaitseklapp tilgub pidevalt</li>
                <li>Boiler lekib või on tugevalt roostes</li>
              </ul>
            </div>

            {/* 5. PRICING */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Boileri remondi hinnad</h2>
              <p>
                Remondi hind sõltub rikke iseloomust, vajaminevatest varuosadest ja töömahust.
                Anname alati <strong>läbipaistva ja täpse hinnapakkumise enne töö alustamist.</strong>
              </p>

              <ul className="list-disc ml-6 space-y-2 mt-3">
                <li>Küttespiraali vahetus</li>
                <li>Termostaadi vahetus</li>
                <li>Anoodi vahetus</li>
                <li>Katlakivi eemaldamine</li>
                <li>Elektriliste ühenduste korrastamine</li>
                <li>Tihendite vahetus</li>
              </ul>
            </div>

            {/* 6. AREA */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Töötame Tallinnas ja Harjumaal</h2>
              <p>
                Lasnamäe, Mustamäe, Õismäe, Kristiine, Kesklinn, Nõmme, Viimsi, Rae, Peetri, Saue, Saku, 
                Maardu, Tabasalu, Keila, Laagri ja kõik ümbritsevad piirkonnad.
              </p>
            </div>

            {/* 7. FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Korduma kippuvad küsimused</h2>

              <h3 className="text-xl font-semibold mt-4">Kui kiiresti saate remondile tulla?</h3>
              <p>Enamasti samal päeval. Kiireloomuline hädaabi – 24/7.</p>

              <h3 className="text-xl font-semibold mt-4">Kas vana boiler tasub remontida?</h3>
              <p>Kui see on üle 12–15 aasta vana või roostes – pigem vahetada.</p>

              <h3 className="text-xl font-semibold mt-4">Kas pruunikas vesi tähendab riket?</h3>
              <p>Jah, see on märk setetest ja katlakivist.</p>

              <h3 className="text-xl font-semibold mt-4">Kas töödele kehtib garantii?</h3>
              <p>Jah – kõikidele töödele anname garantii.</p>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
