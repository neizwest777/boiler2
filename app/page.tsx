// @ts-nocheck
"use client";

import { useState } from "react";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

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
  LandingBandSection
} from '@/components/landing';

import Image from 'next/image';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';
import { Droplets, Phone, Sparkles, Wrench } from 'lucide-react';


export default function Page() {

  // Контролируем открытие формы
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

        {/* Кнопка — просто ссылка */}
        <Button size="xl" asChild>
          <Link href="/kontakt">Telli torumees kohe!</Link>
        </Button>

        {/* Кнопка вызывает форму */}
        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Tasuta konsultatsioon
        </Button>

      </LandingPrimaryImageCtaSection>



      {/* --- PARTNERS SECTION --- */}
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
        />

        <LandingProductFeature
          title="Boileri remont"
          description="Kiire ja usaldusväärne remonditeenus. Diagnoosime ja lahendame probleemid professionaalselt."
          imageSrc="/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png"
        />

        <LandingProductFeature
          title="Puhastus ja hooldus"
          description="Hoidke oma boilerit efektiivsena regulaarse hooldusega."
          imageSrc="/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png"
        />

        <LandingProductFeature
          title="Hädaabi 24/7"
          description="Häдаолукордаде олеме валмис айаге аитама."
          imageSrc="/static/images/1762811329870-imageSrc_8f087ec4-3ec0-4ebf-acb6-25fab6a24cf1.png"
        />
      </LandingProductFeaturesGrid>



      {/* --- FAQ SECTION --- */}
      <LandingFaqCollapsibleSection
        title="Teenuste detailid"
        description="Vaadake lähemalt meie pakutavaid teenuseid"
        faqItems={[
          {
            question: 'Boileri paigaldus',
            answer: 'Pakume professionaalset boileri paigaldust kõikidele tüüpidele.'
          },
          {
            question: 'Boileri remont',
            answer: 'Kiire ja usaldusväärne remonditeenus kõikidele boileri tüüpidele.'
          },
          {
            question: 'Boileri puhastus ja hooldus',
            answer: 'Regulaarne hooldus pikendab boileri eluiga ja tagab efektiivse töö.'
          },
          {
            question: 'Hädaabi torustikule',
            answer: '24/7 hädaabi teenus lekete ja muude probleemide korral.'
          }
        ]}
        withBackground
      />



      {/* --- ABOUT SECTION --- */}
      <LandingAboutSection
        title="Meist"
        description="Oleme litsentseeritud, kogenud ja kohalik torustikuettevõte Tallinnas ja Harjumaal."
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
          description="Helistage või kirjutage meile."
          imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&q=80"
        />

        <LandingProductFeature
          title="2. Saage tasuta hinnapakkumine"
          description="Pakume detailse hinnapakkumise teie teenuse jaoks."
          imageSrc="/static/images/1762813449770-imageSrc_2a0684a5-ad4d-47fd-acab-45bcf007cdad.png"
        />

        <LandingProductFeature
          title="3. Me parandame teie boileri"
          description="Professionaalne teenus ja kiire töö."
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
        description="Vastused kõige levinumatele küsimustele"
        faqItems={[]}
        withBackground
      />



      <Footer className="mt-8" />




      {/* --- МОДАЛЬНОЕ ОКНО С ФОРМОЙ --- */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Võta ühendust</h2>
              <button
                className="text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setContactOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form
              action="https://formsubmit.co/prismestonia@gmail.com"
              method="POST"
              className="space-y-4"
            >

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="text-sm">Nimi *</label>
                <input
                  name="name"
                  required
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-sm">E-post</label>
                <input
                  name="email"
                  type="email"
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-sm">Telefon *</label>
                <input
                  name="phone"
                  required
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-sm">Sõnum *</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
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
