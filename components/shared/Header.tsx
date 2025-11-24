"use client";
import { LandingHeader, LandingHeaderMenuItem } from "@/components/landing";
import ThemeSwitch from "@/components/shared/ThemeSwitch";
import SearchButton from "@/components/search/SearchButton";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const Header = ({ className }: { className?: string }) => {
  // Безопасная GA4-функция без "any"
  const track = (name: string, label: string) => {
    if (typeof window !== "undefined") {
      const g = (
        window as unknown as {
          gtag?: (...args: unknown[]) => void;
        }
      ).gtag;

      if (typeof g === "function") {
        g("event", name, {
          event_category: "engagement",
          event_label: label,
          value: 1,
        });
      }
    }
  };

  return (
    <LandingHeader
      className={className}
      fixed
      logoComponent={
        <div className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
          <Image
            src="/static/images/logo.png"
            alt="Boileriabi - Boileri paigaldus ja remont Tallinnas"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          {"BoileriABI"}
        </div>
      }
      withBackground={false}
      variant="primary"
    >
      {/* ---------------------- */}
      {/* ✅ ИСПРАВЛЕННЫЕ ССЫЛКИ - правильные URL */}
      {/* ---------------------- */}
      <DropdownMenu>
        <DropdownMenuTrigger className="px-3 py-2 text-md font-medium cursor-pointer hover:text-primary-600 transition">
          Teenused ▾
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white shadow-xl rounded-xl p-2 min-w-[220px]">
          <DropdownMenuItem asChild>
            <Link href="/paigaldus">Boileri paigaldus</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/remont">Boileri remont</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/hooldus">Hooldus</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/hadaabi">Hädaabi 24/7</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/hinnad">Hinnad</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Основное меню */}
      <LandingHeaderMenuItem href="/meist">Meist</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/kontakt">Kontakt</LandingHeaderMenuItem>

      {/* КНОПКА ТЕЛЕФОНА */}
      <a
        href="tel:+37253684587"
        onClick={() => track("click_phone", "Header Phone Button")}
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
      </a>

      {/* WHATSAPP — КЛИЕНТСКИЙ ЭЛЕМЕНТ */}
      <a
        href="https://wa.me/37253684587"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_whatsapp", "Header Whatsapp Button")}
        className="
          px-4 py-2 
          text-md font-medium 
          text-primary-700 dark:text-primary-200
          hover:text-primary-900 dark:hover:text-primary-50
          transition
        "
      >
        Whatsapp
      </a>

      {/* SEARCH + THEME */}
      <SearchButton />
      <ThemeSwitch />
    </LandingHeader>
  );
};

export default Header;
