import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GoogleMap } from '@/components/GoogleMap';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale, site } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'strutture', t.facilities.title, t.facilities.intro);
}

export default async function FacilitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      <PageHero eyebrow={t.facilities.eyebrow} title={t.facilities.title} intro={t.facilities.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.facilities }]} />
      <section className="section sectionTint"><div className="shell locationsStack">
        <article className="locationDetail reveal" id="studio">
          <div className="locationCopy">
            <span className="eyebrow">01 · {t.facilities.studioLabel}</span>
            <h2>{t.facilities.studioTitle}</h2>
            <p className="addressText"><Icon name="pin" />{site.studioAddress}</p>
            <p>{t.facilities.studioText}</p>
            <div className="actionRow">
              <a className="button buttonPrimary" href={site.phoneHref}><Icon name="phone" size={18} />{t.common.call}</a>
              <a className="button buttonOutline" href={`mailto:${site.email}`}><Icon name="mail" size={18} />{t.common.email}</a>
            </div>
          </div>
          <GoogleMap address={site.studioAddress} title={t.facilities.studioTitle} locale={locale} />
        </article>
        <article className="locationDetail reveal" id="beccaria">
          <div className="locationCopy">
            <span className="eyebrow">02 · {t.facilities.beccariaLabel}</span>
            <h2>{t.facilities.beccariaTitle}</h2>
            <p className="addressText"><Icon name="pin" />{site.beccariaAddress}</p>
            <p>{t.facilities.beccariaText}</p>
            <p className="noteBox"><Icon name="info" size={18} /><span>{t.facilities.bookingNote}</span></p>
            <div className="actionRow">
              <a className="button buttonPrimary" href={site.beccariaUrl} target="_blank" rel="noopener noreferrer">{t.facilities.beccariaWebsite}<Icon name="external" size={17} /></a>
            </div>
          </div>
          <GoogleMap address={site.beccariaAddress} title={t.facilities.beccariaTitle} locale={locale} />
        </article>
      </div></section>
    </>
  );
}
