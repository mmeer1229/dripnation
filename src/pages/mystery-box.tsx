import { toast } from "sonner";

import { mysteryBox } from "@/config/site";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function MysteryBoxPage() {
  const { addItem } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">Mystery Box</h1>
        <p className="mt-3 text-lg text-muted-foreground">{mysteryBox.tagline}</p>
        <p className="mt-4 text-muted-foreground">{mysteryBox.description}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
        {mysteryBox.tiers.map((tier) => (
          <Card key={tier.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <p className="font-mono text-2xl font-semibold text-primary">${tier.price}</p>
            </CardHeader>
            <CardContent className="flex-1 text-sm text-muted-foreground">
              {tier.description}
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => {
                  addItem({
                    id: `mystery-box-${tier.id}`,
                    name: tier.name,
                    price: tier.price,
                    image: "/images/hero-stack/merch-1.jpg",
                  });
                  toast(`${tier.name} added to cart.`);
                }}
              >
                Get this box
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export { MysteryBoxPage };
