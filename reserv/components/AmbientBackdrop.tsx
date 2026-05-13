"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AmbientBackdrop() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        aria-hidden
        className="ambient-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(217,70,239,0.15),transparent)]" />
      </div>
    );
  }

  return (
    <div aria-hidden className="ambient-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[55vmin] w-[55vmin] rounded-full bg-fuchsia-500/15 blur-[90px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, 18, 0],
          scale: [1, 1.06, 1.02, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[35%] h-[45vmin] w-[45vmin] rounded-full bg-violet-600/12 blur-[80px]"
        animate={{
          x: [0, -36, 24, 0],
          y: [0, -22, 14, 0],
          scale: [1, 1.08, 1, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[25%] h-[35vmin] w-[35vmin] rounded-full bg-fuchsia-400/8 blur-[70px]"
        animate={{
          x: [0, 28, -18, 0],
          y: [0, -40, -12, 0],
          opacity: [0.5, 0.85, 0.55, 0.5],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
