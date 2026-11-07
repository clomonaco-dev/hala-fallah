import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Icon } from '@/components/Icon';
import { ServiceCard } from '@/components/ServiceCard';
import { getCopy, isLocale, isServiceSlug, locales, serviceSlugs, site } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return locales.flatMap((locale) => serviceSlugs.map((slug) => ({ locale, slug })));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) return {};
  const service = getCopy(locale).services.cards.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata(locale, `servizi/${slug}`, service.title, `${service.text} ${service.detail}`.slice(0, 300));
}
export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isServiceSlug(slug)) notFound();
  const t = getCopy(locale);
  const service = t.services.cards.find((item) => item.slug === slug);
  if (!service) notFound();
  const position = serviceSlugs.indexOf(slug);
  // Tre prestazioni successive (a rotazione) come suggerimenti correlati.
  const related = [1, 2, 3].map((offset) => (position + offset) % t.services.cards.length);
  return (
    <>
      <section className="detailHero"><div className="shell">
        <Breadcrumb label={t.common.breadcrumb} items={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.services, href: `/${locale}/servizi` }, { label: service.title }]} />
        <div className="detailHeroGrid">
          <div className="detailTitle">
            <span className="eyebrow">{t.services.detailEyebrow} · {String(position + 1).padStart(2, '0')}</span>
            <h1>{service.title}</h1>
            <p className="lead">{service.text}</p>
            <div className="actionRow">
              <Link className="button buttonPrimary" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
              <a className="button buttonOutline" href={site.phoneHref}><Icon name="phone" size={18} />{t.common.call}</a>
            </div>
          </div>
          <div className="detailHeroImage"><Image src={`/images/services/${service.slug}.png`} alt="" fill preload sizes="(max-width: 1024px) 92vw, 560px" /></div>
        </div>
      </div></section>

      <section className="section sectionWhite"><div className="shell detailBodyGrid">
        <div className="detailDescription reveal">
          <span className="eyebrow">{t.services.processTitle}</span>
          <h2>{t.services.processText}</h2>
          <p>{service.detail}</p>
          <p>{t.services.assessmentNote}</p>
        </div>
        <aside className="detailAreas reveal">
          <span className="detailAreasTitle">{t.services.areas}</span>
          <ul>{service.bullets.map((bullet) => <li key={bullet}><span className="checkBullet" aria-hidden="true"><Icon name="check" size={15} strokeWidth={2.2} /></span>{bullet}</li>)}</ul>
          <p>{t.common.visitInfo}</p>
          <Link className="button buttonPrimary" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
        </aside>
      </div></section>

      <section className="section sectionTint"><div className="shell">
        <div className="sectionHeading reveal">
          <div><span className="eyebrow">{t.nav.services}</span><h2>{t.services.relatedTitle}</h2></div>
          <Link className="textLink" href={`/${locale}/servizi`}><Icon name="arrowLeft" size={18} />{t.common.backToServices}</Link>
        </div>
        <div className="serviceGrid">{related.map((i) => <ServiceCard key={t.services.cards[i].slug} locale={locale} service={t.services.cards[i]} index={i} action={t.common.discover} />)}</div>
      </div></section>

      <section className="section sectionTight sectionWhite"><div className="shell">
        <div className="closingBand reveal">
          <div><span className="eyebrow">{t.common.contactStudio}</span><h2>{t.services.helpTitle}</h2><p>{t.services.helpText}</p></div>
          <div className="closingActions">
            <Link className="button buttonPrimary" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
            <a className="button buttonOutline" href={site.phoneHref}><Icon name="phone" size={18} />{site.phoneDisplay}</a>
          </div>
        </div>
      </div></section>
    </>
  );
}
