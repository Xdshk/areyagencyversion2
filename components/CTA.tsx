"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motionPresets";

export default function CTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-10 md:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={staggerContainer}
        className="rounded-3xl border border-white/15 bg-white/[0.03] px-6 py-12 text-center md:px-10"
      >
        <motion.h2 variants={fadeUp} className="font-editorial text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
          Запускаем смелый проект?
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base text-white/65">
          Афиши, визуал и фестивальный брендинг с четкой идеей и быстрым продакшеном.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link href="/works" className="theme-nav-link inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-medium">
              Смотреть работы
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Начать проект
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
