import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// De HTML in #root is bij de build al gerenderd (zie scripts/prerender.tsx),
// dus hydrateren in plaats van opnieuw opbouwen.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
);
