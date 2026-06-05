import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em]",
        tone === "light" ? "text-accent-glow" : "text-accent-deep",
        className,
      )}
    >
      <span className="h-px w-7 bg-current opacity-50" aria-hidden="true" />
      {children}
    </span>
  );
}
