import React from 'react';
import {
  Sparkles,
  Users,
  Smartphone,
  Video,
  HeartPulse,
  MessageSquare,
  ArrowDown,
  ArrowRight,
} from 'lucide-react';
import { FUNNEL_STEPS } from '../data/siteData';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const FunnelSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return Users;
      case 'Smartphone':
        return Smartphone;
      case 'Video':
        return Video;
      case 'HeartPulse':
        return HeartPulse;
      case 'MessageCircle':
        return MessageSquare;
      default:
        return Users;
    }
  };

  const handleFunnelCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I want to deploy the 5-step local patient acquisition funnel for our clinic. Let\'s chat about how to get started.'
    );
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50 relative border-b border-slate-200/80">
      {/* LeadArc Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Growth Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How Patients Come To Your Hospital
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A frictionless, 5-stage patient acquisition pipeline engineered specifically for high-intent medical consultations and surgical procedures.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
          {FUNNEL_STEPS.map((step, idx) => {
            const IconComponent = getIcon(step.icon);

            return (
              <React.Fragment key={step.step}>
                <div className="w-full transition-all p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/50 shadow-xs hover:shadow-lg">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {step.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-950">
                          {step.title}
                        </h3>
                      </div>
                      <div className="text-xs sm:text-sm text-emerald-700 font-semibold mb-2">
                        {step.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden sm:block text-slate-300 font-mono font-black text-2xl shrink-0">
                      0{step.step}
                    </div>
                  </div>
                </div>

                {idx < FUNNEL_STEPS.length - 1 && (
                  <div className="py-0.5 text-slate-400">
                    <ArrowDown className="w-4 h-4 opacity-70 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleFunnelCta}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-md shadow-slate-950/15 cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
