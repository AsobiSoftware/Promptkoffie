import React from 'react';
import { Loader2 } from 'lucide-react';
import { Header } from '../components/Header';
import { SlimFooter } from '../components/SlimFooter';
import { useAdvertiserSignup } from '../hooks/useAdvertiserSignup';

/**
 * /adverteerders/ — content is een voorstel (zie design_handoff-README), de
 * layout is definitief en pixel-precies overgenomen uit de handoff.
 *
 * De ad-regel-mock hieronder is puur presentatie (statisch); het echte
 * gedrag zit in InteractiveSimulator.tsx en blijft ongewijzigd.
 */

const valueCards = [
  {
    title: '100% gefocuste aandacht',
    description: 'Geen ad-fatigue op social media, maar een exclusieve micro-banner tijdens actief AI-gebruik.',
  },
  {
    title: 'Hoge employer branding',
    description: 'Perfect voor IT-recruitment, e-commerce, tools en consumentenmerken met een jong, digitaal publiek.',
  },
  {
    title: 'Blijvende waardering',
    description: 'Gebruikers waarderen jouw merk omdat jij hun dagelijkse kop koffie mede-financiert.',
  },
];

const specs = [
  { label: 'Plaatsing', value: 'Onder het bericht van de gebruiker' },
  { label: 'Duur', value: '3–8 seconden, tot het antwoord er staat' },
  { label: 'Targeting', value: 'Geanonimiseerde wachttijd-impressies' },
  { label: 'Platformen', value: 'ChatGPT, Claude, Gemini' },
];

export default function Adverteerders() {
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
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      <Header isHomePage={false} activePage="adverteerders" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-blue text-white px-6 sm:px-[72px] py-14 sm:py-[76px] border-b-[1.5px] border-ink">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-[#cfe9fb] mb-3">
            Voor adverteerders
          </p>
          <h1 className="font-bold text-[38px] sm:text-[62px] leading-[0.98] tracking-[-0.035em] max-w-[26ch] mb-5">
            De 3 tot 8 seconden waarin niemand wegkijkt.
          </h1>
          <p className="text-lg sm:text-[19px] leading-[1.55] text-[#e4f3fd] max-w-[52ch]">
            Bereik actieve studenten, starters en jonge professionals precies wanneer hun oog
            gefocust is op het scherm: de wachttijd op AI-generaties.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-11">
            {valueCards.map((card) => (
              <div key={card.title} className="bg-white text-ink border-[1.5px] border-ink px-6 py-[26px]">
                <h3 className="text-[19px] font-bold mb-2">{card.title}</h3>
                <p className="text-[15.5px] leading-[1.55] text-body">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Het formaat + kit-formulier */}
        <section className="grid grid-cols-1 min-[1100px]:grid-cols-2 border-b-[1.5px] border-ink">
          <div className="px-6 sm:px-[72px] min-[1100px]:pr-14 py-14 min-[1100px]:py-[72px] border-b-[1.5px] min-[1100px]:border-b-0 min-[1100px]:border-r-[1.5px] border-ink bg-cream">
            <h2 className="font-bold text-[30px] sm:text-[38px] leading-[1.05] tracking-[-0.03em] mb-7">
              Het formaat
            </h2>

            <div className="bg-white border-[1.5px] border-ink shadow-[6px_6px_0_#0D8FDD] p-[22px]">
              <div className="border-[1.5px] border-purple bg-yellow px-3.5 py-[11px] flex items-center gap-3">
                <span className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase bg-ink text-yellow px-1.5 py-0.5">
                  Ad
                </span>
                <span className="flex-1 text-sm font-medium text-ink">
                  Jouw regel, hier, tijdens het wachten.
                </span>
                <span className="text-base font-bold text-ink" aria-hidden="true">×</span>
              </div>
            </div>

            <div className="mt-[26px] flex flex-col">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between py-3.5 text-base ${i < specs.length - 1 ? 'border-b border-hairline' : ''}`}
                >
                  <span className="text-body">{spec.label}</span>
                  <strong>{spec.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div id="kit" className="px-6 sm:pl-14 sm:pr-[72px] py-14 min-[1100px]:py-[72px] bg-tint">
            <h2 className="text-2xl sm:text-[30px] leading-[1.1] tracking-[-0.025em] font-bold mb-2">
              Vraag de Promptkoffie Adverteerders-kit aan
            </h2>
            <p className="text-base leading-[1.55] text-body mb-6">
              Vul je zakelijke e-mailadres in. Wij sturen je direct tarieven en bereikmogelijkheden.
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <label className="sr-only" htmlFor="kit-email">Zakelijk e-mailadres</label>
              <input
                id="kit-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Zakelijk e-mailadres *"
                className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[14px] font-mono text-[13.5px] text-ink placeholder:text-placeholder focus:outline-none"
              />
              <label className="sr-only" htmlFor="kit-company">Bedrijfsnaam</label>
              <input
                id="kit-company"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Bedrijfsnaam"
                className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[14px] font-mono text-[13.5px] text-ink placeholder:text-placeholder focus:outline-none"
              />
              <label className="sr-only" htmlFor="kit-contact">Naam contactpersoon</label>
              <input
                id="kit-contact"
                type="text"
                required
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                placeholder="Naam contactpersoon *"
                className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[14px] font-mono text-[13.5px] text-ink placeholder:text-placeholder focus:outline-none"
              />
              <label className="sr-only" htmlFor="kit-sector">Sector</label>
              <select
                id="kit-sector"
                required
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="bg-white border-[1.5px] border-ink rounded-none px-4 py-[14px] font-mono text-[13.5px] text-ink focus:outline-none"
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
                className="mt-1.5 bg-blue border-[1.5px] border-ink rounded-none py-[15px] px-4 text-center text-[15px] font-bold text-white shadow-[3px_3px_0_#241a33] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#241a33] transition-[transform,box-shadow] duration-150 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
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
                className={`mt-4 px-3.5 py-3 font-mono text-xs border-[1.5px] bg-white ${status.success ? 'border-green text-green' : 'border-pink text-pink'
                  }`}
              >
                {status.message}
              </div>
            )}

            <p className="mt-5 font-mono text-[12.5px] text-muted">

            </p>
          </div>
        </section>
      </main>

      <SlimFooter page="adverteerders" />
    </div>
  );
}
