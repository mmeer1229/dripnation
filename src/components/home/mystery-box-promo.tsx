import { Link } from "react-router-dom";

import { mysteryBox } from "@/config/site";
import { Button } from "@/components/ui/button";

function MysteryBoxPromo() {
  const startingPrice = Math.min(...mysteryBox.tiers.map((tier) => tier.price));

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-16 text-center sm:py-20">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">Mystery Box</h2>
        <p className="max-w-md text-primary-foreground/90">{mysteryBox.tagline}</p>
        <Button
          size="lg"
          variant="secondary"
          asChild
          className="w-full sm:w-auto"
        >
          <Link to="/mystery-box">Starting at ${startingPrice}</Link>
        </Button>
      </div>
    </section>
  );
}

export { MysteryBoxPromo };
