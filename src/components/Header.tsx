import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

/**
 * Sticky header, volledig statisch.
 *
 * Bewuste afwijking van DESIGN.md: de oude header was transparant tot 20px
 * scroll en wisselde daarna naar crème + blur. Dat vroeg een scroll-listener
 * in JS. De header staat nu permanent op crème met blur — visueel vrijwel
 * identiek zodra je scrollt, en nul JS.
 *
 * Navigatie is verborgen onder md. Drie ankerlinks rechtvaardigen geen
 * hamburgermenu; de CTA blijft op elke breedte zichtbaar.
 */

const navLinks = [
  { href: '#zo-ziet-het-eruit', label: 'Zo ziet het eruit' },
  { href: '#hoe-werkt-het', label: 'Hoe het werkt' },
  { href: '#privacy', label: 'Privacy' },
];

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E1D8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3.5">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5]"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B45309] to-[#78350F] flex items-center justify-center text-white shadow-md shadow-[#B45309]/20 transition-transform group-hover:scale-105 motion-reduce:transition-none">
              <Coffee className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="text-xl font-bold tracking-tight text-[#1C1917] leading-none font-serif">
              Promptkoffie
            </span>
          </a>

          {/* Navigatie */}
          <nav aria-label="Hoofdnavigatie" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#57534E] hover:text-[#B45309] transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <a
            href="#inschrijven"
            className="group inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#292524] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5]"
          >
            <span>Op de wachtlijst</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
