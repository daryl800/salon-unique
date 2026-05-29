'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionTitle } from '@/components/section-title';
import { testimonials } from '@/data/site';
import { useLanguage } from '@/components/language-provider';
import { reviewKey } from '@/lib/i18n-keys';

export const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-shell py-20">
      <SectionTitle eyebrow={t('reviewsEyebrow')} title={t('reviewsTitle')} subtitle={t('reviewsSubtitle')} />
      <div className="luxury-card relative min-h-56 overflow-hidden p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(212,175,55,0.18),transparent_35%)]" />
        <motion.div
          className="pointer-events-none absolute -left-20 top-0 h-full w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['0%', '700%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="text-accent">{'★'.repeat(testimonials[index].stars)}</p>
            <p className="mt-2 font-serif text-6xl leading-none text-accent/35">“</p>
            <p className="-mt-5 font-serif text-3xl">{t(reviewKey(testimonials[index].name))}”</p>
            <p className="mt-4 text-sm text-[var(--muted)]">{testimonials[index].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
