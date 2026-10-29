import Link from 'next/link';
import { Brand } from '@/components/Brand';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
import { legalCopy } from '@/lib/legal';
import { site, type Locale, type Translation } from '@/lib/i18n';

export function Footer({ locale, common, nav, consultation }: {
  locale: Locale;
  common: Translation['common'];
  nav: Translation['nav'];
  consultation: Translation['consultation'];
}) {
  return (
    <footer className="siteFooter">
      <div className="shell footerTop">
        <div className="footerIdentity">
          <Brand locale={locale} inverse />
          <p>{common.specialist}. {common.location}.</p>
          <div className="footerStatus"><span aria-hidden="true" />{common.bookNote}</div>
        </div>
        <div className="footerColumn">
          <h2>{common.explore}</h2>
          <Link href={`/${locale}/profilo`}>{nav.profile}</Link>
          <Link href={`/${locale}/servizi`}>{nav.services}</Link>
          <Link href={`/${locale}/strutture`}>{nav.facilities}</Link>
          <Link href={`/${locale}/faq`}>{nav.faq}</Link>
        </div>
        <div className="footerColumn">
          <h2>{common.contacts}</h2>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <address>{site.studioAddress}</address>
          <Link href={`/${locale}/contatti`}>{nav.contact} ↗</Link>
        </div>
        <div className="footerConsultation">
          <span className="footerTinyLabel">{consultation.eyebrow}</span>
          <h2>{consultation.title}</h2>
          <p>{consultation.tariff}</p>
          <Link href={`/${locale}/contatti`}>{consultation.cta} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="shell footerBottom">
        <div><span>© {new Date().getFullYear()} {common.rights}</span><span className="footerSeparator" aria-hidden="true">·</span><Link href={`/${locale}/privacy`}>{legalCopy[locale].privacyTitle}</Link><span className="footerSeparator" aria-hidden="true">·</span><Link href={`/${locale}/cookie`}>{legalCopy[locale].cookiesTitle}</Link><span className="footerSeparator" aria-hidden="true">·</span><CookieSettingsButton label={legalCopy[locale].settings} /></div>
        <p>{common.disclaimer}</p>
      </div>
    </footer>
  );
}
