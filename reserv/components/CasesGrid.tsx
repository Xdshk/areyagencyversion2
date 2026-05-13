"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motionPresets";

type CaseItem = {
  id: string;
  title: string;
  category: string;
  href: string;
  image: string;
};

const cases: CaseItem[] = [
  { id: "01", title: "Night Pulse", category: "Фестивальный кей-вижуал", href: "/works", image: "Неоновые градиенты и смелая типографика" },
  { id: "02", title: "Black Room", category: "Серия афиш", href: "/works", image: "Монохромные постеры с резкими акцентами" },
  { id: "03", title: "Shift", category: "Бренд-система", href: "/works", image: "Система айдентики для event-платформы" },
  { id: "04", title: "Loop City", category: "Motion-визуал", href: "/works", image: "Кампейн-графика с ритмом и динамикой" },
  { id: "05", title: "Voltage", category: "Маркетинг-креативы", href: "/works", image: "Контрастный набор для соцсетей и OOH" },
  { id: "06", title: "Signal", category: "Фестивальный брендинг", href: "/works", image: "Полный брендинг летнего фестиваля" },
];

const toDataUrl = (text: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#171717'/>
          <stop offset='45%' stop-color='#0d0d0d'/>
          <stop offset='100%' stop-color='#d946ef'/>
        </linearGradient>
      </defs>
      <rect width='1200' height='900' fill='url(#g)'/>
      <text x='70' y='830' font-size='40' fill='white' opacity='0.85' font-family='Arial, sans-serif'>${text}</text>
    </svg>`,
  )}`;

export default function CasesGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
      <motion.div
        className="mb-10 flex items-end justify-between gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight md:text-5xl">
          Избранные работы
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link href="/works" className="theme-nav-link text-sm text-white/70">
            Все проекты
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12, margin: "-40px" }}
        variants={staggerContainer}
      >
        {cases.map((item) => (
          <motion.article
            key={item.id}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01, transition: { type: "spring", stiffness: 420, damping: 26 } }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href={item.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-lg shadow-black/20 transition-shadow duration-300 group-hover:border-fuchsia-500/25 group-hover:shadow-fuchsia-500/10">
                <Image
                  src={toDataUrl(item.image)}
                  alt={`${item.title} превью проекта`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-medium transition-colors group-hover:text-fuchsia-200">{item.title}</p>
                  <p className="mt-1 text-sm text-white/55">{item.category}</p>
                </div>
                <span className="text-xs text-fuchsia-300">{item.id}</span>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
