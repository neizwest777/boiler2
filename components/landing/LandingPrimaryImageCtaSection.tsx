"use client";

import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right" | "center";
  textPosition?: "left" | "right" | "center";
  imageShadow?: "soft" | "hard" | "none";
  children?: React.ReactNode;
  minHeight?: number;
  withBackground?: boolean;
  variant?: string;
};

export function LandingPrimaryImageCtaSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  textPosition = "left",
  imageShadow = "none",
  children,
  minHeight = 350,
}: Props) {
  return (
    <section
      className="w-full py-16"
      style={{ minHeight }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT BLOCK */}
        <div className={`space-y-6 text-${textPosition}`}>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg text-gray-700">{description}</p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            {children}
          </div>
        </div>

        {/* IMAGE BLOCK */}
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className={
              imageShadow === "hard"
                ? "shadow-xl rounded-lg"
                : imageShadow === "soft"
                ? "shadow-md rounded-lg"
                : ""
            }
          />
        </div>
      </div>
    </section>
  );
}
