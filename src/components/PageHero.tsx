import { Breadcrumb, type Crumb } from '@/components/Breadcrumb';

export function PageHero({ eyebrow, title, intro, crumbs, label }: { eyebrow: string; title: string; intro: string; crumbs?: Crumb[]; label?: string }) {
  return (
    <section className="pageHero">
      <div className="shell pageHeroInner">
        {crumbs && <Breadcrumb items={crumbs} label={label} />}
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </div>
    </section>
  );
}
