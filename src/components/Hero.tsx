import React from 'react';
import {
  MessageSquare,
  ArrowRight,
  Star,
} from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const Hero: React.FC = () => {
  const handleHeroCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I want to dominate our 10-kilometer area in 30 days. Let\'s chat about how this works for our hospital / clinic.'
    );
  };


  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-white border-b border-slate-200/80">
      {/* Subtle LeadArc Background Radial & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-200/60 pointer-events-none hidden lg:block" />

      {/* Decorative Crosshair Marks (LeadArc signature detail) */}
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Sleek Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300/80 text-slate-800 text-xs font-semibold mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-900 font-bold">Guaranteed Patient Acquisition Engine</span>
          <span className="text-slate-400 font-mono">|</span>
          <span className="text-emerald-700 font-medium">1 Clinic Per 10-KM Radius</span>
        </div>

        {/* Main Headline (Strictly as ordered) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto">
          Dominate your area in 30 days{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            or we work for free.
          </span>
        </h1>

        {/* Subheading (Strictly as ordered) */}
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-9">
          Make sure every single household and business, all the patients within your hospital 10-kilometer radius is coming to you, not anyone else. We will make sure all of that is done in just a one-month period or we work for free.
        </p>

        {/* LeadArc Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-9">
          <button
            onClick={handleHeroCta}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-white bg-slate-950 hover:bg-slate-800 shadow-xl shadow-slate-950/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 group cursor-pointer border border-slate-800 active:scale-98"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
          </button>

          <a
            href="#facilities"
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-xs hover:border-slate-400 transition-all flex items-center justify-center gap-2 text-center"
          >
            <span>View Facilities & 30-Day Results</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Fixed Doctor Avatar Proof Stack (All verified HTTP 200, crisp loading) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-2 pb-2 max-w-lg mx-auto">
          <div className="flex -space-x-2.5 overflow-hidden py-1">
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80"
              alt="Consultant Surgeon"
              loading="eager"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80"
              alt="Medical Director"
              loading="eager"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80"
              alt="Hospital Administrator"
              loading="eager"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120&q=80"
              alt="Cardiologist"
              loading="eager"
            />
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-black text-slate-900 ml-1">5.0</span>
            </div>
            <div className="text-xs font-medium text-slate-600">
              Trusted by 25+ hospitals & specialty clinics across Pakistan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
