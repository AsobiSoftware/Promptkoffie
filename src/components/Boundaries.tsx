import React from 'react';

const showsUp = [
  'Één regel, onder je eigen bericht, terwijl het antwoord binnenkomt.',
  'Bij elke prompt — en met één klik op het kruisje weer weg.',
  'Verdwijnt vanzelf zodra je antwoord klaar is.',
];

const neverShowsUp = ['Gokken en kansspelen', 'Roken en vapes', 'Religieuze werving', 'Leningen en krediet'];

export const Boundaries: React.FC = () => {
  return (
    <section id="grenzen" className="scroll-mt-20 grid grid-cols-1 min-[1100px]:grid-cols-2 border-b-[1.5px] border-ink">
      <div className="px-6 sm:px-[72px] min-[1100px]:pr-14 py-14 min-[1100px]:py-[76px] border-b-[1.5px] min-[1100px]:border-b-0 min-[1100px]:border-r-[1.5px] border-ink bg-cream">
        <p className="font-mono text-xs tracking-[0.1em] uppercase text-purple mb-2.5">
          Wat je krijgt
        </p>
        <h2 className="font-bold text-[32px] sm:text-[40px] leading-[1.05] tracking-[-0.03em] mb-[30px]">
          Dit is waar de grens ligt.
        </h2>
        <div className="flex flex-col">
          {showsUp.map((item, i) => (
            <div
              key={item}
              className={`flex gap-3.5 py-4 text-[16.5px] leading-[1.5] border-t-[1.5px] ${i === 0 ? 'border-ink' : 'border-hairline'
                }`}
            >
              <span className="text-green font-bold shrink-0">+</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 sm:pl-14 sm:pr-[72px] py-14 min-[1100px]:py-[76px] bg-tint">
        <p className="font-mono text-xs tracking-[0.1em] uppercase text-pink mb-2.5">
          Wat ik nooit accepteer
        </p>
        <h2 className="font-bold text-[32px] sm:text-[40px] leading-[1.05] tracking-[-0.03em] mb-5">
          Vier categorieën krijg je bij mij niet.
        </h2>
        <p className="text-base leading-[1.55] text-body max-w-[40ch] mb-7">
          Promptkoffie is een eenmanszaak, dus dit is gewoon mijn eigen keuze. Ook niet als het
          goed betaalt.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {neverShowsUp.map((item) => (
            <div
              key={item}
              className="border-[1.5px] border-pink bg-white px-[18px] py-4 text-base font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
