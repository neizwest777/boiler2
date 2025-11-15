"use client";

import { useState } from 'react';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./client-wrapper";
import type { Metadata } from "next";
import LogoCarousel from "@/components/LogoCarousel";
import Link from 'next/link';
import { Button } from '@/components/shared/ui/button';

// ✅ ИСПРАВЛЕННЫЙ КОМПОНЕНТ МОДАЛЬНОГО ОКНА
const ConsultationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setError(null);

    const formData = new FormData(e.currentTarget);
    
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

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
      
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
            <h3 className="text-xl font-bold">Tasuta Boileri Konsultatsioon</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              ✕
            </button>
          </div>

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
                <option value="konsultatsioon">Tasuta konsultatsioon</option>
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
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Boileriabi.ee",
            description: "Boileri paigaldus, remont ja hooldus Tallinnas ja Harjumaal.",
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
            areaServed: ["Tallinn", "Harjumaa"]
          }),
        }}
      />

      {/* 🔥 1) HERO + STATISTIKA */}
      <section className="w-full py-20 bg-[#E4FAFF]">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Boileri Paigaldus, Remont ja Hooldus Tallinnas
          </h1>

          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Kogenud torumehed, kiire 24/7 hädaabi ja töögarantii.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-600">430+</p>
              <p className="text-gray-700 text-lg font-medium mt-1">Boileri remonti</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-yellow-500">⭐ 4.9</p>
              <p className="text-gray-700 text-lg font-medium mt-1">127 hinnangut</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">24/7</p>
              <p className="text-gray-700 text-lg font-medium mt-1">Hädaabi</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-primary-600">3000+</p>
              <p className="text-gray-700 text-lg font-medium mt-1">Rahulolevat klienti</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+37253684587" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                📞 Helista kohe: +372 5368 4587
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                📝 Tasuta konsultatsioon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 2) HERO IMAGE */}
      <ClientWrapper />

      {/* 🔥 3) ПАРТНЁРЫ - УДАЛЕНЫ ТЕКСТЫ */}
      <section className="w-full py-16 bg-[#E4FAFF]">
        <div className="max-w-4xl mx-auto text-center">
          {/* ❌ УДАЛЕНЫ ФРАГМЕНТЫ:
          <p className="text-gray-600 mb-2">Usaldusväärne partner</p>
          <p className="text-gray-700 mb-8">Töötame koos juhtivate tootjate ja partneritega</p>
          */}
          <LogoCarousel />
        </div>
      </section>

      {/* FAQ БЛОК */}
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
              <p className="text-gray-700">Hädaabijuhul saame kohale 1-2 tunni jooksul.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kas pakute garantiid?</h3>
              <p className="text-gray-700">Jah, anname kõikidele töödele garantii.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kas töötate nädalavahetustel?</h3>
              <p className="text-gray-700">Jah, töötame iga päev. Hädaabi saadaval 24/7.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Milliseid piirkondi teenindate?</h3>
              <p className="text-gray-700">Teenindame Tallinnat ja Harjumaad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* МОДАЛЬНОЕ ОКНО */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <Footer />
    </>
  );
}
