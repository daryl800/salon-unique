'use client';

import { SectionTitle } from '@/components/section-title';
import { services } from '@/data/site';
import { formatMinutes } from '@/lib/utils';
import { useLanguage } from '@/components/language-provider';
import { serviceCategoryKey, serviceTitleKey } from '@/lib/i18n-keys';

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20">
      <div className="section-shell">
        <SectionTitle eyebrow={t('servicesEyebrow')} title={t('servicesTitle')} subtitle={t('servicesSubtitle')} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="luxury-card p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-accent">{t(serviceCategoryKey(service.category))}</p>
              <h3 className="mt-2 font-serif text-2xl">{t(serviceTitleKey(service.title))}</h3>
              <p className="mt-4 text-sm text-[var(--muted)]">{t('from')} €{service.priceFrom}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{t('approx')} {formatMinutes(service.duration)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
