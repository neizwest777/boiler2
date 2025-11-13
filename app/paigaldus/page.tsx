import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Paigaldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Boileri paigaldus ja hooldus
          </h1>

          <p className="mt-6 md:text-xl">
            Kui vajate usaldusväärset ja professionaalset boilerite paigaldust
            Tallinnas ning Harjumaal, olete õiges kohas. BoileriABI.ee pakub
            kvaliteetset boilerite paigaldust, remonti ning hooldust, et tagada
            teie kodu ja äri jaoks tõrgeteta veevarustus.
          </p>

          <p className="mt-6 md:text-xl">
            Meie kogenud meeskond tagab kiiresti ja ohutult boilerite
            paigaldamise vastavalt Teie vajadustele. Lisaks pakume regulaarset
            hooldust ja remonti, et teie soojusvarustus toimiks alati ideaalselt
            ning energiatõhusalt.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
