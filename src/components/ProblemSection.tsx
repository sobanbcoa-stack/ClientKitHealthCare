import React from 'react';
import { AlertCircle, MessageSquare, ArrowRight, XCircle } from 'lucide-react';
import { PAIN_POINTS } from '../data/siteData';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const ProblemSection: React.FC = () => {
  const handleProblemCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! We are losing patients to competing clinics in our area. Let\'s chat about fixing our local acquisition.'
    );
  };

  return (
    <section
      id="problem"
      className="py-20 sm:py-28 bg-white relative border-b border-slate-200/80"
    >
      {/* Background Subtle Grid & Crosshairs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-700 text-xs font-semibold mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Traditional Bottleneck</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Hospitals & Clinics Lose Patients To Competitors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Most healthcare advertising wastes money because it speaks to everyone instead of dominating the families right next door.
          </p>
        </div>

        {/* 5 Pain points cards in LeadArc clean grid */}
        <div className="space-y-3.5 mb-10">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.num}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex items-start sm:items-center gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-red-100">
                {item.num}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 mb-0.5">
                  {item.title}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <XCircle className="w-5 h-5 text-red-400 shrink-0 hidden sm:block" />
            </div>
          ))}
        </div>

        {/* Diagnosis Callout Card (LeadArc Sleek High-Contrast Frame) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 font-mono">
              The Simple Diagnosis
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white mt-1 leading-snug">
              You already have great doctors, surgical theaters, and equipment. Nearby families and businesses just don't know you yet.
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              We fix this with boots-on-the-ground corporate outreach, 10-km localized doctor videos, and instant WhatsApp booking.
            </p>
          </div>

          <button
            onClick={handleProblemCta}
            className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-emerald-500/25 cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
