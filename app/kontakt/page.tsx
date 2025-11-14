import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Kontakt() {
  return (
    <div className="flex flex-col w-full min-h-screen fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">

          <h1 className="text-4xl md:text-6xl fancy-heading font-semibold">
            Kontakt – BoileriABI.ee
          </h1>

          <p className="mt-6 md:text-xl text-gray-800">
            Võtke meiega ühendust boileri paigalduse, remondi või hoolduse osas.
            Vastame kiiresti ja töötame kogu Tallinnas ja Harjumaal.
          </p>

          <div className="mt-10 space-y-6 text-lg text-gray-700">
            <p><strong>📞 Telefon:</strong> 53684587</p>
            <p><strong>📧 E-post:</strong> prismestonia@gmail.com</p>
            <p><strong>📍 Asukoht:</strong> Tallinn, Harjumaa – teenindus kogu piirkonnas</p>
          </div>

          <div className="mt-10 w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>

          <p className="mt-12 text-lg leading-relaxed text-gray-700">
            Pakume kiiret ja usaldusväärset teenust nii eraisikutele, ettevõtetele kui ka
            korteriühistutele. Kirjutage või helistage – leiame lahenduse igale boileri probleemile.
          </p>

        </section>
      </div>

      <Footer />
    </div>
  );
}
