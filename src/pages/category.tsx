import { useParams, Link } from "react-router-dom";

import { categories } from "@/config/site";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

function CategoryPage() {
  const { category: slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <PagePlaceholder
        title="Category not found"
        description="That category doesn't exist yet."
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground">
        &larr; All categories
      </Link>
      <h1 className="mt-3 font-heading text-3xl font-bold">{category.name}</h1>
      <p className="mt-2 text-muted-foreground">{category.description}</p>
      <p className="mt-8 text-muted-foreground">
        Products in this category are coming soon.
      </p>
    </div>
  );
}

export { CategoryPage };
