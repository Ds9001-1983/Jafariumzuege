import { SplitReveal } from "@/components/anim/split-reveal";
import { Eyebrow } from "@/components/site/eyebrow";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
}: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto max-w-2xl items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <SplitReveal
        as="h2"
        text={title}
        className={cn(
          "text-balance font-display text-[clamp(1.9rem,4.5vw,3.05rem)] font-semibold tracking-tight",
          isLight ? "text-white" : "text-ink",
          titleClassName,
        )}
      />
      {sub ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            isLight ? "text-white/70" : "text-muted",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
