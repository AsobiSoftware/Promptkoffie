import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import OverOns from '../pages/OverOns';
import '../index.css';

// De HTML in #root is bij de build al gerenderd (zie scripts/prerender.tsx).
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <OverOns />
  </StrictMode>,
);
