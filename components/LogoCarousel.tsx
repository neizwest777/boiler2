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

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let x = 0;

    function tick() {
      x += 0.7; // скорость
      if (x >= el.scrollWidth / 2) x = 0;
      el.scrollLeft = x;
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="w-full overflow-hidden py-14 bg-[#eafbff]">
      <h2 className="text-center text-3xl font-semibold mb-2">
        Usaldusväärne partner
      </h2>
      <p className="text-center mb-10 text-gray-700">
        Töötame koos juhtivate tootjate ja partneritega
      </p>

      <div
        ref={scrollRef}
        className="flex gap-10 whitespace-nowrap overflow-hidden px-10"
      >
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="
            bg-white shadow-md rounded-xl
            flex items-center justify-center
            w-[200px] h-[100px]
            p-4
            shrink-0
            "
          >
            <Image
              src={src}
              alt="brand"
              width={180}
              height={70}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
