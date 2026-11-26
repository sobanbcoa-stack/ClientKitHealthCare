import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import {
  ClinicNiche,
  getCaseStudiesByNiche,
} from '../data/caseStudiesData';
import { navigateTo, updateHeadTags } from '../utils/router';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { CaseStudiesShowcase } from './CaseStudiesShowcase';
import { PixelDino, PixelMushroom, PixelHeartCluster } from './BrandArt';
import { CtaSection } from './CtaSection';

interface NicheLandingViewProps {
  niche: ClinicNiche;
}

const NICHE_CONTENT: Record<
  ClinicNiche,
  {
    title: string;
    description: string;
    kicker: string;
    headlineMain: string;
    headlineAccent: string;
    subheadline: string;
    portfolioPath: string;
    portfolioLabel: string;
    otherNichePath: string;
    otherNicheLabel: string;
    painPoints: { num: string; title: string; text: string }[];
    proceduresTitle: string;
    procedures: string[];
    outreachTargets: { title: string; detail: string }[];
  }
> = {
  aesthetic: {
    title: 'Aesthetic Clinics Marketing System — 90 Days or Free | ClientKit',
    description:
      'Hyper-local patient acquisition exclusively for Aesthetic Clinics, Skin Studios, and Dermatology Centers. Laser hair removal, HydraFacial, Morpheus8, and bridal skin growth in 90 days.',
    kicker: 'Dedicated Track · Aesthetic & Dermatology Clinics · 1 Partner Per 10-KM',
    headlineMain: 'Fill Your Laser, Facial & Derm Rooms in 90 Days.',
    headlineAccent: 'Or We Work For Free.',
    subheadline:
      'Stop discounting HydraFacials for bargain hunters. ClientKit locks down high-LTV laser hair removal, Morpheus8, Sculptra, fillers, and bridal skin patients living within 10 km of your aesthetic clinic.',
    portfolioPath: '/portfolio/aesthetic',
    portfolioLabel: 'Explore Aesthetic Portfolio (4 Clinics)',
    otherNichePath: '/dental-clinics',
    otherNicheLabel: 'Switch to Dental Clinics Track →',
    painPoints: [
      {
        num: '01',
        title: 'Coupon Hunters Looking for Rs. 2,500 Facials',
        text: 'Cheap discount ads bring one-time deal seekers who never convert into high-margin Soprano laser courses, Morpheus8, or aesthetic dermatology plans.',
      },
      {
        num: '02',
        title: 'Beauty Parlors Undercutting Medical Credibility',
        text: 'Local families confuse medically supervised dermatologists with unregulated salons unless your lead doctor visibly educates them across their daily social feed.',
      },
      {
        num: '03',
        title: 'Busy Aesthetic Physicians Skipping Shoots',
        text: 'Between patient consultations and laser sessions, doctors simply cannot film daily reels. Our 5-hour monthly shoot solves this completely.',
      },
    ],
    proceduresTitle: 'HIGH-MARGIN AESTHETIC TREATMENTS WE SCALE',
    procedures: [
      'Soprano ICE & Titanium Laser Hair Removal Packages',
      'Morpheus8, Secret RF & Acne Scar Remodeling',
      'Signature HydraFacial, Salmon Glow & Glass Skin Plans',
      'Anti-Aging Botox, Dermal Fillers & Sculptra',
      'Hair PRP, Exosomes & NAD+ Wellness Drips',
      'Bridal Pre-Wedding 6-Session Skin Countdowns',
    ],
    outreachTargets: [
      {
        title: 'Luxury Bridal Studios & High-End Salons',
        detail:
          'Joint VIP skin-prep referral cards placed directly at bridal booking desks within 10 km.',
      },
      {
        title: 'Corporate Female Leadership & Private Banks',
        detail:
          'In-person executive wellness invitations distributed to nearby corporate towers and banks.',
      },
      {
        title: 'Upscale Gyms, Pilates Studios & Universities',
        detail:
          'Exclusive dermatology skin assessments capturing verified local contacts into your 10-km retargeting matrix.',
      },
    ],
  },
  dental: {
    title: 'Dental Clinics Marketing System — 90 Days or Free | ClientKit',
    description:
      'Hyper-local patient acquisition exclusively for Dental Clinics & Implant Centers. Dental implants, ClearPath aligners, braces, and porcelain veneers booked in 90 days.',
    kicker: 'Dedicated Track · Dental & Implant Practices · 1 Partner Per 10-KM',
    headlineMain: 'Book More Implants, Aligners & Veneers in 90 Days.',
    headlineAccent: 'Or We Work For Free.',
    subheadline:
      'Stop relying on low-margin scaling offers to keep chairs busy. ClientKit captures high-ticket dental implants, ClearPath aligners, porcelain veneers, and multi-member families inside your 10-km neighborhood.',
    portfolioPath: '/portfolio/dental',
    portfolioLabel: 'Explore Dental Portfolio (4 Clinics)',
    otherNichePath: '/aesthetic-clinics',
    otherNicheLabel: 'Switch to Aesthetic Clinics Track →',
    painPoints: [
      {
        num: '01',
        title: 'Empty Implant & Orthodontic Chairs Mid-Week',
        text: 'General scaling walk-ins barely cover clinic overhead while high-value implant surgeries, aligners, and veneer cases go to flashy competitors.',
      },
      {
        num: '02',
        title: 'Patient Fear & Price-Shopping Silence',
        text: 'Patients delay root canals and orthodontic work out of anxiety unless they hear calm, trusted explanations directly from your dental specialists before visiting.',
      },
      {
        num: '03',
        title: 'Dropped Reception Calls & Lost Instagram DMs',
        text: 'Cosmetic and implant patients ask questions late at night. Direct WhatsApp triage lets them share X-rays or smile photos and receive instant chair tokens.',
      },
    ],
    proceduresTitle: 'HIGH-VALUE DENTAL PROCEDURES WE SCALE',
    procedures: [
      'Single-Tooth & Full-Arch Dental Implants',
      'ClearPath / Invisible Aligners & Self-Ligating Braces',
      'Porcelain Veneers & Digital Smile Makeovers',
      'Pain-Free Microscopic Root Canal Treatments',
      'Teeth Whitening & Executive Corporate Scaling Drives',
      'Pediatric & Multi-Generational Family Dentistry',
    ],
    outreachTargets: [
      {
        title: 'Corporate Offices & Bank Regional Hubs',
        detail:
          'Employee dental privilege cards and on-site dental screening camps within 10 km of your clinic.',
      },
      {
        title: 'Private Schools, Colleges & Universities',
        detail:
          'Annual student dental checkups generating orthodontic aligner and family referrals year-round.',
      },
      {
        title: 'Residential Communities & Apartment Unions',
        detail:
          'Direct household dental VIP invitations ensuring nearby families pick your clinic first for every emergency or smile upgrade.',
      },
    ],
  },
};

