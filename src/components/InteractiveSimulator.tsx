import React, { useState } from 'react';
import { Coffee, X } from 'lucide-react';

/**
 * InteractiveSimulator — herschreven.
 *
 * Drie problemen met de vorige versie, alle drie opgelost door één keuze:
 * één licht thema in plaats van drie authentieke re-creaties.
 *
 * 1. Kleur — ChatGPT-donker, Gemini-lichtblauw en Claude-crème stonden naast
 *    elkaar in een zwarte browserframe. Nu deelt elk platform dezelfde
 *    lichte kaart uit DESIGN.md; alleen het naampje en het accentstipje
 *    wisselen.
 * 2. Gewicht — geen zijbalk-mockup en geen invoerbalk meer. Die voegden
 *    hoogte toe zonder aan de kernvraag te werken: hoe ziet het
 *    advertentiemoment eruit. Van ~340px+ naar een compacte kaart.
 * 3. Geloofwaardigheid — de vorige versie toonde Swapfiets, Bol.com en
 *    Duolingo als lopende advertenties, terwijl HonestStatus vlak daarna
 *    zegt "nog geen advertentie verkocht". Nu een expliciet gelabeld
 *    voorbeeld, en het hardgecodeerde "Koffiesaldo: €1,42" is weg — dat was
 *    hetzelfde soort verzonnen cijfer als averageCupsPerMonth in stats.ts.
 */

type PlatformId = 'chatgpt' | 'claude' | 'gemini';

const platforms: Record<
  PlatformId,
  { label: string; dot: string; url: string; prompt: string; thinking: string }
> = {
  chatgpt: {
    label: 'ChatGPT',
    dot: '#10A37F',
    url: 'chatgpt.com',
    prompt: 'Schrijf de 3 belangrijkste conclusies uit dit rapport.',
    thinking: 'Antwoord wordt gegenereerd',
  },
  claude: {
    label: 'Claude',
    dot: '#DA7756',
    url: 'claude.ai',
    prompt: 'Herschrijf deze e-mail in een vriendelijke, professionele toon.',
    thinking: 'Antwoord wordt gegenereerd',
  },
  gemini: {
    label: 'Gemini',
    dot: '#4285F4',
    url: 'gemini.google.com',
    prompt: 'Geef een kortere samenvatting van dit document.',
    thinking: 'Antwoord wordt gegenereerd',
  },
};

const platformOrder: PlatformId[] = ['chatgpt', 'claude', 'gemini'];

export const InteractiveSimulator: React.FC = () => {
  const [platform, setPlatform] = useState<PlatformId>('chatgpt');
  const active = platforms[platform];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Platformkeuze — één segmented control, geen los gekleurde knoppen per merk */}
      <div
        role="tablist"
        aria-label="Kies een platform"
        className="inline-flex items-center gap-1 mx-auto mb-4 p-1 bg-[#F0EBE1] border border-[#E7E1D8] rounded-xl"
      >
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
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309]/40 ${
                isActive
                  ? 'bg-white text-[#1C1917] shadow-sm'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: p.dot }}
              />
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Kaart — zelfde lichte kaartstijl als de rest van de pagina */}
      <div className="bg-white border border-[#E7E1D8] rounded-2xl shadow-lg overflow-hidden text-left">
        {/* Minimale titelbalk, geen stoplicht-bolletjes */}
        <div className="px-4 py-2.5 bg-[#FAF8F5] border-b border-[#E7E1D8] flex items-center gap-2">
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: active.dot }}
          />
          <span className="font-mono text-xs text-[#78716C]">{active.url}</span>
        </div>

        <div className="p-4 sm:p-5 space-y-3">
          {/* Eigen bericht */}
          <div className="flex justify-end">
            <div className="bg-[#F5F1EA] text-[#1C1917] px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
              {active.prompt}
            </div>
          </div>

          {/* Het advertentiemoment — expliciet gelabeld als voorbeeld */}
          <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5">
            <span className="w-5 h-5 rounded-md bg-gradient-to-br from-[#B45309] to-[#78350F] text-white flex items-center justify-center shrink-0">
              <Coffee className="w-3 h-3" aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-[#92400E] mb-0.5">Voorbeeldadvertenties</p>
              <p className="text-xs text-[#78350F] truncate">
                Zo ziet één regel eruit — hier komt straks een echte adverteerder te staan.
              </p>
            </div>
            <button
              type="button"
              aria-label="Advertentie sluiten"
              className="text-amber-700/60 hover:text-amber-900 rounded shrink-0 transition-colors"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Antwoord wordt gegenereerd */}
          <div className="flex items-center gap-2.5 pt-0.5">
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full animate-pulse motion-reduce:animate-none"
              style={{ backgroundColor: active.dot }}
            />
            <span className="text-xs font-medium text-[#78716C]">{active.thinking}…</span>
          </div>
        </div>
      </div>
    </div>
  );
};
