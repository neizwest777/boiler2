import Link from 'next/link'
import Image from 'next/image'

export default function BoileriPaigaldusTallinnaPiirkonnas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Boileri <span className="text-blue-600">Paigaldus</span> Tallinnas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professionaalne boilerite paigaldus kogu Tallinna piirkonnas. 
            Kiire, püsiv ja garanteeritud lahendus teie kodusoojuseks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/vorm" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Tasuta Konsultatsioon
            </Link>
            <a 
              href="tel:+37212345678" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Helista Kohe
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Paigaldatud boilerit</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Avaeg teenindus</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">2 a</div>
            <div className="text-gray-600">Garantii</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600">Rahulolevaid kliente</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Meie Boileri Paigaldusteenused
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Standard Paigaldus</h3>
              <p className="text-gray-600 mb-4">Täielik boileri paigaldus koos kõikide vajalike komponentidega</p>
              <div className="text-2xl font-bold text-blue-600">150-300€</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Kiirpaigaldus</h3>
              <p className="text-gray-600 mb-4">Sama päeva paigaldus hädaolukorras</p>
              <div className="text-2xl font-bold text-blue-600">+50€</div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Kompleksteenus</h3>
              <p className="text-gray-600 mb-4">Paigaldus + hooldus + garantii pakett</p>
              <div className="text-2xl font-bold text-blue-600">Pakkumise alusel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Teeninduspiirkond</h2>
          <p className="text-xl mb-8 opacity-90">
            Teenindame kogu Tallinna ja Harjumaa piirkonda
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
            <div>Kesklinn</div>
            <div>Mustamäe</div>
            <div>Lasnamäe</div>
            <div>Õismäe</div>
            <div>Pirita</div>
            <div>Nõmme</div>
            <div>Haabersti</div>
            <div>Viimsi</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Valmis Soojuseks?</h2>
          <p className="text-xl mb-8 opacity-90">
            Võta ühendust ja saada tasuta hindamine juba täna
          </p>
          <Link 
            href="/vorm" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Telli Boileri Paigaldus
          </Link>
        </div>
      </section>
    </div>
  )
}
