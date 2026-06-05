import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projekt-Root explizit setzen (es existiert eine fremde Lockfile in ~).
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
