import { Reveal } from "@/components/anim/reveal";
import { ServiceCard } from "./service-card";
import type { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServiceGrid({
  items,
  className,
}: {
  items: Service[];
  className?: string;
}) {
  return (
    <Reveal
      stagger={0.07}
      className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {items.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </Reveal>
  );
}
