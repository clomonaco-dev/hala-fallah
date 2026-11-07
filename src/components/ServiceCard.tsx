import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { serviceSlugs, type Locale, type Translation } from '@/lib/i18n';

type Card = Translation['services']['cards'][number];
const total = String(serviceSlugs.length).padStart(2, '0');

export function ServiceCard({ service, locale, action, index }: { service: Card; locale: Locale; action: string; index: number }) {
  return (
    <Link href={`/${locale}/servizi/${service.slug}`} className="serviceCard reveal" style={{ '--delay': `${(index % 3) * 0.08}s` } as React.CSSProperties}>
      <div className="serviceImage">
        <Image src={`/images/services/${service.slug}.png`} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 380px" />
        <span className="serviceIndex" aria-hidden="true">{String(index + 1).padStart(2, '0')} / {total}</span>
      </div>
      <div className="serviceContent">
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <span className="serviceAction">{action}<span className="roundArrow" aria-hidden="true"><Icon name="arrowRight" size={18} /></span></span>
      </div>
    </Link>
  );
}
