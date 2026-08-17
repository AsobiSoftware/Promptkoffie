import React from 'react';
import { handleSectionLinkClick } from '../utils/scroll';

const navLinks = [
  { id: 'hoe-werkt-het', label: 'Hoe werkt het?' },
  { id: 'grenzen', label: 'Wat mag wel/niet' },
  { id: 'privacy', label: 'Privacy' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white px-6 sm:px-[72px] pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-14 pb-8 sm:pb-10 border-b border-[#4a3f57]">
        <div>
          <img
            src="/promptkoffie-logo.png"
            alt="Promptkoffie"
            className="block h-[34px] w-auto mb-[18px]"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="text-[15.5px] leading-[1.6] text-footer-muted max-w-[42ch]">
            De Nederlandse browserextensie die de seconden waarin je op een AI-antwoord wacht
            omzet in jouw aandeel. Zonder je prompts te lezen.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-placeholder mb-3.5">
            Snelle navigatie
          </p>
          <div className="flex flex-col gap-2.5 text-[15.5px]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSectionLinkClick(e, link.id)}
                className="text-white hover:text-pink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-placeholder mb-3.5">
            Partners & contact
          </p>
          <div className="flex flex-col gap-2.5 text-[15.5px]">
            <a href="/adverteerders/" className="text-white hover:text-pink transition-colors">
              Adverteren op Promptkoffie
            </a>
            <span className="text-footer-muted">hallo@promptkoffie.nl</span>
            <span className="text-footer-muted">Eendrachtlaan 34H, 3526 LB Utrecht</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-6 font-mono text-[12.5px] text-placeholder">
        <span>© {new Date().getFullYear()} Promptkoffie. Alle rechten voorbehouden.</span>
        <span>Gemaakt voor Nederlandse studenten & starters.</span>
      </div>
    </footer>
  );
};
