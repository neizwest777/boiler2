import { GlowBg } from "@/components/shared/ui/glow-bg";
import clsx from "clsx";
import { Children } from "react";

export const LandingProductSteps = ({
  className,
  children,
  title,
  titleComponent,
  description,
  descriptionComponent,
  withBackground = true,
  withBackgroundGlow = false,
  variant = "primary",
  backgroundGlowVariant = "primary",
  containerType = "wide",
  display = "list",
}: {
  className?: string;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: "primary" | "secondary";
  backgroundGlowVariant?: "primary" | "secondary";
  containerType?: "narrow" | "wide" | "ultrawide";
  display?: "list" | "grid";
}) => {
  return (
    <section
      className={clsx(
        "w-full flex flex-col justify-center items-center gap-10 p-6 py-12 lg:py-16",
        withBackground &&
          (variant === "primary"
            ? "bg-primary-100/20 dark:bg-primary-900/10"
            : "bg-secondary-100/20 dark:bg-secondary-900/10"),
        withBackgroundGlow && "relative overflow-hidden",
        className
      )}
    >
      {/* Background Glow */}
      {withBackgroundGlow && (
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/3 pointer-events-none">
          <GlowBg
            className="w-full lg:w-2/3 h-auto z-0"
            variant={backgroundGlowVariant}
          />
        </div>
      )}

      {/* TITLE + DESCRIPTION */}
      {(title || description || titleComponent || descriptionComponent) && (
        <div
          className={clsx(
            "relative w-full flex flex-col sm:items-center",
            `container-${containerType}`
          )}
        >
          {titleComponent || (
            title && (
              <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                {title}
              </h2>
            )
          )}

          {descriptionComponent ||
            (description && (
              <p className="w-full mt-6 md:text-xl">{description}</p>
            ))}
        </div>
      )}

      {/* STEPS */}
      <div
        className={clsx(
          "relative w-full isolate",
          `container-${containerType}`,
          display === "list"
            ? "flex flex-col gap-10"
            : "grid gap-8 lg:grid-cols-3"
        )}
      >
        {Children.map(children, (child) => (
          <div className="w-full">{child}</div>
        ))}
      </div>
    </section>
  );
};
