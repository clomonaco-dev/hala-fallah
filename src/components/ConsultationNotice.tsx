import Link from 'next/link';
import type { Locale, Translation } from '@/lib/i18n';

export function ConsultationNotice({ locale, t, compact = false }: { locale: Locale; t: Translation; compact?: boolean }) {
  return (
    <aside className={`consultationNotice ${compact ? 'compact' : ''}`} aria-labelledby={compact ? 'consultation-subtitle' : 'consultation-title'}>
      <div className="consultationIcon" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none"><path d="M13 6h14a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6h-8l-9 6v-8a6 6 0 0 1-4-5.7V12a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.8"/><path d="M14 17h12M20 11v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
      </div>
      <div className="consultationBody">
        <span className="eyebrow">{t.consultation.eyebrow}</span>
        <h2 id={compact ? 'consultation-subtitle' : 'consultation-title'}>{t.consultation.title}</h2>
        <p>{t.consultation.text}</p>
        <div className="consultationMeta"><span className="paidTag">{t.consultation.badge}</span><span>{t.consultation.tariff}</span></div>
      </div>
      <Link href={`/${locale}/contatti`} className="button buttonOutline consultationButton">{t.consultation.cta} <span aria-hidden="true">↗</span></Link>
    </aside>
  );
}
