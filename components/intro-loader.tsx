'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/language-provider';

export const IntroLoader = () => {
  const [show, setShow] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const id = window.setTimeout(() => setShow(false), 1250);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55 } }}
        >
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="font-serif text-5xl text-white md:text-7xl">{t('brandName')}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-accent">{t('atelier')}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
