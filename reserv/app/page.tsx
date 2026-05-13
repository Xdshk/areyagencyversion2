import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import CasesGrid from "../components/CasesGrid";
import Hero from "../components/Hero";
import HomeTeamBanner from "../components/HomeTeamBanner";
import Process from "../components/Process";

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
