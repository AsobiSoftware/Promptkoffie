import React from 'react';
import { SignupForm } from './SignupForm';

const receiptLines: { label: string; value: string }[] = [
  { label: 'Inschrijving wachtlijst', value: '€ 0,00' },
  { label: 'Verplichte kliks', value: 'geen' },
  { label: 'Impact op browsersnelheid', value: 'geen' },
  { label: 'Jouw aandeel', value: '50% van de opbrengst' },
];

export const UserSignupCTA: React.FC = () => {
  return (
    <section
      id="wachtlijst"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-white to-[#FAF8F5] border-b border-[#E7E1D8]/60"
    >
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="receipt-edge bg-white border border-[#E7E1D8] shadow-xl relative overflow-hidden text-center pt-8 px-6 sm:px-8 pb-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917] font-serif mb-3 leading-tight relative z-10">
            Zet jezelf op de wachtlijst.
          </h2>

          <p className="text-sm text-[#57534E] max-w-sm mx-auto mb-6 relative z-10">
            Laat je e-mailadres achter en krijg als eerste toegang zodra de bèta opent.
          </p>

          {/* Bonregels */}
          <div className="relative z-10 text-left mb-6 border-t border-b border-dashed border-[#D6CFC2] py-4">
            {receiptLines.map((line) => (
              <div key={line.label} className="flex items-baseline gap-2 py-1 text-xs text-[#57534E]">
                <span className="shrink-0">{line.label}</span>
                <span className="flex-1 border-b border-dotted border-[#C9C1B4] translate-y-[-3px]" />
                <span className="font-mono tabular-nums shrink-0 text-[#1C1917]">{line.value}</span>
              </div>
            ))}
            <div className="flex items-baseline gap-2 pt-2 mt-1 border-t border-[#E7E1D8] text-sm font-bold text-[#1C1917]">
              <span className="shrink-0">Totaal vandaag</span>
              <span className="flex-1" />
              <span className="font-mono tabular-nums shrink-0">€ 0,00 · vrijblijvend</span>
            </div>
          </div>

          <div className="relative z-10">
            <SignupForm formId="onderaan" size="compact" />
          </div>
        </div>
      </div>
    </section>
  );
};
