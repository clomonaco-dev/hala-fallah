import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { getCopy, isLocale } from '@/lib/i18n';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return <><PageHero eyebrow={t.privacy.eyebrow} title={t.privacy.title} intro={t.privacy.intro} /><section className="section"><div className="shell narrow prose"><p>{t.privacy.body}</p></div></section></>;
}
