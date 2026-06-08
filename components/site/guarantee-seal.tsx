import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/** Rotiertes „Festpreis-Garantie"-Siegel (bespoke Trust-Element, Stempel-Optik). */
export function GuaranteeSeal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-32 -rotate-[8deg] flex-col items-center justify-center gap-1 rounded-full border-[3px] border-signal bg-paper text-center shadow-lift",
        className,
      )}
    >
      <ShieldCheck className="size-6 text-signal" strokeWidth={2} />
      <span className="font-display text-[0.92rem] font-bold uppercase leading-tight tracking-tight text-ink">
        Festpreis-
        <br />
        Garantie
      </span>
      <span className="px-2 text-[0.58rem] font-medium uppercase tracking-wide text-muted">
        ohne versteckte Kosten
      </span>
    </div>
  );
}
