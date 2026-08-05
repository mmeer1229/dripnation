import { ImageStack } from "@/components/ui/image-stack";
import { heroStackImages } from "@/config/site";

function HighlightStack() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-2 sm:gap-12">
        <div className="order-2 sm:order-1">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Fresh fits, straight from the floor
          </h2>
          <p className="mt-3 text-muted-foreground">
            Drag the stack (or swipe, if you're on your phone) to see what's
            moving right now.
          </p>
        </div>
        <div className="order-1 mx-auto aspect-square w-full max-w-xs sm:order-2 sm:max-w-sm">
          <ImageStack images={heroStackImages} className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}

export { HighlightStack };
