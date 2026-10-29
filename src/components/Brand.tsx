import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

const doctorNames: Record<Locale, string> = { it: 'Dott.ssa Hala Fallah', en: 'Dr Hala Fallah', fr: 'Dre Hala Fallah', es: 'Dra. Hala Fallah' };

export function Brand({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? 'brandInverse' : ''}`} href={`/${locale}`} aria-label="Fallah Eyecare — home">
      <span className="brandSymbol" aria-hidden="true">
        <svg viewBox="0 0 52 52" fill="none" role="presentation">
          <rect x="1" y="1" width="50" height="50" rx="16" stroke="currentColor" strokeOpacity=".2" />
          <path d="M9 27c5.3-7.8 11-11.7 17-11.7S37.7 19.2 43 27c-5.3 7.8-11 11.7-17 11.7S14.3 34.8 9 27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="26" cy="27" r="6.2" stroke="currentColor" strokeWidth="2" />
          <circle cx="27.5" cy="25.5" r="1.7" fill="currentColor" />
        </svg>
      </span>
      <span className="brandText"><strong>FALLAH<span> EYECARE</span></strong><small>{doctorNames[locale]} · Varese</small></span>
    </Link>
  );
}
