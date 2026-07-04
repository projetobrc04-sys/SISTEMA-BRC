import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

export default function StatCard({
  label,
  value,
  trend,
  icon,
  className,
}: {
  label: string;
  value: string;
  trend?: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx("stat-card", className)}>
      <div className="stat-card-top">
        <span>{label}</span>
        {icon ?? <ArrowUpRight size={18} />}
      </div>
      <strong className="kpi-number">{value}</strong>
      {trend && <small>{trend}</small>}
    </section>
  );
}
