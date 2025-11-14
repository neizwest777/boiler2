import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Hadabi() {
  return (
    <div className="flex flex-col w-full min-h-screen fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold">
            Boileri hädaabi 24/7 Tallinnas ja Harjumaal
          </h1>

          <p className="mt-6 md:text-xl text-gray-800 leading-relaxed">
            Kui boiler lekib, ei kuumuta vett, tekitab lühiseid või ülekuumeneb, vajate kohest abi.
            BoileriABI.ee pakub kiiret ja professionaalset 24/7 hädaabiteenust Tallinnas ja Harjumaal.
          </p>

          <div className="mt-12 space-y-12 text-lg text-gray-800 leading-relaxed">

            <div>
              <h2 className="text-3xl font-bold mb-4">Millal kutsuda hädaabi?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Boiler lekib või tilgub tugevalt</li>
                <li>Kuum vesi puudub täielikult</li>
                <li>Sulav lõhn või põrin</li>
                <li>Kaitselüliti lööb välja</li>
                <li>Pruunikas või must vesi</li>
                <li>Boiler kuumeneb ohtlikult üle</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Kiire reageerimine</h2>
              <p>
                Saabume võimalusel samal tunnil. Kõige kriitilisemate rikete korral reageerime koheselt.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Mida teeme kohapeal?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Rikke tuvastamine</li>
                <li>Ajutine ohu kõrvaldamine</li>
                <li>Remont või varuosade vahetus</li>
                <li>Veekahjustuste ennetamine</li>
                <li>Elektrilise ohu kõrvaldamine</li>
              </ul>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
