import type { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
}

export default function Button({ className, variant = "primary", icon, children, ...props }: ButtonProps) {
  return (
    <button className={clsx("button", `button-${variant}`, className)} {...props}>
      {icon}
      {children}
    </button>
  );
}
