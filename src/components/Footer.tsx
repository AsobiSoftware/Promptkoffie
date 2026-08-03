import React from 'react';
import { Coffee, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="bg-[#1C1917] border-t border-stone-800 pt-12 pb-8 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-stone-800">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B45309] to-[#78350F] flex items-center justify-center text-white shrink-0">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white font-serif">Promptkoffie</span>
            </div>
            <p className="max-w-sm text-xs text-stone-500 leading-relaxed">
              Het Nederlandse browserextensie-concept dat wachttijd omzet in gratis koffie voor wie veel AI gebruikt. Nul moeite, 100% privacy-proof.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>AVG / GDPR Strikte Privacy Waarborg</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">
              Snelle Navigatie
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onScrollTo('hoe-werkt-het')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Hoe werkt het?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('demo')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Simulator Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('privacy')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Privacy Beleid
                </button>
              </li>
            </ul>
          </div>

          {/* For Business & Contact */}
          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">
              Partners & Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onScrollTo('adverteren')}
                  className="hover:text-amber-400 transition-colors cursor-pointer font-semibold text-amber-500"
                >
                  Adverteren op Promptkoffie
                </button>
              </li>
              <li className="pt-2 text-stone-500">
                <span>Contact: <strong className="text-stone-300">hallo@promptkoffie.nl</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
          <p>© {new Date().getFullYear()} Promptkoffie. Alle rechten voorbehouden.</p>
          <p className="flex items-center gap-1">
            Gemaakt met <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> voor Nederlandse studenten & starters.
          </p>
        </div>
      </div>
    </footer>
  );
};
