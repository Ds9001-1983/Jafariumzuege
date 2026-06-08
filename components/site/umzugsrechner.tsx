"use client";

import { useMemo, useState } from "react";
import { Calculator, ArrowRight, Phone, MessageCircle } from "lucide-react";
import {
  sizeOptions,
  distanceOptions,
  accessOptions,
  addonOptions,
  estimateRange,
  euro,
  type PriceOption,
} from "@/lib/pricing";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

/**
 * Interaktiver Festpreis-Rechner: Live-Richtpreis in ~60 Sek.
 * Adressiert die Dislikes der Altseite („bringt keine Anfragen",
 * „Funktionen fehlen") und ist der zentrale Conversion-Motor.
 * Bei „Angebot sichern" werden die Eingaben per CustomEvent an das
 * Lead-Formular (#kontakt) übergeben.
 */
export function Umzugsrechner() {
  const [size, setSize] = useState(sizeOptions[1].id);
  const [distance, setDistance] = useState(distanceOptions[0].id);
  const [access, setAccess] = useState(accessOptions[0].id);
  const [addons, setAddons] = useState<string[]>([]);

  const find = (list: PriceOption[], id: string) => list.find((o) => o.id === id)!;

  const range = useMemo(() => {
    const addonSum = addons.reduce((s, id) => s + find(addonOptions, id).value, 0);
    return estimateRange({
      size: find(sizeOptions, size).value,
      distance: find(distanceOptions, distance).value,
      access: find(accessOptions, access).value,
      addons: addonSum,
    });
  }, [size, distance, access, addons]);

  const toggleAddon = (id: string) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));

  const handleRequest = () => {
    const sizeLabel = find(sizeOptions, size).label;
    const distanceLabel = find(distanceOptions, distance).label;
    const accessLabel = find(accessOptions, access).label;
    const addonLabels = addons.map((id) => find(addonOptions, id).label);
    const summary =
      `Festpreis-Rechner: ${sizeLabel} · ${distanceLabel} · ${accessLabel}` +
      (addonLabels.length ? ` · Extras: ${addonLabels.join(", ")}` : "") +
      `. Geschätzter Richtpreis: ca. ${euro(range.low)} – ${euro(range.high)}.`;

    window.dispatchEvent(
      new CustomEvent("jafari:prefill", {
        detail: { moveType: "Privatumzug", size: sizeLabel, summary },
      }),
    );
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white p-6 shadow-lift sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent">
            <Calculator className="size-5" />
          </span>
          <h2 className="font-display text-lg font-semibold text-ink">Festpreis-Rechner</h2>
        </div>
        <span className="rounded-full bg-paper-dim px-3 py-1 text-xs font-medium text-muted">
          ≈ 60 Sekunden
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <Group label="Wie groß ist Ihr Umzug?">
          {sizeOptions.map((o) => (
            <Chip key={o.id} active={size === o.id} onClick={() => setSize(o.id)}>
              {o.label}
            </Chip>
          ))}
        </Group>
        <Group label="Entfernung">
          {distanceOptions.map((o) => (
            <Chip key={o.id} active={distance === o.id} onClick={() => setDistance(o.id)}>
              {o.label}
            </Chip>
          ))}
        </Group>
        <Group label="Zugang">
          {accessOptions.map((o) => (
            <Chip key={o.id} active={access === o.id} onClick={() => setAccess(o.id)}>
              {o.label}
            </Chip>
          ))}
        </Group>
        <Group label="Extras (optional)">
          {addonOptions.map((o) => (
            <Chip key={o.id} active={addons.includes(o.id)} onClick={() => toggleAddon(o.id)} multi>
              {o.label}
            </Chip>
          ))}
        </Group>
      </div>

      {/* Live-Ergebnis */}
      <div className="mt-5 flex flex-col gap-1 rounded-xl border border-accent/20 bg-accent/[0.06] p-5">
        <span className="text-sm font-medium text-muted">Ihr Richtpreis</span>
        <span className="font-display text-3xl font-bold text-ink sm:text-4xl">
          ca. {euro(range.low)} – {euro(range.high)}
        </span>
        <span className="text-xs leading-relaxed text-muted">
          Unverbindliche Schätzung. Ihr exakter Festpreis folgt nach der kostenlosen Besichtigung.
        </span>
      </div>

      <button
        type="button"
        onClick={handleRequest}
        data-cta
        className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-signal px-6 text-base font-semibold text-white shadow-soft transition-[transform,background-color] duration-200 hover:bg-signal-deep active:scale-[0.98]"
      >
        Genaues Festpreis-Angebot sichern
        <ArrowRight className="size-5" />
      </button>
      <div className="mt-3 flex items-center justify-center gap-4 text-sm text-muted">
        <a
          href={business.phone.href}
          data-call-cta
          className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-signal-deep"
        >
          <Phone className="size-4 text-signal" />
          Anrufen
        </a>
        <span aria-hidden="true" className="text-line">|</span>
        <a
          href={business.whatsapp.hrefPrefilled}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-whatsapp-deep"
        >
          <MessageCircle className="size-4 text-whatsapp" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  multi,
  onClick,
  children,
}: {
  active: boolean;
  multi?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
        active
          ? multi
            ? "border-accent/40 bg-accent/10 text-accent"
            : "border-accent bg-accent text-white"
          : "border-line bg-white text-ink/80 hover:border-accent/40 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
