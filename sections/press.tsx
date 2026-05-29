'use client';

import { SectionTitle } from '@/components/section-title';
import { useLanguage } from '@/components/language-provider';

const logos = ['pressLogo1', 'pressLogo2', 'pressLogo3', 'pressLogo4'];

export const Press = () => {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-20">
      <SectionTitle eyebrow={t('pressEyebrow')} title={t('pressTitle')} subtitle={t('pressSubtitle')} />
      <div className="grid gap-3 md:grid-cols-4">
        {logos.map((logo) => (
          <div key={logo} className="luxury-card flex min-h-24 items-center justify-center px-5 text-center font-serif text-xl text-[var(--muted)]">
            {t(logo)}
          </div>
        ))}
      </div>
    </section>
  );
};
