/**
 * Dati del sito (non tradotti) + tipi delle traduzioni.
 * I testi pubblici di ogni lingua sono in `lib/copy/<lingua>.ts`.
 */
import type { IconName } from '@/components/Icon';
import { en } from './copy/en';
import { es } from './copy/es';
import { fr } from './copy/fr';
import { it } from './copy/it';

export const locales = ['it', 'en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = { it: 'Italiano', en: 'English', fr: 'Français', es: 'Español' };
export const localeLabels: Record<Locale, string> = { it: 'IT', en: 'EN', fr: 'FR', es: 'ES' };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/* ---------- Strutture ---------- */
export type FacilityId = 'studio' | 'beccaria' | 'laquiete' | 'sanluigi' | 'vistavision';
export type Capability = 'visit' | 'diagnostics' | 'minorSurgery' | 'pediatricRedReflex' | 'surgery' | 'refractiveLaser' | 'insurance';
export const capabilityOrder: Capability[] = ['visit', 'diagnostics', 'minorSurgery', 'pediatricRedReflex', 'surgery', 'refractiveLaser', 'insurance'];

export type Facility = {
  id: FacilityId;
  street: string;
  postalCode: string;
  city: string;
  province: string;
  phoneDisplay: string;
  phoneHref: string;
  website?: string;
  capabilities: Capability[];
};

/** Le cinque strutture in cui riceve e opera la dottoressa (ordine di presentazione). */
export const facilities: Facility[] = [
  { id: 'studio', street: 'Via Montello 2', postalCode: '21100', city: 'Varese', province: 'VA', phoneDisplay: '+39 339 6440958', phoneHref: 'tel:+393396440958', capabilities: ['visit', 'diagnostics'] },
  { id: 'beccaria', street: 'Via Calogero Marrone 2', postalCode: '21100', city: 'Varese', province: 'VA', phoneDisplay: '0332 234395', phoneHref: 'tel:+390332234395', website: 'https://www.centrobeccaria.it/', capabilities: ['visit', 'diagnostics', 'minorSurgery', 'pediatricRedReflex', 'insurance'] },
  { id: 'laquiete', street: 'Via Dante Alighieri 20', postalCode: '21100', city: 'Varese', province: 'VA', phoneDisplay: '0332 18831', phoneHref: 'tel:+39033218831', website: 'https://www.clinicalaquiete.it/', capabilities: ['visit', 'diagnostics', 'surgery', 'insurance'] },
  { id: 'sanluigi', street: 'Via Piave 2', postalCode: '28021', city: 'Borgomanero', province: 'NO', phoneDisplay: '0322 846754', phoneHref: 'tel:+390322846754', capabilities: ['visit', 'diagnostics', 'surgery'] },
  { id: 'vistavision', street: 'Via Luigi Rizzo 8', postalCode: '20151', city: 'Milano', province: 'MI', phoneDisplay: '02 38005605', phoneHref: 'tel:+390238005605', capabilities: ['surgery', 'refractiveLaser'] },
];

export function facilityAddress(f: Facility): string {
  return `${f.street}, ${f.postalCode} ${f.city} ${f.province}`;
}

const studio = facilities[0];

export const site = {
  phoneDisplay: studio.phoneDisplay,
  phoneHref: studio.phoneHref,
  email: 'info@fallaheyecare.com',
  studioAddress: facilityAddress(studio),
  medicalOrderUrl: 'https://omceovarese.it/',
};

/* ---------- Prestazioni ---------- */
export type ServiceGroupId = 'visite' | 'diagnostica' | 'oftalmoplastica' | 'chirurgia';
export type ServiceItemId =
  | 'visita-oculistica' | 'visita-pediatrica' | 'occhiali' | 'nutrizione'
  | 'esami-strumentali' | 'laser-ambulatoriali' | 'idoneita-refrattiva' | 'patologie-corneali' | 'esami-glaucoma' | 'patologie-retiniche'
  | 'palpebre-annessi' | 'oncologia-oculare'
  | 'cataratta' | 'chirurgia-glaucoma' | 'pterigio-neoformazioni' | 'cross-linking' | 'chirurgia-refrattiva';

export type ServiceGroup = {
  id: ServiceGroupId;
  icon: IconName;
  /** Strutture in cui si svolgono le prestazioni dell'area (se applicabile). */
  where?: Capability[];
  items: { id: ServiceItemId; icon: IconName }[];
};

/** Struttura del catalogo prestazioni: gli id servono anche come ancore (#id) nella pagina Prestazioni. */
export const serviceGroups: ServiceGroup[] = [
  {
    id: 'visite', icon: 'eye', where: ['visit'],
    items: [
      { id: 'visita-oculistica', icon: 'eye' },
      { id: 'visita-pediatrica', icon: 'child' },
      { id: 'occhiali', icon: 'glasses' },
      { id: 'nutrizione', icon: 'leaf' },
    ],
  },
  {
    id: 'diagnostica', icon: 'scan', where: ['diagnostics'],
    items: [
      { id: 'esami-strumentali', icon: 'scan' },
      { id: 'laser-ambulatoriali', icon: 'laser' },
      { id: 'idoneita-refrattiva', icon: 'target' },
      { id: 'patologie-corneali', icon: 'cornea' },
      { id: 'esami-glaucoma', icon: 'gauge' },
      { id: 'patologie-retiniche', icon: 'retina' },
    ],
  },
  {
    id: 'oftalmoplastica', icon: 'eyelid',
    items: [
      { id: 'palpebre-annessi', icon: 'eyelid' },
      { id: 'oncologia-oculare', icon: 'microscope' },
    ],
  },
  {
    id: 'chirurgia', icon: 'scalpel', where: ['surgery', 'refractiveLaser'],
    items: [
      { id: 'cataratta', icon: 'lens' },
      { id: 'chirurgia-glaucoma', icon: 'stent' },
      { id: 'pterigio-neoformazioni', icon: 'scalpel' },
      { id: 'cross-linking', icon: 'sparkle' },
      { id: 'chirurgia-refrattiva', icon: 'laser' },
    ],
  },
];

export const serviceItemIds: ServiceItemId[] = serviceGroups.flatMap((group) => group.items.map((item) => item.id));

/* ---------- Tipi delle traduzioni ---------- */
type ServiceItemCopy = { title: string; text: string; tags?: string[] };
type CredentialKind = 'university' | 'master' | 'certification';
type Credential = { badge: string; title: string; institution: string; year?: string; description?: string };

export type Translation = {
  nav: { home: string; profile: string; services: string; facilities: string; faq: string; contact: string; book: string };
  common: {
    specialist: string; eyebrow: string; readMore: string; contactStudio: string; bookVisit: string;
    call: string; email: string; directions: string; explore: string; contacts: string; privacy: string;
    rights: string; disclaimer: string; medicalOrder: string; allServices: string; language: string;
    bookNote: string; location: string; skipToContent: string; menuOpen: string; menuClose: string;
    breadcrumb: string; yes: string; no: string;
  };
  home: {
    metaTitle: string; metaDescription: string;
    title: string; lead: string; ctaServices: string; chips: string[];
    stats: { value: string; label: string }[];
    stepsEyebrow: string; stepsTitle: string; stepsText: string;
    steps: { title: string; text: string }[];
    servicesEyebrow: string; servicesTitle: string; servicesText: string; discoverArea: string;
    profileEyebrow: string; profileTitle: string; profileText: string;
    experienceValue: string; experienceLabel: string;
    facilitiesEyebrow: string; facilitiesTitle: string; facilitiesText: string;
    ctaTitle: string; ctaText: string; trustTitle: string; trustText: string;
  };
  profile: {
    eyebrow: string; title: string; subtitle: string; intro: string; metaDescription: string;
    facts: string[];
    bioEyebrow: string; bioTitle: string; bio: string[];
    educationEyebrow: string; educationTitle: string; educationIntro: string;
    educationGroups: { kind: CredentialKind; title: string; entries: Credential[] }[];
    careerTitle: string; career: { title: string; place: string; text?: string }[];
    expertiseTitle: string; expertise: string[];
  };
  services: {
    eyebrow: string; title: string; intro: string; metaTitle: string; metaDescription: string;
    navLabel: string; whereLabel: string; countLabel: string;
    groups: Record<ServiceGroupId, { title: string; intro: string }>;
    items: Record<ServiceItemId, ServiceItemCopy>;
    processTitle: string; helpTitle: string; helpText: string;
    facilitiesTitle: string; facilitiesText: string; facilitiesButton: string;
  };
  /** Avviso (solo pagina Contatti): il telefono serve solo per gli appuntamenti, nessun consulto telefonico/digitale. */
  phonePolicy: {
    eyebrow: string; title: string; text: string; points: string[]; badge: string; note: string;
  };
  facilities: {
    eyebrow: string; title: string; intro: string; metaTitle: string; metaDescription: string;
    matrixTitle: string; matrixText: string; facilityColumn: string;
    capabilities: Record<Capability, string>;
    capabilitiesShort: Record<Capability, string>;
    items: Record<FacilityId, { name: string; label: string; text: string }>;
    bookingLabel: string; websiteLabel: string; detailsLink: string;
    directLineTitle: string; directLineText: string;
    bookingNote: string; otherTitle: string; otherText: string;
  };
  faq: { eyebrow: string; title: string; intro: string; items: [string, string][] };
  contact: {
    eyebrow: string; title: string; intro: string; name: string; emailLabel: string; phoneLabel: string;
    subject: string; message: string; send: string; formNote: string;
    sending: string; sentTitle: string; sentText: string; sendAnother: string; errorText: string;
    studio: string; maps: string; requestTitle: string; requestText: string;
  };
};

const copy: Record<Locale, Translation> = { it, en, fr, es };

export function getCopy(locale: Locale): Translation {
  return copy[locale];
}

/** Query per Google Maps: nome della struttura + indirizzo (lo studio privato usa solo l'indirizzo). */
export function facilityMapQuery(f: Facility, t: Translation): string {
  return f.id === 'studio' ? facilityAddress(f) : `${t.facilities.items[f.id].name}, ${facilityAddress(f)}`;
}
