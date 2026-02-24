// @ts-nocheck
"use client";

import { PhoneCall, Mail, MessageSquare } from "lucide-react";

export default function KonsultatsioonPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO */}
      <section className="w-full pt-24 pb-12 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <MessageSquare className="w-4 h-4" /> Tasuta konsultatsioon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Tasuta<br/><span className="text-emerald-400">Konsultatsioon</span>
          </h1>
          <p className="text-lg text-slate-300">Jätke oma kontaktandmed ja me võtame Teiega ühendust pakkumisega!</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <form
          action="https://formsubmit.co/prismestonia@gmail.com"
          method="POST"
          className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="Tasuta konsultatsiooni päring" />
          <input type="hidden" name="_autoresponse" value="Täname Teid konsultatsiooni päringu eest! Võtame Teiega peagi ühendust." />

          <div>
            <label className="text-sm font-medium text-gray-700">Nimi *</label>
            <input name="name" required className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" placeholder="Teie nimi" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">E-post</label>
            <input name="email" type="email" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" placeholder="email@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Telefon *</label>
            <input name="phone" required className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" placeholder="+372 ..." />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Sõnum *</label>
            <textarea name="message" required rows={5} className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none" placeholder="Kirjeldage oma vajadust või küsimust..." />
          </div>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-sm">
            Saada päring
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">Või helistage kohe:</p>
          <a href="tel:+37253684587" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xl hover:text-emerald-700 transition-colors">
            <PhoneCall className="w-5 h-5" /> +372 5368 4587
          </a>
        </div>
      </div>
    </div>
  );
}
