/** All public copy lives here. Service slugs remain identical in every language. */
export const locales = ['it', 'en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = { it: 'Italiano', en: 'English', fr: 'Français', es: 'Español' };
export const localeLabels: Record<Locale, string> = { it: 'IT', en: 'EN', fr: 'FR', es: 'ES' };
export const serviceSlugs = [
  'visita-oculistica', 'esami-strumentali', 'cornea-refrattiva', 'glaucoma',
  'retina', 'pediatrica', 'oftalmoplastica', 'nutrizione',
] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.includes(value as ServiceSlug);
}

export const site = {
  phoneDisplay: '+39 339 6440958',
  phoneHref: 'tel:+393396440958',
  email: 'info@fallaheyecare.com',
  studioAddress: 'Via Montello 2, 21100 Varese VA',
  beccariaAddress: 'Via Calogero Marrone 2, 21100 Varese VA',
  medicalOrderUrl: 'https://omceovarese.it/',
  beccariaUrl: 'https://centrobeccaria.it/',
};

type ServiceCopy = {
  slug: ServiceSlug;
  title: string;
  text: string;
  detail: string;
  bullets: string[];
};
type Training = { period: string; title: string; institution: string; description: string; dated: boolean };
export type Translation = {
  nav: { home: string; profile: string; services: string; facilities: string; faq: string; contact: string; book: string };
  common: {
    specialist: string; eyebrow: string; readMore: string; discover: string; backToServices: string;
    contactStudio: string; bookVisit: string; call: string; email: string; directions: string;
    openMaps: string; explore: string; contacts: string; privacy: string; rights: string;
    disclaimer: string; medicalOrder: string; allServices: string; language: string;
    bookNote: string; location: string; visitInfo: string;
  };
  home: {
    title: string; lead: string; ctaServices: string; chips: string[];
    servicesEyebrow: string; servicesTitle: string; servicesText: string;
    profileEyebrow: string; profileTitle: string; profileText: string;
    facilitiesEyebrow: string; facilitiesTitle: string; facilitiesText: string;
    ctaTitle: string; ctaText: string; educationHighlight: string;
    trustTitle: string; trustText: string;
  };
  profile: {
    eyebrow: string; title: string; subtitle: string; intro: string;
    educationTitle: string; educationIntro: string; undated: string;
    education: Training[]; expertiseTitle: string; expertise: string[];
  };
  services: {
    eyebrow: string; title: string; intro: string; cards: ServiceCopy[];
    areas: string; detailEyebrow: string; assessmentNote: string; helpTitle: string;
    helpText: string; processTitle: string; processText: string;
  };
  consultation: {
    eyebrow: string; title: string; text: string; badge: string; tariff: string;
    cta: string; note: string;
  };
  facilities: {
    eyebrow: string; title: string; intro: string; studioTitle: string;
    studioLabel: string; studioText: string; beccariaTitle: string;
    beccariaLabel: string; beccariaText: string; bookingNote: string; beccariaWebsite: string;
  };
  faq: { eyebrow: string; title: string; intro: string; items: [string, string][] };
  contact: {
    eyebrow: string; title: string; intro: string; name: string; emailLabel: string;
    subject: string; message: string; send: string; formNote: string;
    studio: string; maps: string; requestTitle: string; requestText: string;
  };
};

