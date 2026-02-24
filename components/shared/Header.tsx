"use client";
import { LandingHeader, LandingHeaderMenuItem } from "@/components/landing";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const Header = ({ className }: { className?: string }) => {
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
        <div className="flex items-center gap-2.5">
          <Image
            src="/static/images/logo.webp"
            alt="Boileriabi"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
          />
          <span className="text-xl font-bold text-gray-900">
            Boileri<span className="text-blue-600">ABI</span>
          </span>
        </div>
      }
      withBackground={false}
      variant="primary"
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium cursor-pointer text-gray-600 hover:text-gray-900 transition">
          Teenused ▾
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white shadow-xl rounded-xl p-2 min-w-[220px] border border-gray-100">
          <DropdownMenuItem asChild>
            <Link href="/paigaldus" className="rounded-lg">Boileri paigaldus</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/remont" className="rounded-lg">Boileri remont</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/hooldus" className="rounded-lg">Hooldus</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/hadaabi" className="rounded-lg">Hädaabi 24/7</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/hinnad" className="rounded-lg">Hinnad</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <LandingHeaderMenuItem href="/meist">Meist</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/garantii">Garantii</LandingHeaderMenuItem>
      <LandingHeaderMenuItem href="/kontakt">Kontakt</LandingHeaderMenuItem>

      <a
        href="tel:+37253684587"
        onClick={() => track("click_phone", "Header Phone Button")}
        className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.359 4.077a1 1 0 01-.26 1.01l-1.6 1.6a16 16 0 006.364 6.364l1.6-1.6a1 1 0 011.01-.26l4.077 1.359A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1C9.82 23 1 14.18 1 4V3a2 2 0 012-2h1z" />
        </svg>
        5368 4587
      </a>

      <a
        href="https://wa.me/37253684587"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_whatsapp", "Header Whatsapp Button")}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-green-700 hover:text-green-900 hover:bg-green-50 rounded-lg transition"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.229A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.4 0-4.637-.79-6.44-2.124l-.45-.337-2.784.731.745-2.72-.372-.555A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
        WhatsApp
      </a>
    </LandingHeader>
  );
};

export default Header;
