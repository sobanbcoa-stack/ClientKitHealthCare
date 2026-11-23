import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { PixelDino, PixelMushroom, PixelHeartCluster } from './BrandArt';

export const PillarsSection: React.FC = () => {
  const handlePillarsCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! I want to deploy the 3 patient acquisition pillars for our hospital. Let's chat about next steps."
    );
  };

  return (
    <section id="pillars" className="bg-[#FAFAFA] border-t-2 border-[#0B0B0B] overflow-hidden">
      {/* ============================================================
          CHAPTER INTRO: "SYSTEM" MEADOW SPREAD (Directly echoes PDF Page 7)
         ============================================================ */}
      <div className="relative pt-16 sm:pt-24 bg-[#FAFAFA] overflow-hidden border-b-2 border-[#0B0B0B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-500 mb-5">
            The 3-Pillar Healthcare Acquisition Engine
          </div>

          {/* Numbered Index List (PDF Page 7 Top-Left) */}
          <ol className="space-y-3 sm:space-y-4 mb-14 sm:mb-20">
            <li className="font-display font-black uppercase text-[#D81919] text-base sm:text-xl lg:text-2xl flex items-baseline gap-4">
              <span className="tabular-nums shrink-0">(01)</span>
              <span>IN-PERSON CORPORATE &amp; GROUND OUTREACH</span>
            </li>
            <li className="font-display font-black uppercase text-[#D81919] text-base sm:text-xl lg:text-2xl flex items-baseline gap-4">
              <span className="tabular-nums shrink-0">(02)</span>
              <span>10-KM HYPER-LOCAL RETARGETING</span>
            </li>
            <li className="font-display font-black uppercase text-[#D81919] text-base sm:text-xl lg:text-2xl flex items-baseline gap-4">
              <span className="tabular-nums shrink-0">(03)</span>
              <span>THE 5-HOUR DOCTOR TRUST ENGINE</span>
            </li>
          </ol>

          {/* Giant "SYSTEM" Display Wordmark rising behind the meadow crest */}
          <div className="relative z-10 -mb-6 sm:-mb-10 lg:-mb-14 select-none">
            <div className="font-display font-black uppercase text-[#D81919] tracking-[-0.04em] leading-[0.82] text-[clamp(3.2rem,11.5vw,9.5rem)]">
              SYSTEM
            </div>
          </div>
        </div>

        {/* Curved Meadow Hill + Mirrored Pixel T-Rex + Twin Mushrooms */}
        <div className="relative w-full z-20 pointer-events-none select-none">
          <div className="absolute right-[28%] sm:right-[26%] bottom-[16%] sm:bottom-[20%] z-20">
            <PixelMushroom className="w-10 h-10 sm:w-14 sm:h-14" />
          </div>
          <div className="absolute right-[19%] sm:right-[18%] bottom-[24%] sm:bottom-[28%] z-20">
            <PixelMushroom className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <div className="absolute right-[2%] sm:right-[4%] bottom-[14%] sm:bottom-[18%] z-20 animate-dino-subtle">
            <PixelDino
              flip={true}
              className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 drop-shadow-[0_6px_0_rgba(0,0,0,0.16)]"
            />
          </div>
          <img
            src="/assets/brand/meadow-hill.png"
            alt=""
            aria-hidden="true"
            className="w-full h-[110px] sm:h-[165px] lg:h-[210px] object-cover object-top block"
          />
        </div>
      </div>

      {/* ============================================================
          PILLAR (01) SPREAD (Echoes PDF Page 8 — Terraced Hill + 3 Columns)
         ============================================================ */}
      <div className="py-20 sm:py-28 border-b-2 border-[#0B0B0B] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-14">
            {/* Left Framed Landscape Photo */}
            <div className="lg:col-span-5">
              <div className="h-64 sm:h-72 lg:h-full border-2 border-[#0B0B0B] overflow-hidden bg-[#0B0B0B]">
                <img
                  src="/assets/brand/terraced-hill.jpg"
                  alt="10km territory elevation landscape"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Giant Display Title + Oversized (01) */}
            <div className="lg:col-span-7 flex flex-col justify-between lg:text-right">
              <div>
                <h3 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[0.98] text-[clamp(2rem,4.8vw,4rem)]">
                  IN-PERSON{' '}
                  <br />
                  OUTREACH
                </h3>
                <p className="mt-5 text-sm sm:text-base text-[#262626] leading-relaxed lg:ml-auto max-w-xl">
                  We put real boots on the ground. Our field team physically walks into corporate offices, bank towers, and gated residential societies within your 10-kilometer radius with official VIP health cards and handsome family checkup offers.
                </p>
              </div>
              <div className="mt-6 font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#D81919] leading-none tabular-nums">
                (01)
              </div>
            </div>
          </div>

          {/* 3-Column Editorial Breakdown (Echoing SETUP / SUCCESSFUL / SCALE on Page 8) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-black/15 mb-12">
            <div>
              <h4 className="font-display font-black uppercase text-lg text-[#D81919] mb-2.5">
                FIELD WALK-INS
              </h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                Dedicated representatives meet HR directors, commercial plaza admins, and residential union boards inside your exact 10-km catchment.
              </p>
            </div>
            <div>
              <h4 className="font-display font-black uppercase text-lg text-[#D81919] mb-2.5">
                VIP CARDS &amp; CAMPS
              </h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                We hand over memorable family privilege cards and book on-site executive health screening camps that bring immediate trust.
              </p>
            </div>
            <div>
              <h4 className="font-display font-black uppercase text-lg text-[#D81919] mb-2.5">
                VERIFIED DATA CAPTURE
              </h4>
              <p className="text-sm text-[#333333] leading-relaxed">
                Every visit collects opt-in family and corporate contacts one by one—fueling your private 10-km patient database.
              </p>
            </div>
          </div>

          {/* Real Field Outreach Dispatch Table */}
          <div className="border-2 border-[#0B0B0B] bg-[#FAFAFA] p-5 sm:p-7">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#D81919] mb-4">
              Verified Field Outreach Dispatch · Karachi &amp; Lahore Corridors
            </div>
            <div className="divide-y divide-black/10 text-xs sm:text-sm">
              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#0B0B0B]">
                    1. Habib Bank Corporate Tower, Clifton
                  </div>
                  <div className="text-neutral-600 text-xs mt-0.5">
                    Met HR Director · Handed VIP Cards &amp; Executive Health Camp · 220 Staff Enrolled
                  </div>
                </div>
                <span className="font-mono text-xs font-bold uppercase text-[#D81919] shrink-0">
                  Corporate Camp Booked
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#0B0B0B]">
                    2. Creek Vista Apartments, DHA Phase 8
                  </div>
                  <div className="text-neutral-600 text-xs mt-0.5">
                    Met Resident Management · Distributed Family Vouchers · 450 Residents Reached
                  </div>
                </div>
                <span className="font-mono text-xs font-bold uppercase text-[#D81919] shrink-0">
                  Family Clinic Scheduled
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-[#0B0B0B]">
                    3. Tech Park Office Hub, Shahrah-e-Faisal
                  </div>
                  <div className="text-neutral-600 text-xs mt-0.5">
                    Met Corporate Admin · Emergency Protocol MOU Signed · 180 Employees Registered
                  </div>
                </div>
                <span className="font-mono text-xs font-bold uppercase text-[#D81919] shrink-0">
                  MOU Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          PILLAR (02) SPREAD (Echoes PDF Page 9 — Overlapping Display + Misty Hill)
         ============================================================ */}
      <div className="py-20 sm:py-28 border-b-2 border-[#0B0B0B] bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Giant (02) + Bold Title + Misty Green Hill Photo + Pixel Hearts */}
            <div className="lg:col-span-6">
              <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#D81919] leading-none tabular-nums mb-6">
                (02)
              </div>
              <h3 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,4.6vw,3.6rem)] mb-6">
                10-KM LOCAL{' '}
                <br />
                RETARGETING
              </h3>
              <div className="flex items-end gap-6">
                <div className="w-full max-w-sm h-64 sm:h-72 border-2 border-[#0B0B0B] overflow-hidden bg-[#0B0B0B]">
                  <img
                    src="/assets/brand/misty-green-hill.jpg"
                    alt="Misty emerald green hillside"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <PixelHeartCluster size="sm" color="#D81919" className="hidden sm:block shrink-0 mb-4" />
              </div>
            </div>

            {/* Right Column: Two Stacked Editorial Subsections (Echoing Page 9 Right) */}
            <div className="lg:col-span-6 lg:pt-10 space-y-10">
              <div>
                <h4 className="font-display font-black uppercase text-xl sm:text-2xl text-[#D81919] mb-3">
                  VERIFIED CONTACT MATRIX
                </h4>
                <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
                  We upload the verified corporate and neighborhood contact lists collected by our field team into our secure ad matrix—retargeting those exact families across Facebook, Instagram, and YouTube so your doctors stay top of mind daily.
                </p>
              </div>

              <div className="pt-8 border-t border-black/15">
                <h4 className="font-display font-black uppercase text-xl sm:text-2xl text-[#D81919] mb-3">
                  LOOKALIKE 10-KM HOUSEHOLDS
                </h4>
                <p className="text-sm sm:text-base text-[#262626] leading-relaxed mb-5">
                  Instead of wasting budget on random national impressions 40km away, every single rupee targets high-intent households living and working within driving distance of your hospital gates.
                </p>
                <div className="space-y-2.5 text-sm font-semibold text-[#0B0B0B]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D81919] shrink-0 mt-1" />
                    <span>Continuous doctor tips &amp; consultation offers strictly inside your 10-km perimeter</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D81919] shrink-0 mt-1" />
                    <span>Zero wasted clicks from neighborhoods that cannot physically visit your OPD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          PILLAR (03) SPREAD (Echoes PDF Page 10 — Centered Title + Twin Landscapes)
         ============================================================ */}
      <div className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[0.98] text-[clamp(2rem,5.2vw,4.25rem)] text-center mb-12 sm:mb-16">
            DOCTOR ENGINE
          </h3>

          {/* Two Editorial Columns (Echoing AUTOMATE / HIRING & SCALING on Page 10) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-14">
            <div>
              <h4 className="font-display font-black uppercase text-xl sm:text-2xl text-[#D81919] mb-3">
                5 HOURS / MONTH ONLY
              </h4>
              <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
                Busy surgeons and consultants should never waste 15 hours a week filming social content. Our studio production crew visits your facility once a month for just 5 structured hours to capture 5 core specialist advisory sessions.
              </p>
            </div>
            <div>
              <h4 className="font-display font-black uppercase text-xl sm:text-2xl text-[#D81919] mb-3">
                100 LOCAL VIDEO ASSETS
              </h4>
              <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
                We edit, subtitle in English and Urdu, and repurpose those 5 sessions into 100 crisp video tips and symptom explainers—each routing directly into your hospital WhatsApp desk for 60-second consultation tokens.
              </p>
            </div>
          </div>

          {/* 3 Clean Tabular Proof Figures */}
          <div className="grid grid-cols-3 border-2 border-[#0B0B0B] bg-[#FAFAFA] divide-x-2 divide-[#0B0B0B] text-center mb-14">
            <div className="p-4 sm:p-6">
              <div className="font-display font-black text-xl sm:text-3xl text-[#D81919] tabular-nums">
                5 HRS
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#262626] mt-1">
                Doctor Time / Mo
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="font-display font-black text-xl sm:text-3xl text-[#0B0B0B] tabular-nums">
                100 CLIPS
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#262626] mt-1">
                Localized Videos
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="font-display font-black text-xl sm:text-3xl text-[#D81919] tabular-nums">
                60 SEC
              </div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#262626] mt-1">
                WhatsApp Tokens
              </div>
            </div>
          </div>

          {/* Bottom Row: Giant (03) + Pixel Hearts + Side-by-Side Green Ridges (Page 10 Bottom) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-4 flex items-center gap-6">
              <div className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#D81919] leading-none tabular-nums">
                (03)
              </div>
              <PixelHeartCluster size="sm" color="#D81919" />
            </div>

            <div className="lg:col-span-3">
              <div className="h-44 sm:h-48 border-2 border-[#0B0B0B] overflow-hidden bg-[#0B0B0B]">
                <img
                  src="/assets/brand/rolling-ridge.jpg"
                  alt="Sunlit rolling emerald ridge"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-44 sm:h-48 border-2 border-[#0B0B0B] overflow-hidden bg-[#0B0B0B]">
                <img
                  src="/assets/brand/valley-hills.jpg"
                  alt="Deep emerald mountain valley"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={handlePillarsCta}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-display font-bold uppercase tracking-wide text-white bg-[#D81919] hover:bg-[#0B0B0B] transition-colors cursor-pointer active:scale-[0.98]"
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
