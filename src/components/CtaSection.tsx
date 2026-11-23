import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { PixelDino, PixelMushroom, PixelHeartCluster } from './BrandArt';

export const CtaSection: React.FC = () => {
  const handleFinalCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! I want to dominate our 10-kilometer area in 30 days or you work for free. Let's chat about reserving our territory."
    );
  };

  return (
    <section className="relative pt-20 sm:pt-28 bg-[#FAFAFA] border-t-2 border-[#0B0B0B] overflow-hidden">
      {/* Floating Black 3-Heart Pixel Cluster (Directly echoes PDF Page 14) */}
      <PixelHeartCluster
        size="lg"
        color="#0B0B0B"
        className="hidden md:block absolute top-14 right-[8%] lg:right-[11%] z-20"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-20">
        {/* Iconic Thick Crimson Horizontal Bar from Page 14 */}
        <div className="w-44 sm:w-64 h-2.5 sm:h-3 bg-[#D81919] mx-auto mb-8 sm:mb-10" />

        <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0B0B0B] mb-4">
          Strictly 1 Hospital Per 10-KM Territory
        </div>

        <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.06] text-[clamp(1.85rem,4.6vw,3.6rem)] mb-6">
          Dominate your area in 30 days or we work for free.
        </h2>

        <p className="text-sm sm:text-base text-[#262626] leading-relaxed max-w-2xl mx-auto mb-8">
          Make sure every single household, business, and patient within your hospital's 10-kilometer radius comes to you, not anyone else. Check territory availability before a competing facility locks your zone.
        </p>

        {/* Quiet Editorial Proof Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#0B0B0B] font-semibold mb-9">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D81919]" />
            10-km radius exclusivity
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D81919]" />
            Zero billboard waste
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D81919]" />
            1-tap WhatsApp tokens
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D81919]" />
            30-day guarantee
          </span>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleFinalCta}
            className="w-full sm:w-auto px-10 py-4 text-sm sm:text-base font-display font-bold uppercase tracking-wide text-white bg-[#D81919] hover:bg-[#0B0B0B] transition-colors flex items-center justify-center gap-3 cursor-pointer active:scale-[0.98]"
          >
            <span>Let's chat</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-neutral-600 mt-4 font-mono">
          Confidential territory availability check · Fast WhatsApp response
        </p>
      </div>

      {/* Page 14 Meadow Finale Stage: Pixel T-Rex + 4 Spotted Mushrooms on Curved Green Grass Hill */}
      <div className="relative w-full mt-10 sm:mt-14 select-none pointer-events-none">
        <div className="absolute left-[7%] sm:left-[9%] bottom-[24%] z-20">
          <PixelMushroom className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>
        <div className="absolute left-[18%] sm:left-[19%] bottom-[12%] z-20">
          <PixelMushroom className="w-7 h-7 sm:w-10 sm:h-10" />
        </div>
        <div className="absolute left-[32%] sm:left-[34%] bottom-[22%] sm:bottom-[26%] z-20 animate-dino-subtle">
          <PixelDino className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 drop-shadow-[0_6px_0_rgba(0,0,0,0.14)]" />
        </div>
        <div className="absolute left-[63%] sm:left-[64%] bottom-[14%] z-20">
          <PixelMushroom className="w-11 h-11 sm:w-16 sm:h-16" />
        </div>
        <div className="absolute right-[10%] sm:right-[12%] bottom-[26%] z-20">
          <PixelMushroom className="w-10 h-10 sm:w-14 sm:h-14" />
        </div>

        <img
          src="/assets/brand/meadow-hill.png"
          alt=""
          aria-hidden="true"
          className="w-full h-[130px] sm:h-[190px] lg:h-[235px] object-cover object-top block"
          loading="eager"
        />
      </div>
    </section>
  );
};
