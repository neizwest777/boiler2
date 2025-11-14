// @ts-nocheck
"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { PhoneCall, AlertTriangle, Flame, Droplets } from "lucide-react";

export default function HadaabiPage() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center fancy-overlay">
      <Header />

      {/* HERO SECTION */}
      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold">
            Boileri hädaabi 24/7 Tallinnas ja Harjumaal
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Kui boiler lekib, ei kuumuta vett, tekitab lühiseid või ülekuumeneb,
            vajate kohest ja professionaalset abi.{" "}
            <strong>BoileriABI.ee</strong> pakub kiiret 24/7 hädaabiteenust kogu
            Tallinnas ja Harjumaal.
          </p>

          {/* CTA */}
          <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-md 
                          flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-8 h-8" />
              <p className="text-lg font-semibold text-red-700">
                Kiire reageerimine – tuleme esimesel võimalusel!
              </p>
            </div>

            <a
              href="tel:+37253684587"
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 
                         transition text-lg font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Helista: 53684587
            </a>
          </div>

          {/* CONTENT BLOCK */}
          <div className="mt-12 space-y-16 text-lg text-gray-800 leading-relaxed">

            {/* WHEN TO CALL */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Droplets className="w-7 h-7 text-blue-500" /> Millal kutsuda hädaabi?
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Boiler lekib või tilgub tugevalt</li>
                <li>Kuum vesi puudub täielikult</li>
                <li>Tunda on kõrbelõhna või kuuldub ebatavalist põrinat</li>
                <li>Kaitselüliti lööb pidevalt välja</li>
                <li>Pruunikas, must või mudane vesi</li>
                <li>Boiler kuumeneb ohtlikult üle</li>
              </ul>
            </div>

            {/* FAST RESPONSE */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Flame className="w-7 h-7 text-orange-500" /> Kiire reageerimine 24/7
              </h2>
              <p>
                Saabume võimalusel <strong>sama tunni jooksul</strong>.  
                Tõsiste rikete korral reageerime <strong>koheselt</strong>.  
                Meie hädaabimeeskond on alati valmis kiireks tegutsemiseks.
              </p>
            </div>

            {/* WHAT WE DO */}
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-7 h-7 text-yellow-500" /> Mida teeme kohapeal?
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Rikke tuvastamine ja olukorra hindamine</li>
                <li>Ajutine ohu kõrvaldamine (lekete peatamine, elektri isoleerimine)</li>
                <li>Remont, tihendite või varuosade vahetus</li>
                <li>Veekahjustuste ennetamine</li>
                <li>Elektrilise ohu kõrvaldamine ja süsteemi kontroll</li>
              </ul>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
