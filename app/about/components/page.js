import Hero from "./Hero";
import Process from "./Process";
import Team from "./Team";
import FAQ from "./FAQ";

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Hero />
      <Process />
      <Team />
      <FAQ />
    </main>
  );
}