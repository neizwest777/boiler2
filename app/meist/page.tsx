import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Meist() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Meist
          </h1>

          <p className="mt-6 md:text-xl">
            BoileriABI.ee on usaldusväärne torumeeste meeskond Tallinnas ja
            Harjumaa piirkonnas. Meie peamine eesmärk on pakkuda kvaliteetseid
            boilerite paigaldus-, remont- ja hooldusteenuseid, mis tagavad
            soojusrispekti ning energiatõhususe teie kodus või äripindadel.
          </p>

          <p className="mt-6 md:text-xl">
            Meie kogenud spetsialistid on pühendunud õigeaegsele ja
            professionaalsele teenindusele, tagades, et teie küttesüsteem töötab
            tõrgeteta ning on alati valmis talveks. Olgu tegemist uue boileri
            paigaldamise või olemasoleva süsteemi teenindamisega, me pakume
            personaalset lähenemist ja kvaliteetseid lahendusi vastavalt teie
            vajadustele.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
