"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/site/call-button";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { leadSchema, moveTypes, type LeadInput } from "@/lib/lead-schema";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const stepFields: (keyof LeadInput)[][] = [
  ["moveType", "fromAddress", "toAddress", "moveDate", "size"],
  ["name", "phone", "email"],
  ["message", "consent", "website"],
];

const stepLabels = ["Umzug", "Kontakt", "Abschluss"];

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onTouched",
    defaultValues: { moveType: "", consent: false },
  });

  // Übernahme der Eingaben aus dem Festpreis-Rechner (#kontakt-Sprung).
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ moveType?: string; size?: string; summary?: string }>)
        .detail;
      if (!detail) return;
      if (detail.moveType) setValue("moveType", detail.moveType);
      if (detail.size) setValue("size", detail.size);
      if (detail.summary) setValue("message", detail.summary);
      setStep(1);
    };
    window.addEventListener("jafari:prefill", handler);
    return () => window.removeEventListener("jafari:prefill", handler);
  }, [setValue]);

  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, stepFields.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: LeadInput) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-card border border-accent/30 bg-accent/5 p-8">
        <span className="grid size-12 place-items-center rounded-full bg-accent text-white">
          <Check className="size-6" />
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">Vielen Dank für Ihre Anfrage!</h3>
        <p className="text-muted">
          Wir haben Ihre Angaben erhalten und melden uns innerhalb von 24 Stunden bei Ihnen. Es eilt?
          Erreichen Sie uns direkt:
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CallButton showNumber={false} />
          <WhatsAppButton
            variant="whatsapp"
            message="Hallo, ich habe gerade eine Anfrage über Ihre Website gesendet."
          />
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-card border border-line bg-white p-7 shadow-soft sm:p-8"
    >
      {/* Fortschritt */}
      <div className="flex items-center gap-2" aria-label={`Schritt ${step + 1} von 3`}>
        {stepLabels.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-1.5">
            <span className="h-1.5 overflow-hidden rounded-full bg-line">
              <span
                className={cn(
                  "block h-full rounded-full bg-accent transition-all duration-300",
                  i <= step ? "w-full" : "w-0",
                )}
              />
            </span>
            <span
              className={cn(
                "text-xs font-medium",
                i === step ? "text-accent" : "text-muted",
              )}
            >
              {i + 1}. {label}
            </span>
          </div>
        ))}
      </div>

      {/* Schritt 1: Umzugsdetails */}
      <div className={cn("flex-col gap-5", step === 0 ? "flex" : "hidden")}>
        <Field label="Welche Leistung benötigen Sie?" error={errors.moveType?.message} required>
          <select
            className={cn(
              fieldBase,
              "appearance-none",
              errors.moveType ? "border-red-400" : "border-line focus:border-accent",
            )}
            defaultValue=""
            {...register("moveType")}
          >
            <option value="" disabled>
              Bitte wählen …
            </option>
            {moveTypes.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Von (Ort / Adresse)" error={errors.fromAddress?.message} required>
            <input
              type="text"
              autoComplete="off"
              placeholder="z. B. Cloppenburg"
              className={cn(
                fieldBase,
                errors.fromAddress ? "border-red-400" : "border-line focus:border-accent",
              )}
              {...register("fromAddress")}
            />
          </Field>
          <Field label="Nach (Ort / Adresse)" error={errors.toAddress?.message}>
            <input
              type="text"
              autoComplete="off"
              placeholder="z. B. Oldenburg"
              className={cn(fieldBase, "border-line focus:border-accent")}
              {...register("toAddress")}
            />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Wunschtermin (optional)" error={errors.moveDate?.message}>
            <input
              type="date"
              className={cn(fieldBase, "border-line focus:border-accent")}
              {...register("moveDate")}
            />
          </Field>
          <Field label="Wohnungsgröße (optional)" error={errors.size?.message}>
            <input
              type="text"
              placeholder="z. B. 3 Zimmer / 80 m²"
              className={cn(fieldBase, "border-line focus:border-accent")}
              {...register("size")}
            />
          </Field>
        </div>
      </div>

      {/* Schritt 2: Kontaktdaten */}
      <div className={cn("flex-col gap-5", step === 1 ? "flex" : "hidden")}>
        <Field label="Name" error={errors.name?.message} required>
          <input
            type="text"
            autoComplete="name"
            placeholder="Ihr Name"
            className={cn(
              fieldBase,
              errors.name ? "border-red-400" : "border-line focus:border-accent",
            )}
            {...register("name")}
          />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Telefon" error={errors.phone?.message} required>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="Ihre Telefonnummer"
              className={cn(
                fieldBase,
                errors.phone ? "border-red-400" : "border-line focus:border-accent",
              )}
              {...register("phone")}
            />
          </Field>
          <Field label="E-Mail (optional)" error={errors.email?.message}>
            <input
              type="email"
              autoComplete="email"
              placeholder="ihre@email.de"
              className={cn(
                fieldBase,
                errors.email ? "border-red-400" : "border-line focus:border-accent",
              )}
              {...register("email")}
            />
          </Field>
        </div>
      </div>

      {/* Schritt 3: Nachricht + Einwilligung */}
      <div className={cn("flex-col gap-5", step === 2 ? "flex" : "hidden")}>
        <Field label="Ihre Nachricht (optional)" error={errors.message?.message}>
          <textarea
            rows={4}
            placeholder="Besonderheiten? Etagen, Aufzug, sperrige Möbel, gewünschte Zusatzleistungen …"
            className={cn(fieldBase, "resize-none border-line focus:border-accent")}
            {...register("message")}
          />
        </Field>

        {/* Honeypot (für Menschen unsichtbar) */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          {...register("website")}
        />

        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-[var(--color-accent)]"
            {...register("consent")}
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" className="text-accent underline underline-offset-2">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung der Anfrage
            einverstanden.
          </span>
        </label>
        {errors.consent ? (
          <p className="-mt-2 text-sm text-red-500">{errors.consent.message}</p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-500">
          Da ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.
        </p>
      ) : null}

      {/* Navigation */}
      <div className="mt-1 flex items-center gap-3">
        {step > 0 ? (
          <Button type="button" variant="outline" size="lg" onClick={back}>
            <ArrowLeft className="size-5" />
            Zurück
          </Button>
        ) : null}
        {step < stepFields.length - 1 ? (
          <Button type="button" variant="signal" size="lg" onClick={next} className="ml-auto">
            Weiter
            <ArrowRight className="size-5" />
          </Button>
        ) : (
          <Button
            type="submit"
            variant="signal"
            size="lg"
            disabled={status === "loading"}
            className="ml-auto"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Wird gesendet …
              </>
            ) : (
              "Kostenloses Angebot anfordern"
            )}
          </Button>
        )}
      </div>
      <p className="text-center text-sm text-muted">
        Kostenlos &amp; unverbindlich. Wir melden uns innerhalb von 24 Stunden.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-signal"> *</span> : null}
      </span>
      {children}
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
    </label>
  );
}
