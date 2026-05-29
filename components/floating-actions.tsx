'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/language-provider';

export const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href="#booking" className="fixed bottom-5 right-5 z-40 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-luxe md:hidden">
        {t('bookNow')}
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-5 z-40 rounded-full border border-white/20 bg-black/60 p-3 text-white"
          aria-label={t('backToTop')}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
};
