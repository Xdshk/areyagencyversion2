"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        animate={{ rotate: 360, opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-white/[0.08]"
        />
        <motion.div
          className="absolute inset-3 rounded-full border border-cyan-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="font-editorial text-2xl text-white">A</span>
        </div>
      </motion.div>

      {/* Label */}
      <motion.p
        className="absolute bottom-12 text-xs text-white/30"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
      >
        Загрузка...
      </motion.p>
    </div>
  );
}