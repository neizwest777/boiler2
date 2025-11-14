"use client";

import Image from "next/image";
import { useRef } from "react";

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  const logos = [
    "ariston.png",
    "atlantic.png",
    "bauhof.png",
    "bosch.png",
    "gustavsberg.png",
    "krauta.png",
    "onninen.png",
    "pts.png",
    "stiebel.png",
    "thermor.png",
  ];

  return (
    <div className="w-full flex flex-col items-center py-14 bg-[#E9FCFF]">
      <h2 className="text-3xl font-semibold mb-2">Usaldusväärne partner</h2>
      <p className="text-gray-600 mb-8">
        Töötame koos juhtivate tootjate ja partneritega
      </p>

      <div className="flex items-center gap-4 w-full max-w-7xl px-4">

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="text-gray-400 hover:text-gray-600 transition text-3xl"
        >
          ←
        </button>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="
            flex gap-12 overflow-x-auto whitespace-nowrap scroll-smooth
            no-scrollbar py-4
          "
        >
          {logos.map((file, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                min-w-[160px] h-[70px]
                bg-white rounded-xl shadow-sm
                p-3
                opacity-80 hover:opacity-100 transition
              "
            >
              <Image
                src={`/static/brands/${file}`}
                width={150}
                height={60}
                alt={file}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="text-gray-400 hover:text-gray-600 transition text-3xl"
        >
          →
        </button>
      </div>
    </div>
  );
}
