import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

/**
 * Call-to-action mobile sempre visibile. Il link conduce al modulo di contatto
 * per richiedere una visita: il sito non dispone di prenotazione istantanea.
 */
export function MobileBookingBar({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div className="mobileBookingDock">
      <Link className="mobileBookingLink" href={`/${locale}/contatti#prenota-visita`}>
        <svg className="mobileBookingCalendar" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M7 3v4M17 3v4M3 10h18M8.5 15h3" />
        </svg>
        <span>{label}</span>
        <svg className="mobileBookingArrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
