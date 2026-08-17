import React from 'react';
import { SignupForm } from './SignupForm';

export const UserSignupCTA: React.FC = () => {
  return (
    <section
      id="wachtlijst"
      className="scroll-mt-20 bg-purple text-white px-6 sm:px-[72px] py-14 sm:py-[76px] border-b-[1.5px] border-ink"
    >
      <div className="grid grid-cols-1 min-[1100px]:grid-cols-2 gap-12 min-[1100px]:gap-[72px] items-center">
        <div>
          <h2 className="font-bold text-[32px] sm:text-[46px] leading-[1.03] tracking-[-0.03em] mb-4">
            Zet jezelf op de wachtlijst.
          </h2>
          <p className="text-lg leading-[1.55] text-[#e0d2f2] max-w-[36ch] mb-[30px]">
            Laat je e-mailadres achter en krijg als eerste toegang zodra de bèta opent.
          </p>
          <SignupForm formId="onderaan" />
        </div>

        <div className="bg-cream text-ink border-[1.5px] border-ink px-6 sm:px-8 py-[30px] shadow-[6px_6px_0_rgba(20,10,35,0.35)]">
          <div className="flex justify-between pb-3.5 border-b-[1.5px] border-ink text-base">
            <span>Inschrijving wachtlijst</span>
            <strong>€ 0,00</strong>
          </div>
          <div className="flex justify-between py-3.5 border-b border-hairline text-base">
            <span className="text-body">Verplichte kliks</span>
            <strong>geen</strong>
          </div>
          <div className="flex justify-between py-3.5 border-b border-hairline text-base">
            <span className="text-body">Impact op browsersnelheid</span>
            <strong>geen</strong>
          </div>
          <div className="flex justify-between py-3.5 border-b-[1.5px] border-ink text-base">
            <span className="text-body">Jouw aandeel</span>
            <strong className="text-purple">50% van de opbrengst</strong>
          </div>
          <div className="flex justify-between pt-4 text-[19px] font-bold">
            <span>Totaal vandaag</span>
            <span>€ 0,00 · vrijblijvend</span>
          </div>
        </div>
      </div>
    </section>
  );
};
