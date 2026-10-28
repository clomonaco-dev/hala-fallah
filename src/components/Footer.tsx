import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { site } from '@/lib/i18n';

type FooterCopy = {
  footerIntro: string;
  usefulLinks: string;
  explore: string;
  contacts: string;
  privacy: string;
  rights: string;
  disclaimer: string;
  medicalOrder: string;
  website: string;
  linkedin: string;
  wikipedia: string;
};

type NavCopy = { profile: string; services: string; facilities: string; faq: string; contact: string };

type FooterIconKind = 'website' | 'linkedin' | 'wikipedia';

function FooterIcon({ kind }: { kind: FooterIconKind }) {
  if (kind === 'linkedin') {
    return (
      <svg className="footerLinkIcon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM8.4 18.5H5.6V9.4h2.8v9.1ZM7 8.2a1.63 1.63 0 1 1 0-3.26A1.63 1.63 0 0 1 7 8.2Zm11.5 10.3h-2.8v-4.43c0-1.06-.02-2.42-1.48-2.42-1.48 0-1.7 1.15-1.7 2.34v4.51h-2.8V9.4h2.69v1.24h.04c.37-.71 1.29-1.46 2.65-1.46 2.83 0 3.4 1.87 3.4 4.3v5.02Z" />
      </svg>
    );
  }

  if (kind === 'wikipedia') {
    return (
      <svg className="footerLinkIcon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <text x="12" y="16.2" textAnchor="middle" fill="currentColor" fontFamily="Georgia, serif" fontSize="12" fontWeight="700">W</text>
      </svg>
    );
  }

  return (
    <svg className="footerLinkIcon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.45 3.3 5.45 3.3 9S14.2 18.55 12 21M12 3c-2.2 2.45-3.3 5.45-3.3 9S9.8 18.55 12 21" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Footer({ locale, common, nav }: { locale: Locale; common: FooterCopy; nav: NavCopy }) {
  return (
    <footer className="footer">
      <div className="shell footerGrid">
        <div className="footerLead">
          <Link className="brand brandFooter" href={`/${locale}`}>
            <img src="/images/logo.png" alt="" width="42" height="42" />
            <span><strong>Fallah Eyecare</strong><small>Dott.ssa Hala Fallah</small></span>
          </Link>
          <p>{common.footerIntro}</p>
        </div>
        <div>
          <h3>{common.explore}</h3>
          <ul>
            <li><Link href={`/${locale}/profilo`}>{nav.profile}</Link></li>
            <li><Link href={`/${locale}/servizi`}>{nav.services}</Link></li>
            <li><Link href={`/${locale}/strutture`}>{nav.facilities}</Link></li>
            <li><Link href={`/${locale}/faq`}>{nav.faq}</Link></li>
            <li><Link href={`/${locale}/contatti`}>{nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h3>{common.usefulLinks}</h3>
          <ul>
            <li><a href={site.medicalOrderUrl} target="_blank" rel="noreferrer">{common.medicalOrder}</a></li>
            <li>
              <Link className="footerIconLink" href={`/${locale}`}>
                <FooterIcon kind="website" />
                <span>{common.website}</span>
              </Link>
            </li>
            <li>
              <a className="footerIconLink" href={site.linkedinUrl} target="_blank" rel="noreferrer">
                <FooterIcon kind="linkedin" />
                <span>{common.linkedin}</span>
              </a>
            </li>
            <li>
              <a className="footerIconLink" href={site.wikipediaUrl} target="_blank" rel="noreferrer">
                <FooterIcon kind="wikipedia" />
                <span>{common.wikipedia}</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>{common.contacts}</h3>
          <ul>
            <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.studioAddress}</li>
            <li><Link href={`/${locale}/privacy`}>{common.privacy}</Link></li>
          </ul>
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© {new Date().getFullYear()} {common.rights}</span>
        <span>{common.disclaimer}</span>
      </div>
    </footer>
  );
}
