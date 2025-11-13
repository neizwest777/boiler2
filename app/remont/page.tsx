import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Remont() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Boileri remont ja hooldus Tallinnas ja Harjumaal
          </h1>

          <p className="mt-6 md:text-xl">
            BoileriABI.ee pakub usaldusväärseid ja professionaalseid boilerite
            remondi ning hoolduse teenuseid Tallinnas ja Harjumaal. Meie kogenud
            torumehed tagavad, et teie soojussüsteem töötab tõrketeta ning
            kestab kaua.
          </p>

          <p className="mt-6 md:text-xl">
            Kas vajad kiiret remonditööd või regulaarset hooldust? Meie meeskond
            on valmis teid aitama, pakkudes kvaliteetseid lahendusi ning
            nõustamist, et teie küttesüsteem oleks alati töökorras ning
            energiatõhus.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
