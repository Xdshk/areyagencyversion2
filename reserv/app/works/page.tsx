"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CasesGrid from "../../components/CasesGrid";
import { fadeUp, staggerContainer } from "../../components/motionPresets";

export default function WorksPage() {
  return (
    <main className="pb-20 pt-28">
      <motion.section
        className="mx-auto w-full max-w-7xl px-6 md:px-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-fuchsia-400">
          Работы
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          Визуальные системы, которые останавливают скролл
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-white/70">
          Избранные проекты в фестивальном брендинге, афишах и рекламном визуале.
        </motion.p>
      </motion.section>
      <CasesGrid />
      <motion.section
        className="mx-auto w-full max-w-7xl px-6 md:px-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
          <Link href="/contact" className="theme-nav-link text-sm text-white/70">
            Нужен такой же уровень? Начать проект.
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
