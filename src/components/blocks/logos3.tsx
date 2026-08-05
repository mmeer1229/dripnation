import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image?: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos: Logo[];
  className?: string;
}

function Logos3({ heading = "Brands we carry", logos, className }: Logos3Props) {
  return (
    <section className={className}>
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <h2 className="text-2xl font-bold text-balance lg:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="pt-10 md:pt-14">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, stopOnInteraction: false })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    {logo.image ? (
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className ?? "h-7 w-auto"}
                      />
                    ) : (
                      <span className="font-heading text-lg font-semibold tracking-wide text-muted-foreground whitespace-nowrap">
                        {logo.description}
                      </span>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}

export { Logos3 };
export type { Logo as Logos3Logo };
