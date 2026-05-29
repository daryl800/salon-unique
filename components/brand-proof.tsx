'use client';

import { useLanguage } from '@/components/language-provider';

export const BrandProof = () => {
  const { t } = useLanguage();

  return (
    <section className="section-shell py-8">
      <div className="luxury-card flex flex-wrap items-center justify-between gap-4 p-5 text-sm">
        <p className="text-[var(--muted)]">{t('proofRating')}</p>
        <p className="text-[var(--muted)]">{t('proofClients')}</p>
        <p className="text-[var(--muted)]">{t('proofDistrict')}</p>
        <p className="text-[var(--muted)]">{t('proofLooks')}</p>
      </div>
    </section>
  );
};
