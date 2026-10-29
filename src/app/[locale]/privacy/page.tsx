import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { LegalDocument } from '@/components/LegalDocument';
import { isLocale } from '@/lib/i18n';
import { legalCopy } from '@/lib/legal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: `${legalCopy[locale].privacyTitle} | Fallah Eyecare`, description: legalCopy[locale].privacyIntro };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = legalCopy[locale];
  return <><PageHero eyebrow={t.eyebrow} title={t.privacyTitle} intro={t.privacyIntro} /><LegalDocument kind="privacy" locale={locale} /></>;
}
