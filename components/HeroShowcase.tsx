"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cases, type CaseItem } from "./cases";
import TiltCard3D from "./TiltCard3D";

const PREVIEW_IDS = ["01", "06", "04"] as const;

function resolvePreviews(): CaseItem[] {
  return PREVIEW_IDS.map((id) => cases.find((c) => c.id === id)).filter((c): c is CaseItem => Boolean(c));
}

export default function HeroShowcase() {
  const previews = resolvePreviews();
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const item = previews[index] ?? previews[0];
  const safeIndex = item ? previews.indexOf(item) : 0;

  const go = useCallback(
    (next: number) => {
      if (!previews.length) return;
      setIndex(((next % previews.length) + previews.length) % previews.length);
    },
    [previews.length],
  );

  useEffect(() => {
    if (reduceMotion || previews.length < 2) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % previews.length);
    }, 6000);
    return () => window.clearInterval(t);
  }, [reduceMotion, previews.length]);

  if (!item?.thumb) return null;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
      <div
        className="pointer-events-none absolute -inset-[12%] rounded-[40%] bg-gradient-to-br from-fuchsia-500/18 via-violet-500/12 to-cyan-500/10 blur-3xl md:-inset-[18%]"
        aria-hidden
      />
      <div className="relative">
        <TiltCard3D className="w-full max-w-md lg:ml-auto" tiltMax={11}>
          <Link
            href="/works"
            className="relative block h-full w-full outline-none ring-1 ring-white/10 transition-[box-shadow] duration-300 hover:ring-fuchsia-400/35 focus-visible:ring-2 focus-visible:ring-fuchsia-400/50"
          >
            <Image
              src={item.thumb}
              alt=""
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            <span className="sr-only">Смотреть работы: {item.title}</span>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">Из портфолио</p>
              <p className="mt-1 font-editorial text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">{item.title}</p>
              <p className="mt-0.5 text-xs text-white/50">{item.category}</p>
            </div>
          </Link>
        </TiltCard3D>

        {previews.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2 lg:justify-end" role="tablist" aria-label="Переключить превью работ">
            {previews.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === safeIndex}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === safeIndex ? "w-8 bg-gradient-to-r from-fuchsia-400 to-violet-400" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        )}

        <p className="mt-3 text-center text-[11px] text-white/35 lg:text-right">Наведи и слегка покрути — смена кадра каждые несколько секунд</p>
      </div>
    </div>
  );
}
