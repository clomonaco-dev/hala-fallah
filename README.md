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

## LinkedIn

Non essendo stato identificato con certezza un URL pubblico univoco del profilo personale della Dott.ssa Fallah, in `lib/i18n.ts` la costante `linkedinUrl` punta a una ricerca LinkedIn per “Hala Fallah Varese”. Sostituirla con l'URL diretto del profilo quando disponibile.

## Google Maps

Le mappe usano l'embed pubblico basato sull'indirizzo e non richiedono una API key. Prima della pubblicazione verificare privacy/cookie policy in relazione agli iframe di terze parti.

## Nota sui contenuti

I testi sono una riscrittura informativa basata sulle informazioni pubbliche del sito professionale consultato. Verificare contenuti, orari, recapiti, titoli e privacy prima della messa online definitiva.
