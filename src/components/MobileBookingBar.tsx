import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { site, type Locale } from '@/lib/i18n';

/**
 * Barra d'azione mobile sempre visibile: chiamata diretta + richiesta visita.
 * Il sito non dispone di prenotazione istantanea: il link porta al modulo contatti.
 */
export function MobileBookingBar({ locale, label, callLabel }: { locale: Locale; label: string; callLabel: string }) {
  return (
    <div className="mobileBookingDock">
      <a className="mobileBookingCall" href={site.phoneHref} aria-label={`${callLabel} ${site.phoneDisplay}`}>
        <Icon name="phone" size={22} />
      </a>
      <Link className="mobileBookingLink" href={`/${locale}/contatti#prenota-visita`}>
        <Icon name="calendar" size={20} />
        <span>{label}</span>
      </Link>
    </div>
  );
}
