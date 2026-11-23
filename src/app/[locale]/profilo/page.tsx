import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon, type IconName } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale, type Translation } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'profilo', `${t.profile.title} — ${t.profile.subtitle}`, t.profile.metaDescription);
}

type Kind = Translation['profile']['educationGroups'][number]['kind'];
const kindIcon: Record<Kind, IconName> = { university: 'graduation', master: 'award', certification: 'shield' };
const factIcons: IconName[] = ['clock', 'building', 'pin'];
const careerIcons: IconName[] = ['building', 'stethoscope', 'briefcase'];

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const p = t.profile;

  return <>
    <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.profile }]} />
    <section className="section sectionTint"><div className="shell cvLayout">
      <aside className="cvSidebar">
        <div className="cvPhoto"><Image src="/images/profile.png" alt={p.title} fill preload sizes="(max-width: 760px) 92vw, (max-width: 1024px) 300px, 400px" /></div>
        <div className="cvIdentity">
          <span className="eyebrow eyebrowLight">Fallah Eyecare</span>
          <h2>{p.title}</h2>
          <p>{p.subtitle}</p>
        </div>
        <ul className="cvFacts">
          {p.facts.map((fact, index) => <li key={fact}><Icon name={factIcons[index] ?? 'check'} size={18} />{fact}</li>)}
        </ul>
        <div className="cvSidebarNote"><p>“{t.home.trustTitle}”</p></div>
        <Link className="button buttonLight" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
      </aside>

      <div className="cvMain">
        {/* Profilo professionale */}
        <header className="cvMainHeading reveal">
          <span className="eyebrow">{p.bioEyebrow}</span>
          <h2>{p.bioTitle}</h2>
        </header>
        <div className="cvBio reveal">{p.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>

        {/* Formazione: Master di II livello e certificazioni in evidenza */}
        <header className="cvMainHeading reveal" id="formazione">
          <span className="eyebrow">{p.educationEyebrow}</span>
          <h2>{p.educationTitle}</h2>
          <p>{p.educationIntro}</p>
        </header>
        {p.educationGroups.map((group, groupIndex) => (
          <div className={`credGroup credGroup-${group.kind}`} key={group.title}>
            <div className="cvCategory"><span className="cvCategoryIndex">{String(groupIndex + 1).padStart(2, '0')}</span><h3>{group.title}</h3></div>
            <ul className="credGrid">
              {group.entries.map((entry) => (
                <li className={`credCard reveal${group.kind === 'master' ? ' credFeatured' : ''}`} key={`${entry.title}-${entry.institution}`}>
                  <div className="credTop">
                    <span className="credIcon"><Icon name={kindIcon[group.kind]} size={22} /></span>
                    <span className={`credBadge credBadge-${group.kind}`}>{entry.badge}</span>
                    {entry.year && <time className="credYear" dateTime={entry.year}>{entry.year}</time>}
                  </div>
                  <h4>{entry.title}</h4>
                  <strong>{entry.institution}</strong>
                  {entry.description && <p>{entry.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Esperienza professionale */}
        <div className="credGroup">
          <div className="cvCategory"><span className="cvCategoryIndex">{String(p.educationGroups.length + 1).padStart(2, '0')}</span><h3>{p.careerTitle}</h3></div>
          <ul className="careerList">
            {p.career.map((item, index) => (
              <li className="careerItem reveal" key={item.title}>
                <span className="credIcon"><Icon name={careerIcons[index] ?? 'briefcase'} size={22} /></span>
                <div><h4>{item.title}</h4><strong>{item.place}</strong>{item.text && <p>{item.text}</p>}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div></section>

    <section className="section sectionWhite"><div className="shell">
      <div className="sectionHeading reveal"><div><span className="eyebrow">{p.eyebrow}</span><h2>{p.expertiseTitle}</h2></div></div>
      <ul className="expertiseGrid">{p.expertise.map((item, index) => <li className="expertiseCard reveal" key={item} style={{ '--delay': `${(index % 4) * 0.06}s` } as React.CSSProperties}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3></li>)}</ul>
    </div></section>
  </>;
}
