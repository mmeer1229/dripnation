import { useParams } from "react-router-dom";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

function ProductPage() {
  const { slug } = useParams();

  return (
    <PagePlaceholder
      title="Product page"
      description={`Product details for "${slug}" are coming soon, once inventory is loaded.`}
    />
  );
}

export { ProductPage };
