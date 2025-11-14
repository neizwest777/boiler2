import { LandingHeaderMenuItem } from "@/components/landing";
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

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      {/* GRID → 3 зоны */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative w-full">
        
        {/* ---------- LOGO LEFT ---------- */}
        <div className="flex items-center gap-3 z-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/static/images/logo.png"
              alt="BoileriABI.ee logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-primary-900 font-semibold text-lg">
              BoileriABI.ee
            </span>
          </Link>
        </div>

        {/* ---------- MENU CENTER (абсолютное позиционирование для идеального центра) ---------- */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          
          {/* Дропдаун */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-md font-medium cursor-pointer hover:text-primary-600 transition flex items-center gap-1">
              Teenused <span className="text-xs">▾</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent 
              align="center"
              className="bg-white shadow-xl rounded-xl p-2 min-w-[220px] mt-2"
            >
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/paigaldus" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Boileri paigaldus
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/remont" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Boileri remont
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/hooldus" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Hooldus
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/hadaabi" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Hädaabi 24/7
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/hinnad" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Hinnad
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/garantii" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Garantii
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <LandingHeaderMenuItem href="/meist">Meist</LandingHeaderMenuItem>
          <LandingHeaderMenuItem href="/kontakt">Kontakt</LandingHeaderMenuItem>
        </nav>

        {/* ---------- RIGHT BUTTONS ---------- */}
        <div className="flex justify-end items-center gap-3 z-10">
          
          {/* PHONE */}
          <Link
            href="tel:+37253684587"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-lg font-semibold border border-red-500 text-red-600 rounded-xl hover:bg-red-50 transition-all whitespace-nowrap"
          >
            53684587
          </Link>

          {/* WHATSAPP */}
          <LandingHeaderMenuItem
            href="https://wa.me/37253684587"
            type="button"
          >
            Whatsapp
          </LandingHeaderMenuItem>

          {/* SEARCH + THEME */}
          <SearchButton />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
