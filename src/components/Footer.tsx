import Link from 'next/link';
import { Brand } from '@/components/Brand';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
import { Icon } from '@/components/Icon';
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
          <div className="footerStatus"><span className="statusDot" aria-hidden="true" />{common.bookNote}</div>
        </div>
        <div className="footerColumn">
          <h2>{common.explore}</h2>
          <Link href={`/${locale}/profilo`}>{nav.profile}</Link>
          <Link href={`/${locale}/servizi`}>{nav.services}</Link>
          <Link href={`/${locale}/strutture`}>{nav.facilities}</Link>
          <Link href={`/${locale}/faq`}>{nav.faq}</Link>
          <Link href={`/${locale}/contatti`}>{nav.contact}</Link>
        </div>
        <div className="footerColumn">
          <h2>{common.contacts}</h2>
          <a href={site.phoneHref}><Icon name="phone" size={18} />{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}><Icon name="mail" size={18} />{site.email}</a>
          <address><Icon name="pin" size={18} />{site.studioAddress}</address>
          <a href={site.medicalOrderUrl} target="_blank" rel="noopener noreferrer"><Icon name="shield" size={18} />{common.medicalOrder}</a>
        </div>
        <div className="footerConsultation">
          <span className="footerTinyLabel">{consultation.eyebrow}</span>
          <h2>{consultation.title}</h2>
          <p>{consultation.tariff}</p>
          <Link href={`/${locale}/contatti`}>{consultation.cta} <Icon name="arrowRight" size={16} /></Link>
        </div>
      </div>
      <div className="shell footerBottom">
        <div>
          <span>© {new Date().getFullYear()} {common.rights}</span>
          <Link href={`/${locale}/privacy`}>{legalCopy[locale].privacyTitle}</Link>
          <Link href={`/${locale}/cookie`}>{legalCopy[locale].cookiesTitle}</Link>
          <CookieSettingsButton label={legalCopy[locale].settings} />
        </div>
        <p>{common.disclaimer}</p>
      </div>
    </footer>
  );
}
