import Hero from "./components/Hero";
import AboutCompany from "./components/AboutCompany";
import Founder from "./components/Founder";
import Process from "./components/Process";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";


export default function AboutPage() {
  return (
    <main>
      <Hero />
      <AboutCompany />
      <Founder />
      <Process />
      <Team />
      <Gallery />
      <FAQ />
    </main>
  );
}