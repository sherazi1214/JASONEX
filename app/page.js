import ParallaxHero from "@/components/ParallaxHero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Works from "@/components/Works";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <Services />
      <Stats />
      <Works />
      <Reviews />
      <Blog />
      <FAQ />
    </>
  );
}
