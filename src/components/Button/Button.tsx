import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

export default function Button({ children, variant, style , ...rest }: TButton) {
//   console.log();
  return (
    <button {...rest} style={{ borderRadius:"8px", ...style, ...checkVariant(variant)}} className=" p-2 m-1">
      {children}
    </button>
  );
}

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
}
