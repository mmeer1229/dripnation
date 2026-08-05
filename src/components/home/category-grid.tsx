import { Link } from "react-router-dom";

import { categories } from "@/config/site";

function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="flex items-baseline justify-between">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Shop by category</h2>
        <Link to="/shop" className="text-sm font-medium text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/shop/${category.slug}`}
            className="group overflow-hidden rounded-3xl border bg-card"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={category.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="p-3 text-sm font-medium">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { CategoryGrid };
