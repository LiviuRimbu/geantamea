import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const textElementVariants = cva(
  " leading-[5rem]  tracking-[0.125rem]  word-space text-center whitespace-nowrap",
  {
    variants: {
      variant: {
        logo: "text-[28px] uppercase text-white",
        title: "font-semibold text-3xl md:text-5xl",
        titleWhite:
          "font-[500] xs:text-[30px] sm:text-[38px] lg:text-[42px] text-white uppercase",
        subtitle:
          "text-[14px] xs:text-[16px] sm:text-[18px] text-black uppercase font-thin",
        subtitleWhite:
          "text-[14px] xs:text-[16px] sm:text-[18px] text-white uppercase font-thin",
        descriptionWhite: "text-white text-[12px] sm:text-[12px] uppercase",
        description: "  text-black text-[0.625rem] sm:text-[0.75rem] uppercase",
      },
      fontFamily: {
        default: "font-instrumentsans",
        optima: "font-optima",
      },
    },
    defaultVariants: {
      variant: "descriptionWhite",
      fontFamily: "default",
    },
  },
);

type TextType = HTMLParagraphElement & HTMLHeadingElement & HTMLSpanElement;

export interface TextElementProps
  extends React.HTMLAttributes<TextType>,
    VariantProps<typeof textElementVariants> {
  component?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const TextElement = React.forwardRef<TextType, TextElementProps>(
  (
    { className, variant, fontFamily, component = "p", children, ...props },
    ref,
  ) => {
    const Comp = component;
    return (
      <Comp
        className={cn(textElementVariants({ variant, fontFamily, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

TextElement.displayName = "TextElement";

export { TextElement, textElementVariants };
