import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConsultationNotice } from '@/components/ConsultationNotice';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { ServiceCard } from '@/components/ServiceCard';
import { getCopy, isLocale, site } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'servizi', t.services.title, t.services.intro);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.services }]} />
      <section className="section sectionTint"><div className="shell">
        <div className="serviceGrid">{t.services.cards.map((service, index) => <ServiceCard key={service.slug} locale={locale} service={service} index={index} action={t.common.discover} />)}</div>
      </div></section>
      <section className="section sectionTight sectionWhite"><div className="shell">
        <div className="closingBand reveal">
          <div><span className="eyebrow">{t.services.processTitle}</span><h2>{t.services.helpTitle}</h2><p>{t.services.helpText}</p></div>
          <div className="closingActions">
            <Link className="button buttonPrimary" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
            <a className="button buttonOutline" href={site.phoneHref}><Icon name="phone" size={18} />{site.phoneDisplay}</a>
          </div>
        </div>
      </div></section>
      <section className="section sectionTight sectionWhite" style={{ paddingTop: 0 }}><div className="shell"><ConsultationNotice locale={locale} t={t} /></div></section>
    </>
  );
}
