import { trustFactors } from "@/lib/content";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/anim/reveal";

export function USPGrid() {
  return (
    <Reveal stagger={0.07} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {trustFactors.map((u) => (
        <div
          key={u.title}
          className="flex flex-col gap-3 rounded-card border border-line bg-white p-7 transition-colors duration-300 hover:border-accent/30"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent-deep">
            <Icon name={u.icon} className="size-6" />
          </span>
          <h3 className="font-display text-lg font-semibold text-ink">{u.title}</h3>
          <p className="text-[0.95rem] leading-relaxed text-muted">{u.text}</p>
        </div>
      ))}
    </Reveal>
  );
}
