'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ContrastIcon } from '../icons/icons';

export const ModeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle: () => void = () => {
    const currentDisplayedTheme = theme === 'system' ? resolvedTheme : theme;
    const newTheme = currentDisplayedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <button
        className="fixed right-6 bottom-6 rounded-lg border border-neutral-300/40 bg-white p-2 shadow-md transition-all duration-200 hover:scale-[105%] active:scale-[90%] dark:border-neutral-700/40 dark:bg-neutral-900 dark:shadow-black/40"
        aria-label="Toggle dark mode"
        type="button"
        disabled
      >
        <ContrastIcon className="size-6 text-stone-800 transition-colors duration-150 dark:text-stone-100" />
      </button>
    );
  }

  return (
    <button
      className="fixed right-6 bottom-6 rounded-lg border border-neutral-300/40 bg-white p-2 shadow-md transition-all duration-200 hover:scale-[105%] active:scale-[90%] dark:border-neutral-700/40 dark:bg-neutral-900 dark:shadow-black/40"
      aria-label="Toggle dark mode"
      onClick={handleToggle}
      type="button"
    >
      <ContrastIcon className="size-6 text-stone-800 transition-colors duration-150 dark:text-stone-100" />
    </button>
  );
};
