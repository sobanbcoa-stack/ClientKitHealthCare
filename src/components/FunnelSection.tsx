import React from 'react';
import {
  Users,
  Smartphone,
  Video,
  HeartPulse,
  MessageSquare,
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
      "Hi ClientKit! I want to deploy the 5-step local patient acquisition funnel for our clinic. Let's chat about how to get started."
    );
  };

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-[#FAFAFA] border-t-2 border-[#0B0B0B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2.5">
            Turnkey 5-Stage Pipeline
          </div>
          <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.04] text-[clamp(1.75rem,4vw,3.1rem)]">
            How Patients Come To Your Hospital
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#262626] leading-relaxed">
            A frictionless, 5-stage acquisition pipeline engineered specifically for high-intent OPD consultations and surgical admissions inside your 10-kilometer zone.
          </p>
        </div>

        <div className="space-y-5">
          {FUNNEL_STEPS.map((step) => {
            const IconComponent = getIcon(step.icon);

            return (
              <div
                key={step.step}
                className="p-6 sm:p-8 bg-white border-2 border-[#0B0B0B] hover:border-[#D81919] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="flex items-center justify-between sm:block shrink-0">
                    <div className="font-display font-black text-3xl sm:text-4xl text-[#D81919] tabular-nums leading-none">
                      (0{step.step})
                    </div>
                    <div className="sm:hidden text-[#0B0B0B]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                      {step.badge}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0B0B0B] mb-1.5">
                      {step.title}
                    </h3>
                    <div className="text-sm font-bold text-[#D81919] mb-2">
                      {step.subtitle}
                    </div>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden sm:flex w-11 h-11 border-2 border-[#0B0B0B] bg-[#FAFAFA] text-[#0B0B0B] items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleFunnelCta}
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-display font-bold uppercase tracking-wide text-white bg-[#0B0B0B] hover:bg-[#D81919] transition-colors cursor-pointer active:scale-[0.98]"
          >
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
