export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const site = {
  phoneDisplay: '+39 339 6440958',
  phoneHref: 'tel:+393396440958',
  email: 'info@fallaheyecare.com',
  studioAddress: 'Via Montello 2, 21100 Varese VA',
  beccariaAddress: 'Via Calogero Marrone 2, 21100 Varese VA',
  medicalOrderUrl: 'https://omceovarese.it/',
  linkedinUrl: 'https://www.linkedin.com/search/results/people/?keywords=Hala%20Fallah%20Varese',
  wikipediaUrl: 'https://it.wikipedia.org/wiki/Oftalmologia',
  beccariaUrl: 'https://centrobeccaria.it/',
};

export const copy = {
  it: {
    nav: { home: 'Home', profile: 'Dott.ssa Fallah', services: 'Servizi', facilities: 'Strutture', faq: 'FAQ', contact: 'Contatti', book: 'Prenota un appuntamento' },
    common: {
      specialist: 'Specialista in Oftalmologia · Varese',
      eyebrow: 'Fallah Eyecare',
      readMore: 'Scopri di più',
      contactStudio: 'Contatta lo studio',
      bookVisit: 'Prenota una visita',
      call: 'Chiama',
      email: 'Email',
      directions: 'Indicazioni',
      openMaps: 'Apri in Google Maps',
      footerIntro: 'Oftalmologia, prevenzione e diagnostica specialistica a Varese per adulti e bambini.',
      usefulLinks: 'Link utili',
      explore: 'Esplora',
      contacts: 'Contatti',
      privacy: 'Privacy',
      rights: 'Fallah Eyecare · Dott.ssa Hala Fallah',
      disclaimer: 'Le informazioni del sito hanno finalità informative e non sostituiscono una valutazione medica.',
      medicalOrder: 'Ordine dei Medici di Varese',
      linkedin: 'Dott.ssa Fallah su LinkedIn',
      website: 'Sito web',
      wikipedia: 'Wikipedia · Oftalmologia',
    },
    home: {
      title: 'La salute degli occhi, con attenzione alla persona.',
      lead: 'La Dott.ssa Hala Fallah è medico chirurgo specialista in Oftalmologia. Visite, diagnostica strumentale e percorsi dedicati ad adulti e bambini a Varese.',
      ctaServices: 'Scopri i servizi',
      chips: ['Oftalmologia clinica', 'Adulti e bambini', 'Diagnostica avanzata'],
      servicesEyebrow: 'Servizi',
      servicesTitle: 'Un percorso completo per la salute visiva',
      servicesText: 'Dalla visita oculistica agli approfondimenti strumentali, con percorsi personalizzati in base alle necessità cliniche.',
      profileEyebrow: 'La specialista',
      profileTitle: 'Dott.ssa Hala Fallah',
      profileText: 'Medico chirurgo specialista in Oftalmologia, con formazione in Italia e all’estero ed esperienza maturata in strutture pubbliche e private nelle aree di Varese e Como.',
      facilitiesEyebrow: 'Dove ricevo',
      facilitiesTitle: 'Due sedi a Varese',
      facilitiesText: 'Studio privato e Centro Polispecialistico Beccaria: la sede più adatta dipende dalla prestazione richiesta.',
      ctaTitle: 'Hai bisogno di una visita oculistica?',
      ctaText: 'Contatta lo studio per informazioni, disponibilità e indicazioni sulla sede.',
    },
    profile: {
      eyebrow: 'Profilo professionale',
      title: 'Dott.ssa Hala Fallah',
      subtitle: 'Medico chirurgo · Specialista in Oftalmologia',
      intro: 'Un percorso professionale dedicato alla diagnosi, prevenzione e cura delle principali patologie oculari, con particolare attenzione alla relazione con il paziente.',
      educationTitle: 'Formazione',
      education: [
        'Laurea in Medicina presso l’Università di Damasco.',
        'Laurea in Medicina e Chirurgia e abilitazione presso l’Università degli Studi di Milano (1993).',
        'Specializzazione in Oftalmologia presso l’Università degli Studi di Milano (1999).',
        'Master in Rino-Allergologia presso l’Università La Sapienza di Roma (2014).',
        'Master in Oncologia Oculare presso l’Università Cattolica di Roma.',
        'Formazione in oftalmoplastica, patologie orbitarie e vie lacrimali con esperienze internazionali.'
      ],
      expertiseTitle: 'Aree di esperienza',
      expertise: ['Oftalmologia generale e pediatrica', 'Retina medica', 'Glaucoma e patologie corneali', 'Chirurgia refrattiva', 'Oftalmoplastica', 'Oncologia oculare', 'Allergologia oculare', 'Nutrizione clinica e prevenzione'],
    },
    services: {
      eyebrow: 'Prestazioni',
      title: 'Servizi oculistici',
      intro: 'Visite, diagnostica e percorsi specialistici per le principali esigenze di salute visiva.',
      cards: [
        { slug: 'visita-oculistica', title: 'Visita oculistica completa', text: 'Valutazione della funzione visiva e della salute dell’occhio per adulti, bambini e neonati.', bullets: ['Valutazione visiva', 'Fondo oculare quando indicato', 'Prescrizione di lenti correttive'] },
        { slug: 'esami-strumentali', title: 'Esami strumentali oculari', text: 'Approfondimenti diagnostici selezionati sulla base della visita e del quadro clinico.', bullets: ['OCT', 'Topografia e pachimetria', 'Tonometria e gonioscopia'] },
        { slug: 'cornea-refrattiva', title: 'Cornea e chirurgia refrattiva', text: 'Valutazione di cheratocono, distrofie e idoneità ai trattamenti per difetti refrattivi.', bullets: ['Cheratocono', 'Miopia e astigmatismo', 'Ipermetropia e presbiopia'] },
        { slug: 'glaucoma', title: 'Glaucoma e ipertono oculare', text: 'Controllo della pressione intraoculare e studio del nervo ottico con esami dedicati.', bullets: ['Pressione oculare', 'OCT nervo ottico', 'Gonioscopia'] },
        { slug: 'retina', title: 'Retina e macula', text: 'Inquadramento di patologie retiniche e maculari con visita ed esami strumentali mirati.', bullets: ['Retinopatia diabetica', 'Maculopatie', 'Alterazioni vascolari'] },
        { slug: 'pediatrica', title: 'Oculistica pediatrica', text: 'Visite dedicate a bambini e neonati con tecniche adatte all’età e alla collaborazione.', bullets: ['Difetti visivi', 'Motilità oculare', 'Visita in cicloplegia'] },
        { slug: 'oftalmoplastica', title: 'Oftalmoplastica e palpebre', text: 'Valutazione di calazio, cisti, neoformazioni e altre problematiche palpebrali.', bullets: ['Calazio', 'Cisti', 'Neoformazioni palpebrali'] },
        { slug: 'nutrizione', title: 'Nutrizione e salute oculare', text: 'Indicazioni nutrizionali nell’ambito della prevenzione e del supporto alla salute visiva.', bullets: ['Prevenzione', 'Salute maculare', 'Supporto allo stile di vita'] }
      ]
    },
    facilities: {
      eyebrow: 'Dove riceve',
      title: 'Strutture a Varese',
      intro: 'Due sedi con attività complementari. Verifica la struttura corretta al momento della prenotazione.',
      studioTitle: 'Studio privato',
      studioLabel: 'Sede principale',
      studioText: 'Sede principale per visite oculistiche ed esami diagnostici specialistici privati su appuntamento.',
      beccariaTitle: 'Centro Polispecialistico Beccaria',
      beccariaLabel: 'Poliambulatorio',
      beccariaText: 'Presso la struttura vengono eseguite visite per adulti e bambini, esami retinici strumentali e piccoli interventi palpebrali secondo disponibilità del centro.',
      bookingNote: 'Le prenotazioni per il Centro Beccaria seguono i canali ufficiali della struttura.',
    },
    faq: {
      eyebrow: 'Domande frequenti',
      title: 'FAQ',
      intro: 'Informazioni pratiche prima della visita.',
      items: [
        ['Come prenoto una visita?', 'Puoi contattare lo studio telefonicamente o via email. Per le prestazioni presso il Centro Beccaria è necessario utilizzare i canali di prenotazione della struttura.'],
        ['La dottoressa visita anche bambini?', 'Sì. Sono previste visite oculistiche pediatriche e valutazioni dedicate anche ai più piccoli.'],
        ['Dove si trova lo studio privato?', 'Lo studio privato è in Via Montello 2, Varese. Nella pagina Strutture trovi la mappa interattiva.'],
        ['Quali esami strumentali vengono eseguiti?', 'Tra gli esami indicati figurano OCT, topografia e pachimetria corneale, tonometria, gonioscopia e altri approfondimenti selezionati in base alla necessità clinica.'],
        ['È necessaria una prescrizione?', 'Per una visita privata non è normalmente necessaria l’impegnativa. Per prestazioni presso altre strutture, verifica le modalità di accesso al momento della prenotazione.']
      ]
    },
    contact: {
      eyebrow: 'Contatti',
      title: 'Parliamo della tua esigenza',
      intro: 'Per informazioni o per richiedere un appuntamento, contatta lo studio telefonicamente o via email.',
      name: 'Nome e cognome', emailLabel: 'Email', subject: 'Oggetto', message: 'Messaggio', send: 'Prepara email', formNote: 'Il modulo apre il programma email del dispositivo; nessun dato viene inviato a un server del sito.',
    },
    privacy: {
      eyebrow: 'Informazioni legali', title: 'Privacy', intro: 'Pagina informativa da completare con l’informativa privacy definitiva prima della pubblicazione.',
      body: 'Questo progetto dimostrativo non utilizza un database, non invia moduli a un backend e incorpora Google Maps nelle pagine delle strutture. Prima della pubblicazione è necessario predisporre un’informativa coerente con i servizi effettivamente attivati, inclusi eventuali cookie, analytics, moduli di contatto e contenuti di terze parti.'
    }
  },
  en: {
    nav: { home: 'Home', profile: 'Dr Fallah', services: 'Services', facilities: 'Locations', faq: 'FAQ', contact: 'Contact', book: 'Book an appointment' },
    common: {
      specialist: 'Ophthalmology Specialist · Varese',
      eyebrow: 'Fallah Eyecare',
      readMore: 'Learn more',
      contactStudio: 'Contact the practice',
      bookVisit: 'Book a visit',
      call: 'Call',
      email: 'Email',
      directions: 'Directions',
      openMaps: 'Open in Google Maps',
      footerIntro: 'Ophthalmology, prevention and specialist diagnostics in Varese for adults and children.',
      usefulLinks: 'Useful links',
      explore: 'Explore',
      contacts: 'Contacts',
      privacy: 'Privacy',
      rights: 'Fallah Eyecare · Dr Hala Fallah',
      disclaimer: 'The information on this website is for general information only and does not replace medical assessment.',
      medicalOrder: 'Varese Medical Association',
      linkedin: 'Dr Fallah on LinkedIn',
      website: 'Website',
      wikipedia: 'Wikipedia · Ophthalmology',
    },
    home: {
      title: 'Eye care focused on the person.',
      lead: 'Dr Hala Fallah is a medical doctor and specialist in Ophthalmology. Eye examinations, instrumental diagnostics and dedicated pathways for adults and children in Varese.',
      ctaServices: 'Explore services',
      chips: ['Clinical ophthalmology', 'Adults and children', 'Advanced diagnostics'],
      servicesEyebrow: 'Services',
      servicesTitle: 'Complete support for visual health',
      servicesText: 'From routine eye examinations to targeted diagnostic testing, with pathways tailored to clinical needs.',
      profileEyebrow: 'The specialist',
      profileTitle: 'Dr Hala Fallah',
      profileText: 'Medical doctor and ophthalmology specialist, trained in Italy and abroad, with experience in public and private healthcare facilities in the Varese and Como areas.',
      facilitiesEyebrow: 'Where to find me',
      facilitiesTitle: 'Two locations in Varese',
      facilitiesText: 'Private practice and Centro Polispecialistico Beccaria: the appropriate location depends on the service required.',
      ctaTitle: 'Do you need an eye examination?',
      ctaText: 'Contact the practice for information, availability and guidance on the appropriate location.',
    },
    profile: {
      eyebrow: 'Professional profile',
      title: 'Dr Hala Fallah',
      subtitle: 'Medical doctor · Ophthalmology Specialist',
      intro: 'A professional path focused on diagnosis, prevention and care of common eye conditions, with particular attention to the patient relationship.',
      educationTitle: 'Education & training',
      education: [
        'Medical degree from the University of Damascus.',
        'Degree in Medicine and Surgery and medical license from the University of Milan (1993).',
        'Postgraduate specialization in Ophthalmology at the University of Milan (1999).',
        'Master’s degree in Rhino-Allergology at Sapienza University of Rome (2014).',
        'Master’s degree in Ocular Oncology at the Catholic University of Rome.',
        'Advanced training in ophthalmoplasty, orbital conditions and lacrimal pathways, including international experience.'
      ],
      expertiseTitle: 'Areas of experience',
      expertise: ['General and pediatric ophthalmology', 'Medical retina', 'Glaucoma and corneal diseases', 'Refractive surgery', 'Ophthalmoplasty', 'Ocular oncology', 'Ocular allergy', 'Clinical nutrition and prevention'],
    },
    services: {
      eyebrow: 'Care',
      title: 'Ophthalmology services',
      intro: 'Eye examinations, diagnostics and specialist pathways for the main visual health needs.',
      cards: [
        { slug: 'visita-oculistica', title: 'Comprehensive eye examination', text: 'Assessment of visual function and eye health for adults, children and infants.', bullets: ['Vision assessment', 'Fundus examination when indicated', 'Corrective lens prescription'] },
        { slug: 'esami-strumentali', title: 'Instrumental eye diagnostics', text: 'Diagnostic testing selected according to the examination and clinical picture.', bullets: ['OCT', 'Corneal topography and pachymetry', 'Tonometry and gonioscopy'] },
        { slug: 'cornea-refrattiva', title: 'Cornea & refractive surgery', text: 'Assessment of keratoconus, corneal dystrophies and suitability for refractive treatments.', bullets: ['Keratoconus', 'Myopia and astigmatism', 'Hyperopia and presbyopia'] },
        { slug: 'glaucoma', title: 'Glaucoma & ocular hypertension', text: 'Intraocular pressure monitoring and optic nerve assessment with dedicated tests.', bullets: ['Eye pressure', 'Optic nerve OCT', 'Gonioscopy'] },
        { slug: 'retina', title: 'Retina & macula', text: 'Assessment of retinal and macular conditions with targeted examination and diagnostics.', bullets: ['Diabetic retinopathy', 'Macular disease', 'Vascular changes'] },
        { slug: 'pediatrica', title: 'Pediatric ophthalmology', text: 'Eye examinations for children and infants using age-appropriate techniques.', bullets: ['Visual defects', 'Ocular motility', 'Cycloplegic examination'] },
        { slug: 'oftalmoplastica', title: 'Ophthalmoplasty & eyelids', text: 'Assessment of chalazion, cysts, lesions and other eyelid conditions.', bullets: ['Chalazion', 'Cysts', 'Eyelid lesions'] },
        { slug: 'nutrizione', title: 'Nutrition & eye health', text: 'Nutritional guidance as part of prevention and support for visual health.', bullets: ['Prevention', 'Macular health', 'Lifestyle support'] }
      ]
    },
    facilities: {
      eyebrow: 'Locations',
      title: 'Varese locations',
      intro: 'Two complementary locations. Confirm the correct facility when booking.',
      studioTitle: 'Private practice',
      studioLabel: 'Main practice',
      studioText: 'Main location for private eye examinations and specialist diagnostic testing by appointment.',
      beccariaTitle: 'Centro Polispecialistico Beccaria',
      beccariaLabel: 'Medical centre',
      beccariaText: 'Adult and pediatric eye examinations, instrumental retinal testing and minor eyelid procedures are provided according to the centre’s availability.',
      bookingNote: 'Appointments at Centro Beccaria must be booked through the centre’s official channels.',
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'FAQ',
      intro: 'Practical information before your visit.',
      items: [
        ['How can I book an appointment?', 'You can contact the private practice by phone or email. Services at Centro Beccaria must be booked through the centre’s official channels.'],
        ['Does Dr Fallah see children?', 'Yes. Pediatric eye examinations and age-appropriate assessments are available.'],
        ['Where is the private practice?', 'The private practice is at Via Montello 2, Varese. You can find an interactive map on the Locations page.'],
        ['Which instrumental tests are available?', 'Tests listed include OCT, corneal topography and pachymetry, tonometry, gonioscopy and other targeted examinations depending on clinical need.'],
        ['Do I need a referral?', 'A referral is generally not required for a private examination. For services at other facilities, confirm access requirements when booking.']
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us how we can help',
      intro: 'For information or to request an appointment, contact the practice by phone or email.',
      name: 'Full name', emailLabel: 'Email', subject: 'Subject', message: 'Message', send: 'Prepare email', formNote: 'The form opens your device email application; no data is sent to a website server.',
    },
    privacy: {
      eyebrow: 'Legal information', title: 'Privacy', intro: 'Information page to be completed with the final privacy notice before publication.',
      body: 'This demonstration project does not use a database, does not submit forms to a backend, and embeds Google Maps on the Locations page. Before publishing, a privacy notice should be prepared to match the actual services enabled, including cookies, analytics, contact forms and third-party content.'
    }
  }
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
