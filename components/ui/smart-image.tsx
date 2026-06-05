"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

/**
 * next/image mit graceful Fallback: fehlt die Bilddatei (z. B. bevor die
 * Higgsfield-Bilder generiert wurden), wird statt eines kaputten Bildes
 * nichts gerendert – darunterliegender Gradient/Icon bleibt sichtbar.
 */
export function SmartImage({ alt, ...props }: ImageProps) {
  const [error, setError] = useState(false);
  if (error) return null;
  return <Image alt={alt} {...props} onError={() => setError(true)} />;
}
