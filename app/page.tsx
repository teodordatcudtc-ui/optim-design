import { Hero } from "@/components/Hero";
import { AboutStats } from "@/components/AboutStats";
import { FeaturedLucrari } from "@/components/FeaturedLucrari";
import { GalleryAsymmetric } from "@/components/GalleryAsymmetric";
import { Servicii } from "@/components/Servicii";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedLucrari />
      <GalleryAsymmetric />
      <Servicii />
      <AboutStats />
      <CtaBanner />
    </>
  );
}
