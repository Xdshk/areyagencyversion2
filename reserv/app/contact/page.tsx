"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../components/motionPresets";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-28 md:px-10">
      <motion.section className="max-w-5xl" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-fuchsia-400">
          Контакты
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          Обсудим проект, который нельзя пропустить
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-white/70">
          Напиши короткий бриф: задача, сроки, форматы. В ответ отправим направление и оценку по этапам.
        </motion.p>
      </motion.section>

      <motion.section
        className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.a
          variants={fadeUp}
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 26 } }}
          href="tel:+79510788381"
          className="rounded-2xl border border-white/15 bg-white/[0.02] p-6 transition-colors hover:border-fuchsia-400"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Телефон</p>
          <p className="mt-3 text-lg">8 951 078 83 81</p>
        </motion.a>
        <motion.a
          variants={fadeUp}
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 26 } }}
          href="mailto:annaarey22@yandex.ru"
          className="rounded-2xl border border-white/15 bg-white/[0.02] p-6 transition-colors hover:border-fuchsia-400"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Email</p>
          <p className="mt-3 text-lg">annaarey22@yandex.ru</p>
        </motion.a>
        <motion.article
          variants={fadeUp}
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 26 } }}
          className="rounded-2xl border border-white/15 bg-white/[0.02] p-6"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Адрес</p>
          <p className="mt-3 text-lg">Бизнес-центр «Креатив», ул. Творческая, д. 1, Москва</p>
        </motion.article>
      </motion.section>

      <motion.section
        className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.article
          variants={fadeUp}
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-white/10 p-6 transition-[box-shadow] duration-300 hover:border-fuchsia-500/20 hover:shadow-lg hover:shadow-fuchsia-500/5"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">Что прислать</p>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>Название проекта и ниша</li>
            <li>Форматы и каналы размещения</li>
            <li>Референсы или визуальные ориентиры</li>
            <li>Срок запуска</li>
          </ul>
        </motion.article>
        <motion.article
          variants={fadeUp}
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-white/10 p-6 transition-[box-shadow] duration-300 hover:border-fuchsia-500/20 hover:shadow-lg hover:shadow-fuchsia-500/5"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">Как отвечаем</p>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>В течение 1 рабочего дня</li>
            <li>Фиксируем этапы и дедлайны</li>
            <li>Выдаем прозрачный расчет</li>
            <li>Стартуем сразу после подтверждения</li>
          </ul>
        </motion.article>
      </motion.section>
    </main>
  );
}
