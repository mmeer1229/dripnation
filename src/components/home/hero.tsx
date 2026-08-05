import { Link } from "react-router-dom";

import { mysteryBox } from "@/config/site";
import { Waves } from "@/components/ui/interactive-waves";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background">
      <Waves lineColor="oklch(1 0 0)" className="opacity-70" />
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-10 px-4 py-16 text-center sm:py-20 md:flex-row md:gap-16 md:py-28 md:text-left">
        <div className="order-1 md:flex-1">
          <p className="font-heading text-sm font-semibold tracking-widest text-primary uppercase">
            Drip Nation
          </p>
          <h1 className="mt-2 font-heading text-4xl leading-tight font-extrabold text-balance sm:text-6xl">
            The Mystery Box
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-background/80 sm:text-lg md:mx-0">
            {mysteryBox.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="#tiers">Get Your Box</Link>
            </Button>
          </div>
        </div>

        <div className="order-2 w-full max-w-xs shrink-0 sm:max-w-sm md:max-w-md">
          <img
            src={mysteryBox.heroImage}
            alt="Mystery box"
            className="w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export { Hero };
