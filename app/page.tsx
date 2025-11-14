// @ts-nocheck
"use client";

import { useState } from "react";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

import {
  LandingHeaderMenuItem,
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
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink,
} from "@/components/landing";

import { Button } from "@/components/shared/ui/button";
import Link from "next/link";
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
        {/* Кнопка-заглушка (красная) — не кликается */}
        <div
          className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md cursor-default select-none"
          style={{ pointerEvents: "none" }}
        >
          Helista: 53684587
        </div>

        {/* Рабочая кнопка — открывает форму заявки */}
        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Tasuta konsultatsioon
        </Button>
      </LandingPrimaryImageCtaSection>

      {/* SHOWCASE / PARTNERS */}
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
        <LandingShowcaseItem>
          <Wrench className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Droplets className="w-8 h-8" />
        </LandingShowcaseItem>
      </LandingShowcase>

      {/* SERVICES */}
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
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="Boileri remont"
          description="Kiire ja usaldusväärne remonditeenus. Diagnoosime ja lahendame probleemid professionaalselt."
          imageSrc="/static/images/1762810822501-imageSrc_08e474ec-3188-4011-b875-e572f86e4fa8.png"
          imageAlt="Boiler repair"
          imagePosition="center"
          imagePerspective="none"
          textPosition="center"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="Puhastus ja hooldus"
          description="Hoidke oma boilerit efektiivsena regulaarse hooldusega. Pikendame seadme eluiga."
          imageSrc="/static/images/1762810954990-imageSrc_a9687eae-bf20-4a03-90a7-1080d885cb7e.png"
          imageAlt="Boiler maintenance"
          imagePosition="center"
          imagePerspective="none"
          textPosition="center"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="Hädaabi 24/7"
          description="Hädaolukordades oleme alati valmis aitama. Kiire reageerimine ja professionaalne lahendus."
          imageSrc="/static/images/1762811329870-imageSrc_8f087ec4-3ec0-4ebf-acb6-25fab6a24cf1.png"
          imageAlt="Emergency plumbing"
          imagePosition="center"
          imagePerspective="none"
          textPosition="center"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
      </LandingProductFeaturesGrid>

      {/* FAQ — teenuste detailid */}
      <LandingFaqCollapsibleSection
        title="Teenuste detailid"
        description="Vaadake lähemalt meie pakutavaid teenuseid"
        faqItems={[
          {
            question: "Boileri paigaldus",
            answer:
              "Pakume professionaalset boileri paigaldust kõikidele tüüpidele. Meie kogenud meeskond tagab kiire ja kvaliteetse paigalduse, järgides kõiki ohutus- ja kvaliteedinõudeid. Anname nõu sobiva boileri valimisel.",
          },
          {
            question: "Boileri remont",
            answer:
              "Kiire ja usaldusväärne remonditeenus kõikidele boileri tüüpidele. Diagnoosime probleemi kiiresti ja pakume tõhusaid lahendusi. Kasutame ainult kvaliteetseid varuosi ja anname tööle garantii.",
          },
          {
            question: "Boileri puhastus ja hooldus",
            answer:
              "Regulaarne hooldus pikendab teie boileri eluiga ja tagab efektiivse töö. Pakume põhjalikku puhastust, kontrolli ja hooldust. Soovitame hooldust vähemalt kord aastas.",
          },
          {
            question: "Hädaabi torustikule",
            answer:
              "24/7 hädaabi teenus torustiku probleemide korral. Oleme valmis kiiresti reageerima lekete, ummistuste ja muude hädaolukordade korral. Meie meeskond on alati valmis aitama.",
          },
        ]}
        withBackground
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      {/* ABOUT */}
      <LandingAboutSection
        title="Meist"
        description="Oleme litsentseeritud, kogenud ja kohalik torustikuettevõte, mis pakub tipptasemel boileri teenuseid Tallinnas ja Harjumaa. Meie meeskond koosneb sertifitseeritud spetsialistidest, kes on pühendunud kvaliteetsele tööle ja klientide rahulolule."
        imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80"
        imageAlt="Our team"
        textPosition="left"
        withBackground={false}
        variant="primary"
      />

      {/* STEPS */}
      <LandingProductSteps
        title="Kuidas see töötab"
        description="Lihtne protsess kvaliteetse teenuse saamiseks"
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        display="grid"
      >
        <LandingProductFeature
          title="1. Võtke meiega ühendust"
          description="Helistage või kirjutage meile. Meie sõbralik meeskond vastab kiiresti ja aitab teil."
          imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&q=80"
          imageAlt="Contact us"
          imagePosition="center"
          imagePerspective="none"
          textPosition="center"
        />
        <LandingProductFeature
          title="2. Saage tasuta hinnapakkumine"
          description="Pakume detailse hinnapakkumise teie teenuse jaoks. Läbipaistev ja aus hinnakujundus."
          imageSrc="/static/images/1762813449770-imageSrc_2a0684a5-ad4d-47fd-acab-45bcf007cdad.png"
          imageAlt="Get a quote"
          imagePosition="center"
          imagePerspective="none"
          textPosition="center"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="3. Me parandame teie boileri"
          description="Meie eksperdid teevad töö kiiresti ja professionaalselt. Garanteerime kvaliteedi."
          imageSrc="/static/images/1762935301324-imageSrc_140ea933-b1b2-45eb-97d6-105c88b0f79f.png"
          imageAlt="We fix your boiler"
          imagePosition="center"
          imagePerspective="none"
          textPosition="center"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
      </LandingProductSteps>

      {/* TESTIMONIALS */}
      <LandingTestimonialGrid
        title="Klientide arvustused"
        description="Vaadake, mida meie kliendid meist arvavad"
        testimonialItems={[
          {
            url: "#",
            text: "Suurepärane teenindus! Kiire ja tõhus. Soovitan neid kindlasti kõigile, kes vajavad torumehe abi.",
            imageSrc: "/static/images/people/1.webp",
            name: "Jaan Tamm",
            handle: "@jaantamm",
            featured: true,
          },
          {
            url: "#",
            text: "Väga professionaalne meeskond. Paigaldasid uue boileri kiiresti ja kvaliteetselt. Hind oli mõistlik.",
            imageSrc: "/static/images/people/2.webp",
            name: "Kunnar Kask",
            handle: "@mariakask",
            featured: false,
          },
          {
            url: "#",
            text: "Usaldusväärsed ja ausad. Parandasid meie boileri kiiresti ja selgitasid kõik detailid arusaadavalt.",
            imageSrc: "/static/images/people/3.webp",
            name: "Peeter Saar",
            handle: "@peetersaar",
            featured: false,
          },
          {
            url: "#",
            text: "Suurepärane kogemus algusest lõpuni. Tulid õigel ajal ja töö oli tehtud väga hästi. Tänan!",
            imageSrc: "/static/images/people/4.webp",
            name: "Joel Mets",
            handle: "@kristiinamets",
            featured: false,
          },
          {
            url: "#",
            text: "Kiire reageerimine hädaolukorras. Meie boiler läks katki õhtul ja nad tulid kohe appi. Väga tänulik!",
            imageSrc: "/static/images/people/5.webp",
            name: "Andres Kukk",
            handle: "@andreskukk",
            featured: false,
          },
          {
            url: "#",
            text: "Professionaalne lähenemine ja kvaliteetne töö. Boiler töötab nüüd suurepäraselt. Soovitan soojalt!",
            imageSrc: "/static/images/people/6.webp",
            name: "Anti Rebane",
            handle: "@liisrebane",
            featured: false,
          },
          {
            url: "#",
            text: "Väga rahul teenusega. Meie vana boiler asendati uuega kiiresti ja professionaalselt. Tänan meeskonda!",
            imageSrc: "/static/images/people/7.webp",
            name: "Toomas Lepp",
            handle: "@toomaslepp",
            featured: false,
          },
          {
            url: "#",
            text: "Ausad hinnad ja kvaliteetne töö. Ei ole varem nii head torumehe teenust saanud. Kindlasti kasutan uuesti!",
            imageSrc: "/static/images/people/8.webp",
            name: "Jaanus Parts",
            handle: "@jaanusparts",
            featured: false,
          },
          {
            url: "#",
            text: "Suurepärane meeskond! Paigaldasid meie uue boileri kiiresti ja andsid head nõuanded hoolduse kohta.",
            imageSrc: "/static/images/people/9.webp",
            name: "Margus Tamm",
            handle: "@margustamm",
            featured: false,
          },
        ]}
        withBackground={false}
        variant="primary"
        withBackgroundGlow={false}
        backgroundGlowVariant="primary"
      />

      {/* CTA — нижний блок */}
      <LandingSaleCtaSection
        title="Saage tasuta hinnapakkumine täna!"
        description="Täitke vorm ja võtame teiega peagi ühendust. Pakume tasuta konsultatsiooni ja hinnapakkumist."
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      >
        {/* Кнопка-звонок с правильным номером */}
        <Button size="xl" asChild>
          <Link href="tel:+37253684587">Helista kohe</Link>
        </Button>

        {/* Кнопка — открыть форму */}
        <Button
          size="xl"
          variant="outlinePrimary"
          onClick={() => setContactOpen(true)}
        >
          Saada päring
        </Button>
      </LandingSaleCtaSection>

      {/* BAND */}
      <LandingBandSection
        title="Tallinn ja Harjumaa"
        description="Kiire reageerimine üle Tallinna ja Harjumaa. Oleme valmis aitama kõikjal piirkonnas."
        withBackground={false}
        variant="primary"
        supportingComponent={
          <>
            <Wrench className="w-12 h-12" />
            <Droplets className="w-12 h-12" />
            <Phone className="w-12 h-12" />
          </>
        }
      />

      {/* FAQ — üldine */}
      <LandingFaqCollapsibleSection
        title="Korduma kippuvad küsimused"
        description="Leiate vastused kõige sagedamini esitatud küsimustele"
        faqItems={[
          {
            question: "Kui kiiresti saate kohale tulla?",
            answer:
              "Tavaliselt saame kohale tulla 24 tunni jooksul. Hädaolukordades püüame reageerida võimalikult kiiresti, sageli samal päeval.",
          },
          {
            question: "Kas pakute garantiid oma tööle?",
            answer:
              "Jah, kõikidele meie tööle anname garantii. Paigaldatud boileritele kehtib tootja garantii ning meie tööle anname täiendava garantii.",
          },
          {
            question: "Millised on teie hinnad?",
            answer:
              "Hinnad sõltuvad töö mahust ja keerukusest. Pakume alati tasuta hinnapakkumist enne töö alustamist, et te teaksite täpselt, mida oodata.",
          },
          {
            question: "Kas töötate ka nädalavahetustel?",
            answer:
              "Jah, pakume teenust ka nädalavahetustel. Hädaolukordades oleme saadaval 24/7.",
          },
          {
            question: "Millised boilerid te paigaldate?",
            answer:
              "Paigaldame kõiki tüüpi boilereid - elektri-, gaasi- ja õhksoojuspumba boilereid. Töötame kõigi tuntud tootjate seadmetega.",
          },
          {
            question: "Kas aitate valida sobiva boileri?",
            answer:
              "Kindlasti! Meie spetsialistid aitavad valida teie majapidamisele kõige sobivama boileri, arvestades teie vajadusi ja eelarvet.",
          },
        ]}
        withBackground
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      {/* Модалка формы */}
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />

      <Footer className="mt-8" />
    </>
  );
}
