import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { MobileBookingBar } from '@/components/MobileBookingBar';
import { getCopy, isLocale, locales, type Locale } from '@/lib/i18n';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isLocale(locale) ? locale : 'it';
  const t = getCopy(lang);
  return {
    title: `${t.profile.title} | Fallah Eyecare · Varese`,
    description: t.home.lead,
    icons: { icon: '/images/logo.png' },
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])) },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} nav={t.nav} specialist={t.common.specialist} language={t.common.language} location={t.common.location} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} common={t.common} nav={t.nav} consultation={t.consultation} />
        <MobileBookingBar locale={locale} label={t.nav.book} />
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
