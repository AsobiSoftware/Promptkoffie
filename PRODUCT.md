# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Nederlandse AI-gebruikers in brede zin (niet beperkt tot studenten) die gratis tiers van ChatGPT, Claude, Gemini of Perplexity gebruiken en wachten op een antwoord. Dat wachtmoment (3-8 seconden) is de context waarin het product actief wordt.

## Product Purpose
Promptkoffie is een Chrome/Edge-browserextensie die een korte, niet-opdringerige advertentie toont tijdens het wachten op een AI-antwoord en een deel van de advertentie-inkomsten uitkeert aan de gebruiker (maandelijks op de bankrekening). Doel van de oprichter: eigen studieschuld deels aflossen — geen schaalbaar bedrijf. Verwachte levensduur van het product: 1-2 jaar.

## Positioning
Verzilvert een wachtmoment dat vergelijkbare cashback/reward-extensies niet aanraken: een niet-opdringerige micro-advertentie precies tijdens de 3-8 seconden dat een AI-antwoord nog gegenereerd wordt, gecombineerd met een expliciete privacybelofte (leest nooit prompts of antwoorden, "100% Zero-Read") en geen verplichte klik om beloond te worden. **Kernbelofte/USP: een 50/50-split** — de helft van de advertentie-opbrengst gaat naar de gebruiker, bevestigd door de oprichter (niet langer een aan te nemen cijfer) en moet zichtbaar en herhaald op de site terugkomen als hét onderscheidende element.

## Operating Context
Werkt naast ChatGPT, Gemini, Claude en Perplexity (gratis tiers) in Chrome en Edge. De huidige codebase is de marketing/signup-landingspagina (React + Vite + Tailwind) die wachtlijst-inschrijvingen verzamelt vóór de extensie zelf live gaat; backend is Cloudflare Pages Functions (bewuste latere overstap naar Vercel), data in Google Sheets, e-mail via Resend.

## Capabilities and Constraints
- **Bevestigd feit (niet aannemen, niet als ongefundeerd cijfer wegstrepen)**: de revenue-split met gebruikers is 50/50.
- Geen nep-statistieken: alleen echte tellingen uit Google Sheets, geen kunstmatige baseline-getallen.
- Geen verplichte klik vereist voor gebruikersbeloning.
- Side-project schaal: verwachte levensduur 1-2 jaar, geen groeiambitie of VC-achtige schaalpretenties in toon of positionering.
- Vaste endpoint-namen: `/api/signup/user` en `/api/signup/business`, niet omdopen.
- De extensie zelf (browserplugin die daadwerkelijk advertenties toont tijdens AI-wachttijd) is nog niet gebouwd; huidige surface is uitsluitend de wachtlijst-landingspagina.

## Brand Commitments
Naam "Promptkoffie" (koffiethema, Nederlandstalig verplicht voor alle site-copy inclusief foutmeldingen). Tijdelijk logo: een koffiekopje-icoon (lucide "Coffee") in een amber-gradient badge (#B45309 → #78350F) — nog geen definitief logo-asset. Kleurpalet: warm amber/koffie (#B45309, #78350F) op crème achtergrond (#FAF8F5). Fonts: Instrument Serif (koppen) + Plus Jakarta Sans (body).

## Evidence on Hand
Geen echte gebruikersaantallen, testimonials of case studies beschikbaar — de site toont uitsluitend live opgehaalde tellingen (kunnen 0 zijn). Toekomstig werk mag deze niet verzinnen.

## Product Principles
1. Eerlijkheid boven groei-theater: toon alleen wat waar is (geen nep-cijfers, geen overdreven claims), passend bij de side-project-schaal.
2. Privacy is een harde belofte, geen marketingtrucje: het product leest nooit prompts/antwoorden, en dat moet in elke visuele/tekstuele beslissing voelbaar blijven.
3. Frictieloos verdienen: geen verplichte acties (klikken) om de gebruiker te belonen — het gemak is het product.
4. Twee duidelijk verschillende doelgroepen op één pagina: consumenten (verdienen) en adverteerders (bereik kopen) — beide flows moeten naast elkaar kunnen bestaan zonder elkaar te verwateren.

## Accessibility & Inclusion
Geen expliciete toegankelijkheidseis vastgesteld door de gebruiker; standaard webtoegankelijkheid (semantische HTML, contrast, toetsenbordbediening) als impliciete verwachting.
