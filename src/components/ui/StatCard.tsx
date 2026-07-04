import type { ReactNode } from "react";
import { clsx } from "clsx";

type StatVariant = "primary" | "accent" | "secondary";

export default function StatCard({
  label,
  value,
  trend,
  icon,
  variant = "secondary",
  className,
}: {
  label: string;
  value: string;
  trend?: string;
  icon?: ReactNode;
  variant?: StatVariant;
  className?: string;
}) {
  return (
    <section className={clsx("stat-card", `stat-card-${variant}`, className)}>
      <div className="stat-card-top">
        <span>{label}</span>
        {icon && <span className="stat-card-icon">{icon}</span>}
      </div>
      <strong className="kpi-number">{value}</strong>
      {trend && <small>{trend}</small>}
    </section>
  );
}