import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Teenused() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Teenused
          </h1>

          <p className="mt-6 md:text-xl">
            BoileriABI.ee pakub usaldusväärseid ja professionaalseid torutöid
            Tallinnas ning Harjumaal. Meie teenuste hulka kuulub boilerite
            paigaldus, remont ning hooldus, tagamaks teie mugavus ja
            soojussüsteemide optimaalne toimimine.
          </p>

          <p className="mt-6 md:text-xl">
            Meie kogenud meeskond tagab kiire ja kvaliteetse teeninduse,
            kasutades kaasaegseid tööriistu ja kvaliteetseid materjale.
            Olenemata, kas vajate uut boilerit või olemasoleva süsteemi
            hooldust, oleme alati valmis aitama ja nõu andma.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
