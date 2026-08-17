import { useState, type FormEvent } from 'react';
import { BusinessSignupPayload, SignupResponse } from '../types';

/**
 * State + validatie + submit voor het adverteerders-kit-formulier.
 * Gedeeld tussen de homepage-teaser (AdvertiserTeaser) en de losse
 * /adverteerders/-pagina, die elk hun eigen velden-JSX/styling renderen
 * maar dezelfde regels en hetzelfde endpoint gebruiken.
 */
export function useAdvertiserSignup() {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [sector, setSector] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SignupResponse | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setStatus({ success: false, message: 'Vul a.u.b. een geldig e-mailadres in.' });
      return;
    }
    if (!contactPerson.trim()) {
      setStatus({ success: false, message: 'Vul a.u.b. een naam voor de contactpersoon in.' });
      return;
    }
    if (!sector) {
      setStatus({ success: false, message: 'Kies a.u.b. een sector.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const payload: BusinessSignupPayload = { email, companyName, contactPerson, sector };
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
      setStatus({ success: false, message: 'Er is een fout opgetreden. Probeer het opnieuw.' });
    } finally {
      setLoading(false);
    }
  };

  return {
    email, setEmail,
    companyName, setCompanyName,
    contactPerson, setContactPerson,
    sector, setSector,
    loading,
    status,
    handleSubmit,
  };
}
