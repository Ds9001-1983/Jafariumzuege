"use client";

import { useRef } from "react";
import { SmartImage } from "@/components/ui/smart-image";
import { gsap, prefersReducedMotion } from "@/lib/anim/gsap";
import { useIsoLayoutEffect } from "@/lib/anim/use-iso-layout-effect";
import { cn } from "@/lib/utils";

/** Dunkler Hero-Hintergrund mit Bild (Ken-Burns + sanfter Parallax) + Scrims. */
export function HeroBackground({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-ink bg-grid", className)}>
      <div ref={ref} className="absolute inset-x-0 -top-[8%] h-[116%]">
        <SmartImage
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="animate-[kenburns_18s_ease-out_forwards] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
    </div>
  );
}
