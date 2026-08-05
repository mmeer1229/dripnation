import { useState } from "react";

import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`;
}

function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <PagePlaceholder
        title="Nothing to check out"
        description="Your cart is empty."
      />
    );
  }

  async function handleCheckout() {
    setStatus("submitting");
    setMessage(null);
    try {
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, subtotal }),
      });
      const data = await response.json();
      setStatus("error");
      setMessage(data.message ?? "Payment processing isn't set up yet.");
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the payments service.");
    }
  }

  return (
    <div className="container mx-auto max-w-lg px-4 py-12">
      <h1 className="font-heading text-3xl font-bold">Checkout</h1>

      <ul className="mt-6 divide-y">
        {items.map((item) => (
          <li key={`${item.id}::${item.variant ?? ""}`} className="flex justify-between py-3 text-sm">
            <span>
              {item.name} &times; {item.quantity}
            </span>
            <span className="font-mono">{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span className="font-mono">{formatPrice(subtotal)}</span>
      </p>

      <Button
        size="lg"
        className="mt-6 w-full"
        onClick={handleCheckout}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Processing..." : "Pay now"}
      </Button>

      {message && (
        <p className="mt-4 rounded-lg bg-muted p-3 text-sm text-muted-foreground">
          {message}
        </p>
      )}
    </div>
  );
}

export { CheckoutPage };
