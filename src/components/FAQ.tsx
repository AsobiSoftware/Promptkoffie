import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const categoryLabels: Record<FAQItem['category'] | 'alles', string> = {
  alles: 'Alles',
  gebruikers: 'Gebruikers',
  privacy: 'Privacy',
  adverteerders: 'Adverteerders',
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<FAQItem['category'] | 'alles'>('alles');

  const faqs: FAQItem[] = [
    {
      category: 'gebruikers',
      question: 'Hoeveel kan ik exact verdienen per maand?',
      answer:
        'Promptkoffie levert een realistisch extraatje: een deel van de advertentie-opbrengst die jouw AI-gebruik oplevert, komt terug op jouw rekening. Hoeveel dat precies wordt hangt af van hoe vaak je AI-tools gebruikt — we delen zodra we live gaan concrete voorbeelden.',
    },
    {
      category: 'privacy',
      question: 'Leest de extensie mijn vertrouwelijke prompts of huiswerk opdrachten?',
      answer:
        'Absoluut niet. Onze extensie is blind voor alle tekstinhoud. We kijken uitsluitend naar het status-element van het antwoordvenster om te detecteren dat de AI aan het laden is. Er wordt nul tekst verzonden naar onze servers.',
    },
    {
      category: 'gebruikers',
      question: 'Hoe werkt de uitbetaling aan het eind van de maand?',
      answer:
        'Je spaarsaldo wordt automatisch bijgehouden. Op de eerste dag van de nieuwe maand ontvang je het opgespaarde bedrag rechtstreeks op je Nederlandse bankrekening.',
    },
    {
      category: 'gebruikers',
      question: 'Vertraagt de extensie mijn AI of browser?',
      answer:
        'Nee. De extensie is ultra-lichtgewicht (< 50 KB) en beïnvloedt de generatiesnelheid van de AI op geen enkele manier. De banner verdwijnt automatisch zodra het antwoord klaar is.',
    },
    {
      category: 'adverteerders',
      question: 'Op welke browsers werkt Promptkoffie?',
      answer:
        'Promptkoffie is ontworpen voor Google Chrome en Microsoft Edge.',
    },
  ];

  const visibleFaqs = faqs
    .map((faq, idx) => ({ faq, idx }))
    .filter(({ faq }) => activeCategory === 'alles' || faq.category === activeCategory);

  return (
    <section className="py-20 bg-white border-b border-[#E7E1D8]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4 font-serif">
            Alles wat je wilt weten over Promptkoffie
          </h2>
          <p className="text-base text-[#57534E]">
            Transparant over privacy, verdiensten en hoe het achter de schermen werkt.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(Object.keys(categoryLabels) as (FAQItem['category'] | 'alles')[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1C1917] text-white border-[#1C1917]'
                  : 'bg-white text-[#57534E] border-[#E7E1D8] hover:border-[#B45309]/40'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {visibleFaqs.map(({ faq, idx }) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#E7E1D8] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-[#1C1917] hover:text-[#B45309] transition-colors cursor-pointer"
                >
                  <span className="text-base font-serif">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B45309] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-5 pt-1 text-sm text-[#57534E] leading-relaxed border-t border-[#E7E1D8]/40 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
