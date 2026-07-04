import { clsx } from "clsx";

export default function BrcLogo({ size = "md", withText = true }: { size?: "sm" | "md" | "lg"; withText?: boolean }) {
  return (
    <div className={clsx("brc-logo-wrap", `brc-logo-${size}`)}>
      <div className="brc-logo-mark" aria-label="BRC">
        <span>BRC</span>
      </div>
      {withText && (
        <div className="brc-logo-text">
          <strong>BRUNO RIBEIRO</strong>
          <span>CONCEPT</span>
        </div>
      )}
    </div>
  );
}
