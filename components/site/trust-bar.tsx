import { trustItems } from "@/lib/content";
import { Icon } from "@/components/ui/icon";
import { CountUp } from "@/components/anim/count-up";
import { Reveal } from "@/components/anim/reveal";
import { cn } from "@/lib/utils";

export function TrustBar({ className }: { className?: string }) {
  return (
    <Reveal
      as="ul"
      stagger={0.08}
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line shadow-soft md:grid-cols-4",
        className,
      )}
    >
      {trustItems.map((t) => (
        <li key={t.label} className="flex items-center gap-3.5 bg-white px-5 py-5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep">
            <Icon name={t.icon} className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-xl font-bold text-ink">
              {t.countTo != null ? <CountUp to={t.countTo} suffix={t.suffix ?? ""} /> : t.value}
            </span>
            <span className="text-sm leading-tight text-muted">{t.label}</span>
          </span>
        </li>
      ))}
    </Reveal>
  );
}
