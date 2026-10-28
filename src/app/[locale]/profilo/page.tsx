import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale } from '@/lib/i18n';

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);

  return (
    <>
      <PageHero eyebrow={t.profile.eyebrow} title={t.profile.title} intro={t.profile.intro} />
      <section className="section">
        <div className="shell splitSection profilePageSplit">
          <div className="profileVisual tall"><img src="/images/profile.png" alt="" /></div>
          <div>
            <span className="miniLabel">{t.profile.subtitle}</span>
            <h2>{t.profile.educationTitle}</h2>
            <ul className="timelineList">
              {t.profile.education.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section sectionSoft">
        <div className="shell">
          <div className="sectionHeading"><div><span className="eyebrow">{t.profile.expertiseTitle}</span><h2>{t.profile.expertiseTitle}</h2></div></div>
          <div className="expertiseGrid">{t.profile.expertise.map((item, index) => <div className="expertiseCard" key={item}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3></div>)}</div>
        </div>
      </section>
    </>
  );
}
