import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConsultationNotice } from '@/components/ConsultationNotice';
import { ServiceCard } from '@/components/ServiceCard';
import { getCopy, isLocale, site } from '@/lib/i18n';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      <section className="heroSection">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <span className="eyebrow heroEyebrow">{t.common.specialist}</span>
            <h1>{t.home.title}</h1>
            <p className="lead">{t.home.lead}</p>
            <div className="actionRow">
              <Link className="button buttonPrimary" href={`/${locale}/contatti`}>{t.common.bookVisit} <span aria-hidden="true">↗</span></Link>
              <Link className="button buttonText" href={`/${locale}/servizi`}>{t.home.ctaServices} <span aria-hidden="true">→</span></Link>
            </div>
            <div className="heroChips">{t.home.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
          </div>
          <div className="heroVisual">
            <div className="heroImageWrap"><img src="/images/home.png" alt="" fetchPriority="high" /></div>
            <div className="heroFloatingCard"><span className="floatingDot" aria-hidden="true" /><div><strong>{t.common.location}</strong><small>{t.common.bookNote}</small></div></div>
            <span className="heroOutline" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section sectionSoft" id="prestazioni">
        <div className="shell">
          <div className="sectionHeading">
            <div><span className="eyebrow">{t.home.servicesEyebrow}</span><h2>{t.home.servicesTitle}</h2></div>
            <p>{t.home.servicesText}</p>
          </div>
          <div className="serviceGrid">{t.services.cards.slice(0, 6).map((service, index) => <ServiceCard key={service.slug} locale={locale} service={service} index={index} action={t.common.discover} />)}</div>
          <div className="centerAction"><Link href={`/${locale}/servizi`} className="button buttonOutline">{t.common.allServices} <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="section sectionWhite">
        <div className="shell splitSection">
          <div className="profileVisual"><img src="/images/profile.png" loading="lazy" alt="" /><span className="profileYear"><strong>1999</strong><small>{t.home.educationHighlight}</small></span></div>
          <div className="profileCopy">
            <span className="eyebrow">{t.home.profileEyebrow}</span>
            <h2>{t.home.profileTitle}</h2>
            <p className="leadSmall">{t.home.profileText}</p>
            <div className="profileQuote"><span aria-hidden="true">“</span><p>{t.home.trustTitle}</p><small>{t.home.trustText}</small></div>
            <Link href={`/${locale}/profilo`} className="button buttonOutline">{t.common.readMore} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section sectionNotice"><div className="shell"><ConsultationNotice locale={locale} t={t} /></div></section>

      <section className="section sectionDark">
        <div className="shell">
          <div className="sectionHeading darkHeading">
            <div><span className="eyebrow">{t.home.facilitiesEyebrow}</span><h2>{t.home.facilitiesTitle}</h2></div><p>{t.home.facilitiesText}</p>
          </div>
          <div className="locationPreviewGrid">
            <Link href={`/${locale}/strutture`} className="locationPreview"><span className="locationNumber">01 / VARESE</span><h3>{t.facilities.studioTitle}</h3><p>{site.studioAddress}</p><span>{t.common.directions} ↗</span></Link>
            <Link href={`/${locale}/strutture`} className="locationPreview"><span className="locationNumber">02 / VARESE</span><h3>{t.facilities.beccariaTitle}</h3><p>{site.beccariaAddress}</p><span>{t.common.directions} ↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section sectionWhite"><div className="shell ctaPanel"><div><span className="eyebrow">{t.common.contactStudio}</span><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaText}</p></div><Link href={`/${locale}/contatti`} className="button buttonPrimary">{t.common.bookVisit} <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
