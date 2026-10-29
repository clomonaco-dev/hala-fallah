import { notFound } from 'next/navigation';
import { ConsultationNotice } from '@/components/ConsultationNotice';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale, site } from '@/lib/i18n';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.studioAddress)}`;
  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />
      <section className="section sectionSoft"><div className="shell contactGrid">
        <div className="contactMethods">
          <div className="contactIntro"><span className="eyebrow">{t.common.contacts}</span><h2>{t.common.contactStudio}</h2></div>
          <a href={site.phoneHref} className="contactMethod"><span className="contactMethodIcon">↗</span><span><small>{t.common.call}</small><strong>{site.phoneDisplay}</strong></span></a>
          <a href={`mailto:${site.email}`} className="contactMethod"><span className="contactMethodIcon">✉</span><span><small>{t.common.email}</small><strong>{site.email}</strong></span></a>
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="contactMethod"><span className="contactMethodIcon">⌖</span><span><small>{t.contact.studio} · {t.contact.maps}</small><strong>{site.studioAddress}</strong></span></a>
        </div>
        <div className="contactFormPanel" id="prenota-visita"><span className="eyebrow">{t.contact.eyebrow}</span><h2>{t.contact.requestTitle}</h2><p className="formSafety">{t.contact.requestText}</p><ContactForm labels={t.contact} locale={locale} /><p className="formNote">{t.contact.formNote}</p></div>
      </div></section>
      <section className="section sectionNotice"><div className="shell"><ConsultationNotice locale={locale} t={t} /><p className="medicalEmergencyNote">{t.consultation.note}</p></div></section>
    </>
  );
}
