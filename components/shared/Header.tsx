import { LandingHeader, LandingHeaderMenuItem } from '@/components/landing';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import SearchButton from '@/components/search/SearchButton';
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
            alt="BoileriABI.ee logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          {'BoileriABI.ee'}
        </div>
      }
      withBackground={false}
      variant="primary"
    >
      {/* LEFT MENU */}
      <LandingHeaderMenuItem href="/teenused">Teenused</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/meist">Meist</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/kontakt">Kontakt</LandingHeaderMenuItem>

      {/* 🔥 КНОПКА ТЕЛЕФОНА */}
      <Link
        href="tel:+37253684587"
        className="
          flex items-center gap-2 
          px-4 py-2 
          text-lg font-semibold
          border border-red-500 
          text-red-600 
          dark:text-red-400 
          rounded-xl 
          hover:bg-red-50 
          dark:hover:bg-red-900/20
          transition-all
          whitespace-nowrap
        "
      >
        {/* Phone Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.359 4.077a1 1 0 01-.26 1.01l-1.6 1.6a16 16 0 006.364 6.364l1.6-1.6a1 1 0 011.01-.26l4.077 1.359A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1C9.82 23 1 14.18 1 4V3a2 2 0 012-2h1z"
          />
        </svg>

        53684587
      </Link>

      {/* Whatsapp */}
      <LandingHeaderMenuItem
        href="https://wa.me/37253684587"
        type="button"
        label="default"
      >
        Whatsapp
      </LandingHeaderMenuItem>

      {/* SEARCH + THEME */}
      <SearchButton />
      <ThemeSwitch />
    </LandingHeader>
  );
};

export default Header;
