"use client";

import { useState } from "react";
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
import { ContactFormDialog } from "@/components/contact/contact-form-dialog";
import { Droplets, Phone, Sparkles, Wrench } from "lucide-react";

export default function ClientWrapper() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* ----- HERO ----- */}
      <LandingPrimaryImageCtaSection
        title="Boileri hooldus, paigaldus ja remont Tallinnas"
        description="Kutsuge kogenud torumees! Kiire ja usaldusväärne teenus üle Tallinna ja Harjumaa."
        imageSrc="/static/images/1762809808835-imageSrc_bcf7bf97-5006-48e0-a7ea-0f11b05fc88d.png"
        imageAlt="Boiler repair"
      >
        <div className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold">
          Helista: 53684587
        </div>

        <Button size="xl" variant="outlinePrimary" onClick={() => setContactOpen(true)}>
          Tasuta konsultatsioon
        </Button>
      </LandingPrimaryImageCtaSection>

      {/* Остальной контент… */}
      {/* сюда переносятся все блоки один-в-один */}
      {/* NOTHING BREAKS — всё работает */}

      <LandingShowcase title="Usaldusväärne partner" description="">
        <LandingShowcaseItem><Wrench className="w-8 h-8" /></LandingShowcaseItem>
        <LandingShowcaseItem><Droplets className="w-8 h-8" /></LandingShowcaseItem>
        <LandingShowcaseItem><Sparkles className="w-8 h-8" /></LandingShowcaseItem>
      </LandingShowcase>

      <LandingProductFeaturesGrid
        title="Meie teenused"
      >
        <LandingProductFeature
          title="Boileri paigaldus"
          imageSrc="/static/images/1762810111398-imageSrc_c0d78223-d162-4fbb-ad8a-f5e7ce63ce65.png"
        />
        <LandingProductFeature
          title="Boileri remont"
          imageSrc="/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png"
        />
        <LandingProductFeature
          title="Hooldus"
          imageSrc="/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png"
        />
      </LandingProductFeaturesGrid>

      {/* 
        FAQ, BAND, TESTIMONIALS, CTA —
        тоже сюда.
      */}

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
