'use client';

import { useState } from 'react';
import { Button } from '@/components/shared/ui/button';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
        headers: { 'Content-Type': 'application/json' },
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
      if (error instanceof Error) setError(error.message);
      else setError('Saatmine ebaõnnestus.');
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
              disabled={isSubmitting} 
              className="text-gray-500 hover:text-gray-700"
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
              <label className="text-sm font-medium block mb-1">Nimi *</label>
              <input 
                name="name" 
                required 
                disabled={isSubmitting}
                className="w-full border border-gray-300 rounded-md px-3 py-2" 
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Telefon *</label>
              <input 
                name="phone" 
                required 
                disabled={isSubmitting}
                className="w-full border border-gray-300 rounded-md px-3 py-2" 
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">E-post</label>
              <input 
                name="email" 
                type="email" 
                disabled={isSubmitting}
                className="w-full border border-gray-300 rounded-md px-3 py-2" 
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Millist teenust vajate?</label>
              <select 
                name="service" 
                required 
                disabled={isSubmitting}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
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
              <label className="text-sm font-medium block mb-1">Kirjeldage oma vajadust</label>
              <textarea 
                name="message" 
                required 
                disabled={isSubmitting}
                className="w-full border border-gray-300 rounded-md px-3 py-2" 
                rows={3} 
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full py-3">
              {isSubmitting ? 'Saadetan…' : '📩 Saada päring'}
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
