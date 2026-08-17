import React, { useState } from 'react';
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
        'Promptkoffie werkt met een 50/50-split: de helft van de advertentie-opbrengst die jouw AI-gebruik oplevert, komt terug op jouw rekening. Hoeveel dat in euro\'s wordt hangt af van hoe vaak je AI-tools gebruikt — we delen zodra we live gaan concrete voorbeelden.',
    },
    {
      category: 'privacy',
      question: 'Leest de extensie mijn vertrouwelijke prompts of huiswerkopdrachten?',
      answer:
        'Absoluut niet. Onze extensie is blind voor alle tekstinhoud. We kijken uitsluitend naar het status-element van het antwoordvenster om te detecteren dat de AI aan het laden is. Er wordt nul tekst verzonden naar onze servers.',
    },
    {
      category: 'gebruikers',
      question: 'Hoe krijg ik mijn aandeel uitbetaald?',
      answer:
        'Je aandeel wordt automatisch bijgehouden en staat op jouw naam — je hoeft nergens op te klikken om het op te bouwen. Bèta-testers krijgen als eersten bericht zodra de uitbetaalopties klaarstaan.',
    },
    {
      category: 'gebruikers',
      question: 'Vertraagt de extensie mijn AI of browser?',
      answer:
        'Nee. De extensie grijpt niet in op het genereren van het antwoord en voegt niets toe aan de laadtijd. Ze kijkt alleen of het antwoordvenster nog aan het laden is, en de banner verdwijnt zodra het antwoord er staat.',
    },
    {
      category: 'gebruikers',
      question: 'Op welke browsers werkt Promptkoffie?',
      answer: 'Promptkoffie is ontworpen voor Google Chrome en Microsoft Edge.',
    },
  ];

  const visibleFaqs = faqs
    .map((faq, idx) => ({ faq, idx }))
    .filter(({ faq }) => activeCategory === 'alles' || faq.category === activeCategory);

  return (
    <section className="px-6 sm:px-[72px] py-14 sm:py-[84px] border-b-[1.5px] border-ink bg-cream">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <h2 className="font-bold text-[30px] sm:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-[24ch]">
          Alles wat je wilt weten over Promptkoffie
        </h2>
        <div className="flex flex-wrap gap-2 font-mono text-[12.5px]">
          {(Object.keys(categoryLabels) as (FAQItem['category'] | 'alles')[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-3.5 py-2 border-[1.5px] border-ink transition-colors ${
                activeCategory === cat ? 'bg-purple text-white' : 'bg-white text-ink hover:bg-tint'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t-[1.5px] border-ink">
        {visibleFaqs.map(({ faq, idx }, i) => {
          const isOpen = openIndex === idx;
          const isLast = i === visibleFaqs.length - 1;
          return (
            <div
              key={idx}
              className={`${isOpen ? 'py-6' : 'py-[22px]'} ${!isLast || isOpen ? 'border-b-[1.5px]' : ''} ${
                isOpen ? 'border-ink' : 'border-hairline'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-center justify-between gap-6 text-left"
              >
                <h3
                  className={
                    isOpen
                      ? 'text-[21px] font-bold tracking-[-0.015em]'
                      : 'text-xl font-medium'
                  }
                >
                  {faq.question}
                </h3>
                <span className="text-[22px] font-bold text-purple shrink-0" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <p
                  id={`faq-answer-${idx}`}
                  className="mt-3.5 text-[16.5px] leading-[1.6] text-body max-w-[78ch]"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
