import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { handleSectionLinkClick } from '../utils/scroll';

/**
 * Sticky header, verder statisch — de enige JS is het anker-klikgedrag
 * hieronder, dat voorkomt dat de URL verandert bij in-page navigatie.
 *
 * Volgorde van de sectielinks volgt de daadwerkelijke volgorde van de
 * secties op de pagina (Voortgang → Privacy) — niet alfabetisch of
 * willekeurig. Bewust kort gehouden: alleen Voortgang en Privacy, plus de
 * losse pagina's.
 */

interface HeaderProps {
  /** false op /over-ons en /adverteerders — bepaalt hoe anker-links zich gedragen. */
  isHomePage?: boolean;
  /** Welke pagina-link actief is (en in welke kleur) op een losse pagina. */
  activePage?: 'over-ons' | 'adverteerders';
}

const sectionLinks = [
  { id: 'voortgang', label: 'Voortgang' },
  { id: 'privacy', label: 'Privacy' },
];

const pageLinks = [
  { key: 'over-ons', href: '/over-ons/', label: 'Over ons', accent: 'text-purple' },
  { key: 'adverteerders', href: '/adverteerders/', label: 'Adverteerders', accent: 'text-blue' },
] as const;

export const Header: React.FC<HeaderProps> = ({ isHomePage = true, activePage }) => {
  const [open, setOpen] = useState(false);
  const sectionHref = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);

  const handleMobileSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setOpen(false);
    if (isHomePage) handleSectionLinkClick(e, id);
  };

  return (
    <header className="sticky top-0 z-50 bg-cream border-b-[1.5px] border-ink">
      <div className="flex items-center justify-between gap-6 px-6 sm:px-[72px] py-4 sm:py-5">
        <a
          href={isHomePage ? '#top' : '/'}
          onClick={isHomePage ? (e) => handleSectionLinkClick(e, 'top') : undefined}
          className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/40"
        >
          <img src="/promptkoffie-logo.png" alt="Promptkoffie" className="block h-8 sm:h-[38px] w-auto" />
        </a>

        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-[26px] text-[15px] font-medium">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={sectionHref(link.id)}
                  onClick={isHomePage ? (e) => handleSectionLinkClick(e, link.id) : undefined}
                  className="text-ink hover:text-pink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li aria-hidden="true" className="w-px h-4 bg-[#c9bed6]" />
            {pageLinks.map((link) => {
              const isActive = activePage === link.key;
              return (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className={
                      isActive
                        ? `${link.accent} font-bold`
                        : 'text-ink hover:text-pink transition-colors'
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={sectionHref('wachtlijst')}
          onClick={isHomePage ? (e) => handleSectionLinkClick(e, 'wachtlijst') : undefined}
          className="shrink-0 inline-flex items-center gap-2 bg-purple text-white text-[15px] font-bold px-[18px] sm:px-[22px] py-[10px] sm:py-3 border-[1.5px] border-ink shadow-[3px_3px_0_#241a33] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#241a33] transition-[transform,box-shadow] duration-150"
        >
          <span>Op de wachtlijst</span>
          {!isHomePage && <span aria-hidden="true">→</span>}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          className="shrink-0 lg:hidden inline-flex items-center justify-center w-10 h-10 border-[1.5px] border-ink bg-white text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/40"
        >
          {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobiele navigatie"
          className="lg:hidden border-t-[1.5px] border-ink bg-cream px-6 py-4"
        >
          <ul className="flex flex-col gap-4 text-[15px] font-medium">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={sectionHref(link.id)}
                  onClick={(e) => handleMobileSectionClick(e, link.id)}
                  className="text-ink hover:text-pink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li aria-hidden="true" className="h-px bg-[#c9bed6]" />
            {pageLinks.map((link) => {
              const isActive = activePage === link.key;
              return (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      isActive
                        ? `${link.accent} font-bold`
                        : 'text-ink hover:text-pink transition-colors'
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};
