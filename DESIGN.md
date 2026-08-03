---
name: Promptkoffie
description: Wachttijd tijdens AI-antwoorden verzilveren, warm en eerlijk, zonder mee te lezen.
colors:
  amber-ember: "#B45309"
  amber-roast: "#78350F"
  amber-hover: "#92400E"
  ink: "#1C1917"
  ink-hover: "#292524"
  cream: "#FAF8F5"
  border: "#E7E1D8"
  text-secondary: "#57534E"
  text-tertiary: "#78716C"
  text-quaternary: "#A8A29E"
  badge-bg: "#FEF3C7"
  badge-border: "#FDE68A"
  trust-emerald: "#059669"
  trust-emerald-tint: "#D1FAE5"
  warm-blush: "#F43F5E"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "normal"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  full: "9999px"
spacing:
  section-y: "5rem"
  section-y-sm: "4rem"
  container-x: "1rem"
  card-p: "2rem"
  gap-md: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.amber-ember}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.amber-hover}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
  button-dark-hover:
    backgroundColor: "{colors.ink-hover}"
  badge-pill:
    backgroundColor: "{colors.badge-bg}"
    textColor: "{colors.amber-hover}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.75rem"
  card-surface:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "{spacing.card-p}"
  input-light:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
  input-dark:
    backgroundColor: "#292524"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1rem"
---

# Design System: Promptkoffie

## Overview

**Creative North Star: "De Stille Kassa" (The Quiet Cash Register)**

Promptkoffie's visual system is an honest, transparent value-exchange made tangible: a wachtmoment tijdens een AI-antwoord wordt omgezet in een klein, eerlijk bedrag, zonder opzichtige game- of casino-mechaniek eromheen. De uitvoering is **speels, verrassend en vrolijk** in stem en copy (☕-emoji, warme micro-teksten, een levende demo-simulator), terwijl de onderliggende componenten — knoppen, kaarten, velden — bewust **zacht en geruststellend** blijven: grote radii, gedempte randen, ambient gloed in plaats van harde schaduwen. Die combinatie is doelbewust: het geld-verdienen mag leuk voelen, maar de interface zelf mag nooit opdringerig, schreeuwerig of "growth-hacky" aanvoelen — dat zou de privacy- en eerlijkheidsbelofte tegenspreken.

De kleurwereld is bijna volledig Tailwind's eigen amber- en stone-schalen (geen custom hue-systeem), met twee bewust "verwarmde" uitzonderingen (achtergrond en randen) die de standaard koelere stone-tinten net iets tanniger maken. Emerald is strikt gereserveerd voor privacy/vertrouwen-signalen; rose komt maar op twee plekken voor (footer-hartje, foutmeldingen). Er is precies één visuele uitzondering op het hele systeem: de `InteractiveSimulator`, die doelbewust de échte interfacekleuren van ChatGPT/Gemini/Claude nabootst voor herkenbaarheid — dat is geen merkuiting en mag niet naar het amber-palet worden "gecorrigeerd".

**Key Characteristics:**
- Amber-op-crème als enige merkkleur, nooit paars/blauw SaaS-gradients.
- Warme stone-neutralen voor tekst, nooit koele Tailwind grays.
- Grote, zachte radii overal (rounded-xl minimum).
- Ambient amber-gloed (blur-3xl) i.p.v. harde schaduwen als sfeermaker.
- Instrument Serif voor koppen, Plus Jakarta Sans voor de rest — geen Inter, geen systeemfont.

## Colors

Het palet is warm, geconcentreerd en bijna uitsluitend amber + stone; emerald en rose zijn strikt semantisch, geen decoratie.

