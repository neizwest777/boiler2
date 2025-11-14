import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Wrench, Droplets, AlertTriangle, CheckCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen fancy-overlay pt-32">
      {/* FIXED HEADER */}
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* --- TITLE --- */}
          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-center">
            Boileri teenuste hinnad
          </h1>

          <p className="mt-6 md:text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Siit leiate ülevaate meie kõige populaarsemate teenuste hindadest. 
            Kõik tööd teostatakse professionaalselt, kiirelt ja garantii alusel.
          </p>

          {/* --- PRICE GRID --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {/* Paigaldus */}
            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <Wrench className="w-10 h-10 text-primary-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Boileri paigaldus</h2>
              <p className="text-gray-700 mb-6">
                Professionaalne paigaldus uutele ja olemasolevatele süsteemidele.
              </p>
              <p className="text-3xl font-bold text-primary-600">120–250 €</p>
            </div>

            {/* Hooldus */}
            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <Droplets className="w-10 h-10 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Boileri hooldus</h2>
              <p className="text-gray-700 mb-6">
                Katlakivi eemaldamine, anoodi kontroll ja üldine ülevaatus.
              </p>
              <p className="text-3xl font-bold text-primary-600">80–150 €</p>
            </div>

            {/* Remont */}
            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Boileri remont</h2>
              <p className="text-gray-700 mb-6">
                Kiire rikke tuvastamine ja kvalitatiivne parandamine.
              </p>
              <p className="text-3xl font-bold text-primary-600">50–200 €</p>
            </div>

            {/* Hädaabi */}
            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <AlertTriangle className="w-10 h-10 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Hädaabi 24/7</h2>
              <p className="text-gray-700 mb-6">
                Kiire reageerimine lekete, lühiste või ohtlike olukordade korral.
              </p>
              <p className="text-3xl font-bold text-primary-600">90–150 €</p>
            </div>

            {/* Anoodi vahetus */}
            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Anoodi vahetus</h2>
              <p className="text-gray-700 mb-6">
                Kaitseb boilerit rooste ja korrosiooni eest.
              </p>
              <p className="text-3xl font-bold text-primary-600">30–90 €</p>
            </div>

            {/* Küttespiraal */}
            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <Wrench className="w-10 h-10 text-primary-700 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Küttespiraali vahetus</h2>
              <p className="text-gray-700 mb-6">
                Vajalik, kui boiler ei kuumuta vett või lülitab kaitse välja.
              </p>
              <p className="text-3xl font-bold text-primary-600">60–150 €</p>
            </div>

          </div>

          {/* --- EXTRA INFO --- */}
          <div className="mt-16 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Kuidas kujuneb hind?</h2>
            <p>
              Lõplik hind sõltub boileri mahust, tüübist, asukohast ning vajalikest lisatöödest.
              Enne töö alustamist anname alati selge ja läbipaistva hinnapakkumise.
            </p>

            <h2 className="text-3xl font-bold mt-10">Miks valida BoileriABI.ee?</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Sertifitseeritud ja kogenud torumehed</li>
              <li>Kiire reageerimine kogu Tallinnas ja Harjumaal</li>
              <li>Kvaliteetne töö ja garantii</li>
              <li>Aus ja läbipaistev hinnastamine</li>
              <li>Hädaabi 24/7</li>
            </ul>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
