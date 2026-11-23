import React, { useState } from 'react';
import { MapPin, Eye, CheckCircle2 } from 'lucide-react';
import { CLINIC_FACILITIES } from '../data/siteData';
import { PixelHeartCluster, RedMarkerCircle } from './BrandArt';

export const ClinicsSection: React.FC = () => {
  const [activeHospitalId, setActiveHospitalId] = useState<string | null>(null);

  return (
    <section
      id="results"
      className="py-20 sm:py-28 bg-[#FAFAFA] relative border-t-2 border-[#0B0B0B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Section Header (Echoing Pages 3–6 of the PDF) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b-2 border-[#0B0B0B]">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-3">
              Verified 30-Day Proof · Karachi & Lahore
            </div>
            <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.02] text-[clamp(1.9rem,4.5vw,3.5rem)]">
              PROVEN HOSPITAL RESULTS
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#262626] leading-relaxed max-w-2xl">
              Hover over any real partner hospital below to inspect the exact OPD consultations, surgical bookings, and 30-day revenue generated inside their 10-kilometer territory.
            </p>
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <PixelHeartCluster size="sm" color="#D81919" className="hidden sm:block" />
            <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#D81919] leading-none tabular-nums">
              (06)
            </div>
          </div>
        </div>

        {/* 6 Real Hospital Editorial Frames (Sharp 2px black gallery frames like PDF Pages 4, 5, 6, 12, 13) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CLINIC_FACILITIES.map((facility, idx) => {
            const isHovered = activeHospitalId === facility.id;
            const heroStat = facility.resultMetricPills[0];

            return (
              <article
                key={facility.id}
                onMouseEnter={() => setActiveHospitalId(facility.id)}
                onMouseLeave={() => setActiveHospitalId(null)}
                onClick={() =>
                  setActiveHospitalId(isHovered ? null : facility.id)
                }
                className="group relative bg-white border-2 border-[#0B0B0B] hover:border-[#D81919] transition-colors duration-200 flex flex-col justify-between cursor-pointer"
              >
                {/* Real Hospital Photography Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#0B0B0B] border-b-2 border-[#0B0B0B]">
                  <img
                    src={facility.imageUrl}
                    alt={facility.hospitalName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        '/assets/aistudio/image_487690e8.png';
                    }}
                  />

                  {/* Subtle Bottom Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15 pointer-events-none" />

                  {/* Quiet Editorial Index Top Left */}
                  <div className="absolute top-3 left-3 z-10 bg-[#0B0B0B] text-white font-display font-bold text-[11px] px-2.5 py-1 tabular-nums">
                    0{idx + 1}
                  </div>

                  {/* Subtle Hover Prompt Bottom Right */}
                  <div className="absolute bottom-3 right-3 z-10 group-hover:opacity-0 transition-opacity">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold bg-[#FAFAFA] text-[#0B0B0B] border border-[#0B0B0B]">
                      <Eye className="w-3.5 h-3.5 text-[#D81919]" />
                      <span>Hover for Numbers</span>
                    </span>
                  </div>

                  {/* PURE NUMERICAL HOVER OVERLAY (No paragraphs, no per-card chat CTA) */}
                  <div
                    className={`absolute inset-0 z-20 bg-[#0B0B0B]/95 p-5 text-white flex flex-col justify-center transition-all duration-200 ${
                      isHovered
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-3 pb-2 border-b border-white/15">
                      <span className="text-[#FF4D4D] font-bold">
                        {facility.daysToResult}
                      </span>
                      <span className="inline-flex items-center gap-1 text-white font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D81919]" />
                        Delivered
                      </span>
                    </div>

                    <div className="font-display font-black uppercase text-sm sm:text-base text-white leading-snug mb-4">
                      {facility.resultHeadline}
                    </div>

                    {/* 3 Prominent Tabular Metric Blocks */}
                    <div className="grid grid-cols-3 gap-2">
                      {facility.resultMetricPills.map((pill, i) => (
                        <div
                          key={i}
                          className="p-2.5 bg-white/5 border border-white/15 text-center flex flex-col justify-center items-center"
                        >
                          <div className="text-sm sm:text-base font-display font-black text-[#FF4D4D] tabular-nums leading-none">
                            {pill.value}
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-neutral-300 font-semibold uppercase tracking-wide mt-1.5 leading-tight">
                            {pill.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Editorial Card Footer with Hand-Drawn Red Marker Highlight */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                      {facility.specialty}
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0B0B0B] leading-snug group-hover:text-[#D81919] transition-colors">
                      {facility.hospitalName}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D81919] shrink-0" />
                      <span className="truncate">{facility.location}</span>
                    </div>
                  </div>

                  {/* Highlighted Hero Stat Row with Hand-Drawn Crimson Circle (Pages 4–6 motif) */}
                  <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative inline-flex items-center justify-center px-3.5 py-1.5 shrink-0">
                        <RedMarkerCircle className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)]" />
                        <span className="relative font-display font-black text-sm text-[#D81919] tabular-nums whitespace-nowrap">
                          {heroStat?.value}
                        </span>
                      </div>
                      <span className="font-bold text-xs text-[#0B0B0B] truncate">
                        {heroStat?.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-500 shrink-0">
                      30 Days
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clean Territory Protection Footnote Bar */}
        <div className="mt-12 p-6 sm:p-7 bg-white border-2 border-[#0B0B0B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-display font-black uppercase text-sm sm:text-base text-[#D81919]">
              10-Kilometer Exclusivity Agreement
            </div>
            <p className="text-xs sm:text-sm text-[#262626] mt-1">
              We partner with strictly ONE hospital per territory. Your nearby competitors are permanently locked out once your zone is reserved.
            </p>
          </div>
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B0B0B] shrink-0 border-b-2 border-[#D81919] pb-1">
            30-Day Territory Protection
          </div>
        </div>
      </div>
    </section>
  );
};
