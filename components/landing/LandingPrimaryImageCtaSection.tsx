import Image from "next/image";

export function LandingPrimaryImageCtaSection({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
  minHeight = 350
}) {
  return (
    <section className="w-full py-16" style={{ minHeight }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg text-gray-700">{description}</p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            {children}
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="shadow-xl rounded-lg"
            priority      /* 🚀 LCP optimization */
            loading="eager" /* 🚀 Load image first */
            fetchPriority="high" /* 🚀 Chrome LCP hint */
          />
        </div>

      </div>
    </section>
  );
}
