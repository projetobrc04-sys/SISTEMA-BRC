import { SearchX } from "lucide-react";

export default function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="empty-state">
      <SearchX size={22} />
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}