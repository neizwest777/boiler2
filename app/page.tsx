// @ts-nocheck
"use client";

import { useState } from "react";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import {
  LandingPrimaryImageCtaSection,
  LandingShowcase,
  LandingShowcaseItem,
  LandingProductFeaturesGrid,
  LandingProductFeature,
  LandingFaqCollapsibleSection,
  LandingAboutSection,
  LandingProductSteps,
  LandingTestimonialGrid,
  LandingSaleCtaSection,
  LandingBandSection,
} from "@/components/landing";

import { Button } from "@/components/shared/ui/button";
import Link from "next/link";
import { Droplets, Phone, Sparkles, Wrench } from "lucide-react";
import { ContactFormDialog } from "@/components/contact/contact-form-dialog";
import type { Metadata } from "next";

/* ===========================================================
   🔥 SEO metadata
=========================================================== */
export const metadata: Metadata = {
  title: "Boileri hooldus, paigaldus ja remont Tallinnas | BoileriABI.ee",
  description:
    "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire abi, 24/7 hädaabi, professionaalne teenus ja garantiiga tööd. Helista 53684587.",
  alternates: {
    canonical: "https://www.boileriabi.ee/",
  },
  openGraph: {
    title: "Boileri hooldus ja paigaldus Tallinnas – Kiire abi | BoileriABI.ee",
    description:
      "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire tulek, garantiiga tööd, 24/7 hädaabi.",
    url: "https://www.boileriabi.ee/",
    siteName: "BoileriABI.ee",
    images: [
      {
        url: "https://www.boileriabi.ee/static/images/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Boileri hooldus Tallinnas",
      },
    ],
    locale: "et_EE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boileri hooldus ja paigaldus Tallinnas | BoileriABI.ee",
    description:
      "Kiire ja professionaalne boileri hooldus, remont ja paigaldus Tallinnas ja Harjumaal.",
    images: ["https://www.boileriabi.ee/static/images/og-main.jpg"],
  },
};

