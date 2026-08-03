import React, { useState, useEffect } from 'react';
import { Coffee, ShieldCheck, Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E1D8] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B45309] to-[#78350F] flex items-center justify-center text-white shadow-md shadow-[#B45309]/20 group-hover:scale-105 transition-transform">
              <Coffee className="w-5.5 h-5.5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1C1917] leading-none font-serif">
              Promptkoffie
            </span>
          </a>

          {/* Clean Top Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('demo')}
              className="bg-[#1C1917] hover:bg-[#292524] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>Schrijf je in</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
