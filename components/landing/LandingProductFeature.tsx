import clsx from "clsx";
import Image from "@/components/shared/Image";
import { GlowBg } from "@/components/shared/ui/glow-bg";

export const LandingProductFeature = ({
  children,
  className,
  title,
  description,
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  withBackground = false,
  withBackgroundGlow = false,
  variant = "primary",
  backgroundGlowVariant = "primary",
}: {
  children?: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "center";
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: "primary" | "secondary";
  backgroundGlowVariant?: "primary" | "secondary";
}) => {
  const isCenter = imagePosition === "center";
  const isLeft = imagePosition === "left";

  return (
    <section
      className={clsx(
        "w-full py-12 lg:py-16",
        "flex flex-col items-center gap-10",
        withBackground &&
          (variant === "primary"
            ? "bg-primary-100/20 dark:bg-primary-900/10"
            : "bg-secondary-100/20 dark:bg-secondary-900/10"),
        className
      )}
    >
      {/* Background Glow */}
      {withBackgroundGlow && (
        <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
          <GlowBg
            className="w-full lg:w-1/2 h-auto z-0 dark:opacity-50 opacity-90"
            variant={backgroundGlowVariant}
          />
        </div>
      )}

      <div
        className={clsx(
          "w-full container-wide",
          !isCenter && "grid lg:grid-cols-12 gap-8 items-center"
        )}
      >
        {/* TEXT */}
        <div
          className={clsx(
            "flex flex-col gap-4",
            isCenter
              ? "w-full text-center items-center"
              : "col-span-12 lg:col-span-6",
            isLeft && "lg:col-start-7"
          )}
        >
          {title && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-2 md:text-xl text-gray-700">{description}</p>
          )}

          {children}
        </div>

        {/* IMAGE */}
        {imageSrc && (
          <div
            className={clsx(
              "w-full flex",
              isCenter
                ? "justify-center mt-6"
                : "col-span-12 lg:col-span-6",
              isLeft && "lg:col-start-1 lg:row-start-1"
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-md w-full max-w-full"
              width={900}
              height={900}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
};
