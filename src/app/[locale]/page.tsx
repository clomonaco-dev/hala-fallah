import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCopy, isLocale, site } from '@/lib/i18n';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const featured = t.services.cards.slice(0, 6);

  return (
    <>
      <section className="heroSection">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">{t.common.specialist}</span>
            <h1>{t.home.title}</h1>
            <p className="lead">{t.home.lead}</p>
            <div className="actionRow">
              <Link className="button buttonPrimary" href={`/${locale}/contatti`}>{t.common.bookVisit}</Link>
              <Link className="button buttonGhost" href={`/${locale}/servizi`}>{t.home.ctaServices}</Link>
            </div>
            <div className="chipRow">{t.home.chips.map((chip) => <span className="chip" key={chip}>{chip}</span>)}</div>
          </div>
          <div className="heroVisual">
            <div className="visualFrame">
              <img src="/images/home.png" alt="" />
              <div className="visualBadge">
                <span className="badgeDot" />
                <div><strong>Varese</strong><small>{site.studioAddress}</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="sectionHeading">
            <div><span className="eyebrow">{t.home.servicesEyebrow}</span><h2>{t.home.servicesTitle}</h2></div>
            <p>{t.home.servicesText}</p>
          </div>
          <div className="serviceGrid featuredServices">
            {featured.map((service) => (
              <article className="serviceCard" key={service.slug}>
                <div className="serviceImage"><img src={`/images/services/${service.slug}.png`} alt="" /></div>
                <div className="serviceContent"><h3>{service.title}</h3><p>{service.text}</p></div>
              </article>
            ))}
          </div>
          <div className="centerAction"><Link className="button buttonGhost" href={`/${locale}/servizi`}>{t.home.ctaServices}</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="shell splitSection">
          <div className="profileVisual"><img src="/images/profile.png" alt="" /></div>
          <div className="profileCopy">
            <span className="eyebrow">{t.home.profileEyebrow}</span>
            <h2>{t.home.profileTitle}</h2>
            <p className="leadSmall">{t.home.profileText}</p>
            <div className="statGrid">
              <div><strong>1999</strong><span>{locale === 'it' ? 'Specializzazione in Oftalmologia' : 'Specialization in Ophthalmology'}</span></div>
              <div><strong>Varese</strong><span>{locale === 'it' ? 'Sede principale' : 'Main location'}</span></div>
              <div><strong>IT · EN</strong><span>{locale === 'it' ? 'Sito bilingue' : 'Bilingual website'}</span></div>
            </div>
            <Link className="textLink" href={`/${locale}/profilo`}>{t.common.readMore} →</Link>
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="shell">
          <div className="sectionHeading sectionHeadingDark">
            <div><span className="eyebrow eyebrowLight">{t.home.facilitiesEyebrow}</span><h2>{t.home.facilitiesTitle}</h2></div>
            <p>{t.home.facilitiesText}</p>
          </div>
          <div className="locationPreviewGrid">
            <article className="locationPreview"><span className="locationNumber">01</span><h3>{t.facilities.studioTitle}</h3><p>{site.studioAddress}</p><Link href={`/${locale}/strutture`} className="textLink light">{t.common.directions} →</Link></article>
            <article className="locationPreview"><span className="locationNumber">02</span><h3>{t.facilities.beccariaTitle}</h3><p>{site.beccariaAddress}</p><Link href={`/${locale}/strutture`} className="textLink light">{t.common.directions} →</Link></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell ctaPanel">
          <div><span className="eyebrow">{t.common.bookVisit}</span><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaText}</p></div>
          <div className="actionRow"><a className="button buttonPrimary" href={site.phoneHref}>{site.phoneDisplay}</a><a className="button buttonGhost" href={`mailto:${site.email}`}>{t.common.email}</a></div>
        </div>
      </section>
    </>
  );
}
