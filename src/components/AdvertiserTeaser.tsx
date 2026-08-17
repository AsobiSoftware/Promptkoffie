import React from 'react';
import { Loader2 } from 'lucide-react';
import { useAdvertiserSignup } from '../hooks/useAdvertiserSignup';

const valueProps = [
  {
    title: '100% gefocuste aandacht.',
    description:
      'Geen ad-fatigue op social media, maar een exclusieve micro-banner tijdens actief AI-gebruik.',
  },
  {
    title: 'Hoge employer branding & conversion.',
    description:
      'Perfect voor IT-recruitment, e-commerce, tools en fysieke consumentenmerken gericht op een jong, digitaal publiek.',
  },
  {
    title: 'Ethische en blijvende waardering.',
    description: 'Gebruikers waarderen jouw merk omdat jij hun dagelijkse kop koffie mede-financiert.',
  },
];

export const AdvertiserTeaser: React.FC = () => {
  const {
    email, setEmail,
    companyName, setCompanyName,
    contactPerson, setContactPerson,
    sector, setSector,
    loading,
    status,
    handleSubmit,
  } = useAdvertiserSignup();

  return (
    <section id="adverteren" className="scroll-mt-20 px-6 sm:px-[72px] py-14 sm:py-[84px] border-b-[1.5px] border-ink bg-cream">
      <div className="grid grid-cols-1 min-[1100px]:grid-cols-[1.1fr_1fr] gap-10 min-[1100px]:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-blue mb-2.5">
            Voor adverteerders
          </p>
          <h2 className="font-bold text-[32px] sm:text-[46px] leading-[1.03] tracking-[-0.03em] max-w-[24ch] mb-5">
            Interesse om te adverteren?
          </h2>
          <p className="text-[17.5px] leading-[1.55] text-body max-w-[46ch] mb-[30px]">
            Bereik actieve studenten, starters en jonge professionals precies wanneer hun oog
            gefocust is op het scherm: <strong className="text-ink">de 3 tot 8 seconden wachttijd op AI-generaties</strong>.
          </p>
          <div className="flex flex-col gap-4">
            {valueProps.map((v) => (
              <div key={v.title} className="border-l-[3px] border-blue py-1 pl-[18px] text-[16.5px] leading-[1.5] text-body">
                <strong className="text-ink">{v.title}</strong> {v.description}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue border-[1.5px] border-ink px-6 sm:px-8 py-[34px] shadow-[6px_6px_0_#241a33]">
          <h3 className="text-2xl leading-[1.15] tracking-[-0.02em] font-bold text-white mb-2">
            Vraag de Promptkoffie Adverteerders-kit aan
          </h3>
          <p className="text-sm leading-[1.5] text-[#dff0fc] mb-6">
            Vul je zakelijke e-mailadres in. Wij sturen je direct tarieven en bereikmogelijkheden.
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
            <label className="sr-only" htmlFor="adv-email">Zakelijk e-mailadres</label>
            <input
              id="adv-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Zakelijk e-mailadres *"
              className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[13px] font-mono text-[13.5px] text-ink placeholder:text-placeholder focus:outline-none"
            />
            <label className="sr-only" htmlFor="adv-company">Bedrijfsnaam</label>
            <input
              id="adv-company"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Bedrijfsnaam"
              className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[13px] font-mono text-[13.5px] text-ink placeholder:text-placeholder focus:outline-none"
            />
            <label className="sr-only" htmlFor="adv-contact">Naam contactpersoon</label>
            <input
              id="adv-contact"
              type="text"
              required
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              placeholder="Naam contactpersoon *"
              className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[13px] font-mono text-[13.5px] text-ink placeholder:text-placeholder focus:outline-none"
            />
            <label className="sr-only" htmlFor="adv-sector">Sector</label>
            <select
              id="adv-sector"
              required
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[13px] font-mono text-[13.5px] text-ink focus:outline-none"
            >
              <option value="" disabled>Kies een sector *</option>
              <option value="Bank/financieel">Bank/financieel</option>
              <option value="Studieschuld-herfinanciering">Studieschuld-herfinanciering</option>
              <option value="Budget-app">Budget-app</option>
              <option value="VPN">VPN</option>
              <option value="Productiviteitstool">Productiviteitstool</option>
              <option value="Overig">Overig</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="mt-1.5 bg-yellow border-[1.5px] border-ink rounded-none py-3.5 px-4 text-center text-[15px] font-bold text-ink shadow-[3px_3px_0_#241a33] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#241a33] transition-[transform,box-shadow] duration-150 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
              ) : (
                'Ontvang Adverteerders-kit'
              )}
            </button>
          </form>

          {status && (
            <div
              role="alert"
              aria-live="polite"
              className={`mt-4 px-3.5 py-3 font-mono text-xs border-[1.5px] bg-white ${
                status.success ? 'border-green text-green' : 'border-pink text-pink'
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
