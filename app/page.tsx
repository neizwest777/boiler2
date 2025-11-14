import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ClientWrapper from "./client-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boileri hooldus, paigaldus ja remont Tallinnas | BoileriABI.ee",
  description:
    "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire abi, 24/7 hädaabi, professionaalne teenus ja garantiiga tööd.",
  alternates: {
    canonical: "https://www.boileriabi.ee/",
  },
  openGraph: {
    title: "Boileri hooldus Tallinnas – Kiire abi | BoileriABI.ee",
    description:
      "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire tulek, garantiiga tööd.",
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
    images: ["https://www.boileriabi.ee/static/images/og-main.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "BoileriABI.ee",
            telephone: "+37253684587",
            url: "https://www.boileriabi.ee/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallinn",
              addressRegion: "Harjumaa",
              addressCountry: "EE",
            },
          }),
        }}
      />

      <ClientWrapper />

      <Footer />
    </>
  );
}
