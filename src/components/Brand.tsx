import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

const doctorNames: Record<Locale, string> = { it: 'Dott.ssa Hala Fallah', en: 'Dr Hala Fallah', fr: 'Dre Hala Fallah', es: 'Dra. Hala Fallah' };

/** Marchio vettoriale ispirato al logo ufficiale Fallah Eyecare (palpebre azzurre, iride blu notte). */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 40" fill="none" aria-hidden="true" focusable="false">
      <path d="M3.5 21.5C12 8.5 24 2.8 36 3.6c9.7.6 17 5.5 24.5 8.6-7.2-1.3-14.8-2.4-22.4-2.6C25.6 9.3 14 13.6 3.5 21.5Z" fill="var(--brand-sky)" />
      <path d="M1.5 25.6c4.4-3.6 10-3.2 15.8-.3 8.6 4.3 17.5 10.6 30.7 7.4-9 5.8-20.2 5.9-29.5 1.2-6.1-3-10.6-6.8-17-8.3Z" fill="var(--brand-sky)" />
      <circle cx="32.5" cy="20.5" r="11" fill="var(--brand-navy)" />
      <circle cx="36.6" cy="16.3" r="3.1" fill="#fff" />
    </svg>
  );
}

export function Brand({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? 'brandInverse' : ''}`} href={`/${locale}`} aria-label={`Fallah Eyecare — ${doctorNames[locale]}, home`}>
      <BrandMark className="brandSymbol" />
      <span className="brandText">
        <strong>Fallah Eye<span>care</span></strong>
        <small>{doctorNames[locale]} · Varese</small>
      </span>
    </Link>
  );
}
