import { notFound } from 'next/navigation';
import { GoogleMap } from '@/components/GoogleMap';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale, site } from '@/lib/i18n';

export default async function FacilitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);

  return (
    <>
      <PageHero eyebrow={t.facilities.eyebrow} title={t.facilities.title} intro={t.facilities.intro} />
      <section className="section sectionSoft">
        <div className="shell locationsStack">
          <article className="locationDetail">
            <div className="locationCopy">
              <span className="pill">{t.facilities.studioLabel}</span>
              <h2>{t.facilities.studioTitle}</h2>
              <p className="addressText">{site.studioAddress}</p>
              <p>{t.facilities.studioText}</p>
              <div className="actionRow"><a className="button buttonPrimary" href={site.phoneHref}>{t.common.call}</a><a className="button buttonGhost" href={`mailto:${site.email}`}>{t.common.email}</a></div>
            </div>
            <GoogleMap address={site.studioAddress} title={t.facilities.studioTitle} />
          </article>
          <article className="locationDetail reverse">
            <div className="locationCopy">
              <span className="pill">{t.facilities.beccariaLabel}</span>
              <h2>{t.facilities.beccariaTitle}</h2>
              <p className="addressText">{site.beccariaAddress}</p>
              <p>{t.facilities.beccariaText}</p>
              <p className="noteBox">{t.facilities.bookingNote}</p>
              <div className="actionRow"><a className="button buttonPrimary" href={site.beccariaUrl} target="_blank" rel="noreferrer">{locale === 'it' ? 'Sito Beccaria' : 'Beccaria website'}</a><a className="button buttonGhost" href="tel:+3903321880700">0332 1880700</a></div>
            </div>
            <GoogleMap address={site.beccariaAddress} title={t.facilities.beccariaTitle} />
          </article>
        </div>
      </section>
    </>
  );
}
