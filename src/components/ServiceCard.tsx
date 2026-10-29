import Link from 'next/link';
import type { Locale, Translation } from '@/lib/i18n';

type Card = Translation['services']['cards'][number];
export function ServiceCard({ service, locale, action, index }: { service: Card; locale: Locale; action: string; index: number }) {
  return (
    <Link href={`/${locale}/servizi/${service.slug}`} className="serviceCard" aria-label={`${action}: ${service.title}`}>
      <div className="serviceImage"><img src={`/images/services/${service.slug}.png`} alt="" loading="lazy" /></div>
      <div className="serviceContent">
        <span className="serviceIndex">{String(index + 1).padStart(2, '0')} / 08</span>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <span className="serviceAction">{action}<span className="roundArrow" aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
