import React, { useState } from 'react';
import { Logo } from './Logo';
import { MessageSquare, ArrowRight, Menu, X, ShieldAlert } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { navigateTo } from '../utils/router';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLetsChat = (source: string) => {
    const msg = `Hi ClientKit! I run a hospital / clinic. I want to check territory exclusivity for our 10-km area (${source}).`;
    openWhatsApp(WHATSAPP_NUMBER_RAW, msg);
  };

  return (
    <>
      {/* Territory Exclusivity Announcement Bar (LeadArc Inspired High-Impact Alert) */}
      <div className="bg-[#180505] border-b border-red-500/40 px-4 py-2.5 text-center relative z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono font-bold text-[11px] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <ShieldAlert className="w-3 h-3 text-red-400" />
            TERRITORY EXCLUSIVITY
          </span>
          <span className="text-red-200 font-bold tracking-tight">
            We Partner With Strictly{' '}
            <span className="text-white underline decoration-red-500 decoration-2 underline-offset-4">
              ONE
            </span>{' '}
            Hospital Or Clinic Per Area.
          </span>
          <span className="text-red-400/80 text-xs hidden md:inline font-medium">
            (Zero Conflict of Interest · First Come, First Reserved)
          </span>
        </div>
      </div>

      {/* Main Frosted Glass Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center gap-2 focus:outline-none cursor-pointer"
            aria-label="ClientKit Home"
          >
            <Logo size="md" theme="dark" showTagline={false} />
          </button>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <button
              onClick={() => navigateTo('/')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Home
            </button>
            <a href="/#pillars" className="hover:text-slate-950 transition-colors">
              How We Do It
            </a>
            <button
              onClick={() => navigateTo('/specialties/dental-clinic-marketing-agency-pakistan')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Specialties
            </button>
            <button
              onClick={() => navigateTo('/directory/best-healthcare-marketing-agencies-karachi')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              10km Cities
            </button>
            <button
              onClick={() => navigateTo('/blog')}
              className="hover:text-emerald-600 transition-colors cursor-pointer font-bold flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              12 Guides
            </button>
            <button
              onClick={() => navigateTo('/directory')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Agency Matrix
            </button>
            <a href="/#calculator" className="hover:text-slate-950 transition-colors">
              Calculator (PKR)
            </a>
            <button
              onClick={() => navigateTo('/sitemap')}
              className="hover:text-slate-950 transition-colors cursor-pointer text-slate-400 font-mono text-[11px]"
            >
              Sitemap (228)
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLetsChat('Navbar CTA')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-md shadow-slate-950/15 hover:shadow-lg transition-all cursor-pointer group border border-slate-800 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span>Let's chat</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-5 space-y-3 text-sm font-semibold text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo('/');
              }}
              className="block w-full text-left py-1 hover:text-emerald-600"
            >
              Home
            </button>
            <a
              href="/#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-emerald-600"
            >
              How We Do It
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo('/specialties/dental-clinic-marketing-agency-pakistan');
              }}
              className="block w-full text-left py-1 hover:text-emerald-600"
            >
              8 Specialties (Pakistan)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo('/directory/best-healthcare-marketing-agencies-karachi');
              }}
              className="block w-full text-left py-1 hover:text-emerald-600"
            >
              10km Cities & Sectors
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo('/blog');
              }}
              className="block w-full text-left py-1 text-emerald-600 font-bold"
            >
              12 Healthcare Guides & Playbooks
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo('/directory');
              }}
              className="block w-full text-left py-1 hover:text-emerald-600"
            >
              Agencies Comparison Matrix
            </button>
            <a
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-emerald-600"
            >
              ROI Calculator (PKR)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateTo('/sitemap');
              }}
              className="block w-full text-left py-1 text-slate-500 font-mono text-xs"
            >
              Master Sitemap (228 URLs)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLetsChat('Mobile Menu CTA');
              }}
              className="w-full mt-3 py-3 px-4 rounded-full bg-slate-950 text-white font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </>
  );
};
