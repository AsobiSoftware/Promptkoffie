import React, { useState } from 'react';
import { Coffee, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { UserSignupPayload, SignupResponse } from '../types';
import { InteractiveSimulator } from './InteractiveSimulator';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const [email, setEmail] = useState('');
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

    setLoading(true);
    setStatus(null);

    try {
      const payload: UserSignupPayload = { email };
      const res = await fetch('/api/signup/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: SignupResponse = await res.json();
      setStatus(data);
      if (data.success) {
        setEmail('');
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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background soft glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-700/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in duration-500">
            <ShieldCheck className="w-4 h-4 text-[#B45309]" />
            <span>Leest niet mee</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.12] mb-6 font-serif">
            Verdien terwijl de <span className="text-[#B45309] underline decoration-[#FDE68A] underline-offset-4">AI</span> je antwoord typt
          </h1>

          {/* Core Value Proposition (1 clean line) */}
          <p className="text-base sm:text-lg text-[#57534E] font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Promptkoffie toont 1 regel advertenties in je scherm terwijl je wacht op je antwoord en deelt de opbrengst eerlijk met jou.
          </p>

          {/* Interactive Simulator Directly Under Title & Description */}
          <div id="demo" className="mb-12 text-left">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider bg-white border border-[#E7E1D8] px-2.5 py-1 rounded-full">
                Voorbeeld — zo ziet de extensie eruit
              </span>
            </div>
            <InteractiveSimulator embedded={true} />
          </div>

          {/* Fast Signup Form */}
          <div id="hero-signup" className="max-w-md mx-auto mb-6">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2.5 p-1.5 bg-white border border-[#E7E1D8] rounded-2xl shadow-lg shadow-[#1C1917]/5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw.naam@email.nl"
                className="flex-1 px-4 py-3 rounded-xl text-sm text-[#1C1917] placeholder:text-[#A8A29E] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#B45309]/30"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#1C1917] hover:bg-[#B45309] text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-70 whitespace-nowrap"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Schrijf je in</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Response Message */}
            {status && (
              <div
                className={`mt-4 p-3.5 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-2 text-left ${
                  status.success
                    ? 'bg-amber-50 border border-amber-200 text-amber-900'
                    : 'bg-rose-50 border border-rose-200 text-rose-800'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <div>
                  <p>{status.message}</p>
                  {status.totalUsers && (
                    <p className="text-[11px] text-[#78350F] mt-1 font-semibold">
                      🔥 Samen met {status.totalUsers} andere AI-gebruikers op de wachtlijst!
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Privacy & Trust micro badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#78716C]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span><strong>100% Privacy:</strong> Leest nooit je prompts of antwoorden</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-[#B45309]" />
              <span>Maandelijks op je bank</span>
            </div>
          </div>

          {/* Social Proof & Extension Platform Badges */}
          <div className="mt-12 pt-8 border-t border-[#E7E1D8]/60 flex flex-col items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A8A29E]">
              Werkt naadloos op jouw favoriete AI-platforms
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-85">
              <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E7E1D8] text-xs font-semibold text-[#1C1917] flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> ChatGPT
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E7E1D8] text-xs font-semibold text-[#1C1917] flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Gemini
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E7E1D8] text-xs font-semibold text-[#1C1917] flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span> Claude
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E7E1D8] text-xs font-semibold text-[#1C1917] flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-cyan-600"></span> Perplexity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
