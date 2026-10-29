'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CONSENT_EVENT, CONSENT_SETTINGS_EVENT, readConsent, saveConsent } from '@/lib/consent';
import { legalCopy } from '@/lib/legal';
import type { Locale } from '@/lib/i18n';

export function CookieConsent({ locale }: { locale: Locale }) {
  const t = legalCopy[locale];
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [maps, setMaps] = useState(false);

  useEffect(() => {
    const choice = readConsent();
    setMaps(Boolean(choice?.maps));
    setVisible(!choice);
    const showSettings = () => {
      setMaps(Boolean(readConsent()?.maps));
      setExpanded(true);
      setVisible(true);
    };
    const update = () => setMaps(Boolean(readConsent()?.maps));
    window.addEventListener(CONSENT_SETTINGS_EVENT, showSettings);
    window.addEventListener(CONSENT_EVENT, update);
    return () => {
      window.removeEventListener(CONSENT_SETTINGS_EVENT, showSettings);
      window.removeEventListener(CONSENT_EVENT, update);
    };
  }, []);

  const choose = (allowMaps: boolean) => {
    saveConsent(allowMaps);
    setMaps(allowMaps);
    setVisible(false);
    setExpanded(false);
  };

  if (!visible) return null;

  return (
    <section role="dialog" aria-modal="false" aria-label={t.bannerTitle} className="consentBanner">
      <div className="consentTop">
        <div className="consentSymbol" aria-hidden="true">✦</div>
        <div className="consentTitle"><span className="eyebrow">Fallah Eyecare</span><h2>{t.bannerTitle}</h2></div>
        <button type="button" className="consentDismiss" aria-label={t.close} title={t.close} onClick={() => choose(false)}>×</button>
      </div>
      <p>{t.bannerText}</p>
      {expanded && <div className="consentOptions">
        <div className="consentOption"><div><strong>{t.necessary}</strong><small>{t.necessaryText}</small></div><span className="consentRequired">✓</span></div>
        <label className="consentOption"><div><strong>{t.maps}</strong><small>{t.mapsText}</small></div><input type="checkbox" checked={maps} onChange={(e) => setMaps(e.target.checked)} /></label>
      </div>}
      <div className="consentLinks"><Link href={`/${locale}/cookie`}>{t.bannerLink}</Link><Link href={`/${locale}/privacy`}>{t.policyLink}</Link></div>
      <div className="consentActions">
        <button type="button" className="button buttonOutline" onClick={() => choose(false)}>{t.reject}</button>
        {!expanded && <button type="button" className="button buttonOutline" onClick={() => setExpanded(true)}>{t.customize}</button>}
        <button type="button" className="button buttonPrimary" onClick={() => choose(expanded ? maps : true)}>{expanded ? t.save : t.accept}</button>
      </div>
    </section>
  );
}
