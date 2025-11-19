"use client";

import { useState } from "react";
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
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Boileri paigaldus' }},
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Boileri remont' }},
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Boileri hooldus' }},
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Hädaabi' }},
      ]
    }
  }
};

export default function VormPage() {

  // --- STATE ---
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- HANDLER ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      service: formData.get("service"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Server error");

      // GA SUCCESS EVENT
      if (window.sendGAEvent) {
        window.sendGAEvent("form_submit", {
          form_id: "vorm",
          status: "success",
        });
      }

      setSuccess(true);
      form.reset();

    } catch (err) {
      console.error(err);
      setError("Päringu saatmine ebaõnnestus. Proovi uuesti.");

      // GA ERROR EVENT
      if (window.sendGAEvent) {
        window.sendGAEvent("form_submit", {
          form_id: "vorm",
          status: "error",
        });
      }

    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header className="mb-4" />

      {/* JSON-LD структура */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formJsonLd) }}
      />

      <div className="container-narrow py-16">
        <div className="max-w-2xl mx-auto">

          {/* H1 */}
          <h1 className="text-4xl font-bold text-center mb-4">
            Boileri Teenuse Päring - Tasuta Konsultatsioon Tallinnas
          </h1>

          {/* Intro */}
          <p className="text-xl text-center mb-6 text-gray-700">
            Vajad boileri paigaldust, remonti või hooldust? Saada päring ja saame <strong>2 tunni jooksul</strong> ühendust pakkumisega!
          </p>

          {/* WHY BLOCK */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Miks valida Boileriabi.ee?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div><h3 className="font-bold text-lg mb-2">🚀 Kiire Reageerimine</h3><p className="text-sm">Vastame 2 tunni jooksul</p></div>
              <div><h3 className="font-bold text-lg mb-2">💯 Töögarantii</h3><p className="text-sm">Garantiiga tööd</p></div>
              <div><h3 className="font-bold text-lg mb-2">🎯 Professionaalsed Torumehed</h3><p className="text-sm">Kogenud spetsialistid</p></div>
            </div>
          </div>

          {/* SUCCESS message */}
          {success && (
            <div className="p-4 mb-6 bg-green-100 border border-green-300 text-green-800 rounded">
              Päring saadetud! Võtame teiega peagi ühendust.
            </div>
          )}

          {/* ERROR message */}
          {error && (
            <div className="p-4 mb-6 bg-red-100 border border-red-300 text-red-800 rounded">
              {error}
            </div>
          )}

          {/* --- FORM --- */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          >

            <div>
              <label className="text-sm font-medium block mb-2">Nimi *</label>
              <input name="name" required className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Sisestage oma nimi" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">E-post</label>
              <input name="email" type="email" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Sisestage e-posti aadress" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Telefon *</label>
              <input name="phone" required className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Sisestage oma telefoninumber" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Teenus</label>
              <select name="service" className="w-full border border-gray-300 rounded-md px-3 py-2">
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
              <textarea name="message" required rows={6} className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Kirjeldage oma boileri probleemi..." />
            </div>

            <Button type="submit" className="w-full py-3 text-lg font-semibold" disabled={loading}>
              {loading ? "Saadan..." : "📩 Saada Boileri Päring"}
            </Button>
          </form>

          {/* SEO Block */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Sagedased Küsitlused</h2>
            <div className="space-y-4">
              <div><h3 className="font-semibold text-lg">Kui kiiresti saan vastuse?</h3><p>Vastame tavaliselt 2h jooksul.</p></div>
              <div><h3 className="font-semibold text-lg">Kas konsultatsioon on tasuta?</h3><p>Jah.</p></div>
              <div><h3 className="font-semibold text-lg">Millised on hinnad?</h3><p>Olenevalt tööst.</p></div>
            </div>
          </div>

        </div>
      </div>

      <Footer className="mt-8" />
    </>
  );
}
