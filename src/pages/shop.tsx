import { Link } from "react-router-dom";

import { categories } from "@/config/site";

function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold">Shop</h1>
      <p className="mt-2 text-muted-foreground">
        Product listings are coming soon. Browse by category for now.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="font-medium">{category.name}</p>
              <p className="text-xs text-muted-foreground">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export { ShopPage };
