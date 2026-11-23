# Fallah Eyecare — sito Next.js multilingue

Sito professionale della Dott.ssa Hala Fallah (oculista) in Next.js + React con App Router e contenuti in italiano, inglese, francese e spagnolo.

## Stack

- Next.js 16.3.6
- React / React DOM 19.3.0
- TypeScript
- CSS responsive senza framework esterni
- App Router con rotte `/it`, `/en`, `/fr`, `/es`

## Struttura dei contenuti

- `src/lib/i18n.ts` — dati non tradotti (strutture, indirizzi, telefoni, catalogo prestazioni) e tipi delle traduzioni
- `src/lib/copy/it.ts`, `en.ts`, `fr.ts`, `es.ts` — tutti i testi pubblici, una lingua per file (TypeScript segnala se manca un testo in una lingua)
- `src/lib/seo.ts` — metadati, hreflang e dati strutturati schema.org

## Pagine

- **Home** — presentazione, 4 aree di prestazione con link diretti a ogni servizio, profilo, 5 strutture, CTA
- **La dottoressa** — profilo professionale, formazione con Master di II livello e certificazioni in evidenza, esperienza professionale, ambiti di competenza
- **Prestazioni** — pagina unica con tutte le prestazioni (17) in 4 aree: visite e consulenze, diagnostica strumentale e laser, palpebre/annessi/oncologia oculare, chirurgia oculare. Ogni prestazione ha un'ancora (`/it/servizi#cataratta`) e l'elenco completo di esami e patologie, utile anche per l'indicizzazione su Google
- **Dove riceve** — tabella "cosa si può fare in ogni struttura" e scheda di ogni sede con indirizzo, telefono e mappa (Google Maps solo dopo consenso):
  - Studio privato — Via Montello 2, Varese
  - Medicina e Sport Beccaria — Via Calogero Marrone 2, Varese
  - Clinica La Quiete — Via Dante Alighieri 20, Varese
  - Clinica San Luigi — Via Piave 2, Borgomanero (NO)
  - Vista Vision Milano — Via Luigi Rizzo 8, Milano
- **FAQ**, **Contatti** (con i numeri delle altre strutture), **Privacy**, **Cookie**

Le vecchie pagine `/servizi/<slug>` (con immagini generate) sono state rimosse: un redirect permanente in `next.config.ts` le porta alla pagina Prestazioni.

## Avvio

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000` (redirect automatico a `/it`).

Build produzione:

```bash
npm run build
npm start
```

## SEO

- Titoli e descrizioni dedicati per pagina e lingua, canonical e hreflang (`lib/seo.ts`)
- `sitemap.xml` e `robots.txt` generati automaticamente (`app/sitemap.ts`, `app/robots.ts`)
- Dati strutturati schema.org: `Physician` con le 5 sedi, affiliazione ospedaliera e l'elenco delle prestazioni; `FAQPage`
- L'URL pubblico è `https://fallaheyecare.com` per default: impostare `NEXT_PUBLIC_SITE_URL` se il dominio è diverso

## Google Maps

Le mappe usano l'embed pubblico basato su nome e indirizzo e non richiedono una API key; vengono caricate solo dopo il consenso dell'utente (cookie banner).

## Nota sui contenuti

Verificare contenuti, recapiti, titoli e privacy prima della messa online definitiva. In particolare il numero di Vista Vision Milano (02 38005605) proviene da un elenco pubblico e va confermato.
