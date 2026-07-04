import type { ReactNode } from "react";

export default function PresentationCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="presentation-card">
      <span />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
