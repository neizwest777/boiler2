import { LandingHeader, LandingHeaderMenuItem } from '@/components/landing';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import SearchButton from '@/components/search/SearchButton';
import { Button } from '@/components/shared/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Header = ({ className }: { className?: string }) => {
  return (
    <LandingHeader
      className={className}
      fixed
      logoComponent={
        <div className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
          <Image
            src="/static/images/logo.png"
            alt="BoileriABI.ee  logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          {'BoileriABI.ee '}
        </div>
      }
      withBackground={false}
      variant="primary"
    >
      <LandingHeaderMenuItem href="/teenused">
        {'Teenused'}
      </LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/meist">{'Meist'}</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/kontakt">{'Kontakt'}</LandingHeaderMenuItem>
      <LandingHeaderMenuItem
        href="https://wa.me/37253684587"
        type="button"
        label="default"
      >
        {'Whatsapp'}
      </LandingHeaderMenuItem>

      <SearchButton />
      <ThemeSwitch />
    </LandingHeader>
  );
};

export default Header;
