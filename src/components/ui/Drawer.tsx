import { X } from "lucide-react";
import type { ReactNode } from "react";
import Button from "./Button";

export default function Drawer({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="overlay drawer-overlay" role="presentation" onMouseDown={onClose}>
      <aside className="drawer" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <Button variant="ghost" icon={<X size={18} />} onClick={onClose} aria-label="Fechar" />
        </div>
        {children}
      </aside>
    </div>
  );
}
