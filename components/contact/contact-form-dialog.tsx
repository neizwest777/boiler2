"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/shared/ui/dialog";

import { Button } from "@/components/shared/ui/button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactFormDialog({ open, onOpenChange }: Props) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Midagi läks valesti.");
      }

      // success
      setSent(true);

      setTimeout(() => {
        setSent(false);
        onOpenChange(false);
      }, 2000);

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Saatmine ebaõnnestus.");
      }
    }

    setLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Võta ühendust</DialogTitle>
        </DialogHeader>

        {sent ? (
          <div className="py-10 text-center text-green-600 font-semibold">
            Sõnum saadetud! 📩
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Nimi</label>
              <input
                name="name"
                required
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm">E-post (valikuline)</label>
              <input
                name="email"
                type="email"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm">Telefon</label>
              <input
                name="phone"
                required
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm">Sõnum</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Saadan..." : "Saada"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
