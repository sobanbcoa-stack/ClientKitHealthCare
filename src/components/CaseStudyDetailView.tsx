import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Instagram,
  MapPin,
} from 'lucide-react';
import {
  CLINIC_CASE_STUDIES,
  getCaseStudyBySlug,
  getSiblingCaseStudies,
} from '../data/caseStudiesData';
import { navigateTo, updateHeadTags } from '../utils/router';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { PixelHeartCluster, RedMarkerCircle } from './BrandArt';

interface CaseStudyDetailViewProps {
  slug: string;
}

export const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({
  slug,
}) => {
  const study = getCaseStudyBySlug(slug) ?? CLINIC_CASE_STUDIES[0];
  const siblings = getSiblingCaseStudies(study.slug, 3);
  const backPortfolioRoute =
    study.niche === 'aesthetic' ? '/portfolio/aesthetic' : '/portfolio/dental';

  useEffect(() => {
    updateHeadTags({
      title: `${study.name} Case Study (${study.heroResultValue} ${study.heroResultLabel}) — ClientKit`,
      description: `How ClientKit scaled ${study.name} (${study.area}, ${study.city}) using hyper-local 10-km outreach, doctor authority reels, and WhatsApp booking tokens.`,
    });
  }, [study]);

  const handleLetsChat = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      `Hi ClientKit! I just inspected the ${study.name} case study (${study.nicheLabel}) and want similar results for our clinic's 10-km territory.`
    );
  };

  return (
    <main className="bg-[#FAFAFA] pb-20">
      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b-2 border-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <button
              onClick={() => navigateTo('/portfolio')}
              className="inline-flex items-center gap-1.5 font-bold text-[#0B0B0B] hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Combined Portfolio</span>
            </button>
            <span className="text-neutral-300" aria-hidden="true">/</span>
            <button
              onClick={() => navigateTo(backPortfolioRoute)}
              className="font-bold text-neutral-600 hover:text-[#D81919] transition-colors cursor-pointer whitespace-nowrap"
            >
              {study.nicheLabel} Portfolio
            </button>
            <span className="text-neutral-300" aria-hidden="true">/</span>
            <span className="text-[#D81919] font-bold truncate max-w-[200px]">
              {study.name}
            </span>
          </div>

          <a
            href={study.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#0B0B0B] bg-[#FAFAFA] hover:bg-[#0B0B0B] hover:text-white text-xs font-mono font-bold transition-colors whitespace-nowrap"
          >
            <Instagram className="w-3.5 h-3.5 text-[#D81919]" />
            <span>{study.instagramHandle}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Case Study Hero Identity Spread */}
      <section className="pt-12 sm:pt-16 pb-14 border-b-2 border-[#0B0B0B] bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Identity */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#0B0B0B] bg-white overflow-hidden shrink-0">
                  <img
                    src={study.logoUrl}
                    alt={`${study.name} logo`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-1.5">
                    {study.nicheLabel} Case Study · 10-KM Exclusivity
                  </div>
                  <h1 className="font-display font-black uppercase text-[#0B0B0B] tracking-[-0.03em] leading-[1.03] text-[clamp(1.85rem,4.4vw,3.4rem)]">
                    {study.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-neutral-700 mt-2">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#D81919] shrink-0" />
                      {study.area}, {study.city}
                    </span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span className="font-mono text-xs text-neutral-600">
                      {study.followersCount} · {study.postsCount}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#262626] leading-relaxed max-w-2xl">
                {study.subtitle}. {study.outcomeSummary}
              </p>

              {/* Specialty Focus List */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#0B0B0B]">
                <span className="font-bold uppercase text-[#D81919]">
                  Focus Procedures:
                </span>
                {study.specialtyFocus.map((item, i) => (
                  <React.Fragment key={item}>
                    <span className="font-semibold">{item}</span>
                    {i < study.specialtyFocus.length - 1 && (
                      <span className="text-neutral-400" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right KPI Focus Frame */}
            <div className="lg:col-span-4 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF4D4D] font-bold">
                  {study.timeframe}
                </span>
                <PixelHeartCluster size="sm" color="#D81919" />
              </div>

              <div className="text-center py-3">
                <div className="relative inline-block px-5 py-2">
                  <RedMarkerCircle className="absolute -inset-x-2 -inset-y-1.5 w-[calc(100%+16px)] h-[calc(100%+12px)]" />
                  <div className="relative font-display font-black text-3xl sm:text-4xl text-white tabular-nums">
                    {study.heroResultValue}
                  </div>
                </div>
                <div className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-neutral-200">
                  {study.heroResultLabel}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/15 text-center">
                {study.secondaryStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display font-black text-sm text-[#FF4D4D] tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Account & Content Portfolio Proof Gallery */}
      <section className="py-14 sm:py-20 bg-white border-b-2 border-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2">
                Social Presence &amp; Visual Feed
              </div>
              <h2 className="font-display font-black uppercase text-xl sm:text-3xl text-[#0B0B0B]">
                INSTAGRAM CHANNEL OVERVIEW
              </h2>
            </div>

            <a
              href={study.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#D81919] hover:bg-[#0B0B0B] text-white text-xs font-display font-bold uppercase tracking-wide transition-colors whitespace-nowrap"
            >
              <span>Open {study.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-6">
            {/* Profile Snapshot Frame */}
            <div className="border-2 border-[#0B0B0B] bg-[#0B0B0B] overflow-hidden">
              <div className="px-4 py-2.5 bg-[#0B0B0B] text-white border-b border-white/15 flex items-center justify-between text-[11px] font-mono">
                <span>INSTAGRAM PROFILE SNAPSHOT · {study.instagramHandle}</span>
                <span className="text-[#FF4D4D] font-bold">
                  {study.followersCount}
                </span>
              </div>
              <img
                src={study.profileImageUrl}
                alt={`${study.name} Instagram profile snapshot`}
                referrerPolicy="no-referrer"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>

            {/* Content Feed Grid Snapshot Frame */}
            <div className="border-2 border-[#0B0B0B] bg-[#0B0B0B] overflow-hidden">
              <div className="px-4 py-2.5 bg-[#0B0B0B] text-white border-b border-white/15 flex items-center justify-between text-[11px] font-mono">
                <span>CONTENT PORTFOLIO &amp; REELS GRID</span>
                <span className="text-neutral-300">{study.postsCount}</span>
              </div>
              <img
                src={study.feedImageUrl}
                alt={`${study.name} Instagram content grid`}
                referrerPolicy="no-referrer"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem -> 10-KM Execution -> Results Breakdown */}
      <section className="py-14 sm:py-20 bg-[#FAFAFA] border-b-2 border-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Territory Challenge */}
            <div className="lg:col-span-5 bg-white border-2 border-[#0B0B0B] p-6 sm:p-8">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2">
                01. The Starting Bottleneck
              </div>
              <h2 className="font-display font-black uppercase text-xl text-[#0B0B0B] mb-4">
                TERRITORY CHALLENGE
              </h2>
              <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
                {study.challenge}
              </p>

              <div className="mt-6 pt-5 border-t border-black/10 space-y-2 text-xs font-semibold text-[#0B0B0B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D81919] shrink-0" />
                  <span>Zone Locked: {study.area} ({study.city})</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D81919] shrink-0" />
                  <span>Track: {study.nicheLabel} 90-Day Engine</span>
                </div>
              </div>
            </div>

            {/* 3 Execution Pillars */}
            <div className="lg:col-span-7 space-y-4">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919]">
                02. How ClientKit Executed Inside Their 10-KM Zone
              </div>
              {study.executionPillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="bg-white border-2 border-[#0B0B0B] p-6 flex items-start gap-5"
                >
                  <div className="font-display font-black text-2xl sm:text-3xl text-[#D81919] tabular-nums shrink-0 leading-none">
                    (0{i + 1})
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0B0B0B] mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Action Callout */}
          <div className="mt-10 p-7 sm:p-9 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF4D4D] mb-2">
                Want This Playbook For Your {study.nicheLabel}?
              </div>
              <div className="font-display font-black uppercase text-lg sm:text-2xl text-white leading-snug">
                Reserve 10-KM Exclusivity Before Your Neighboring Competitor Does.
              </div>
            </div>

            <button
              onClick={handleLetsChat}
              className="px-7 py-4 text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-white bg-[#D81919] hover:bg-[#B01212] transition-colors flex items-center gap-2 shrink-0 cursor-pointer whitespace-nowrap"
            >
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Sibling Case Studies */}
      <section className="pt-14 sm:pt-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-1.5">
                Explore Next
              </div>
              <h2 className="font-display font-black uppercase text-xl sm:text-2xl text-[#0B0B0B]">
                MORE CLINIC CASE STUDIES
              </h2>
            </div>
            <button
              onClick={() => navigateTo('/portfolio')}
              className="text-xs font-display font-bold uppercase text-[#D81919] hover:text-[#0B0B0B] cursor-pointer whitespace-nowrap"
            >
              View Full Portfolio →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siblings.map((sib) => (
              <button
                key={sib.slug}
                onClick={() => navigateTo(`/case-study/${sib.slug}`)}
                className="text-left bg-[#FAFAFA] border-2 border-[#0B0B0B] hover:border-[#D81919] transition-colors p-5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 border border-[#0B0B0B] bg-white overflow-hidden shrink-0">
                      <img
                        src={sib.logoUrl}
                        alt={`${sib.name} logo`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] font-bold uppercase text-[#D81919]">
                        {sib.nicheLabel}
                      </div>
                      <div className="font-extrabold text-sm text-[#0B0B0B] truncate">
                        {sib.name}
                      </div>
                      <div className="font-mono text-[11px] text-neutral-500 truncate">
                        {sib.instagramHandle}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs font-bold">
                  <span className="text-[#D81919] tabular-nums">
                    {sib.heroResultValue} {sib.heroResultLabel}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B] shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
