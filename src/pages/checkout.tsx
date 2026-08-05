import { useState, type FormEvent } from "react";

import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PagePlaceholder } from "@/components/layout/page-placeholder";

function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`;
}

interface CheckoutDetails {
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

const emptyDetails: CheckoutDetails = {
  email: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [details, setDetails] = useState<CheckoutDetails>(emptyDetails);
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

  function updateField(field: keyof CheckoutDetails) {
    return (event: React.ChangeEvent<HTMLInputElement>) =>
      setDetails((current) => ({ ...current, [field]: event.target.value }));
  }

  async function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);
    try {
      const response = await fetch("/api/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, subtotal, customer: details }),
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
              {item.name}
              {item.variant ? ` (${item.variant})` : ""} &times; {item.quantity}
            </span>
            <span className="font-mono">{formatPrice(item.price * item.quantity)}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span className="font-mono">{formatPrice(subtotal)}</span>
      </p>

      <form className="mt-8 space-y-6" onSubmit={handleCheckout}>
        <div className="space-y-4">
          <h2 className="text-sm font-semibold">Contact</h2>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={details.email}
              onChange={updateField("email")}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={details.phone}
              onChange={updateField("phone")}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold">Shipping address</h2>
          <div className="space-y-1.5">
            <Label htmlFor="street">Street address</Label>
            <Input
              id="street"
              required
              value={details.street}
              onChange={updateField("street")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                required
                value={details.city}
                onChange={updateField("city")}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                required
                value={details.state}
                onChange={updateField("state")}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="zip">ZIP code</Label>
            <Input
              id="zip"
              required
              value={details.zip}
              onChange={updateField("zip")}
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Processing..." : "Pay now"}
        </Button>
      </form>

      {message && (
        <p className="mt-4 rounded-lg bg-muted p-3 text-sm text-muted-foreground">
          {message}
        </p>
      )}
    </div>
  );
}

export { CheckoutPage };
