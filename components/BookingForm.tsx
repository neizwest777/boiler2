"use client";

import { useState } from "react";

export default function BookingForm({ source = "main-form" }: { source?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const body = {
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      address: fd.get("address"),
      service: fd.get("service"),
      message: fd.get("message"),
      source,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Server error");

      // Google Ads conversion
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17959368156/we1OCNqynPwbENzr2PNC",
          value: 10.0,
          currency: "EUR",
        });
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Päringu saatmine ebaõnnestus. Proovi uuesti.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <p className="text-white text-lg font-semibold">
          ✅ <strong>Aitäh!</strong> Teie päring on saadetud. Helistame tagasi 5 minuti jooksul!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {error && (
        <div className="mb-3 p-3 bg-red-100 border border-red-300 text-red-800 rounded text-sm">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        <input
          name="name"
          required
          placeholder="Teie nimi *"
          className="w-full rounded-lg px-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Telefon *"
          className="w-full rounded-lg px-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
        />
        <input
          name="address"
          placeholder="Aadress"
          className="w-full rounded-lg px-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
        />
        <select
          name="service"
          className="w-full rounded-lg px-4 py-3 text-gray-500 border-0 focus:ring-2 focus:ring-blue-400 outline-none text-sm bg-white"
        >
          <option value="">Valige teenus</option>
          <option value="paigaldus">Boileri paigaldus</option>
          <option value="remont">Boileri remont</option>
          <option value="hooldus">Boileri hooldus</option>
          <option value="hädaabi">Hädaabi 24/7</option>
          <option value="konsultatsioon">Tasuta konsultatsioon</option>
        </select>
      </div>
      <div className="flex gap-3">
        <textarea
          name="message"
          required
          rows={2}
          placeholder="Kirjeldage probleemi lühidalt... *"
          className="flex-1 rounded-lg px-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-blue-400 outline-none text-sm resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-bold px-8 py-3 rounded-lg text-sm transition-all shadow-lg whitespace-nowrap"
        >
          {loading ? "⏳ Saadan..." : "📩 Saada Päring"}
        </button>
      </div>
      <p className="text-white/70 text-xs mt-2">
        * Kohustuslikud väljad. Helistame tagasi 5 minuti jooksul.
      </p>
    </form>
  );
}
