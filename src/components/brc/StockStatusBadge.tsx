import StatusBadge from "../ui/StatusBadge";

export default function StockStatusBadge({ status }: { status: string }) {
  return <StatusBadge status={status} />;
}
