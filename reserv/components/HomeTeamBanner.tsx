"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motionPresets";

export default function HomeTeamBanner() {
  return (
    <motion.section
      className="mx-auto w-full max-w-7xl px-6 py-8 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeUp}
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:flex md:items-center md:justify-between"
      >
        <p className="max-w-xl text-xl font-medium">
          Проекты делают люди. Познакомься с командой, которая собирает визуал под твою задачу.
        </p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/team"
            className="theme-nav-link mt-4 inline-flex rounded-full border border-white/30 px-6 py-3 text-sm md:mt-0"
          >
            Смотреть команду
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
