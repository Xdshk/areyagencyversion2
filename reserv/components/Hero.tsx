"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeScale, fadeUp, staggerContainer } from "./motionPresets";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[86vh] w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:px-10">
      <motion.div
        className="pointer-events-none absolute -right-16 top-28 hidden h-48 w-48 rounded-full border border-fuchsia-500/20 md:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={staggerContainer}
        className="relative z-[1]"
      >
        <motion.p variants={fadeUp} className="mb-6 text-xs uppercase tracking-[0.26em] text-fuchsia-400">
          Креативное агентство
        </motion.p>

        <motion.div variants={fadeScale} className="overflow-hidden">
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Дизайн, который невозможно игнорировать
          </h1>
        </motion.div>

        <motion.span
          variants={fadeUp}
          className="mt-8 block h-px max-w-[120px] origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-transparent"
          aria-hidden
        />

        <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base text-white/70 md:text-lg">
          Афиши, визуал и брендинг для фестивалей и брендов.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/works"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-fuchsia-400"
            >
              Смотреть работы
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="theme-nav-link inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white"
            >
              Начать проект
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
