import React from 'react';
import { PixelDino, PixelMushroom, PixelHeartCluster } from './BrandArt';

export const ResultsNumbersSection: React.FC = () => {
  const headlineMetrics = [
    {
      index: '1.',
      label: 'VERIFIED PATIENTS',
      value: '2,100+ / 90 DAYS',
    },
    {
      index: '2.',
      label: 'PARTNER CLINICS & HOSPITALS',
      value: '25+ IN PAKISTAN',
    },
    {
      index: '3.',
      label: 'TERRITORY CAP',
      value: '1 PARTNER PER 10-KM',
    },
  ];

  return (
    <section
      id="numbers"
      className="relative bg-[#FAFAFA] overflow-hidden border-t-2 border-[#0B0B0B]"
    >
      {/* Full-bleed Emerald Mountain Valley Background fading seamlessly into gallery white sky */}
      <div className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] flex flex-col justify-between">
        {/* Background Mountain Landscape */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/brand/valley-hills.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-bottom"
            loading="eager"
          />
          {/* Crisp white sky gradient scrim at the top for WCAG AA+ Crimson legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/92 via-42% to-transparent" />
        </div>

        {/* Top-Right Pixel Heart Cluster (Page 2 signature detail) */}
        <PixelHeartCluster
          size="md"
          color="#D81919"
          className="hidden sm:block absolute top-8 right-8 lg:top-10 lg:right-14 z-20"
        />

        {/* Upper Editorial Typography Block */}
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-20 relative z-20">
          <div className="max-w-4xl">
            <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,6.5vw,5.25rem)] mb-7 sm:mb-9">
              NUMBERS
            </h2>

            <ol className="space-y-3 sm:space-y-4">
              {headlineMetrics.map((metric) => (
                <li
                  key={metric.index}
                  className="font-display font-black uppercase text-[#D81919] tracking-[-0.01em] leading-snug text-base sm:text-xl lg:text-2xl flex flex-wrap items-baseline gap-x-2.5"
                >
                  <span className="tabular-nums">{metric.index}</span>
                  <span>{metric.label}</span>
                  <span className="text-[#0B0B0B]">=</span>
                  <span className="tabular-nums underline decoration-[#D81919]/40 decoration-2 underline-offset-4">
                    {metric.value}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Lower Meadow Crest with Mirrored Pixel T-Rex & Twin Mushrooms (Page 2 Composition) */}
        <div className="relative w-full h-[150px] sm:h-[210px] lg:h-[250px] z-20 pointer-events-none select-none">
          {/* Twin Pixel Mushrooms */}
          <div className="absolute right-[34%] sm:right-[29%] lg:right-[26%] bottom-[16%] z-20">
            <PixelMushroom className="w-9 h-9 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute right-[24%] sm:right-[21%] lg:right-[19%] bottom-[14%] z-20">
            <PixelMushroom className="w-8 h-8 sm:w-11 sm:h-11" />
          </div>

          {/* Mirrored Pixel T-Rex facing left toward the valley */}
          <div className="absolute right-[4%] sm:right-[6%] lg:right-[8%] bottom-[10%] z-20 animate-dino-subtle">
            <PixelDino
              flip={true}
              className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 drop-shadow-[0_6px_0_rgba(0,0,0,0.2)]"
            />
          </div>

          {/* Subtle green meadow foreground edge */}
          <img
            src="/assets/brand/meadow-hill.png"
            alt=""
            aria-hidden="true"
            className="w-full h-[78px] sm:h-[105px] lg:h-[125px] object-cover object-top absolute bottom-0 left-0"
          />
        </div>
      </div>
    </section>
  );
};
