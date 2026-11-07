import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { LegalDocument } from '@/components/LegalDocument';
import { getCopy, isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';
import { legalCopy } from '@/lib/legal';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, 'privacy', legalCopy[locale].privacyTitle, legalCopy[locale].privacyIntro);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = legalCopy[locale];
  const c = getCopy(locale);
  return <><PageHero eyebrow={t.eyebrow} title={t.privacyTitle} intro={t.privacyIntro} label={c.common.breadcrumb} crumbs={[{ label: c.nav.home, href: `/${locale}` }, { label: t.privacyTitle }]} /><LegalDocument kind="privacy" locale={locale} /></>;
}
