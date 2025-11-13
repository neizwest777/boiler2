import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Kontakt() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Võta meiega ühendust
          </h1>

          <p className="mt-6 md:text-xl">
            BoileriABI.ee on piirkonna usaldusväärne torumeeste teenuste pakkuja
            Tallinnas ja Harjumaal. Pakume boilerite paigaldust, remonti ning
            hooldust, kindlustades soojus- ja veevarustuse tõrkeideta.
          </p>

          <p className="mt-6 md:text-xl">
            Kui teil on küsimusi või soovite tellida teenust, võtke meiega
            ühendust ning aitab meie kogenud meeskond teil kiiresti ja
            kvaliteetselt. Meie eesmärk on pakkuda klientidele professionaalset
            ning sõbralikku teenust igal sammul.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
