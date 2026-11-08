import React from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/siteData';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const ComparisonSection: React.FC = () => {
  const handleComparisonCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I want to replace old marketing with the ClientKit engine for our hospital. Let\'s chat.'
    );
  };

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-white relative border-b border-slate-200/80">
      {/* LeadArc Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 text-xs font-semibold mb-3">
            <span>Direct Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Traditional Marketing vs. ClientKit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Why conventional advertising agencies drain hospital cash flow, and how ClientKit locks in predictable local patient inflow.
          </p>
        </div>

        {/* LeadArc Styled Modern Comparison Table */}
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-lg">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
            <div className="p-4 md:col-span-3 text-slate-900">Evaluation Factor</div>
            <div className="p-4 md:col-span-3 text-red-600 border-t md:border-t-0 md:border-l border-slate-200">
              Old Agency Way
            </div>
            <div className="p-4 md:col-span-3 text-emerald-800 border-t md:border-t-0 md:border-l border-slate-200 bg-emerald-50/70">
              <span className="flex items-center gap-1.5 text-emerald-900 font-black">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                The ClientKit Engine
              </span>
            </div>
            <div className="p-4 md:col-span-3 text-slate-500 border-t md:border-t-0 md:border-l border-slate-200">
              In-House Staff
            </div>
          </div>

          {/* Table Data Rows */}
          <div className="divide-y divide-slate-100 text-xs">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50/70 transition-colors"
              >
                <div className="p-4 md:col-span-3 font-bold text-slate-900 flex items-center">
                  {row.point}
                </div>
                <div className="p-4 md:col-span-3 text-slate-600 border-t md:border-t-0 md:border-l border-slate-200/80 bg-red-50/10 flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.oldWay}</span>
                </div>
                <div className="p-4 md:col-span-3 text-slate-900 border-t md:border-t-0 md:border-l border-slate-200/80 bg-emerald-50/40 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-900">{row.clientKitWay}</span>
                </div>
                <div className="p-4 md:col-span-3 text-slate-500 border-t md:border-t-0 md:border-l border-slate-200/80 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                  <span>{row.inHouseWay}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Action Footer */}
          <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Strict Territory Protection
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                We never work with your competitor within your 10-kilometer radius.
              </div>
            </div>

            <button
              onClick={handleComparisonCta}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 shrink-0 cursor-pointer active:scale-95 shadow-md shadow-emerald-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>Let's chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