const copy: Record<Locale, Translation> = {
  it: {
    nav: { home: 'Home', profile: 'La dottoressa', services: 'Prestazioni', facilities: 'Dove riceve', faq: 'FAQ', contact: 'Contatti', book: 'Prenota una visita' },
    common: {
      specialist: 'Medico chirurgo · Specialista in Oftalmologia', eyebrow: 'Fallah Eyecare',
      readMore: 'Conosci la dottoressa', discover: 'Scopri il servizio', backToServices: 'Tutte le prestazioni',
      contactStudio: 'Contatta lo studio', bookVisit: 'Richiedi una visita', call: 'Chiama', email: 'Scrivi un’email',
      directions: 'Come arrivare', openMaps: 'Apri in Google Maps', explore: 'Esplora', contacts: 'Contatti',
      privacy: 'Privacy', rights: 'Fallah Eyecare · Dott.ssa Hala Fallah',
      disclaimer: 'I contenuti sono informativi e non sostituiscono una visita o una valutazione medica.',
      medicalOrder: 'Ordine dei Medici di Varese', allServices: 'Vedi tutte le prestazioni',
      language: 'Lingua del sito', bookNote: 'Visite su appuntamento', location: 'Varese, Italia',
      visitInfo: 'La valutazione e gli esami necessari vengono definiti in base alle esigenze cliniche individuali.',
    },
    home: {
      title: 'Uno sguardo attento, una cura su misura.',
      lead: 'La Dott.ssa Hala Fallah si dedica alla salute degli occhi di adulti e bambini, con competenza specialistica, ascolto e attenzione alla persona.',
      ctaServices: 'Esplora le prestazioni', chips: ['Oftalmologia', 'Diagnostica oculare', 'Adulti e bambini'],
      servicesEyebrow: 'Le nostre competenze', servicesTitle: 'La salute dei tuoi occhi, in ogni fase della vita',
      servicesText: 'Sei percorsi in evidenza. Seleziona una prestazione per approfondire la visita, gli esami e le aree di valutazione.',
      profileEyebrow: 'La specialista', profileTitle: 'Esperienza, formazione e attenzione alla persona.',
      profileText: 'Medico chirurgo specialista in Oftalmologia, con un percorso formativo in Italia e all’estero ed esperienza in contesti clinici pubblici e privati.',
      facilitiesEyebrow: 'Le sedi', facilitiesTitle: 'Due punti di riferimento a Varese',
      facilitiesText: 'Studio privato e Centro Polispecialistico Beccaria: la sede della prestazione viene confermata in fase di prenotazione.',
      ctaTitle: 'Il primo passo è parlarne.', ctaText: 'Per prenotazioni, informazioni sulle prestazioni e indicazioni sulla sede, contatta lo studio.',
      educationHighlight: 'Specialista in Oftalmologia dal 1999',
      trustTitle: 'La medicina comincia dall’ascolto.', trustText: 'Percorsi di valutazione personalizzati, con indicazioni chiare e attenzione alle esigenze di ogni paziente.',
    },
    profile: {
      eyebrow: 'La dottoressa', title: 'Dott.ssa Hala Fallah', subtitle: 'Medico chirurgo · Specialista in Oftalmologia',
      intro: 'Un percorso professionale dedicato alla prevenzione, alla diagnosi e alla cura delle patologie oculari, con attenzione alla relazione medico-paziente.',
      educationTitle: 'Un percorso di formazione, nel tempo',
      educationIntro: 'Le principali tappe del percorso accademico e dell’aggiornamento specialistico. Le date non documentate sono indicate senza attribuire un anno.',
      undated: 'Data non indicata',
      education: [
        { period: '1993', title: 'Laurea e abilitazione', institution: 'Università degli Studi di Milano', description: 'Laurea in Medicina e Chirurgia e abilitazione professionale.', dated: true },
        { period: '1999', title: 'Specializzazione in Oftalmologia', institution: 'Università degli Studi di Milano', description: 'Completamento della specializzazione medica in Oftalmologia.', dated: true },
        { period: '2014', title: 'Master in Rino-Allergologia', institution: 'Sapienza Università di Roma', description: 'Approfondimento interdisciplinare in ambito allergologico.', dated: true },
        { period: '—', title: 'Formazione universitaria in Medicina', institution: 'Università di Damasco', description: 'Laurea in Medicina. Data non indicata nella documentazione disponibile.', dated: false },
        { period: '—', title: 'Master in Oncologia Oculare', institution: 'Università Cattolica di Roma', description: 'Approfondimento specialistico in oncologia oculare.', dated: false },
        { period: '—', title: 'Aggiornamento specialistico internazionale', institution: 'Formazione clinica in Italia e all’estero', description: 'Oftalmoplastica, patologie dell’orbita e delle vie lacrimali.', dated: false },
      ],
      expertiseTitle: 'Ambiti di esperienza',
      expertise: ['Oftalmologia generale e pediatrica', 'Retina medica', 'Glaucoma e patologie corneali', 'Chirurgia refrattiva', 'Oftalmoplastica', 'Oncologia oculare', 'Allergologia oculare', 'Nutrizione e prevenzione'],
    },
    services: {
      eyebrow: 'Prestazioni specialistiche', title: 'I nostri servizi oculistici',
      intro: 'Visite, esami diagnostici e approfondimenti specialistici: trova la prestazione più adatta alle tue esigenze.',
      areas: 'Ambiti di valutazione', detailEyebrow: 'Approfondimento specialistico',
      assessmentNote: 'Gli approfondimenti vengono indicati dopo valutazione clinica e possono variare in base al paziente e alla sede.',
      helpTitle: 'Non sai quale visita scegliere?', helpText: 'Contatta lo studio: potremo fornirti informazioni organizzative sulla prestazione e sulla sede.',
      processTitle: 'Una valutazione centrata sulla persona', processText: 'La visita parte dall’ascolto delle esigenze e prosegue, quando indicato, con gli esami appropriati al quadro clinico.',
      cards: [
        { slug: 'visita-oculistica', title: 'Visita oculistica completa', text: 'Una valutazione della funzione visiva e della salute oculare, per tutte le età.', detail: 'La visita consente di valutare i sintomi riferiti, la capacità visiva e lo stato di salute degli occhi. Gli eventuali esami aggiuntivi sono proposti in relazione al quadro clinico.', bullets: ['Valutazione dell’acuità visiva', 'Esame del fondo oculare quando indicato', 'Valutazione della correzione ottica'] },
        { slug: 'esami-strumentali', title: 'Diagnostica strumentale', text: 'Esami mirati per approfondire la salute dell’occhio e delle sue strutture.', detail: 'Gli esami strumentali completano la valutazione clinica quando necessario. Il tipo di accertamento dipende dal sospetto diagnostico e dalle caratteristiche della persona.', bullets: ['Tomografia a coerenza ottica (OCT)', 'Topografia e pachimetria corneale', 'Tonometria e gonioscopia'] },
        { slug: 'cornea-refrattiva', title: 'Cornea e difetti refrattivi', text: 'Valutazioni dedicate a cornea, cheratocono e disturbi della refrazione.', detail: 'Un percorso per inquadrare le alterazioni corneali e i difetti visivi, come miopia, ipermetropia, astigmatismo e presbiopia, e valutare possibili opzioni correttive.', bullets: ['Cheratocono e distrofie corneali', 'Miopia, astigmatismo e ipermetropia', 'Valutazione pre-trattamento refrattivo'] },
        { slug: 'glaucoma', title: 'Glaucoma e pressione oculare', text: 'Controlli specialistici della pressione intraoculare e del nervo ottico.', detail: 'La valutazione del rischio di glaucoma considera più elementi clinici. Il monitoraggio può includere pressione oculare ed esami del nervo ottico, secondo indicazione.', bullets: ['Misurazione della pressione oculare', 'Valutazione del nervo ottico', 'OCT e gonioscopia quando indicati'] },
        { slug: 'retina', title: 'Retina e macula', text: 'Approfondimenti dedicati alla retina e alla visione centrale.', detail: 'L’esame clinico e la diagnostica di supporto permettono di valutare le condizioni della retina e della macula. Gli approfondimenti sono scelti in base ai sintomi e ai fattori di rischio.', bullets: ['Retinopatia diabetica', 'Alterazioni maculari', 'Patologie vascolari retiniche'] },
        { slug: 'pediatrica', title: 'Oculistica pediatrica', text: 'Visite per bambini e neonati, con attenzione a ogni fascia d’età.', detail: 'La valutazione oculistica pediatrica tiene conto dello sviluppo visivo e delle modalità di collaborazione del bambino. Può aiutare a identificare precocemente problemi della vista.', bullets: ['Difetti visivi in età evolutiva', 'Motilità e allineamento oculare', 'Esame in cicloplegia quando indicato'] },
        { slug: 'oftalmoplastica', title: 'Oftalmoplastica e palpebre', text: 'Valutazione di disturbi e alterazioni della regione palpebrale.', detail: 'La visita è orientata all’inquadramento delle condizioni palpebrali e perioculari e alla definizione delle eventuali indicazioni di trattamento o approfondimento.', bullets: ['Calazio e cisti', 'Lesioni palpebrali', 'Disturbi della regione perioculare'] },
        { slug: 'nutrizione', title: 'Nutrizione e salute visiva', text: 'Prevenzione e stili di vita come supporto alla salute degli occhi.', detail: 'Abitudini alimentari e stili di vita possono avere un ruolo nella prevenzione generale. Il supporto nutrizionale va valutato nel contesto della salute complessiva del paziente.', bullets: ['Prevenzione e stile di vita', 'Benessere della macula', 'Indicazioni individualizzate'] },
      ],
    },
    consultation: {
      eyebrow: 'Informazioni importanti', title: 'Consulenze telefoniche a pagamento',
      text: 'Le consulenze mediche effettuate per telefono sono prestazioni professionali a pagamento, distinte dalle telefonate per prenotazioni e informazioni organizzative.',
      badge: 'Prestazione a pagamento', tariff: 'Tariffa e modalità vengono comunicate prima della conferma.',
      cta: 'Richiedi informazioni', note: 'Per urgenze mediche, utilizza i servizi sanitari di emergenza: il telefono dello studio non è un servizio di pronto intervento.',
    },
    facilities: {
      eyebrow: 'Dove riceve', title: 'Le sedi a Varese',
      intro: 'Due sedi con attività complementari: verifica sempre la struttura corretta al momento della prenotazione.',
      studioTitle: 'Studio privato', studioLabel: 'Sede privata',
      studioText: 'Sede per visite oculistiche private ed esami diagnostici specialistici su appuntamento.',
      beccariaTitle: 'Centro Polispecialistico Beccaria', beccariaLabel: 'Centro specialistico',
      beccariaText: 'Visite per adulti e bambini, esami retinici e piccoli interventi palpebrali in base all’organizzazione del centro.',
      bookingNote: 'Le prestazioni presso il Centro Beccaria si prenotano attraverso i canali ufficiali del centro.',
      beccariaWebsite: 'Sito del Centro Beccaria',
    },
    faq: {
      eyebrow: 'Domande frequenti', title: 'Informazioni utili', intro: 'Le risposte alle domande più comuni prima di una visita.',
      items: [
        ['Come posso prenotare una visita?', 'Contatta lo studio privato al numero o all’indirizzo email indicati. Per le prestazioni al Centro Beccaria, utilizza i canali del centro.'],
        ['Le consulenze telefoniche hanno un costo?', 'Sì. Le consulenze mediche telefoniche sono a pagamento. La tariffa viene comunicata prima della conferma. Le chiamate per informazioni organizzative e prenotazioni sono distinte dalle consulenze.'],
        ['La dottoressa visita anche bambini?', 'Sì, sono previste valutazioni oculistiche pediatriche e per neonati.'],
        ['Dove si trova lo studio privato?', 'In Via Montello 2, Varese. La pagina Dove riceve include indicazioni e mappa.'],
        ['Quali esami possono essere indicati?', 'Tra gli esami citati ci sono OCT, topografia e pachimetria, tonometria e gonioscopia. La scelta dipende dalle indicazioni cliniche.'],
        ['È necessaria l’impegnativa?', 'Per una visita privata normalmente non è richiesta. Verifica i requisiti specifici delle altre strutture in fase di prenotazione.'],
      ],
    },
    contact: {
      eyebrow: 'Contatti', title: 'Siamo a disposizione per informazioni',
      intro: 'Per prenotare una visita o chiedere informazioni sulle sedi, contatta lo studio telefonicamente o via email.',
      name: 'Nome e cognome', emailLabel: 'Email', subject: 'Oggetto', message: 'Messaggio',
      send: 'Prepara l’email', formNote: 'Il modulo apre la tua applicazione email: i dati non vengono inviati a un server del sito.',
      studio: 'Studio privato', maps: 'Visualizza su Google Maps',
      requestTitle: 'Scrivi allo studio', requestText: 'Non inserire nel messaggio dati sanitari sensibili o documentazione clinica.',
    },
  },
  en: {
    nav: { home: 'Home', profile: 'The doctor', services: 'Services', facilities: 'Locations', faq: 'FAQ', contact: 'Contact', book: 'Book an appointment' },
    common: {
      specialist: 'Medical doctor · Ophthalmology specialist', eyebrow: 'Fallah Eyecare',
      readMore: 'Meet the doctor', discover: 'Explore service', backToServices: 'All services',
      contactStudio: 'Contact the practice', bookVisit: 'Request an appointment', call: 'Call', email: 'Send an email',
      directions: 'Directions', openMaps: 'Open in Google Maps', explore: 'Explore', contacts: 'Contacts',
      privacy: 'Privacy', rights: 'Fallah Eyecare · Dr Hala Fallah',
      disclaimer: 'Website information is for general purposes and does not replace medical consultation or examination.',
      medicalOrder: 'Varese Medical Association', allServices: 'View all services',
      language: 'Website language', bookNote: 'By appointment only', location: 'Varese, Italy',
      visitInfo: 'The assessment and any further investigations are tailored to individual clinical needs.',
    },
    home: {
      title: 'Thoughtful vision care, tailored to you.',
      lead: 'Dr Hala Fallah cares for the eye health of adults and children through specialist knowledge, attentive listening and a personal approach.',
      ctaServices: 'Explore our services', chips: ['Ophthalmology', 'Eye diagnostics', 'Adults & children'],
      servicesEyebrow: 'Our expertise', servicesTitle: 'Eye health at every stage of life',
      servicesText: 'Six featured pathways. Select a service to learn more about examinations, diagnostics and the areas assessed.',
      profileEyebrow: 'The specialist', profileTitle: 'Experience, education and attention to each person.',
      profileText: 'A medical doctor specialised in Ophthalmology, with education in Italy and abroad and experience in public and private clinical settings.',
      facilitiesEyebrow: 'Our locations', facilitiesTitle: 'Two care locations in Varese',
      facilitiesText: 'Private practice and Centro Polispecialistico Beccaria: the appointment location is confirmed when booking.',
      ctaTitle: 'It starts with a conversation.', ctaText: 'For appointments, service information and location details, contact the practice.',
      educationHighlight: 'Ophthalmology specialist since 1999',
      trustTitle: 'Good care starts by listening.', trustText: 'Individualised assessments, clear guidance and consideration for each patient’s needs.',
    },
    profile: {
      eyebrow: 'The doctor', title: 'Dr Hala Fallah', subtitle: 'Medical doctor · Ophthalmology specialist',
      intro: 'A professional journey devoted to prevention, diagnosis and treatment of eye conditions, with attention to the doctor–patient relationship.',
      educationTitle: 'Education through the years',
      educationIntro: 'Key milestones in academic education and specialist training. Where a date is unavailable, no year has been assumed.',
      undated: 'Date not specified',
      education: [
        { period: '1993', title: 'Medical degree and licence', institution: 'University of Milan', description: 'Degree in Medicine and Surgery and medical qualification.', dated: true },
        { period: '1999', title: 'Specialisation in Ophthalmology', institution: 'University of Milan', description: 'Completion of postgraduate training in Ophthalmology.', dated: true },
        { period: '2014', title: 'Master’s in Rhino-Allergology', institution: 'Sapienza University of Rome', description: 'Advanced interdisciplinary training in allergology.', dated: true },
        { period: '—', title: 'University studies in Medicine', institution: 'University of Damascus', description: 'Medical degree; date not provided in the available information.', dated: false },
        { period: '—', title: 'Master’s in Ocular Oncology', institution: 'Catholic University of Rome', description: 'Specialist education in ocular oncology.', dated: false },
        { period: '—', title: 'International specialist education', institution: 'Clinical training in Italy and abroad', description: 'Ophthalmoplasty, orbital conditions and lacrimal pathways.', dated: false },
      ],
      expertiseTitle: 'Areas of experience',
      expertise: ['General and pediatric ophthalmology', 'Medical retina', 'Glaucoma and corneal diseases', 'Refractive surgery', 'Ophthalmoplasty', 'Ocular oncology', 'Ocular allergy', 'Nutrition and prevention'],
    },
    services: {
      eyebrow: 'Specialist care', title: 'Our ophthalmology services',
      intro: 'Eye examinations, diagnostic testing and specialist assessments: explore the available services.',
      areas: 'Areas of assessment', detailEyebrow: 'Specialist service',
      assessmentNote: 'Further investigations depend on clinical evaluation and may vary by individual patient and location.',
      helpTitle: 'Not sure which appointment to request?', helpText: 'Contact the practice for information about services and location arrangements.',
      processTitle: 'Care centred on each person', processText: 'Assessment starts by listening to your concerns, followed by appropriate tests when clinically indicated.',
      cards: [
        { slug: 'visita-oculistica', title: 'Comprehensive eye examination', text: 'Assessment of visual function and eye health at every age.', detail: 'An examination helps assess symptoms, visual acuity and ocular health. Any further diagnostic tests are selected based on the clinical picture.', bullets: ['Visual acuity assessment', 'Fundus examination when indicated', 'Corrective lens assessment'] },
        { slug: 'esami-strumentali', title: 'Diagnostic eye testing', text: 'Targeted investigations to assess the eye and its structures.', detail: 'Diagnostic testing supports the clinical examination where needed. The choice of test depends on the suspected condition and the individual’s needs.', bullets: ['Optical coherence tomography (OCT)', 'Corneal topography and pachymetry', 'Tonometry and gonioscopy'] },
        { slug: 'cornea-refrattiva', title: 'Cornea & refractive conditions', text: 'Assessment of the cornea, keratoconus and refractive errors.', detail: 'Care focused on corneal changes and visual conditions such as myopia, hyperopia, astigmatism and presbyopia, including assessment of correction options.', bullets: ['Keratoconus and corneal dystrophies', 'Myopia, astigmatism and hyperopia', 'Pre-refractive treatment evaluation'] },
        { slug: 'glaucoma', title: 'Glaucoma & eye pressure', text: 'Specialist monitoring of intraocular pressure and the optic nerve.', detail: 'Glaucoma risk assessment considers a range of clinical factors. Monitoring may include eye pressure and optic nerve tests when indicated.', bullets: ['Intraocular pressure measurement', 'Optic nerve assessment', 'OCT and gonioscopy when indicated'] },
        { slug: 'retina', title: 'Retina & macula', text: 'Assessment focused on the retina and central vision.', detail: 'Clinical examination and supporting diagnostics help evaluate retinal and macular health. Further tests are selected according to symptoms and risk factors.', bullets: ['Diabetic retinopathy', 'Macular conditions', 'Retinal vascular disorders'] },
        { slug: 'pediatrica', title: 'Pediatric ophthalmology', text: 'Eye assessments for children and infants, adapted to their age.', detail: 'Pediatric assessments take account of visual development and the child’s level of cooperation, helping identify vision concerns early.', bullets: ['Childhood visual errors', 'Eye alignment and motility', 'Cycloplegic examination when indicated'] },
        { slug: 'oftalmoplastica', title: 'Ophthalmoplasty & eyelids', text: 'Assessment of conditions affecting the eyelids and surrounding area.', detail: 'Visits focus on understanding eyelid and periocular conditions and identifying appropriate next steps or further evaluation.', bullets: ['Chalazion and cysts', 'Eyelid lesions', 'Periocular conditions'] },
        { slug: 'nutrizione', title: 'Nutrition & eye health', text: 'Prevention and lifestyle support for visual wellbeing.', detail: 'Eating habits and lifestyle may support general prevention. Any nutritional advice should be considered in the context of the individual’s overall health.', bullets: ['Prevention and lifestyle', 'Macular wellbeing', 'Individual guidance'] },
      ],
    },
    consultation: {
      eyebrow: 'Important information', title: 'Telephone medical consultations are charged',
      text: 'Medical advice provided by telephone is a paid professional service, separate from calls about appointments or administrative questions.',
      badge: 'Paid consultation', tariff: 'Fees and arrangements are communicated before confirmation.',
      cta: 'Ask for information', note: 'For medical emergencies, contact emergency healthcare services. Practice telephone contact is not an emergency service.',
    },
    facilities: {
      eyebrow: 'Locations', title: 'Our Varese locations',
      intro: 'Two complementary locations. Please confirm the correct facility when making an appointment.',
      studioTitle: 'Private practice', studioLabel: 'Private clinic', studioText: 'Private ophthalmology examinations and diagnostic testing by appointment.',
      beccariaTitle: 'Centro Polispecialistico Beccaria', beccariaLabel: 'Specialist centre',
      beccariaText: 'Adult and pediatric appointments, retinal testing and minor eyelid procedures subject to the centre’s arrangements.',
      bookingNote: 'Appointments at Centro Beccaria are arranged through the centre’s official channels.',
      beccariaWebsite: 'Centro Beccaria website',
    },
    faq: {
      eyebrow: 'Frequently asked questions', title: 'Helpful information', intro: 'Answers to common questions before your appointment.',
      items: [
        ['How can I book an examination?', 'Contact the private practice using the phone number or email provided. Centro Beccaria services are booked through the centre.'],
        ['Are telephone consultations charged?', 'Yes. Medical telephone consultations are charged, and the fee is communicated before confirmation. Calls for bookings or practical information are separate.'],
        ['Does the doctor see children?', 'Yes. Pediatric and infant eye assessments are available.'],
        ['Where is the private practice?', 'Via Montello 2, Varese. Visit the Locations page for directions and a map.'],
        ['Which diagnostic tests may be used?', 'Examples include OCT, topography and pachymetry, tonometry and gonioscopy. The choice depends on clinical indications.'],
        ['Do I need a medical referral?', 'A referral is generally not required for private examinations. Check specific requirements with other facilities when booking.'],
      ],
    },
    contact: {
      eyebrow: 'Contact', title: 'We are here to help with practical information',
      intro: 'For appointments or information on our locations, contact the practice by phone or email.',
      name: 'Full name', emailLabel: 'Email', subject: 'Subject', message: 'Message', send: 'Prepare email',
      formNote: 'The form opens your email app; no information is submitted to a website server.',
      studio: 'Private practice', maps: 'View on Google Maps',
      requestTitle: 'Write to the practice', requestText: 'Please do not include sensitive medical information or clinical records in your message.',
    },
  },
  fr: {
    nav: { home: 'Accueil', profile: 'La docteure', services: 'Prestations', facilities: 'Cabinets', faq: 'FAQ', contact: 'Contact', book: 'Prendre rendez-vous' },
    common: {
      specialist: 'Médecin · Spécialiste en ophtalmologie', eyebrow: 'Fallah Eyecare',
      readMore: 'Découvrir la docteure', discover: 'Découvrir la prestation', backToServices: 'Toutes les prestations',
      contactStudio: 'Contacter le cabinet', bookVisit: 'Demander un rendez-vous', call: 'Appeler', email: 'Envoyer un e-mail',
      directions: 'Itinéraire', openMaps: 'Ouvrir dans Google Maps', explore: 'Explorer', contacts: 'Coordonnées',
      privacy: 'Confidentialité', rights: 'Fallah Eyecare · Dre Hala Fallah',
      disclaimer: 'Ce site est informatif et ne remplace pas une consultation ou une évaluation médicale.',
      medicalOrder: 'Ordre des médecins de Varèse', allServices: 'Voir toutes les prestations',
      language: 'Langue du site', bookNote: 'Sur rendez-vous uniquement', location: 'Varèse, Italie',
      visitInfo: 'L’évaluation et les examens complémentaires sont adaptés aux besoins cliniques de chaque personne.',
    },
    home: {
      title: 'Un regard attentif, des soins sur mesure.',
      lead: 'La Dre Hala Fallah accompagne la santé oculaire des adultes et des enfants avec expertise, écoute et une approche personnalisée.',
      ctaServices: 'Explorer les prestations', chips: ['Ophtalmologie', 'Examens oculaires', 'Adultes et enfants'],
      servicesEyebrow: 'Nos compétences', servicesTitle: 'Votre santé visuelle, à chaque âge',
      servicesText: 'Six parcours à découvrir. Choisissez une prestation pour en savoir plus sur les consultations et les examens proposés.',
      profileEyebrow: 'La spécialiste', profileTitle: 'Expérience, formation et attention à chacun.',
      profileText: 'Médecin spécialisée en ophtalmologie, formée en Italie et à l’étranger, avec une expérience dans des structures publiques et privées.',
      facilitiesEyebrow: 'Nos cabinets', facilitiesTitle: 'Deux lieux de consultation à Varèse',
      facilitiesText: 'Cabinet privé et Centro Polispecialistico Beccaria : le lieu est confirmé lors de la prise de rendez-vous.',
      ctaTitle: 'Tout commence par un échange.', ctaText: 'Pour les rendez-vous, les prestations et les adresses, contactez le cabinet.',
      educationHighlight: 'Spécialiste en ophtalmologie depuis 1999',
      trustTitle: 'La qualité des soins commence par l’écoute.', trustText: 'Une approche individuelle, des explications claires et une attention portée aux besoins de chaque patient.',
    },
    profile: {
      eyebrow: 'La docteure', title: 'Dre Hala Fallah', subtitle: 'Médecin · Spécialiste en ophtalmologie',
      intro: 'Un parcours dédié à la prévention, au diagnostic et à la prise en charge des maladies oculaires, dans une relation de confiance avec les patients.',
      educationTitle: 'Un parcours de formation dans le temps',
      educationIntro: 'Les principales étapes universitaires et spécialisées. Aucune année n’est attribuée lorsqu’elle n’est pas renseignée.',
      undated: 'Date non précisée',
      education: [
        { period: '1993', title: 'Diplôme de médecine et habilitation', institution: 'Université de Milan', description: 'Diplôme en médecine et chirurgie et autorisation d’exercer.', dated: true },
        { period: '1999', title: 'Spécialisation en ophtalmologie', institution: 'Université de Milan', description: 'Achèvement de la spécialisation médicale en ophtalmologie.', dated: true },
        { period: '2014', title: 'Master en rhino-allergologie', institution: 'Université La Sapienza de Rome', description: 'Formation approfondie en allergologie.', dated: true },
        { period: '—', title: 'Études universitaires de médecine', institution: 'Université de Damas', description: 'Diplôme de médecine ; date non précisée.', dated: false },
        { period: '—', title: 'Master en oncologie oculaire', institution: 'Université catholique de Rome', description: 'Formation spécialisée en oncologie oculaire.', dated: false },
        { period: '—', title: 'Perfectionnement international', institution: 'Formation clinique en Italie et à l’étranger', description: 'Oculoplastie, pathologies orbitaires et voies lacrymales.', dated: false },
      ],
      expertiseTitle: 'Domaines d’expérience',
      expertise: ['Ophtalmologie générale et pédiatrique', 'Rétine médicale', 'Glaucome et maladies cornéennes', 'Chirurgie réfractive', 'Oculoplastie', 'Oncologie oculaire', 'Allergologie oculaire', 'Nutrition et prévention'],
    },
    services: {
      eyebrow: 'Soins spécialisés', title: 'Nos prestations ophtalmologiques',
      intro: 'Consultations, examens et évaluations spécialisées pour la santé de vos yeux.',
      areas: 'Domaines d’évaluation', detailEyebrow: 'Prestation spécialisée',
      assessmentNote: 'Les examens complémentaires dépendent de l’évaluation clinique et peuvent varier selon la personne et le lieu.',
      helpTitle: 'Vous ne savez pas quelle consultation choisir ?', helpText: 'Contactez le cabinet pour les informations pratiques concernant les prestations et les lieux.',
      processTitle: 'Une attention centrée sur la personne', processText: 'La consultation commence par l’écoute de vos besoins ; des examens adaptés peuvent ensuite être proposés.',
      cards: [
        { slug: 'visita-oculistica', title: 'Examen ophtalmologique complet', text: 'Évaluation de la vision et de la santé oculaire à tout âge.', detail: 'La consultation permet d’évaluer les symptômes, l’acuité visuelle et la santé des yeux. Les examens complémentaires dépendent de la situation clinique.', bullets: ['Mesure de l’acuité visuelle', 'Fond d’œil si indiqué', 'Évaluation de la correction optique'] },
        { slug: 'esami-strumentali', title: 'Examens diagnostiques oculaires', text: 'Explorations ciblées des différentes structures de l’œil.', detail: 'Les examens instrumentaux complètent la consultation lorsqu’ils sont nécessaires. Leur choix dépend du diagnostic envisagé et de la situation individuelle.', bullets: ['Tomographie en cohérence optique (OCT)', 'Topographie et pachymétrie cornéennes', 'Tonométrie et gonioscopie'] },
        { slug: 'cornea-refrattiva', title: 'Cornée et troubles réfractifs', text: 'Évaluation de la cornée, du kératocône et des défauts visuels.', detail: 'Évaluation des anomalies cornéennes et des troubles visuels, notamment myopie, hypermétropie, astigmatisme et presbytie, ainsi que des options de correction.', bullets: ['Kératocône et dystrophies cornéennes', 'Myopie, astigmatisme et hypermétropie', 'Bilan préalable à un traitement réfractif'] },
        { slug: 'glaucoma', title: 'Glaucome et pression oculaire', text: 'Surveillance de la pression intraoculaire et du nerf optique.', detail: 'Le risque de glaucome repose sur plusieurs facteurs cliniques. Le suivi peut inclure la pression oculaire et des examens du nerf optique.', bullets: ['Mesure de la pression intraoculaire', 'Évaluation du nerf optique', 'OCT et gonioscopie si indiquées'] },
        { slug: 'retina', title: 'Rétine et macula', text: 'Évaluations de la rétine et de la vision centrale.', detail: 'L’examen clinique et les examens complémentaires permettent d’évaluer la santé rétinienne et maculaire en fonction des symptômes et facteurs de risque.', bullets: ['Rétinopathie diabétique', 'Maladies maculaires', 'Troubles vasculaires rétiniens'] },
        { slug: 'pediatrica', title: 'Ophtalmologie pédiatrique', text: 'Examens des enfants et des nourrissons, adaptés à leur âge.', detail: 'Les consultations pédiatriques tiennent compte du développement visuel et de la coopération de l’enfant, afin d’identifier les difficultés de vision.', bullets: ['Troubles visuels de l’enfance', 'Alignement et motricité oculaires', 'Examen sous cycloplégie si indiqué'] },
        { slug: 'oftalmoplastica', title: 'Oculoplastie et paupières', text: 'Évaluation des troubles des paupières et de leur contour.', detail: 'La consultation vise à évaluer les problèmes palpébraux et périoculaires et à envisager les examens ou soins nécessaires.', bullets: ['Chalazions et kystes', 'Lésions des paupières', 'Troubles périoculaires'] },
        { slug: 'nutrizione', title: 'Nutrition et santé visuelle', text: 'Prévention et mode de vie au service de la santé oculaire.', detail: 'L’alimentation et le mode de vie peuvent soutenir la prévention générale. Tout conseil nutritionnel doit tenir compte de l’état de santé global.', bullets: ['Prévention et mode de vie', 'Santé maculaire', 'Conseils individualisés'] },
      ],
    },
    consultation: {
      eyebrow: 'Informations importantes', title: 'Les consultations médicales par téléphone sont payantes',
      text: 'Les conseils médicaux donnés par téléphone constituent une prestation professionnelle payante, distincte des appels pour les rendez-vous ou les renseignements pratiques.',
      badge: 'Prestation payante', tariff: 'Les tarifs et modalités sont communiqués avant confirmation.',
      cta: 'Demander des informations', note: 'En cas d’urgence médicale, contactez les services d’urgence. Le téléphone du cabinet n’est pas un service d’urgence.',
    },
    facilities: {
      eyebrow: 'Nos cabinets', title: 'Où nous consulter à Varèse',
      intro: 'Deux lieux complémentaires : vérifiez le lieu exact lors de la prise de rendez-vous.',
      studioTitle: 'Cabinet privé', studioLabel: 'Cabinet principal', studioText: 'Consultations privées et examens ophtalmologiques spécialisés sur rendez-vous.',
      beccariaTitle: 'Centro Polispecialistico Beccaria', beccariaLabel: 'Centre spécialisé',
      beccariaText: 'Consultations adultes et enfants, examens rétiniens et interventions mineures des paupières selon l’organisation du centre.',
      bookingNote: 'Les rendez-vous au Centro Beccaria se prennent par les canaux officiels du centre.',
      beccariaWebsite: 'Site du Centro Beccaria',
    },
    faq: {
      eyebrow: 'Questions fréquentes', title: 'Informations pratiques', intro: 'Quelques réponses avant votre consultation.',
      items: [
        ['Comment prendre rendez-vous ?', 'Contactez le cabinet privé par téléphone ou e-mail. Pour le Centro Beccaria, utilisez les canaux de réservation du centre.'],
        ['Les consultations téléphoniques sont-elles payantes ?', 'Oui. Une consultation médicale par téléphone est payante. Le tarif est communiqué avant confirmation. Les appels pour les rendez-vous ou informations pratiques sont distincts.'],
        ['La docteure reçoit-elle les enfants ?', 'Oui, des consultations pédiatriques et pour nourrissons sont proposées.'],
        ['Où se trouve le cabinet privé ?', 'Via Montello 2, Varèse. Consultez la page Cabinets pour l’itinéraire et la carte.'],
        ['Quels examens peuvent être réalisés ?', 'Selon les indications : OCT, topographie, pachymétrie, tonométrie, gonioscopie et autres examens adaptés.'],
        ['Faut-il une ordonnance ?', 'Pour une consultation privée, elle n’est généralement pas nécessaire. Renseignez-vous auprès des autres structures.'],
      ],
    },
    contact: {
      eyebrow: 'Contact', title: 'Nous répondons à vos questions pratiques',
      intro: 'Pour prendre rendez-vous ou connaître les lieux de consultation, contactez le cabinet par téléphone ou e-mail.',
      name: 'Nom et prénom', emailLabel: 'E-mail', subject: 'Objet', message: 'Message', send: 'Préparer l’e-mail',
      formNote: 'Ce formulaire ouvre votre messagerie : aucune donnée n’est envoyée au serveur du site.',
      studio: 'Cabinet privé', maps: 'Voir sur Google Maps',
      requestTitle: 'Écrire au cabinet', requestText: 'Merci de ne pas inclure de données médicales sensibles ou de dossiers médicaux.',
    },
  },
  es: {
    nav: { home: 'Inicio', profile: 'La doctora', services: 'Servicios', facilities: 'Consultorios', faq: 'Preguntas', contact: 'Contacto', book: 'Pedir cita' },
    common: {
      specialist: 'Médica · Especialista en Oftalmología', eyebrow: 'Fallah Eyecare',
      readMore: 'Conoce a la doctora', discover: 'Descubrir el servicio', backToServices: 'Todos los servicios',
      contactStudio: 'Contactar con la consulta', bookVisit: 'Solicitar una cita', call: 'Llamar', email: 'Enviar un correo',
      directions: 'Cómo llegar', openMaps: 'Abrir en Google Maps', explore: 'Explorar', contacts: 'Contacto',
      privacy: 'Privacidad', rights: 'Fallah Eyecare · Dra. Hala Fallah',
      disclaimer: 'Esta información es orientativa y no sustituye una consulta o evaluación médica.',
      medicalOrder: 'Colegio de Médicos de Varese', allServices: 'Ver todos los servicios',
      language: 'Idioma del sitio', bookNote: 'Atención con cita previa', location: 'Varese, Italia',
      visitInfo: 'La evaluación y las pruebas complementarias se adaptan a las necesidades clínicas individuales.',
    },
    home: {
      title: 'Una mirada atenta, un cuidado a tu medida.',
      lead: 'La Dra. Hala Fallah cuida la salud ocular de adultos y niños con conocimientos especializados, escucha y atención personalizada.',
      ctaServices: 'Explorar servicios', chips: ['Oftalmología', 'Diagnóstico ocular', 'Adultos y niños'],
      servicesEyebrow: 'Nuestra experiencia', servicesTitle: 'Salud visual en cada etapa de la vida',
      servicesText: 'Seis servicios destacados. Selecciona uno para conocer sus evaluaciones y pruebas diagnósticas.',
      profileEyebrow: 'La especialista', profileTitle: 'Experiencia, formación y atención a las personas.',
      profileText: 'Médica especialista en Oftalmología, formada en Italia y en el extranjero, con experiencia en centros clínicos públicos y privados.',
      facilitiesEyebrow: 'Dónde atendemos', facilitiesTitle: 'Dos centros de atención en Varese',
      facilitiesText: 'Consulta privada y Centro Polispecialistico Beccaria: confirmamos la sede al concertar la cita.',
      ctaTitle: 'Todo empieza hablando.', ctaText: 'Para citas, información sobre servicios y ubicaciones, ponte en contacto con la consulta.',
      educationHighlight: 'Especialista en Oftalmología desde 1999',
      trustTitle: 'La buena medicina comienza escuchando.', trustText: 'Evaluaciones personalizadas, explicaciones claras y atención a las necesidades de cada paciente.',
    },
    profile: {
      eyebrow: 'La doctora', title: 'Dra. Hala Fallah', subtitle: 'Médica · Especialista en Oftalmología',
      intro: 'Una trayectoria dedicada a prevenir, diagnosticar y tratar las enfermedades oculares, con especial atención a la relación con el paciente.',
      educationTitle: 'Un recorrido de formación a través del tiempo',
      educationIntro: 'Los principales hitos académicos y de especialización. No se asignan fechas cuando no están documentadas.',
      undated: 'Fecha no especificada',
      education: [
        { period: '1993', title: 'Licenciatura en Medicina y habilitación', institution: 'Universidad de Milán', description: 'Título en Medicina y Cirugía y habilitación profesional.', dated: true },
        { period: '1999', title: 'Especialización en Oftalmología', institution: 'Universidad de Milán', description: 'Finalización de la especialización médica en Oftalmología.', dated: true },
        { period: '2014', title: 'Máster en Rinoalergología', institution: 'Universidad La Sapienza de Roma', description: 'Formación avanzada en alergología.', dated: true },
        { period: '—', title: 'Formación universitaria en Medicina', institution: 'Universidad de Damasco', description: 'Título de Medicina; fecha no especificada.', dated: false },
        { period: '—', title: 'Máster en Oncología Ocular', institution: 'Universidad Católica de Roma', description: 'Formación especializada en oncología ocular.', dated: false },
        { period: '—', title: 'Formación internacional especializada', institution: 'Formación clínica en Italia y el extranjero', description: 'Oculoplastia, enfermedades orbitarias y vías lagrimales.', dated: false },
      ],
      expertiseTitle: 'Áreas de experiencia',
      expertise: ['Oftalmología general y pediátrica', 'Retina médica', 'Glaucoma y enfermedades corneales', 'Cirugía refractiva', 'Oculoplastia', 'Oncología ocular', 'Alergología ocular', 'Nutrición y prevención'],
    },
    services: {
      eyebrow: 'Atención especializada', title: 'Nuestros servicios oftalmológicos',
      intro: 'Consultas, pruebas diagnósticas y evaluaciones especializadas para el cuidado de tus ojos.',
      areas: 'Áreas de evaluación', detailEyebrow: 'Servicio especializado',
      assessmentNote: 'Las pruebas complementarias dependen de la evaluación clínica y pueden variar según el paciente y la sede.',
      helpTitle: '¿No sabes qué consulta solicitar?', helpText: 'Contacta con la consulta para obtener información práctica sobre servicios y sedes.',
      processTitle: 'Atención centrada en cada persona', processText: 'La consulta comienza escuchando tus necesidades y continúa con las pruebas adecuadas cuando se indiquen.',
      cards: [
        { slug: 'visita-oculistica', title: 'Examen oftalmológico completo', text: 'Evaluación de la visión y la salud ocular para todas las edades.', detail: 'El examen permite valorar los síntomas, la agudeza visual y la salud de los ojos. Las pruebas adicionales se indican según la situación clínica.', bullets: ['Evaluación de la agudeza visual', 'Examen del fondo de ojo cuando corresponda', 'Valoración de la corrección óptica'] },
        { slug: 'esami-strumentali', title: 'Pruebas diagnósticas oculares', text: 'Estudios específicos de las estructuras del ojo.', detail: 'Las pruebas instrumentales complementan la exploración cuando son necesarias. Su selección depende del diagnóstico previsto y de cada persona.', bullets: ['Tomografía de coherencia óptica (OCT)', 'Topografía y paquimetría corneal', 'Tonometría y gonioscopia'] },
        { slug: 'cornea-refrattiva', title: 'Córnea y defectos refractivos', text: 'Evaluación de la córnea, el queratocono y los errores refractivos.', detail: 'Evaluación de las alteraciones corneales y de la miopía, hipermetropía, astigmatismo o presbicia, así como de posibles opciones de corrección.', bullets: ['Queratocono y distrofias corneales', 'Miopía, astigmatismo e hipermetropía', 'Evaluación previa al tratamiento refractivo'] },
        { slug: 'glaucoma', title: 'Glaucoma y presión ocular', text: 'Seguimiento de la presión intraocular y del nervio óptico.', detail: 'El riesgo de glaucoma se valora con diversos factores clínicos. El seguimiento puede incluir presión ocular y pruebas del nervio óptico.', bullets: ['Medición de la presión intraocular', 'Evaluación del nervio óptico', 'OCT y gonioscopia cuando corresponda'] },
        { slug: 'retina', title: 'Retina y mácula', text: 'Evaluaciones de la retina y la visión central.', detail: 'La exploración clínica y las pruebas de apoyo ayudan a valorar la retina y la mácula según los síntomas y factores de riesgo.', bullets: ['Retinopatía diabética', 'Enfermedades maculares', 'Trastornos vasculares retinianos'] },
        { slug: 'pediatrica', title: 'Oftalmología pediátrica', text: 'Revisiones para niños y bebés adaptadas a cada edad.', detail: 'La atención pediátrica tiene en cuenta el desarrollo visual y la colaboración del niño, y permite detectar posibles dificultades visuales.', bullets: ['Problemas visuales infantiles', 'Alineación y movilidad ocular', 'Exploración con cicloplejia si procede'] },
        { slug: 'oftalmoplastica', title: 'Oculoplastia y párpados', text: 'Evaluación de afecciones de los párpados y zonas cercanas.', detail: 'La consulta estudia las alteraciones palpebrales y perioculares para determinar si son necesarios otros exámenes o tratamientos.', bullets: ['Chalazión y quistes', 'Lesiones palpebrales', 'Afecciones perioculares'] },
        { slug: 'nutrizione', title: 'Nutrición y salud visual', text: 'Prevención y hábitos de vida para favorecer la salud ocular.', detail: 'La alimentación y el estilo de vida pueden contribuir a la prevención general. Las recomendaciones deben adaptarse al estado de salud global.', bullets: ['Prevención y estilo de vida', 'Salud macular', 'Orientación individualizada'] },
      ],
    },
    consultation: {
      eyebrow: 'Información importante', title: 'Las consultas médicas telefónicas son de pago',
      text: 'El asesoramiento médico por teléfono es un servicio profesional de pago, distinto de las llamadas para citas o información administrativa.',
      badge: 'Servicio de pago', tariff: 'La tarifa y las condiciones se comunican antes de confirmar.',
      cta: 'Solicitar información', note: 'En caso de urgencia médica, contacta con los servicios de emergencias. El teléfono de la consulta no es un servicio de urgencias.',
    },
    facilities: {
      eyebrow: 'Dónde atendemos', title: 'Centros de atención en Varese',
      intro: 'Dos sedes complementarias. Confirma el lugar correspondiente al reservar.',
      studioTitle: 'Consulta privada', studioLabel: 'Centro privado', studioText: 'Consultas oftalmológicas privadas y pruebas diagnósticas con cita previa.',
      beccariaTitle: 'Centro Polispecialistico Beccaria', beccariaLabel: 'Centro especializado',
      beccariaText: 'Atención a adultos y niños, pruebas retinianas e intervenciones menores de párpados, según la organización del centro.',
      bookingNote: 'Las citas del Centro Beccaria se gestionan a través de sus canales oficiales.',
      beccariaWebsite: 'Web del Centro Beccaria',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes', title: 'Información útil', intro: 'Respuestas a las preguntas habituales antes de tu visita.',
      items: [
        ['¿Cómo puedo pedir una cita?', 'Contacta con la consulta privada por teléfono o correo. Para servicios del Centro Beccaria, utiliza sus canales oficiales.'],
        ['¿Las consultas telefónicas tienen coste?', 'Sí. Las consultas médicas telefónicas son de pago y la tarifa se comunica antes de confirmar. Las llamadas para citas e información administrativa son diferentes.'],
        ['¿La doctora atiende a niños?', 'Sí, se realizan evaluaciones oftalmológicas pediátricas y de bebés.'],
        ['¿Dónde está la consulta privada?', 'En Via Montello 2, Varese. Consulta la página de Consultorios para ver el mapa.'],
        ['¿Qué pruebas diagnósticas se utilizan?', 'Entre otras, OCT, topografía, paquimetría, tonometría y gonioscopia, según el caso.'],
        ['¿Necesito una derivación médica?', 'Por lo general, no para la consulta privada. Comprueba los requisitos de otros centros antes de reservar.'],
      ],
    },
    contact: {
      eyebrow: 'Contacto', title: 'Estamos disponibles para información práctica',
      intro: 'Para citas o información sobre las sedes, contacta con la consulta por teléfono o correo electrónico.',
      name: 'Nombre y apellidos', emailLabel: 'Correo electrónico', subject: 'Asunto', message: 'Mensaje', send: 'Preparar correo',
      formNote: 'El formulario abre tu aplicación de correo; no envía datos al servidor del sitio web.',
      studio: 'Consulta privada', maps: 'Ver en Google Maps',
      requestTitle: 'Escribe a la consulta', requestText: 'No incluyas datos médicos sensibles ni documentos clínicos en tu mensaje.',
    },
  },
};

export function getCopy(locale: Locale): Translation {
  return copy[locale];
}
