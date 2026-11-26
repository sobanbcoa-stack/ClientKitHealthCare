import React from 'react';
import { ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import {
  ClinicCaseStudy,
  getAlternatingCaseStudies,
} from '../data/caseStudiesData';
import { navigateTo } from '../utils/router';
import { PixelHeartCluster, RedMarkerCircle } from './BrandArt';

interface CaseStudiesShowcaseProps {
  studies?: ClinicCaseStudy[];
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showPortfolioLinks?: boolean;
}

export const CaseStudiesShowcase: React.FC<CaseStudiesShowcaseProps> = ({
  studies = getAlternatingCaseStudies(),
  id = 'results',
  eyebrow = 'Aesthetic & Dental Case Studies · Alternating Track Showcase',
  title = 'AESTHETIC & DENTAL PORTFOLIO',
  subtitle = 'Strictly curated growth partnerships across Pakistan’s top dermatology studios and dental implant centers. Inspect each clinic’s territory results, click their Instagram profile, or open the full case study breakdown.',
  showPortfolioLinks = true,
}) => {
  return (
    <section
      id={id}
      className="py-20 sm:py-28 bg-white border-t-2 border-[#0B0B0B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b-2 border-[#0B0B0B]">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-3">
              {eyebrow}
            </div>
            <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.02] text-[clamp(1.9rem,4.5vw,3.4rem)]">
              {title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#262626] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <PixelHeartCluster size="sm" color="#D81919" className="hidden sm:block" />
            <div className="font-display font-black text-4xl sm:text-5xl text-[#D81919] leading-none tabular-nums">
              (0{studies.length})
            </div>
          </div>
        </div>

        {/* Dedicated Portfolio & Niche Action Strip */}
        {showPortfolioLinks && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-black/10">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => navigateTo('/portfolio')}
                className="px-4 py-2 text-xs font-display font-bold uppercase tracking-wide bg-[#0B0B0B] text-white hover:bg-[#D81919] transition-colors cursor-pointer whitespace-nowrap"
              >
                All Combined Portfolio
              </button>
              <button
                onClick={() => navigateTo('/portfolio/aesthetic')}
                className="px-4 py-2 text-xs font-display font-bold uppercase tracking-wide bg-[#FAFAFA] text-[#0B0B0B] border-2 border-[#0B0B0B] hover:border-[#D81919] hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap"
              >
                Aesthetic Portfolio (4)
              </button>
              <button
                onClick={() => navigateTo('/portfolio/dental')}
                className="px-4 py-2 text-xs font-display font-bold uppercase tracking-wide bg-[#FAFAFA] text-[#0B0B0B] border-2 border-[#0B0B0B] hover:border-[#D81919] hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap"
              >
                Dental Portfolio (4)
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-[#0B0B0B]">
              <button
                onClick={() => navigateTo('/aesthetic-clinics')}
                className="hover:text-[#D81919] transition-colors cursor-pointer underline underline-offset-4 decoration-black/25 whitespace-nowrap"
              >
                Aesthetic Page →
              </button>
              <button
                onClick={() => navigateTo('/dental-clinics')}
                className="hover:text-[#D81919] transition-colors cursor-pointer underline underline-offset-4 decoration-black/25 whitespace-nowrap"
              >
                Dental Page →
              </button>
            </div>
          </div>
        )}

        {/* Alternating Aesthetic & Dental Editorial Case Study Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
          data-testid="case-studies-grid"
        >
          {studies.map((study, idx) => (
            <article
              key={study.slug}
              data-niche={study.niche}
              data-slug={study.slug}
              className="group bg-[#FAFAFA] border-2 border-[#0B0B0B] hover:border-[#D81919] transition-colors flex flex-col justify-between"
            >
              {/* Clickable Card Visual Spread: IG Content Grid + Brand Logo */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => navigateTo(`/case-study/${study.slug}`)}
                  className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D81919]"
                  aria-label={`View ${study.name} case study`}
                >
                  <div className="relative h-56 sm:h-64 bg-[#0B0B0B] border-b-2 border-[#0B0B0B] overflow-hidden">
                    <img
                      src={study.feedImageUrl}
                      alt={`${study.name} Instagram content portfolio`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-40% to-transparent pointer-events-none" />

                    {/* Top Left Editorial Index */}
                    <div className="absolute top-3 left-3 bg-[#0B0B0B] text-white font-display font-bold text-[11px] px-2.5 py-1 tabular-nums border border-white/20">
                      0{idx + 1}
                    </div>

                    {/* Bottom Left Brand Identity + Logo Overlay */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-white bg-white overflow-hidden shrink-0">
                          <img
                            src={study.logoUrl}
                            alt={`${study.name} logo`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                            loading="eager"
                          />
                        </div>
                        <div className="min-w-0 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                            {study.nicheLabel} · {study.city}
                          </div>
                          <h3 className="font-display font-black text-base sm:text-lg leading-tight text-white truncate">
                            {study.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Card Body: Area + Unboxed Metadata + IG Link + Hero Metric */}
              <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean Metadata Row without orphan dot wrap */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-neutral-600 mb-3">
                    <span className="inline-flex items-center gap-1.5 min-w-0 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#D81919] shrink-0" />
                      <span className="truncate">{study.area}, {study.city}</span>
                    </span>
                    <span className="font-bold text-[#D81919] uppercase shrink-0 whitespace-nowrap">
                      {study.niche === 'aesthetic' ? 'Aesthetic' : 'Dental'}
                    </span>
                  </div>

                  {/* Direct Clickable Instagram Handle + Followers Stats */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-black/10">
                    <a
                      href={study.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-[#0B0B0B] hover:text-[#D81919] underline decoration-black/25 hover:decoration-[#D81919] underline-offset-4 transition-colors"
                    >
                      <span>{study.instagramHandle}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                    <span className="font-mono text-[11px] text-neutral-500 tabular-nums">
                      {study.followersCount} · {study.postsCount}
                    </span>
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {study.subtitle} — {study.specialtyFocus.slice(0, 3).join(', ')}.
                  </p>
                </div>

                {/* Result Metric with RedMarkerCircle + Case Study Detail Button */}
                <div className="mt-5 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative inline-flex items-center justify-center px-3.5 py-1.5 shrink-0">
                      <RedMarkerCircle className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)]" />
                      <span className="relative font-display font-black text-sm text-[#D81919] tabular-nums whitespace-nowrap">
                        {study.heroResultValue}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#0B0B0B] truncate">
                        {study.heroResultLabel}
                      </div>
                      <div className="font-mono text-[10px] uppercase text-neutral-500">
                        {study.timeframe}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo(`/case-study/${study.slug}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-display font-bold uppercase tracking-wide bg-[#0B0B0B] text-white hover:bg-[#D81919] transition-colors cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
