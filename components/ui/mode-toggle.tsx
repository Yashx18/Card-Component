	"use client";

import { useTheme } from 'next-themes';
import { ContrastIcon } from '../icons/icons';

export const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="fixed right-6 bottom-6 p-2 rounded-lg bg-white dark:bg-neutral-900 hover:bg-neutral-200 hover:dark:bg-neutral-700 transition-colors duration-150 border border-neutral-300/40 dark:border-neutral-800/40 shadow-md"
      aria-label="Toggle dark mode"
      onClick={handleToggle}
      type="button"
    >
      <ContrastIcon className="size-6 text-stone-800 dark:text-stone-100  transition-colors duration-150" />
    </button>
  );
};
