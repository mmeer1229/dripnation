import { mysteryBox } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section className="container mx-auto max-w-2xl px-4 py-16 sm:py-20">
      <h2 className="text-center font-heading text-2xl font-bold sm:text-3xl">
        Questions
      </h2>
      <Accordion type="single" collapsible className="mt-8">
        {mysteryBox.faq.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export { Faq };
