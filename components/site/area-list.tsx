import { MapPin } from "lucide-react";
import { locationGroups } from "@/lib/locations";
import { Reveal } from "@/components/anim/reveal";
import { cn } from "@/lib/utils";

/** Pill-Wolke aller Orte (Startseiten-Teaser). */
export function AreaPills({ className }: { className?: string }) {
  const places = Array.from(new Set(locationGroups.flatMap((g) => g.places)));
  return (
    <Reveal as="ul" stagger={0.02} className={cn("flex flex-wrap gap-2.5", className)}>
      {places.map((p) => (
        <li key={p}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink/80 transition-colors hover:border-accent/40 hover:text-ink">
            <MapPin className="size-3.5 text-accent" />
            {p}
          </span>
        </li>
      ))}
    </Reveal>
  );
}
