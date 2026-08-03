import React, { useState } from 'react';
import { Building2, ArrowRight, CheckCircle2, Loader2, Sparkles, Target, Zap, ShieldCheck } from 'lucide-react';
import { BusinessSignupPayload, SignupResponse } from '../types';

export const AdvertiserCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [sector, setSector] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SignupResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setStatus({
        success: false,
        message: 'Vul a.u.b. een geldig e-mailadres in.',
      });
      return;
    }

    if (!contactPerson.trim()) {
      setStatus({
        success: false,
        message: 'Vul a.u.b. een naam voor de contactpersoon in.',
      });
      return;
    }

    if (!sector) {
      setStatus({
        success: false,
        message: 'Kies a.u.b. een sector.',
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const payload: BusinessSignupPayload = {
        email,
        companyName,
        contactPerson,
        sector,
      };

      const res = await fetch('/api/signup/business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: SignupResponse = await res.json();
      setStatus(data);
      if (data.success) {
        setEmail('');
        setCompanyName('');
        setContactPerson('');
        setSector('');
      }
    } catch (err) {
      setStatus({
        success: false,
        message: 'Er is een fout opgetreden. Probeer het opnieuw.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="adverteren" className="py-20 bg-[#1C1917] text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B45309]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Voor Bedrijven & Adverteerders</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
              Interesse om te adverteren?
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Bereik actieve studenten, starters en jonge professionals precies wanneer hun oog gefocust is op het scherm: <strong>de 3 tot 8 seconden wachttijd op AI-generaties</strong>.
            </p>

            {/* Value Props Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">100% Gefocuste Aandacht</h3>
                  <p className="text-xs text-stone-400 mt-0.5">Geen ad-fatigue op social media, maar een exclusieve micro-banner tijdens actief AI-gebruik.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Hoge Employer Branding & Conversion</h3>
                  <p className="text-xs text-stone-400 mt-0.5">Perfect voor IT-recruitment, e-commerce, tools en fysieke consumentenmerken gericht op een jong, digitaal publiek.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Ethische en Blijvende Waardering</h3>
                  <p className="text-xs text-stone-400 mt-0.5">Gebruikers waarderen jouw merk omdat jij hun dagelijkse kop koffie mede-financiert.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Box Column */}
          <div className="lg:col-span-6 bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold font-serif mb-2 text-white">
              Vraag de Promptkoffie Adverteerders-kit aan
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Vul je zakelijke e-mailadres in. Wij sturen je direct tarieven en bereikmogelijkheden.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                  Zakelijk e-mailadres *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="naam@bedrijf.nl"
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Bijv. Coolblue, ASML, Swapfiets..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                  Naam contactpersoon *
                </label>
                <input
                  type="text"
                  required
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="Bijv. Jan Jansen"
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                  Sector *
                </label>
                <select
                  required
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="" disabled>Kies een sector</option>
                  <option value="Bank/financieel">Bank/financieel</option>
                  <option value="Studieschuld-herfinanciering">Studieschuld-herfinanciering</option>
                  <option value="Budget-app">Budget-app</option>
                  <option value="VPN">VPN</option>
                  <option value="Productiviteitstool">Productiviteitstool</option>
                  <option value="Overig">Overig</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#B45309] hover:bg-amber-600 text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Ontvang Adverteerders-kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {status && (
              <div
                role="alert"
                aria-live="polite"
                className={`mt-4 p-3.5 rounded-xl text-xs font-medium flex items-start gap-2.5 ${
                  status.success
                    ? 'bg-amber-950/80 border border-amber-500/40 text-amber-200'
                    : 'bg-rose-950/80 border border-rose-500/40 text-rose-200'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>{status.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
