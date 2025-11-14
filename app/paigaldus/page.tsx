import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Paigaldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          {/* --- PAGE TITLE --- */}
          <h1 className="text-4xl font-semibold md:text-6xl fancy-heading">
            Boileri paigaldus ja hooldus Tallinnas & Harjumaal
          </h1>

          {/* --- SEO INTRO --- */}
          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Otsite usaldusväärset boileri paigaldust, hooldust või remonti Tallinnas ja Harjumaal?
            BoileriABI.ee pakub professionaalset, kiiret ja kvaliteetset boilerite paigaldust,
            hooldust ning remonti nii eramajadele, korteritele, ettevõtetele kui ka korteriühistutele.
            Meie meeskond tegeleb igapäevaselt erinevate boileri tüüpide, tootjate ja mudelitega – tagades teile
            ohutu ja energiatõhusa kuumaveesüsteemi.
          </p>

          {/* --- MAIN CONTENT BLOCKS --- */}
          <div className="mt-10 space-y-10 text-lg leading-relaxed text-gray-800">

            {/* 1. Paigaldusprotsess */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Professionaalne boileri paigaldus</h2>
              <p>
                Korralik boileri paigaldus tagab seadme pika eluea, madalama energiakulu ja töökindla
                kuumaveesüsteemi. Meie spetsialistid paigaldavad nii elektriboilereid, horisontaalseid ja
                vertikaalseid mahuboilereid kui ka läbivooluboilereid. Valime sobiva asukoha, kontrollime
                seina kandevõimet, hindame torustiku seisukorda ning tagame korrektse elektriühenduse
                vastavalt Eesti standarditele.
              </p>
              <p className="mt-4">
                Paigalduse käigus kontrollime maandust, kaitsmeid, ühenduskarpe, termostaati ja ohutusseadmeid.
                Vajadusel paigaldame lisakraani boileri tühjendamiseks ja kvaliteetse kaitseklapi, mis väldib
                ohtlikku ülekuumenemist ja liigset rõhku.
              </p>
            </div>

            {/* 2. Hooldus */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Boileri hooldus – miks see on vajalik?</h2>
              <p>
                Eesti vesi on väga lubjarikas, mis põhjustab boileri sisse kiiret katlakivi kogunemist.
                Hooldamata boiler hakkab aeglasemalt töötama, kulutab rohkem elektrit, kuumeneb üle ning võib
                hakata lekkima. Regulaarne hooldus eemaldab boileri seest katlakivi, muda ning setted,
                tagades parema veekvaliteedi ja pikema eluiga.
              </p>
              <p className="mt-4">
                Soovitame hooldust vähemalt kord iga <strong>1–2 aasta</strong> jooksul. Meie tehnik teostab
                põhjaliku hoolduse: puhastab sisemuse, kontrollib anoodi kulumist, testib küttespiraali ja
                kontrollib kaitselülitit. Vajadusel vahetame anoodi, tihendid, regulaatori või küttespiraali.
              </p>
            </div>

            {/* 3. Remont ja diagnostika */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Boileri remont ja diagnostika</h2>
              <p>
                Kui boiler ei kuumuta vett, teeb ebaharilikku häält, lekib või annab välja roostes vett,
                teostame kiire diagnostika ja remondi. Tüüpilised probleemid: katlakivi, defektne anood,
                läbi põlenud küttespiraal, tihendite kulumine, elektriline rike või rõhu kõikumised.
              </p>
              <p className="mt-4">
                Remondime kõiki tuntud kaubamärke: Ariston, Atlantic, Tesy, Drazice, Stiebel Eltron, Bosch,
                Regent, Thermor, Electrolux ja paljud teised.
              </p>
            </div>

            {/* 4. Boileri tüübid */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Paigaldame ja hooldame kõiki boileritüüpe</h2>

              <h3 className="text-2xl font-semibold mt-4">Elektriboilerid</h3>
              <p>Lihtsad ja töökindlad. Sobivad korteritesse ja eramajadesse.</p>

              <h3 className="text-2xl font-semibold mt-4">Mahuboilerid</h3>
              <p>Hoiavad suures koguses kuuma vett. Ideaalne suuremale tarbimisele.</p>

              <h3 className="text-2xl font-semibold mt-4">Läbivooluboilerid</h3>
              <p>Energiasäästlik valik – vett kuumutatakse ainult kasutamise ajal.</p>

              <h3 className="text-2xl font-semibold mt-4">Mitmesüsteemsed boilerid</h3>
              <p>Elektri + päikesepaneelide kombinatsioon. Sobib energiatõhusatele kodudele.</p>
            </div>

            {/* 5. Hinnad */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Boileri paigaldus hinnad</h2>
              <p>
                Hinnad sõltuvad boileri tüübist, mahu suurusest, paigalduskohast ja vajaminevatest lisatöödest.
                Anname alati <strong>täpse hinnapakkumise kohapeal</strong>, enne töö alustamist.
              </p>
            </div>

            {/* 6. Piirkond */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Töötame Tallinnas ja Harjumaal</h2>
              <p>
                Teeninduspiirkond: Tallinn, Viimsi, Pirita, Lasnamäe, Mustamäe, Õismäe, Kesklinn, Kristiine,
                Rae vald, Peetri, Saue, Saku, Harku, Tabasalu, Maardu, Keila, Laagri ja kõik ümbritsevad piirkonnad.
              </p>
            </div>

            {/* 7. KKK */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Korduma kippuvad küsimused</h2>

              <h3 className="text-xl font-semibold mt-4">Kui kaua boileri paigaldus aega võtab?</h3>
              <p>Keskmiselt 1–2 tundi, sõltuvalt mudelist ja ühendustest.</p>

              <h3 className="text-xl font-semibold mt-4">Kas vana boileri utiliseerimine on võimalik?</h3>
              <p>Jah – eemaldame vana boileri ja viime ära, kui soovite.</p>

              <h3 className="text-xl font-semibold mt-4">Millal boiler tuleks välja vahetada?</h3>
              <p>Kui see lekib, ei hoia temperatuuri, on tugevalt roostetanud või üle 10–15 aasta vana.</p>

              <h3 className="text-xl font-semibold mt-4">Kas paigaldate ka keerulistes tingimustes?</h3>
              <p>Jah. Kitsad ruumid, lisatorustik, raskesti ligipääsetavad asukohad – leiame lahenduse.</p>
            </div>

          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}
