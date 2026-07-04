import BeautyStrands from "../effects/BeautyStrands";
import BrcLogo from "./BrcLogo";

export default function BrcHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="brc-hero">
      <BeautyStrands />
      <div className="brc-hero-logo">
        <BrcLogo size="lg" />
      </div>
      <div className="brc-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}