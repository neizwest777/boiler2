// @ts-nocheck
"use client";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import {
  LandingProductFeaturesGrid,
  LandingProductFeature
} from '@/components/landing';

export default function TeenusedPage() {
  return (
    <>
      <Header className="mb-4" />

      {/* HERO */}
      <div className="container-narrow py-16">
        <h1 className="text-4xl font-bold text-center mb-6">
          Meie teenused
        </h1>
        <p className="text-lg text-center mb-12 text-gray-700">
          Pakume laia valikut professionaalseid boileri teenuseid – alates paigaldusest ja hooldusest kuni remondi ja hädaabini.
        </p>

        {/* GRID */}
        <LandingProductFeaturesGrid withBackground={false} variant="primary">
          <LandingProductFeature
            title="Boileri paigaldus"
            description="Professionaalne paigaldus uutele ja olemasolevatele süsteemidele."
            imageSrc="/static/images/1762810111398-imageSrc_c0d78223-d162-4fbb-ad8a-f5e7ce63ce65.png"
          />

          <LandingProductFeature
            title="Boileri remont"
            description="Kiire, tõhus ja usaldusväärne remonditeenus Tallinnas ja Harjumaal."
            imageSrc="/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png"
          />

          <LandingProductFeature
            title="Hooldus ja puhastus"
            description="Pikendage boileri eluiga regulaarse hoolduse ja katlakivi eemaldamisega."
            imageSrc="/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png"
          />

          <LandingProductFeature
            title="Hädaabi 24/7"
            description="Ööpäevaringne abi lekete, rikete ja kuumavee probleemide korral."
            imageSrc="/static/images/1762811329870-imageSrc_8f087ec4-3ec0-4ebf-acb6-25fab6a24cf1.png"
          />
        </LandingProductFeaturesGrid>
      </div>

      {/* SEO TEKST – PROFESSIONAL BLOCKS */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-lg leading-relaxed text-gray-800">

        {/* 1. Boilerite paigaldus ja vahetus */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Boilerite paigaldus ja vahetus</h2>
          <p className="mb-4">
            Tegeleme boilerite professionaalse paigalduse, väljavahetamise ja hooldusega. Paigaldusprotsessi käigus
            määrame boilerile parima asukoha ja paigutuse – vertikaalne või horisontaalne – sõltuvalt ruumi mõõtudest
            ja seina kandevõimest.
          </p>
          <p className="mb-4">
            Kontrollime elektriühendusi, maandust, kaitselüliteid ja anoodi seisukorda. Ühendame boileri veetorustikuga
            ning veendume, et süsteem oleks lekkevaba ja ohutu. Kõikidele töödele anname garantii.
          </p>
        </div>

        {/* 2. Hooldus ja puhastus */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Boilerite puhastus ja hooldus</h2>
          <p className="mb-4">
            Regulaarne hooldus on vähemalt sama oluline kui korrektne paigaldus. Hooldustööde hulka kuulub katlakivi
            eemaldamine, anoodi vahetamine ja kaitselüliti kontroll. Lubjase vee tõttu tekib katlakivi kiiresti ning see
            võib boilerit tõsiselt kahjustada.
          </p>
          <p>
            Hoolduse eesmärk on ennetada suuremaid rikkeid ja pikendada seadme eluiga. Kui teie boiler vajab hooldust
            või puhastust, võtke meiega ühendust – aitame kiiresti ja professionaalselt.
          </p>
        </div>

        {/* 3. Vana boileri eemaldamine ja uue paigaldamine */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Boileri eemaldamine ja uue boileri paigaldamine</h2>
          <p className="mb-4">
            Vana boiler vahetatakse välja siis, kui see ei tööta enam korrektselt või on lihtsalt amortiseerunud.
            Lülitame välja elektri ja vee, eemaldame vana seadme ning valmistame ette ühendused uue boileri jaoks.
          </p>
          <p className="mb-4">
            Paigalduse käigus ühendame veetorud, paigaldame kaitseklapi ning lisame vajadusel lisakraani boileri
            tühjendamiseks. Elektrik kontrollib kõiki ühendusi ja tagab standarditele vastavuse. Peale paigaldust teeme
            katsed, veendume veekvaliteedis ja seadme töökorras.
          </p>
        </div>

        {/* 4. Boilerite tüübid */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Boilerite tüübid</h2>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Läbivooluboilerid</h3>
          <p className="mb-4">
            Kompaktsed ja ruumisäästlikud. Kuumutavad vett ainult kasutamise ajal ning on seetõttu väga
            energiasäästlikud.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Mahuboilerid</h3>
          <p className="mb-4">
            Hoiavad kuuma vett suuremas koguses. Sobivad suurematesse majapidamistesse, kus on pidev sooja vee vajadus.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Elektriboilerid</h3>
          <p className="mb-4">
            Lihtsad paigaldada, töökindlad ja madala hooldusvajadusega. Sobivad hästi korteritesse ja väiksematesse
            elamutesse.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Mitmesüsteemsed boilerid</h3>
          <p>
            Võimaldavad kasutada mitut energiaallikat – näiteks elektrit koos päikesepaneelidega. Väga efektiivne ja
            kulusäästlik lahendus.
          </p>
        </div>

      </section>

      <Footer className="mt-8" />
    </>
  );
}
