'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/section-title';
import { services, stylists } from '@/data/site';
import { serviceTitleKey } from '@/lib/i18n-keys';
import { useLanguage } from '@/components/language-provider';

const toSlots = (start = 10, end = 19, interval = 30) => {
  const slots: string[] = [];
  for (let t = start * 60; t < end * 60; t += interval) {
    const h = Math.floor(t / 60).toString().padStart(2, '0');
    const m = (t % 60).toString().padStart(2, '0');
    slots.push(`${h}:${m}`);
  }
  return slots;
};

const mockBooked = ['13:00', '14:30'];

export const Booking = () => {
  const [stylist, setStylist] = useState<string>(stylists[0].name);
  const [service, setService] = useState<string>(services[0].title);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const { t } = useLanguage();

  const slots = useMemo(() => toSlots(10, 20, 30), []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || mockBooked.includes(time)) return;
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <section id="booking" className="section-shell py-20">
        <motion.div className="luxury-card editorial-frame p-8 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm uppercase tracking-[0.28em] text-accent">{t('demoConfirmed')}</p>
          <h3 className="mt-2 font-serif text-4xl md:text-5xl">{t('previewReserved')}</h3>
          <p className="mt-4 text-[var(--muted)]">{date} {t('at')} {time} {t('with')} {stylist} {t('for')} {t(serviceTitleKey(service))}.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{t('liveBackendNext')}</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-shell py-20">
      <SectionTitle eyebrow={t('bookingEyebrow')} title={t('bookingTitle')} subtitle={t('bookingSubtitle')} />
      <form onSubmit={submit} className="luxury-card editorial-frame hover-light grid gap-6 p-6 md:grid-cols-2 md:p-8">
        <div className="md:col-span-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-accent">
          {t('demoMode')}
        </div>

        <label className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
          {t('stylist')}
          <select value={stylist} onChange={(e) => setStylist(e.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-transparent p-3 text-[var(--text)]">
            {stylists.map((s) => (
              <option key={s.name} value={s.name} className="text-black">{s.name}</option>
            ))}
          </select>
        </label>

        <label className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
          {t('service')}
          <select value={service} onChange={(e) => setService(e.target.value)} className="mt-2 w-full rounded-xl border border-white/15 bg-transparent p-3 text-[var(--text)]">
            {services.map((s) => (
              <option key={s.title} value={s.title} className="text-black">{t(serviceTitleKey(s.title))}</option>
            ))}
          </select>
        </label>

        <label className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
          {t('date')}
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="mt-2 w-full rounded-xl border border-white/15 bg-transparent p-3" />
        </label>

        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-[var(--muted)]">{t('timeSlot')}</p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {slots.map((slot) => {
              const disabled = mockBooked.includes(slot);
              return (
                <button
                  type="button"
                  key={slot}
                  onClick={() => !disabled && setTime(slot)}
                  className={`rounded-xl p-2 text-xs transition ${
                    disabled ? 'bg-red-500/20 text-red-300' : time === slot ? 'bg-accent text-ink' : 'bg-black/5 dark:bg-white/5 hover:bg-accent/20'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">{t('bookingInterval')}</p>
        </div>

        <button type="submit" className="rounded-full bg-accent px-6 py-3 font-medium text-ink shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition hover:bg-accent-muted md:col-span-2">
          {t('confirmPreview')}
        </button>
      </form>
    </section>
  );
};
