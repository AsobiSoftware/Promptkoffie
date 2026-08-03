import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PrivacyTrust } from './components/PrivacyTrust';
import { UserSignupCTA } from './components/UserSignupCTA';
import { AdvertiserCTA } from './components/AdvertiserCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#FDE68A] selection:text-[#92400E]">
      {/* Fixed Navigation Header */}
      <Header onScrollTo={scrollToSection} />

      {/* Main Page Layout */}
      <main>
        {/* 1. Punchy Hero Section (contains Simulator directly under title) */}
        <Hero />

        {/* 2. How it works in 3 Steps */}
        <HowItWorks />

        {/* 5. Privacy & Zero-Read Assurance */}
        <PrivacyTrust />

        {/* 3a. User Signup CTA Section */}
        <UserSignupCTA />

        {/* 3b. Advertiser & Business Signup CTA Section */}
        <AdvertiserCTA />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
