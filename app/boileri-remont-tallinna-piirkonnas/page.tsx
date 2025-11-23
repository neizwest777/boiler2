import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boileri Remont Tallinnas | Kiire Parandus 24/7 | Boileriabi.ee",
  description: "Professionaalne boileri remont Tallinna piirkonnas 24/7. Kiire parandus, häireteenus, garanteeritud tulemus. Helista +372 5368 4587",
  keywords: "boileri remont tallinnas, boileri parandus, boileri rike, häireteenus, tallinna boileriremondi, boileri veaotsing, katki boiler",
  openGraph: {
    title: "Boileri Remont Tallinnas | Kiire Parandus 24/7 | Boileriabi.ee",
    description: "Professionaalne boileri remont kogu Tallinna piirkonnas. Kiire ja töökindel lahendus 24/7.",
    type: "website",
    locale: "et_EE",
    url: "https://boileriabi.ee/boileri-remont-tallinna-piirkonnas",
  },
}

export default function BoileriRemontTallinnaPiirkonnas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-red-600">Avaleht</Link> / <span>Boileri Remont Tallinnas</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Boileri <span className="text-red-600">Remont Tallinnas</span> - Kiire 24/7
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>Boiler katki?</strong> Pakume kiiret ja usaldusväärset boileri remonti kogu <strong>Tallinna piirkonnas</strong>. 
            24/7 häireteenus, <strong>1 aasta remondigarantii</strong> ja kogenud torumehed. Tuleme kohale 2 tunni jooksul!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="tel:+37253684587"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚨 Häiretelefon: +372 5368 4587
            </a>
            <Link 
              href="/vorm" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border-2 border-orange-600"
            >
              🔧 Kutsuge Meister
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
            <div className="text-2xl font-bold text-red-600">24h</div>
            <div className="text-gray-600">Reageerimisaeg</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-gray-600">Parandatakse kohapeal</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-purple-200 shadow-sm">
            <div className="text-2xl font-bold text-purple-600">1 a</div>
            <div className="text-gray-600">Remondigarantii</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-sm">
            <div className="text-2xl font-bold text-orange-600">365</div>
            <div className="text-gray-600">Päeva aastas</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kiire Boileri Remont Tallinnas
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Meie kogenud torumehed parandavad <strong>kõik tüüpi boilerid Tallinnas</strong>. 
                Oleme spetsialiseerunud kiirele ja kvaliteetsele remondile, et taastada teie soojusvarustus võimalikult kiiresti.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Meie Remonditeenused</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Veelekete parandus</strong> - lekkeotsing ja kiire parandus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Termostaadi vahetus</strong> - temperatuuri reguleerimise probleemid</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Soojusvaheti puhastus</strong> - katlakivi eemaldamine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Pumpade remont</strong> - tsirkulatsioonipumpade parandus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Elektroonika remont</strong> - juhtplaatide diagnostika ja parandus</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Remondi Hinnakiri</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-red-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">Tavaremont</h4>
                    <p className="text-sm text-gray-600">Standardne remont koos diagnostikaga</p>
                  </div>
                  <div className="text-xl font-bold text-red-600">Alates 80€</div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-red-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">Häireteenus</h4>
                    <p className="text-sm text-gray-600">Kiire remont 24/7 hädaolukorras</p>
                  </div>
                  <div className="text-xl font-bold text-red-600">+30€</div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-red-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">Diagnostika</h4>
                    <p className="text-sm text-gray-600">Täpne veaotsing ja hindamine</p>
                  </div>
                  <div className="text-xl font-bold text-green-600">TASUTA</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Kompleksremont</h4>
                    <p className="text-sm text-gray-600">Põhjalik remont koos hooldusega</p>
                  </div>
                  <div className="text-xl font-bold text-red-600">Pakkumise alusel</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>NB!</strong> Diagnostika on alati tasuta! Pakume täpset hinnangut enne remonditööde algust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Levinumad Boileri Rikked</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🚰 Veelekked</h3>
              <p className="opacity-90">
                Leke boileri korpusest, torudest või liitmikest. Vajab kiiret parandust, et vältida kahjusid.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🌡️ Temperatuuri probleemid</h3>
              <p className="opacity-90">
                Vee ebapiisav kuumutamine või liiga kuum vesi. Termostaadi või kütteelemendi rike.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">💧 Survekaotus</h3>
              <p className="opacity-90">
                Nõrk voolik või survekadu süsteemis. Võib olla põhjustatud ummistustest või pumpade riketest.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🔊 Kumised müra</h3>
              <p className="opacity-90">
                Katlakivi kogunemine või pumpade probleemid. Vajab puhastust või komponentide vahetust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Teeninduspiirkond - Boileri Remont Tallinnas</h2>
          
          <p className="text-xl mb-8 text-gray-600">
            Teenindame kiire remondiga kogu <strong>Tallinna ja ümbruskonda</strong>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Kesklinna remont</div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Lasnamäe remont</div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Mustamäe remont</div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Pirita remont</div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Nõmme remont</div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Haabersti remont</div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Õismäe remont</div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">Viimsi remont</div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              <strong>Harjumaa:</strong> Saue, Rae, Saku, Kiili, Kose, Anija jt.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Korduma Kippuvad Küsimused</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kui kiiresti tulete boileri remondile Tallinnas?
              </h3>
              <p className="text-gray-600">
                <strong>Häireteenuse korral tuleme kohale 2 tunni jooksul!</strong> Tavapärane remondipäringu korral 
                reageerime samal päeval ja tuleme kohale järgmisel tööpäeval. Oleme valmis 24/7.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kas parandate boileri kohapeal või viite remonditöökotta?
              </h3>
              <p className="text-gray-600">
                <strong>95% riketest parandame kohapeal!</strong> Meil on autos kõik vajalikud varuosad ja tööriistad. 
                Ainult väga keerukatel juhtudel võib tekkida vajadus boiler töökotta viimiseks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Milline on boileri remondi hind Tallinnas?
              </h3>
              <p className="text-gray-600">
                <strong>Remondi hind algab 80€-st</strong> ja sõltub rikke tüübist ning vajalike varuosade maksumusest. 
                Diagnostika on alati tasuta ja pakume täpset hinnangut enne remonditööde algust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Boiler Katki? Ära Oota!</h2>
          <p className="text-xl mb-8 opacity-90">
            Kutsuge meister juba täna - tuleme kohale 2 tunni jooksul!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+37253684587"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              🚨 Häiretelefon: +372 5368 4587
            </a>
            
            <Link
              href="/vorm"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border-2 border-orange-500"
            >
              🔧 Kutsuge Meister
            </Link>
          </div>
          
          <p className="mt-6 text-lg opacity-80">
            <strong>24/7 häireteenus:</strong> Oleme kogu aeg teie käsutuses!
          </p>
        </div>
      </section>
    </div>
  )
}
