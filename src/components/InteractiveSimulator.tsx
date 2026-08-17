import React, { useState } from 'react';

/**
 * De "chatmock" — het bewijs in de rechterkolom van de hero. Toont hoe de
 * ad-regel verschijnt onder je eigen bericht terwijl het antwoord wordt
 * gegenereerd. De platformchips eronder zijn een echte tab-switch (geen
 * aparte mockup per platform meer, één kaart die van prompt/url wisselt).
 */

type PlatformId = 'chatgpt' | 'claude' | 'gemini';

const platforms: Record<PlatformId, { label: string; url: string; prompt: string }> = {
  chatgpt: {
    label: 'ChatGPT',
    url: 'chatgpt.com',
    prompt: 'Schrijf de 3 belangrijkste conclusies uit dit rapport.',
  },
  claude: {
    label: 'Claude',
    url: 'claude.ai',
    prompt: 'Herschrijf deze e-mail in een vriendelijke, professionele toon.',
  },
  gemini: {
    label: 'Gemini',
    url: 'gemini.google.com',
    prompt: 'Geef een kortere samenvatting van dit document.',
  },
};

const platformOrder: PlatformId[] = ['chatgpt', 'claude', 'gemini'];

export const InteractiveSimulator: React.FC = () => {
  const [platform, setPlatform] = useState<PlatformId>('chatgpt');
  const active = platforms[platform];

  return (
    <div>
      <p className="mb-[18px] font-mono text-xs tracking-[0.1em] uppercase text-[#c9b3e6]">
        Zo ziet één regel eruit
      </p>

      <div className="bg-white border-[1.5px] border-ink shadow-[8px_8px_0_rgba(20,10,35,0.35)] text-left">
        <div className="flex items-center gap-2 px-4 py-3 border-b-[1.5px] border-ink">
          <span className="w-[11px] h-[11px] border-[1.5px] border-ink rounded-full" />
          <span className="w-[11px] h-[11px] border-[1.5px] border-ink rounded-full" />
          <span className="w-[11px] h-[11px] border-[1.5px] border-ink rounded-full" />
          <span className="ml-3.5 font-mono text-xs text-muted">{active.url}</span>
        </div>

        <div className="px-6 pt-[26px] pb-6">
          <div className="flex justify-end mb-[18px]">
            <div className="bg-tint border-[1.5px] border-ink px-4 py-3 text-[15px] leading-[1.45] max-w-[78%]">
              {active.prompt}
            </div>
          </div>

          <div className="flex items-center gap-3 border-[1.5px] border-purple bg-yellow px-3.5 py-[11px] mb-[18px]">
            <span className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase bg-ink text-yellow px-1.5 py-[3px]">
              Ad
            </span>
            <span className="flex-1 text-sm font-medium leading-[1.35] text-ink">
              Hier komt straks een echte adverteerder te staan.
            </span>
            <span className="text-base font-bold text-ink" aria-hidden="true">
              ×
            </span>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-[12.5px] text-muted">
            <span className="inline-flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-purple [animation:pk-dots_1.2s_infinite]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple [animation:pk-dots_1.2s_.2s_infinite]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple [animation:pk-dots_1.2s_.4s_infinite]" />
            </span>
            Antwoord wordt gegenereerd…
          </div>
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-[1.5] text-[#e6dcf5]">
        Eén regel onder je bericht, met een kruisje om 'm te sluiten. Verdwijnt zodra het antwoord
        er staat.
      </p>

      <div role="tablist" aria-label="Kies een platform" className="flex gap-2.5 mt-[22px]">
        {platformOrder.map((id) => {
          const p = platforms[id];
          const isActive = id === platform;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setPlatform(id)}
              className={`font-mono text-xs px-3 py-1.5 border-[1.5px] transition-colors focus:outline-none ${
                isActive
                  ? 'bg-white text-ink border-white'
                  : 'text-white border-[#a882d9] hover:border-white'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
