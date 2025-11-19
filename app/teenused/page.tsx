import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import {
  LandingProductFeaturesGrid,
  LandingProductFeature
} from '@/components/landing';
import Link from 'next/link';

export default function TeenusedPage() {
  const services = [
    {
      title: "Boileri paigaldus",
      description: "Professionaalne paigaldus uutele ja olemasolevatele süsteemidele.",
      imageSrc: "/static/images/1762810111398-imageSrc_c0d78223-d162-4fbb-ad8a-f5e7ce63ce65.png",
      href: "/teenused/boilerite-paigaldus",
      features: ["Tasuta hindamine", "Garantii töödele", "Kiire paigaldus"]
    },
    {
      title: "Boileri remont",
      description: "Kiire, tõhus ja usaldusväärne remonditeenus Tallinnas ja Harjumaal.",
      imageSrc: "/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png",
      href: "/teenused/boilerite-remont",
      features: ["24h remonditeenus", "Originaalosad", "Kogenud meister"]
    },
    {
      title: "Hooldus ja puhastus",
      description: "Pikendage boileri eluiga regulaarse hoolduse ja katlakivi eemaldamisega.",
      imageSrc: "/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png",
      href: "/teenused/boilerite-hooldus",
      features: ["Katlakivi eemaldus", "Anoodi vahetus", "Süsteemi kontroll"]
    },
    {
      title: "Hädaabi 24/7",
      description: "Ööpäevaringne abi lekete, rikete ja kuumavee probleemide korral.",
      imageSrc: "/static/images/1762811329870-imageSrc_8f087ec4-3ec0-4ebf-acb6-25fab6a24cf1.png",
      href: "/kontakt",
      features: ["Öisele tööle", "Lekete kõrvaldus", "Kiire reaktsioon"]
    }
  ];

  return (
    <>
      <Header className="mb-4" />

      {/* ✅ HERO С ОДНИМ H1 */}
      <div className="container-narrow py-16">
        <h1 className="text-4xl font-bold text-center mb-6">
          Boileri Teenused Tallinnas & Harjumaal
        </h1>
        <p className="text-lg text-center mb-12 text-gray-700">
          Professionaalsed boileri paigaldus-, remondi- ja hooldusteenused. Kiire reaktsioon, kvaliteetne töö ja garantiiaeg.
        </p>

        {/* GRID WITH LINKS */}
        <LandingProductFeaturesGrid withBackground={false} variant="primary">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="block group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <LandingProductFeature
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
              />
              {/* Additional features list */}
              <div className="mt-3 px-4">
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </LandingProductFeaturesGrid>

        {/* CTA BUTTON */}
        <div className="text-center mt-12">
          <Link 
            href="/hinnad" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Saada Tasuta Pakkumus
          </Link>
        </div>
      </div>

      {/* IMPROVED SEO TEXT WITH INTERNAL LINKING */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12 text-lg leading-relaxed text-gray-800">

        {/* 1. Boilerite paigaldus ja vahetus */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <Link href="/teenused/boilerite-paigaldus" className="hover:text-blue-600">
              Boilerite paigaldus ja vahetus Tallinnas
            </Link>
          </h2>
          <p className="mb-4">
            Tegeleme <strong>boilerite professionaalse paigalduse</strong>, väljavahetamise ja hooldusega. 
            Pakume <Link href="/hinnad" className="text-blue-600 hover:underline">soodsaid hindasid</Link> boileri paigaldusele.
          </p>
          <p className="mb-4">
            Kontrollime elektriühendusi, maandust, kaitselüliteid ja anoodi seisukorda. Kõikidele 
            <Link href="/teenused/boilerite-remont" className="text-blue-600 hover:underline"> remonditöödele</Link> anname garantii.
          </p>
        </div>

        {/* 2. Hooldus ja puhastus */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <Link href="/teenused/boilerite-hooldus" className="hover:text-blue-600">
              Boilerite puhastus ja hooldus
            </Link>
          </h2>
          <p className="mb-4">
            Regulaarne <strong>hooldus on vähemalt sama oluline</strong> kui korrektne paigaldus. 
            Hooldustööde hulka kuulub katlakivi eemaldamine, anoodi vahetamine ja kaitselüliti kontroll.
          </p>
          <p>
            Hoolduse eesmärk on ennetada suuremaid rikkeid ja pikendada seadme eluiga. Kui teie boiler 
            vajab <Link href="/teenused/boilerite-hooldus" className="text-blue-600 hover:underline">hooldust või puhastust</Link>, 
            võtke meiega ühendust.
          </p>
        </div>

        {/* 3. Добавляем ссылки в раздел про типы boiler */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Boilerite tüübid</h2>

          <h3 className="text-2xl font-semibold mt-4 mb-2">
            <Link href="/teenused/boilerite-paigaldus" className="hover:text-blue-600">
              Läbivooluboilerid
            </Link>
          </h3>
          <p className="mb-4">
            Kompaktsed ja ruumisäästlikud. Kuumutavad vett ainult kasutamise ajal ning on seetõttu väga
            energiasäästlikud. <Link href="/hinnad" className="text-blue-600 hover:underline">Hinnad paigaldusele</Link>.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Mahuboilerid</h3>
          <p className="mb-4">
            Hoiavad kuuma vett suuremas koguses. Sobivad suurematesse majapidamistesse, kus on pidev 
            <strong> sooja vee vajadus</strong>.
          </p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">Elektriboilerid</h3>
          <p className="mb-4">
            Lihtsad paigaldada, töökindlad ja madala hooldusvajadusega. Sobivad hästi korteritesse ja 
            väiksematesse elamutesse. Vajadusel <Link href="/kontakt" className="text-blue-600 hover:underline">küsi pakkumist</Link>.
          </p>
        </div>

      </section>

      {/* ADDITIONAL INTERNAL LINKING SECTION */}
      <div className="bg-gray-50 py-12 mt-8">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-6">Vajad Rohkem Infot?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hinnad" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-md transition-shadow">
              👑 Vaata Hinnapakkumisi
            </Link>
            <Link href="/kontakt" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-md transition-shadow">
              📞 Võta Ühendust
            </Link>
            <Link href="/meist" className="bg-white px-6 py-3 rounded-lg shadow hover:shadow-md transition-shadow">
              ℹ️ Tutvu Meie Ettevõttega
            </Link>
          </div>
        </div>
      </div>

      <Footer className="mt-8" />
    </>
  );
}
