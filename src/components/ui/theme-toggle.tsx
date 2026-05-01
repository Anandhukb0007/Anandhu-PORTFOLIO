"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 transition-all hover:scale-105 hover:border-emerald-400/80 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
    >
      {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
    </button>
  );
}