export default function Page() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header className="mb-4" />

      {/* =====================================================
          🔥 JSON-LD SCHEMA (LocalBusiness)
      ====================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "BoileriABI.ee",
            image: "https://www.boileriabi.ee/static/images/og-main.jpg",
            url: "https://www.boileriabi.ee/",
            telephone: "+37253684587",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallinn",
              addressRegion: "Harjumaa",
              addressCountry: "EE",
            },
            priceRange: "€€",
            areaServed: ["Tallinn", "Harjumaa"],
            openingHours: "Mo-Su 00:00-23:59",
            description:
              "Boileri hooldus, paigaldus ja remont Tallinnas ja Harjumaal. Kiire 24/7 hädaabi ja professionaalne teenus.",
            sameAs: ["https://wa.me/37253684587"],
          }),
        }}
      />

      {/* =====================================================
          🔥 JSON-LD SCHEMA (FAQ)
      ====================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Kui kiiresti saate kohale tulla?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tavaliselt saame kohale tulla 24 tunni jooksul. Hädaolukordades reageerime samal päeval.",
                },
              },
              {
                "@type": "Question",
                name: "Kas pakute garantiid tööle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jah, kõikidele töödele anname garantii.",
                },
              },
            ],
          }),
        }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}
      <LandingPrimaryImageCtaSection
        title="Boileri hooldus, paigaldus ja remont Tallinnas"
        description="Kutsuge kogenud torumees! Kiire ja usaldusväärne teenus üle Tallinna ja Harjumaa. Pakume professionaalset boileri paigaldust, remonti ja hooldust."
        imageSrc="/static/images/1762809808835-imageSrc_bcf7bf97-5006-48e0-a7ea-0f11b05fc88d.png"
        imageAlt="Plumber working on boiler"
        imagePosition="right"
        textPosition="left"
        withBackground={false}
        variant="primary"
        minHeight={350}
      >
        <div
          className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md cursor-default select-none"
          style={{ pointerEvents: "none" }}
        >
          Helista: 53684587
        </div>

        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Tasuta konsultatsioon
        </Button>
      </LandingPrimaryImageCtaSection>

      {/* =====================================================
          PARTNERS
      ====================================================== */}
      <LandingShowcase
        title="Usaldusväärne partner"
        description="Töötame koos juhtivate tootjate ja partneritega"
        textPosition="center"
        withBackground
        variant="primary"
      >
        <LandingShowcaseItem>
          <Wrench className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Droplets className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Sparkles className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Phone className="w-8 h-8" />
        </LandingShowcaseItem>
      </LandingShowcase>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <LandingProductFeaturesGrid
        title="Meie teenused"
        description="Pakume laia valikut boileri ja torustiku teenuseid"
        withBackground={false}
        variant="primary"
      >
        <LandingProductFeature
          title="Boileri paigaldus"
          description="Ekspertide poolt teostatud paigaldus kõikidele boileri tüüpidele."
          imageSrc="/static/images/1762810111398-imageSrc_c0d78223-d162-4fbb-ad8a-f5e7ce63ce65.png"
        />
        <LandingProductFeature
          title="Boileri remont"
          description="Kiire ja usaldusväärne remonditeenus."
          imageSrc="/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png"
        />
        <LandingProductFeature
          title="Puhastus ja hooldus"
          description="Regulaarne hooldus pikendab boileri eluiga."
          imageSrc="/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png"
        />
        <LandingProductFeature
          title="Hädaabi 24/7"
          description="Ööpäevaringne kiire abi."
          imageSrc="/static/images/1762811329870-imageSrc_8f087ec4-3ec0-4ebf-acb6-25fab6a24cf1.png"
        />
      </LandingProductFeaturesGrid>

      {/* =====================================================
          FAQ – teenuste detailid
      ====================================================== */}
      <LandingFaqCollapsibleSection
        title="Teenuste detailid"
        description="Vaadake lähemalt meie pakutavaid teenuseid"
        faqItems={[
          {
            question: "Boileri paigaldus",
            answer: "Professionaalne paigaldus kõigile boileritele.",
          },
          {
            question: "Boileri remont",
            answer: "Kogenud meistrid lahendavad kiiresti.",
          },
          {
            question: "Hooldus",
            answer: "Regulaarne hooldus pikendab eluiga.",
          },
          {
            question: "Hädaabi",
            answer: "24/7 kiire reageerimine.",
          },
        ]}
        withBackground
      />

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <LandingAboutSection
        title="Meist"
        description="Oleme litsentseeritud torumehed Tallinnas ja Harjumaal."
        imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80"
      />

      {/* =====================================================
          STEPS
      ====================================================== */}
      <LandingProductSteps
        title="Kuidas see töötab"
        description="Lihtne protsess kvaliteetse teenuse saamiseks"
        withBackground
      >
        <LandingProductFeature
          title="1. Võtke ühendust"
          description="Helistage või kirjutage kohe."
          imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&q=80"
        />

        <LandingProductFeature
          title="2. Tasuta hinnapakkumine"
          description="Anname hinnangu kiiresti."
          imageSrc="/static/images/1762813449770-imageSrc_2a0684a5-ad4d-47fd-acab-45bcf007cdad.png"
        />

        <LandingProductFeature
          title="3. Teostame töö"
          description="Kiire ja kvaliteetne teenus."
          imageSrc="/static/images/1762935301324-imageSrc_140ea933-b1b2-45eb-97d6-105c88b0f79f.png"
        />
      </LandingProductSteps>

      {/* =====================================================
          ⭐ PROFESSIONAL TESTIMONIALS
      ====================================================== */}
      <LandingTestimonialGrid
        title="Klientide arvustused"
        description="Vaadake, mida meie kliendid meie teenuse kohta ütlevad"
        withBackground={false}
        variant="primary"
        withBackgroundGlow={false}
        testimonialItems={[
          {
            url: "#",
            text: "Tuli kohale 30 minutiga. Väga professionaalne ja kiire töö!",
            imageSrc: "/static/images/review/star.png",
            name: "Jaan T.",
            handle: "★★★★★",
            featured: true,
          },
          {
            url: "#",
            text: "Parandas boileri samal õhtul. Teenus oli kiire ja kvaliteetne.",
            imageSrc: "/static/images/review/star.png",
            name: "Kertu M.",
            handle: "★★★★★",
            featured: false,
          },
          {
            url: "#",
            text: "Aus hind ja super kvaliteet. Soovitan kõigile!",
            imageSrc: "/static/images/review/star.png",
            name: "Andrus R.",
            handle: "★★★★★",
            featured: false,
          },
          {
            url: "#",
            text: "Väga meeldiv kogemus. Töö teostati kiiresti ja korralikult.",
            imageSrc: "/static/images/review/star.png",
            name: "Maarja L.",
            handle: "★★★★★",
            featured: false,
          },
          {
            url: "#",
            text: "Spetsialist selgitas kõik detailid ilusti ära. Väga professionaalne.",
            imageSrc: "/static/images/review/star.png",
            name: "Roman S.",
            handle: "★★★★★",
            featured: false,
          },
          {
            url: "#",
            text: "Soovitan soojalt! Kiire, viisakas ja kvaliteetne teenus.",
            imageSrc: "/static/images/review/star.png",
            name: "Helena P.",
            handle: "★★★★★",
            featured: false,
          },
        ]}
      />

      {/* =====================================================
          CTA
      ====================================================== */}
      <LandingSaleCtaSection
        title="Saage tasuta hinnapakkumine täna!"
        description="Võtame ühendust mõne minuti jooksul."
        withBackground
      >
        <Button size="xl" asChild>
          <a href="tel:+37253684587">Helista kohe</a>
        </Button>

        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Saada päring
        </Button>
      </LandingSaleCtaSection>

      {/* =====================================================
          BAND
      ====================================================== */}
      <LandingBandSection
        title="Tallinn ja Harjumaa"
        description="Kiire reageerimine kogu piirkonnas."
      />

      {/* =====================================================
          GLOBAALNE FAQ
      ====================================================== */}
      <LandingFaqCollapsibleSection
        title="Korduma kippuvad küsimused"
        description="Kõige levinumad küsimused"
        faqItems={[]}
        withBackground
      />

      {/* FORM MODAL */}
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />

      <Footer className="mt-8" />
    </>
  );
}
