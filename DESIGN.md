---
name: Promptkoffie
description: Wachttijd tijdens AI-antwoorden verzilveren, warm en eerlijk, zonder mee te lezen.
colors:
  purple: "#663399"
  ink: "#241a33"
  tint: "#F0EAF7"
  cream: "#F7F1E3"
  yellow: "#FBBA00"
  blue: "#0D8FDD"
  green: "#009B62"
  pink: "#E5205F"
  body: "#4a3f57"
  muted: "#6b5f78"
  placeholder: "#9b8fa8"
  hairline: "#dcd2ea"
  footer-muted: "#c4b8d4"
typography:
  hero:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "76px"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  pageTitle:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  sectionHeading:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "40px–48px"
    fontWeight: 700
    lineHeight: "1.02–1.05"
    letterSpacing: "-0.03em"
  cardHeading:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "21px–23px"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "15.5px–17px"
    fontWeight: 400
    lineHeight: 1.55
  monoEyebrow:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.1em"
    textTransform: "uppercase"
rounded: none
spacing:
  section: "84px 72px"
  section-split: "76px"
  header: "20px 72px"
  card-gap: "24px"
  form-gap: "12px"
  column-gap: "56px–72px"
  canvas: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.purple}"
    textColor: "#FFFFFF"
    border: "1.5px solid {colors.ink}"
    shadow: "3px 3px 0 {colors.ink}"
    padding: "12px 22px"
  button-cta:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    border: "1.5px solid {colors.ink}"
    shadow: "3px 3px 0 {colors.ink}"
    padding: "15px 22px"
  card:
    backgroundColor: "#FFFFFF"
    border: "1.5px solid {colors.ink}"
    shadow: "5px 5px 0 <accent>"
    padding: "32px 28px 28px"
  panel:
    backgroundColor: "{colors.cream} or {colors.blue}"
    border: "1.5px solid {colors.ink}"
    shadow: "6px 6px 0 {colors.ink} (or rgba(20,10,35,.35) on purple)"
  badge-mono:
    border: "1.5px solid <accent>"
    textColor: "<accent>"
    fontFamily: "IBM Plex Mono"
    fontSize: "12px"
    padding: "7px 12px"
  filter-chip-active:
    backgroundColor: "{colors.purple}"
    textColor: "#FFFFFF"
    border: "1.5px solid {colors.ink}"
    padding: "8px 14px"
  filter-chip-inactive:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    border: "1.5px solid {colors.ink}"
    padding: "8px 14px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    border: "1.5px solid {colors.ink}"
    padding: "15px 18px"
---

# Design System: Promptkoffie

## Overview

**Creative North Star: "Het Eerlijke Bonnetje" (The Honest Receipt)**

Het redesign vervangt de vorige zachte, groen-op-crème "Stille Kassa"-taal door een
strak, hoekig systeem met paars als huiskleur: dikke inkt-randen, harde offset-schaduwen
(nooit blur), geen enkele border-radius (op statusstippen na), en Space Grotesk + IBM
Plex Mono in plaats van een serif/sans-combinatie. Het idee blijft hetzelfde — eerlijk,
transparant, zonder growth-hacky opsmuk — maar de uitvoering is nu een bewust
"gedrukt bonnetje/formulier"-esthetiek in plaats van een zachte SaaS-kaart-esthetiek.

Dit systeem is opgebouwd uit een handoff (`design_handoff_promptkoffie_redesign/README.md`)
met exacte, definitieve tokens — kleuren, typografie, spacing en randen liggen vast en zijn
hieronder overgenomen. Wie een nieuwe sectie bouwt, leunt op deze tokens, niet op eigen
smaak.

