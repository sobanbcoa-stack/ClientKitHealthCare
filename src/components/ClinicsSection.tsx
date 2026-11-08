import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  TrendingUp,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { CLINIC_FACILITIES } from '../data/siteData';

export const ClinicsSection: React.FC = () => {
  const [activeHospitalId, setActiveHospitalId] = useState<string | null>(null);

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-slate-50 relative border-b border-slate-200/80">
      {/* LeadArc Style Grid Lines & Crosshairs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            We know what we're doing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hover over any hospital facility below to inspect the verified patient consultation numbers, surgical inquiries, and business growth generated in their first 30 days.
          </p>
        </div>

        {/* 6 Real Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_FACILITIES.map((facility) => {
            const isHovered = activeHospitalId === facility.id;

            return (
              <div
                key={facility.id}
                onMouseEnter={() => setActiveHospitalId(facility.id)}
                onMouseLeave={() => setActiveHospitalId(null)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-slate-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Real Hospital Facade / Facility Photography */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={facility.imageUrl}
                    alt={facility.hospitalName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback in case of external network blip
                      (e.target as HTMLImageElement).src = '/assets/aistudio/image_487690e8.png';
                    }}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Specialty Tag Top Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-xs border border-white/40">
                      {facility.specialty}
                    </span>
                  </div>

                  {/* Hover Prompt Chip (Bottom of image on default state) */}
                  <div className="absolute bottom-3 right-3 z-10 group-hover:opacity-0 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      <Eye className="w-3 h-3" />
                      <span>Hover for 30-Day Results</span>
                    </span>
                  </div>

                  {/* THE HOVER OVERLAY: Pure Numerical Overview (No lengthy paragraphs) */}
                  <div
                    className={`absolute inset-0 z-20 bg-slate-950/95 backdrop-blur-md p-5 text-white flex flex-col justify-center transition-all duration-300 ${
                      isHovered
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {facility.daysToResult}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Target Delivered
                      </span>
                    </div>

                    <div className="text-base sm:text-lg font-black text-white leading-tight font-sans tracking-tight mb-4">
                      {facility.resultHeadline}
                    </div>

                    {/* 3 Prominent Metric Stat Blocks */}
                    <div className="grid grid-cols-3 gap-2">
                      {facility.resultMetricPills.map((pill, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center"
                        >
                          <div className="text-base sm:text-lg font-black text-emerald-400 font-mono tracking-tight">
                            {pill.value}
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-slate-300 font-medium uppercase tracking-wider mt-1 leading-tight text-center">
                            {pill.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta (No "Let's chat" button as requested) */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 leading-snug group-hover:text-emerald-700 transition-colors">
                      {facility.hospitalName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{facility.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 font-mono">
                      {facility.resultMetricPills[0]?.value} {facility.resultMetricPills[0]?.label}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 font-mono">
                      {facility.daysToResult}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Territory Callout Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                10-Kilometer Exclusivity Agreement
              </div>
              <div className="text-xs text-slate-500">
                We partner with strictly ONE hospital per territory. Your local competitors are locked out once reserved.
              </div>
            </div>
          </div>

          <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full shrink-0">
            30-Day Territory Protection Guaranteed
          </div>
        </div>
      </div>
    </section>
  );
};
