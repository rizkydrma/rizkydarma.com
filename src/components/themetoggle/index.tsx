'use client';
import SunIcon from '@/components/themetoggle/SunIcon';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import MoonIcon from './Moon';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {mounted ? <>{theme === 'light' ? <MoonIcon /> : <SunIcon />}</> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
