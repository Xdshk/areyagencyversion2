import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://areyagency.com"),
  title: "Команда — Arey Agency",
  description: "Знакомьтесь с командой Arey Agency — креативный директор, 3D-художник, арт-директор, графический дизайнер и SMM-специалист",
  openGraph: {
    title: "Команда — Arey Agency",
    description: "Креативный директор, 3D-художник, арт-директор, графический дизайнер и SMM-специалист — команда, которая создаёт визуал для фестивалей и брендов",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/team",
  },
};

const members = [
  {
    name: "Анна Чевычелова",
    role: "Креативный директор",
    description: "Основатель агентства. Разрабатывает креативную стратегию, руководит визуальными решениями и строит бренд-идентичность.",
    username: "annswx",
    photoSrc: "/team/anna.jpg",
  },
  {
    name: "Максим Разуваев",
    role: "3D-художник и аниматор",
    description: "Автор стикерпаков, презентаций и брендбуков. Превращает идеи в объёмные визуалы и motion-дизайн.",
    username: "mixseSO",
    photoSrc: "/team/maksim.jpg",
  },
  {
    name: "Ангелина Ежикова",
    role: "Арт-директор",
    description: "Разрабатывает фирменные стили и визуальные системы. Следит за каждой деталью — от логотипа до упаковки.",
    username: "gelechhka",
    photoSrc: "/team/angelina.jpg",
  },
  {
    name: "Елизавета Бабкина",
    role: "SMM-специалист",
    description: "Ведёт социальные сети, пишет контент-стратегию и знает, как сделать так, чтобы о вас заговорили.",
    username: "",
    photoSrc: "/team/liza.jpg",
  },
  {
    name: "Оля Фролова",
    role: "Графический дизайнер",
    description: "Создаёт визуальные решения от логотипов до полноразмерных макетов. Ответственна за детали и качество на каждом этапе.",
    username: "",
    photoSrc: "/team/olya.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-28 md:px-10">
      <div className="max-w-5xl">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Команда</p>
        <h1 className="font-editorial mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.02em] md:text-7xl">
          Люди, которые делают сильный визуал
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-5">
        {members.map((member) => (
          <article
            key={member.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-[box-shadow] duration-300 hover:border-zinc-500/30 hover:shadow-xl hover:shadow-black/25"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
              <Image
                src={member.photoSrc}
                alt={`Фото ${member.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <h2 className="mt-4 text-xl font-medium">{member.name}</h2>
            <p className="mt-1 text-sm leading-relaxed text-white/70">{member.role}</p>
            <p className="mt-2 text-xs text-white/40 leading-relaxed">{member.description}</p>
            {member.username && (
              <a
                href={`https://t.me/${member.username}`}
                target="_blank"
                rel="noreferrer"
                className="theme-nav-link mt-4 inline-flex text-sm text-zinc-400"
              >
                @{member.username}
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}