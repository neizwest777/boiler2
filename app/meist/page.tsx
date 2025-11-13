// @ts-nocheck
"use client";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { LandingAboutSection } from '@/components/landing';

export default function MeistPage() {
  return (
    <>
      <Header className="mb-4" />
      
      <div className="container-narrow py-16">
        <LandingAboutSection
          title="Meist"
          description="Oleme litsentseeritud torumehed Tallinnas ja Harjumaal. Meie meeskond on spetsialiseerunud boilerite paigaldusele, remondile ja hooldusele. Pakume kiiret ja usaldusväärset teenust."
          imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80"
        />
      </div>

      <Footer className="mt-8" />
    </>
  );
}
