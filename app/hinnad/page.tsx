"use client";

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
    <header className="w-full fixed top-0 left-0 z-[50] bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative w-full">

        {/* ------------------ ЛОГО СЛЕВА ------------------ */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/static/images/logo.png"
            alt="BoileriABI.ee logo"
            width={38}
            height={32}
            className="h-8 w-8 rounded-full"
          />

          <span className="text-primary-900 font-semibold text-lg">
            BoileriABI.ee
          </span>
        </Link>

        {/* ------------------ МЕНЮ ПО ЦЕНТРУ ------------------ */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">

          <Link
            href="/"
            className="text-gray-700 hover:text-primary-600 transition font-medium"
          >
            Avaleht
          </Link>

          {/* Teenused dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-md font-medium cursor-pointer hover:text-primary-600 transition flex items-center gap-1">
              Teenused
            </DropdownMenuTrigger>

            <DropdownMenuContent align="center" className="bg-white shadow-xl rounded-xl p-2 min-w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/paigaldus" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Boileri paigaldus
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/hooldus" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Boileri hooldus
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/remont" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Boileri remont
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/hadaabi" className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Hädaabi 24/7
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/hinnad"
            className="text-gray-700 hover:text-primary-600 transition font-medium"
          >
            Hinnad
          </Link>

          <Link
            href="/meist"
            className="text-gray-700 hover:text-primary-600 transition font-medium"
          >
            Meist
          </Link>

          <Link
            href="/kontakt"
            className="text-gray-700 hover:text-primary-600 transition font-medium"
          >
            Kontakt
          </Link>
        </nav>

        {/* ------------------ СПРАВА (ПОИСК + ТЕМА) ------------------ */}
        <div className="flex items-center gap-4">
          <SearchButton />
          <ThemeSwitch />
        </div>

      </div>
    </header>
  );
};

export default Header;
