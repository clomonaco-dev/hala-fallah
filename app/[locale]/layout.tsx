import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getCopy, isLocale, locales, type Locale } from '@/lib/i18n';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isLocale(locale) ? locale : 'it';
  return {
    title: lang === 'it' ? 'Fallah Eyecare | Dott.ssa Hala Fallah - Oculista a Varese' : 'Fallah Eyecare | Dr Hala Fallah - Ophthalmologist in Varese',
    description: lang === 'it'
      ? 'Oftalmologia a Varese: visite oculistiche, diagnostica strumentale e percorsi specialistici per adulti e bambini.'
      : 'Ophthalmology in Varese: eye examinations, instrumental diagnostics and specialist care for adults and children.',
    icons: { icon: '/images/logo.png' },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);

  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} nav={t.nav} specialist={t.common.specialist} />
        <main>{children}</main>
        <Footer locale={locale} common={t.common} nav={t.nav} />
      </body>
    </html>
  );
}
