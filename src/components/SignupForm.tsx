import React, { useState } from 'react';
import { Loader2, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { UserSignupPayload, SignupResponse } from '../types';

/**
 * Het enige interactieve eiland in de hero.
 *
 * Het <form> heeft een echte action + method, zodat het ook werkt wanneer er
 * geen JS draait (en zodat de markup betekenisvol is voor crawlers en agents).
 * De JS-handler is een verrijking: hij vangt de submit af en toont de status
 * inline in plaats van weg te navigeren.
 *
 * Het endpoint /api/signup/user accepteert naast JSON ook
 * application/x-www-form-urlencoded en redirect in dat geval naar /bedankt.
 */

interface SignupFormProps {
  /** Onderscheidt meerdere formulieren op één pagina (label-id's moeten uniek zijn). */
  formId?: string;
  /** Compacte variant voor smallere containers. */
  size?: 'default' | 'compact';
}

export const SignupForm: React.FC<SignupFormProps> = ({
  formId = 'wachtlijst',
  size = 'default',
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SignupResponse | null>(null);

  const inputId = `${formId}-email`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setStatus({
        success: false,
        message: 'Dit e-mailadres klopt nog niet. Controleer het en probeer het opnieuw.',
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const payload: UserSignupPayload = { email: trimmed };
      const res = await fetch('/api/signup/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: SignupResponse = await res.json();
      setStatus(data);
      if (data.success) setEmail('');
    } catch (err) {
      setStatus({
        success: false,
        message: 'De inschrijving kwam niet door. Probeer het over een moment nog eens.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        action="/api/signup/user"
        method="post"
        onSubmit={handleSubmit}
        noValidate
        className={`flex flex-col sm:flex-row gap-2.5 ${
          size === 'compact' ? '' : 'bg-white border border-[#E7E1D8] rounded-2xl shadow-lg p-2.5'
        }`}
      >
        <label htmlFor={inputId} className="sr-only">
          E-mailadres
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jouw@email.nl"
          aria-describedby={`${formId}-toelichting`}
          className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-transparent text-base sm:text-sm text-[#1C1917] placeholder:text-[#A8A29E] border border-transparent focus:outline-none focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/25"
        />
        <button
          type="submit"
          disabled={loading}
          className="group shrink-0 inline-flex items-center justify-center gap-2 bg-[#B45309] hover:bg-[#92400E] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-md shadow-[#B45309]/20 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B45309]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
          ) : (
            <>
              <span>Zet me op de wachtlijst</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </form>

      {/* Risk reducer — staat altijd in de HTML, ook zonder JS */}
      <p
        id={`${formId}-toelichting`}
        className="mt-3 text-xs text-[#78716C] text-center sm:text-left"
      >
        Gratis · geen account nodig · één mail zodra de bèta opent · uitschrijven met één klik
      </p>

      {status && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-3 flex items-start gap-2.5 px-3.5 py-3 rounded-xl text-xs font-medium text-left ${
            status.success
              ? 'bg-amber-50 border border-[#FDE68A] text-[#78350F]'
              : 'bg-rose-50 border border-rose-200 text-rose-800'
          }`}
        >
          {status.success ? (
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-px text-[#B45309]" aria-hidden="true" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0 mt-px" aria-hidden="true" />
          )}
          <div>
            <p className="font-bold">{status.message}</p>
            {status.success && status.totalUsers ? (
              <p className="mt-1 font-mono tabular-nums text-[#92400E]">
                Je staat op plek {status.totalUsers} in de rij.
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
