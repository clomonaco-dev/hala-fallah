import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCopy, isLocale, isServiceSlug, locales, serviceSlugs } from '@/lib/i18n';

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return locales.flatMap((locale) => serviceSlugs.map((slug) => ({ locale, slug })));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) return {};
  const service = getCopy(locale).services.cards.find((item) => item.slug === slug);
  return { title: `${service?.title ?? 'Services'} | Fallah Eyecare`, description: service?.text };
}
export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) notFound();
  const t = getCopy(locale);
  const service = t.services.cards.find((item) => item.slug === slug);
  if (!service) notFound();
  const index = serviceSlugs.indexOf(slug) + 1;
  return (
    <>
      <section className="detailHero"><div className="shell">
        <nav aria-label="Breadcrumb" className="breadcrumb"><Link href={`/${locale}`}>{t.nav.home}</Link><span aria-hidden="true">/</span><Link href={`/${locale}/servizi`}>{t.nav.services}</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
        <div className="detailHeroGrid">
          <div className="detailTitle"><span className="eyebrow">{t.services.detailEyebrow} · {String(index).padStart(2, '0')}</span><h1>{service.title}</h1><p className="lead">{service.text}</p><Link className="button buttonPrimary" href={`/${locale}/contatti`}>{t.common.bookVisit} ↗</Link></div>
          <div className="detailHeroImage"><img src={`/images/services/${service.slug}.png`} alt="" /></div>
        </div>
      </div></section>
      <section className="section sectionWhite"><div className="shell detailBodyGrid">
        <div className="detailDescription"><span className="eyebrow">{t.services.processTitle}</span><h2>{t.services.processText}</h2><p>{service.detail}</p><p>{t.services.assessmentNote}</p></div>
        <aside className="detailAreas"><span className="serviceIndex">{t.services.areas}</span><ul>{service.bullets.map((bullet) => <li key={bullet}><span aria-hidden="true">✓</span>{bullet}</li>)}</ul><p>{t.common.visitInfo}</p></aside>
      </div></section>
      <section className="section sectionSoft"><div className="shell detailClosing"><div><span className="eyebrow">{t.common.contactStudio}</span><h2>{t.services.helpTitle}</h2><p>{t.services.helpText}</p></div><div className="detailActions"><Link className="button buttonPrimary" href={`/${locale}/contatti`}>{t.common.bookVisit} ↗</Link><Link className="button buttonOutline" href={`/${locale}/servizi`}>← {t.common.backToServices}</Link></div></div></section>
    </>
  );
}
