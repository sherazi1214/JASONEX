import ParallaxHero from "@/components/ParallaxHero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Works from "@/components/Works";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import { readCollection } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = (await readCollection("posts")).slice(0, 3);
  return (
    <>
      <ParallaxHero />
      <Services />
      <Stats />
      <Works />
      <Blog posts={posts} />
      <FAQ />
    </>
  );
}
