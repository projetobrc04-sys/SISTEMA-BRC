import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function MetricTrend({ value, positive = true }: { value: string; positive?: boolean }) {
  return (
    <span className={`metric-trend ${positive ? "positive" : "negative"}`}>
      {positive ? <ArrowUpRight size={15} /> : <ArrowDownRight size={15} />}
      {value}
    </span>
  );
}
