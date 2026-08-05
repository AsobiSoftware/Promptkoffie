import React from 'react';
import { Download, Sparkles, Euro, Clock } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Installeer de extensie',
      subtitle: 'Binnen 30 seconden gereed',
      description:
        'Voeg Promptkoffie eenvoudig toe aan Chrome of Edge. Geen ingewikkelde configuraties of verplichte profielen.',
      icon: Download,
      accent: false,
    },
    {
      number: '02',
      title: 'Gebruik AI zoals je gewend bent',
      subtitle: 'Nul aanpassing in je routine',
      description:
        'Stel vragen aan je favoriete AI-tools voor je studie of werk. Terwijl de AI het antwoord genereert, verschijnt er kort een nette ad.',
      icon: Sparkles,
      accent: false,
    },
    {
      number: '03',
      title: 'Spaar mee met elke advertentie',
      subtitle: 'Eind van de maand op je bank',
      description:
        'Je ontvangt 50% van elke advertentie-opbrengst terug. Zo bouw je in je wachttijd automatisch je saldo op.',
      icon: Euro,
      accent: true,
    },
  ];

  return (
    <section id="hoe-werkt-het" className="py-20 bg-white border-y border-[#E7E1D8]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4 font-serif">
            Drie eenvoudige stappen. Nul extra moeite.
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            Je verandert niets aan hoe je de AI gebruikt. Je krijgt er alleen iets voor terug.
          </p>
        </div>

        {/* Step Rail */}
        <div className="relative">
          <div className="space-y-8 md:space-y-10">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="relative flex items-start gap-5 md:gap-6">
                  <div
                    className={`relative z-10 shrink-0 flex items-center justify-center rounded-2xl shadow-md transition-transform ${step.accent
                        ? 'w-14 h-14 bg-gradient-to-br from-[#B45309] to-[#78350F] text-white'
                        : 'w-12 h-12 bg-[#FAF8F5] border border-[#E7E1D8] text-[#B45309]'
                      }`}
                  >
                    {IconComponent && <IconComponent className={step.accent ? 'w-6 h-6' : 'w-5 h-5'} />}
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-xs font-mono font-bold text-[#B45309]/50">{step.number}</span>
                      <h3 className="text-xl font-bold text-[#1C1917] font-serif">{step.title}</h3>
                    </div>
                    <p className="text-sm text-[#57534E] leading-relaxed mb-2 max-w-xl">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#78350F]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.subtitle}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
