import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { facilities, getCopy, isLocale, serviceGroups, site } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'servizi', t.services.metaTitle, t.services.metaDescription);
}

const pad = (n: number) => String(n).padStart(2, '0');

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.services }]} />

      {/* Navigazione rapida tra le aree */}
      <nav className="servicesNav" aria-label={t.services.navLabel}>
        <div className="shell servicesNavInner">
          {serviceGroups.map((group, index) => (
            <a key={group.id} href={`#${group.id}`}>
              <span aria-hidden="true">{pad(index + 1)}</span>
              {t.services.groups[group.id].title}
              <small aria-label={`${group.items.length} ${t.services.countLabel}`}>{group.items.length}</small>
            </a>
          ))}
        </div>
      </nav>

      <section className="section sectionTint servicesCatalog">
        <div className="shell">
          {serviceGroups.map((group, index) => {
            const copy = t.services.groups[group.id];
            const where = group.where ? facilities.filter((f) => f.capabilities.some((c) => group.where?.includes(c))) : [];
            return (
              <section key={group.id} id={group.id} className="serviceGroup" aria-labelledby={`${group.id}-title`}>
                <header className="serviceGroupHead reveal">
                  <div className="serviceGroupTop">
                    <span className="serviceGroupIcon"><Icon name={group.icon} size={28} /></span>
                    <span className="serviceGroupIndex">{pad(index + 1)} / {pad(serviceGroups.length)}</span>
                  </div>
                  <h2 id={`${group.id}-title`}>{copy.title}</h2>
                  <p>{copy.intro}</p>
                  {where.length > 0 && (
                    <div className="serviceWhere">
                      <span><Icon name="pin" size={16} />{t.services.whereLabel}</span>
                      <ul>
                        {where.map((f) => (
                          <li key={f.id}>
                            <Link href={`/${locale}/strutture#${f.id}`}>{t.facilities.items[f.id].name}</Link>
                            {!t.facilities.items[f.id].name.includes(f.city) && <small> · {f.city}</small>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </header>
                <div className="serviceItems">
                  {group.items.map((item, itemIndex) => {
                    const service = t.services.items[item.id];
                    return (
                      <article key={item.id} id={item.id} className="serviceItem reveal" style={{ '--delay': `${(itemIndex % 3) * 0.05}s` } as React.CSSProperties}>
                        <span className="serviceItemIcon"><Icon name={item.icon} size={24} /></span>
                        <div className="serviceItemBody">
                          <h3>{service.title}</h3>
                          <p>{service.text}</p>
                          {service.tags && <ul className="tagList">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="section sectionTight sectionWhite"><div className="shell">
        <div className="closingBand reveal">
          <div><span className="eyebrow">{t.nav.facilities}</span><h2>{t.services.facilitiesTitle}</h2><p>{t.services.facilitiesText}</p></div>
          <div className="closingActions">
            <Link className="button buttonOutline" href={`/${locale}/strutture`}><Icon name="pin" size={18} />{t.services.facilitiesButton}</Link>
          </div>
        </div>
      </div></section>

      <section className="section sectionTight sectionWhite" style={{ paddingTop: 0 }}><div className="shell">
        <div className="closingBand reveal">
          <div><span className="eyebrow">{t.services.processTitle}</span><h2>{t.services.helpTitle}</h2><p>{t.services.helpText}</p></div>
          <div className="closingActions">
            <Link className="button buttonPrimary" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
            <a className="button buttonOutline" href={site.phoneHref}><Icon name="phone" size={18} />{site.phoneDisplay}</a>
          </div>
        </div>
      </div></section>

    </>
  );
}
