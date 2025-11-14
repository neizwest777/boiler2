"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "/static/brands/ariston.png",
  "/static/brands/atlantic.png",
  "/static/brands/bauhof.png",
  "/static/brands/bosch.png",
  "/static/brands/gustavsberg.png",
  "/static/brands/krauta.png",
  "/static/brands/onninen.png",
  "/static/brands/pts.png",
  "/static/brands/stiebel.png",
  "/static/brands/thermor.png",
];

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let el = scrollRef.current;
    if (!el) return;

    let x = 0;
    let frameId: number;

    const tick = () => {
      // Защита от null для Vercel
      if (!el) return;

      x += 0.7;
      if (x >= el.scrollWidth / 2) {
        x = 0;
      }

      el.scrollLeft = x;

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      el = null; // защита от утечек
    };
  }, []);

  return (
    <div className="w-full bg-[#e8fcff] py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-2">
        Usaldusväärne partner
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Töötame koos juhtivate tootjate ja partneritega
      </p>

      <div
        ref={scrollRef}
        className="relative flex gap-10 overflow-x-scroll no-scrollbar whitespace-nowrap px-10"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {/* Чтобы была бесконечная карусель — удваиваем список */}
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="min-w-[180px] h-[100px] flex items-center justify-center bg-white shadow rounded-xl p-4"
          >
            <Image
              src={src}
              alt={`logo-${i}`}
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
