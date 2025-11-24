"use client";
import { LandingHeader, LandingHeaderMenuItem } from "@/components/landing";
import ThemeSwitch from "@/components/shared/ThemeSwitch";
import SearchButton from "@/components/search/SearchButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const Header = ({ className }: { className?: string }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
    <>
      <LandingHeader
        className={`${className} backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/50 w-full left-0 right-0`}
        fixed
        logoComponent={
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/static/images/logo.png"
                alt="Boileriabi - Boileri paigaldus ja remont Tallinnas"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-sm group-hover:bg-blue-500/30 transition-colors"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                BoileriABI
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Boileriteenused Tallinnas
              </span>
            </div>
          </Link>
        }
        withBackground={false}
        variant="primary"
      >
        {/* Используем flex для распределения пространства */}
        <div className="flex items-center justify-between w-full gap-4">
          
          {/* Левая часть - навигация */}
          <div className="flex items-center gap-2 flex-1">
            {/* ---------------------- */}
            {/* 🎯 ПРЕМИУМ МЕНЮ УСЛУГ */}
            {/* ---------------------- */}
            <DropdownMenu onOpenChange={setIsServicesOpen}>
              <DropdownMenuTrigger className="
                px-4 py-2 
                text-md font-semibold
                bg-gradient-to-r from-blue-50 to-cyan-50
                dark:from-blue-900/20 dark:to-cyan-900/20
                border border-blue-200 dark:border-blue-800
                text-blue-700 dark:text-blue-300
                rounded-xl
                hover:from-blue-100 hover:to-cyan-100
                dark:hover:from-blue-800/30 dark:hover:to-cyan-800/30
                hover:shadow-lg
                hover:scale-105
                transition-all duration-300
                flex items-center gap-2
                group
              ">
                <span className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>
                  🔧
                </span>
                Teenused
                <svg 
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="
                bg-white dark:bg-gray-800 
                shadow-2xl 
                rounded-2xl 
                p-4 
                min-w-[280px]
                border border-gray-200 dark:border-gray-700
                backdrop-blur-lg
              ">
                {/* 📍 ОСНОВНЫЕ УСЛУГИ */}
                <div className="mb-3">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-2">
                    Põhiteenused
                  </h3>
                  <div className="space-y-1">
                    <DropdownMenuItem asChild>
                      <Link href="/paigaldus" className="
                        flex items-center gap-3 px-3 py-3
                        text-gray-700 dark:text-gray-300
                        hover:bg-blue-50 dark:hover:bg-blue-900/20
                        hover:text-blue-600 dark:hover:text-blue-400
                        rounded-xl
                        transition-all duration-200
                        group/item
                      ">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                          🏠
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Paigaldus</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Professionaalne paigaldus</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/remont" className="
                        flex items-center gap-3 px-3 py-3
                        text-gray-700 dark:text-gray-300
                        hover:bg-red-50 dark:hover:bg-red-900/20
                        hover:text-red-600 dark:hover:text-red-400
                        rounded-xl
                        transition-all duration-200
                        group/item
                      ">
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                          ⚡
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Remont</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Kiire parandus 24/7</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/hooldus" className="
                        flex items-center gap-3 px-3 py-3
                        text-gray-700 dark:text-gray-300
                        hover:bg-green-50 dark:hover:bg-green-900/20
                        hover:text-green-600 dark:hover:text-green-400
                        rounded-xl
                        transition-all duration-200
                        group/item
                      ">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                          🛡️
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Hooldus</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Ennetav hooldus</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

                {/* 🎯 ГЕО-УСЛУГИ */}
                <div className="mb-3">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-2">
                    Teenused Tallinnas
                  </h3>
                  <div className="grid grid-cols-1 gap-1">
                    <DropdownMenuItem asChild>
                      <Link href="/boileri-paigaldus-tallinna-piirkonnas" className="
                        px-3 py-2 text-sm
                        text-blue-600 dark:text-blue-400
                        hover:bg-blue-50 dark:hover:bg-blue-900/20
                        rounded-lg
                        transition-colors
                      ">
                        🎯 Paigaldus Tallinnas
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/boileri-remont-tallinna-piirkonnas" className="
                        px-3 py-2 text-sm
                        text-red-600 dark:text-red-400
                        hover:bg-red-50 dark:hover:bg-red-900/20
                        rounded-lg
                        transition-colors
                      ">
                        🚨 Remont Tallinnas
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/boileri-hooldus-tallinna-piirkonnas" className="
                        px-3 py-2 text-sm
                        text-green-600 dark:text-green-400
                        hover:bg-green-50 dark:hover:bg-green-900/20
                        rounded-lg
                        transition-colors
                      ">
                        🛡️ Hooldus Tallinnas
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

                {/* 📞 ЭКСТРЕННЫЕ ССЫЛКИ */}
                <div className="space-y-1">
                  <DropdownMenuItem asChild>
                    <Link href="/hadaabi" className="
                      flex items-center gap-2 px-3 py-2
                      text-orange-600 dark:text-orange-400
                      hover:bg-orange-50 dark:hover:bg-orange-900/20
                      rounded-lg
                      transition-colors
                      font-semibold
                    ">
                      🆘 Hädaabi 24/7
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/hinnad" className="
                      flex items-center gap-2 px-3 py-2
                      text-gray-700 dark:text-gray-300
                      hover:bg-gray-50 dark:hover:bg-gray-700
                      rounded-lg
                      transition-colors
                    ">
                      💰 Hinnakiri
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 📝 ОСНОВНАЯ НАВИГАЦИЯ - КОМПАКТНАЯ */}
            <div className="flex items-center gap-1">
              <LandingHeaderMenuItem 
                href="/meist" 
                className="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold text-sm"
              >
                Meist
              </LandingHeaderMenuItem>
              
              <LandingHeaderMenuItem 
                href="/garantii" 
                className="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold text-sm"
              >
                Garantii
              </LandingHeaderMenuItem>
              
              <LandingHeaderMenuItem 
                href="/kontakt" 
                className="px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold text-sm"
              >
                Kontakt
              </LandingHeaderMenuItem>
            </div>
          </div>

          {/* Правая часть - контакты и поиск */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* 📞 ТЕЛЕФОН - ШИРОКАЯ ВЕРСИЯ */}
            <a
              href="tel:+37253684587"
              onClick={() => track("click_phone", "Header Phone Button")}
              className="
                flex items-center gap-2
                px-4 py-2
                text-base font-bold
                bg-gradient-to-r from-green-500 to-emerald-500
                hover:from-green-600 hover:to-emerald-600
                text-white
                rounded-xl
                shadow-lg
                hover:shadow-xl
                hover:scale-105
                transform
                transition-all duration-300
                group/phone
                relative overflow-hidden
                whitespace-nowrap
                min-w-[140px] justify-center
              "
            >
              <div className="absolute inset-0 bg-white/20 group-hover/phone:bg-white/30 transition-colors"></div>
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  📞
                </div>
                <span className="text-shadow">5368 4587</span>
              </div>
            </a>

            {/* 💬 WHATSAPP - КОМПАКТНЫЙ */}
            <a
              href="https://wa.me/37253684587"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("click_whatsapp", "Header Whatsapp Button")}
              className="
                flex items-center gap-1
                px-3 py-2
                text-sm font-semibold
                bg-gradient-to-r from-green-500 to-green-600
                hover:from-green-600 hover:to-green-700
                text-white
                rounded-xl
                shadow-lg
                hover:shadow-xl
                hover:scale-105
                transform
                transition-all duration-300
                group/whatsapp
                whitespace-nowrap
              "
            >
              <span className="text-lg">💬</span>
              <span>WhatsApp</span>
            </a>

            {/* 🔍 ПОИСК И ТЕМА */}
            <div className="flex items-center gap-2">
              <SearchButton />
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </LandingHeader>

      {/* Глобальные стили для фиксированного хедера */}
      <style jsx global>{`
        /* Исправление для фиксированного хедера */
        [data-radix-landing-header] {
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
        }
        
        .landing-header[data-fixed="true"] {
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
        }
        
        /* Обеспечиваем правильную ширину контейнера внутри хедера */
        .landing-header > div {
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Исправление для мобильных устройств */
        @media (max-width: 768px) {
          .landing-header {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
