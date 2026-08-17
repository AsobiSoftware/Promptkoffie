/**
 * Pre-rendert elke pagina naar statische HTML en injecteert die in de
 * bijbehorende dist/**\/index.html.
 *
 * Doel: de volledige tekst van elke pagina staat in de HTML die de server
 * uitlevert, zodat crawlers en AI-agents meer zien dan een lege #root plus
 * meta-tags. Geen framework-migratie, geen SSR-runtime — elke pagina is een
 * losse statische build die bij de build één keer wordt uitgerekend.
 *
 * De entries in src/entries/*.tsx en src/main.tsx gebruiken hydrateRoot, dus
 * de client-render moet exact overeenkomen met wat hier uitrolt. Componenten
 * met state (SignupForm, InteractiveSimulator, LiveCounter) starten allemaal
 * deterministisch (leeg veld / 'chatgpt' / null), dus dat klopt.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import OverOns from '../src/pages/OverOns';
import Adverteerders from '../src/pages/Adverteerders';

const ROOT_PLACEHOLDER = '<div id="root"></div>';

const pages: { htmlPath: string; element: React.ReactElement; label: string }[] = [
  { htmlPath: 'dist/index.html', element: <App />, label: 'Homepage' },
  { htmlPath: 'dist/over-ons/index.html', element: <OverOns />, label: 'Over ons' },
  { htmlPath: 'dist/adverteerders/index.html', element: <Adverteerders />, label: 'Adverteerders' },
];

for (const { htmlPath, element, label } of pages) {
  const fullPath = resolve(process.cwd(), htmlPath);
  const template = readFileSync(fullPath, 'utf8');

  if (!template.includes(ROOT_PLACEHOLDER)) {
    throw new Error(`Kon "${ROOT_PLACEHOLDER}" niet vinden in ${htmlPath} — is de root-div hernoemd?`);
  }

  const appHtml = renderToString(element);
  const output = template.replace(ROOT_PLACEHOLDER, `<div id="root">${appHtml}</div>`);
  writeFileSync(fullPath, output, 'utf8');

  console.log(`Pre-render klaar (${label}): ${appHtml.length.toLocaleString('nl-NL')} tekens in ${htmlPath}`);
}
