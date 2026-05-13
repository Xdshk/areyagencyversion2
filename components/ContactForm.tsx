"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwazkpl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }, []);

  return (
    <motion.section
      className="mt-14 max-w-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      <h2 className="font-editorial text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
        Напишите нам
      </h2>
      <p className="mt-2 text-sm text-white/60">
        Коротко опишите задачу, сроки и форматы — ответим в течение рабочего дня.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="sr-only">
              Имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Ваше имя"
              className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Бриф / Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Расскажите о проекте: что нужно, в каких форматах, сроки..."
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full rounded-full border px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
            status === "sending"
              ? "border-white/20 bg-white/[0.04] text-white/40 cursor-wait"
              : status === "sent"
              ? "border-emerald-500/40 bg-emerald-500/[0.08] text-emerald-400"
              : "bg-white text-zinc-950 hover:bg-zinc-200"
          }`}
        >
          {status === "sending"
            ? "Отправка…"
            : status === "sent"
            ? "✓ Сообщение отправлено!"
            : status === "error"
            ? "Ошибка — попробуйте снова"
            : "Отправить бриф"}
        </motion.button>

        {status === "error" && (
          <p className="text-xs text-rose-400/80">
            Что-то пошло не так. Можно написать напрямую:{" "}
            <a href="mailto:annaarey22@yandex.ru" className="underline underline-offset-2">
              annaarey22@yandex.ru
            </a>
          </p>
        )}
      </form>
    </motion.section>
  );
}