"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? "dark";
    queueMicrotask(() => {
      setTheme(saved);
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle rounded-full border border-white/20 bg-white/[0.03] p-2 text-base leading-none transition-colors hover:border-zinc-400"
      aria-label="Переключить тему"
      title="Переключить тему"
    >
      {mounted ? (theme === "dark" ? "🌙" : "☀️") : "🌙"}
    </button>
  );
}
