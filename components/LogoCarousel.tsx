"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "/static/brands/ariston.png",
  "/static/brands/atlantic.svg",
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
  const animationRef = useRef<number>(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let x = 0;
    const speed = 0.7;

    const tick = () => {
      if (!el || isPausedRef.current) {
        animationRef.current = requestAnimationFrame(tick);
        return;
      }

      x += speed;
      
      // Сбрасываем позицию когда дошли до середины (до конца оригинального набора)
      if (x >= el.scrollWidth / 2) {
        x = 0;
      }

      el.scrollLeft = x;
      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Функции для паузы при наведении
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

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
        className="relative flex gap-10 overflow-x-hidden no-scrollbar whitespace-nowrap px-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Удваиваем список для бесконечного эффекта */}
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="min-w-[180px] h-[100px] flex items-center justify-center bg-white shadow rounded-xl p-4 flex-shrink-0 transition-transform hover:scale-105"
          >
            <Image
              src={src}
              alt={`logo-${i}`}
              width={200}
              height={80}
              className="object-contain max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
