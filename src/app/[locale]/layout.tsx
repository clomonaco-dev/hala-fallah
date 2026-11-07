import type { Metadata, Viewport } from 'next';
import { Manrope, Newsreader } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { MobileBookingBar } from '@/components/MobileBookingBar';
import { Reveal } from '@/components/Reveal';
import { getCopy, isLocale, locales, type Locale } from '@/lib/i18n';
import { pageMetadata, physicianJsonLd, siteUrl } from '@/lib/seo';
import '../globals.css';

// Font scaricati in fase di build e serviti dal sito stesso: nessuna richiesta a Google dal browser (GDPR).
const serif = Newsreader({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-sans', display: 'swap' });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: '#0b1435', width: 'device-width', initialScale: 1 };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = isLocale(locale) ? locale : 'it';
  const t = getCopy(lang);
  const base = pageMetadata(lang, '', `${t.profile.title} · ${t.common.specialist}`, t.home.lead);
  return {
    ...base,
    metadataBase: new URL(siteUrl),
    title: { default: `${t.profile.title} · ${t.common.specialist.split('·').pop()?.trim()} · Varese | Fallah Eyecare`, template: `%s | Fallah Eyecare · ${t.profile.title}` },
    icons: { icon: '/images/logo.png', apple: '/images/logo.png' },
    formatDetection: { telephone: true, email: true, address: true },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getCopy(locale);
  const jsonLd = physicianJsonLd(locale, t.profile.title, t.home.lead);
  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <Script id="js-flag" strategy="beforeInteractive">{"document.documentElement.classList.add('js')"}</Script>
        <a className="skipLink" href="#main-content">{t.common.skipToContent}</a>
        <Header locale={locale} nav={t.nav} common={t.common} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer locale={locale} common={t.common} nav={t.nav} consultation={t.consultation} />
        <MobileBookingBar locale={locale} label={t.nav.book} callLabel={t.common.call} />
        <CookieConsent locale={locale} />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