**Key Characteristics:**
- Paars (#663399) op crème (#F7F1E3) als huiskleur — geen gradients, nergens.
- Alles hoekig: `border-radius: 0` overal, behalve status-stippen (`rounded-full`).
- Randen zijn altijd 1.5px solid inkt (#241a33), nooit een lichte neutraal-tint.
- Schaduwen zijn altijd harde offsets (`Npx Npx 0 <kleur>`), nooit blur.
- Space Grotesk voor koppen én body, IBM Plex Mono voor labels/eyebrows/mono-cijfers.
- Elke sectie heeft een eigen volle achtergrondkleur (paars/groen/blauw/tint/crème) —
  geen ambient gloed-vlekken, geen subtiele tinten.

## Colors

| Token | Hex | Gebruik |
|---|---|---|
| Purple | `#663399` | huiskleur — koppen-accent, primaire knoppen, hero-rechterkolom, wachtlijst-sectie |
| Ink | `#241a33` | alle randen (1.5px), primaire tekst, footer-achtergrond, offset-schaduwen |
| Tint | `#F0EAF7` | secundaire sectie-achtergrond (Voortgang, rechterhelft Grenzen) |
| Cream | `#F7F1E3` | pagina-basis-achtergrond |
| Yellow | `#FBBA00` | primaire CTA-vulling, "Nu bezig"/"In aanbouw"-badge, ad-regel in de chatmock |
| Blue | `#0D8FDD` | adverteerders-sectie en -formulier |
| Green | `#009B62` | privacy-sectie, positieve micro-labels ("+"-items, "Nu bezig"-groen) |
| Pink | `#E5205F` | grenzen/"wat ik nooit accepteer", linkkleur bij hover |
| Body | `#4a3f57` | lopende tekst |
| Muted | `#6b5f78` | metadata, mono-regels |
| Placeholder | `#9b8fa8` | inputvelden |
| Hairline | `#dcd2ea` | binnenlijnen in lijsten/kaarten |
| Footer muted | `#c4b8d4` | tekst op `#241a33` |

Link-kleuren: default `#663399`, hover `#E5205F`, 150ms transition.

### Named Rules
**De Geen-Gradient Regel.** Nergens een gradient — elke sectie is een vol, plat vlak in
precies één van bovenstaande kleuren.

**De Ink-Rand Regel.** Elke rand in het systeem is 1.5px solid `#241a33` (2px op
tijdlijn-stippen). Geen lichte neutraal-randen zoals in het vorige systeem.

## Typography

**Display/UI:** Space Grotesk (400/500/700) — koppen én body, geen apart serif-font meer.
**Mono/labels:** IBM Plex Mono (400/500/600) — eyebrows, badges, formulier-placeholders,
mono-cijfers (stats, bonregels).

### Hierarchy
- **Hero h1** (home): 76px / 0.94 / -0.035em, 700.
- **Pagina-h1** (subpagina, in-aanbouw): 60–62px / 0.98 / -0.035em, 700.
- **Sectie-h2**: 40–48px / 1.02–1.05 / -0.03em, 700.
- **Kaart-h3**: 21–23px / -0.02em, 700.
- **Hero-lead**: 20px / 1.5.
- **Body**: 15.5–17px / 1.55.
- **Stat-cijfer**: 34–38px / -0.03em, 700, paars.
- **Mono-eyebrow**: 12px / letter-spacing 0.1em / uppercase, 600.
- **Mono-badge**: 10.5px / 0.1em / uppercase, 600.

### Named Rules
**Geen Kicker boven een kop, wél mono-eyebrows.** Waar het vorige systeem alle pil-badges
boven koppen verbood, gebruikt dit systeem bewust mono-uppercase eyebrows (géén pil, géén
radius) boven secties als "Live status", "Wat je krijgt", "Voor adverteerders" — dat is
geen kicker-badge maar een tekstlabel, consistent met de mono-taal van het hele systeem.

## Shapes

**Geen border-radius**, nergens — het enige ronde element is een statusstip (`rounded-full`,
6–28px). Dit is een harde omkering van het vorige "grote zachte radii"-principe.

**Randen:** `1.5px solid #241a33` standaard, `2px` op tijdlijn-cirkels.

**Schaduwen — altijd harde offsets, nooit blur:**
- knoppen: `3px 3px 0 #241a33`
- kaarten: `5px 5px 0 <sectie-accent>` (bv. paars op HowItWorks-kaarten)
- grote panelen: `6px 6px 0 #241a33`, of `6px 6px 0 rgba(20,10,35,.35)` / `8px 8px 0 rgba(20,10,35,.35)` op een paarse achtergrond

### Named Rules
**De Geen-Blur Regel.** Geen enkele schaduw in dit systeem heeft blur — alles is een
scherpe, getelde pixel-offset. Dit is het tegenovergestelde van het vorige "ambient
glow"-principe en mag niet terugsluipen.

## Layout

Canvas-referentie 1440px. Sectie-padding `84px 72px` (hero en 2-koloms secties `76px`),
header-padding `20px 72px`. Grid-gaps: kaarten `24px`, formuliervelden `12px`, kolommen in
split-secties `56–72px`.

Herhaald patroon: een sectie is óf een volle achtergrondkleur met binnen-grid, óf een
2-koloms grid met een verticale `1.5px`-scheidingslijn ertussen (Hero, Grenzen). Op
`min-[1100px]` stapelt elke 2-koloms sectie naar één kolom — dezelfde breakpoint-logica
overal (Hero, Grenzen, PrivacyTrust, Wachtlijst, Adverteerders-teaser).

## Components

### Buttons
- **Shape:** vierkant (`rounded-none`), 1.5px ink-rand, harde offset-schaduw.
- **Primary (paars):** header-CTA, "Schrijf je in voor updates".
- **CTA (geel):** formulier-submit-knoppen (wachtlijst, adverteerders-kit).
- **Hover:** knop schuift 1px richting de schaduw en de offset verkleint naar `2px 2px`
  (indruk-effect), 150ms — nooit een kleurverandering alleen.

### Filter Chips (FAQ)
- Vierkant, 1.5px ink-rand. Actief: paarse vulling + witte tekst. Inactief: wit met
  ink-rand. Functionele content-filters, geen decoratie.

### Chatmock (InteractiveSimulator)
Signature-component in de hero-rechterkolom: een witte kaart met browserbalk (drie lege
cirkels + url, geen platform-kleurstip meer), een rechts uitgelijnd berichtbubbel op
`#F0EAF7`, de ad-regel (gele vulling, paarse rand, donker "AD"-labeltje), en drie
pulserende stippen (`pk-dots`-keyframe, 1.2s, 0.2s-stagger) bij "Antwoord wordt
gegenereerd…". Mono-chips (ChatGPT/Claude/Gemini) eronder zijn een echte tab-switch die
prompt en url laten wisselen.

### Receipt (UserSignupCTA)
Cream paneel met `6px 6px 0 rgba(20,10,35,.35)`-schaduw op de paarse wachtlijst-sectie:
`flex justify-between`-bonregels met een vetgedrukte totaalregel (`€ 0,00 · vrijblijvend`).
Geen gekartelde rand meer (`.receipt-edge`-mask is uit het systeem) — de eerlijkheid zit nu
in de rechte, formele bonnetje-typografie zelf.

### Horizontale tijdlijn (JourneyProgress)
Eén doorlopende `2px`-lijn op `top:13px` draagt vier `28px`-cirkels (2px ink-rand). Status
via cirkelkleur + mono-badge: geel-gevuld + "Nu bezig" (ink-bg/gele tekst), leeg + "Volgt"
(grijze rand), groen-gevuld + "Klaar" (afgeronde fases), groene rand + "Doel" (laatste
fase, nog niet bereikt).

### Grenzen (Boundaries)
2-koloms grens-sectie: links "Wat je krijgt" (crème, groene `+`-items met randlijnen),
rechts "Wat ik nooit accepteer" (`#F0EAF7`, roze randen, 2×2-grid met categorieën). Geen
Check/X-iconen meer — puur typografisch (`+`-teken, geen icoon).

## Do's and Don'ts

### Do:
- **Do** houd elke rand 1.5px solid ink — geen lichte neutraal-tinten, geen dunnere randen.
- **Do** gebruik alleen harde offset-schaduwen, nooit blur.
- **Do** geef elke sectie een eigen volle achtergrondkleur uit de tokenlijst.
- **Do** gebruik mono (IBM Plex Mono) voor elk label, elke eyebrow, elk cijfer dat een
  meting/bedrag is — Space Grotesk blijft voor koppen en lopende tekst.
- **Do** stapel 2-koloms secties naar 1 kolom onder `1100px` — consistent over de site.

### Don't:
- **Don't** voeg border-radius toe aan interactieve elementen — het enige ronde is een
  statusstip.
- **Don't** gebruik een gradient of ambient blur-gloed — elke sectie is een plat vlak.
- **Don't** herintroduceer Instrument Serif of Plus Jakarta Sans — dat is het vorige
  systeem en botst met de mono/display-combinatie.
- **Don't** plaats een pil-vormige kicker-badge boven een kop — gebruik een mono-uppercase
  eyebrow zonder rand/vulling, of een badge met vierkante rand zoals "In aanbouw".
