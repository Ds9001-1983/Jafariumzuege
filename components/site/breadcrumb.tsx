import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; href?: string };

export function Breadcrumb({
  items,
  tone = "light",
  className,
}: {
  items: Crumb[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const base = tone === "light" ? "text-white/55" : "text-muted";
  const link = tone === "light" ? "hover:text-white" : "hover:text-ink";
  const current = tone === "light" ? "text-white/90" : "text-ink";
  return (
    <nav aria-label="Brotkrumen" className={className}>
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", base)}>
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {it.href && !isLast ? (
                <Link href={it.href} className={cn("transition-colors", link)}>
                  {it.name}
                </Link>
              ) : (
                <span className={isLast ? current : undefined} aria-current={isLast ? "page" : undefined}>
                  {it.name}
                </span>
              )}
              {!isLast ? <ChevronRight className="size-3.5 opacity-50" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
