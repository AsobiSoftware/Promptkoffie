import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { JourneyProgress } from './components/JourneyProgress';
import { PrivacyTrust } from './components/PrivacyTrust';
import { Boundaries } from './components/Boundaries';
import { UserSignupCTA } from './components/UserSignupCTA';
import { AdvertiserTeaser } from './components/AdvertiserTeaser';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { cleanIncomingHash } from './utils/scroll';

export default function App() {
  // Komt iemand binnen via een #hash (oude bookmark, of een link vanaf
  // /over-ons of /adverteerders naar bijv. /#privacy) — scroll naar de
  // sectie en haal daarna de hash uit de adresbalk. Zo blijft promptkoffie.nl
  // altijd zichtbaar, ongeacht waar je bent of hoe je binnenkwam.
  useEffect(() => {
    cleanIncomingHash();
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink font-display antialiased selection:bg-yellow selection:text-ink">
      <Header isHomePage />

      <main>
        <Hero />
        <HowItWorks />
        <JourneyProgress />
        <PrivacyTrust />
        <Boundaries />
        <UserSignupCTA />
        <AdvertiserTeaser />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
