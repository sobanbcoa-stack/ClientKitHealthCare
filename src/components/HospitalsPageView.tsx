import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ClinicsSection } from './ClinicsSection';
import { ResultsNumbersSection } from './ResultsNumbersSection';
import { CtaSection } from './CtaSection';
import { navigateTo, updateHeadTags } from '../utils/router';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { PixelHeartCluster } from './BrandArt';

export const HospitalsPageView: React.FC = () => {
  useEffect(() => {
    updateHeadTags({
      title: 'Proven Hospital Results — 6 Partner Hospitals | ClientKit',
      description:
        'Explore verified OPD consultations, elective surgeries, and corporate MOUs delivered across South City Hospital, Patel Hospital, Medicare Cardiac, Hill Park General, Hashmanis, and National Hospital Lahore.',
    });
  }, []);

  const handleCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! We represent a hospital or surgical center and want to inspect territory availability."
    );
  };

  return (
    <main className="bg-[#FAFAFA]">
      <section className="pt-12 sm:pt-16 pb-12 border-b-2 border-[#0B0B0B] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigateTo('/portfolio')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0B0B0B] hover:text-[#D81919] mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Combined Portfolio</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-3">
                Enterprise Healthcare &amp; Surgical Centers
              </div>
              <h1 className="font-display font-black uppercase text-[#0B0B0B] tracking-[-0.03em] leading-[1.03] text-[clamp(2rem,4.8vw,3.75rem)]">
                PROVEN HOSPITAL RESULTS
              </h1>
              <p className="mt-4 text-sm sm:text-base text-[#3F3F46] leading-relaxed max-w-2xl">
                Full documentation of OPD consultations, surgical procedure growth, and corporate B2B MOUs generated inside a 10-kilometer zone for 6 hospitals across Karachi and Lahore.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <PixelHeartCluster size="sm" color="#D81919" className="hidden sm:block" />
              <button
                onClick={handleCta}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D81919] hover:bg-[#0B0B0B] text-white text-xs font-display font-bold uppercase tracking-wide transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Reserve Hospital Territory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ClinicsSection showAllPageLink={false} />
      <ResultsNumbersSection />
      <CtaSection />
    </main>
  );
};
