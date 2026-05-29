'use client';

import { useLanguage } from '@/components/language-provider';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-white/10 py-12">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div>
          <p className="font-serif text-2xl">{t('brandName')}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{t('footerBody')}</p>
        </div>
        <div>
          <p className="text-sm">{t('quickLinks')}</p>
          <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
            <li><a href="#services">{t('navServices')}</a></li>
            <li><a href="#gallery">{t('navGallery')}</a></li>
            <li><a href="#booking">{t('navBooking')}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm">{t('social')}</p>
          <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]"><li>Instagram</li><li>TikTok</li><li>Xiaohongshu</li></ul>
        </div>
        <div>
          <p className="text-sm">{t('legal')}</p>
          <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]"><li>{t('privacyPolicy')}</li><li>{t('terms')}</li></ul>
        </div>
      </div>
      <p className="section-shell mt-10 text-xs text-[var(--muted)]">© {new Date().getFullYear()} {t('brandName')}. {t('rightsReserved')}</p>
    </footer>
  );
};
