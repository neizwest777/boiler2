"use client";

import { useState } from "react";
import { Button } from "@/components/shared/ui/button";

export default function FormComponent() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      {success && (
        <div className="p-4 mb-6 bg-green-100 border border-green-300 text-green-800 rounded">
          Päring saadetud! Võtame teiega peagi ühendust.
        </div>
      )}

      {error && (
        <div className="p-4 mb-6 bg-red-100 border border-red-300 text-red-800 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <div>
          <label className="text-sm font-medium block mb-2">Nimi *</label>
          <input name="name" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-2">E-post</label>
          <input name="email" type="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-2">Telefon *</label>
          <input name="phone" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
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
          <textarea name="message" required rows={6} className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>

        <Button type="submit" disabled={loading} className="w-full py-3 text-lg font-semibold">
          {loading ? "Saadan..." : "📩 Saada Boileri Päring"}
        </Button>
      </form>
    </>
  );
}
