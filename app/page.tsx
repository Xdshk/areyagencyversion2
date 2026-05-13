import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import CasesGrid from "../components/CasesGrid";
import Hero from "../components/Hero";
import HomeTeamBanner from "../components/HomeTeamBanner";
import Process from "../components/Process";

export const metadata = {
  metadataBase: new URL("https://areyagency.com"),
  title: "Arey Agency — креативное агентство",
  description: "Афиши, визуал и брендинг для фестивалей и брендов. Быстро, точно, гибко.",
  openGraph: {
    title: "Arey Agency",
    description: "Афиши, визуал и брендинг для фестивалей и брендов",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CasesGrid />
      <Benefits />
      <Process />
      <HomeTeamBanner />
      <CTA />
    </main>
  );
}