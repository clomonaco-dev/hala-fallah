import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale } from '@/lib/i18n';

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const dated = t.profile.education.filter((entry) => entry.dated);
  const other = t.profile.education.filter((entry) => !entry.dated);

  return <>
    <PageHero eyebrow={t.profile.eyebrow} title={t.profile.title} intro={t.profile.intro} />
    <section className="section sectionSoft cvSection"><div className="shell cvLayout">
      <aside className="cvSidebar">
        <div className="cvPhoto"><img src="/images/profile.png" alt={t.profile.title} /></div>
        <div className="cvIdentity">
          <span className="eyebrow">Fallah Eyecare</span>
          <h2>{t.profile.title}</h2>
          <p>{t.profile.subtitle}</p>
          <span className="cvLocation">{t.common.location}</span>
        </div>
        <div className="cvSidebarNote"><span aria-hidden="true">✦</span><p>{t.home.trustTitle}</p></div>
      </aside>
      <div className="cvMain">
        <header className="cvMainHeading">
          <span className="eyebrow">{t.profile.eyebrow}</span>
          <h2>{t.profile.educationTitle}</h2>
          <p>{t.profile.educationIntro}</p>
        </header>
        <div className="cvCategory"><span className="cvCategoryIndex">01</span><h3>{t.profile.educationTitle}</h3></div>
        <div className="cvEntries">
          {dated.map((item) => <article className="cvEntry" key={`${item.period}-${item.title}`}>
            <time className="cvDate" dateTime={item.period}>{item.period}</time>
            <div className="cvEntryBody"><h4>{item.title}</h4><strong>{item.institution}</strong><p>{item.description}</p></div>
          </article>)}
        </div>
        <div className="cvCategory cvCategorySecondary"><span className="cvCategoryIndex">02</span><h3>{t.profile.undated}</h3></div>
        <div className="cvEntries cvEntriesUndated">
          {other.map((item) => <article className="cvEntry" key={`${item.institution}-${item.title}`}>
            <span className="cvDate cvUndatedMarker" aria-hidden="true">—</span>
            <div className="cvEntryBody"><h4>{item.title}</h4><strong>{item.institution}</strong><p>{item.description}</p></div>
          </article>)}
        </div>
      </div>
    </div></section>
    <section className="section sectionWhite"><div className="shell"><div className="sectionHeading"><div><span className="eyebrow">{t.profile.eyebrow}</span><h2>{t.profile.expertiseTitle}</h2></div></div><div className="expertiseGrid">{t.profile.expertise.map((item, index) => <div className="expertiseCard" key={item}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3></div>)}</div></div></section>
  </>;
}
