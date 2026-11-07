import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'profilo', `${t.profile.title} — ${t.profile.subtitle}`, t.profile.intro);
}

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const dated = t.profile.education.filter((entry) => entry.dated);
  const other = t.profile.education.filter((entry) => !entry.dated);

  return <>
    <PageHero eyebrow={t.profile.eyebrow} title={t.profile.title} intro={t.profile.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.profile }]} />
    <section className="section sectionTint"><div className="shell cvLayout">
      <aside className="cvSidebar">
        <div className="cvPhoto"><Image src="/images/profile.png" alt={t.profile.title} fill preload sizes="(max-width: 760px) 92vw, (max-width: 1024px) 300px, 400px" /></div>
        <div className="cvIdentity">
          <span className="eyebrow eyebrowLight">Fallah Eyecare</span>
          <h2>{t.profile.title}</h2>
          <p>{t.profile.subtitle}</p>
        </div>
        <ul className="cvFacts">
          <li><Icon name="stethoscope" size={18} />{t.home.educationHighlight}</li>
          <li><Icon name="pin" size={18} />{t.common.location}</li>
          <li><Icon name="clock" size={18} />{t.common.bookNote}</li>
        </ul>
        <div className="cvSidebarNote"><p>“{t.home.trustTitle}”</p></div>
        <Link className="button buttonLight" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
      </aside>
      <div className="cvMain">
        <header className="cvMainHeading reveal">
          <span className="eyebrow">{t.profile.eyebrow}</span>
          <h2>{t.profile.educationTitle}</h2>
          <p>{t.profile.educationIntro}</p>
        </header>
        <div className="cvCategory"><span className="cvCategoryIndex">01</span><h3>{t.profile.educationTitle}</h3></div>
        <ol className="cvEntries">
          {dated.map((item) => <li className="cvEntry reveal" key={`${item.period}-${item.title}`}>
            <time className="cvDate" dateTime={item.period}>{item.period}</time>
            <div className="cvEntryBody"><h4>{item.title}</h4><strong>{item.institution}</strong><p>{item.description}</p></div>
          </li>)}
        </ol>
        <div className="cvCategory cvCategorySecondary"><span className="cvCategoryIndex">02</span><h3>{t.profile.undated}</h3></div>
        <ul className="cvEntries cvEntriesUndated">
          {other.map((item) => <li className="cvEntry reveal" key={`${item.institution}-${item.title}`}>
            <span className="cvDate" aria-hidden="true">—</span>
            <div className="cvEntryBody"><h4>{item.title}</h4><strong>{item.institution}</strong><p>{item.description}</p></div>
          </li>)}
        </ul>
      </div>
    </div></section>
    <section className="section sectionWhite"><div className="shell">
      <div className="sectionHeading reveal"><div><span className="eyebrow">{t.profile.eyebrow}</span><h2>{t.profile.expertiseTitle}</h2></div></div>
      <ul className="expertiseGrid">{t.profile.expertise.map((item, index) => <li className="expertiseCard reveal" key={item} style={{ '--delay': `${(index % 4) * 0.06}s` } as React.CSSProperties}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3></li>)}</ul>
    </div></section>
  </>;
}
