import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale } from '@/lib/i18n';
export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return <><PageHero eyebrow={t.faq.eyebrow} title={t.faq.title} intro={t.faq.intro} /><section className="section sectionSoft"><div className="shell faqList">{t.faq.items.map(([question, answer], index) => <details className="faqItem" key={question} open={index === 0}><summary><span className="faqNumber">{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong><span className="faqPlus" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section></>;
}
