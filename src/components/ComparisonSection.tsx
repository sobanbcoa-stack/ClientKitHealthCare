import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/siteData';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const ComparisonSection: React.FC = () => {
  const handleComparisonCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! I want to replace old marketing with the ClientKit engine for our hospital. Let's chat."
    );
  };

  return (
    <section
      id="comparison"
      className="py-20 sm:py-28 bg-white border-t-2 border-[#0B0B0B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2.5">
            Direct Comparison
          </div>
          <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.04] text-[clamp(1.75rem,4vw,3.1rem)]">
            Traditional Marketing vs. ClientKit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#262626] leading-relaxed">
            Why conventional advertising agencies drain hospital cash flow, and how ClientKit locks in predictable local patient inflow.
          </p>
        </div>

        {/* High-Contrast Editorial Comparison Matrix */}
        <div className="border-2 border-[#0B0B0B] bg-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0B0B0B] text-white text-xs font-display font-bold uppercase tracking-wider">
            <div className="p-4 md:col-span-3">Evaluation Factor</div>
            <div className="p-4 md:col-span-3 border-t md:border-t-0 md:border-l border-white/15 text-neutral-300">
              Old Agency Way
            </div>
            <div className="p-4 md:col-span-3 border-t md:border-t-0 md:border-l border-white/15 bg-[#D81919] text-white">
              The ClientKit Engine
            </div>
            <div className="p-4 md:col-span-3 border-t md:border-t-0 md:border-l border-white/15 text-neutral-400">
              In-House Staff
            </div>
          </div>

          <div className="divide-y-2 divide-[#0B0B0B] text-xs sm:text-sm">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 bg-white hover:bg-[#FAFAFA] transition-colors"
              >
                <div className="p-4 md:col-span-3 font-extrabold text-[#0B0B0B] flex items-center">
                  {row.point}
                </div>
                <div className="p-4 md:col-span-3 text-neutral-600 border-t md:border-t-0 md:border-l border-black/15 flex items-start gap-2">
                  <X className="w-4 h-4 text-[#D81919] shrink-0 mt-0.5" />
                  <span>{row.oldWay}</span>
                </div>
                <div className="p-4 md:col-span-3 text-[#0B0B0B] border-t md:border-t-0 md:border-l-2 border-[#D81919] bg-[#FFF5F5] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D81919] shrink-0 mt-0.5" />
                  <span className="font-bold">{row.clientKitWay}</span>
                </div>
                <div className="p-4 md:col-span-3 text-neutral-600 border-t md:border-t-0 md:border-l border-black/15 flex items-start gap-2">
                  <span>{row.inHouseWay}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Matrix Footer */}
          <div className="p-6 bg-[#0B0B0B] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#FF4D4D] font-bold">
                Strict Territory Protection
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                We never work with your competitor within your 10-kilometer radius.
              </div>
            </div>

            <button
              onClick={handleComparisonCta}
              className="px-7 py-3.5 text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-white bg-[#D81919] hover:bg-[#B01212] transition-colors flex items-center gap-2 shrink-0 cursor-pointer active:scale-[0.98]"
            >
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
