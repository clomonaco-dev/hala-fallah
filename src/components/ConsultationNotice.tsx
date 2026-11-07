import Link from 'next/link';
import { Icon } from '@/components/Icon';
import type { Locale, Translation } from '@/lib/i18n';

export function ConsultationNotice({ locale, t }: { locale: Locale; t: Translation }) {
  return (
    <aside className="consultationNotice reveal" aria-labelledby="consultation-title">
      <div className="consultationIcon" aria-hidden="true"><Icon name="chat" size={30} strokeWidth={1.6} /></div>
      <div className="consultationBody">
        <span className="eyebrow">{t.consultation.eyebrow}</span>
        <h2 id="consultation-title">{t.consultation.title}</h2>
        <p>{t.consultation.text}</p>
        <div className="consultationMeta"><span className="paidTag"><Icon name="info" size={15} />{t.consultation.badge}</span><span>{t.consultation.tariff}</span></div>
      </div>
      <Link href={`/${locale}/contatti`} className="button buttonOutline consultationButton">{t.consultation.cta} <Icon name="arrowRight" size={18} className="iconMove" /></Link>
    </aside>
  );
}
