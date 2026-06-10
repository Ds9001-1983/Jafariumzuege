import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clash, general } from "@/lib/fonts";
import { business, SITE_URL } from "@/lib/business";
import { movingCompanySchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { StickyCallBar } from "@/components/site/sticky-call-bar";
import { WhatsAppBubble } from "@/components/site/whatsapp-bubble";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Umzugsunternehmen Cloppenburg – Jafari Umzug & Transportservice",
    template: "%s · Jafari Umzug",
  },
  description:
    "Jafari Umzug & Transportservice: Ihr Umzugsunternehmen in Cloppenburg & im Oldenburger Münsterland. Privatumzug, Firmenumzug, Haushaltsauflösung & Transport – versichert, pünktlich, zum Festpreis. Jetzt anrufen: 0176 42970915.",
  applicationName: business.name,
  authors: [{ name: business.owner }],
  alternates: { canonical: "/" },
  keywords: [
    "Umzug Cloppenburg",
    "Umzugsunternehmen Cloppenburg",
    "Umzugsfirma Oldenburger Münsterland",
    "Haushaltsauflösung Cloppenburg",
    "Entrümpelung Cloppenburg",
    "Transportservice Cloppenburg",
    "Jafari Umzug",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: business.name,
    title: "Umzugsunternehmen Cloppenburg – Jafari Umzug & Transportservice",
    description:
      "Privatumzug, Firmenumzug, Haushaltsauflösung & Transport in Cloppenburg und Umgebung – versichert, pünktlich und zum Festpreis. Schnell. Sicher. Zuverlässig.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jafari Umzug & Transportservice – Cloppenburg",
    description: "Versicherter Umzug zum Festpreis. Schnell. Sicher. Zuverlässig. Jetzt anfragen.",
  },
  // Prototyp: nicht indexieren (Canonical zeigt auf die Live-Altseite).
  // VOR LAUNCH auf { index: true, follow: true } stellen + Header in vercel.json entfernen.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0c1a2e",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${clash.variable} ${general.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={movingCompanySchema()} />
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <StickyCallBar />
          <WhatsAppBubble />
        </SmoothScroll>
      </body>
    </html>
  );
}
