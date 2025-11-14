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

  // Автопрокрутка
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let x = 0;

    function tick() {
      x += 1;
      if (x >= el.scrollWidth / 2) x = 0;
      el.scrollLeft = x;
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="w-full overflow-hidden py-10 bg-white">
      <div
        ref={scrollRef}
        className="flex gap-12 whitespace-nowrap overflow-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...logos, ...logos].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="brand logo"
            width={160}
            height={60}
            className="object-contain opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
}
