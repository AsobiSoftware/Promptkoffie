import React from 'react';
import { SignupForm } from './SignupForm';
import { InteractiveSimulator } from './InteractiveSimulator';

const stats = [
  { value: '50%', label: 'is voor jou' },
  { value: '± €5', label: 'per maand, projectie' },
  { value: '3–8s', label: 'wachttijd benut' },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="grid grid-cols-1 min-[1100px]:grid-cols-2 items-stretch border-b-[1.5px] border-ink"
    >
      {/* Links: belofte */}
      <div className="px-6 sm:px-[72px] min-[1100px]:pr-14 py-14 min-[1100px]:py-[76px] border-b-[1.5px] min-[1100px]:border-b-0 min-[1100px]:border-r-[1.5px] border-ink bg-cream">
        <div className="inline-flex items-center gap-[9px] font-mono text-xs font-semibold tracking-[0.1em] uppercase text-purple border-[1.5px] border-purple px-3 py-[7px] mb-7">
          <span className="w-[7px] h-[7px] rounded-full bg-green" aria-hidden="true" />
          In aanbouw · wachtlijst open
        </div>

        <h1 className="font-bold text-[42px] sm:text-[58px] min-[1100px]:text-[76px] leading-[0.94] tracking-[-0.035em] mb-6 text-balance">
          Verdien in de seconden dat je AI <span className="text-purple">nadenkt</span>.
        </h1>

        <p className="text-lg sm:text-xl leading-[1.5] max-w-[32ch] text-body mb-[38px]">
          Één regel advertentie terwijl ChatGPT, Claude of Gemini je antwoord genereert. De helft
          van de opbrengst is voor jou.
        </p>

        <div id="inschrijven" className="scroll-mt-24 mb-4">
          <SignupForm formId="hero" />
        </div>
        <p className="font-mono text-[12.5px] text-muted">
          Leest je prompt niet · nog geen advertentie verkocht, nog niets uitgekeerd.
        </p>

        <div className="flex gap-10 mt-[52px] pt-7 border-t-[1.5px] border-ink">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-[28px] sm:text-[34px] font-bold tracking-[-0.03em] text-purple">
                {stat.value}
              </div>
              <div className="font-mono text-xs tracking-[0.06em] uppercase text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rechts: bewijs */}
      <div className="bg-purple px-6 sm:px-[72px] min-[1100px]:pl-14 py-14 min-[1100px]:py-16 flex flex-col justify-center">
        <InteractiveSimulator />
      </div>
    </section>
  );
};
