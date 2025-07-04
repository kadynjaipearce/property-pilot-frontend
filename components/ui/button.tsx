import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-lavender)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-text-main)] text-white",
        accent:
          "bg-[var(--color-accent-lavender)] text-[var(--color-text-main)]",
        mint: "bg-[var(--color-accent-mint)] text-[var(--color-text-main)]",
        peach: "bg-[var(--color-accent-peach)] text-[var(--color-text-main)]",
        outline:
          "bg-white text-[var(--color-text-main)] border border-[var(--color-border)]",
      },
      size: {
        default: "h-11 px-7 py-2",
        sm: "h-9 px-5 py-1.5 text-sm",
        lg: "h-14 px-10 py-3 text-lg",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