export const NicheLandingView: React.FC<NicheLandingViewProps> = ({ niche }) => {
  const copy = NICHE_CONTENT[niche];
  const nicheStudies = getCaseStudiesByNiche(niche);

  useEffect(() => {
    updateHeadTags({
      title: copy.title,
      description: copy.description,
    });
  }, [copy.title, copy.description]);

  const handleNicheCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      `Hi ClientKit! I run a ${niche} clinic and want to lock down 10-km exclusivity for our neighborhood.`
    );
  };

  return (
    <main className="bg-[#FAFAFA]">
      {/* Dedicated Niche Hero */}
      <section className="relative bg-[#FAFAFA] overflow-hidden pt-10 sm:pt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 text-center">
          <div className="font-mono font-bold text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D81919] mb-4">
            {copy.kicker}
          </div>

          <h1 className="font-sans font-extrabold text-[#0B0B0B] tracking-[-0.03em] leading-[1.08] text-[clamp(2.1rem,5vw,4.1rem)] max-w-4xl mx-auto">
            {copy.headlineMain}
            <span className="block text-[#D81919] mt-1.5">{copy.headlineAccent}</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#3F3F46] font-medium leading-relaxed max-w-2xl mx-auto">
            {copy.subheadline}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={handleNicheCta}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-display font-bold uppercase tracking-wide text-white bg-[#D81919] hover:bg-[#0B0B0B] transition-colors flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
            >
              <span>Reserve 10-KM Exclusivity</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo(copy.portfolioPath)}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-[#0B0B0B] bg-white hover:bg-[#F2F2F2] border-2 border-[#0B0B0B] transition-colors cursor-pointer whitespace-nowrap"
            >
              {copy.portfolioLabel}
            </button>
          </div>

          <div className="mt-5">
            <button
              onClick={() => navigateTo(copy.otherNichePath)}
              className="font-mono text-xs font-bold text-[#0B0B0B] hover:text-[#D81919] underline underline-offset-4 decoration-black/25 cursor-pointer"
            >
              {copy.otherNicheLabel}
            </button>
          </div>
        </div>

        <PixelHeartCluster
          size="lg"
          color="#D81919"
          className="hidden lg:block absolute right-[6%] bottom-[130px] z-20"
        />

        <div className="relative w-full mt-6 select-none pointer-events-none">
          <div className="absolute left-[5%] bottom-[14%] z-20 animate-dino-subtle">
            <PixelDino className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_6px_0_rgba(0,0,0,0.12)]" />
          </div>
          <div className="absolute left-[38%] bottom-[24%] z-20">
            <PixelMushroom className="w-9 h-9 sm:w-12 sm:h-12" />
          </div>
          <div className="absolute right-[24%] bottom-[22%] z-20">
            <PixelMushroom className="w-8 h-8 sm:w-11 sm:h-11" />
          </div>
          <img
            src="/assets/brand/meadow-hill.png"
            alt=""
            aria-hidden="true"
            className="w-full h-[105px] sm:h-[145px] lg:h-[175px] object-cover object-top block"
            loading="eager"
          />
        </div>
      </section>

      {/* Niche Case Studies Immediately Below Hero */}
      <CaseStudiesShowcase
        studies={nicheStudies}
        id="niche-results"
        eyebrow={`Verified ${niche === 'aesthetic' ? 'Aesthetic Dermatology' : 'Dental Implant & Cosmetic'} Partners`}
        title={`${niche === 'aesthetic' ? 'AESTHETIC' : 'DENTAL'} CASE STUDIES`}
        subtitle="Click any partner below to inspect their Instagram presence, clinic location, and verified 90-day local growth engine."
        showPortfolioLinks={false}
      />

      {/* Niche Challenges & High-Margin Procedures */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-t-2 border-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Challenges */}
            <div className="lg:col-span-7">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2">
                Why Most {niche === 'aesthetic' ? 'Aesthetic' : 'Dental'} Marketing Fails
              </div>
              <h2 className="font-display font-black uppercase text-2xl sm:text-3xl text-[#0B0B0B] mb-6">
                THE 3 REVENUE LEAKS WE STOP
              </h2>
              <div className="divide-y-2 divide-[#0B0B0B] border-y-2 border-[#0B0B0B] bg-white">
                {copy.painPoints.map((p) => (
                  <div key={p.num} className="p-5 sm:p-6 flex items-start gap-4">
                    <span className="font-display font-black text-xl text-[#D81919] tabular-nums shrink-0">
                      ({p.num})
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-extrabold text-base text-[#0B0B0B] mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#404040] leading-relaxed">{p.text}</p>
                    </div>
                    <X className="w-4 h-4 text-[#D81919] shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Procedures List */}
            <div className="lg:col-span-5 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF4D4D] mb-2">
                  Focus Treatments
                </div>
                <h2 className="font-display font-black uppercase text-xl text-white mb-6">
                  {copy.proceduresTitle}
                </h2>
                <ul className="space-y-3.5">
                  {copy.procedures.map((proc) => (
                    <li key={proc} className="flex items-start gap-2.5 text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D81919] shrink-0 mt-0.5" />
                      <span>{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handleNicheCta}
                className="mt-8 w-full py-3.5 px-5 bg-[#D81919] hover:bg-[#B01212] text-white font-display font-bold uppercase text-xs tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In Our 10-KM Territory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 10-KM B2B Ground Outreach Targets */}
          <div className="mt-14 pt-12 border-t-2 border-[#0B0B0B]">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2">
              Boots On The Ground
            </div>
            <h2 className="font-display font-black uppercase text-2xl sm:text-3xl text-[#0B0B0B] mb-8">
              OUR 10-KM FIELD OUTREACH FOR {niche === 'aesthetic' ? 'AESTHETIC CLINICS' : 'DENTAL CLINICS'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.outreachTargets.map((target, idx) => (
                <div
                  key={target.title}
                  className="bg-white border-2 border-[#0B0B0B] p-6"
                >
                  <div className="font-display font-black text-2xl text-[#D81919] tabular-nums mb-3">
                    (0{idx + 1})
                  </div>
                  <h3 className="font-extrabold text-base text-[#0B0B0B] mb-2">
                    {target.title}
                  </h3>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {target.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};
