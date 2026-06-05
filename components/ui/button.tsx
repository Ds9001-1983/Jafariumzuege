import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium leading-none whitespace-nowrap transition-[transform,background-color,box-shadow,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Orange = Aktion: ausschließlich Anruf-/Primär-CTA
        signal: "bg-signal text-white shadow-soft hover:bg-signal-deep hover:shadow-lift",
        // Grün = ausschließlich WhatsApp
        whatsapp: "bg-whatsapp text-white shadow-soft hover:bg-whatsapp-deep hover:shadow-lift",
        accent: "bg-accent text-white hover:bg-accent-deep",
        dark: "bg-ink text-white hover:bg-ink-soft",
        outline: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
        outlineLight: "border border-white/25 text-white hover:border-white/70 hover:bg-white/10",
        ghost: "text-ink hover:bg-ink/[0.05]",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-9 text-lg",
      },
    },
    defaultVariants: { variant: "accent", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
