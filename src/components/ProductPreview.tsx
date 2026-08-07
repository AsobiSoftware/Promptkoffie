import React from 'react';
import { Check, X } from 'lucide-react';
import { InteractiveSimulator } from './InteractiveSimulator';

/**
 * ProductPreview — de simulator krijgt een eigen sectie in plaats van de hero
 * te blokkeren.
 *
 * Twee dingen doen hier conversiewerk:
 *
 * 1. De tekstuele tegenhanger onder de simulator. De simulator zelf is voor een
 *    AI-agent of crawler onzichtbaar; deze alinea beschrijft letterlijk wat er
 *    te zien is, zodat de inhoud in de HTML staat. Hij is bewust zichtbaar en
 *    niet sr-only — een mens die de demo niet begrijpt, heeft er evenveel aan.
 *
 * 2. Het wel/niet-paar. Dit staat precies op het moment dat de bezoeker de
 *    advertentie ziet en denkt "wat voor reclame krijg ik dan?". De uitsluitingen
 *    zijn in de ik-vorm geschreven: het is een persoonlijke keuze van de maker,
 *    geen bedrijfsbeleid, en dat is bij een eenmanszaak geloofwaardiger.
 */

const showsUp = [
  'Één regel, onder je eigen bericht, terwijl het antwoord binnenkomt.',
  'Bij elke prompt — en met één klik op het kruisje weer weg.',
  'Verdwijnt vanzelf zodra je antwoord klaar is.',
];

const neverShowsUp = ['Gokken en kansspelen', 'Roken en vapes', 'Religieuze werving', 'Leningen en krediet'];

export const ProductPreview: React.FC = () => {
  return (
    <section
      id="zo-ziet-het-eruit"
      className="scroll-mt-20 py-20 bg-white border-y border-[#E7E1D8]/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="font-serif font-bold text-[#1C1917] text-[clamp(1.875rem,3.5vw,2.25rem)] leading-tight mb-4">
            Zo ziet het eruit
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            Geen pop-up, geen video, geen pagina die je eerst moet wegklikken. Kies een platform en
            bekijk waar de advertentie landt.
          </p>
        </div>

        {/* Signature component — blijft zoals hij is */}
        <InteractiveSimulator />

        {/* Tekstuele tegenhanger: dezelfde informatie, in de HTML */}
        <p className="mt-5 mx-auto max-w-2xl text-sm leading-relaxed text-[#78716C] text-center">
          Wat je hierboven ziet: een chatvenster van ChatGPT, Claude of Gemini waarin je zojuist een
          vraag hebt gesteld. In de lege ruimte onder je eigen bericht verschijnt één tekstregel met
          een advertentie, met rechts een kruisje om hem te sluiten. Zodra het antwoord er staat,
          verdwijnt de regel.
        </p>

        {/* Wel / niet */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E7E1D8] rounded-2xl overflow-hidden border border-[#E7E1D8]">
          <div className="bg-white p-7 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-5">Wat je krijgt</h3>
            <ul className="space-y-3.5">
              {showsUp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-[#57534E] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FAF8F5] p-7 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
              Wat ik nooit accepteer
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed mb-5">
              Promptkoffie is een eenmanszaak, dus dit is gewoon mijn eigen keuze. Deze categorieën
              koop je bij mij niet, ook niet als het goed betaalt.
            </p>
            <ul className="space-y-3">
              {neverShowsUp.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-md bg-white border border-[#E7E1D8] text-[#A8A29E] flex items-center justify-center shrink-0">
                    <X className="w-3 h-3" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-[#1C1917]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
