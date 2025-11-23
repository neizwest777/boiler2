import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boileri Remont Tallinnas | Kiire Parandus | Boileriabi.ee",
  description: "Professionaalne boileri remont Tallinna piirkonnas. Kiire parandus, 24/7 häireteenus, garanteeritud tulemus. Tasuta diagnostika!",
  keywords: "boileri remont tallinnas, boileri parandus, boileri rike, häireteenus, tallinna boileriremondi, boileri veaotsing",
  openGraph: {
    title: "Boileri Remont Tallinnas | Boileriabi.ee",
    description: "Professionaalne boileri remont kogu Tallinna piirkonnas. Kiire ja töökindel lahendus.",
    type: "website",
    locale: "et_EE",
    url: "https://boileriabi.ee/boileri-remont-tallinna-piirkonnas",
  },
}

export default function BoileriRemontTallinnaPiirkonnas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Boileri <span className="text-red-600">Remont</span> Tallinnas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Kiire ja usaldusväärne boileri remont kogu Tallinna piirkonnas. 
            Parandame igat tüüpi boilerid ja taastame teie soojuse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/vorm" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Kutsuge Meister
            </Link>
            <a 
              href="tel:+37212345678" 
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Häiretelefon
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div>
            <div className="text-3xl font-bold text-red-600">24h</div>
            <div className="text-gray-600">Reageerimisaeg</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">365</div>
            <div className="text-gray-600">Päeva aastas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">1 a</div>
            <div className="text-gray-600">Remondigarantii</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">95%</div>
            <div className="text-gray-600">Rikkeid parandatakse kohapeal</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Meie Remonditeenused
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Tavaremont</h3>
              <p className="text-gray-600 mb-4">Standardne boileri remont koos diagnostikaga</p>
              <div className="text-2xl font-bold text-red-600">Alates 80€</div>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Häireteenus</h3>
              <p className="text-gray-600 mb-4">Kiire remont hädaolukorras 24/7</p>
              <div className="text-2xl font-bold text-red-600">+30€</div>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Diagnostika</h3>
              <p className="text-gray-600 mb-4">Tasuta veaotsing ja hindamine</p>
              <div className="text-2xl font-bold text-green-600">TASUTA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Levinumad Rikked</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Veebojad</h3>
              <p className="opacity-90">Leke, survekaotus, kuumenemise probleemid</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Elektroonika</h3>
              <p className="opacity-90">Termostaadi rike, juhtplaadi probleemid</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Soojusvaheti</h3>
              <p className="opacity-90">Umbstus, katlakivi, ebaefektiivne kütmine</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Pumbad</h3>
              <p className="opacity-90">Tsirkulatsioonipumba rike, müra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Teeninduspiirkond</h2>
          <p className="text-xl mb-8 text-gray-600">
            Teenindame kiire remondiga kogu Tallinna ja ümbruskonda
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg text-gray-700">
            <div>Kesklinna remont</div>
            <div>Lasnamäe remont</div>
            <div>Mustamäe remont</div>
            <div>Pirita remont</div>
            <div>Nõmme remont</div>
            <div>Haabersti remont</div>
            <div>Õismäe remont</div>
            <div>Viimsi remont</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Boiler Katki?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ära oota külmaga! Kutsuge meister juba täna
          </p>
          <Link 
            href="/vorm" 
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Kutsuge Remondimeister
          </Link>
        </div>
      </section>
    </div>
  )
}
