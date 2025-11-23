import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boileri Hooldus Tallinnas | Ennetav Hooldus | Boileriabi.ee",
  description: "Professionaalne boileri hooldus Tallinna piirkonnas. Ennetav hooldus, pikaajaline garantii, energia kokkuhoid. Tasuta hindamine!",
  keywords: "boileri hooldus tallinnas, boileri serviseerimine, ennetav hooldus, boileri puhastamine, tallinna boileriteenindus",
  openGraph: {
    title: "Boileri Hooldus Tallinnas | Boileriabi.ee",
    description: "Professionaalne boileri hooldus kogu Tallinna piirkonnas. Ennetage rikkeid ja säästke raha!",
    type: "website",
    locale: "et_EE",
    url: "https://boileriabi.ee/boileri-hooldus-tallinna-piirkonnas",
  },
}

export default function BoileriHooldusTallinnaPiirkonnas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Boileri <span className="text-green-600">Hooldus</span> Tallinnas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professionaalne boileri hooldus, mis säästab teie aega ja raha. 
            Ennetav hooldus väldib kulukaid remonte ja pikendab boileri eluiga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/vorm" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
            Broneeri Hooldus
            </Link>
            <a 
              href="tel:+37212345678" 
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Küsige Hinda
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600">-30%</div>
            <div className="text-gray-600">Energiakulu</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">+5a</div>
            <div className="text-gray-600">Pikem eluiga</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">-80%</div>
            <div className="text-gray-600">Vähem remonte</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-gray-600">Rahu meel</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Meie Hooldusteenused
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Põhihooldus</h3>
              <p className="text-gray-600 mb-4">Põhjalik puhastus ja seadistamine</p>
              <div className="text-2xl font-bold text-green-600">60-120€</div>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Täishooldus</h3>
              <p className="text-gray-600 mb-4">Täielik hooldus koos komponentide kontrolliga</p>
              <div className="text-2xl font-bold text-green-600">100-180€</div>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Hooldusleping</h3>
              <p className="text-gray-600 mb-4">Korrapärane hooldus fikseeritud hinnaga</p>
              <div className="text-2xl font-bold text-green-600">Alates 150€/a</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Hoolduse Eelised</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Kulude Kokkuhoid</h3>
              <p className="opacity-90">Ennetav hooldus väldib kulukaid remonte ja säästab energiat</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Pikem Eluiga</h3>
              <p className="opacity-90">Korralik hooldus pikendab boileri eluiga 5-7 aastat</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Ohutus</h3>
              <p className="opacity-90">Regulaarne hooldus tagab ohutuse ja töökindluse</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Garantii</h3>
              <p className="opacity-90">Hooldusleping laiendab garantiiaega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Teeninduspiirkond</h2>
          <p className="text-xl mb-8 text-gray-600">
            Pakume hooldusteenust kogu Tallinna piirkonnas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg text-gray-700">
            <div>Kesklinna hooldus</div>
            <div>Lasnamäe hooldus</div>
            <div>Mustamäe hooldus</div>
            <div>Pirita hooldus</div>
            <div>Nõmme hooldus</div>
            <div>Haabersti hooldus</div>
            <div>Õismäe hooldus</div>
            <div>Viimsi hooldus</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ära Oota Rikkeid!</h2>
          <p className="text-xl mb-8 opacity-90">
            Broneeri ennetav hooldus ja säästa raha
          </p>
          <Link 
            href="/vorm" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Broneeri Hooldus
          </Link>
        </div>
      </section>
    </div>
  )
}
