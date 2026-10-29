import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { LegalDocument } from '@/components/LegalDocument';
import { isLocale } from '@/lib/i18n';
import { legalCopy } from '@/lib/legal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: `${legalCopy[locale].cookiesTitle} | Fallah Eyecare`, description: legalCopy[locale].cookiesIntro };
}

export default async function CookiePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = legalCopy[locale];
  return <><PageHero eyebrow={t.eyebrow} title={t.cookiesTitle} intro={t.cookiesIntro} /><LegalDocument kind="cookie" locale={locale} /></>;
}
