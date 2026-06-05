import { ImageResponse } from "next/og";

export const alt = "Jafari Umzug & Transportservice – Schnell. Sicher. Zuverlässig.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c1a2e",
          backgroundImage:
            "radial-gradient(circle at 82% 12%, rgba(239,122,23,0.22), transparent 45%)",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "#ef7a17",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            J
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            Jafari Umzug &amp; Transportservice
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.04 }}>
            Ihr Umzug in Cloppenburg
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.04, color: "#5e8ce6" }}>
            Schnell. Sicher. Zuverlässig.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 26,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <span style={{ display: "flex", color: "#ef7a17", fontWeight: 700 }}>Festpreis-Angebot</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>Versichert bis 2 Mio. €</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>0176 42970915</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
