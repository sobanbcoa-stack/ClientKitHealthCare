import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  getAlternatingCaseStudies,
  getCaseStudiesByNiche,
} from '../data/caseStudiesData';
import { navigateTo, updateHeadTags } from '../utils/router';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { CaseStudiesShowcase } from './CaseStudiesShowcase';
import { ClinicsSection } from './ClinicsSection';
import { PixelHeartCluster } from './BrandArt';

export type PortfolioFilter = 'all' | 'aesthetic' | 'dental';

interface PortfolioViewProps {
  mode: PortfolioFilter;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ mode }) => {
  const isAll = mode === 'all';
  const isAesthetic = mode === 'aesthetic';
  const isDental = mode === 'dental';

  const studies = isAll
    ? getAlternatingCaseStudies()
    : isAesthetic
    ? getCaseStudiesByNiche('aesthetic')
    : getCaseStudiesByNiche('dental');

  const metaByMode = {
    all: {
      title: 'All-Combined Portfolio (Aesthetic, Dental & Hospitals) — ClientKit',
      description:
        'Explore ClientKit verified case studies across Aesthetic Clinics, Dental Clinics, and Tertiary Hospitals across Pakistan.',
      kicker: 'Master Case Study Archive · Aesthetic · Dental · Hospitals',
      headline: 'COMBINED CLINIC & HOSPITAL PORTFOLIO',
      intro:
        'Every partner featured below holds 10-kilometer territory exclusivity. Switch tracks below to isolate Aesthetic Dermatology Studios, Dental Implant Practices, or full Tertiary Hospitals.',
    },
    aesthetic: {
      title: 'Aesthetic Clinic Portfolio & Case Studies — ClientKit',
      description:
        'Verified patient growth case studies for dermatology, laser hair removal, HydraFacial, and aesthetic clinics in Pakistan.',
      kicker: 'Aesthetic Dermatology & Laser Track · 4 Featured Clinics',
      headline: 'AESTHETIC CLINICS PORTFOLIO',
      intro:
        'How leading aesthetic studios in Lahore, Karachi, and Islamabad turn 5 hours/month of specialist expertise into booked laser, Morpheus8, HydraFacial, and injectables consultations.',
    },
    dental: {
      title: 'Dental Clinic Portfolio & Case Studies — ClientKit',
      description:
        'Verified growth case studies for dental implant, ClearPath aligner, veneer, and cosmetic dentistry clinics across Pakistan.',
      kicker: 'Dental Implants, Veneers & Orthodontics Track · 4 Featured Clinics',
      headline: 'DENTAL CLINICS PORTFOLIO',
      intro:
        'How multi-branch and specialist dental clinics capture high-margin dental implant, clear aligner, porcelain veneer, and family appointments inside their 10-km neighborhood.',
    },
  }[mode];

  useEffect(() => {
    updateHeadTags({
      title: metaByMode.title,
      description: metaByMode.description,
    });
  }, [metaByMode.title, metaByMode.description]);

  const handleCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      `Hi ClientKit! I am reviewing your ${mode} portfolio and want to reserve 10-km exclusivity for our clinic.`
    );
  };

  return (
    <main className="bg-[#FAFAFA]">
      {/* Portfolio Hero Header */}
      <section className="pt-12 sm:pt-16 pb-12 border-b-2 border-[#0B0B0B] bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-3">
                {metaByMode.kicker}
              </div>
              <h1 className="font-display font-black uppercase text-[#0B0B0B] tracking-[-0.03em] leading-[1.03] text-[clamp(2rem,4.8vw,3.75rem)]">
                {metaByMode.headline}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-[#3F3F46] leading-relaxed max-w-2xl">
                {metaByMode.intro}
              </p>
            </div>
            <PixelHeartCluster size="md" color="#D81919" className="hidden md:block shrink-0" />
          </div>

          {/* Interactive Portfolio Filter Bar (Functional Route Navigation Tabs) */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/15">
            <div
              className="flex flex-wrap items-center gap-2"
              role="navigation"
              aria-label="Portfolio categories"
            >
              <button
                onClick={() => navigateTo('/portfolio')}
                className={`px-4 py-2.5 text-xs font-display font-bold uppercase tracking-wide border-2 transition-colors cursor-pointer whitespace-nowrap ${
                  isAll
                    ? 'bg-[#D81919] text-white border-[#D81919]'
                    : 'bg-white text-[#0B0B0B] border-[#0B0B0B] hover:border-[#D81919]'
                }`}
              >
                All Clinics (08)
              </button>
              <button
                onClick={() => navigateTo('/portfolio/aesthetic')}
                className={`px-4 py-2.5 text-xs font-display font-bold uppercase tracking-wide border-2 transition-colors cursor-pointer whitespace-nowrap ${
                  isAesthetic
                    ? 'bg-[#D81919] text-white border-[#D81919]'
                    : 'bg-white text-[#0B0B0B] border-[#0B0B0B] hover:border-[#D81919]'
                }`}
              >
                Aesthetic Clinics (04)
              </button>
              <button
                onClick={() => navigateTo('/portfolio/dental')}
                className={`px-4 py-2.5 text-xs font-display font-bold uppercase tracking-wide border-2 transition-colors cursor-pointer whitespace-nowrap ${
                  isDental
                    ? 'bg-[#D81919] text-white border-[#D81919]'
                    : 'bg-white text-[#0B0B0B] border-[#0B0B0B] hover:border-[#D81919]'
                }`}
              >
                Dental Clinics (04)
              </button>
              <button
                onClick={() => navigateTo('/hospitals')}
                className="px-4 py-2.5 text-xs font-display font-bold uppercase tracking-wide border-2 bg-white text-[#0B0B0B] border-[#0B0B0B] hover:border-[#D81919] transition-colors cursor-pointer whitespace-nowrap"
              >
                Hospitals (06)
              </button>
            </div>

            <button
              onClick={handleCta}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B0B0B] hover:bg-[#D81919] text-white text-xs font-display font-bold uppercase tracking-wide transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Check Territory Availability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <CaseStudiesShowcase
        studies={studies}
        id="portfolio-grid"
        eyebrow={
          isAesthetic
            ? 'Verified Dermatology & Laser Partners'
            : isDental
            ? 'Verified Dental Implant & Cosmetic Partners'
            : 'Alternating Aesthetic & Dental Case Studies'
        }
        title={
          isAesthetic
            ? 'AESTHETIC CASE STUDIES'
            : isDental
            ? 'DENTAL CASE STUDIES'
            : 'FEATURED CLINIC CASE STUDIES'
        }
        subtitle="Click any partner card to open their individual case study breakdown, Instagram visual proof, and 10-kilometer acquisition strategy."
        showPortfolioLinks={false}
      />

      {/* In Combined Mode, include Hospital Results directly below */}
      {isAll && <ClinicsSection showAllPageLink={true} />}
    </main>
  );
};
