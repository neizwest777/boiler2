import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Hooldus() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Hooldus ja Kontrollid Boilerite jaoks
          </h1>

          <p className="mt-6 md:text-xl">
            BoileriABI.ee pakub usaldusväärset boilerite hooldust ja
            regulaartseid kontrolli Tallinnas ning Harjumaa piirkonnas. Meie
            kogenud torumehed tagavad, et teie küttesüsteem töötab tõrkeideta
            ning säilitab optimaalse jõudluse ning energiatõhususe.
          </p>

          <p className="mt-6 md:text-xl">
            Regulaarne hooldus aitab ennetada ootamatuid torustiku rikkeid ning
            pikendab boilerite tööiga. Meie teenus hõlmab põhjalikke
            inspekteeringuid, puhastust ja vajadusel komponentide vahetust.
            Usaldage oma küttesüsteemid professionaalsele meeskonnale ning
            tagage oma mugavus aastaringselt.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
