import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductPreview } from './components/ProductPreview';
import { HowItWorks } from './components/HowItWorks';
import { PrivacyTrust } from './components/PrivacyTrust';
import { UserSignupCTA } from './components/UserSignupCTA';
import { AdvertiserCTA } from './components/AdvertiserCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#FDE68A] selection:text-[#92400E]">
      {/* Sticky header — navigatie loopt via ankerlinks, geen JS */}
      <Header />

      <main>
        <Hero />
        <ProductPreview />
        <HowItWorks />
        <PrivacyTrust />
        <UserSignupCTA />
        <AdvertiserCTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
