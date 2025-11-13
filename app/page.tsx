// @ts-nocheck
"use client";

import { useState } from "react";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import {
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

import { LandingPrimaryImageCtaSection } from "@/components/landing/LandingPrimaryImageCtaSection";

import { Button } from "@/components/shared/ui/button";

import { Droplets, Phone, Sparkles, Wrench } from "lucide-react";
import { ContactFormDialog } from "@/components/contact/contact-form-dialog";

export default function Page() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header className="mb-4" />

      {/* HERO */}
      <LandingPrimaryImageCtaSection
        title="Boileri hooldus, paigaldus ja remont Tallinnas"
        description="Kutsuge kogenud torumees! Kiire ja usaldusväärne teenus üle Tallinna ja Harjumaa."
        imageSrc="/static/images/1762809808835-imageSrc_bcf7bf97-5006-48e0-a7ea-0f11b05fc88d.png"
        imageAlt="Boiler"
      >
        {/* 🔥 КРАСНАЯ НЕКЛИКАБЕЛЬНАЯ КНОПКА */}
        <div
          className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-xl cursor-default select-none shadow-md"
          style={{ pointerEvents: "none" }}
        >
          Helista: 53684587
        </div>

        {/* Открывает форму */}
        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Tasuta konsultatsioon
        </Button>
      </LandingPrimaryImageCtaSection>

      {/* PARTNERS */}
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

      {/* SERVICES */}
      <LandingProductFeaturesGrid
        title="Meie teenused"
        description="Pakume laia valikut boileri teenuseid"
        withBackground={false}
        variant="primary"
      >
        <LandingProductFeature
          title="Boileri paigaldus"
          description="Professionaalne paigaldus kõigile boileritele."
          imageSrc="/static/images/1762810111398-imageSrc_c0d78223-d162-4fbb-ad8a-f5e7ce63ce65.png"
        />

        <LandingProductFeature
          title="Boileri remont"
          description="Kiire ja usaldusväärne remonditeenus."
          imageSrc="/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png"
        />

        <LandingProductFeature
          title="Hooldus ja puhastus"
          description="Pikendage boileri eluiga õige hooldusega."
          imageSrc="/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png"
        />

        <LandingProductFeature
          title="Hädaabi 24/7"
          description="Ööpäevaringne kiire abi."
          imageSrc="/static/images/1762811329870-imageSrc_8f087ec4-3ec0-4ebf-acb6-25fab6a24cf1.png"
        />
      </LandingProductFeaturesGrid>

      {/* FAQ — teenused */}
      <LandingFaqCollapsibleSection
        title="Teenuste detailid"
        description="Vaadake lähemalt meie pakutavaid teenuseid"
        faqItems={[
          { question: "Boileri paigaldus", answer: "Professionaalne paigaldus." },
          {
            question: "Boileri remont",
            answer: "Kogenud meistrid lahendavad kiiresti.",
          },
          {
            question: "Hooldus",
            answer: "Regulaarne hooldus pikendab eluiga.",
          },
          { question: "Hädaabi", answer: "24/7 kiire reageerimine." },
        ]}
        withBackground
      />

      {/* ABOUT */}
      <LandingAboutSection
        title="Meist"
        description="Oleme litsentseeritud torumehed Tallinnas ja Harjumaal."
        imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80"
      />

      {/* STEPS */}
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

      {/* TESTIMONIALS */}
      <LandingTestimonialGrid
        title="Klientide arvustused"
        description="Inimeste kogemused meie teenusega"
        testimonialItems={[]}
      />

      {/* CTA — нижний блок */}
      <LandingSaleCtaSection
        title="Saage tasuta hinnapakkumine täna!"
        description="Võtame ühendust mõne minuti jooksul."
        withBackground
      >
        <Button size="xl" asChild>
          <a href="tel:+37253684587">Helista kohe</a>
        </Button>

        {/* Открывает форму */}
        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Saada päring
        </Button>
      </LandingSaleCtaSection>

      <LandingBandSection
        title="Tallinn ja Harjumaa"
        description="Kiire reageerimine kogu piirkonnas."
      />

      {/* FAQ — üldine */}
      <LandingFaqCollapsibleSection
        title="Korduma kippuvad küsimused"
        description="Kõige levinumad küsimused"
        faqItems={[]}
        withBackground
      />

      {/* Модалка формы */}
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />

      <Footer className="mt-8" />
    </>
  );
}
