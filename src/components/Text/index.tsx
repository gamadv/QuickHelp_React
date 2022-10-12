import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export type TTextprops = {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: ReactNode;
};

export function Text({ children, size = "md", asChild }: TTextprops) {
  const Component = asChild ? Slot : "span";
  return (
    <Component
      className={clsx("text-gray-500", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}
