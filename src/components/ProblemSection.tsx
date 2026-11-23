import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { PAIN_POINTS } from '../data/siteData';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { PixelHeartCluster } from './BrandArt';

export const ProblemSection: React.FC = () => {
  const handleProblemCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! We are losing patients to competing clinics in our area. Let's chat about fixing our local acquisition."
    );
  };

  return (
    <section
      id="problem"
      className="py-20 sm:py-28 bg-white border-t-2 border-[#0B0B0B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-[#0B0B0B]">
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2.5">
              The Traditional Bottleneck
            </div>
            <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.04] text-[clamp(1.75rem,4vw,3rem)]">
              Why Hospitals Lose Patients To Competitors
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#262626]">
              Most healthcare advertising drains cash because it speaks to an entire city instead of dominating the families right next door.
            </p>
          </div>
          <PixelHeartCluster size="sm" color="#0B0B0B" className="hidden md:block shrink-0" />
        </div>

        {/* Clean Editorial Numbered List (01–05) */}
        <div className="divide-y-2 divide-[#0B0B0B] border-y-2 border-[#0B0B0B] mb-12">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.num}
              className="py-6 sm:py-7 flex items-start sm:items-center gap-5 sm:gap-7 bg-white hover:bg-[#FAFAFA] transition-colors px-2 sm:px-4"
            >
              <div className="font-display font-black text-2xl sm:text-3xl text-[#D81919] tabular-nums shrink-0 leading-none">
                ({item.num})
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0B0B0B] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#404040] leading-relaxed">
                  {item.text}
                </p>
              </div>
              <X className="w-5 h-5 text-[#D81919] shrink-0 hidden sm:block" />
            </div>
          ))}
        </div>

        {/* High-Contrast Pitch-Black Diagnosis Callout */}
        <div className="p-7 sm:p-10 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF4D4D] mb-2">
              The Simple Diagnosis
            </div>
            <div className="font-display font-black uppercase text-lg sm:text-xl text-white leading-snug">
              You already have great doctors, surgical theaters, and equipment. Nearby families just don't know you yet.
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
              We fix this in 30 days with physical 10-km corporate outreach, localized doctor reels, and instant WhatsApp booking tokens.
            </p>
          </div>

          <button
            onClick={handleProblemCta}
            className="px-7 py-4 text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-white bg-[#D81919] hover:bg-[#B01212] transition-colors flex items-center gap-2.5 shrink-0 cursor-pointer active:scale-[0.98]"
          >
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
