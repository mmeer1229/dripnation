import { Link } from "react-router-dom";

import { Waves } from "@/components/ui/interactive-waves";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-foreground text-background sm:min-h-[80svh]">
      <Waves lineColor="oklch(1 0 0)" className="opacity-70" />
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-4xl leading-tight font-extrabold text-balance sm:text-6xl">
          DRIP NATION
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-background/80 sm:text-lg">
          Streetwear, sneakers, and accessories. Real drip, no filler.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/shop">Shop Now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background sm:w-auto"
            asChild
          >
            <Link to="/mystery-box">Get a Mystery Box</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export { Hero };
