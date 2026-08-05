import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";

import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function CartPage() {
  const { items, subtotal, setQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <PagePlaceholder
        title="Your cart is empty"
        description="Add something from the shop or grab a Mystery Box."
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold">Your cart</h1>

      <ul className="mt-8 divide-y">
        {items.map((item) => (
          <li key={`${item.id}::${item.variant ?? ""}`} className="flex items-center gap-4 py-5">
            <img
              src={item.image}
              alt=""
              className="size-20 rounded-2xl border object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              {item.variant && (
                <p className="text-sm text-muted-foreground">{item.variant}</p>
              )}
              <p className="mt-1 font-mono text-sm">{formatPrice(item.price)}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                aria-label="Decrease quantity"
                onClick={() => setQuantity(item.id, item.quantity - 1, item.variant)}
              >
                <Minus className="size-4" />
              </Button>
              <span className="w-6 text-center font-mono">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                aria-label="Increase quantity"
                onClick={() => setQuantity(item.id, item.quantity + 1, item.variant)}
              >
                <Plus className="size-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Remove item"
              onClick={() => removeItem(item.id, item.variant)}
            >
              <X className="size-4" />
            </Button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-end gap-4 border-t pt-6">
        <p className="text-lg">
          Subtotal: <span className="font-mono font-semibold">{formatPrice(subtotal)}</span>
        </p>
        <Button size="lg" asChild>
          <Link to="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
}

export { CartPage };
