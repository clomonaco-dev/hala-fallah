import Link from 'next/link';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';
import { legalCopy } from '@/lib/legal';
import type { Locale } from '@/lib/i18n';

export function LegalDocument({ locale, kind }: { locale: Locale; kind: 'privacy' | 'cookie' }) {
  const t = legalCopy[locale];
  const sections = kind === 'privacy' ? t.privacySections : t.cookieSections;
  return <section className="section sectionWhite"><div className="shell legalLayout">
    <aside className="legalAside"><span className="eyebrow">Fallah Eyecare</span><p>{t.lastUpdated}</p><nav aria-label={t.eyebrow}>{sections.map((s, i) => <a key={i} href={`#section-${i+1}`}>{s.title}</a>)}</nav><div className="legalAsideSwitch"><Link href={`/${locale}/${kind === 'privacy' ? 'cookie' : 'privacy'}`}>{kind === 'privacy' ? t.cookiesTitle : t.privacyTitle} ↗</Link></div></aside>
    <div className="legalArticle">
      <div className="legalDraftNote" role="note"><strong>{t.incomplete}</strong></div>
      {kind === 'privacy' && <div className="legalController"><strong>{t.controllerLabel}</strong><p>{t.controllerNote}</p></div>}
      {sections.map((s, i) => <section id={`section-${i+1}`} className="legalSection" key={i}><h2>{s.title}</h2>{s.paragraphs.map((p,j) => <p key={j}>{p}</p>)}</section>)}
      <div className="legalResources">
        <h2>{t.eyebrow}</h2>
        <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer">{t.gdprLink} ↗</a>
        <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer">{t.authorityLink} ↗</a>
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">{t.googleLink} ↗</a>
      </div>
      <div className="legalSettings"><div><h2>{t.settings}</h2><p>{t.settingsInfo}</p></div><CookieSettingsButton label={t.settings} /></div>
    </div>
  </div></section>;
}
