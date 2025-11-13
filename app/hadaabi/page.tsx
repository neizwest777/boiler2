import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Hadaabi() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Hädaabi 24/7
          </h1>

          <p className="mt-6 md:text-xl">
            Kui teie boiler või küttesüsteem teeb mingeid probleeme, ei pea te
            séssama ega oodata tunde. BoileriABI pakub kiiret ja usaldusväärset
            hädaabileabi 24/7 Tallinnas ja Harjumaal. Meie kogenud torumehed on
            valmis teid abistama ööpäevaringselt, tagades teie kodu mugavuse ja
            turvalisuse.
          </p>

          <p className="mt-6 md:text-xl">
            Olgu see hädavajalik boileri remonditöö, hooldus või paigaldus –
            meie professionaalid on alati valmis aitama. Kui esineb veagi või
            soovite lihtsalt kontrollida oma küttesüsteemi tööd, võtke meiega
            ühendust ning saame kiiresti ja efektiivselt lahendada teie mure.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
