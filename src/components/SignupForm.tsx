import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { UserSignupPayload, SignupResponse } from '../types';

/**
 * Het enige interactieve eiland in de hero en de wachtlijst-sectie.
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
}

export const SignupForm: React.FC<SignupFormProps> = ({ formId = 'wachtlijst' }) => {
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
    <div className="w-full max-w-[470px]">
      <form
        action="/api/signup/user"
        method="post"
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col sm:flex-row"
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
          placeholder="jij@voorbeeld.nl"
          className="flex-1 min-w-0 border-[1.5px] border-ink border-b-0 sm:border-b-[1.5px] sm:border-r-0 bg-white px-[18px] py-[15px] font-mono text-sm text-ink placeholder:text-placeholder rounded-none focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 bg-yellow border-[1.5px] border-ink px-[22px] py-[15px] text-[15px] font-bold text-ink whitespace-nowrap shadow-[3px_3px_0_#241a33] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#241a33] transition-[transform,box-shadow] duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin motion-reduce:animate-none mx-auto" aria-hidden="true" />
          ) : (
            'Zet me op de wachtlijst'
          )}
        </button>
      </form>

      {status && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-3 px-3.5 py-3 font-mono text-xs border-[1.5px] ${
            status.success ? 'border-green text-green bg-white' : 'border-pink text-pink bg-white'
          }`}
        >
          <p className="font-semibold">{status.message}</p>
          {status.success && status.totalUsers ? (
            <p className="mt-1 tabular-nums">Je staat op plek {status.totalUsers} in de rij.</p>
          ) : null}
        </div>
      )}
    </div>
  );
};
