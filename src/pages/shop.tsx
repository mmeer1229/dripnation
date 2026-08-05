import { categories } from "@/config/site";
import { ImageTiles } from "@/components/ui/image-tiles";

function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold">Shop</h1>
      <p className="mt-2 text-muted-foreground">
        Product listings are coming soon. Browse by category for now.
      </p>
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
    </div>
  );
}

export { ShopPage };
