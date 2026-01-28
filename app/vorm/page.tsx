import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { genPageMetadata } from 'app/seo';
import Form from './Form';

export const metadata = genPageMetadata({
  title: 'Boileri Päringuvorm | Tasuta Konsultatsioon & Hindamine | Boileriabi.ee',
  description:
    'Vajad boileri paigaldust, remonti või hooldust Tallinnas? Täida päringuvorm ja saame 2 tunni jooksul ühendust. Tasuta konsultatsioon, täpne hindamine ja töögarantii!',
  canonical: 'https://www.boileriabi.ee/vorm',
});

const formJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Boileri teenuse päringuvorm',
  description: 'Boileri paigalduse, remondi ja hoolduse päringuvorm',
  url: 'https://www.boileriabi.ee/vorm',
};

export default function VormPage() {
  return (
    <>
      <Header className="mb-4" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formJsonLd) }}
      />

      <div className="container-narrow py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Boileri Teenuse Päring - Tasuta Konsultatsioon Tallinnas
          </h1>

          <p className="text-xl text-center mb-6 text-gray-700">
            Vajad boileri paigaldust, remonti või hooldust? Saada päring ja
            saame <strong>2 tunni jooksul</strong> ühendust pakkumisega!
          </p>

          <Form />

        </div>
      </div>

      <Footer className="mt-8" />
    </>
  );
}
