'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Brand } from '@/components/Brand';
import { Icon } from '@/components/Icon';
import { LanguageFlag } from '@/components/LanguageFlag';
import { localeNames, locales, site, type Locale, type Translation } from '@/lib/i18n';

export function Header({ locale, nav, common }: { locale: Locale; nav: Translation['nav']; common: Translation['common'] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLDetailsElement>(null);

  const items = [
    ['', nav.home],
    ['profilo', nav.profile],
    ['servizi', nav.services],
    ['strutture', nav.facilities],
    ['faq', nav.faq],
    ['contatti', nav.contact],
  ] as const;

  function languageHref(code: Locale) {
    return pathname?.replace(/^\/(it|en|fr|es)(?=\/|$)/, `/${code}`) || `/${code}`;
  }

  // Ombra dell'header solo dopo lo scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Chiude menu e selettore lingua al cambio pagina.
  useEffect(() => {
    setMenuOpen(false);
    languageRef.current?.removeAttribute('open');
  }, [pathname]);

  // Menu mobile: blocca lo scroll, chiude con Esc, posiziona il pannello sotto l'header.
  useEffect(() => {
    document.body.classList.toggle('menuLocked', menuOpen);
    if (menuOpen && headerRef.current) {
      const bottom = headerRef.current.getBoundingClientRect().bottom;
      document.documentElement.style.setProperty('--nav-top', `${Math.max(0, bottom)}px`);
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        languageRef.current?.removeAttribute('open');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('menuLocked');
    };
  }, [menuOpen]);

  // Chiude il selettore lingua cliccando fuori.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const el = languageRef.current;
      if (el?.open && !el.contains(event.target as Node)) el.removeAttribute('open');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="shell topbarInner">
          <span className="topbarSpecialist"><span className="statusDot" aria-hidden="true" />{common.specialist}</span>
          <div className="topbarContact">
            <span><Icon name="clock" size={15} />{common.bookNote}</span>
            <a href={site.phoneHref}><Icon name="phone" size={15} />{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}><Icon name="mail" size={15} />{site.email}</a>
          </div>
        </div>
      </div>
      <header ref={headerRef} className={`siteHeader ${scrolled ? 'isScrolled' : ''}`}>
        <div className="shell navWrap">
          <Brand locale={locale} />
          <div className="headerTools">
            <a className="headerCall" href={site.phoneHref} aria-label={`${common.call} ${site.phoneDisplay}`}><Icon name="phone" /></a>
            <button
              type="button"
              className="menuButton"
              aria-label={menuOpen ? common.menuClose : common.menuOpen}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
          <nav id="primary-navigation" className={`mainNav ${menuOpen ? 'isOpen' : ''}`} aria-label={nav.home}>
            <div className="navLinks">
              {items.map(([segment, label]) => {
                const href = segment ? `/${locale}/${segment}` : `/${locale}`;
                const active = pathname === href || (segment !== '' && Boolean(pathname?.startsWith(href + '/')));
                return (
                  <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={active ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                );
              })}
            </div>
            <div className="navMobileExtras">
              <a href={site.phoneHref}><Icon name="phone" />{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}><Icon name="mail" />{site.email}</a>
            </div>
            <div className="navActions">
              <details ref={languageRef} key={locale} className="languagePicker">
                <summary aria-label={`${common.language}: ${localeNames[locale]}`} title={common.language}>
                  <LanguageFlag locale={locale} />
                  <span>{locale.toUpperCase()}</span>
                  <Icon name="chevronDown" size={16} />
                </summary>
                <div className="languageDropdown">
                  {locales.map((code) => (
                    <Link
                      key={code}
                      href={languageHref(code)}
                      hrefLang={code}
                      lang={code}
                      aria-current={code === locale ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <LanguageFlag locale={code} />
                      <span>{localeNames[code]}</span>
                      {code === locale && <Icon name="check" size={16} className="localeSelected" />}
                    </Link>
                  ))}
                </div>
              </details>
              <Link className="button buttonPrimary buttonSmall navCta" href={`/${locale}/contatti#prenota-visita`} onClick={() => setMenuOpen(false)}>
                <Icon name="calendar" size={18} />{nav.book}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
