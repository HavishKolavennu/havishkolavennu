import { Hero } from "@/components/hero/hero";
import { FeaturedWork } from "@/components/featured-work/featured-work";
import { About } from "@/components/about/about";
import { Skills } from "@/components/skills/skills";
import { CTA } from "@/components/cta/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <About />
      <Skills />
      <CTA />
    </>
  );
}
