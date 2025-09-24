import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground shadow-button hover:shadow-button-hover hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground shadow-button hover:bg-destructive/90 hover:shadow-button-hover",
        outline: "border-2 border-gray-300 bg-background hover:bg-gray-50 hover:border-gray-400 shadow-button hover:shadow-button-hover",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-button hover:shadow-button-hover",
        ghost: "hover:bg-gray-100 hover:text-gray-900 transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        // Airbnb specific variants
        "airbnb-primary": "bg-gradient-primary text-white font-semibold shadow-button hover:shadow-button-hover hover:scale-[1.02] transition-all",
        "airbnb-outline": "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white shadow-button hover:shadow-button-hover transition-all",
        "airbnb-secondary": "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-button hover:shadow-button-hover",
        "airbnb-ghost": "text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors",
        "coral": "bg-airbnb-coral text-white font-medium shadow-button hover:bg-airbnb-coral-dark hover:shadow-button-hover hover:scale-[1.02]",
        "coral-light": "bg-airbnb-coral-light text-airbnb-coral border border-airbnb-coral/20 hover:bg-airbnb-coral hover:text-white shadow-button hover:shadow-button-hover",
        "success": "bg-success text-success-foreground shadow-button hover:shadow-button-hover",
        "warning": "bg-warning text-warning-foreground shadow-button hover:shadow-button-hover",
        "info": "bg-info text-info-foreground shadow-button hover:shadow-button-hover",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
