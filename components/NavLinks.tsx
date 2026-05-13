"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const nav = [
    { href: "/", label: "Главная" },
    { href: "/works", label: "Работы" },
    { href: "/team", label: "Команда" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <nav aria-label="Основная навигация" className="flex items-center gap-6">
      {nav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`theme-nav-link text-sm transition-colors duration-200 ${
              active ? "text-white font-medium" : "text-white/75 hover:text-white/90"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}