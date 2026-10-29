'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Brand } from '@/components/Brand';
import { LanguageFlag } from '@/components/LanguageFlag';
import { locales, site, type Locale, type Translation } from '@/lib/i18n';

export function Header({ locale, nav, specialist, language, location }: {
  locale: Locale;
  nav: Translation['nav'];
  specialist: string;
  language: string;
  location: string;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    ['', nav.home],
    ['profilo', nav.profile],
    ['servizi', nav.services],
    ['strutture', nav.facilities],
    ['faq', nav.faq],
    ['contatti', nav.contact],
  ] as const;

  const localeNames: Record<Locale, string> = { it: 'Italiano', en: 'English', fr: 'Français', es: 'Español' };
  function languageHref(code: Locale) {
    return pathname?.replace(/^\/(it|en|fr|es)(?=\/|$)/, `/${code}`) || `/${code}`;
  }

  return (
    <>
      <div className="topbar">
        <div className="shell topbarInner">
          <span className="topbarSpecialist"><i aria-hidden="true" />{specialist}</span>
          <div className="topbarContact"><span>{location}</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
        </div>
      </div>
      <header className="siteHeader">
        <div className="shell navWrap">
          <Brand locale={locale} />
          <button type="button" className={`menuButton ${menuOpen ? 'isOpen' : ''}`} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <nav id="primary-navigation" className={`mainNav ${menuOpen ? 'isOpen' : ''}`} aria-label="Primary navigation">
            <div className="navLinks">
              {items.map(([segment, label]) => {
                const href = segment ? `/${locale}/${segment}` : `/${locale}`;
                const active = pathname === href || (segment !== '' && Boolean(pathname?.startsWith(href + '/')));
                return <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={active ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</Link>;
              })}
            </div>
            <div className="navActions">
              <details key={locale} className="languagePicker">
                <summary aria-label={`${language}: ${localeNames[locale]}`} title={language}>
                  <LanguageFlag locale={locale} />
                  <span>{locale.toUpperCase()}</span>
                  <span className="localeChevron" aria-hidden="true">⌄</span>
                </summary>
                <div className="languageDropdown" aria-label={language}>
                  {locales.map((code) => (
                    <Link
                      key={code}
                      href={languageHref(code)}
                      hrefLang={code}
                      lang={code}
                      aria-label={localeNames[code]}
                      aria-current={code === locale ? 'page' : undefined}
                      title={localeNames[code]}
                      onClick={() => setMenuOpen(false)}
                    >
                      <LanguageFlag locale={code} />
                      <span>{code.toUpperCase()}</span>
                      {code === locale && <span aria-hidden="true" className="localeSelected">✓</span>}
                    </Link>
                  ))}
                </div>
              </details>
              <Link className="button buttonPrimary navCta" href={`/${locale}/contatti`} onClick={() => setMenuOpen(false)}>{nav.book} <span aria-hidden="true">↗</span></Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
