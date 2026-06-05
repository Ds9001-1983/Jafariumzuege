import { Star, Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Deterministische, dezente Avatar-Farbe aus dem Namen (kein Fake-Foto). */
const avatarTones = [
  "bg-accent/10 text-accent",
  "bg-signal/10 text-signal-deep",
  "bg-ink/[0.06] text-ink",
];

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <figure className="flex w-[330px] shrink-0 flex-col gap-4 rounded-card border border-line bg-white p-7 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-yellow-400" aria-label="5 von 5 Sternen">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
        <Quote className="size-7 text-accent/20" aria-hidden="true" />
      </div>
      <blockquote className="text-[0.975rem] leading-relaxed text-ink/85">„{t.quote}“</blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full font-display text-sm font-bold",
            avatarTones[index % avatarTones.length],
          )}
        >
          {initials(t.name)}
        </span>
        <span className="text-sm font-semibold text-ink">
          {t.name}
          {t.location ? <span className="font-normal text-muted"> · {t.location}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}

/** Endlos laufende Bewertungs-Leiste (pausiert bei Hover). */
export function TestimonialMarquee() {
  const list = [...testimonials, ...testimonials];
  return (
    <div className="group relative overflow-hidden">
      <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        {list.map((t, i) => (
          <TestimonialCard key={i} t={t} index={i} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent sm:w-24" />
    </div>
  );
}
