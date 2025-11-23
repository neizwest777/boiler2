import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boileri Paigaldus Tallinnas | Odavalt & Kiirelt | Boileriabi.ee",
  description: "Professionaalne boileri paigaldus Tallinna piirkonnas odava hinnaga. Kiire paigaldus, 2 aastat garantii, tasuta konsultatsioon. Helista +372 5368 4587",
  keywords: "boileri paigaldus tallinnas, boileri paigaldamine tallinnas, boileri montaaž, odav boileri paigaldus, tallinna boileriteenused, boileri hind tallinnas",
  openGraph: {
    title: "Boileri Paigaldus Tallinnas | Odavalt & Kiirelt | Boileriabi.ee",
    description: "Professionaalne boileri paigaldus kogu Tallinna piirkonnas odava hinnaga. Kiire ja kvaliteetne teenus.",
    type: "website",
    locale: "et_EE",
    url: "https://boileriabi.ee/boileri-paigaldus-tallinna-piirkonnas",
  },
}

export default function BoileriPaigaldusTallinnaPiirkonnas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-blue-600">Avaleht</Link> / <span>Boileri Paigaldus Tallinnas</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Boileri <span className="text-blue-600">Paigaldus Tallinnas</span> - Odavalt & Kiirelt
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professionaalne <strong>boileri paigaldus kogu Tallinna piirkonnas</strong> odava hinnaga. 
            Pakume kiiret paigaldust, <strong>2 aastat garantii</strong> ja tasuta esmast konsultatsiooni. 
            Oleme paigaldanud üle 500 boileri Tallinnas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="tel:+37253684587"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Helista: +372 5368 4587
            </a>
            <Link 
              href="/vorm" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border-2 border-blue-600"
            >
              📝 Tasuta hindamine
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
            <div className="text-2xl font-bold text-blue-600">150-300€</div>
            <div className="text-gray-600">Paigalduse hind</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
            <div className="text-2xl font-bold text-green-600">2-4h</div>
            <div className="text-gray-600">Paigaldusaeg</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-purple-200 shadow-sm">
            <div className="text-2xl font-bold text-purple-600">2 a</div>
            <div className="text-gray-600">Töögarantii</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-sm">
            <div className="text-2xl font-bold text-orange-600">500+</div>
            <div className="text-gray-600">Paigaldatud boilerit</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professionaalne Boileri Paigaldus Tallinnas
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Oleme spetsialiseerunud <strong>boilerite paigaldusele Tallinna piirkonnas</strong> üle 10 aasta kogemusega. 
                Meie kogenud torumehed paigaldavad teie boileri kiirelt ja professionaalselt, järgides kõiki ohutusstandardeid.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Miks Valida Meid?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Odav hind</strong> - konkurentsivõimelised hinnad ilma kvaliteedi ohverdamiseta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Kiire paigaldus</strong> - sama päeva teenus vajadusel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>2 aastat garantii</strong> - kõikidele paigaldustöödele</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><strong>Tasuta konsultatsioon</strong> - enne paigaldustööde algust</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Paigalduse Hinnakiri</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">Standard boileri paigaldus</h4>
                    <p className="text-sm text-gray-600">Täielik paigaldus koos materjalidega</p>
                  </div>
                  <div className="text-xl font-bold text-blue-600">150-300€</div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-blue-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">Kiirpaigaldus</h4>
                    <p className="text-sm text-gray-600">Sama päeva teenus</p>
                  </div>
                  <div className="text-xl font-bold text-blue-600">+50€</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Kompleksteenus</h4>
                    <p className="text-sm text-gray-600">Paigaldus + hoolduslepingu</p>
                  </div>
                  <div className="text-xl font-bold text-blue-600">Pakkumise alusel</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>NB!</strong> Lõplik hind sõltub boileri tüübist ja paigalduskeskkonnast. 
                  Pakume tasuta hindamist enne tööde algust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Teeninduspiirkond - Boileri Paigaldus Tallinnas</h2>
          
          <div className="text-center mb-8">
            <p className="text-xl opacity-90">
              Teenindame kogu <strong>Tallinna ja Harjumaa piirkonda</strong> kiire ja kvaliteetse boileri paigaldusega
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Kesklinna paigaldus</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Lasnamäe paigaldus</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Mustamäe paigaldus</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Pirita paigaldus</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Nõmme paigaldus</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Haabersti paigaldus</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Õismäe paigaldus</div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">Viimsi paigaldus</div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg opacity-90">
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
                Kui kaua aega võtab boileri paigaldus Tallinnas?
              </h3>
              <p className="text-gray-600">
                Tavaline <strong>boileri paigaldus Tallinnas</strong> võtab <strong>2-4 tundi</strong>. 
                Ajaline kestus sõltub boileri tüübist, paigalduskeskkonnast ja vajalikest ettevalmistustöödest. 
                Kiirpaigalduse korral saame töö valmis sama päeva jooksul.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Milline on boileri paigalduse hind Tallinnas?
              </h3>
              <p className="text-gray-600">
                <strong>Boileri paigalduse hind Tallinnas</strong> jääb tavaliselt <strong>150-300€</strong> vahemikku. 
                Lõplik hind sõltub boileri tüübist, paigalduskeskkonna keerukusest ja vajalikest lisamaterjalidest. 
                Pakume alati tasuta hindamist enne tööde algust.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kas pakute garantii boileri paigaldusele?
              </h3>
              <p className="text-gray-600">
                Jah, pakume <strong>2 aastat garantii</strong> kõikidele paigaldustöödele. 
                Garantii hõlmab nii paigaldustöid kui ka kasutatud materjale. 
                Oleme valmis kiiresti reageerima igasuguste probleemide korral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Valmis Boileri Paigalduseks Tallinnas?</h2>
          <p className="text-xl mb-8 opacity-90">
            Võtke ühendust juba täna ja saage tasuta hindamine meie professionaalsetelt torumeestelt
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+37253684587"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              📞 Helista: +372 5368 4587
            </a>
            
            <Link
              href="/vorm"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border-2 border-blue-500"
            >
              📩 Tasuta hindamine
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
