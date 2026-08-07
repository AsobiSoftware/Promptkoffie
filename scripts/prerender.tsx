/**
 * Pre-rendert <App /> naar statische HTML en injecteert die in dist/index.html.
 *
 * Doel: de volledige tekst van de pagina staat in de HTML die de server
 * uitlevert, zodat crawlers en AI-agents meer zien dan een lege #root plus
 * meta-tags. Geen framework-migratie, geen SSR-runtime — het is één statische
 * pagina die bij de build één keer wordt uitgerekend.
 *
 * main.tsx gebruikt hydrateRoot, dus de client-render moet exact overeenkomen
 * met wat hier uitrolt. Alleen SignupForm en InteractiveSimulator hebben state;
 * beide starten deterministisch (leeg veld / 'chatgpt'), dus dat klopt.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const ROOT_PLACEHOLDER = '<div id="root"></div>';
const indexPath = resolve(process.cwd(), 'dist/index.html');

const appHtml = renderToString(<App />);

const template = readFileSync(indexPath, 'utf8');
if (!template.includes(ROOT_PLACEHOLDER)) {
  throw new Error(
    `Kon "${ROOT_PLACEHOLDER}" niet vinden in dist/index.html — is de root-div hernoemd?`
  );
}

const output = template.replace(ROOT_PLACEHOLDER, `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, output, 'utf8');

console.log(`Pre-render klaar: ${appHtml.length.toLocaleString('nl-NL')} tekens in dist/index.html`);
