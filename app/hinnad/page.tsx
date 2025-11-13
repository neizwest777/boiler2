import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Hinnad() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Hinnad
          </h1>

          <p className="mt-6 md:text-xl">
            BoileriABI.ee pakub konkurentsivõimelisi hindu boilerite paigalduse,
            remondi ja hoolduse teenustele Tallinnas ja Harjumaal. usaldusväärne
            ja kiirem teenus tagab teie soojussüsteemide tõrgeteta toimimise
            aastaringselt.
          </p>

          <p className="mt-6 md:text-xl">
            Hinnakujundus sõltub töö mahust ja keerukusest. Pakume läbipaistvat
            hinnastamist ning tasuta konsultatsiooni, et leida parim lahendus
            vastavalt teie vajadustele ja eelarvele. Võtke meiega ühendust, et
            saada individuaalne pakkumine ja leida sobiv lahendus teie kodu või
            ettevõtte soojussüsteemidele.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
