'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { SectionTitle } from '@/components/section-title';
import { galleryItems } from '@/data/site';
import { useLanguage } from '@/components/language-provider';
import { categoryKey } from '@/lib/i18n-keys';

const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];

export const Gallery = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { t } = useLanguage();

  const items = useMemo(
    () => (active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active]
  );

  const current = items.find((i) => i.id === lightbox);
  const label = (category: string) => (category === 'All' ? t('galleryAll') : t(categoryKey(category)));

  return (
    <section id="gallery" className="section-shell py-20">
      <SectionTitle eyebrow={t('galleryEyebrow')} title={t('galleryTitle')} subtitle={t('gallerySubtitle')} />
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button key={category} onClick={() => setActive(category)} className={`rounded-full px-4 py-2 text-sm transition ${active === category ? 'bg-accent text-ink' : 'bg-black/5 dark:bg-white/5'}`}>
            {label(category)}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-2 gap-4 md:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.button
              layout
              key={item.id}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="group mb-4 block w-full overflow-hidden rounded-2xl"
              onClick={() => setLightbox(item.id)}
            >
              <div className="relative">
                <Image src={item.image} alt={label(item.category)} width={700} height={900} className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="pointer-events-none absolute bottom-3 left-3 text-sm uppercase tracking-[0.18em] text-white opacity-0 transition group-hover:opacity-100">
                  {label(item.category)}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {current && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6" onClick={() => setLightbox(null)}>
            <div className="max-w-4xl">
              <Image src={current.image} alt={label(current.category)} width={1200} height={1400} className="max-h-[80vh] w-auto rounded-xl object-contain" />
              <p className="mt-3 text-center text-white">{label(current.category)}{'before' in current ? ` - ${t('beforeAfterReady')}` : ''}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
