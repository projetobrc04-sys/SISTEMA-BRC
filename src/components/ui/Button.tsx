import type { ReactNode } from "react";
import { clsx } from "clsx";
import { Loader2 } from "lucide-react";
import { motion, type HTMLMotionProps } from "motion/react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  loading?: boolean;
}

export default function Button({ className, variant = "primary", icon, children, loading = false, disabled, ...props }: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      className={clsx("button", `button-${variant}`, className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      whileHover={isDisabled ? undefined : { y: -1, scale: 1.015 }}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 520, damping: 32 }}
      {...props}
    >
      <span className="button-icon">{loading ? <Loader2 className="button-spinner" size={16} /> : icon}</span>
      {children}
    </motion.button>
  );
}
