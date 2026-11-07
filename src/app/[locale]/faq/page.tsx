import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale, site } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getCopy(locale);
  return pageMetadata(locale, 'faq', t.faq.eyebrow, t.faq.intro);
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  };
  return (
    <>
      <PageHero eyebrow={t.faq.eyebrow} title={t.faq.title} intro={t.faq.intro} label={t.common.breadcrumb} crumbs={[{ label: t.nav.home, href: `/${locale}` }, { label: t.nav.faq }]} />
      <section className="section sectionTint"><div className="shell faqLayout">
        <div className="faqList">
          {t.faq.items.map(([question, answer], index) => (
            <details className="faqItem reveal" key={question} open={index === 0} style={{ '--delay': `${index * 0.05}s` } as React.CSSProperties}>
              <summary>
                <span className="faqNumber">{String(index + 1).padStart(2, '0')}</span>
                <strong>{question}</strong>
                <span className="faqPlus" aria-hidden="true"><Icon name="plus" size={18} /></span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <aside className="faqAside">
          <span className="eyebrow eyebrowLight">{t.common.contactStudio}</span>
          <h2>{t.services.helpTitle}</h2>
          <p>{t.services.helpText}</p>
          <Link className="button buttonLight" href={`/${locale}/contatti#prenota-visita`}><Icon name="calendar" size={19} />{t.common.bookVisit}</Link>
          <a className="button buttonOnDark" href={site.phoneHref}><Icon name="phone" size={18} />{site.phoneDisplay}</a>
        </aside>
      </div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
