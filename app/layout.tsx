import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LuxuryCursor } from '@/components/luxury-cursor';
import { IntroLoader } from '@/components/intro-loader';
import { StickyNav } from '@/components/sticky-nav';
import { LanguageProvider } from '@/components/language-provider';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://salonunique.example'),
  title: 'Salon Unique | Luxury Hair Atelier',
  description: 'Ultra-premium boutique salon website with booking, gallery, stylists, and luxury brand UX.',
  openGraph: {
    title: 'Salon Unique | Luxury Hair Atelier',
    description: 'High-end salon experience in Stockholm',
    images: ['/og-luxury.svg'],
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased bg-grain`}>
        <ThemeProvider>
          <LanguageProvider>
            <IntroLoader />
            <LuxuryCursor />
            <StickyNav />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
