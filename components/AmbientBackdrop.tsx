"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Mesh gradients + orthogonal grid (+ faint “guides”) — echoes premium product / design-tool landings */
export default function AmbientBackdrop() {
  const reduce = useReducedMotion();

  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.056) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.056) 1px, transparent 1px),
      linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
    backgroundPosition: "0 0, 0 0, -1px -1px, -1px -1px",
    maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 36%, transparent 88%)",
  } as const;

  if (reduce) {
    return (
      <div
        aria-hidden
        className="ambient-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-42"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 100% 80% at 10% -10%, rgba(6,182,212,0.07), transparent 55%),
              radial-gradient(ellipse 90% 70% at 95% 10%, rgba(99,102,241,0.06), transparent 50%),
              radial-gradient(ellipse 70% 55% at 72% 28%, rgba(217,70,239,0.09), transparent 52%),
              radial-gradient(ellipse 120% 60% at 50% 100%, rgba(63,63,70,0.14), transparent 55%),
              radial-gradient(#09090b, #09090b)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.092]" style={gridStyle} />
      </div>
    );
  }

  return (
    <div aria-hidden className="ambient-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_15%,transparent_42%,rgba(0,0,0,0.55)_118%)]" />

      {/* Drifting blobs — cyan / iris / graphite (design-studio mood) */}
      <motion.div
        className="absolute -left-[18%] top-[6%] h-[58vmin] w-[58vmin] rounded-[48%] bg-cyan-500/13 blur-[100px]"
        animate={{ x: [0, 28, -14, 0], y: [0, -18, 10, 0], scale: [1, 1.05, 1.02, 1], rotate: [0, 2, -1.5, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[14%] top-[32%] h-[52vmin] w-[52vmin] rounded-[45%] bg-indigo-500/11 blur-[92px]"
        animate={{ x: [0, -32, 20, 0], y: [0, 16, -10, 0], scale: [1, 1.06, 1, 1], rotate: [0, -2.5, 2, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[2%] left-[22%] h-[42vmin] w-[52vmin] rounded-[52%] bg-teal-400/10 blur-[86px]"
        animate={{
          x: [0, 22, -12, 0],
          y: [0, -28, -8, 0],
          opacity: [0.45, 0.82, 0.55, 0.45],
          scale: [1, 1.04, 1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute left-[38%] top-[12%] h-[36vmin] w-[40vmin] rounded-[50%] bg-fuchsia-500/11 blur-[88px]"
        animate={{ x: [0, -18, 14, 0], y: [0, 12, -8, 0], scale: [1, 1.05, 1, 1], opacity: [0.55, 0.85, 0.6, 0.55] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Subtle orthogonal grid */}
      <div className="absolute inset-0 opacity-[0.11] mix-blend-soft-light md:opacity-[0.13]" style={gridStyle} />

      {/* Slow flowing highlight (EverSwap-ish sheen) */}
      <motion.div
        className="absolute -inset-[40%] opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.13) 50%, transparent 58%)",
        }}
        animate={{ x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
