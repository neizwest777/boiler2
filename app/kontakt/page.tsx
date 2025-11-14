import Link from "next/link";

{/* --- SUPER CTA + PIIRKONNAD + REVIEW + GARANTII BLOCK --- */}
<div className="w-full bg-white/70 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-200 mt-12">

  {/* --- CTA ROW --- */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-3">Vajad kiiret abi?</h2>
    <p className="text-lg text-gray-600">
      Helistame tagasi <strong>3 minuti jooksul</strong>. Reageerime kiiresti kogu Tallinnas ja Harjumaal.
    </p>

    <div className="flex justify-center gap-4 mt-6">
      <a
        href="tel:+37253684587"
        className="px-6 py-3 bg-red-600 text-white text-lg rounded-xl shadow hover:bg-red-700 transition flex items-center gap-2"
      >
        📞 Helista kohe
      </a>

      <Link
        href="/kontakt"
        className="px-6 py-3 border border-primary-400 text-primary-700 text-lg rounded-xl hover:bg-primary-50 transition rounded-xl"
      >
        Saada päring
      </Link>
    </div>
  </div>

  {/* --- PIIRKONNAD --- */}
  <div className="text-center mb-12">
    <h3 className="text-2xl font-semibold mb-4">Teenindame kogu Harjumaad</h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-lg">
      <div>🏙 Tallinn</div>
      <div>🌊 Viimsi</div>
      <div>🏡 Rae / Peetri</div>
      <div>🔥 Harku</div>
      <div>🏞 Saue / Laagri</div>
      <div>🚰 Maardu / Keila</div>
    </div>
  </div>

  {/* --- MINI REVIEWS --- */}
  <div className="mb-12">
    <h3 className="text-2xl font-semibold text-center mb-6">Kliendid meist</h3>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        ⭐️⭐️⭐️⭐️⭐️  
        <p className="mt-2 text-gray-700">
          “Tuli kohale 30 minutiga. Väga professionaalne ja kiire töö!”
        </p>
        <div className="mt-2 font-semibold text-gray-800">— Jaan T.</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        ⭐️⭐️⭐️⭐️⭐️  
        <p className="mt-2 text-gray-700">
          “Parandas boileri samal õhtul. Väga rahul teenusega.”
        </p>
        <div className="mt-2 font-semibold text-gray-800">— Kertu M.</div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        ⭐️⭐️⭐️⭐️⭐️  
        <p className="mt-2 text-gray-700">
          “Aus hind ja super kvaliteet. Soovitan kõigile!”
        </p>
        <div className="mt-2 font-semibold text-gray-800">— Andrus R.</div>
      </div>
    </div>
  </div>

  {/* --- GARANTII --- */}
  <div className="bg-primary-50/60 border border-primary-200 rounded-xl p-6 text-center">
    <div className="text-4xl mb-3">🛡</div>
    <h3 className="text-2xl font-bold mb-2">100% töögarantii</h3>
    <p className="text-gray-700 text-lg">
      Kui pärast töid tekib probleem — tuleme ja parandame tasuta.  
      Teie turvalisus ja kvaliteet on meie prioriteet.
    </p>
  </div>

</div>
