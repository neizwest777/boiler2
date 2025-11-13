// @ts-nocheck
"use client";

import { useState } from "react";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { LandingPrimaryImageCtaSection } from '@/components/landing';
import { LandingShowcase } from '@/components/landing';
import { LandingShowcaseItem } from '@/components/landing';
import { LandingProductFeaturesGrid } from '@/components/landing';
import { LandingProductFeature } from '@/components/landing';
import { LandingFaqCollapsibleSection } from '@/components/landing';
import { LandingAboutSection } from '@/components/landing';
import { LandingProductSteps } from '@/components/landing';
import { LandingTestimonialGrid } from '@/components/landing';
import { LandingSaleCtaSection } from '@/components/landing';
import { LandingBandSection } from '@/components/landing';
import Image from 'next/image';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';
import { Droplets, Phone, Sparkles, Wrench } from 'lucide-react';

export default function Page() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Header className="mb-4" />

      {/* --- HERO SECTION --- */}
      <LandingPrimaryImageCtaSection
        title="Boileri hooldus, paigaldus ja remont Tallinnas"
        description="Kutsuge kogenud torumees! Kiire ja usaldusväärne teenus üle Tallinna ja Harjumaa. Pakume professionaalset boileri paigaldust, remonti ja hooldust."
        imageSrc="/static/images/1762809808835-imageSrc_bcf7bf97-5006-48e0-a7ea-0f11b05fc88d.png"
        imageAlt="Plumber working on boiler"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        variant="primary"
        minHeight={350}
      >
        <Button size="xl" asChild>
          <Link href="/kontakt">{'Telli torumees kohe!'}</Link>
        </Button>

        {/* КНОПКА ОТКРЫВАЕТ ФОРМУ, НИКУДА НЕ ВЕДЁТ */}
        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Tasuta konsultatsioon
        </Button>
      </LandingPrimaryImageCtaSection>

      {/* --- PARTNERS --- */}
      <LandingShowcase
        title="Usaldusväärne partner"
        description="Töötame koos juhtivate tootjate ja partneritega"
        textPosition="center"
        withBackground
        variant="primary"
      >
        <LandingShowcaseItem><Wrench className="w-8 h-8" /></LandingShowcaseItem>
        <LandingShowcaseItem><Droplets className="w-8 h-8" /></LandingShowcaseItem>
        <LandingShowcaseItem><Sparkles className="w-8 h-8" /></LandingShowcaseItem>
        <LandingShowcaseItem><Phone className="w-8 h-8" /></LandingShowcaseItem>
        <LandingShowcaseItem><Wrench className="w-8 h-8" /></LandingShowcaseItem>
        <LandingShowcaseItem><Droplets className="w-8 h-8" /></LandingShowcaseItem>
      </LandingShowcase>

      {/* --- SERVICES GRID --- */}
      <LandingProductFeaturesGrid
        title="Meie teenused"
        description="Pakume laia valikut boileri ja torustiku teenuseid"
        withBackground={false}
        variant="primary"
      >
        <LandingProductFeature
          title="Boileri paigaldus"
          description="Ekspertide poolt teostatud paigaldus kõikidele boileri tüüpidele. Tagame kiire ja kvaliteetse töö."
          imageSrc="/static/images/1762810111398-imageSrc_c0d78223-d162-4fbb-ad8a-f5e7ce63ce65.png"
          imageAlt="Boiler installation"
          imagePosition="center"
          imagePerspective="none"
          textPosition="center"
          zoomOnHover
          minHeight={350}
        />

        <LandingProductFeature
          title="Boileri remont"
          description="Kiire ja usaldusväärne remonditeenus. Diagnoosime ja lahendame probleemid professionaalselt."
          imageSrc="/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png"
        />

        <LandingProductFeature
          title="Puhastus ja hooldus"
          description="Hoidke oma boilerit efektiivsena regulaarse hooldusega. Pikendame seadme eluiga."
          imageSrc="/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png"
        />

        <LandingProductFeature
          title="Hädaabi 24/7"
          description="Hädaolukordades oleme alati valmis aitama. Kiire reageerimine ja professionaalne lahendus."
          imageSrc="/static/images/1762811329870-imageSrc_8f087ec4-3ec0-4ebf-acb6-25fab6a24cf1.png"
        />
      </LandingProductFeaturesGrid>

      {/* --- FAQ SECTION --- */}
      <LandingFaqCollapsibleSection
        title="Teenuste detailid"
        description="Vaadake lähemalt meie pakutavaid teenuseid"
        faqItems={[
          { question: 'Boileri paigaldus', answer: 'Pakume professionaalset boileri paigaldust kõikidele tüüpidele.' },
          { question: 'Boileri remont', answer: 'Kiire ja usaldusväärne remonditeenus kõikidele boileri tüüpidele.' },
          { question: 'Boileri puhastus ja hooldus', answer: 'Regulaarne hooldus pikendab boileri eluiga ja tagab efektiivse töö.' },
          { question: 'Hädaabi torustikule', answer: '24/7 hädaabi teenus lekete ja muude probleemide korral.' },
        ]}
        withBackground
      />

      {/* --- ABOUT SECTION --- */}
      <LandingAboutSection
        title="Meist"
        description="Oleme litsentseeritud, kogenud ja kohalik torustikuettevõte, mis pakub tipptasemel boileri teenuseid Tallinnas ja Harjumaal."
        imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80"
      />

      {/* --- STEPS --- */}
      <LandingProductSteps
        title="Kuidas see töötab"
        description="Lihtne protsess kvaliteetse teenuse saamiseks"
        withBackground
      >
        <LandingProductFeature
          title="1. Võtke meiega ühendust"
          description="Helistage või kirjutage meile. Meie meeskond vastab kiiresti."
          imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&q=80"
        />

        <LandingProductFeature
          title="2. Saage tasuta hinnapakkumine"
          description="Pakume detailse hinnapakkumise teie teenuse jaoks."
          imageSrc="/static/images/1762813449770-imageSrc_2a0684a5-ad4d-47fd-acab-45bcf007cdad.png"
        />

        <LandingProductFeature
          title="3. Me parandame teie boileri"
          description="Meie eksperdid teevad töö kiiresti ja professionaalselt."
          imageSrc="/static/images/1762935301324-imageSrc_140ea933-b1b2-45eb-97d6-105c88b0f79f.png"
        />
      </LandingProductSteps>

      {/* --- TESTIMONIALS --- */}
      <LandingTestimonialGrid
        title="Klientide arvustused"
        description="Vaadake, mida meie kliendid meist arvavad"
        testimonialItems={[]}
      />

      {/* --- CTA SECTION bottom --- */}
      <LandingSaleCtaSection
        title="Saage tasuta hinnapakkumine täna!"
        description="Täitke vorm ja võtame teiega peagi ühendust."
        withBackground
      >
        <Button size="xl" asChild>
          <Link href="tel:+3725551234">Helista kohe</Link>
        </Button>

        {/* ВТОРАЯ КНОПКА -> ТА ЖЕ ФОРМА */}
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
        description="Kiire reageerimine üle Tallinna ja Harjumaa."
        variant="primary"
      />

      <LandingFaqCollapsibleSection
        title="Korduma kippuvad küsimused"
        description="Leiate vastused kõige sagedamini esitatud küsimustele"
        faqItems={[]}
        withBackground
      />

      <Footer className="mt-8" />

      {/* --- МОДАЛКА С ФОРМОЙ ОБРАТНОЙ СВЯЗИ --- */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Võta meiega ühendust
              </h2>
              <button
                className="text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setContactOpen(false)}
              >
                ✕
              </button>
            </div>

            <form
              action="https://formsubmit.co/prismestonia@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Настройки FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Можно вернуть пользователя на главную после отправки */}
              {/* <input type="hidden" name="_next" value="https://www.boileriabi.ee/" /> */}

              <div>
                <label className="text-sm font-medium">Nimi *</label>
                <input
                  name="name"
                  required
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                  placeholder="Teie nimi"
                />
              </div>

              <div>
                <label className="text-sm font-medium">E-post</label>
                <input
                  name="email"
                  type="email"
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Telefon *</label>
                <input
                  name="phone"
                  required
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                  placeholder="+372..."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Sõnum *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                  placeholder="Kirjeldage oma muret..."
                />
              </div>

              <Button type="submit" className="w-full">
                Saada
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
