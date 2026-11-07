import type { Metadata } from 'next';
import { locales, site, type Locale } from './i18n';

/** URL pubblico del sito: impostare NEXT_PUBLIC_SITE_URL in produzione se diverso. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://fallaheyecare.com').replace(/\/$/, '');

const ogLocales: Record<Locale, string> = { it: 'it_IT', en: 'en_GB', fr: 'fr_FR', es: 'es_ES' };

/** Metadati per pagina con canonical e hreflang coerenti tra le lingue. */
export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const suffix = path ? `/${path}` : '';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${suffix}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}${suffix}`])), 'x-default': `/it${suffix}` },
    },
    openGraph: {
      type: 'website',
      siteName: 'Fallah Eyecare',
      title,
      description,
      locale: ogLocales[locale],
      url: `/${locale}${suffix}`,
      images: [{ url: '/images/home.png', width: 2014, height: 1510, alt: 'Fallah Eyecare' }],
    },
  };
}

/** Dati strutturati schema.org per il medico e le sedi (aiutano Google a mostrare indirizzo e contatti). */
export function physicianJsonLd(locale: Locale, name: string, description: string) {
  const address = (street: string) => ({ '@type': 'PostalAddress', streetAddress: street, postalCode: '21100', addressLocality: 'Varese', addressRegion: 'VA', addressCountry: 'IT' });
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${siteUrl}/#physician`,
    name,
    description,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/images/profile.png`,
    logo: `${siteUrl}/images/logo.png`,
    telephone: site.phoneDisplay.replace(/\s/g, ''),
    email: site.email,
    medicalSpecialty: 'Ophthalmology',
    address: address('Via Montello 2'),
    location: [
      { '@type': 'MedicalClinic', name: 'Fallah Eyecare — Studio privato', address: address('Via Montello 2') },
      { '@type': 'MedicalClinic', name: 'Centro Polispecialistico Beccaria', address: address('Via Calogero Marrone 2'), url: site.beccariaUrl },
    ],
    areaServed: 'Varese',
    availableLanguage: ['it', 'en', 'fr', 'es'],
  };
}
