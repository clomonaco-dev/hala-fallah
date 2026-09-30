'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { site } from '@/lib/i18n';

type NavCopy = {
  home: string;
  profile: string;
  services: string;
  facilities: string;
  faq: string;
  contact: string;
  book: string;
};

export function Header({ locale, nav, specialist }: { locale: Locale; nav: NavCopy; specialist: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = [
    ['', nav.home],
    ['profilo', nav.profile],
    ['servizi', nav.services],
    ['strutture', nav.facilities],
    ['faq', nav.faq],
    ['contatti', nav.contact],
  ] as const;

  const switchLocale = locale === 'it' ? 'en' : 'it';
  const switchedPath = pathname?.replace(/^\/(it|en)(?=\/|$)/, `/${switchLocale}`) || `/${switchLocale}`;

  return (
    <>
      <div className="topbar">
        <div className="shell topbarInner">
          <span>{specialist}</span>
          <div className="topbarLinks">
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
      <header className="siteHeader">
        <div className="shell navWrap">
          <Link className="brand" href={`/${locale}`} onClick={() => setOpen(false)}>
            <img src="/images/logo.png" alt="" width="100" height="42" />
            <span><strong>Fallah Eyecare</strong><small>Dott.ssa Hala Fallah</small></span>
          </Link>

          <button className="menuButton" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
            <span /> <span /> <span />
          </button>

          <nav className={`mainNav ${open ? 'open' : ''}`} aria-label="Main navigation">
            {items.map(([slug, label]) => {
              const href = slug ? `/${locale}/${slug}` : `/${locale}`;
              const active = pathname === href;
              return <Link key={href} href={href} className={active ? 'active' : ''} onClick={() => setOpen(false)}>{label}</Link>;
            })}
            <Link className="languagePill" href={switchedPath} onClick={() => setOpen(false)}>
              {locale === 'it' ? 'EN' : 'IT'}
            </Link>
            <Link className="button buttonPrimary navCta" href={`/${locale}/contatti`} onClick={() => setOpen(false)}>{nav.book}</Link>
          </nav>
        </div>
      </header>
      <Link className="button buttonPrimary mobileBookingCta" href={`/${locale}/contatti`} onClick={() => setOpen(false)}>
        {nav.book}
      </Link>
    </>
  );
}
