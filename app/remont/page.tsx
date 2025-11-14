import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Remont() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* --- HERO --- */}
          <h1 className="text-4xl font-semibold md:text-6xl fancy-heading">
            Boileri remont ja hooldus Tallinnas & Harjumaal
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Kui teie boiler ei tööta korrektselt, lekib, ei kuumuta vett, teeb
            ebaharilikke hääli või annab pruunikat vett – BoileriABI.ee pakub
            professionaalset boilerite remonti ja hooldust Tallinnas ning
            Harjumaal. Meie meeskond diagnoosib probleemi kiiresti ja teostab
            kvaliteetse remondi, et tagada ohutu ja energiatõhus soojaveesüsteem.
          </p>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Teostame kõiki töid alates väiksematest hooldustest kuni keerukate
            elektriliste ja mehaaniliste rikete parandamiseni. Remondime kõiki
            tuntud boileri tootjaid: Ariston, Atlantic, Tesy, Drazice, Bosch,
            Regent, Thermor, Electrolux, Stiebel Eltron ja palju teisi.
          </p>

          {/* --- SEO BLOCKS --- */}
          <div className="mt-12 space-y-12 text-lg text-gray-800 leading-relaxed">

            {/* 1. Kiire diagnostika */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Kiire boileri diagnostika ja rikke tuvastamine</h2>
              <p>
                Boileri diagnostika algab põhjaliku ülevaatusega, mille käigus kontrollime küttespiraali,
                termostaati, anoodi seisukorda, torustiku olukorda, rõhutaset ja elektriühendusi.
                Tuvastame kiiresti rikke põhjuse ja pakume välja kõige kulutõhusama lahenduse.
              </p>
              <p className="mt-4">
                Remondime nii elektriboilereid, mahuboilereid, läbivooluboilereid kui ka mitmesüsteemseid
                veesoojendajaid. Meie eesmärk on alati parandada seade nii, et selle tööaeg pikeneks mitu aastat.
              </p>
            </div>

            {/* 2. Levinumad rikked */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Levinumad boileri rikked, mida parandame</h2>

              <h3 className="text-2xl font-semibold mt-4">Ei kuumuta vett</h3>
              <p>Enamasti on põhjuseks katlakivi, defektne küttekeha või rike termostaadis.</p>

              <h3 className="text-2xl font-semibold mt-4">Pruunikas või sogane vesi</h3>
              <p>Tunnus, et boileri põhjas on setteid ja muda – vajalik puhastus ja hooldus.</p>

              <h3 className="text-2xl font-semibold mt-4">Boiler teeb kõva häält</h3>
              <p>Katlakivi kihid põhjustavad ülekuumenemist ja müra – vajalik katlakivi eemaldamine.</p>

              <h3 className="text-2xl font-semibold mt-4">Boiler lekib</h3>
              <p>Võib olla tihendi rike, korrosioon, ülekuumenemine või rõhuprobleemid.</p>

              <h3 className="text-2xl font-semibold mt-4">Elektriline rike</h3>
              <p>Termostaat, kaitsmed, küttespiraal, ühendused – kontroll ja remont vajalik.</p>
            </div>

            {/* 3. Boileri hooldus */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Regulaarne hooldus pikendab boileri eluiga</h2>
              <p>
                Regulaarne hooldus tagab stabiilse töö, madalama elektrikulu ja parema veekvaliteedi.
                Eriti oluline on hooldus Eesti lubjase vee tõttu, mis tekitab boilerisse kiiresti katlakivi.
              </p>
              <p className="mt-4">
                Hooldust soovitame teha <strong>kord 1–2 aasta tagant</strong>.
                Teostame katlakivi eemaldamist, anoodi vahetust, tihendite kontrolli ja küttespiraali testimist.
              </p>
            </div>

            {/* 4. Millal boiler vajab remonti? */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Millal on boileri remont vältimatu?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kuum vesi kaob või temperatuur kõigub</li>
                <li>Boiler kuumeneb üle või lülitab ennast välja</li>
                <li>Seade teeb põrisevat või praksuvat häält</li>
                <li>Pruunikas vesi tuleb torust</li>
                <li>Kaitseklapp tilgub pidevalt</li>
                <li>Boiler lekib või on korpus roostes</li>
              </ul>
            </div>

            {/* 5. Remondi hinnad */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Boileri remondi hinnad</h2>
              <p>
                Boileri remondi hind sõltub rikke iseloomust, varuosade vajadusest ja töö keerukusest.
                Anname alati selge ja läbipaistva hinnapakkumise.  
                Tüüpilised tööd:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-3">
                <li>Küttespiraali vahetus</li>
                <li>Termostaadi vahetus</li>
                <li>Anoodi vahetus</li>
                <li>Katlakivi eemaldus</li>
                <li>Elektriühenduste korrastamine</li>
                <li>Tihendite vahetus</li>
              </ul>
            </div>

            {/* 6. Piirkond */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Töötame Tallinnas ja Harjumaal</h2>
              <p>
                Teenindame kõiki piirkondi: Tallinn, Lasnamäe, Mustamäe, Õismäe, Kristiine, Nõmme, Kesklinn,
                Viimsi, Rae, Peetri, Maardu, Saue, Saku, Harku, Tabasalu, Keila, Laagri ja ümbrus.
              </p>
            </div>

            {/* 7. KKK */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Korduma kippuvad küsimused</h2>

              <h3 className="text-xl font-semibold mt-4">Kui kiiresti saate remondile tulla?</h3>
              <p>Enamasti samal päeval. Kiireloomulised rikked – 24/7 hädaabi.</p>

              <h3 className="text-xl font-semibold mt-4">Kas vana boileri remont või uus?</h3>
              <p>Kui boiler on üle 12–15 aasta vana või tugevasti roostes, soovitame pigem asendada.</p>

              <h3 className="text-xl font-semibold mt-4">Kas pruunikas vesi tähendab riket?</h3>
              <p>Jah – see on märk setetest ja katlakivist. Vajalik puhastus.</p>

              <h3 className="text-xl font-semibold mt-4">Kas pakute garantiid remondile?</h3>
              <p>Jah, kõikidele töödele anname garantii.</p>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
