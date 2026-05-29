'use client';

import { SectionTitle } from '@/components/section-title';
import { useLanguage } from '@/components/language-provider';

const rituals = [
  { title: 'ritual1Title', text: 'ritual1Text' },
  { title: 'ritual2Title', text: 'ritual2Text' },
  { title: 'ritual3Title', text: 'ritual3Text' }
];

export const Manifesto = () => {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-24">
      <SectionTitle eyebrow={t('manifestoEyebrow')} title={t('manifestoTitle')} subtitle={t('manifestoSubtitle')} />
      <div className="grid gap-6 lg:grid-cols-12">
        <article className="luxury-card editorial-frame hover-light p-8 lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">{t('signatureEyebrow')}</p>
          <p className="mt-5 font-serif text-3xl leading-tight md:text-4xl">{t('signatureTitle')}</p>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">{t('signatureBody')}</p>
        </article>

        <div className="space-y-4 lg:col-span-5">
          {rituals.map((ritual) => (
            <article key={ritual.title} className="luxury-card hover-light p-6">
              <p className="font-serif text-2xl">{t(ritual.title)}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t(ritual.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
