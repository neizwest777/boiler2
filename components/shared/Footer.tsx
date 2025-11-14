import {
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink,
} from '@/components/landing';
import Image from 'next/image';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <LandingFooter
      className={className}
      title="BoileriABI.ee"
      description="Boilerite remont, hooldus ja paigaldus Tallinnas ja Harjumaal."
      withBackground={false}
      withBackgroundGlow={false}
      withBackgroundGradient={false}
      variant="primary"
      backgroundGlowVariant="primary"
      logoComponent={
        <div className="flex items-center gap-3">
          <Image
            src="/static/images/logo.png"
            alt="BoileriABI.ee logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full shadow-md"
          />
          <span className="text-2xl font-bold text-primary-900 tracking-wide">
            BoileriABI.ee
          </span>
        </div>
      }
      footnote={
        <div className="text-center p-6 text-gray-500 text-sm border-t border-gray-200 tracking-wide">
          © {new Date().getFullYear()} BoileriABI.ee — Kõik õigused kaitstud.
        </div>
      }
    >
      {/* === TEENUSED === */}
      <LandingFooterColumn
        title="Teenused"
        className="text-[15px] leading-relaxed tracking-wide space-y-2"
      >
        <LandingFooterLink href="/paigaldus">Boileri paigaldus</LandingFooterLink>
        <LandingFooterLink href="/remont">Boileri remont</LandingFooterLink>
        <LandingFooterLink href="/hooldus">Boileri hooldus</LandingFooterLink>
        <LandingFooterLink href="/hadaabi">Hädaabi 24/7</LandingFooterLink>
      </LandingFooterColumn>

      {/* === ETTEVÕTE === */}
      <LandingFooterColumn
        title="Ettevõte"
        className="text-[15px] leading-relaxed tracking-wide space-y-2"
      >
        <LandingFooterLink href="/meist">Meist</LandingFooterLink>
        <LandingFooterLink href="/kontakt">Kontakt</LandingFooterLink>
        <LandingFooterLink href="/hinnad">Hinnad</LandingFooterLink>
        <LandingFooterLink href="/garantii">Garantii</LandingFooterLink>
      </LandingFooterColumn>

      {/* === KONTAKT (ПРОКАЧАНО) === */}
      <LandingFooterColumn
        title="Kontakt"
        className="text-[15px] leading-[1.6] tracking-wide space-y-3"
      >
        <div className="flex items-center gap-3">
          <span className="text-red-600 text-[18px]">📞</span>
          <LandingFooterLink
            href="tel:+37253684587"
            className="font-medium hover:text-primary-700 transition-colors"
          >
            +372 5368 4587
          </LandingFooterLink>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-700 text-[18px]">✉️</span>
          <LandingFooterLink
            href="mailto:info@prism.ee"
            className="font-medium hover:text-primary-700 transition-colors"
          >
            info@prism.ee
          </LandingFooterLink>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-600 text-[18px]">📍</span>
          <LandingFooterLink
            href="/kontakt"
            className="font-medium hover:text-primary-700 transition-colors"
          >
            Tallinn, Eesti
          </LandingFooterLink>
        </div>
      </LandingFooterColumn>
    </LandingFooter>
  );
};

export default Footer;
