'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { useLanguage } from '@/components/language-provider';

export const ThemeToggle = () => {
  const { dark, toggle } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-white/20 bg-black/20 p-2 text-white transition hover:scale-105"
      aria-label={t('toggleTheme')}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
