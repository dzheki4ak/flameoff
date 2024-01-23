import { Source_Sans_3 } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.scss';

const pageFont = Source_Sans_3({ subsets: ['latin'] });

export const metadata = {
  viewport: 'width=device-width,initial-scale=1.0',
  title:
    'Fire Rated Intumescent and Fire Retardant Spray Paints | FlameOFF®',
  description:
    'FlameOFF® Coatings manufactures Intumescent Fire Resistant Paint & Fire Retardant Spray tested to ASTM E-119, ASTM E-84, ICC-ES Listed, NFPA 701.',
  keywords:
    'FlameOFF® Coatings Inc., intumescent, fire rated paint, fire resistant paint, fire retardant spray, astm e119, fire paint, fireproof paint , intumescent thickness, fire protection',
  favicon: 'icon.ico',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pageFont.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
