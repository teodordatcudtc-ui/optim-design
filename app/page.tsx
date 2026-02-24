import { Hero } from "@/components/Hero";
import { AboutStats } from "@/components/AboutStats";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { GalleryAsymmetric } from "@/components/GalleryAsymmetric";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStats />
      <FeaturedProducts />
      <GalleryAsymmetric />
      <CtaBanner />
    </>
  );
}
