'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { MagneticLink } from '@/components/magnetic-link';
import { useLanguage } from '@/components/language-provider';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const frameScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.92]);
  const frameRadius = useTransform(scrollYProgress, [0, 0.22], ['0rem', '2.25rem']);
  const frameY = useTransform(scrollYProgress, [0, 0.22], [0, 26]);
  const { t, toggle } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ scale: frameScale, borderRadius: frameRadius, y: frameY }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=2200&q=80"
          alt="Luxury women's hairstyle"
          className="h-full w-full object-cover"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(212,175,55,0.38),transparent_36%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,rgba(212,175,55,0.2),transparent_42%)]" />
      </motion.div>

      <div className="section-shell relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between py-6 text-white">
          <p className="font-serif text-2xl">{t('brandName')}</p>
          <div className="flex items-center gap-2">
            <button onClick={toggle} className="rounded-full border border-white/30 px-3 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white/10">
              {t('language')}
            </button>
            <ThemeToggle />
          </div>
        </header>

        <div className="my-auto max-w-5xl text-white">
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">
            {t('heroEyebrow')}
          </motion.p>
          <div className="relative inline-block overflow-hidden">
            <motion.h1 initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="font-serif text-5xl leading-[0.97] md:text-8xl">
              {t('heroTitleA')}
              <br />
              {t('heroTitleB')}
            </motion.h1>
            <motion.span
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-accent/35 to-transparent"
              animate={{ x: ['0%', '430%'] }}
              transition={{ delay: 1, duration: 1.6, ease: 'easeOut' }}
            />
          </div>
          <motion.p initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            {t('heroBody')}
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-wrap gap-4">
            <MagneticLink href="#booking" className="rounded-full bg-accent px-8 py-3 font-medium text-ink shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition hover:bg-accent-muted">
              {t('bookAppointment')}
            </MagneticLink>
            <MagneticLink href="#gallery" className="rounded-full border border-white/40 px-8 py-3 font-medium transition hover:bg-white/10">
              {t('viewStyles')}
            </MagneticLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
