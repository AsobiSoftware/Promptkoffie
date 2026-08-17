import React from 'react';

/**
 * Compacte footer voor losse pagina's (/over-ons/, /adverteerders/) —
 * bewust smaller dan de homepage-footer (Footer.tsx): alleen logo,
 * copyright en vier links. De "Op de wachtlijst"-link krijgt per pagina de
 * accentkleur van die pagina.
 */

interface SlimFooterProps {
  page: 'over-ons' | 'adverteerders';
}

const waitlistLinkColor: Record<SlimFooterProps['page'], string> = {
  'over-ons': 'text-yellow',
  adverteerders: 'text-[#7cc6f0]',
};

export const SlimFooter: React.FC<SlimFooterProps> = ({ page }) => {
  return (
    <footer className="bg-ink text-white px-6 sm:px-[72px] py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
      <div className="flex items-center gap-[22px]">
        <img
          src="/promptkoffie-logo.png"
          alt="Promptkoffie"
          className="block h-7 w-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <span className="font-mono text-[12.5px] text-placeholder">
          © {new Date().getFullYear()} Promptkoffie · hallo@promptkoffie.nl
        </span>
      </div>
      <div className="flex gap-6 text-[15px]">
        <a href="/#voortgang" className="text-white hover:text-pink transition-colors">
          Voortgang
        </a>
        <a href="/#grenzen" className="text-white hover:text-pink transition-colors">
          Wat mag wel/niet
        </a>
        <a href="/#privacy" className="text-white hover:text-pink transition-colors">
          Privacy
        </a>
        <a href="/#wachtlijst" className={`font-bold ${waitlistLinkColor[page]}`}>
          Op de wachtlijst
        </a>
      </div>
    </footer>
  );
};
