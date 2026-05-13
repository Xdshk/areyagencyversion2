"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./motionPresets";

const steps = [
  { id: "01", title: "Бриф", text: "Цель, аудитория, форматы, сроки." },
  { id: "02", title: "Концепт", text: "Визуальное направление и первые варианты." },
  { id: "03", title: "Доработка", text: "Точные правки, пока все не звучит идеально." },
  { id: "04", title: "Передача", text: "Финальные файлы для digital и печати." },
];

export default function Process() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp} className="col-span-full text-3xl font-semibold tracking-tight md:text-5xl">
          Процесс
        </motion.h2>
        {steps.map((step) => (
          <motion.article
            key={step.id}
            variants={fadeUp}
            whileHover={{
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 26 },
            }}
            className="rounded-2xl border border-white/10 px-6 py-7 transition-colors duration-300 hover:border-fuchsia-500/25"
          >
            <p className="text-xs tracking-[0.2em] text-fuchsia-300">{step.id}</p>
            <h3 className="mt-2 text-2xl font-medium">{step.title}</h3>
            <p className="mt-2 text-sm text-white/65">{step.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
