import PremiumAura from "../effects/PremiumAura";
import BrcLogo from "./BrcLogo";

export default function BrcHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="brc-hero subtle-grid">
      <PremiumAura />
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
