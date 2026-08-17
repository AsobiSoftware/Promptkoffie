import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Installeer de extensie',
    description:
      'Voeg Promptkoffie eenvoudig toe aan Chrome of Edge. Geen ingewikkelde configuraties of verplichte profielen.',
    footer: 'Binnen 30 seconden gereed',
  },
  {
    number: '02',
    title: 'Gebruik AI zoals je gewend bent',
    description:
      'Stel vragen aan je favoriete AI-tools voor je studie of werk. Terwijl de AI het antwoord genereert, verschijnt er kort een nette ad.',
    footer: 'Nul aanpassing in je routine',
  },
  {
    number: '03',
    title: 'Spaar mee met elke advertentie',
    description:
      'Je ontvangt 50% van elke advertentie-opbrengst terug. Zo bouw je in je wachttijd automatisch je saldo op.',
    footer: 'Geen kliks, geen voorwaarden',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="hoe-werkt-het" className="scroll-mt-20 px-6 sm:px-[72px] py-14 sm:py-[84px] border-b-[1.5px] border-ink bg-cream">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <h2 className="font-bold text-[32px] sm:text-[48px] leading-[1.02] tracking-[-0.03em] max-w-[20ch]">
          Drie eenvoudige stappen. Nul extra moeite.
        </h2>
        <p className="text-[17px] leading-[1.5] max-w-[34ch] text-body">
          Je verandert niets aan hoe je de AI gebruikt. Je krijgt er alleen iets voor terug.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border-[1.5px] border-ink bg-white pt-8 px-7 pb-7 shadow-[5px_5px_0_#663399]"
          >
            <div className="font-mono text-[13px] font-semibold text-purple mb-5">{step.number}</div>
            <h3 className="text-[23px] font-bold tracking-[-0.02em] mb-3">{step.title}</h3>
            <p className="text-[15.5px] leading-[1.55] text-body mb-[22px]">{step.description}</p>
            <div className="font-mono text-xs tracking-[0.04em] uppercase text-green border-t-[1.5px] border-hairline pt-3.5">
              {step.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
