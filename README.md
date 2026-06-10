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

Die echten Fotos der bestehenden Seite wurden übernommen (`/public/images/jafari-*.png`,
`customer-phone-call.jpg`). Das **Hero-Bild** (`jafari-team-truck.jpg`) wurde per KI-Retusche
korrigiert (Fake-Telefonnummer „030-JAFAR…" von der Beifahrertür entfernt, Kennzeichen auf
CLP geändert) und auf 2560×1920 hochskaliert. Das **Original-Logo** liegt unter
`/public/images/jafari-logo.jpg`, wird in der Über-uns-Sektion gezeigt und dient als Referenz
für die Wortmarke in Header/Footer (Navy + Orange + Swoosh).

---

## ✅ ZU VERIFIZIEREN vor Launch

Inhalte, die plausibel entworfen/aus der Altseite übernommen wurden und vom Kunden bestätigt
werden müssen (im Code mit `// VERIFY:` markiert):

- [ ] **FAQ-Antworten** (alle 6) — `lib/content.ts` › `faqs`. Fragen stammen von der Website,
      die Antworten wurden branchenüblich entworfen (Live-Accordion nicht auslesbar).
- [ ] **Preise** — `lib/content.ts` › `pricePackages`. Beispiel-Richtwerte (390 €/890 €/individuell);
      echte Preise/Pakete bestätigen.
- [ ] **Festpreis-Rechner** — `lib/pricing.ts`. Beispiel-Preislogik (Basis nach Größe + Entfernung +
      Etage + Extras → Spanne). Beträge mit dem Kunden kalibrieren; der Rechner zeigt bewusst nur eine
      unverbindliche Schätzung.
- [ ] **Inhaber & Rechtsform** — `lib/business.ts` › `owner`/`legalName` („Erfan Jafari" angenommen).
- [ ] **Impressum** — `app/impressum/page.tsx`: USt-IdNr. bzw. Kleinunternehmer-Hinweis,
      Gewerbe/Güterkraftverkehrserlaubnis (§ 3 GüKG bei Fahrzeugen > 3,5 t).
- [x] **Geo-Koordinaten** — exakt vom Google-Business-Profil übernommen (52.8574116, 8.046786).
- [x] **Google-Business-Profil verifiziert** (06/2026): Place-ID `ChIJEZfha6MVt0cRW8gJ1-Una24`,
      ~4,9/5 bei ~30 Bewertungen (via Trustlocal-Spiegel). Review- und Maps-Link in
      `lib/business.ts`. ⚠️ Exakten Bewertungsstand vor Launch im Profil gegenprüfen.
- [ ] **Testimonials** — `lib/content.ts` › `testimonials`. Von der Website übernommen (Trustindex
      spiegelt Google-Rezensionen), Echtheit bestätigen.
- [ ] **Finale Domain** — `lib/business.ts` › `SITE_URL`.
- [ ] **noindex entfernen vor Launch** — `app/layout.tsx` › `robots` UND `vercel.json` ›
      `X-Robots-Tag`-Header (Prototyp ist bewusst auf noindex, damit die Demo nicht in Google
      landet, solange das Canonical auf die Altseiten-Domain zeigt).
- [ ] **Trust-Zahl „1000+ Umzüge"** — `lib/content.ts` › `trustItems` (Schätzung, bestätigen).
- [ ] **Logo** — entweder Wortmarke beibehalten oder das Original-Logo final einbinden.
- [ ] **Mailversand** — `LEAD_FORWARD_URL` oder echten Versand (z. B. Resend) konfigurieren.

---

Made with ❤️ by SUPERBRAND.marketing – Dein Superheld für deine Werbung.
