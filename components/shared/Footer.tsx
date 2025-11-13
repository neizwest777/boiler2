import {
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink,
} from '@/components/landing';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <LandingFooter
      className={className}
      title="BoileriABI.ee"
      description="Usaldusväärne torumehe teenus Tallinnas"
      withBackground={false}
      withBackgroundGlow={false}
      variant="primary"
      backgroundGlowVariant="primary"
      withBackgroundGradient={false}
      footnote={
        <div className="text-center p-6">
          <p>© BlueBoiler.ee. Kõik õigused kaitstud. </p>
        </div>
      }
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
    >
      <LandingFooterColumn title="Teenused">
        <LandingFooterLink href="/paigaldus">
          {'Boileri paigaldus'}
        </LandingFooterLink>
        <LandingFooterLink href="/remont">{'Boileri remont'}</LandingFooterLink>
        <LandingFooterLink href="/hooldus">{'Hooldus'}</LandingFooterLink>
        <LandingFooterLink href="/hadaabi">{'Hädaabi 24/7'}</LandingFooterLink>
      </LandingFooterColumn>
      <LandingFooterColumn title="Ettevõte">
        <LandingFooterLink href="/meist">{'Meist'}</LandingFooterLink>
        <LandingFooterLink href="/kontakt">{'Kontakt'}</LandingFooterLink>
        <LandingFooterLink href="/hinnad">{'Hinnad'}</LandingFooterLink>
        <LandingFooterLink href="/garantii">{'Garantii'}</LandingFooterLink>
      </LandingFooterColumn>
      <LandingFooterColumn title="Kontakt">
        <LandingFooterLink href="tel:+37253684587" variant="primary">
          {'+37253684587'}
        </LandingFooterLink>
        <LandingFooterLink href="mailto:info@prism.ee" variant="primary">
          {'info@prism.ee'}
        </LandingFooterLink>
        <LandingFooterLink href="/kontakt">
          {'Tallinn, Eesti'}
        </LandingFooterLink>
      </LandingFooterColumn>
    </LandingFooter>
  );
};

export default Footer;
