import Link from 'next/link';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({
  title: 'Kasutustingimused | Boileriabi.ee - Boileri paigaldus, remont ja hooldus',
  description: 'Boileriabi.ee kasutustingimused. Tutvuge meie teenusetingimustega boileri paigalduse, remondi ja hoolduse osutamisel Tallinnas ja Harjumaal.',
  canonical: 'https://boileriabi.ee/terms',
});

const policyConfig = {
  lastUpdated: '1. märts 2024',
  companyName: 'Boileriabi.ee',
  domain: 'boileriabi.ee',
  email: 'info@boileriabi.ee',
  phone: '+37253684587',
  address: 'Tallinn, Harjumaa',
};

// JSON-LD для Terms of Service
const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Kasutustingimused - Boileriabi.ee',
  'description': 'Boileriabi.ee kasutustingimused ja teenuse osutamise tingimused',
  'url': 'https://boileriabi.ee/terms',
  'lastReviewed': policyConfig.lastUpdated,
  'mainEntity': {
    '@type': 'TermsOfService',
    'name': 'Kasutustingimused',
    'description': 'Boileriabi.ee boileri teenuste osutamise tingimused'
  }
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <Header />

      {/* JSON-LD структура */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
      />

      <div className="w-full flex flex-col items-center my-16 md:my-24">
        <div className="mx-auto max-w-4xl px-6 xl:px-8">
          {/* Заголовок с SEO-оптимизацией */}
          <div className="mx-auto max-w-3xl sm:text-center mb-12">
            <h1 className="text-4xl font-bold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-5xl fancy-heading">
              Kasutustingimused
            </h1>
            <p className="text-lg mt-4 text-gray-600">
              Viimati uuendatud: {policyConfig.lastUpdated}
            </p>
            
            {/* SEO-блок с ключевыми словами */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Boileriabi.ee</strong> - professionaalsed boileri teenused Tallinnas. 
                Meie kasutustingimused reguleerivad boileri paigalduse, remondi ja hoolduse osutamist.
              </p>
            </div>
          </div>

          {/* Основное содержание */}
          <div className="space-y-8">
            {/* Üldtingimused */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Üldtingimused</h2>
              <p className="mb-4">
                Käesolev veebisait kuulub ettevõttele <strong>{policyConfig.companyName}</strong>. 
                Kogu saidil kasutatakse termineid "meie", "me" ja "meie" viitamaks ettevõttele{' '}
                <strong>{policyConfig.companyName}</strong>.
              </p>
              <p className="mb-4">
                <strong>{policyConfig.companyName}</strong> pakub seda veebisaiti koos kõigi siin leiduvate teabe, tööriistade ja teenustega teile, kasutajale, tingimusel, et nõustute kõigi siin esitatud tingimuste, poliitikate ja teadetega.
              </p>
              <p className="mb-4">
                Meie saidil külastades ja/või meilt midagi ostes teete kasutajaena kaasa meie "Teenuses" ja nõustute järgmiste kasutustingimustega ("Kasutustingimused"), sealhulgas nende lisatingimuste ja poliitikatega, mida siin viidatakse või mis on hüperlingi kaudu kättesaadavad.
              </p>
              <p className="mb-4">
                Palun lugeda neid Kasutustingimusi hoolikalt enne meie veebisaidi kasutamist. Saidi kasutamisega nõustute nende Kasutustingimustega.
              </p>
            </section>

            {/* Veebisaidi kasutamine */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Veebisaidi Kasutamine</h2>
              <p className="mb-4">
                Nõustudes nende Kasutustingimustega, kinnitate, et olete vähemalt enamuses oma elukohariigis või et olete enamuses oma elukohariigis ja olete andnud meile nõusoleku lubada igal teie alaealisel sõltlasel seda saiti kasutada.
              </p>
              <p className="mb-4">
                Te ei tohi kasutada meie tooteid ebaseaduslikel või volitamata eesmärkidel ega tohi teenuse kasutamisel rikkuda ühtki seadust oma jurisdiktsioonis (sealhulgas, kuid mitte ainult, autoriõiguse seadusi).
              </p>
              <p className="mb-4">
                Te ei tohi edastada ühtki usse ega viiruseid ega ühtki destruktiivse loomuga koodi.
              </p>
              <p className="mb-4">
                Mis tahes tingimuste rikkumine toob kaasa teie teenuste kohese lõpetamise.
              </p>
            </section>

            {/* Üldised tingimused */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Üldised Tingimused</h2>
              <p className="mb-4">
                Meil on õigus keelduda teenuse osutamisest kellelegi ükskõik mis põhjusel ükskõik millal.
              </p>
              <p className="mb-4">
                Te mõistate, et teie sisu (v.a krediitkaardi andmed) võib edastada krüpteerimata ja see võib hõlmata (a) edastamist erinevatel võrkudel; ja (b) muudatusi, et vastata ühenduvate võrkude või seadmete tehnilistele nõuetele. Krediitkaardi andmed on alati krüpteeritud võrkude kaudu edastamise ajal.
              </p>
              <p className="mb-4">
                Te nõustute mitte reprodutseerima, dubleerima, kopeerima, müüma, edasi müüma ega ära kasutama ühtki teenuse osa, teenuse kasutamist või juurdepääsu teenusele või ükskõik millisele kontakile veebisaidil, mille kaudu teenust pakutakse, ilma meie väljendatud kirjaliku loata.
              </p>
            </section>

            {/* Teenused ja hinnad */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Boileri Teenused ja Hinnad</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">📦 Meie Boileri Teenused:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Boileri paigaldus Tallinnas ja Harjumaal</li>
                  <li>Boileri remont ja hädaabi</li>
                  <li>Boileri hooldus ja profülaktika</li>
                  <li>24/7 hädaabi teenused</li>
                  <li>Tasuta konsultatsioon ja hindamine</li>
                </ul>
              </div>

              <p className="mb-4">
                Meie boileri teenuste hinnad võivad muutuda ilma eelneva teatiseta.
              </p>
              <p className="mb-4">
                Meil on õigus igal ajal muuta või lõpetada teenust (või mõnda selle osa või sisu) ilma eelneva teatiseta.
              </p>
              <p className="mb-4">
                Me ei vastuta teie ega ühegi kolmanda osapoole eal teenuse muutmise, hinna muutmise, peatamise või lõpetamise eest.
              </p>
            </section>

            {/* Garantiid ja vastutus */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Garantiid ja Vastutus</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">🔧 Meie Garantiid:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Töögarantii:</strong> Kõikidele paigaldus- ja remonditöödele</li>
                  <li><strong>Kiire reageerimine:</strong> Vastame 2 tunni jooksul</li>
                  <li><strong>Professionaalsus:</strong> Kogenud torumehed ja spetsialistid</li>
                  <li><strong>Aus hindamine:</strong> Tasuta konsultatsioon ja hindamine</li>
                </ul>
              </div>

              <p className="mb-4">
                Me ei garanteeri, et teie kasutamine meie teenusest on katkematu, õigeaegne, turvaline või veatu.
              </p>
              <p className="mb-4">
                Te nõustute väljendlikult, et teie kasutamine või võimetus kasutada teenust on teie enda riskil. Teenus ja kõik tooted ning teenused, mis teile teenuse kaudu antakse, on (välja arvatud juhul, kui me seda väljendlikult väidame) esitatud "nagu on" ja "nagu saadaval" teie kasutamiseks.
              </p>
            </section>

            {/* Isikuandmed */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Isikuandmed</h2>
              <p className="mb-4">
                Teie isikuandmete esitamine selle veebisaidi kaudu on reguleeritud meie privaatsuspoliitikaga. Meie privaatsuspoliitikat saate vaadata siin:{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">
                  Privaatsuspoliitika
                </Link>
                .
              </p>
            </section>

            {/* Keelatud kasutusviisid */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Keelatud Kasutusviisid</h2>
              <p className="mb-4">
                Lisaks Kasutustingimustes sätestatud muudele keeldudele on teil keelatud kasutada saiti või selle sisu:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Ükskõik millisel ebaseaduslikul eesmärgil</li>
                <li>Teiste veenmiseks ebaseaduslike tegude sooritamiseks või nendes osalemiseks</li>
                <li>Meie või teiste intellektuaalomandi õiguste rikkumiseks</li>
                <li>Viiruste või muu pahatahtliku koodi edastamiseks</li>
                <li>Spämmimiseks, andmete kogumiseks või jälgimiseks</li>
                <li>Turvafunktsioonide ümberkerimiseks või segamiseks</li>
              </ul>
            </section>

            {/* Muudatused tingimustes */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Muudatused Kasutustingimustes</h2>
              <p className="mb-4">
                Kasutustingimuste kõige värskemat versiooni saate vaadata igal ajal sellel lehel.
              </p>
              <p className="mb-4">
                Meil on õigus meie ainuvalikus uuendada, muuta või asendada mõnda osa neist Kasutustingimustest, postitades uuendused ja muudatused meie veebisaidile. Teie kohustuseks on perioodiliselt kontrollida meie veebisaiti muudatuste osas.
              </p>
              <p className="mb-4">
                Teie jätkuv kasutamine või juurdepääs meie veebisaidile või Teenusele pärast nende Kasutustingimuste muudatuste postitamist tähendab nende muudatuste aktsepteerimist.
              </p>
            </section>

            {/* Kontaktandmed */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Kontaktandmed</h2>
              
              <p className="mb-4">
                Küsimuste korral Kasutustingimuste kohta võtke meiega ühendust:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">📧 E-post:</h4>
                    <a href={`mailto:${policyConfig.email}`} className="text-blue-600 hover:underline">
                      {policyConfig.email}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">📞 Telefon:</h4>
                    <a href={`tel:${policyConfig.phone}`} className="text-blue-600 hover:underline">
                      {policyConfig.phone}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🌐 Veebisait:</h4>
                    <a href={`https://${policyConfig.domain}`} className="text-blue-600 hover:underline">
                      {policyConfig.domain}
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">📍 Teeninduspiirkond:</h4>
                    <p className="text-gray-700">{policyConfig.address}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SEO-блок для поисковиков */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mt-8 text-center">
              <h3 className="text-xl font-bold mb-3">Boileriabi.ee - Usaldusväärsed Boileri Teenused Tallinnas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">⚡ Kiire Reageerimine</h4>
                  <p className="text-sm">Vastame 2 tunni jooksul, hädaabi 24/7</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">🛠️ Töögarantii</h4>
                  <p className="text-sm">Kõikidele paigaldus- ja remonditöödele</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">👨‍🔧 Professionaalsed Meistrid</h4>
                  <p className="text-sm">Kogenud spetsialistid boileritega</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Pakume boileri paigaldust, remonti ja hooldust Tallinnas ja Harjumaal. 
                Professionaalsed torumehed, kvaliteetsed materjalid ja töögarantii.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
