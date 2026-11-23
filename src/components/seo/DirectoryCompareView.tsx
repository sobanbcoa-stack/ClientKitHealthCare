import React, { useEffect } from 'react';
import {
  CheckCircle2,
  MessageSquare,
  Award,
  ArrowRight
} from 'lucide-react';
import {
  LOCATIONS_DATABASE,
  COMPETITOR_BENCHMARKS,
  CityLocation,
  CompetitorBenchmark
} from '../../data/pseoData';
import { navigateTo, updateHeadTags } from '../../utils/router';
import { openWhatsApp, WHATSAPP_NUMBER_RAW } from '../../utils/calculator';

interface Props {
  citySlug?: string;
  competitorSlug?: string;
}

export const DirectoryCompareView: React.FC<Props> = ({
  citySlug,
  competitorSlug
}) => {
  const cityData: CityLocation =
    (citySlug
      ? LOCATIONS_DATABASE.find((c) => c.city_slug === citySlug)
      : LOCATIONS_DATABASE[0]) || LOCATIONS_DATABASE[0];

  const featuredCompetitor: CompetitorBenchmark | undefined = competitorSlug
    ? COMPETITOR_BENCHMARKS.find((c) => c.slug === competitorSlug)
    : undefined;

  useEffect(() => {
    const pageTitle = featuredCompetitor
      ? `ClientKit vs ${featuredCompetitor.domain} | 10km Patient Acquisition Comparison (2026)`
      : `7 Best Healthcare & Clinic Marketing Agencies in ${cityData.city} (2026 Comparison) | ClientKit`;

    const description = `Audit of healthcare & clinic marketing agencies in ${cityData.city}. Compare pricing, 10km physical outreach, telemarketing & content volume. Dominate in 30 days or we work for free.`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": pageTitle,
      "description": description,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ClientKit — 10km Physical + Omnichannel Patient Acquisition Engine",
          "url": "https://clientkit.site"
        },
        ...COMPETITOR_BENCHMARKS.map((comp, idx) => ({
          "@type": "ListItem",
          "position": idx + 2,
          "name": comp.domain,
          "description": comp.offer_pitched
        }))
      ]
    };

    updateHeadTags({ title: pageTitle, description, schema });
  }, [cityData, featuredCompetitor]);

  const handleCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      `Hi ClientKit! I'm reviewing healthcare marketing agencies in ${cityData.city}. I want to check exclusive 10km territory availability for my hospital / clinic.`
    );
  };

  return (
    <div className="bg-[#FAFAFA] text-[#0B0B0B] pb-20">
      {/* Top Banner */}
      <div className="bg-[#0B0B0B] text-white border-b-2 border-[#D81919] py-3 px-4 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D81919]" />
            <span className="text-[#D81919] font-bold uppercase tracking-wider">
              2026 Pakistan Healthcare Benchmark
            </span>
            <span className="text-[#525252]">|</span>
            <span className="text-[#E4E4E7]">Audited Nov 2026</span>
          </div>
          <button
            onClick={() => navigateTo('/')}
            className="text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Header Section */}
      <section className="pt-12 pb-14 border-b-2 border-[#0B0B0B] bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-mono text-xs font-bold text-[#D81919] uppercase tracking-[0.2em] mb-3">
            Objective Market Audit · {cityData.city}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0B] uppercase tracking-tight leading-[1.08] mb-4">
            Best Healthcare Marketing Agencies in{' '}
            <span className="text-[#D81919]">{cityData.city}</span>
          </h1>
          <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed max-w-2xl mx-auto">
            For private hospitals, dental clinics, aesthetic practices, and diagnostic centers in <strong>{cityData.city}</strong>, choosing the wrong partner costs far more than their monthly fee—it costs months of empty OPD rooms.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        {/* 4 Core Criteria */}
        <div className="p-6 bg-white border-2 border-[#0B0B0B] mb-12">
          <h2 className="font-display text-lg font-black text-[#0B0B0B] uppercase mb-2">
            How We Audited Healthcare Agencies in {cityData.city}
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] mb-4">
            Four operational dimensions that actually put patients in your waiting room:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#27272A]">
            {[
              ['(01) Physical 10km Ground Outreach', 'Do they enter local offices, schools, and societies, or only run remote ads?'],
              ['(02) Dedicated Telemarketing Unit', 'Do they call and book confirmed tokens, or dump raw leads on reception?'],
              ['(03) Weekly Content Volume', '2 static graphics a week vs. 100+ repurposed reels and clinical videos weekly.'],
              ['(04) Contractual Guarantee', 'A 30-day "Dominate or We Work Free" guarantee vs. 6-month lock-in retainers.']
            ].map(([title, desc]) => (
              <div key={title} className="p-4 bg-[#FAFAFA] border border-[#0B0B0B]/20">
                <strong className="font-mono text-[#D81919] block mb-1">{title}</strong>
                {desc}
              </div>
            ))}
          </div>
        </div>

        {/* Master Comparison Table */}
        <div className="overflow-x-auto border-2 border-[#0B0B0B] bg-white mb-14">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#0B0B0B] text-white font-mono uppercase">
                <th className="p-3.5 sm:p-4">Agency / Platform</th>
                <th className="p-3.5 sm:p-4">Core Model</th>
                <th className="p-3.5 sm:p-4">10km Ground</th>
                <th className="p-3.5 sm:p-4">Calling Team</th>
                <th className="p-3.5 sm:p-4">Weekly Content</th>
                <th className="p-3.5 sm:p-4">Pricing (PKR)</th>
                <th className="p-3.5 sm:p-4">Guarantee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0B0B0B]/15">
              <tr className="bg-[#D81919]/10 font-bold text-[#0B0B0B]">
                <td className="p-3.5 sm:p-4 text-[#D81919] font-extrabold">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    1. ClientKit
                  </span>
                </td>
                <td className="p-3.5 sm:p-4">Physical + Omnichannel</td>
                <td className="p-3.5 sm:p-4 text-[#0B0B0B]">Yes (10km B2B)</td>
                <td className="p-3.5 sm:p-4 text-[#0B0B0B]">Yes (Dedicated)</td>
                <td className="p-3.5 sm:p-4 text-[#D81919]">100+ / Week</td>
                <td className="p-3.5 sm:p-4 font-mono">Territory Plan</td>
                <td className="p-3.5 sm:p-4 text-[#D81919]">30 Days or Free</td>
              </tr>
              {COMPETITOR_BENCHMARKS.map((comp, idx) => (
                <tr key={comp.domain} className="hover:bg-[#FAFAFA]">
                  <td className="p-3.5 sm:p-4 font-bold text-[#0B0B0B]">
                    {idx + 2}. {comp.domain}
                  </td>
                  <td className="p-3.5 sm:p-4 text-[#525252]">{comp.offer_pitched}</td>
                  <td className="p-3.5 sm:p-4 text-[#D81919]">No (Remote)</td>
                  <td className="p-3.5 sm:p-4 text-[#D81919]">No</td>
                  <td className="p-3.5 sm:p-4 text-[#525252]">Standard / Low</td>
                  <td className="p-3.5 sm:p-4 font-mono text-[#27272A]">{comp.pricing_pkr}</td>
                  <td className="p-3.5 sm:p-4 text-[#525252]">None</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* #1 Detailed Breakdown */}
        <div className="space-y-6 mb-16">
          <div className="p-6 sm:p-8 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs uppercase">
              <span className="text-[#D81919] font-bold tracking-wider">
                #1 Ranked Healthcare Partner in {cityData.city}
              </span>
              <span className="text-[#D4D4D8]">
                Dominate in 30 Days or We Work For Free
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase mb-3">
              ClientKit — Guaranteed 30-Day 10km Area Domination
            </h3>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed mb-5">
              Unlike agencies operating strictly online, ClientKit is built around how Pakistani healthcare actually works: hyper-local trust within a 10-kilometer radius.
            </p>
            <ul className="text-xs sm:text-sm text-[#E4E4E7] space-y-2 mb-6">
              <li>
                <strong className="text-[#D81919]">(01)</strong> In-Person 10km Corporate & Community Outreach across panels, schools, and GP networks.
              </li>
              <li>
                <strong className="text-[#D81919]">(02)</strong> Dedicated Telemarketing booking confirmed OPD and procedure appointments.
              </li>
              <li>
                <strong className="text-[#D81919]">(03)</strong> 10km Data Extraction & Hyper-Local Social Retargeting.
              </li>
              <li>
                <strong className="text-[#D81919]">(04)</strong> 100+ Repurposed Authority Content Pieces Every Single Week.
              </li>
            </ul>
            <button
              onClick={handleCta}
              className="px-7 py-3.5 text-xs font-display font-bold uppercase tracking-wider text-white bg-[#D81919] hover:bg-[#B01212] transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Check 10km Availability in {cityData.city}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Competitor Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPETITOR_BENCHMARKS.map((comp) => (
              <div key={comp.domain} className="p-5 border-2 border-[#0B0B0B] bg-white">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-display font-bold text-sm text-[#0B0B0B]">{comp.domain}</div>
                  <span className="text-[11px] font-mono text-[#D81919] font-bold">{comp.pricing_pkr}</span>
                </div>
                <div className="text-xs font-mono text-[#525252] mb-2">{comp.target_cluster}</div>
                <div className="text-xs text-[#3F3F46] mb-3 leading-relaxed">
                  <strong>Offer:</strong> {comp.offer_pitched}
                </div>
                <div className="text-xs bg-[#FAFAFA] p-3 border-l-4 border-[#D81919] text-[#0B0B0B]">
                  <strong>ClientKit Advantage:</strong> {comp.clientkit_advantage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Cities Links */}
        <div className="border-t-2 border-[#0B0B0B] pt-8">
          <div className="text-xs font-mono font-bold text-[#525252] uppercase tracking-wider mb-4">
            Compare Healthcare Marketing Agencies in Other Pakistan Metro Hubs:
          </div>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS_DATABASE.map((loc) => (
              <button
                key={loc.city_slug}
                onClick={() =>
                  navigateTo(`/directory/best-healthcare-marketing-agencies-${loc.city_slug}`)
                }
                className={`px-3.5 py-2 text-xs font-mono font-bold border-2 transition-colors cursor-pointer ${
                  loc.city_slug === cityData.city_slug
                    ? 'bg-[#D81919] text-white border-[#0B0B0B]'
                    : 'bg-white text-[#0B0B0B] border-[#0B0B0B]/20 hover:border-[#0B0B0B]'
                }`}
              >
                {loc.city} Guide
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
