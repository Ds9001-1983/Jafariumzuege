import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { SmartImage } from "@/components/ui/smart-image";
import type { Service } from "@/lib/content";

export function ServiceCard({ service, href }: { service: Service; href?: string }) {
  const link = href ?? `/leistungen#${service.slug}`;
  return (
    <Link
      href={link}
      className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink to-accent-deep">
        <span className="absolute left-4 top-4 z-10 grid size-12 place-items-center rounded-xl bg-white/95 text-accent shadow-sm backdrop-blur transition-transform duration-300 group-hover:scale-110">
          <Icon name={service.icon} className="size-6" />
        </span>
        <SmartImage
          src={service.image}
          alt={`${service.title} – Jafari Umzug & Transportservice`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
        <p className="text-[0.95rem] leading-relaxed text-muted">{service.short}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Mehr erfahren
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-signal transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
