import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { ShieldCheck, CheckCircle, BadgeCheck, Wrench, Clock } from "lucide-react";

export default function Garantii() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-center">
            Garantii meie töödele
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed text-center max-w-3xl mx-auto">
            BoileriABI.ee pakub kõigile oma klientidele ametlikku garantiid nii paigaldus-, 
            remondi- kui ka hooldustöödele. Kasutame kvaliteetseid materjale, järgime 
            Eesti tehnilisi standardeid ning tagame, et teie boiler töötab turvaliselt, 
            säästlikult ja tõrgeteta.
          </p>


          {/* ICON GRID */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-2xl shadow-xl p-8 border bg-white text-center hover:shadow-2xl transition">
              <ShieldCheck className="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3">Paigaldustööde garantii</h2>
              <p className="text-gray-700">
                Kõikidele boileri paigaldustele kehtib ametlik töögarantii — tagame,
                et ühendused, elektriühendus ja paigaldus vastavad standarditele.
              </p>
            </div>

            <div className="rounded-2xl shadow-xl p-8 border bg-white text-center hover:shadow-2xl transition">
              <BadgeCheck className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3">Remonditööde garantii</h2>
              <p className="text-gray-700">
                Vahetatud varuosadele ja remondile kehtib tootja või meiepoolne garantii. 
                Kasutame ainult kvaliteetseid ja sertifitseeritud komponente.
              </p>
            </div>

            <div className="rounded-2xl shadow-xl p-8 border bg-white text-center hover:shadow-2xl transition">
              <Clock className="w-12 h-12 mx-auto text-yellow-600 mb-4" />
              <h2 className="text-2xl font-bold mb-3">Hooldustööde garantii</h2>
              <p className="text-gray-700">
                Teostame hoolduse vastavalt tootjapoolsetele juhistele ning tagame 
                korrektse ja põhjaliku katlakivi eemaldamise ja anoodi kontrolli.
              </p>
            </div>

          </div>


          {/* SEO CONTENT */}
          <div className="mt-16 space-y-10 text-gray-800 leading-relaxed text-lg max-w-3xl mx-auto">

            <div>
              <h2 className="text-3xl font-bold mb-3">Mida täpselt garantii katab?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kõik meie poolt teostatud ühendused ja kinnitused</li>
                <li>Elektriühenduste kvaliteet ja ohutus</li>
                <li>Tööde vastavus tehnilistele nõuetele</li>
                <li>Vahetatud varuosad (anood, küttespiraal, tihendid, termostaat)</li>
                <li>Kaitseklapi ja turvasüsteemide korrektne töö</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-3">Kui pikk on garantii?</h2>
              <p>
                Garantii pikkus sõltub töö liigist:
              </p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li><strong>Paigaldus:</strong> 1 aasta töödele</li>
                <li><strong>Remont:</strong> 6–12 kuud olenevalt varuosast</li>
                <li><strong>Hooldus:</strong> 3 kuud tööle (katlakivi eemaldus jms)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-3">Mida garantii ei kata?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kahjustused, mis tulenevad valest kasutamisest</li>
                <li>Välised veekahjustused (torustiku lekked, üleujutused)</li>
                <li>Elektriprobleemid hoone juhtmestikust</li>
                <li>Üle 10–15 aasta vanuste boilerite korrosioon</li>
                <li>Loodusjõudude või pinge kõikumise põhjustatud rikked</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-3">Miks valida BoileriABI.ee?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Sertifitseeritud torumehed</li>
                <li>Ametlik töö- ja materjaligarantii</li>
                <li>Kiire reageerimine Tallinnas ja Harjumaal</li>
                <li>Aus hinnakiri ja läbipaistev tööprotsess</li>
                <li>24/7 hädaabi võimalus</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-3">Korduma kippuvad küsimused</h2>

              <h3 className="text-xl font-semibold mt-4">Kas garantii kehtib ka vanale boilerile?</h3>
              <p>
                Jah — töödele kehtib garantii isegi siis, kui boiler on vana, kuid see ei laiene seadmele endale.
              </p>

              <h3 className="text-xl font-semibold mt-4">Kas garantii kehtib, kui klient ise boilerit avab?</h3>
              <p>
                Kahjuks mitte. Enese tehtud muudatused katkestavad garantii.
              </p>

              <h3 className="text-xl font-semibold mt-4">Kui kiiresti reageerite garantiijuhtumile?</h3>
              <p>
                Garantii puhul reageerime alati prioriteetselt — tavaliselt samal või järgmisel päeval.
              </p>
            </div>

          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
