"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../components/motionPresets";

type TeamMember = {
  name: string;
  role: string;
  username: string;
  photoSrc: string;
};

const members: TeamMember[] = [
  {
    name: "Анна Чевычелова",
    role: "Основатель агентства, графический дизайнер. Разрабатывает брендбуки и презентации.",
    username: "@annswx",
    photoSrc: "/team/Анна.webp",
  },
  {
    name: "Алена Карпенко",
    role: "Графический дизайнер. Разрабатывает фирменные стили.",
    username: "@ytitoshka",
    photoSrc: "/team/алена.webp",
  },
  {
    name: "Ангелина Ежикова",
    role: "Графический дизайнер. Занимается разработкой логотипов.",
    username: "@gelechhka",
    photoSrc: "/team/ангелина.webp",
  },
  {
    name: "Максим Разуваев",
    role: "Специалист по 3D-графике и анимации. Автор стикерпаков, презентаций и брендбуков.",
    username: "@mixseSO",
    photoSrc: "/team/максим.webp",
  },
  {
    name: "София Олейникова",
    role: "Графический дизайнер, создатель логотипов и открыток.",
    username: "@sonya_ol",
    photoSrc: "/team/софия.webp",
  },
];

export default function TeamPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-28 md:px-10">
      <motion.section
        className="max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-fuchsia-400">
          Команда
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          Люди, которые делают сильный визуал
        </motion.h1>
      </motion.section>

      <motion.section
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={staggerContainer}
      >
        {members.map((member) => (
          <motion.article
            key={member.name}
            variants={fadeUp}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 380, damping: 24 } }}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-[box-shadow] duration-300 hover:border-fuchsia-500/20 hover:shadow-xl hover:shadow-fuchsia-500/5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
              <Image
                src={member.photoSrc}
                alt={`Фото ${member.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <h2 className="mt-4 text-xl font-medium">{member.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{member.role}</p>
            <a
              href={`https://t.me/${member.username.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="theme-nav-link mt-4 inline-flex text-sm text-fuchsia-300"
            >
              {member.username}
            </a>
          </motion.article>
        ))}
      </motion.section>
    </main>
  );
}
