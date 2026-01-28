import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kasutajatingimused',
  description: 'Boileriabi kasutajatingimused. Teave teenuse osutamise tingimuste kohta.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
