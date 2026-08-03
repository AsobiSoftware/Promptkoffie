import React from 'react';
import { Download, Sparkles, Coffee, Clock, ArrowRight, ShieldAlert } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Installeer de extensie',
      subtitle: 'Binnen 30 seconden gereed',
      description:
        'Voeg Promptkoffie eenvoudig toe aan Chrome of Edge. Geen ingewikkelde configuraties of verplichte profielen.',
      icon: Download,
      badge: 'Snelle installatie',
      accentColor: 'from-amber-500/20 to-amber-700/10',
      iconBg: 'bg-[#B45309] text-white',
    },
    {
      number: '02',
      title: 'Gebruik AI zoals je gewend bent',
      subtitle: 'Nul aanpassing in je routine',
      description:
        'Stel vragen aan je favoriete AI-tools voor je studie of werk. Terwijl de AI het antwoord genereert, verschijnt er kort een nette ad.',
      icon: Sparkles,
      badge: 'Automatische detectie',
      accentColor: 'from-[#1C1917]/10 to-amber-900/10',
      iconBg: 'bg-[#1C1917] text-white',
    },
    {
      number: '03',
      title: 'Spaar mee met elke advertentie',
      subtitle: 'Eind van de maand op je bank',
      description:
        'Je ontvangt een deel van de advertentie-opbrengsten terug. Elke seconde wachttijd bouwt zo automatisch je koffiesaldo op.',
      icon: Coffee,
      badge: 'Eerlijk gedeelde opbrengst',
      accentColor: 'from-amber-600/20 to-orange-500/10',
      iconBg: 'bg-gradient-to-br from-[#B45309] to-[#78350F] text-white',
    },
  ];

  return (
    <section id="hoe-werkt-het" className="py-20 bg-white border-y border-[#E7E1D8]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider bg-[#FEF3C7] px-3 py-1 rounded-full border border-[#FDE68A]">
            Hoe het werkt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] mt-3 mb-4 font-serif">
            Drie eenvoudige stappen. Nul extra moeite.
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            Je verandert niets aan hoe je de AI gebruikt. Je krijgt er alleen iets voor terug.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#E7E1D8] via-[#B45309]/30 to-[#E7E1D8] -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 bg-[#FAF8F5] border border-[#E7E1D8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#B45309]/40 transition-all duration-300 group"
              >
                <div>
                  {/* Top row with step badge and number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black font-mono text-[#E7E1D8] group-hover:text-[#B45309]/30 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-semibold text-[#78350F] bg-amber-100/80 px-2.5 py-0.5 rounded-md mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-[#1C1917] mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E1D8]/60 flex items-center gap-2 text-xs font-medium text-[#78350F]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{step.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
