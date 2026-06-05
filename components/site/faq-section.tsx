import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/content";

export function FaqSection({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-3">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
