import React, { useState } from 'react';
import { Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { UserSignupPayload, SignupResponse } from '../types';
import { InteractiveSimulator } from './InteractiveSimulator';

export const Hero: React.FC = () => {
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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#FAF8F5]">
      {/* Background soft glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-700/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.12] mb-5 font-serif">
            Verdien terwijl de <span className="text-[#B45309] underline decoration-[#FDE68A] underline-offset-4">AI</span> je antwoord typt
          </h1>

          {/* Core Value Proposition */}
          <p className="text-base sm:text-lg text-[#57534E] font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Promptkoffie toont 1 regel advertenties in je scherm terwijl je wacht op je antwoord — zonder ooit mee te lezen — en deelt de opbrengst eerlijk met jou.
          </p>

          {/* Interactive Simulator + los, opvallend inschrijfformulier eronder */}
          <div id="demo" className="mb-8 text-left">
            <InteractiveSimulator />

            <div className="mt-4 max-w-2xl mx-auto bg-white border-2 border-[#B45309]/30 rounded-2xl shadow-xl p-4 sm:p-5">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2.5">
                <label htmlFor="hero-email" className="sr-only">
                  E-mailadres
                </label>
                <input
                  id="hero-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jouw.naam@email.nl"
                  className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-[#E7E1D8] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#B45309] hover:bg-amber-600 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70 whitespace-nowrap shrink-0"
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

              {status && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`mt-3 px-3 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2 ${
                    status.success
                      ? 'bg-amber-50 border border-amber-200 text-amber-800'
                      : 'bg-rose-50 border border-rose-200 text-rose-800'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <p>{status.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
