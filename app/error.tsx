"use client";

import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
        className="text-center"
      >
        {/* Error icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/[0.06]"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth={1.5}>
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }}
          className="font-editorial text-4xl font-semibold tracking-[-0.02em] md:text-5xl"
        >
          Что-то пошло не так
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4 } }}
          className="mt-4 max-w-md text-base text-white/60"
        >
          Произошла непредвиденная ошибка. Мы работаем над исправлением.
        </motion.p>

        {/* Technical details (dev only) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            className="mt-6 max-w-xl overflow-x-auto rounded-lg bg-white/[0.04] p-4 text-left text-xs text-rose-400/70"
          >
            {error.message}
          </motion.pre>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="mt-10 flex gap-4"
        >
          <button
            onClick={() => reset()}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors duration-300 hover:bg-zinc-200"
          >
            Попробовать снова
          </button>
          <a
            href="/"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-white/50"
          >
            На главную
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}