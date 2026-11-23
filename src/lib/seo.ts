import type { Metadata } from 'next';
import { facilities, locales, serviceGroups, site, type Facility, type Locale, type ServiceGroupId, type Translation } from './i18n';

/** URL pubblico del sito: impostare NEXT_PUBLIC_SITE_URL in produzione se diverso. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://fallaheyecare.com').replace(/\/$/, '');

const ogLocales: Record<Locale, string> = { it: 'it_IT', en: 'en_GB', fr: 'fr_FR', es: 'es_ES' };

/** Pagine pubbliche (usate anche dalla sitemap). */
export const publicPaths = ['', 'profilo', 'servizi', 'strutture', 'faq', 'contatti', 'privacy', 'cookie'] as const;

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
      images: [{ url: '/images/profile.png', width: 2023, height: 1513, alt: 'Dott.ssa Hala Fallah — Fallah Eyecare' }],
    },
  };
}

const postalAddress = (f: Facility) => ({
  '@type': 'PostalAddress', streetAddress: f.street, postalCode: f.postalCode,
  addressLocality: f.city, addressRegion: f.province, addressCountry: 'IT',
});

const procedureType: Record<ServiceGroupId, string> = {
  visite: 'MedicalProcedure', diagnostica: 'MedicalTest', oftalmoplastica: 'MedicalProcedure', chirurgia: 'TherapeuticProcedure',
};

/**
 * Dati strutturati schema.org: medico, sedi, affiliazione ospedaliera e prestazioni.
 * Aiutano Google a mostrare indirizzi, contatti e servizi offerti.
 */
export function physicianJsonLd(locale: Locale, t: Translation) {
  const studio = facilities[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${siteUrl}/#physician`,
    name: t.profile.title,
    description: t.home.metaDescription,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/images/profile.png`,
    logo: `${siteUrl}/images/logo.png`,
    telephone: site.phoneDisplay.replace(/\s/g, ''),
    email: site.email,
    medicalSpecialty: 'Ophthalmology',
    address: postalAddress(studio),
    location: facilities.map((f) => ({
      '@type': 'MedicalClinic',
      name: f.id === 'studio' ? `Fallah Eyecare — ${t.facilities.items.studio.name}` : t.facilities.items[f.id].name,
      address: postalAddress(f),
      telephone: f.phoneHref.replace('tel:', ''),
      ...(f.website ? { url: f.website } : {}),
    })),
    hospitalAffiliation: {
      '@type': 'Hospital',
      name: 'Ospedale SS. Trinità di Borgomanero',
      address: { '@type': 'PostalAddress', addressLocality: 'Borgomanero', addressRegion: 'NO', addressCountry: 'IT' },
    },
    availableService: serviceGroups.flatMap((group) => group.items.map((item) => ({
      '@type': procedureType[group.id],
      name: t.services.items[item.id].title,
      url: `${siteUrl}/${locale}/servizi#${item.id}`,
    }))),
    areaServed: ['Varese', 'Borgomanero', 'Milano'].map((name) => ({ '@type': 'City', name })),
    availableLanguage: [...locales],
  };
}
