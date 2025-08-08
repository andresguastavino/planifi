'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

   if (!mounted) return null;

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
<div className="bg-background text-foreground font-sans">
  Este bloque debería cambiar de color con el theme
</div>

    
      <h1>{t('title')}</h1>
      <Link href="/about">{t('logout')}</Link>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Cambiar a {theme === 'dark' ? 'claro' : 'oscuro'}
    </button>
    </div>
  );
}