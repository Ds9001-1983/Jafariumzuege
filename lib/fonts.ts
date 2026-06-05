import localFont from "next/font/local";

/** Display-Font: Clash Display (Headlines). Self-hosted, DSGVO-clean. */
export const clash = localFont({
  src: [
    { path: "../app/fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../app/fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/** Body/UI-Font: General Sans. Self-hosted, DSGVO-clean. */
export const general = localFont({
  src: [
    { path: "../app/fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-general",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});
