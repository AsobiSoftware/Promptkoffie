import React from 'react';
import { Header } from '../components/Header';
import { SlimFooter } from '../components/SlimFooter';

/**
 * /over-ons/ — content is een voorstel (zie design_handoff-README), de
 * layout is definitief en pixel-precies overgenomen uit de handoff.
 */

const principles = [
  {
    title: 'Transparant over cijfers',
    description: 'Zolang er niets verkocht is, staat er €0,00. Geen opgeklopte projecties.',
    shadow: 'shadow-[5px_5px_0_#663399]',
  },
  {
    title: 'Privacy is geen feature',
    description: 'De extensie is blind voor je tekst. De broncode is publiek in te zien.',
    shadow: 'shadow-[5px_5px_0_#009B62]',
  },
  {
    title: 'Gemaakt voor NL',
    description: 'Voor Nederlandse studenten en starters, met Nederlandse adverteerders.',
    shadow: 'shadow-[5px_5px_0_#E5205F]',
  },
];

export default function OverOns() {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      <Header isHomePage={false} activePage="over-ons" />

      <main className="flex-1">
        {/* Split-hero */}
        <section className="grid grid-cols-1 min-[1100px]:grid-cols-[1.15fr_1fr] border-b-[1.5px] border-ink">
          <div className="px-6 sm:px-[72px] min-[1100px]:pr-14 py-14 min-[1100px]:py-[76px] border-b-[1.5px] min-[1100px]:border-b-0 min-[1100px]:border-r-[1.5px] border-ink bg-cream">
            <p className="font-mono text-xs tracking-[0.1em] uppercase text-purple mb-3">Over ons</p>
            <h1 className="font-bold text-[38px] sm:text-[60px] leading-[0.98] tracking-[-0.035em] mb-6">
              Eén persoon, één eerlijke afspraak.
            </h1>
            <p className="text-lg sm:text-[19px] leading-[1.55] text-body max-w-[44ch] mb-5">
              Promptkoffie is een Nederlandse eenmanszaak. Geen investeerders, geen groeidoelen
              die het product duwen richting meer advertenties dan jij wilt zien.
            </p>
            <p className="text-base sm:text-[17px] leading-[1.6] text-body max-w-[46ch]">
              Het idee begon simpel: je wacht dagelijks minuten op AI-antwoorden. Die seconden
              zijn iets waard, en dat geld hoort niet alleen bij het platform terecht te komen.
            </p>
          </div>

          <div className="bg-purple text-white px-6 sm:pl-14 sm:pr-[72px] py-14 min-[1100px]:py-[76px] flex flex-col justify-center gap-[26px]">
            <div className="border-b border-[#8a63bd] pb-[22px]">
              <div className="text-[38px] font-bold tracking-[-0.03em]">50/50</div>
              <p className="mt-1.5 text-[15.5px] leading-[1.5] text-[#e0d2f2]">
                De split staat vast en verandert niet stilletjes.
              </p>
            </div>
            <div className="border-b border-[#8a63bd] pb-[22px]">
              <div className="text-[38px] font-bold tracking-[-0.03em]">0 prompts</div>
              <p className="mt-1.5 text-[15.5px] leading-[1.5] text-[#e0d2f2]">
                Gelezen, opgeslagen of doorverkocht.
              </p>
            </div>
            <div>
              <div className="text-[38px] font-bold tracking-[-0.03em]">4 nee's</div>
              <p className="mt-1.5 text-[15.5px] leading-[1.5] text-[#e0d2f2]">
                Categorieën die hier niet adverteren, ook niet voor goed geld.
              </p>
            </div>
          </div>
        </section>

        {/* Waar we voor staan */}
        <section className="px-6 sm:px-[72px] py-14 sm:py-[76px] border-b-[1.5px] border-ink">
          <h2 className="font-bold text-[32px] sm:text-[40px] leading-[1.05] tracking-[-0.03em] mb-10">
            Waar we voor staan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className={`border-[1.5px] border-ink bg-white px-7 py-[30px] ${p.shadow}`}
              >
                <h3 className="text-[21px] font-bold tracking-[-0.02em] mb-2.5">{p.title}</h3>
                <p className="text-[15.5px] leading-[1.55] text-body">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contactbalk */}
        <section className="bg-tint px-6 sm:px-[72px] py-10 sm:py-14 border-b-[1.5px] border-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-12">
          <div>
            <h2 className="text-2xl sm:text-[32px] tracking-[-0.025em] font-bold mb-2">
              Vragen? Mail gewoon terug.
            </h2>
            <p className="text-base text-body">
              hallo@promptkoffie.nl · Eendrachtlaan 34H, 3526 LB Utrecht
            </p>
          </div>
          <a
            href="/#wachtlijst"
            className="shrink-0 inline-flex items-center gap-2 bg-yellow text-ink text-base font-bold px-[26px] py-[15px] border-[1.5px] border-ink shadow-[3px_3px_0_#241a33] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#241a33] transition-[transform,box-shadow] duration-150 whitespace-nowrap"
          >
            Op de wachtlijst →
          </a>
        </section>
      </main>

      <SlimFooter page="over-ons" />
    </div>
  );
}
