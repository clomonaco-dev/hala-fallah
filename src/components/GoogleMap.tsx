'use client';

import { useEffect, useState } from 'react';
import { CONSENT_EVENT, readConsent, saveConsent } from '@/lib/consent';
import { legalCopy } from '@/lib/legal';
import type { Locale } from '@/lib/i18n';

export function GoogleMap({ address, title, locale }: { address: string; title: string; locale: Locale }) {
  const t = legalCopy[locale];
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const update = () => setEnabled(Boolean(readConsent()?.maps));
    update();
    window.addEventListener(CONSENT_EVENT, update);
    return () => window.removeEventListener(CONSENT_EVENT, update);
  }, []);
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return <div className="mapCard">
    {enabled ? (
      <iframe title={title} src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    ) : (
      <div className="mapPrivacyPlaceholder"><span aria-hidden="true" className="mapPinSymbol">⌖</span><p>{t.mapPlaceholder}</p><button type="button" className="button buttonPrimary" onClick={() => saveConsent(true)}>{t.mapActivate}</button><small>{t.mapsText}</small></div>
    )}
    <a className="mapOverlayLink" href={directions} target="_blank" rel="noopener noreferrer">{t.mapExternal} ↗</a>
  </div>;
}
