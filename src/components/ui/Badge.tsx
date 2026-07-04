import { clsx } from "clsx";
import type { ReactNode } from "react";

export type BadgeTone = "neutral" | "champagne" | "success" | "warning" | "danger" | "info";

export default function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return <span className={clsx("badge", `badge-${tone}`, className)}>{children}</span>;
}
