import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale } from '@/lib/i18n';

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <>
      <PageHero eyebrow={t.faq.eyebrow} title={t.faq.title} intro={t.faq.intro} />
      <section className="section"><div className="shell faqList">{t.faq.items.map(([q, a], index) => <details className="faqItem" key={q} open={index === 0}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div></section>
    </>
  );
}
