import React from 'react';
import { ShieldCheck, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const CtaSection: React.FC = () => {
  const handleFinalCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I want to dominate our 10-kilometer area in 30 days or you work for free. Let\'s chat about reserving our territory.'
    );
  };

  return (
    <section className="py-20 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* LeadArc Style Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Decorative Crosshair Marks */}
      <div className="absolute top-6 left-6 text-slate-700 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-700 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-700 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-700 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Pitch Black Hero Container with Topographic Watermark Extending Outside */}
        <div className="relative rounded-3xl bg-[#030712] border border-slate-800 p-8 sm:p-14 lg:p-16 text-center shadow-2xl overflow-hidden group">
          {/* Subtle Emerald & Cyan Ambient Glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* THE WATERMARK: Topographic Contour Elevation Vector Lines (extends outside card) */}
          <svg
            className="absolute -top-24 -right-24 w-[550px] h-[550px] opacity-[0.14] group-hover:opacity-[0.22] transition-opacity duration-700 pointer-events-none text-emerald-400 stroke-current"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 250C90 180 180 160 250 200C320 240 400 180 450 220"
              strokeWidth="1.5"
            />
            <path
              d="M30 280C80 200 190 190 270 230C350 270 410 210 470 250"
              strokeWidth="1.5"
            />
            <path
              d="M20 310C70 230 200 220 290 260C380 300 430 240 480 280"
              strokeWidth="1.5"
            />
            <path
              d="M10 340C60 260 210 250 310 290C410 330 450 270 490 310"
              strokeWidth="1.5"
            />
            <path
              d="M0 370C50 290 220 280 330 320C440 360 470 300 500 340"
              strokeWidth="1.5"
            />
            <circle cx="250" cy="250" r="140" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="250" cy="250" r="190" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="240" strokeWidth="1" strokeDasharray="8 8" />
          </svg>

          {/* Foreground Card Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-semibold mb-6 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Strict 1 Hospital Per 10-KM Territory Policy</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
              Dominate your area in 30 days{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                or we work for free.
              </span>
            </h2>

            {/* Subhead */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Make sure every single household, business, and patient within your hospital's 10-kilometer radius comes to you, not anyone else. Check territory availability before your competitor locks the rights.
            </p>

            {/* Feature Checklist */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-slate-300 font-medium mb-9">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Strict 10-km radius exclusivity
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero ad spend on billboards
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                1-tap WhatsApp consultation tokens
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                30-day performance guarantee
              </span>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleFinalCta}
                className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Let's chat</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-[11px] text-slate-400 mt-5 font-mono">
              Fast WhatsApp response in under 2 minutes · Confidential territory check
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
