'use client';

import Image from 'next/image';
import { SectionTitle } from '@/components/section-title';
import { stylists } from '@/data/site';
import { useLanguage } from '@/components/language-provider';
import { stylistIntroKey, stylistSpecialtiesKey } from '@/lib/i18n-keys';

export const Stylists = () => {
  const { t } = useLanguage();

  return (
    <section id="stylists" className="section-shell py-20">
      <SectionTitle eyebrow={t('stylistsEyebrow')} title={t('stylistsTitle')} />
      <div className="grid gap-5 md:grid-cols-3">
        {stylists.map((stylist) => (
          <article key={stylist.name} className="luxury-card overflow-hidden">
            <Image src={stylist.image} alt={stylist.name} width={800} height={900} className="h-72 w-full object-cover" loading="lazy" />
            <div className="p-5">
              <h3 className="font-serif text-2xl">{stylist.name}</h3>
              <p className="text-sm text-[var(--muted)]">{stylist.experience} {t('yearsExperience')}</p>
              <p className="mt-3 text-sm">{t(stylistIntroKey(stylist.name))}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-accent">{t(stylistSpecialtiesKey(stylist.name))}</p>
              <a href="#booking" className="mt-4 inline-block text-sm underline">{t('bookWith')} {stylist.name.split(' ')[0]}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
