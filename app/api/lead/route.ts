import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { business } from "@/lib/business";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Eingabe." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Ungültige Eingabe." }, { status: 400 });
  }
  const data = parsed.data;

  // Honeypot ausgefüllt → Bot: still „erfolgreich" beantworten, nichts tun.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    moveType: data.moveType,
    fromAddress: data.fromAddress,
    toAddress: data.toAddress,
    moveDate: data.moveDate,
    size: data.size,
    name: data.name,
    phone: data.phone,
    email: data.email,
    message: data.message,
  };

  // VERIFY/TODO-MAIL: Im Prototyp wird die Anfrage je nach Konfiguration
  // weitergeleitet. Ist keine ENV gesetzt, läuft der Demo-Modus (nur Logging),
  // damit der Prototyp ohne Secrets lauffähig ist.
  // Variante A: Formspree-/Webhook-Endpoint (kein Account-Code nötig).
  const forwardUrl = process.env.LEAD_FORWARD_URL;
  if (forwardUrl) {
    try {
      const res = await fetch(forwardUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, _empfaenger: business.email }),
      });
      if (!res.ok) throw new Error(`Webhook antwortete mit ${res.status}`);
    } catch (err) {
      // Lead in den Vercel-Logs auffindbar halten — Rettungsanker bei Webhook-Ausfall.
      console.error("[Jafari Lead] Weiterleitung fehlgeschlagen:", err, lead);
      return NextResponse.json(
        { ok: false, error: "Anfrage konnte nicht übermittelt werden. Bitte rufen Sie uns an." },
        { status: 502 },
      );
    }
  } else {
    // Demo-Modus
    console.log("[Jafari Lead-Anfrage]", lead);
  }

  return NextResponse.json({ ok: true });
}
