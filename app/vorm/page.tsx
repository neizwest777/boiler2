import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/shared/ui/button';
import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({
  title: 'Boileri Päringuvorm | Tasuta Konsultatsioon & Hindamine | Boileriabi.ee',
  description: 'Vajad boileri paigaldust, remonti või hooldust Tallinnas? Täida päringuvorm ja saame 2 tunni jooksul ühendust. Tasuta konsultatsioon, täpne hindamine ja töögarantii!',
  canonical: 'https://boileriabi.ee/vorm',
});

// JSON-LD структура для формы
const formJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Boileri teenuse päringuvorm',
  'description': 'Boileri paigalduse, remondi ja hoolduse päringuvorm',
  'url': 'https://boileriabi.ee/vorm',
  'mainEntity': {
    '@type': 'Service',
    'name': 'Boileri teenused',
    'description': 'Boileri paigaldus, remont, hooldus ja hädaabi Tallinnas',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Boileriabi.ee',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Tallinn',
        'addressCountry': 'EE'
      },
      'telephone': '+37253684587',
      'areaServed': ['Tallinn', 'Harjumaa'],
      'serviceType': 'Boileri paigaldus, remont, hooldus'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Boileri teenused',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Boileri paigaldus'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Boileri remont'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Boileri hooldus'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Hädaabi'
          }
        }
      ]
    }
  }
};

export default function VormPage() {
  return (
    <>
      <Header className="mb-4" />
      
      {/* JSON-LD структура */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formJsonLd) }}
      />
      
      <div className="container-narrow py-16">
        <div className="max-w-2xl mx-auto">
          {/* Основной заголовок */}
          <h1 className="text-4xl font-bold text-center mb-4">
            Boileri Teenuse Päring - Tasuta Konsultatsioon Tallinnas
          </h1>
          
          {/* SEO-подзаголовок с ключевыми словами */}
          <p className="text-xl text-center mb-6 text-gray-700">
            Vajad boileri paigaldust, remonti või hooldust? Saada päring ja saame <strong>2 tunni jooksul</strong> ühendust pakkumisega!
          </p>

          {/* Дополнительный SEO-контент */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Miks valida Boileriabi.ee?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-bold text-lg mb-2">🚀 Kiire Reageerimine</h3>
                <p className="text-sm">Vastame 2 tunni jooksul, hädaabi 24/7</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">💯 Töögarantii</h3>
                <p className="text-sm">Kõikidele paigaldus- ja remonditöödele</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🎯 Professionaalsed Torumehed</h3>
                <p className="text-sm">Kogenud spetsialistid boileritega</p>
              </div>
            </div>
          </div>

          {/* Основная форма */}
          <form
            action="https://formsubmit.co/prismestonia@gmail.com"
            method="POST"
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Uus boileri teenuse päring - Boileriabi.ee" />
            <input type="hidden" name="_autoresponse" value="Täname Teid boileri teenuse päringu eest! Võtame Teiega peagi ühendust pakkumisega." />

            <div>
              <label className="text-sm font-medium block mb-2">Nimi *</label>
              <input 
                name="name" 
                required 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="Sisestage oma nimi"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">E-post</label>
              <input 
                name="email" 
                type="email" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="Sisestage oma e-posti aadress"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Telefon *</label>
              <input 
                name="phone" 
                required 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="Sisestage oma telefoninumber"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Teenus</label>
              <select 
                name="service"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Valige boileri teenus</option>
                <option value="paigaldus">Boileri paigaldus</option>
                <option value="remont">Boileri remont</option>
                <option value="hooldus">Boileri hooldus</option>
                <option value="hädaabi">Hädaabi (24/7)</option>
                <option value="konsultatsioon">Tasuta konsultatsioon</option>
                <option value="muu">Muu boileri teenus</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Sõnum *</label>
              <textarea 
                name="message" 
                required 
                rows={6} 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Kirjeldage oma boileri probleemi või teenusevajadust... (boileri tüüp, mudel, probleemi kirjeldus, asukoht jne.)"
              />
            </div>

            <Button type="submit" className="w-full py-3 text-lg font-semibold">
              📩 Saada Boileri Päring
            </Button>
          </form>

          {/* Дополнительный SEO-блок */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Sagedased Küsitlused</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Kui kiiresti saan vastuse?</h3>
                <p className="text-gray-700">Vastame boileri päringutele tavaliselt 2 tunni jooksul tööajal. Hädaabil oleme kättesaadavad 24/7.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Kas konsultatsioon on tasuta?</h3>
                <p className="text-gray-700">Jah, pakume tasuta konsultatsiooni ja hindamist kõikidele boileri teenustele.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Millised on teenuse hinnad?</h3>
                <p className="text-gray-700">Hinnad sõltuvad boileri tüübist ja vajalikust tööst. Pärast päringu saadetist anname täpse hinnapakkumise.</p>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ⭐ ⭐ ⭐ ⭐ ⭐ <br />
              <strong>Usaldavad kliendid Tallinnast ja Harjumaalt</strong><br />
              <span className="text-xs">Enam kui 100 rahuldat klienti boileri teenustega</span>
            </p>
          </div>
        </div>
      </div>

      <Footer className="mt-8" />
    </>
  );
}
