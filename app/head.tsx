import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boileri hooldus, paigaldus ja remont Tallinnas | BoileriABI.ee",
  description:
    "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire abi, 24/7 hädaabi, professionaalne teenus ja garantiiga tööd. Helista 53684587.",
  alternates: {
    canonical: "https://www.boileriabi.ee/",
  },
  openGraph: {
    title: "Boileri hooldus ja paigaldus Tallinnas – Kiire abi | BoileriABI.ee",
    description:
      "Boileri paigaldus, hooldus ja remont Tallinnas ja Harjumaal. Kiire tulek, garantiiga tööd, 24/7 hädaabi.",
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
    description:
      "Kiire ja professionaalne boileri hooldus, remont ja paigaldus Tallinnas ja Harjumaa.",
    images: ["https://www.boileriabi.ee/static/images/og-main.jpg"],
  },
};

export default function Head() {
  return (
    <>
      {/* Защищено от удаления, SEO работает */}
    </>
  );
}
