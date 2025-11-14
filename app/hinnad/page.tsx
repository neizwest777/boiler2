// @ts-nocheck
"use client";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Wrench, Droplets, AlertTriangle, CheckCircle } from "lucide-react";

export default function Page() {
  return (
    <>
      {/* HEADER как на других страницах */}
      <Header className="mb-6" />

      {/* Контейнер ровно такой же как на контакт/ремонт */}
      <div className="w-full flex flex-col items-center py-12 px-4">

        {/* Центральный контейнер */}
        <div className="w-full max-w-4xl bg-white/70 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-200">

          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold text-center mb-6">
            Boileri teenuste hinnad
          </h1>

          <p className="md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Siit leiate ülevaate meie kõige populaarsemate teenuste hindadest.
            Kõik tööd teostatakse professionaalselt, kiirelt ja garantii alusel.
          </p>

          {/* PRICE GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <Wrench className="w-10 h-10 text-primary-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Boileri paigaldus</h2>
              <p className="text-gray-700 mb-6">
                Professionaalne paigaldus uutele ja olemasolevatele süsteemidele.
              </p>
              <p className="text-3xl font-bold text-primary-600">120–250 €</p>
            </div>

            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <Droplets className="w-10 h-10 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Boileri hooldus</h2>
              <p className="text-gray-700 mb-6">
                Katlakivi eemaldamine, anoodi kontroll ja üldine ülevaatus.
              </p>
              <p className="text-3xl font-bold text-primary-600">80–150 €</p>
            </div>

            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Boileri remont</h2>
              <p className="text-gray-700 mb-6">
                Kiire rikke tuvastamine ja kvalitatiivne parandamine.
              </p>
              <p className="text-3xl font-bold text-primary-600">50–200 €</p>
            </div>

            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <AlertTriangle className="w-10 h-10 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Hädaabi 24/7</h2>
              <p className="text-gray-700 mb-6">
                Kiire reageerimine lekete, lühiste või ohtlike olukordade korral.
              </p>
              <p className="text-3xl font-bold text-primary-600">90–150 €</p>
            </div>

            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Anoodi vahetus</h2>
              <p className="text-gray-700 mb-6">
                Kaitseb boilerit rooste ja korrosiooni eest.
              </p>
              <p className="text-3xl font-bold text-primary-600">30–90 €</p>
            </div>

            <div className="rounded-2xl shadow-xl p-8 border border-gray-200 bg-white hover:shadow-2xl transition">
              <Wrench className="w-10 h-10 text-primary-700 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Küttespiraali vahetus</h2>
              <p className="text-gray-700 mb-6">
                Vajalik, kui boiler ei kuumuta vett või lülitab kaitse välja.
              </p>
              <p className="text-3xl font-bold text-primary-600">60–150 €</p>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
