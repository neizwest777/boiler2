import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({
  title: 'Privaatsuspoliitika',
  description: 'Boileriabi.ee privaatsuspoliitika. Tutvuge, kuidas kogume ja kasutame Teie isikuandmeid boileri teenuste pakkumisel Tallinnas ja Harjumaal.',
  canonical: 'https://www.boileriabi.ee/privacy',
});

const policyConfig = {
  lastUpdated: '1. märts 2024',
  companyName: 'Boileriabi.ee',
  domain: 'boileriabi.ee',
  email: 'info@boileriabi.ee',
  phone: '+37253684587',
};

// JSON-LD для Privacy Policy
const privacyPolicyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Privaatsuspoliitika - Boileriabi.ee',
  'description': 'Boileriabi.ee privaatsuspoliitika ja isikuandmete käsitlemine',
  'url': 'https://boileriabi.ee/privacy',
  'lastReviewed': policyConfig.lastUpdated,
  'mainEntity': {
    '@type': 'PrivacyPolicy',
    'name': 'Privaatsuspoliitika',
    'description': 'Boileriabi.ee isikuandmete kaitse ja privaatsuse põhimõtted'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicyJsonLd) }}
      />

      <section className="w-full pt-24 pb-12 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privaatsuspoliitika</h1>
          <p className="text-slate-300">Viimati uuendatud: {policyConfig.lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-emerald-600">
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Boileriabi.ee</strong> - boileri paigaldus, remont ja hooldus Tallinnas. 
                Meie privaatsuspoliitika kirjeldab, kuidas kogume ja käsitleme Teie isikuandmeid.
              </p>
            </div>
          </div>

          {/* Основное содержание */}
          <div className="space-y-8">
            {/* Введение */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Sissejuhatus</h2>
              <p className="mb-4">
                Käesolev privaatsuspoliitika kirjeldab, kuidas <strong>{policyConfig.companyName}</strong> (edaspidi "Meie", "Me", "Meie") kogub, kasutab ja avaldab Teie isikuandmeid, kui Te külastate meie veebisaiti <strong>{policyConfig.domain}</strong>, kasutate meie teenuseid või tehinguid teostate.
              </p>
              <p className="mb-4">
                Palun lugeda privaatsuspoliitikat hoolikalt. Meie teenuseid kasutades nõustute meie privaatsuspoliitikaga.
              </p>
            </section>

            {/* Andmete kogumine */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Kogutavate Andmete Liigid</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Otse Teilt Kogutavad Andmed</h3>
              <p className="mb-4">Teie poolt meile otse esitatud andmed võivad sisaldada:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Kontaktandmed (nimi, aadress, telefon, e-posti aadress)</li>
                <li>Teenuse taotluse andmed (kirjeldus, asukoht, boileri tüüp)</li>
                <li>Makseandmed (makseviis, arveaadress)</li>
                <li>Suhtluse ajal esitatud andmed</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Küpsiste Kaudu Kogutavad Andmed</h3>
              <p className="mb-4">
                Me kasutame küpsiseid (cookies) saidi toimimiseks ja kasutajakogemuse parandamiseks. Kogume teavet seadme, brauseri ja ühenduse kohta.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Kolmandatelt Isikutelt Kogutavad Andmed</h3>
              <p className="mb-4">
                Võime saada andmeid kolmandatelt osapooltelt, sealhulgas teenusepakkujatelt, kes koguvad andmeid meie eest (nt maksetöötlejad).
              </p>
            </section>

            {/* Andmete kasutamine */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Kuidas Me Teie Andmeid Kasutame</h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">📦 Teenuste Pakkumine</h4>
                  <p>Teie isikuandmeid kasutame boileri teenuste (paigaldus, remont, hooldus) osutamiseks Tallinnas ja Harjumaal.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">🎯 Klienditeenindus</h4>
                  <p>Teie andmeid kasutame suhtluseks ja klienditoe osutamiseks boileri teenuste osas.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">🔒 Turvalisus</h4>
                  <p>Andmeid kasutame pettuste tuvastamiseks ja vältimiseks.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">📊 Analüütika</h4>
                  <p>Saidi kasutamise analüüsimiseks ja teenuste täiustamiseks.</p>
                </div>
              </div>
            </section>

            {/* Andmete jagamine */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Andmete Jagamine Kolmandatele Osapooltele</h2>
              
              <p className="mb-4">Meie usaldusväärsetele partneritele võime jagada andmeid järgmistel eesmärkidel:</p>
              
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Maksetöötlemine (panga- ja krediitkaartandmed)</li>
                <li>Tehnilise toe osutamine (veebisaidi haldus)</li>
                <li>Kohaletoimetamine (vajadusel)</li>
                <li>Kohustuslike nõuete täitmine (seadusandlus)</li>
              </ul>
              
              <p className="text-sm text-gray-600 mt-4">
                Me ei müü ega üüra Teie isikuandmeid kolmandatele osapooltele turunduseesmärkidel.
              </p>
            </section>

            {/* Küpsised */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Küpsised (Cookies)</h2>
              
              <p className="mb-4">
                Meie veebisait kasutab küpsiseid saidi toimimiseks, kasutajakogemuse parandamiseks ja analüütika jaoks. Küpsised on väikesed tekstifailid, mis salvestuvad Teie seadmele.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-2">Küpsiste tüübid, mida kasutame:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Vajalikud küpsised:</strong> saidi põhifunktsioonide jaoks</li>
                  <li><strong>Toimivusküpsised:</strong> kasutajaeelistuste meelespidamiseks</li>
                  <li><strong>Analüütikaküpsised:</strong> saidi kasutamise mõistmiseks</li>
                </ul>
              </div>
              
              <p className="mt-4 text-sm">
                Küpsiseid saate blokeerida oma brauseri seadetest, kuid see võib mõjutada saidi toimimist.
              </p>
            </section>

            {/* Lapseandmed */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Laste Andmed</h2>
              <p className="mb-4">
                Meie teenused on suunatud täiskasvanutele. Me ei kogu teadlikult alla 18-aastaste isikuandmeid. Kui Teie laps on andmeid meile esitanud, võtke palun ühendust andmete eemaldamiseks.
              </p>
            </section>

            {/* Turvalisus */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Andmete Turvalisus</h2>
              
              <p className="mb-4">
                Rakendame tehnilisi ja korralduslikke meetmeid Teie isikuandmete kaitsmiseks. Siiski ei saa tagada absoluutset turvalisust veebis.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-2">Meie turvameetmed:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Andmete krüpteerimine (SSL sertifikaat)</li>
                  <li>Regulaarsed turvaauditid</li>
                  <li>Ligipääsu piiramine vajalikele isikutele</li>
                  <li>Turvaprogrammide kasutamine</li>
                </ul>
              </div>
            </section>

            {/* Teie õigused */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Teie Õigused Isikuandmete Osas</h2>
              
              <p className="mb-4">Teil on õigus:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">👁️ Juurdepääsu õigus</h4>
                  <p className="text-sm">Saada teada, milliseid andmeid meil Teie kohta on</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✏️ Parandamise õigus</h4>
                  <p className="text-sm">Taotleda ebatäpsete andmete parandamist</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🗑️ Kustutamise õigus</h4>
                  <p className="text-sm">Taotleda oma andmete kustutamist</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">⏸️ Töötlemise piiramise õigus</h4>
                  <p className="text-sm">Piirata oma andmete kasutamist</p>
                </div>
              </div>
              
              <p className="mt-4 text-sm">
                Õiguste kasutamiseks võtke ühendust meiega allpool toodud viisil.
              </p>
            </section>

            {/* Muudatused poliitikale */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Privaatsuspoliitika Muudatused</h2>
              <p className="mb-4">
                Meil on õigus privaatsuspoliitikat ajakohastada. Muudatustest teavitame veebisaidil uuendatud "Viimati uuendatud" kuupäevaga.
              </p>
            </section>

            {/* Kontakt */}
            <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Kontakt</h2>
              
              <p className="mb-4">
                Küsimuste või taotlustega seoses Teie isikuandmetega võtke meiega ühendust:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="mb-2">
                  <strong>E-post:</strong>{' '}
                  <a href={`mailto:${policyConfig.email}`} className="text-blue-600 hover:underline">
                    {policyConfig.email}
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Telefon:</strong>{' '}
                  <a href={`tel:${policyConfig.phone}`} className="text-blue-600 hover:underline">
                    {policyConfig.phone}
                  </a>
                </p>
                <p>
                  <strong>Veebisait:</strong>{' '}
                  <a href={`https://${policyConfig.domain}`} className="text-blue-600 hover:underline">
                    {policyConfig.domain}
                  </a>
                </p>
              </div>
              
              <p className="mt-4 text-sm text-gray-600">
                Vastame Teie päringutele 30 päeva jooksul.
              </p>
            </section>

            {/* SEO-блок для поисковиков */}
            <div className="bg-emerald-50 rounded-2xl p-6 mt-8 text-center border border-emerald-100">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Boileriabi.ee - Usaldusväärsed Boileri Teenused</h3>
              <p className="text-gray-600">
                Pakume boileri paigaldust, remonti ja hooldust Tallinnas ja Harjumaal. 
                24/7 hädaabi, töögarantii ja professionaalsed torumehed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
