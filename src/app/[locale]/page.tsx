import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ConsultationNotice } from '@/components/ConsultationNotice';
import { Icon, type IconName } from '@/components/Icon';
import { ServiceCard } from '@/components/ServiceCard';
import { getCopy, isLocale, site } from '@/lib/i18n';

const stepIcons: IconName[] = ['phone', 'eye', 'check'];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">{t.common.specialist}</span>
            <h1>{t.home.title}</h1>
            <p className="lead">{t.home.lead}</p>
            <div className="actionRow">
              <Link className="button buttonPrimary" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
              <Link className="button buttonOutline" href={`/${locale}/servizi`}>{t.home.ctaServices} <Icon name="arrowRight" size={18} className="iconMove" /></Link>
            </div>
            <ul className="heroStats">
              {t.home.stats.map((stat) => <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>)}
            </ul>
          </div>
          <div className="heroVisual">
            <div className="heroImage">
              <Image src="/images/home.png" alt={`${t.profile.title} — ${t.common.specialist}`} fill preload sizes="(max-width: 1024px) 92vw, 540px" />
            </div>
            <div className="heroBadge heroBadgeTop">
              <ul className="heroChips">{t.home.chips.map((chip) => <li key={chip}><Icon name="check" size={16} strokeWidth={2.2} />{chip}</li>)}</ul>
            </div>
            <div className="heroBadge heroBadgeBottom">
              <span className="heroBadgeIcon"><Icon name="pin" size={20} /></span>
              <div><strong>{t.common.location}</strong><small>{t.common.bookNote}</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestazioni */}
      <section className="section sectionTint" id="prestazioni">
        <div className="shell">
          <div className="sectionHeading reveal">
            <div><span className="eyebrow">{t.home.servicesEyebrow}</span><h2>{t.home.servicesTitle}</h2></div>
            <p>{t.home.servicesText}</p>
          </div>
          <div className="serviceGrid">{t.services.cards.slice(0, 6).map((service, index) => <ServiceCard key={service.slug} locale={locale} service={service} index={index} action={t.common.discover} />)}</div>
          <div className="centerAction"><Link href={`/${locale}/servizi`} className="button buttonOutline">{t.common.allServices} <Icon name="arrowRight" size={18} className="iconMove" /></Link></div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="section sectionWhite">
        <div className="shell">
          <div className="sectionHeading sectionHeadingCenter reveal">
            <div><span className="eyebrow">{t.home.stepsEyebrow}</span><h2>{t.home.stepsTitle}</h2></div>
            <p>{t.home.stepsText}</p>
          </div>
          <ol className="stepsGrid">
            {t.home.steps.map((step, index) => (
              <li className="stepCard reveal" key={step.title} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                <div className="stepTop"><span className="stepIcon"><Icon name={stepIcons[index]} size={24} /></span><span className="stepNumber" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* La dottoressa */}
      <section className="section sectionTint">
        <div className="shell splitSection">
          <div className="profileVisual reveal">
            <div className="profileImage"><Image src="/images/profile.png" alt={t.profile.title} fill sizes="(max-width: 1024px) 92vw, 520px" /></div>
            <span className="profileYear"><strong>1999</strong><small>{t.home.educationHighlight}</small></span>
          </div>
          <div className="profileCopy reveal">
            <span className="eyebrow">{t.home.profileEyebrow}</span>
            <h2>{t.home.profileTitle}</h2>
            <p>{t.home.profileText}</p>
            <blockquote className="profileQuote"><p>{t.home.trustTitle}</p><small>{t.home.trustText}</small></blockquote>
            <Link href={`/${locale}/profilo`} className="button buttonPrimary">{t.common.readMore} <Icon name="arrowRight" size={18} className="iconMove" /></Link>
          </div>
        </div>
      </section>

      {/* Sedi */}
      <section className="section sectionDark">
        <div className="shell">
          <div className="sectionHeading sectionHeadingDark reveal">
            <div><span className="eyebrow eyebrowLight">{t.home.facilitiesEyebrow}</span><h2>{t.home.facilitiesTitle}</h2></div>
            <p>{t.home.facilitiesText}</p>
          </div>
          <div className="locationPreviewGrid">
            {[
              { title: t.facilities.studioTitle, label: t.facilities.studioLabel, address: site.studioAddress, icon: 'pin' as const },
              { title: t.facilities.beccariaTitle, label: t.facilities.beccariaLabel, address: site.beccariaAddress, icon: 'building' as const },
            ].map((loc, index) => (
              <Link key={loc.title} href={`/${locale}/strutture`} className="locationPreview reveal" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                <div className="locationTop"><span className="locationIcon"><Icon name={loc.icon} size={24} /></span><span className="locationNumber">0{index + 1} · {loc.label}</span></div>
                <h3>{loc.title}</h3>
                <p>{loc.address}</p>
                <span className="locationLink">{t.common.directions} <Icon name="arrowUpRight" size={18} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Avviso consulenze */}
      <section className="section sectionTight sectionWhite"><div className="shell"><ConsultationNotice locale={locale} t={t} /></div></section>

      {/* CTA finale */}
      <section className="section sectionWhite" style={{ paddingTop: 0 }}>
        <div className="shell ctaPanel reveal">
          <div>
            <span className="eyebrow eyebrowLight">{t.common.contactStudio}</span>
            <h2>{t.home.ctaTitle}</h2>
            <p>{t.home.ctaText}</p>
          </div>
          <div className="ctaContacts">
            <a className="ctaContact" href={site.phoneHref}><span className="ctaContactIcon"><Icon name="phone" /></span><span><small>{t.common.call}</small><strong>{site.phoneDisplay}</strong></span></a>
            <a className="ctaContact" href={`mailto:${site.email}`}><span className="ctaContactIcon"><Icon name="mail" /></span><span><small>{t.common.email}</small><strong>{site.email}</strong></span></a>
            <Link href={`/${locale}/contatti#prenota-visita`} className="button buttonLight"><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
