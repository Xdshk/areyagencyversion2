"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroShowcase from "./HeroShowcase";
import { fadeScale, fadeUp, staggerContainer } from "./motionPresets";

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[86vh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-2 lg:gap-16 md:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={staggerContainer}
        className="relative z-[1]"
      >
        <motion.p variants={fadeUp} className="mb-6 text-xs uppercase tracking-[0.26em] text-zinc-400">
          Креативное агентство
        </motion.p>

        <motion.div variants={fadeScale} className="overflow-hidden">
          <h1 className="font-editorial max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.02em] md:text-7xl lg:text-8xl">
            Дизайн, который невозможно игнорировать
          </h1>
        </motion.div>

        <motion.span
          variants={fadeUp}
          className="mt-8 block h-px max-w-[160px] origin-left bg-gradient-to-r from-fuchsia-500/80 via-violet-400/70 to-transparent"
          aria-hidden
        />

        <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base text-white/70 md:text-lg">
          Афиши, визуал и брендинг для фестивалей и брендов.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/works"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors duration-300 hover:bg-zinc-200"
            >
              Смотреть работы
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="theme-nav-link inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white"
            >
              Начать проект
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative z-[1] w-full max-lg:max-w-lg max-lg:mx-auto"
      >
        <HeroShowcase />
      </motion.div>
    </section>
  );
}
