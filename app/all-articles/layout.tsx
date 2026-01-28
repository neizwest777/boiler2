import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artiklid',
  description: 'Kasulikud artiklid boileri paigalduse, remondi ja hoolduse kohta. Nouanded ja soovitused kogenud torumeestelt.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
