import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

type TPolyButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function PolyButton(props: TPolyButton) {
  const Component = props.asChild ? Slot : "button";
  return <Component className="px-4 py-2 rounded bg-yellow-700" {...props} />;
}
