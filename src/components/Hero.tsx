import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { PixelDino, PixelMushroom, PixelHeartCluster } from './BrandArt';

export const Hero: React.FC = () => {
  const handleHeroCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! I want to dominate our 10-kilometer area in 90 days. Let's chat about how this works for our hospital / clinic."
    );
  };

  return (
    <section className="relative bg-[#FAFAFA] overflow-hidden pt-7 sm:pt-9 lg:pt-10">
      {/* Main Editorial Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 text-center">
        {/* Quiet Unboxed Editorial Kicker (Zero-Pill Discipline) */}
        <div className="font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#D81919] mb-4">
          1 Hospital Per 10-KM Radius · Territory Exclusivity
        </div>

        {/* Clean, Effortlessly Readable High-Contrast Hero Headline (No Awkward Underlines) */}
        <h1 className="font-sans font-extrabold text-[#0B0B0B] tracking-[-0.03em] leading-[1.08] text-[clamp(2.25rem,5.4vw,4.5rem)] max-w-4xl mx-auto">
          Dominate Your Area in{' '}
          <span className="text-[#D81919]">90 Days</span>
          <span className="block text-[#D81919] mt-1 sm:mt-1.5">
            Or We Work For Free.
          </span>
        </h1>

        {/* Preserved Subheading Copy */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#3F3F46] font-medium leading-relaxed max-w-2xl mx-auto">
          Make sure every single household and business, all the patients within your hospital 10-kilometer radius is coming to you, not anyone else. We will make sure all of that is done in just 90 days or we work for free.
        </p>

        {/* Primary Action + Secondary Anchor */}
        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={handleHeroCta}
            className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-display font-bold uppercase tracking-wide text-white bg-[#0B0B0B] hover:bg-[#D81919] transition-colors flex items-center justify-center gap-3 cursor-pointer active:scale-[0.98] whitespace-nowrap"
          >
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#results"
            className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-bold text-[#0B0B0B] bg-white hover:bg-[#F2F2F2] border-2 border-[#0B0B0B] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>See Proven Results</span>
            <ArrowDown className="w-4 h-4 text-[#D81919]" />
          </a>
        </div>

        {/* Brand Signature Line Above the Hill (Echoing Page 1 Center URL) */}
        <div className="mt-5 sm:mt-6 font-mono text-[11px] sm:text-xs font-semibold text-[#D81919] tracking-wider">
          www.clientkit.site · Trusted by 25+ Hospitals & Specialty Clinics in Pakistan
        </div>
      </div>

      {/* Floating Right Crimson Pixel Heart Cluster (Page 1 Signature Motif) */}
      <PixelHeartCluster
        size="lg"
        color="#D81919"
        className="hidden lg:block absolute right-[5%] xl:right-[8%] bottom-[135px] z-20"
      />

      {/* Full-Width Curved Green Meadow Hill Stage with Pixel T-Rex & Spotted Mushrooms */}
      <div className="relative w-full mt-3 sm:mt-4 select-none pointer-events-none">
        {/* Pixel T-Rex standing on the left meadow slope */}
        <div className="absolute left-[4%] sm:left-[6%] lg:left-[8%] bottom-[12%] sm:bottom-[14%] z-20 animate-dino-subtle">
          <PixelDino className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 drop-shadow-[0_6px_0_rgba(0,0,0,0.12)]" />
        </div>

        {/* 3 Spotted Pixel Mushrooms across the meadow crest */}
        <div className="absolute left-[31%] sm:left-[32%] bottom-[18%] sm:bottom-[22%] z-20">
          <PixelMushroom className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
        </div>
        <div className="absolute left-[49%] sm:left-[50%] bottom-[34%] sm:bottom-[40%] z-20">
          <PixelMushroom className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
        </div>
        <div className="absolute left-[66%] sm:left-[67%] bottom-[26%] sm:bottom-[30%] z-20">
          <PixelMushroom className="w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12" />
        </div>

        {/* Extracted Transparent Curved Green Wildflower Meadow Hill */}
        <img
          src="/assets/brand/meadow-hill.png"
          alt=""
          aria-hidden="true"
          className="w-full h-[115px] sm:h-[155px] lg:h-[195px] object-cover object-top block"
          loading="eager"
        />
      </div>
    </section>
  );
};
