"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motionPresets";

const benefits = [
  "Быстро. Первые концепты за 48 часов.",
  "Точно. Дизайн не ради декора, а ради внимания.",
  "Гибко. От серии афиш до полной бренд-системы.",
  "Надежно. Дедлайны - часть процесса, а не опция.",
];

export default function Benefits() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="font-editorial col-span-full max-w-3xl text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
          Почему выбирают нас
        </motion.h2>

        {benefits.map((item) => (
          <motion.article
            key={item}
            variants={fadeUp}
            whileHover={{
              y: -4,
              scale: 1.01,
              transition: { type: "spring", stiffness: 380, damping: 28 },
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-[box-shadow] duration-300 hover:border-zinc-500/30 hover:shadow-lg hover:shadow-black/20"
          >
            <p className="text-lg text-white/90">{item}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
