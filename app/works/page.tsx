import CasesGrid from "../../components/CasesGrid";

export const metadata = {
  metadataBase: new URL("https://areyagency.com"),
  title: "Работы — Arey Agency",
  description: "Портфолио: фестивальный брендинг, афиши, визуал и motion-дизайн",
  openGraph: {
    title: "Работы — Arey Agency",
    description: "Избранные проекты в фестивальном брендинге, афишах и рекламном визуале",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/works",
  },
};

export default function WorksPage() {
  return (
    <main className="pb-20 pt-28">
      <section className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Работы</p>
          <h1 className="font-editorial mt-4 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.02em] md:text-7xl">
            Визуальные системы, которые останавливают скролл
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            Избранные проекты в фестивальном брендинге, афишах и рекламном визуале.
          </p>
        </div>
      </section>
      <CasesGrid />
    </main>
  );
}