import { Hero } from "@/components/home/hero";
import { HighlightStack } from "@/components/home/highlight-stack";
import { CategoryGrid } from "@/components/home/category-grid";
import { MysteryBoxPromo } from "@/components/home/mystery-box-promo";
import { BrandsSection } from "@/components/home/brands-section";

function HomePage() {
  return (
    <>
      <Hero />
      <HighlightStack />
      <CategoryGrid />
      <MysteryBoxPromo />
      <BrandsSection />
    </>
  );
}

export { HomePage };
