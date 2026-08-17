import React from 'react';

const points = [
  {
    title: 'Geen prompts of antwoorden gelezen',
    description:
      'Promptkoffie heeft GEEN toegang tot de inhoud van je chats, vragen of de gegenereerde AI-antwoorden. Onze extensie is blind voor de tekst.',
  },
  {
    title: 'Uitsluitend status-detectie',
    description:
      'We meten alleen of de AI momenteel aan het typen is (bijv. via de laadindicator in het scherm) om de ad-overlay veilig te activeren.',
  },
  {
    title: 'Geen verkoop van je gegevens',
    description:
      'We verzamelen geen persoonlijke zoekprofielen. Adverteerders kopen alleen geanonimiseerde wachttijd-impressies zonder jouw identiteit.',
  },
];

export const PrivacyTrust: React.FC = () => {
  return (
    <section
      id="privacy"
      className="scroll-mt-20 bg-green text-white px-6 sm:px-[72px] py-14 sm:py-[84px] border-b-[1.5px] border-ink"
    >
      <div className="grid grid-cols-1 min-[1100px]:grid-cols-[1fr_1.15fr] gap-10 min-[1100px]:gap-16 items-start">
        <div>
          <h2 className="font-bold text-[32px] sm:text-[46px] leading-[1.03] tracking-[-0.03em] mb-5">
            Jouw studie- en werkprompts blijven 100% privé.
          </h2>
          <p className="text-[17px] leading-[1.55] text-[#d3f2e4] max-w-[38ch] mb-[26px]">
            We snappen dat je AI gebruikt voor vertrouwelijke verslagen, code of zakelijke
            berichten. Daarom is Promptkoffie gebouwd met een strikte privacy-garantie.
          </p>
          <div className="flex flex-col gap-2.5 font-mono text-[13px]">
            <span className="border-[1.5px] border-[#7fd3b1] px-3.5 py-2.5 inline-block w-fit">
              Geen tekst verlaat je browser
            </span>
            <span className="border-[1.5px] border-[#7fd3b1] px-3.5 py-2.5 inline-block w-fit">
              Broncode publiek in te zien
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[18px]">
          {points.map((p) => (
            <div key={p.title} className="bg-white text-ink border-[1.5px] border-ink px-6 sm:px-[26px] py-6">
              <h3 className="text-[19px] font-bold tracking-[-0.015em] mb-2">{p.title}</h3>
              <p className="text-[15.5px] leading-[1.55] text-body">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
