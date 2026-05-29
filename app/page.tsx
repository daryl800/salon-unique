import Script from 'next/script';
import { Hero } from '@/sections/hero';
import { Gallery } from '@/sections/gallery';
import { Services } from '@/sections/services';
import { Booking } from '@/sections/booking';
import { Hours } from '@/sections/hours';
import { Stylists } from '@/sections/stylists';
import { Reviews } from '@/sections/reviews';
import { Contact } from '@/sections/contact';
import { ExtraSections } from '@/sections/extra';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';
import { SectionReveal } from '@/components/section-reveal';
import { Manifesto } from '@/sections/manifesto';
import { BrandProof } from '@/components/brand-proof';
import { Press } from '@/sections/press';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Salon Unique',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sibyllegatan 51',
    addressLocality: 'Stockholm',
    postalCode: '114 43'
  },
  telephone: '08-662 06 66, 0707736215'
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandProof />
      <SectionReveal delay={0.01}><Manifesto /></SectionReveal>
      <SectionReveal delay={0.015}><Press /></SectionReveal>
      <SectionReveal delay={0.02}><Gallery /></SectionReveal>
      <SectionReveal delay={0.05}><Services /></SectionReveal>
      <SectionReveal delay={0.08}><Booking /></SectionReveal>
      <SectionReveal delay={0.1}><Hours /></SectionReveal>
      <SectionReveal delay={0.12}><Stylists /></SectionReveal>
      <SectionReveal delay={0.14}><Reviews /></SectionReveal>
      <SectionReveal delay={0.16}><Contact /></SectionReveal>
      <SectionReveal delay={0.18}><ExtraSections /></SectionReveal>
      <Footer />
      <FloatingActions />
      <Script id="schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
