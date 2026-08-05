import { brands } from "@/config/site";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

function BrandsPage() {
  if (brands.length === 0) {
    return (
      <PagePlaceholder
        title="Brands"
        description="Brand partners coming soon."
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold">Brands</h1>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((brand) => (
          <li key={brand.id} className="rounded-2xl border bg-card p-6 text-center font-medium">
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { BrandsPage };
