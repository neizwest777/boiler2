// @ts-nocheck
"use client";

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { LandingProductFeaturesGrid, LandingProductFeature } from '@/components/landing';

export default function TeenusedPage() {
  return (
    <>
      <Header className="mb-4" />
      
      <div className="container-narrow py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Meie teenused</h1>
        <p className="text-lg text-center mb-12">Pakume laia valikut boileri teenuseid</p>

        <LandingProductFeaturesGrid
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
      </div>

      <Footer className="mt-8" />
    </>
  );
}
