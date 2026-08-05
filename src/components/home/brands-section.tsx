import { brands } from "@/config/site";
import { Logos3 } from "@/components/blocks/logos3";

function BrandsSection() {
  if (brands.length === 0) return null;

  return (
    <Logos3
      heading="Brands we carry"
      logos={brands.map((brand) => ({ id: brand.id, description: brand.name }))}
      className="py-16 sm:py-20"
    />
  );
}

export { BrandsSection };
