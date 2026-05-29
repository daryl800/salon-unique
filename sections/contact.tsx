'use client';

import { SectionTitle } from '@/components/section-title';
import { useLanguage } from '@/components/language-provider';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-shell py-20">
      <SectionTitle eyebrow={t('contactEyebrow')} title={t('contactTitle')} />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="luxury-card p-6 text-sm">
          <p>Salon Unique, Sibyllegatan 51, 114 43 Stockholm</p>
          <p className="mt-2"><a href="tel:086620666" className="underline">08-662 06 66, 0707736215</a></p>
          <p className="mt-2"><a href="mailto:hello@salonunique.com" className="underline">hello@salonunique.com</a></p>
          <p className="mt-2">{t('transport')}</p>
          <a href="https://wa.me/46707736215" className="mt-4 inline-block rounded-full border border-accent px-4 py-2 text-accent">WhatsApp</a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title={t('salonMap')}
            src="https://maps.google.com/maps?q=Stockholm&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
