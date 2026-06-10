"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { CallButton } from "./call-button";
import { WhatsAppButton } from "./whatsapp-button";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, y / h) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Über der dunklen Hero (oben) = heller Ton, gescrollt = dunkler Ton auf Paper.
  const light = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled ? "bg-white/85 shadow-soft backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden">
        <div ref={progressRef} className="h-full origin-left scale-x-0 bg-signal" />
      </div>

      <div
        className={cn(
          "mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 transition-[height] duration-300 lg:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo tone={light ? "light" : "dark"} />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isRoute = !l.href.includes("#");
            const active = isRoute && pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  light ? "text-white/80 hover:text-white" : "text-ink/70 hover:text-ink",
                  active && (light ? "text-white" : "text-ink"),
                )}
              >
                {l.label}
                {active ? (
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full",
                      light ? "bg-signal" : "bg-signal",
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phone.href}
            data-call-cta
            className={cn(
              "hidden text-sm font-semibold transition-colors xl:inline",
              light ? "text-white hover:text-signal" : "text-ink hover:text-signal-deep",
            )}
          >
            {business.phone.display}
          </a>
          <CallButton size="sm" showNumber={false} label="Anrufen" />
          <Button asChild variant={light ? "outlineLight" : "accent"} size="sm">
            <Link href="/#kontakt">Angebot</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CallButton size="sm" showNumber={false} label="Anrufen" className="px-4" />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Menü öffnen"
                className={cn(
                  "grid size-11 place-items-center rounded-full transition-colors",
                  light ? "text-white hover:bg-white/10" : "text-ink hover:bg-ink/5",
                )}
              >
                <Menu className="size-6" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm data-[state=open]:animate-[fade-in_0.2s_ease]" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-ink text-white shadow-2xl outline-none data-[state=open]:animate-[slide-in_0.32s_cubic-bezier(0.16,1,0.3,1)]">
                <Dialog.Title className="sr-only">Menü</Dialog.Title>
                <div className="flex h-20 items-center justify-between px-6">
                  <Logo tone="light" />
                  <Dialog.Close
                    aria-label="Menü schließen"
                    className="grid size-11 place-items-center rounded-full text-white hover:bg-white/10"
                  >
                    <X className="size-6" />
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col gap-1 px-6 py-4">
                  {navLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 font-display text-xl font-semibold text-white/90 transition-colors hover:bg-white/5"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3 border-t border-white/10 p-6">
                  <CallButton size="lg" className="w-full" />
                  <WhatsAppButton variant="whatsapp" size="lg" className="w-full" />
                  <p className="text-sm text-white/60">
                    {business.hours} · {business.serviceAreaShort}
                  </p>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
