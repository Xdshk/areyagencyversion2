import type { Metadata } from "next";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import AmbientBackdrop from "../components/AmbientBackdrop";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";

const brandFont = Great_Vibes({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Arey Agency — креативное агентство",
  description: "Афиши, визуал и брендинг для фестивалей и брендов",
};

const nav = [
  { href: "/", label: "Главная" },
  { href: "/works", label: "Работы" },
  { href: "/team", label: "Команда" },
  { href: "/contact", label: "Контакты" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark">
      <body className="theme-body antialiased">
        <AmbientBackdrop />
        <header className="theme-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
            <Link href="/" className={`theme-logo text-3xl text-white md:text-4xl ${brandFont.className}`}>
              Arey Agency
            </Link>
            <div className="flex items-center gap-4">
              <nav aria-label="Основная навигация" className="flex items-center gap-6">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href} className="theme-nav-link text-sm text-white/75">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
