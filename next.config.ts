import type { NextConfig } from 'next';

/**
 * Pagine del vecchio sito WordPress (inglese senza prefisso, italiano in /it/, francese in /fr/)
 * → pagina equivalente del nuovo sito. Redirect permanenti: Google trasferisce l'indicizzazione
 * e i link esistenti continuano a funzionare. Lo slash finale (/it/hala-fallah/) è gestito da Next.
 */
const legacyRedirects: [source: string, destination: string][] = [
  // Home
  ['/it/oculista', '/it'],
  ['/fr/oculiste', '/fr'],
  // La dottoressa
  ['/it/hala-fallah', '/it/profilo'],
  ['/hala-fallah', '/it/profilo'],
  ['/fr/dr-hala-fallah', '/fr/profilo'],
  ['/about-us/hala-fallah', '/en/profilo'],
  // Appuntamenti e contatti
  ['/it/appuntamenti', '/it/contatti'],
  ['/fr/rendez-vous', '/fr/contatti'],
  ['/fr/contacts', '/fr/contatti'],
  ['/about-us/appointments', '/en/contatti'],
  ['/appointments', '/en/contatti'],
  ['/about-us/contact-us', '/en/contatti'],
  // Strutture e "dove sono"
  ['/it/dove-sono', '/it/strutture'],
  ['/fr/ou-suis-je', '/fr/strutture'],
  ['/fr/structures', '/fr/strutture'],
  ['/about-us/location', '/en/strutture'],
  ['/facilities', '/en/strutture'],
  // Prestazioni (le vecchie sottopagine puntano alla sezione corrispondente)
  ['/fr/les-services', '/fr/servizi'],
  ['/services', '/en/servizi'],
  ['/it/servizi/visite-oculistiche', '/it/servizi#visite'],
  ['/it/servizi/lenti-a-contatto', '/it/servizi#occhiali'],
  ['/it/servizi/diagnosi-e-cure', '/it/servizi#diagnostica'],
  ['/it/servizi/patologie-oculari', '/it/servizi#diagnostica'],
  ['/services/eye-examination', '/en/servizi#visite'],
  ['/services/contact-lenses', '/en/servizi#occhiali'],
  ['/services/diagnosis-and-treatment', '/en/servizi#diagnostica'],
  // Domande frequenti
  ['/it/domande-frequenti', '/it/faq'],
  ['/fr/foire-aux-questions', '/fr/faq'],
  ['/faq', '/en/faq'],
  // Note legali
  ['/it/note-legali', '/it/privacy'],
  ['/fr/notes-legales', '/fr/privacy'],
  ['/privacy-policy', '/en/privacy'],
  // Blog (conteneva solo l'articolo "sito in costruzione")
  ['/blog', '/en'],
  ['/2019/01/08/website-under-construction', '/en'],
  ['/it/2019/01/08/sito-web-in-costruzione', '/it'],
  ['/fr/2019/01/09/site-en-construction', '/fr'],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
      // Le pagine di dettaglio dei servizi della prima versione Next sono state unite nella pagina Prestazioni.
      { source: '/:locale(it|en|fr|es)/servizi/:slug', destination: '/:locale/servizi', permanent: true },
    ];
  },
};

export default nextConfig;
