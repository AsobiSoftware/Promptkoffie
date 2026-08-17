import React from 'react';
import { Header } from '../components/Header';
import { SlimFooter } from '../components/SlimFooter';

/**
 * Gedeelde placeholder voor pagina's waarvan de content nog niet klaar is.
 */

interface UnderConstructionProps {
  pageLabel: string;
  page: 'over-ons' | 'adverteerders';
}

export default function UnderConstruction({ pageLabel, page }: UnderConstructionProps) {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      <Header isHomePage={false} activePage={page} />

      <main className="flex-1 flex flex-col items-center text-center px-6 sm:px-[72px] py-24 sm:py-[120px] sm:pb-[130px]">
        <div className="inline-flex items-center gap-[9px] font-mono text-xs font-semibold tracking-[0.1em] uppercase text-ink bg-yellow border-[1.5px] border-ink px-3 py-[7px] mb-[30px]">
          <span
            className="w-[7px] h-[7px] rounded-full bg-ink [animation:pk-badge-pulse_1.4s_infinite]"
            aria-hidden="true"
          />
          In aanbouw
        </div>

        <h1 className="font-bold text-[38px] sm:text-[60px] leading-[0.98] tracking-[-0.035em] max-w-[22ch] mb-5">
          {pageLabel} is nog in aanbouw
        </h1>

        <p className="text-lg sm:text-[19px] leading-[1.55] text-body max-w-[44ch] mb-9">
          Deze pagina staat er nog niet. Schrijf je in en je hoort het zodra er meer te zien is.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5">
          <a
            href="/#inschrijven"
            className="inline-flex items-center justify-center gap-2 bg-purple text-white text-base font-bold px-[26px] py-[15px] border-[1.5px] border-ink shadow-[3px_3px_0_#241a33] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#241a33] transition-[transform,box-shadow] duration-150"
          >
            Schrijf je in voor updates →
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-cream text-body text-base font-bold px-[26px] py-[15px] border-[1.5px] border-ink"
          >
            ← Ga terug
          </a>
        </div>

        <div className="mt-14 w-full max-w-[760px] border-t-[1.5px] border-ink pt-[22px] flex flex-col sm:flex-row gap-2 justify-between font-mono text-[12.5px] text-muted">
          <a href="/#voortgang" className="text-purple">
            Bekijk de voortgang
          </a>
          <span>Nu bezig: extensie bouwen</span>
        </div>
      </main>

      <SlimFooter page={page} />
    </div>
  );
}
