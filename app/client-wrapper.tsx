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
      {/* ===================== HERO ===================== */}
      <LandingPrimaryImageCtaSection
        title="Boileri hooldus, paigaldus ja remont Tallinnas"
        description="Kutsuge kogenud torumees! Kiire ja usaldusväärne teenus üle Tallinna ja Harjumaa."
        imageSrc="/static/images/1762809808835-imageSrc_bcf7bf97-5006-48e0-a7ea-0f11b05fc88d.png"
        imageAlt="Boiler"
        imagePosition="right"
        withBackground={false}
        variant="primary"
      >
        <div className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md select-none">
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

      {/* ===================== PARTNERS ===================== */}
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

      {/* ===================== SERVICES ===================== */}
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

      {/* ===================== ABOUT ===================== */}
      <LandingAboutSection
        title="Meist"
        description="Oleme litsentseeritud, kogenud ja kohalik torustikuettevõte, mis pakub tipptasemel boileri teenuseid Tallinnas ja Harjumaal."
        imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80"
      />

      {/* ===================== STEPS ===================== */}
      <LandingProductSteps
        title="Kuidas see töötab"
        description="Lihtne protsess kvaliteetse teenuse saamiseks"
        withBackground
        variant="primary"
      >
        <LandingProductFeature
          title="1. Võtke meiega ühendust"
          description="Helistage või kirjutage meile. Meie meeskond vastab kiiresti."
          imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&q=80"
        />

        <LandingProductFeature
          title="2. Saage tasuta hinnapakkumine"
          description="Pakume detailset ja ausat hinnapakkumist."
          imageSrc="/static/images/1762813449770-imageSrc_2a0684a5-ad4d-47fd-acab-45bcf007cdad.png"
        />

        <LandingProductFeature
          title="3. Me parandame boileri"
          description="Professionaalne töö garantii ja kvaliteidiga."
          imageSrc="/static/images/1762935301324-imageSrc_140ea933-b1b2-45eb-97d6-105c88b0f79f.png"
        />
      </LandingProductSteps>

      {/* ===================== TESTIMONIALS (FIXED + BEAUTIFUL) ===================== */}

<section className="w-full py-24 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4">Klientide arvustused</h2>
    <p className="text-lg text-gray-600 mb-14">
      Vaadake, mida meie kliendid meist arvavad
    </p>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* ITEM 1 */}
      <div className="bg-white border shadow-sm rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          “Tuli kohale 30 minutiga. Väga professionaalne ja kiire töö!”
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <img
            src="/static/images/people/1.webp"
            alt="Jaan"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col text-left">
            <span className="font-semibold">Jaan T.</span>
            <span className="text-sm text-gray-500">@jaantamm</span>
          </div>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="bg-white border shadow-sm rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          “Aus hind ja super kvaliteet. Soovitan kõigile!”
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <img
            src="/static/images/people/3.webp"
            alt="Andrus"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col text-left">
            <span className="font-semibold">Andrus R.</span>
            <span className="text-sm text-gray-500">@andrus</span>
          </div>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="bg-white border shadow-sm rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          “Parandas boileri samal õhtul. Väga rahul teenusega.”
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <img
            src="/static/images/people/2.webp"
            alt="Kertu"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col text-left">
            <span className="font-semibold">Joel R.</span>
            <span className="text-sm text-gray-500">@joel</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===================== CTA ===================== */}
      <LandingSaleCtaSection
        title="Saage tasuta hinnapakkumine täna!"
        description="Täitke vorm ja võtame teiega ühendust."
        withBackground
        variant="primary"
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

      {/* ===================== BAND ===================== */}
      <LandingBandSection
        title="Tallinn ja Harjumaa"
        description="Kiire reageerimine üle piirkonna."
        withBackground={false}
      />

      {/* ===================== FAQ ===================== */}
      <LandingFaqCollapsibleSection
        title="Korduma kippuvad küsimused"
        description="Leiate vastused kõige sagedamini esitatud küsimustele"
        faqItems={[
          {
            question: "Kui kiiresti saate kohale tulla?",
            answer:
              "Tavaliselt saame kohale tulla 24 tunni jooksul. Hädaolukordades reageerime kohe.",
          },
          {
            question: "Kas pakute garantiid?",
            answer:
              "Jah, kõikidele tehtud töödele anname ametliku garantii.",
          },
          {
            question: "Kas töötate nädalavahetusel?",
            answer: "Jah, pakume teenust 7 päeva nädalas, 24/7.",
          },
        ]}
        withBackground
        variant="primary"
      />

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
