"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

/** Sticky Aktions-Bar (nur Mobil). Erscheint, nachdem die Hero weggescrollt ist. */
export function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch gap-2 bg-ink/95 p-2.5 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur">
        <a
          href={business.phone.href}
          data-call-cta
          aria-label={`Jetzt anrufen: ${business.phone.display}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-signal py-3.5 text-[0.95rem] font-semibold text-white active:scale-[0.98]"
        >
          <Phone className="size-5 animate-ring" />
          Anrufen
        </a>
        {business.whatsappEnabled ? (
          <a
            href={business.whatsapp.hrefPrefilled}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schreiben Sie uns auf WhatsApp"
            className="grid w-14 place-items-center rounded-full bg-whatsapp text-white active:scale-[0.98]"
          >
            <MessageCircle className="size-5" />
          </a>
        ) : null}
        <Link
          href="/#kontakt"
          aria-label="Kostenloses Angebot anfordern"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white/10 py-3.5 text-[0.95rem] font-semibold text-white active:scale-[0.98]"
        >
          Angebot
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
