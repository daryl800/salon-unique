'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from '@/components/language-provider';

export const StickyNav = () => {
  const [show, setShow] = useState(false);
  const { t, toggle } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-3 z-[95]"
        >
          <div className="section-shell">
            <div className="glass flex items-center justify-between rounded-full border border-white/15 px-4 py-2 text-sm shadow-luxe md:px-5">
              <a href="#" className="font-serif text-lg">{t('brandName')}</a>

              <div className="hidden items-center gap-5 md:flex">
                <a href="#services" className="hover:text-accent">{t('navServices')}</a>
                <a href="#gallery" className="hover:text-accent">{t('navGallery')}</a>
                <a href="#booking" className="hover:text-accent">{t('navBooking')}</a>
                <a href="#contact" className="hover:text-accent">{t('navContact')}</a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggle}
                  className="rounded-full border border-white/30 px-3 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-white/10"
                >
                  {t('language')}
                </button>
                <ThemeToggle />
                <a href="#booking" className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-ink md:text-sm">
                  {t('bookAppointment')}
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
