import { GlowBg } from '@/components/shared/ui/glow-bg';
import clsx from 'clsx';
import { Children } from 'react';

export const LandingProductFeaturesGrid = ({
  className,
  children,
  title,
  titleComponent,
  description,
  descriptionComponent,
  withBackground = true,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  containerType = 'wide',
  numberOfColumns,
}) => {
  const childrenCount = Children.count(children);

  // стабильная сетка без пересчётов
  const columns =
    numberOfColumns
      ? `md:grid-cols-${numberOfColumns}`
      : childrenCount >= 3
        ? 'md:grid-cols-3'
        : 'md:grid-cols-2';

  return (
    <section
      className={clsx(
        'w-full flex justify-center items-center gap-8 p-6 py-12 lg:py-16 flex-col',
        withBackground && variant === 'primary' && 'bg-primary-100/20 dark:bg-primary-900/10',
        withBackground && variant === 'secondary' && 'bg-secondary-100/20 dark:bg-secondary-900/10',
        withBackgroundGlow && 'relative overflow-hidden',
        className,
      )}
    >
      {withBackgroundGlow && (
        <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
          <GlowBg className="w-full lg:w-2/3 h-auto z-0" variant={backgroundGlowVariant} />
        </div>
      )}

      {(title || description || titleComponent || descriptionComponent) && (
        <div className={clsx('relative w-full flex flex-col sm:items-center', `container-${containerType}`)}>
          {titleComponent || (
            title && (
              <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-sm sm:max-w-none">
                {title}
              </h2>
            )
          )}

          {descriptionComponent || (
            description && <p className="w-full mt-6 md:text-xl">{description}</p>
          )}
        </div>
      )}

      <div
        className={clsx(
          'p-0 relative isolate grid gap-4 fgrid',
          variant,
          `container-${containerType}`,
          columns
        )}
      >
        {children}
      </div>
    </section>
  );
};
