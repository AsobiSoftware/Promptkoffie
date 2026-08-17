import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import Adverteerders from '../pages/Adverteerders';
import '../index.css';

// De HTML in #root is bij de build al gerenderd (zie scripts/prerender.tsx).
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <Adverteerders />
  </StrictMode>,
);
