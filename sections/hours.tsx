'use client';

import { OpenStatus } from '@/components/open-status';
import { useLanguage } from '@/components/language-provider';
import { openingHours } from '@/data/site';
import { SectionTitle } from '@/components/section-title';

export const Hours = () => {
  const dayIndex = (new Date().getDay() + 6) % 7;
  const days = Object.entries(openingHours);
  const { day, t } = useLanguage();

  return (
    <section className="section-shell py-20">
      <SectionTitle eyebrow={t('hoursEyebrow')} title={t('hoursTitle')} />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="luxury-card p-6">
          {days.map(([dayName, range], i) => (
            <div key={dayName} className={`flex items-center justify-between border-b border-white/10 py-3 ${i === dayIndex ? 'text-accent' : ''}`}>
              <span>{day(dayName)}</span>
              <span>
                {!range ? t('closed') : 'mode' in range ? t('byAppointment') : `${range.open} - ${range.close}`}
              </span>
            </div>
          ))}
        </div>
        <OpenStatus />
      </div>
    </section>
  );
};
