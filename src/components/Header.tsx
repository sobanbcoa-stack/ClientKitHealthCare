import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { navigateTo } from '../utils/router';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLetsChat = (source: string) => {
    const msg = `Hi ClientKit! I run an aesthetic clinic, dental practice, or hospital. I want to check territory exclusivity for our 10-km area (${source}).`;
    openWhatsApp(WHATSAPP_NUMBER_RAW, msg);
  };

  const handleAnchor = (anchorId: string) => {
    setMobileMenuOpen(false);
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      navigateTo('/');
      setTimeout(() => {
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const go = (path: string) => {
    setMobileMenuOpen(false);
    navigateTo(path);
  };

  return (
    <>
      {/* Non-sticky Territory Exclusivity Ribbon so mobile sticky chrome stays under 15% */}
      <div className="bg-[#0B0B0B] text-white border-b-2 border-[#D81919] px-4 py-2 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-[11px] sm:text-xs font-medium">
          <span className="font-display font-bold uppercase tracking-wider text-[#D81919]">
            TERRITORY EXCLUSIVITY
          </span>
          <span className="hidden sm:inline text-neutral-500" aria-hidden="true">/</span>
          <span className="text-white font-semibold">
            Strictly <span className="underline decoration-[#D81919] decoration-2 underline-offset-4 font-bold">ONE</span> Aesthetic or Dental Clinic Per 10-KM Area
          </span>
          <span className="hidden md:inline text-neutral-400">
            · First Come, First Reserved
          </span>
        </div>
      </div>

      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            onClick={() => go('/')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D81919] rounded cursor-pointer whitespace-nowrap shrink-0"
            aria-label="ClientKit Home"
          >
            <Logo size="md" theme="dark" showTagline={false} />
          </button>

          {/* Zone 2: 5 concise single-line text nav links (Directory & 12 Guides removed) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#1A1A1A]">
            <button
              onClick={() => handleAnchor('results')}
              className="hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Results
            </button>
            <button
              onClick={() => handleAnchor('pillars')}
              className="hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              The System
            </button>
            <button
              onClick={() => go('/aesthetic-clinics')}
              className="hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Aesthetic
            </button>
            <button
              onClick={() => go('/dental-clinics')}
              className="hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Dental
            </button>
            <button
              onClick={() => go('/portfolio')}
              className="hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Portfolio
            </button>
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => handleLetsChat('Navbar CTA')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#D81919] hover:bg-[#B01212] transition-colors cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 border border-black/15 bg-white text-[#0B0B0B] hover:border-[#D81919] hover:text-[#D81919] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAFAFA] border-b-2 border-[#0B0B0B] px-5 py-5 space-y-1 text-sm font-bold text-[#111111] shadow-xl max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => go('/')}
              className="block w-full text-left py-2.5 border-b border-black/10 hover:text-[#D81919] cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleAnchor('results')}
              className="block w-full text-left py-2.5 border-b border-black/10 hover:text-[#D81919] cursor-pointer"
            >
              Results
            </button>
            <button
              onClick={() => handleAnchor('pillars')}
              className="block w-full text-left py-2.5 border-b border-black/10 hover:text-[#D81919] cursor-pointer"
            >
              The System
            </button>
            <button
              onClick={() => go('/aesthetic-clinics')}
              className="block w-full text-left py-2.5 border-b border-black/10 hover:text-[#D81919] cursor-pointer"
            >
              Aesthetic Clinics
            </button>
            <button
              onClick={() => go('/dental-clinics')}
              className="block w-full text-left py-2.5 border-b border-black/10 hover:text-[#D81919] cursor-pointer"
            >
              Dental Clinics
            </button>
            <button
              onClick={() => go('/portfolio')}
              className="block w-full text-left py-2.5 border-b border-black/10 text-[#D81919] cursor-pointer"
            >
              All Portfolio Case Studies
            </button>
            <button
              onClick={() => go('/portfolio/aesthetic')}
              className="block w-full text-left py-2.5 pl-4 border-b border-black/10 text-xs text-neutral-700 hover:text-[#D81919] cursor-pointer"
            >
              — Aesthetic Portfolio
            </button>
            <button
              onClick={() => go('/portfolio/dental')}
              className="block w-full text-left py-2.5 pl-4 border-b border-black/10 text-xs text-neutral-700 hover:text-[#D81919] cursor-pointer"
            >
              — Dental Portfolio
            </button>
            <button
              onClick={() => go('/hospitals')}
              className="block w-full text-left py-2.5 border-b border-black/10 hover:text-[#D81919] cursor-pointer"
            >
              Proven Hospital Results
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLetsChat('Mobile Menu CTA');
              }}
              className="w-full mt-3 py-3.5 px-4 bg-[#D81919] text-white font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </>
  );
};
