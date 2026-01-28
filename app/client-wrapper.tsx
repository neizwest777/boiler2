import { useState } from "react";

import {
  LandingPrimaryImageCtaSection,
  LandingProductFeaturesGrid,
  LandingProductFeature,
  LandingFaqCollapsibleSection,
  LandingAboutSection,
  LandingProductSteps,
  LandingSaleCtaSection,
  LandingBandSection,
} from "@/components/landing";

import { Button } from "@/components/shared/ui/button";
import dynamic from "next/dynamic";

// ❗ Делаем только модалку клиентской, а не весь лендинг
const ContactFormDialog = dynamic(
  () => import("@/components/contact/contact-form-dialog").then(m => m.ContactFormDialog),
  { ssr: false }
);

export default function ClientWrapper() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <LandingPrimaryImageCtaSection
        title="Boileri hooldus, paigaldus ja remont Tallinnas"
        description="Kutsuge kogenud torumees! Kiire ja usaldusväärne teenus üle Tallinna ja Harjumaa."
        imageSrc="/static/images/1762809808835-imageSrc_bcf7bf97-5006-48e0-a7ea-0f11b05fc88d.png"
        imageAlt="Boiler"
        imagePosition="right"
        withBackground={false}
        variant="primary"
      >
        <div className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
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

      {/* TEENUSED */}
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

      {/* ABOUT */}
      <LandingAboutSection
        title="Meist"
        description="Oleme litsentseeritud, kogenud ja kohalik torustikuettevõte, mis pakub tipptasemel boileri teenuseid Tallinnas ja Harjumaa."
        imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80" imageAlt="Boileriabi meeskond"
      />

      {/* STEPS */}
      <LandingProductSteps
        title="Kuidas see töötab"
        description="Lihtne protsess kvaliteetse teenuse saamiseks"
        withBackground
        variant="primary"
      >
        <LandingProductFeature
          title="1. Võtke meiega ühendust"
          description="Helistage või kirjutage meile. Meie meeskond vastab kiiresti."
          imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&q=80" imageAlt="Kontakt telefon"
        />

        <LandingProductFeature
          title="2. Saage tasuta hinnapakkumine"
          description="Pakume detailset ja ausat hinnapakkumist."
          imageSrc="/static/images/1762813449770-imageSrc_2a0684a5-ad4d-47fd-acab-45bcf007cdad.png" imageAlt="Tasuta hinnapakkumine"
        />

        <LandingProductFeature
          title="3. Me parandame boileri"
          description="Professionaalne töö garantii ja kvaliteidiga."
          imageSrc="/static/images/1762935301324-imageSrc_140ea933-b1b2-45eb-97d6-105c88b0f79f.png" imageAlt="Boileri remont"
        />
      </LandingProductSteps>

      {/* CTA */}
      <LandingSaleCtaSection
        title="Saage tasuta hinnapakkumine täna!"
        description="Täitke vorm ja võtame teiega ühendust."
        withBackground
        variant="primary"
      />

      {/* BAND */}
      <LandingBandSection
        title="Tallinn ja Harjumaa"
        description="Kiire reageerimine üle piirkonna."
        withBackground={false}
      />

      {/* FAQ */}
      <LandingFaqCollapsibleSection
        title="Korduma kippuvad küsimused"
        description="Leiate vastused kõige sagedamini esitatud küsimustele"
        faqItems={[
          { question: "Kui kiiresti saate kohale tulla?", answer: "24h." },
          { question: "Kas pakute garantiid?", answer: "Jah." },
          { question: "Kas töötate nädalavahetusel?", answer: "Jah, 24/7." },
        ]}
        withBackground
        variant="primary"
      />

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
