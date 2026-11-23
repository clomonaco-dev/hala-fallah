import { Icon } from '@/components/Icon';
import type { Translation } from '@/lib/i18n';

/** Avviso ben visibile (pagina Contatti): il telefono serve solo per gli appuntamenti, niente consulti telefonici o digitali. */
export function PhonePolicyNotice({ t }: { t: Translation['phonePolicy'] }) {
  return (
    <aside className="phonePolicy" aria-labelledby="phone-policy-title">
      <div className="phonePolicyIcon" aria-hidden="true"><Icon name="phone" size={30} strokeWidth={1.6} /></div>
      <div className="phonePolicyBody">
        <div className="phonePolicyTop">
          <span className="eyebrow">{t.eyebrow}</span>
          <span className="phonePolicyBadge"><Icon name="calendar" size={15} />{t.badge}</span>
        </div>
        <h2 id="phone-policy-title">{t.title}</h2>
        <p>{t.text}</p>
        <ul className="phonePolicyPoints">
          {t.points.map((point, index) => (
            <li key={point}>
              <span className={index === 1 ? 'phonePolicyMark phonePolicyMarkNo' : 'phonePolicyMark'} aria-hidden="true">
                <Icon name={index === 1 ? 'close' : 'check'} size={14} strokeWidth={2.4} />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <p className="phonePolicyNote"><Icon name="info" size={16} /><span>{t.note}</span></p>
      </div>
    </aside>
  );
}
