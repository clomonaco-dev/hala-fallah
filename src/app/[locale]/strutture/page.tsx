import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GoogleMap } from '@/components/GoogleMap';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { capabilityOrder, facilities, facilityAddress, facilityMapQuery, getCopy, isLocale, site } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'strutture', t.facilities.metaTitle, t.facilities.metaDescription);
}

export default async function FacilitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      <PageHero eyebrow={t.facilities.eyebrow} title={t.facilities.title} intro={t.facilities.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.facilities }]} />

      {/* Panoramica: cosa si può fare in ogni struttura */}
      <section className="section sectionTint"><div className="shell">
        <div className="sectionHeading reveal">
          <div><span className="eyebrow">{t.facilities.eyebrow}</span><h2>{t.facilities.matrixTitle}</h2></div>
          <p>{t.facilities.matrixText}</p>
        </div>
        <div className="matrixWrap reveal">
          <table className="facilityMatrix">
            <thead>
              <tr>
                <th scope="col">{t.facilities.facilityColumn}</th>
                {capabilityOrder.map((capability) => <th scope="col" key={capability}>{t.facilities.capabilitiesShort[capability]}</th>)}
              </tr>
            </thead>
            <tbody>
              {facilities.map((f) => (
                <tr key={f.id}>
                  <th scope="row"><a href={`#${f.id}`}><strong>{t.facilities.items[f.id].name}</strong><small>{f.city}</small></a></th>
                  {capabilityOrder.map((capability) => (
                    <td key={capability}>
                      {f.capabilities.includes(capability)
                        ? <span className="matrixYes"><Icon name="check" size={16} strokeWidth={2.4} /><span className="srOnly">{t.common.yes}</span></span>
                        : <span className="matrixNo"><span aria-hidden="true">—</span><span className="srOnly">{t.common.no}</span></span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></section>

      {/* Schede delle strutture */}
      <section className="section sectionWhite"><div className="shell locationsStack">
        {facilities.map((f, index) => {
          const item = t.facilities.items[f.id];
          return (
            <article className="locationDetail reveal" id={f.id} key={f.id}>
              <div className="locationCopy">
                <span className="eyebrow">{String(index + 1).padStart(2, '0')} · {item.label}</span>
                <h2>{item.name}</h2>
                <p className="addressText"><Icon name="pin" />{facilityAddress(f)}</p>
                <p>{item.text}</p>
                <ul className="capabilityList">
                  {f.capabilities.map((capability) => <li key={capability}><Icon name="check" size={15} strokeWidth={2.2} />{t.facilities.capabilities[capability]}</li>)}
                </ul>
                <div className="locationPhone">
                  <small>{t.facilities.bookingLabel}</small>
                  <a href={f.phoneHref}>{f.phoneDisplay}</a>
                </div>
                {f.id !== 'studio' && (
                  <p className="noteBox directLine">
                    <Icon name="phone" size={18} />
                    <span><strong>{t.facilities.directLineTitle}</strong> {t.facilities.directLineText} <a href={site.phoneHref}>{site.phoneDisplay}</a></span>
                  </p>
                )}
                <div className="actionRow">
                  <a className="button buttonPrimary" href={f.phoneHref}><Icon name="phone" size={18} />{t.common.call}</a>
                  {f.id === 'studio' && <a className="button buttonOutline" href={`mailto:${site.email}`}><Icon name="mail" size={18} />{t.common.email}</a>}
                  {f.website && <a className="button buttonOutline" href={f.website} target="_blank" rel="noopener noreferrer">{t.facilities.websiteLabel}<Icon name="external" size={17} /></a>}
                </div>
              </div>
              <GoogleMap address={facilityMapQuery(f, t)} title={item.name} locale={locale} />
            </article>
          );
        })}
      </div></section>
    </>
  );
}
