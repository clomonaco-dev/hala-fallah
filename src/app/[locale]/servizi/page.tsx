import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConsultationNotice } from '@/components/ConsultationNotice';
import { PageHero } from '@/components/PageHero';
import { ServiceCard } from '@/components/ServiceCard';
import { getCopy, isLocale } from '@/lib/i18n';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
      <section className="section sectionSoft"><div className="shell">
        <div className="serviceGrid">{t.services.cards.map((service, index) => <ServiceCard key={service.slug} locale={locale} service={service} index={index} action={t.common.discover} />)}</div>
      </div></section>
      <section className="section sectionWhite"><div className="shell serviceClosing"><div><span className="eyebrow">{t.services.processTitle}</span><h2>{t.services.helpTitle}</h2><p>{t.services.helpText}</p></div><Link className="button buttonPrimary" href={`/${locale}/contatti`}>{t.common.contactStudio} ↗</Link></div></section>
      <section className="section sectionNotice"><div className="shell"><ConsultationNotice locale={locale} t={t} /></div></section>
    </>
  );
}