### Primary
- **Geroosterde Kaneel Amber** (#B45309): hoofdaccent — primaire knoppen, iconen, badge-tekst, links bij hover. Gebruikt op ≤10% van elk scherm.
- **Amber Roast** (#78350F): donkere gradiëntpartner van Geroosterde Kaneel Amber — logo-badge, geselecteerde iconenblokken (`bg-gradient-to-br from-[#B45309] to-[#78350F]`).
- **Amber Hover** (#92400E): drukstand/hover van de primaire kleur, en de tekstkleur binnen amber-badges.

### Secondary
- **Privacy Emerald** (#059669): uitsluitend voor vertrouwen/privacy-signalen — AVG/GDPR-badges, checkmarks, "Privacy First"-badge. Nooit voor algemeen succes of decoratie.

### Tertiary
- **Warme Blos** (#F43F5E): incidenteel warm accent — het hartje in de footer-credit, en de basis voor foutmeldingsstaten (rose-50/200/800). Bewust schaars gebruikt.

### Neutral
- **Crème** (#FAF8F5): paginabasis-achtergrond — een verwarmde variant van Tailwind stone-50, niet de standaardwaarde.
- **Inkt** (#1C1917): primaire tekstkleur én de achtergrond van donkere secties (AdvertiserCTA, InteractiveSimulator-frame). Exact Tailwind stone-900.
- **Inkt Hover** (#292524): hoverstand van donkere knoppen (header-CTA). Exact Tailwind stone-800.
- **Rand** (#E7E1D8): dividers en kaartranden overal — een verwarmde variant van Tailwind stone-200, niet de standaardwaarde. Vaak met `/40`–`/80`-opacity.
- **Tekst Secundair** (#57534E): lichaamstekst, beschrijvingen. Exact Tailwind stone-600.
- **Tekst Tertiair** (#78716C): minder prominente tekst, footer-body. Exact Tailwind stone-500.
- **Tekst Quaternair** (#A8A29E): meest gedempte tekst — copyright-regel, cijfers-achtergrond in stapkaarten. Exact Tailwind stone-400.
- **Badge Achtergrond** (#FEF3C7) / **Badge Rand** (#FDE68A): de pil-badges ("Hoe het werkt", "100% Gratis"). Exact Tailwind amber-100/200.

### Named Rules
**De Warme-Neutraal Regel.** Tekst- en oppervlakte-neutralen zijn altijd warm stone-getint (#57534E/#78716C/#A8A29E/#E7E1D8), nooit koel grijs — koel grijs leest als generieke SaaS, warm stone leest als koffiezaak.

**De Amber-Gradiënt Regel.** De #B45309→#78350F-gradiënt is gereserveerd voor enkelvoudige merkankers (logo, hero-icoon), niet om over elk icoontje te plakken.

**De Third-Party-Uitzondering.** `InteractiveSimulator.tsx`'s interne chat-UI-kleuren (o.a. #10A37F, #1A73E8, #DA7756, #202123) bootsen bewust ChatGPT/Gemini/Claude na en vallen buiten dit designsysteem — nooit naar het amber-palet omzetten.

## Typography

**Display Font:** Instrument Serif (met Georgia, serif als fallback)
**Body Font:** Plus Jakarta Sans (met system-ui, -apple-system, sans-serif als fallback)

**Character:** Een klassiek, iets literair serif voor koppen tegenover een moderne, vriendelijke geometrische sans voor de rest — het serif-accent geeft "vertrouwd/eerlijk" gewicht aan koppen zonder formeel te worden, terwijl de sans de speelse, snelle leesbaarheid van copy en interface draagt.

### Hierarchy
- **Display** (700, clamp(2.25rem–3.75rem), 1.12): hero-titel (`Hero.tsx` h1) — enige plek met de grootste schaal.
- **Headline** (700, clamp(1.875rem–2.25rem), 1.2): sectiekoppen (H2) — "Hoe het werkt", "Jouw prompts blijven privé", etc.
- **Title** (700, 1.25rem, 1.3): kaarttitels (H3) — stapkaarten, FAQ-vragen (font-serif, iets kleiner op mobiele kaarten).
- **Body** (500, 1rem, 1.6): standaard lichaamstekst; leads gaan naar `text-lg` op grotere viewports.
- **Label** (700, 0.75rem, uppercase, tracking 0.05em): formulierlabels, badges, footer-kopjes — altijd uppercase + letterspacing, nooit voor lopende tekst.

### Named Rules
**De Eén-Serif-Regel.** Instrument Serif verschijnt uitsluitend op koppen (`.font-serif`/h1-h3); lichaamstekst, labels en UI-copy blijven altijd Plus Jakarta Sans — nooit serif voor interface-elementen.

## Layout

Content houdt zich aan een herhaald containerpatroon: `max-w-7xl` voor volle secties, `max-w-4xl` voor smallere content (FAQ), `max-w-2xl` voor sectie-intro's — steeds met `px-4 sm:px-6 lg:px-8`. Verticaal sectieritme is `py-20` als standaard (`py-16` als lichtere variant), met dunne `border-[#E7E1D8]`-dividers (`/60`–`/80` opacity) tussen secties in plaats van harde scheidingslijnen.

Grids zijn functioneel, niet decoratief: een 12-koloms grid (`lg:grid-cols-12`) verdeelt tekst/formulier-paren asymmetrisch (5/7 of 6/6), een simpele 3-koloms grid draagt de stappenkaarten. Alles valt terug naar één kolom op mobiel. Twee doelgroep-secties (consument vs. adverteerder) leven naast elkaar op dezelfde pagina met duidelijk verschillend kleurgebruik (licht/crème vs. donker/inkt) om ze visueel te scheiden zonder aparte pagina's.

## Elevation & Depth

Zacht, ambient en gelaagd — nooit hard of skeuomorf. Twee technieken dragen samen het dieptegevoel: (1) blur-gloeivlekken (`blur-3xl`, amber op 10–15% opacity) achter hero- en CTA-secties als sfeermaker, geen letterlijke schaduw; (2) gewone Tailwind shadow-utilities (`shadow-xs` t/m `shadow-2xl`) op kaarten en knoppen, altijd diffuus. Gekleurde schaduwen (`shadow-[#B45309]/20`) komen terug op merkankers zoals het logo-icoon en primaire knoppen — een subtiele signature-techniek die schaduw aan merkkleur koppelt in plaats van aan generiek zwart.

### Shadow Vocabulary
- **Ambient card** (`shadow-lg`/`shadow-xl`/`shadow-2xl`): kaarten en formulierboxen, oplopend met visueel gewicht van de sectie.
- **Brand glow** (`shadow-md shadow-[#B45309]/20`): logo-badge en primaire CTA's — schaduw in merkkleur, niet zwart.
- **Micro** (`shadow-xs`/`shadow-sm`): kleine badges en de header-CTA.

### Named Rules
**De Geen-Harde-Schaduw Regel.** Geen enkele schaduw in dit systeem is scherp of zwart-op-wit hard; alles is diffuus en ofwel neutraal ofwel in merkkleur getint.

## Shapes

Grote, zachte radii zijn de constante: `rounded-xl` (12px) is het minimum voor elk interactief element (inputs, kleine knoppen, icoontegels), oplopend naar `rounded-2xl` (16px) voor kaarten en chatbubbels, en `rounded-3xl` (24px) voor hero-niveau containers (privacy-kaart, formulierboxen). Pillen en cirkelvormige elementen gebruiken `rounded-full`. Randen zijn overal dun (1px), in de rand-neutraal-kleur op lichte secties of stone-700/800 op de donkere AdvertiserCTA-sectie — grens + zachte schaduw samen, nooit schaduw alleen.

## Components

### Buttons
- **Shape:** `rounded-xl` (12px), consistent op elke knopvariant.
- **Primary:** amber-achtergrond (#B45309), witte bold tekst, `py-3/3.5 px-5/6`, hover naar #92400E, vaak met trailing pijl-icoon dat bij hover opschuift.
- **Dark variant:** inkt-achtergrond (#1C1917) i.p.v. amber, gebruikt in de header-CTA en de Hero-microform — hover naar #292524. Deze variant bestaat naast de amber-variant; welke van de twee gekozen wordt hangt af van de visuele lading van de sectie eromheen.
- **Loading state:** icoon vervangen door een spinnende `Loader2`, geen tekstverandering.

### Badges/Pills
- **Style:** `rounded-full`, achtergrond #FEF3C7, rand #FDE68A, tekst #92400E of #B45309, `text-xs font-bold uppercase tracking-wider`, vaak met klein icoon vooraan.
- **Privacy-variant:** dezelfde vorm maar in emerald (bg emerald-50/100, tekst emerald-800) — uitsluitend voor vertrouwenssignalen.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (secties/stappen) tot `rounded-3xl` (hero-niveau containers).
- **Background:** wit of crème op lichte secties; stone-900 op de donkere adverteerders-sectie.
- **Shadow Strategy:** zie Elevation & Depth — ambient card-schaduw, soms merkkleur-getint.
- **Border:** altijd aanwezig, dun, rand-neutraal (of stone-700/800 op donker).
- **Internal Padding:** `p-6` tot `p-8` (stapkaarten), `p-8`–`p-12` (hero-niveau containers).

### Inputs / Fields
Twee bewust verschillende stijlen naast elkaar, per context:
- **Licht formulier (consument — Hero, UserSignupCTA):** géén individuele veldrand; het hele formulier zit in één witte, `rounded-2xl` container met rand, en het invoerveld zelf is randloos/transparant daarbinnen.
- **Donker formulier (adverteerder — AdvertiserCTA):** elk veld heeft wél een eigen rand en achtergrond (`bg-stone-800 border-stone-700 rounded-xl text-white`), los van elkaar gestapeld met `space-y-4`.
- **Focus:** amber-randkleur (`focus:border-amber-500` of `focus:ring-amber-500/30`) op beide varianten — de enige plek waar focus-styling verschijnt.

### Navigation
- Vaste header, transparant tot scroll (>20px), dan crème-achtergrond met blur en dunne onderrand. Logo = amber-gradiënt icoontegel + wordmerk in serif. Eén CTA-knop rechts, geen uitgebreid navigatiemenu.

### Signature Component: InteractiveSimulator
Een browsermockup met platform-tabs (ChatGPT/Gemini/Claude) die authentiek de kleuren en typografie van elk platform nabootst, met een geïnjecteerde Promptkoffie-advertentiebalk vlak boven de invoerbalk. Dit is het enige component waar het amber-palet bewust *niet* geldt voor de binnenkant — zie de Third-Party-Uitzondering hierboven.

## Do's and Don'ts

### Do:
- **Do** gebruik de amber-gradiënt (#B45309→#78350F) uitsluitend voor enkelvoudige merkankers — logo, hero-icoon, niet gedecoreerd over elk icoontje.
- **Do** gebruik warme stone-neutralen (#57534E/#78716C/#A8A29E) voor alle secundaire tekst — nooit `text-gray-*`.
- **Do** houd radii groot en zacht (`rounded-xl` als absoluut minimum) — geen scherpe hoeken.
- **Do** houd ambient gloed-vlekken in amber — nooit in een andere kleurtoon.
- **Do** reserveer emerald uitsluitend voor privacy/vertrouwen-signalen.

### Don't:
- **Don't** gebruik Tailwind's koele standaard-grijzen (`text-gray-300/400/500`) — `AdvertiserCTA.tsx` doet dit nu nog op meerdere plekken (labelteksten) en is daarmee een afwijking van dit systeem; een fixtarget voor een volgende `audit`/`polish`-pass, geen patroon om te herhalen.
- **Don't** herkleur `InteractiveSimulator`'s platform-mockups naar het amber-palet — hun ChatGPT/Gemini/Claude-kleuren zijn een bewuste uitzondering.
- **Don't** voeg een paars/blauw generiek SaaS-gradiënt toe — de amber/koffie-identiteit is het hele punt.
- **Don't** nest kaarten in kaarten zonder duidelijke reden (`PrivacyTrust.tsx`'s kaart-in-kaart is een bestaande uitzondering, geen patroon om te herhalen).
- **Don't** herhaal het icoontegel-boven-kop patroon (HowItWorks, PrivacyTrust, AdvertiserCTA doen dit al drie keer) zonder variatie in een nieuwe sectie.
