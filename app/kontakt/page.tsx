// @ts-nocheck
"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function KontaktPage() {
  return (
    <div className="flex flex-col w-full min-h-screen fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* H1 */}
          <h1 className="text-4xl font-semibold md:text-6xl fancy-heading mb-6">
            Kontakt – BoileriABI.ee
          </h1>

          {/* SEO TEXT */}
          <p className="text-lg md:text-xl mb-6">
            Võtke meiega ühendust boileri paigalduse, remondi või hoolduse osas. 
            Vastame kiiresti ja töötame kogu Tallinnas ja Harjumaal. 
            Pakume professionaalset ja usaldusväärset torumehe teenust nii 
            eramajadele, korteritele kui ka korteriühistutele.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-3 text-lg md:text-xl">

            <p className="flex items-center gap-2">
              <span className="text-red-600 text-xl">📞</span>
              <strong>Telefon:</strong> 53684587
            </p>

            <p className="flex items-center gap-2">
              <span className="text-blue-600 text-xl">📧</span>
              <strong>E-post:</strong> prismestonia@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <span className="text-green-600 text-xl">📍</span>
              <strong>Asukoht:</strong> Tallinn, Harjumaa – teenindus kogu piirkonnas
            </p>
          </div>

          {/* MAP BLOCK (works in every country, not blocked) */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl mt-10 border border-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              src="https://www.openstreetmap.org/export/embed.html?bbox=24.60%2C59.35%2C25.30%2C59.55&layer=mapnik&marker=59.437%2C24.753"
            ></iframe>
          </div>

          <p className="text-sm text-gray-600 mt-3">
            Tallinn, Eesti – teenindame kogu Harjumaa piirkonda.
          </p>

          {/* SECOND PARAGRAPH */}
          <p className="mt-8 text-lg md:text-xl">
            Pakume kiiret ja usaldusväärset teenust nii eraisikutele, ettevõtetele 
            kui ka korteriühistutele. Kirjutage või helistage – leiame lahenduse 
            igale boileri probleemile. Meie meeskond on alati valmis reageerima 
            ka kiireloomulistele olukordadele.
          </p>

        </section>
      </div>

      <Footer />
    </div>
  );
}
