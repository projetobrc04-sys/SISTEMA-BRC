import BrcLogo from "./BrcLogo";

export default function BrcHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="brc-hero subtle-grid">
      <BrcLogo size="lg" />
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
