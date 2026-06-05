# Jafari Umzug & Transportservice — Website-Prototyp

Premium-Redesign-Prototyp (SUPERBRAND Prototyp-Funnel, Lead PROT-19) für die Umzugsfirma
**Jafari Umzug & Transportservice**, Cloppenburg. Stil: edel-premium. Ziele: Termine + Anfragen.

## Tech-Stack

- **Next.js 16 (App Router)** · React 19 · **Tailwind CSS 4** · TypeScript
- **GSAP + ScrollTrigger** + **Lenis** (Smooth Scroll, reduced-motion-safe)
- **react-hook-form + zod** (mehrstufiges Lead-Formular)
- Radix UI (Accordion, Dialog), Lucide Icons
- Self-hosted Fonts: **Clash Display** (Headlines) + **General Sans** (Body) — DSGVO-clean

## Struktur (Hybrid)

- `/` — One-Pager: Hero · Trust-Bar · Warum Jafari · Leistungen · Ablauf · Bewertungen ·
  Einsatzgebiete · WhatsApp · FAQ · Kontakt (Lead-Formular) · Final-CTA
- `/leistungen` — SEO-Unterseite mit allen 6 Leistungen im Detail
- `/preise` — Preismodell, Festpreis-Erklärung, Richtwert-Pakete
- `/impressum`, `/datenschutz` — Pflichtseiten
- `/api/lead` — Lead-Handler (zod-Validierung, Honeypot, Demo-Modus)

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run lint
```

### Optionale ENV

| Variable | Zweck |
|---|---|
| `LEAD_FORWARD_URL` | Formular-Anfragen an Webhook/Formspree weiterleiten. Ohne Wert: Demo-Modus (nur Logging). |
| `NEXT_PUBLIC_PROTOTYPE=true` | Blendet sichtbare „noch zu bestätigen"-Badges an Platzhalter-Inhalten ein (z. B. /preise). Vor Launch entfernen. |

## Bilder

Die echten Fotos der bestehenden Seite wurden 1:1 übernommen (`/public/images/jafari-*.png`,
`customer-phone-call.jpg`). Das **Original-Logo** liegt unter `/public/images/jafari-logo.jpg` und
ist als Marken-Referenz erhalten; Header/Footer nutzen eine refinierte Wortmarke in den exakten
Logo-Farben (Navy + Orange).

---

## ✅ ZU VERIFIZIEREN vor Launch

Inhalte, die plausibel entworfen/aus der Altseite übernommen wurden und vom Kunden bestätigt
werden müssen (im Code mit `// VERIFY:` markiert):

- [ ] **FAQ-Antworten** (alle 6) — `lib/content.ts` › `faqs`. Fragen stammen von der Website,
      die Antworten wurden branchenüblich entworfen (Live-Accordion nicht auslesbar).
- [ ] **Preise** — `lib/content.ts` › `pricePackages`. Beispiel-Richtwerte (390 €/890 €/individuell);
      echte Preise/Pakete bestätigen.
- [ ] **Inhaber & Rechtsform** — `lib/business.ts` › `owner`/`legalName` („Erfan Jafari" angenommen).
- [ ] **Impressum** — `app/impressum/page.tsx`: USt-IdNr. bzw. Kleinunternehmer-Hinweis,
      Gewerbe/Güterkraftverkehrserlaubnis (§ 3 GüKG bei Fahrzeugen > 3,5 t).
- [ ] **Geo-Koordinaten** — `lib/business.ts` › `geo` (Näherung Cloppenburg) exakt geocoden.
- [ ] **Bewertung 5,0/14 (Trustindex)** — `lib/business.ts` › `rating`. Echtheit prüfen; ein
      `aggregateRating` im JSON-LD nur mit belegbaren Werten ergänzen (Google-Policy).
- [ ] **Google-Bewertungs-URL** — `lib/business.ts` › `googleReviewUrl` (aktuell leer).
- [ ] **Testimonials** — `lib/content.ts` › `testimonials`. Von der Website übernommen, Echtheit
      bestätigen.
- [ ] **Finale Domain** — `lib/business.ts` › `SITE_URL`.
- [ ] **Logo** — entweder Wortmarke beibehalten oder das Original-Logo final einbinden.
- [ ] **Mailversand** — `LEAD_FORWARD_URL` oder echten Versand (z. B. Resend) konfigurieren.

---

Made with ❤️ by SUPERBRAND.marketing – Dein Superheld für deine Werbung.
