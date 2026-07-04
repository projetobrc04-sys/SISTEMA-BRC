import { clsx } from "clsx";
import type { SelectHTMLAttributes } from "react";

export default function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={clsx("input select", className)} {...props}>
      {children}
    </select>
  );
}
