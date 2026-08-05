import { Link } from "react-router-dom";

import { categories } from "@/config/site";
import { ImageTiles } from "@/components/ui/image-tiles";

function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Shop by category</h2>
        <Link to="/shop" className="text-sm font-medium text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="mt-8">
        <ImageTiles
          items={categories.map((category) => ({
            src: category.image,
            alt: category.name,
            label: category.name,
            href: `/shop/${category.slug}`,
          }))}
        />
      </div>
    </section>
  );
}

export { CategoryGrid };
