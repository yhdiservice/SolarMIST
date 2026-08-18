# SolarMist

Website voor SolarMist — thuisbatterijen, laadpalen, airco en warmtepompen.
Gebouwd met Next.js (App Router) en Tailwind CSS, gehost op Vercel.

## Ontwikkelen

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Offerteformulier (e-mail via Resend)

Kopieer `.env.example` naar `.env.local` en vul in:

- `RESEND_API_KEY` — API key van [resend.com](https://resend.com)
- `OFFERTE_TO_EMAIL` — e-mailadres dat offerte-aanvragen ontvangt
- `OFFERTE_FROM_EMAIL` — afzender (pas aan zodra het domein bij Resend geverifieerd is)

Zonder deze variabelen accepteert de site geen offerte-aanvragen.

## Structuur

- `/` — homepage
- `/[thuisbatterijen|laadpalen|airco|warmtepomp]` — categoriepagina ("Algemeen")
- `/[categorie]/installatie` — installatiepagina per categorie
- `/subsidie` — subsidie & financiering
- `/offerte` — offerteformulier
