"use client";

import { useCallback, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type TiltCard3DProps = {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
};

/** Cursor-driven 3D tilt; box shadow shifts with “light” opposite to tilt. */
export default function TiltCard3D({ children, className = "", tiltMax = 13 }: TiltCard3DProps) {
  const reduceMotion = useReducedMotion();
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const reset = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transition =
      "transform 450ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1)";
    inner.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    inner.style.boxShadow =
      "0 20px 48px -12px rgba(0, 0, 0, 0.52), 0 6px 14px -6px rgba(0, 0, 0, 0.32)";
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (reduceMotion) return;
      const inner = innerRef.current;
      if (!inner) return;

      const q = inner.getBoundingClientRect();
      const mx = ((e.clientX - q.left) / q.width) * 2 - 1;
      const my = ((e.clientY - q.top) / q.height) * 2 - 1;
      const ry = mx * tiltMax;
      const rx = my * -tiltMax;
      const shadowX = -mx * 34;
      const shadowY = -my * 30 + 16;
      const depth = Math.min(Math.hypot(mx, my) * 14, 18);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        inner.style.transition = "none";
        inner.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.018, 1.018, 1)`;
        inner.style.boxShadow = `${shadowX}px ${shadowY}px ${42 + depth}px rgba(0, 0, 0, ${0.52 + depth * 0.006}), ${shadowX * 0.4}px ${shadowY * 0.4}px 20px rgba(0, 0, 0, 0.28)`;
      });
    },
    [reduceMotion, tiltMax],
  );

  const onPointerLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    reset();
  }, [reset]);

  if (reduceMotion) {
    return (
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.52)] ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`aspect-[4/3] outline-none [perspective:1080px] ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        ref={innerRef}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 [transform-style:preserve-3d] will-change-transform"
        style={{
          transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          boxShadow:
            "0 20px 48px -12px rgba(0, 0, 0, 0.52), 0 6px 14px -6px rgba(0, 0, 0, 0.32)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
