import { MessageSquare } from "lucide-react";
import { genPageMetadata } from 'app/seo';
import Form from './Form';

export const metadata = genPageMetadata({
  title: 'Päringuvorm',
  description: 'Vajad boileri paigaldust, remonti või hooldust Tallinnas? Täida päringuvorm ja saame 2 tunni jooksul ühendust.',
  canonical: 'https://www.boileriabi.ee/vorm',
});

export default function VormPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ContactPage",
        "name": "Boileri teenuse päringuvorm", "url": "https://www.boileriabi.ee/vorm"
      }) }} />

      <section className="w-full pt-24 pb-12 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <MessageSquare className="w-4 h-4" /> Tasuta hindamine
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Boileri Teenuse<br/><span className="text-emerald-400">Päring</span>
          </h1>
          <p className="text-lg text-slate-300">Saada päring ja saame <strong className="text-white">2 tunni jooksul</strong> ühendust pakkumisega!</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <Form />
      </div>
    </div>
  );
}
