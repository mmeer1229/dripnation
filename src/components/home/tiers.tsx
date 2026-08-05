import { useState } from "react";
import { toast } from "sonner";

import { mysteryBox, sizes, type Size } from "@/config/site";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Tiers() {
  const { addItem } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, Size>>({});

  return (
    <section id="tiers" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">Pick your box</h2>
        <p className="mt-3 text-muted-foreground">{mysteryBox.description}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
        {mysteryBox.tiers.map((tier) => {
          const size = selectedSizes[tier.id];

          return (
            <Card key={tier.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <p className="font-mono text-2xl font-semibold text-primary">${tier.price}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground">{tier.description}</p>
                <Select
                  value={size}
                  onValueChange={(value) =>
                    setSelectedSizes((current) => ({ ...current, [tier.id]: value as Size }))
                  }
                >
                  <SelectTrigger className="w-full" aria-label={`Size for ${tier.name}`}>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => {
                    if (!size) {
                      toast("Pick a size first.");
                      return;
                    }
                    addItem({
                      id: `mystery-box-${tier.id}`,
                      name: tier.name,
                      price: tier.price,
                      image: mysteryBox.heroImage,
                      variant: `Size ${size}`,
                    });
                    toast(`${tier.name} (${size}) added to cart.`);
                  }}
                >
                  Get this box
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export { Tiers };
