export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="pageHero">
      <div className="shell pageHeroInner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </div>
      <span className="pageHeroDecoration" aria-hidden="true" />
    </section>
  );
}
