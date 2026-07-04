import Sidebar from "./Sidebar";

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="mobile-nav-overlay" role="presentation" onMouseDown={onClose}>
      <div className="mobile-nav" onMouseDown={(event) => event.stopPropagation()}>
        <Sidebar onNavigate={onClose} />
      </div>
    </div>
  );
}
