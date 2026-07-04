import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={clsx("card", className)}>{children}</section>;
}

export function SectionCard({
  title,
  eyebrow,
  action,
  children,
  className,
}: {
  title?: string;
  eyebrow?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx("card section-card", className)}>
      {(title || eyebrow || action) && (
        <div className="section-card-header">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
