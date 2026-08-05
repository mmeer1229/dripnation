import { mysteryBox } from "@/config/site";

function HowItWorks() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">
          How it works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {mysteryBox.howItWorks.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
                {index + 1}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { HowItWorks };
