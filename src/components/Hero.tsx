import React from 'react';
import { MousePointerClick, Minus, EyeOff } from 'lucide-react';
import { SignupForm } from './SignupForm';

/**
 * Hero — volledig statisch. De enige interactiviteit zit in <SignupForm />.
 *
 * De simulator is hier bewust weggehaald en verhuisd naar <ProductPreview />.
 * Hij duwde het formulier ver onder de vouw. De hero mikt nu op ± 700px zodat
 * de volgende sectie net zichtbaar is als scroll-signaal.
 *
 * Copy-uitgangspunt: de belofte is geld (50% van de opbrengst), koffie is de
 * maateenheid en de toon. Nooit allebei tegelijk als belofte.
 */

const adFacts = [
  { icon: Minus, label: 'Één regel' },
  { icon: MousePointerClick, label: 'Altijd weg te klikken' },
  { icon: EyeOff, label: 'Leest je prompt niet' },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF8F5] pt-16 pb-20 sm:pt-20 sm:pb-24"
    >
      {/* Ambient gloed — sfeer, geen schaduw */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[340px] rounded-full bg-amber-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 w-72 h-72 rounded-full bg-amber-700/5 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif font-bold tracking-tight text-[#1C1917] text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.12] mb-5">
            Verdien mee in de seconden dat je{' '}
            <span className="text-[#B45309] underline decoration-[#FDE68A] decoration-4 underline-offset-4">
              AI
            </span>{' '}
            nadenkt
          </h1>

          <p className="text-base sm:text-lg text-[#57534E] font-medium leading-relaxed max-w-2xl mx-auto mb-4">
            Promptkoffie is een browserextensie die één regel advertentie toont terwijl ChatGPT,
            Claude of Gemini je antwoord genereert. De helft van wat die advertentie opbrengt, gaat
            naar jou. Je prompts worden nooit gelezen.
          </p>

          {/* Koffie als eenheid, niet als belofte */}
          <p className="text-sm text-[#78716C] max-w-xl mx-auto mb-8">
            We verwachten dat dat neerkomt op ongeveer één à twee koppen koffie per maand. Geen
            groot bedrag — wel een bedrag waar je niets voor hoeft te doen.
          </p>

          {/* Formulier: het enige interactieve eiland */}
          <div id="inschrijven" className="max-w-xl mx-auto scroll-mt-24">
            <SignupForm formId="hero" />
          </div>

          {/* Drie advertentiefeiten in één adem — het derde ontkracht het tweede */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
            {adFacts.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-xs font-medium text-[#57534E]">
                <Icon className="w-3.5 h-3.5 text-[#B45309] shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* Eerlijke status — dit is wat de rest van de pagina geloofwaardig maakt */}
          <p className="mt-10 mx-auto max-w-md text-xs leading-relaxed text-[#A8A29E] border-t border-[#E7E1D8]/80 pt-5">
            In aanbouw. Er is nog geen advertentie verkocht en er is nog niets uitgekeerd.
            Schrijf je in en je hoort het als eerste — inclusief wat er misgaat.
          </p>
        </div>
      </div>
    </section>
  );
};
