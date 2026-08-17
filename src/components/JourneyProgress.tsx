import React from 'react';
import { Check } from 'lucide-react';

/**
 * Horizontale voortgangsbalk — welke fase de extensie nu doormaakt.
 *
 * `currentStageIndex` is de enige plek die je hoeft aan te passen zodra een
 * fase is afgerond (0 = "Extensie bouwen" bezig, zoals nu).
 */

const currentStageIndex = 0;

const stages = [
  { label: 'Extensie bouwen', description: 'De Chrome/Edge-extensie wordt gebouwd.' },
  { label: 'Check Chrome Web Store', description: 'Beoordeling en goedkeuring door Google.' },
  { label: 'Bèta-test', description: 'Eerste groep van de wachtlijst test mee.' },
  { label: 'Live!', description: 'Beschikbaar voor iedereen op de wachtlijst.' },
];

export const JourneyProgress: React.FC = () => {
  return (
    <section
      id="voortgang"
      className="scroll-mt-20 px-6 sm:px-[72px] py-14 sm:py-[84px] bg-tint border-b-[1.5px] border-ink"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-purple mb-2.5">
            Live status
          </p>
          <h2 className="font-bold text-[32px] sm:text-[46px] leading-[1.03] tracking-[-0.03em] max-w-[22ch]">
            De reis naar live
          </h2>
        </div>
        <p className="text-base leading-[1.5] max-w-[32ch] text-body">
          Vier fases tot Promptkoffie live is. Je ziet precies welke stap nu loopt.
        </p>
      </div>

      <div className="relative">
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
          {stages.map((stage, i) => {
            const isDone = i < currentStageIndex;
            const isActive = i === currentStageIndex;
            const isLast = i === stages.length - 1;

            return (
              <li key={stage.label} className="relative md:pr-4 flex gap-4 items-start md:block">
                {!isLast && (
                  <>
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute left-[14px] top-[13px] h-0.5 w-[calc(100%+24px)] bg-ink z-0"
                    />
                    <div
                      aria-hidden="true"
                      className="md:hidden absolute left-[13px] top-[14px] w-0.5 h-[calc(100%+32px)] bg-ink z-0"
                    />
                  </>
                )}
                <div className="relative z-10 shrink-0 md:mb-[22px]">
                  <div
                    className={`w-7 h-7 rounded-full border-2 border-ink flex items-center justify-center font-mono text-xs font-semibold ${
                      isDone ? 'bg-green text-white' : isActive ? 'bg-yellow text-ink' : 'bg-tint text-ink'
                    }`}
                  >
                    {isDone ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : i + 1}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  {isDone && (
                    <span className="inline-block font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase bg-green text-white px-2 py-[3px] mb-3">
                      Klaar
                    </span>
                  )}
                  {isActive && (
                    <span className="inline-block font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase bg-ink text-yellow px-2 py-1 mb-3">
                      Nu bezig
                    </span>
                  )}
                  {!isDone && !isActive && !isLast && (
                    <span className="inline-block font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase border-[1.5px] border-[#8a7f99] text-muted px-2 py-[3px] mb-3">
                      Volgt
                    </span>
                  )}
                  {!isDone && !isActive && isLast && (
                    <span className="inline-block font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase border-[1.5px] border-green text-green px-2 py-[3px] mb-3">
                      Doel
                    </span>
                  )}

                  <h3 className="text-[22px] font-bold tracking-[-0.02em] mb-2">{stage.label}</h3>
                  <p className="text-[15.5px] leading-[1.55] text-body">{stage.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
