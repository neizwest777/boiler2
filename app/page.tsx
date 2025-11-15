"use client";

import { useState } from 'react';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./client-wrapper";
import type { Metadata } from "next";
import LogoCarousel from "@/components/LogoCarousel";
import Link from 'next/link';
import { Button } from '@/components/shared/ui/button';

// ✅ ИСПРАВЛЕННЫЙ КОМПОНЕНТ МОДАЛЬНОГО ОКНА - использует тот же API что и рабочая форма
function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // Формируем payload как в рабочем ContactFormDialog
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: `Teenus: ${formData.get("service")}\nKirjeldus: ${formData.get("message")}`
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Midagi läks valesti.');
      }

      // Успех
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // Автозакрытие через 3 секунды после успеха
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Saatmine ebaõnnestus.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">tasuta Boileri Konsultatsioon</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              ✕
            </button>
          </div>

          {/* Статус сообщения */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✅ Täname päringu eest! Võtame Teiega peagi ühendust.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold">
                ❌ {error || "Viga saatmisel. Palun proovige uuesti või helistage meile: +372 5368 4587"}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ✅ УДАЛЕНЫ formsubmit.co скрытые поля */}
            
            <div>
              <label className="text-sm font-medium block mb-1">
                Nimi *
              </label>
              <input 
                name="name" 
                required 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="Sisestage oma nimi"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Telefon *
              </label>
              <input 
                name="phone" 
                required 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="Sisestage oma telefoninumber"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                E-post
              </label>
              <input 
                name="email" 
                type="email" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="Sisestage oma e-posti aadress"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Millist teenust vajate?
              </label>
              <select 
                name="service"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={isSubmitting}
                required
              >
                <option value="">Valige teenus</option>
                <option value="paigaldus">Boileri paigaldus</option>
                <option value="remont">Boileri remont</option>
                <option value="hooldus">Boileri hooldus</option>
                <option value="konsultatsioon">Tee päring</option>
                <option value="muu">Muu teenus</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Kirjeldage oma vajadust
              </label>
              <textarea 
                name="message" 
                rows={3} 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Kirjeldage lühidalt oma boileri probleemi või vajadust..."
                disabled={isSubmitting}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saadetan...' : '📩 Saada päring'}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Või helistage otse: {' '}
              <a href="tel:+37253684587" className="text-blue-600 font-semibold hover:underline">
                +372 5368 4587
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />

      {/* ✅ УЛУЧШЕННАЯ JSON-LD LOCALBUSINESS СХЕМА */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Boileriabi.ee",
            description: "Boileri paigaldus, remont ja hooldus Tallinnas ja Harjumaal. Kogenud torumehed, kiire reageerimine ja töögarantii.",
            telephone: "+37253684587",
            email: "info@boileriabi.ee",
            url: "https://boileriabi.ee/",
            image: "https://boileriabi.ee/api/og",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallinn",
              addressRegion: "Harjumaa",
              addressCountry: "EE",
            },
            areaServed: ["Tallinn", "Harjumaa", "Harju maakond"],
            serviceType: [
              "Boileri paigaldus",
              "Boileri remont",
              "Boileri hooldus", 
              "Hädaabi boiler",
              "Veesoojendi teenused"
            ],
            openingHours: "Mo-Su 00:00-23:59",
            priceRange: "€€",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "59.4370",
              longitude: "24.7536",
            },
            makesOffer: [
              {
                "@type": "Offer",
                name: "Boileri paigaldus",
                description: "Professionaalne boileri paigaldus Tallinnas ja Harjumaal",
                areaServed: ["Tallinn", "Harjumaa"],
              },
              {
                "@type": "Offer", 
                name: "Boileri remont",
                description: "Kiire ja kvaliteetne boileri remont",
                areaServed: ["Tallinn", "Harjumaa"],
              },
              {
                "@type": "Offer",
                name: "Boileri hooldus",
                description: "Regulaarne boileri hooldus ja kontroll",
                areaServed: ["Tallinn", "Harjumaa"],
              }
            ]
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA ДЛЯ ЧАСТЫХ ВОПРОСОВ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Kui kiiresti saate kohale tulla?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hädaabijuhul saame Tallinnas kohale olla juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel."
                }
              },
              {
                "@type": "Question", 
                "name": "Kas pakute garantiid?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jah, kõikidele meie tehtud töödele anname garantiid - paigaldustele 2 aastat, remonditöödele 1 aasta."
                }
              },
              {
                "@type": "Question",
                "name": "Kas töötate nädalavahetustel?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Jah, töötame iga päev, sealhulgas nädalavahetustel. Hädaabi on saadaval 24/7."
                }
              },
              {
                "@type": "Question",
                "name": "Millised piirkonnad teenindate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Teenindame kogu Tallinnat ja Harjumaad. tasuta sõit Tallinna piires, Harjumaal sõidutasu kokkuleppel."
                }
              }
            ]
          }),
        }}
      />

      {/* 🔥 1) STATISTIKA С УЛУЧШЕННОЙ СЕМАНТИКОЙ */}
      <section className="w-full py-20 bg-[#E4FAFF]" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4" itemProp="name">
            Boileri Paigaldus, Remont ja Hooldus Tallinnas
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            <span itemProp="description">Kogenud torumehed Tallinnas ja Harjumaal. Kiire 24/7 hädaabi, tasuta konsultatsioon ja töögarantii. Helista <span itemProp="telephone" className="font-semibold">+37253684587</span></span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div itemProp="review" itemScope itemType="https://schema.org/Review">
              <p className="text-4xl font-bold text-primary-600" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="430"/>
                430+
              </p>
              <p className="text-gray-700 text-lg font-medium mt-1" itemProp="name">Boileri remonti</p>
            </div>

            <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              <p className="text-3xl font-bold text-yellow-500 flex items-center justify-center gap-2">
                ⭐ <span className="text-gray-900" itemProp="ratingValue">4.9</span>
              </p>
              <p className="text-gray-700 text-lg font-medium mt-1">
                <span itemProp="ratingCount">127</span> klientide hinnangut
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">24/7</p>
              <p className="text-gray-700 text-lg font-medium mt-1" itemProp="openingHours">Saadavus & hädaabi</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">3000+</p>
              <p className="text-gray-700 text-lg font-medium mt-1">Rahulolevat klienti</p>
            </div>
          </div>

          {/* ✅ CTA КНОПКИ ДЛЯ ПОИСКОВИКОВ */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+37253684587" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                itemProp="telephone"
              >
                📞 Helista kohe: +372 5368 4587
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                📝 Tee päring
              </button>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              ⚡ <strong>Hädaabi:</strong> Saame kohale 1-2 tunni jooksul Tallinnas
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 2) HERO-БЛОК — картинка + текст */}
      <ClientWrapper />

      {/* 🔥 3) ПАРТНЁРЫ */}
      <section className="w-full py-16 bg-[#E4FAFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meie Usaldusvärted Partnerid</h2>
          <p className="text-gray-600 mb-2">Usaldusväärne partner</p>
          <p className="text-gray-700 mb-8">Töötame koos juhtivating tootjate ja partneritega</p>
          <LogoCarousel />
        </div>
      </section>

      {/* ✅ FAQ БЛОК ДЛЯ ПОИСКОВИКОВ */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Korduma Kippuvad Küsimused
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Leiate vastused kõige sagedamini esitatud küsimustele
          </p>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kui kiiresti saate kohale tulla?</h3>
              <p className="text-gray-700">Hädaabijuhul saame Tallinnas kohale olla juba 1-2 tunni jooksul. Tavaremondid planeerime klientiga kokkuleppel.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kas pakute garantiid?</h3>
              <p className="text-gray-700">Jah, kõikidele meie tehtud töödele anname garantiid - paigaldustele 2 aastat, remonditöödele 1 aasta.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kas töötate nädalavahetustel?</h3>
              <p className="text-gray-700">Jah, töötame iga päev, sealhulgas nädalavahetustel. Hädaabi on saadaval 24/7.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Millised piirkonnad teenindate?</h3>
              <p className="text-gray-700">Teenindame kogu Tallinnat ja Harjumaad. tasuta sõit Tallinna piires, Harjumaal sõidutasu kokkuleppel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ИСПРАВЛЕННОЕ МОДАЛЬНОЕ ОКНО */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* 🔽 FOOTER */}
      <Footer />
    </>
  );
}
