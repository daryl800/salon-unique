'use client';

import { openingHours, holidayOverrides, type Weekday } from '@/data/site';
import { useLanguage } from '@/components/language-provider';

const days: Weekday[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const toMinutes = (value: string) => {
  const [h, m] = value.split(':').map(Number);
  return h * 60 + m;
};

export const getOpenState = (now = new Date()) => {
  const iso = now.toISOString().slice(0, 10);
  const holiday = holidayOverrides.find((h) => h.date === iso && h.closed);
  if (holiday) return { open: false, reason: holiday.label, currentDay: days[(now.getDay() + 6) % 7] as Weekday };

  const day = days[(now.getDay() + 6) % 7] as Weekday;
  const hours = openingHours[day];
  if (!hours) return { open: false, reason: 'closedToday', currentDay: day };
  if ('mode' in hours && hours.mode === 'appointment') return { open: false, reason: 'byAppointment', currentDay: day };
  if (!('open' in hours)) return { open: false, reason: 'closedToday', currentDay: day };

  const mins = now.getHours() * 60 + now.getMinutes();
  return { open: mins >= toMinutes(hours.open) && mins <= toMinutes(hours.close), reason: `${hours.open} - ${hours.close}`, currentDay: day };
};

export const OpenStatus = () => {
  const state = getOpenState();
  const { t } = useLanguage();

  return (
    <div className="rounded-xl border border-white/10 p-4 text-sm">
      <p className="font-medium text-accent">{state.open ? t('openNow') : t('closedNow')}</p>
      <p className="text-[var(--muted)]">{state.reason.includes(':') ? state.reason : t(state.reason)}</p>
    </div>
  );
};
