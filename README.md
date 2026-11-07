# Fallah Eyecare — Next.js bilingual website

Redesign in Next.js + React con App Router e contenuti in italiano e inglese.

## Stack

- Next.js 16.3.6
- React / React DOM 19.3.0
- TypeScript
- CSS responsive senza framework esterni
- App Router con rotte `/it` e `/en`

## Funzioni incluse

- Home moderna e responsive
- Profilo professionale
- 8 servizi con illustrazioni SVG originali dedicate
- Pagina strutture con Google Maps embed per:
  - Studio privato — Via Montello 2, Varese
  - Centro Polispecialistico Beccaria — Via Calogero Marrone 2, Varese
- FAQ
- Contatti con form che prepara una email via `mailto:` (nessun backend richiesto)
- Pagina Privacy placeholder da completare prima della pubblicazione
- Footer con Ordine dei Medici di Varese, LinkedIn e Wikipedia
- Selettore IT / EN che mantiene la pagina corrente

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

## Design e UX

- Palette derivata dal logo ufficiale (blu notte + azzurro) e marchio vettoriale in `components/Brand.tsx`
- Font Newsreader (titoli) e Manrope (testi) via `next/font`: scaricati in build e serviti dal sito, nessuna richiesta a Google dal browser
- Immagini servite con `next/image` (WebP/AVIF ridimensionate: es. la foto della home passa da 3,2 MB a ~50 KB)
- Icone SVG coerenti in `components/Icon.tsx`
- Home con statistiche, percorso in 3 passi, sezione sedi e CTA con contatti diretti
- Menu mobile a schermo intero, barra fissa mobile con chiamata + prenotazione
- Breadcrumb, prestazioni correlate nelle pagine servizio, FAQ con riquadro contatti
- Animazioni d'ingresso discrete (disattivate con "riduci movimento")

## SEO

- Titoli, descrizioni, canonical e hreflang per ogni pagina e lingua (`lib/seo.ts`)
- Dati strutturati schema.org: `Physician` con le due sedi, `BreadcrumbList`, `FAQPage`
- L'URL pubblico è `https://fallaheyecare.com` per default: impostare `NEXT_PUBLIC_SITE_URL` se il dominio è diverso

## LinkedIn

Non essendo stato identificato con certezza un URL pubblico univoco del profilo personale della Dott.ssa Fallah, in `lib/i18n.ts` la costante `linkedinUrl` punta a una ricerca LinkedIn per “Hala Fallah Varese”. Sostituirla con l'URL diretto del profilo quando disponibile.

## Google Maps

Le mappe usano l'embed pubblico basato sull'indirizzo e non richiedono una API key. Prima della pubblicazione verificare privacy/cookie policy in relazione agli iframe di terze parti.

## Nota sui contenuti

I testi sono una riscrittura informativa basata sulle informazioni pubbliche del sito professionale consultato. Verificare contenuti, orari, recapiti, titoli e privacy prima della messa online definitiva.
