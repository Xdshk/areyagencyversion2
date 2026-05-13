"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";
import { CaseItem, cases } from "./cases";
import ReadingTime from "./ReadingTime";
import { fadeUp, staggerContainer } from "./motionPresets";

const CaseViewer = dynamic(() => import("./CaseViewer"), { ssr: false });

export default function CasesGrid() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const handleClose = useCallback(() => setSelectedCase(null), []);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          className="mb-10 flex items-end justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="font-editorial text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Избранные работы
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link href="/works" className="theme-nav-link text-sm text-white/70">
              Все проекты
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12, margin: "-40px" }}
          variants={staggerContainer}
        >
          {cases.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 420, damping: 24 } }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer group"
              onClick={() => setSelectedCase(item)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-lg shadow-black/20 transition-all duration-500 hover:border-zinc-500/40 hover:shadow-2xl hover:shadow-zinc-500/[0.08] aspect-[4/3]">
                {/* Фоновое изображение / превью */}
                {item.thumb ? (
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                    <img
                      src={item.media}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                )}

                {/* Затемнение + градиент сверху */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Блик по краю */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)" }} />

                {/* Badge типа */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm">
                    {item.type === "pdf" ? (
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    ) : (
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM16.5 9.75v.008m.008-.008H16.5v.008z" />
                      </svg>
                    )}
                    {item.type === "pdf" ? "PDF" : "Фото"}
                  </span>
                </div>

                {/* ID в углу */}
                <span className="absolute bottom-4 right-4 z-10 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-mono text-white/40 backdrop-blur-sm">
                  #{item.id}
                </span>
              </div>

              {/* Текстовая часть */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-base font-medium text-white/90 transition-colors group-hover:text-white">{item.title}</p>
                    <p className="mt-0.5 text-sm text-white/45">{item.category}</p>
                  </div>
                </div>
                <ReadingTime
                  text={`${item.category} ${item.description}`}
                  wordsPerMinute={200}
                  prefix="~"
                  suffix=" мин чтения"
                  className="text-white/35"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedCase && (
          <CaseViewer caseData={selectedCase} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}