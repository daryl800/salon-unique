'use client';

import { SectionTitle } from '@/components/section-title';
import { useLanguage } from '@/components/language-provider';

const faqs = [
  { q: 'faq1Q', a: 'faq1A' },
  { q: 'faq2Q', a: 'faq2A' },
  { q: 'faq3Q', a: 'faq3A' },
  { q: 'faq4Q', a: 'faq4A' }
];

const aiCards = [
  { title: 'aiQuizTitle', text: 'aiQuizText' },
  { title: 'aiPreviewTitle', text: 'aiPreviewText' },
  { title: 'aiTrendingTitle', text: 'aiTrendingText' }
];

export const ExtraSections = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="section-shell py-20">
        <SectionTitle eyebrow={t('socialEyebrow')} title={t('socialTitle')} subtitle={t('socialSubtitle')} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-black/10 to-accent/20" />
          ))}
        </div>
        <a href="https://www.instagram.com/salong_unique/" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full border border-accent px-5 py-3 text-sm font-medium text-accent transition hover:bg-accent hover:text-ink">Instagram @salong_unique</a>
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow={t('vipEyebrow')} title={t('vipTitle')} />
        <div className="luxury-card p-8">
          <p className="font-serif text-3xl">{t('vipCardTitle')}</p>
          <p className="mt-2 text-[var(--muted)]">{t('vipBody')}</p>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow={t('campaignsEyebrow')} title={t('campaignsTitle')} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="luxury-card p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">{t('limited')}</p>
            <h3 className="mt-2 font-serif text-3xl">{t('promoSummerTitle')}</h3>
            <p className="mt-2 text-[var(--muted)]">{t('promoSummerSubtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow={t('aiEyebrow')} title={t('aiTitle')} />
        <div className="grid gap-4 md:grid-cols-3">
          {aiCards.map((card) => (
            <div key={card.title} className="luxury-card p-6">
              <h3 className="font-serif text-2xl">{t(card.title)}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{t(card.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionTitle eyebrow={t('faqEyebrow')} title={t('faqTitle')} />
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="luxury-card p-5">
              <summary className="cursor-pointer font-medium">{t(item.q)}</summary>
              <p className="mt-2 text-sm text-[var(--muted)]">{t(item.a)}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
};
