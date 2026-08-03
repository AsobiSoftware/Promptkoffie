import React, { useState } from 'react';
import { Coffee, ArrowRight, CheckCircle2, Loader2, Sparkles, Gift } from 'lucide-react';
import { UserSignupPayload, SignupResponse } from '../types';

export const UserSignupCTA: React.FC = () => {
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
    <section id="inschrijven" className="py-20 bg-gradient-to-b from-white to-[#FAF8F5] border-b border-[#E7E1D8]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border-2 border-[#B45309]/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-bold mb-6">
            <Gift className="w-4 h-4 text-[#B45309]" />
            <span>100% Gratis & Vrijblijvend</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1917] font-serif mb-4 leading-tight">
            Word bèta-tester en verdien direct jouw eerste kop koffie.
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] max-w-2xl mx-auto mb-8">
            Laat je e-mailadres achter en krijg als eerste toegang tot de Chrome & Edge extensie zodra de bèta opent. Geen spam, uitsluitend updates over je uitbetaling.
          </p>

          {/* User Form */}
          <form onSubmit={handleSubmit} noValidate className="max-w-lg mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-2.5 p-2 bg-white border border-[#E7E1D8] rounded-2xl shadow-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Vul hier je e-mailadres in..."
                className="flex-1 px-4 py-3 rounded-xl text-sm text-[#1C1917] placeholder:text-[#A8A29E] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#B45309]/30"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#B45309] hover:bg-[#92400E] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70 whitespace-nowrap"
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
            </div>
          </form>

          {/* Feedback message */}
          {status && (
            <div
              className={`mt-6 p-4 rounded-xl text-xs sm:text-sm font-medium max-w-lg mx-auto flex items-start gap-2.5 text-left ${
                status.success
                  ? 'bg-amber-100/80 border border-amber-300 text-amber-950'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{status.message}</p>
                {status.totalUsers && (
                  <p className="text-xs text-[#78350F] mt-1 font-semibold">
                    🎉 Bèta wachtlijst nummer: #{status.totalUsers}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Bullet highlights */}
          <div className="mt-8 pt-6 border-t border-[#E7E1D8] flex flex-wrap items-center justify-center gap-6 text-xs text-[#78716C]">
            <span>✓ Geen verplichte kliks</span>
            <span>✓ 100% Onschadelijk voor browser-snelheid</span>
            <span>✓ Maandelijks op je bank</span>
          </div>
        </div>
      </div>
    </section>
  );
};
