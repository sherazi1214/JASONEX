import Hero from "./components/Hero";
import AboutCompany from "./components/AboutCompany";
import Founder from "./components/Founder";
import Process from "./components/Process";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import { readCollection } from "../../lib/store";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const [founder, team, snaps] = await Promise.all([
    readCollection("founder"),
    readCollection("team"),
    readCollection("snaps"),
  ]);

  return (
    <main>
      <Hero />
      <AboutCompany />
      <Founder founder={founder} />
      <Process />
      <Team members={team} />
      <Gallery snaps={snaps} />
      <FAQ />
    </main>
  );
}
