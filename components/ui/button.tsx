"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-500 text-white shadow-lg shadow-accent-500/20 hover:bg-accent-600 hover:shadow-accent-500/40",
        secondary:
          "bg-brand-700 text-white shadow-md shadow-brand-700/20 hover:bg-brand-800",
        outline:
          "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50 hover:border-brand-300 dark:border-brand-800 dark:bg-transparent dark:text-brand-100 dark:hover:bg-brand-900/40",
        ghost:
          "text-brand-700 hover:bg-brand-50 dark:text-brand-100 dark:hover:bg-brand-900/40",
        link: "text-brand-700 underline-offset-4 hover:underline dark:text-brand-200",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
