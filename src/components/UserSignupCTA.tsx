import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { UserSignupPayload, SignupResponse } from '../types';

const receiptLines: { label: string; value: string }[] = [
  { label: 'Inschrijving wachtlijst', value: '€ 0,00' },
  { label: 'Verplichte kliks', value: 'geen' },
  { label: 'Impact op browsersnelheid', value: 'geen' },
  { label: 'Uitbetaling', value: 'maandelijks' },
];

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
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="receipt-edge bg-white border border-[#E7E1D8] shadow-xl relative overflow-hidden text-center pt-8 px-6 sm:px-8 pb-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1917] font-serif mb-3 leading-tight relative z-10">
            Word bèta-tester en verdien direct jouw eerste kop koffie.
          </h2>

          <p className="text-sm text-[#57534E] max-w-sm mx-auto mb-6 relative z-10">
            Laat je e-mailadres achter en krijg als eerste toegang zodra de bèta opent.
          </p>

          {/* Bonregels */}
          <div className="relative z-10 text-left mb-6 border-t border-b border-dashed border-[#D6CFC2] py-4">
            {receiptLines.map((line) => (
              <div key={line.label} className="flex items-baseline gap-2 py-1 text-xs text-[#57534E]">
                <span className="shrink-0">{line.label}</span>
                <span className="flex-1 border-b border-dotted border-[#C9C1B4] translate-y-[-3px]" />
                <span className="font-mono tabular-nums shrink-0 text-[#1C1917]">{line.value}</span>
              </div>
            ))}
            <div className="flex items-baseline gap-2 pt-2 mt-1 border-t border-[#E7E1D8] text-sm font-bold text-[#1C1917]">
              <span className="shrink-0">Totaal vandaag</span>
              <span className="flex-1" />
              <span className="font-mono tabular-nums shrink-0">€ 0,00 · vrijblijvend</span>
            </div>
          </div>

          {/* User Form */}
          <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-3">
            <label htmlFor="usersignup-email" className="sr-only">
              E-mailadres
            </label>
            <input
              id="usersignup-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vul hier je e-mailadres in..."
              className="w-full px-4 py-3 rounded-xl text-sm text-[#1C1917] placeholder:text-[#A8A29E] bg-[#FAF8F5] border border-[#E7E1D8] focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 text-center"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B45309] hover:bg-[#92400E] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
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

          {/* Feedback message */}
          {status && (
            <div
              role="alert"
              aria-live="polite"
              className={`mt-4 p-3.5 rounded-xl text-xs font-medium relative z-10 flex items-start gap-2.5 text-left ${
                status.success
                  ? 'bg-amber-100/80 border border-amber-300 text-amber-950'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
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
        </div>
      </div>
    </section>
  );
};
