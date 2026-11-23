import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhonePolicyNotice } from '@/components/PhonePolicyNotice';
import { facilities, facilityAddress, getCopy, isLocale, site } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'contatti', t.contact.title, t.contact.intro);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.studioAddress)}`;
  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.contact }]} />
      <section className="section sectionTint"><div className="shell">
        {/* Avviso in evidenza: telefono solo per appuntamenti, niente consulti telefonici/digitali */}
        <PhonePolicyNotice t={t.phonePolicy} />
        <div className="contactGrid">
        <div className="contactMethods">
          <div className="contactIntro"><span className="eyebrow eyebrowLight">{t.common.contacts}</span><h2>{t.common.contactStudio}</h2></div>
          <a href={site.phoneHref} className="contactMethod">
            <span className="contactMethodIcon"><Icon name="phone" size={22} /></span>
            <span><small>{t.common.call} · {t.phonePolicy.badge}</small><strong>{site.phoneDisplay}</strong></span>
            <Icon name="arrowRight" size={18} />
          </a>
          <a href={`mailto:${site.email}`} className="contactMethod">
            <span className="contactMethodIcon"><Icon name="mail" size={22} /></span>
            <span><small>{t.common.email}</small><strong>{site.email}</strong></span>
            <Icon name="arrowRight" size={18} />
          </a>
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="contactMethod">
            <span className="contactMethodIcon"><Icon name="pin" size={22} /></span>
            <span><small>{t.contact.studio} · {t.contact.maps}</small><strong>{site.studioAddress}</strong></span>
            <Icon name="external" size={18} />
          </a>
          <p className="contactHint"><Icon name="clock" size={18} />{t.common.bookNote}. {t.facilities.bookingNote}</p>
        </div>
        <div className="contactFormPanel" id="prenota-visita">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.requestTitle}</h2>
          <p className="formSafety"><Icon name="shield" size={18} /><span>{t.contact.requestText}</span></p>
          <ContactForm labels={t.contact} locale={locale} />
          <p className="formNote"><Icon name="info" size={16} /><span>{t.contact.formNote}</span></p>
        </div>
        </div>
      </div></section>
      <section className="section sectionWhite" aria-labelledby="altre-strutture"><div className="shell">
        <div className="sectionHeading reveal">
          <div><span className="eyebrow">{t.nav.facilities}</span><h2 id="altre-strutture">{t.facilities.otherTitle}</h2></div>
          <p>{t.facilities.otherText}</p>
        </div>
        <ul className="facilityPhoneGrid">
          {facilities.filter((f) => f.id !== 'studio').map((f) => (
            <li key={f.id} className="facilityPhone reveal">
              <span className="facilityPhoneIcon"><Icon name="building" size={22} /></span>
              <div>
                <h3>{t.facilities.items[f.id].name}</h3>
                <p>{facilityAddress(f)}</p>
                <a href={f.phoneHref}><Icon name="phone" size={16} />{f.phoneDisplay}</a>
              </div>
            </li>
          ))}
        </ul>
        <p className="noteBox directLine reveal">
          <Icon name="phone" size={18} />
          <span><strong>{t.facilities.directLineTitle}</strong> {t.facilities.directLineText} <a href={site.phoneHref}>{site.phoneDisplay}</a></span>
        </p>
      </div></section>
    </>
  );
}
