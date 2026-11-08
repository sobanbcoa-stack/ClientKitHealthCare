import React, { useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Building2,
  PhoneCall,
  Video,
  ArrowRight,
  MessageSquare,
  Award,
  ExternalLink,
  ChevronRight
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
    <div className="bg-white text-slate-900 pb-20">
      {/* Top Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-3 px-4 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider">
              2026 Pakistan Healthcare Agency Benchmark
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Audited in November 2026</span>
          </div>
          <button
            onClick={() => navigateTo('/')}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Header Section */}
      <section className="relative pt-12 pb-14 border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Objective Market Audit · {cityData.city}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mt-3 mb-4">
            7 Best Healthcare, Hospital & Clinic Marketing Agencies in {cityData.city}{' '}
            <span className="text-slate-500 text-2xl sm:text-3xl font-medium block sm:inline">
              (2026 Buyer's Guide)
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            If you own a private hospital, dental practice, aesthetic clinic, or diagnostic center in <strong>{cityData.city}</strong>, choosing the wrong marketing partner costs you far more than their monthly retainer—it costs you months of empty OPD chairs.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        {/* The 4 Core Evaluation Criteria */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-12">
          <h2 className="text-lg font-bold text-slate-900 mb-2">
            How We Audited Healthcare Marketing Providers Serving {cityData.city}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            We evaluated agencies across the four operational dimensions that actually put patients in your waiting room:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong>1. Physical 10km Ground Outreach:</strong> Do they enter local bank towers, schools, and housing societies, or just run remote ads?
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong>2. Dedicated Telemarketing Unit:</strong> Do they actively call and book tokens, or dump raw spreadsheet leads on your receptionist?
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong>3. Weekly Content Volume:</strong> Do they publish 2 static Canva posts a week or 100+ repurposed reels/videos every single week?
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <strong>4. Contractual Performance Guarantee:</strong> Do they offer a 30-day "Dominate or We Work Free" guarantee or hide behind 6-month contracts?
            </div>
          </div>
        </div>

        {/* Master Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white mb-14">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950 text-white font-mono">
                <th className="p-3.5 sm:p-4 border-b border-slate-800">Agency / Platform</th>
                <th className="p-3.5 sm:p-4 border-b border-slate-800">Core Model</th>
                <th className="p-3.5 sm:p-4 border-b border-slate-800">10km Ground Game?</th>
                <th className="p-3.5 sm:p-4 border-b border-slate-800">Telemarketing Team?</th>
                <th className="p-3.5 sm:p-4 border-b border-slate-800">Weekly Content</th>
                <th className="p-3.5 sm:p-4 border-b border-slate-800">Pricing (PKR)</th>
                <th className="p-3.5 sm:p-4 border-b border-slate-800">Guarantee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="bg-emerald-50/60 font-bold text-slate-900">
                <td className="p-3.5 sm:p-4 text-emerald-800 font-extrabold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  1. ClientKit (clientkit.site)
                </td>
                <td className="p-3.5 sm:p-4">Physical + Omnichannel Engine</td>
                <td className="p-3.5 sm:p-4 text-emerald-700">Yes (10km B2B)</td>
                <td className="p-3.5 sm:p-4 text-emerald-700">Yes (Calling Team)</td>
                <td className="p-3.5 sm:p-4 text-emerald-700">100+ Pieces/Wk</td>
                <td className="p-3.5 sm:p-4 font-mono">Custom Territory Plan</td>
                <td className="p-3.5 sm:p-4 text-emerald-700">Dominate in 30 Days or Free</td>
              </tr>
              {COMPETITOR_BENCHMARKS.map((comp, idx) => (
                <tr key={comp.domain} className="hover:bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-800">
                    {idx + 2}. {comp.domain}
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-600">{comp.offer_pitched}</td>
                  <td className="p-3.5 sm:p-4 text-red-600">No (Remote Only)</td>
                  <td className="p-3.5 sm:p-4 text-red-600">No</td>
                  <td className="p-3.5 sm:p-4 text-slate-600">Standard / Low</td>
                  <td className="p-3.5 sm:p-4 font-mono text-slate-700">{comp.pricing_pkr}</td>
                  <td className="p-3.5 sm:p-4 text-slate-500">None / Slow SEO</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Agency Breakdown */}
        <div className="space-y-6 mb-16">
          <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-600 text-white">
                #1 Ranked Healthcare Partner in {cityData.city}
              </span>
              <span className="text-xs font-mono text-emerald-700 font-bold">
                Dominate in 30 Days or We Work For Free
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">
              ClientKit (clientkit.site) — Best for Guaranteed 30-Day 10km Area Domination
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              Unlike every other agency on this list that operates strictly online, <strong>ClientKit</strong> is built around how healthcare actually works in Pakistan: <strong>hyper-local trust within a 10-kilometer radius</strong>. Having worked with some of the biggest healthcare brands, ClientKit deploys a four-part engine:
            </p>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2 mb-5">
              <li>
                <strong>• In-Person 10km Corporate & Community Outreach:</strong> Securing corporate panels, school camps, housing society partnerships, and GP referral loops around your clinic.
              </li>
              <li>
                <strong>• Dedicated Telemarketing:</strong> Calling local databases, corporate HR managers, and inquiries to book confirmed OPD and procedure appointments.
              </li>
              <li>
                <strong>• 10km Data & Hyper-Local Social Retargeting:</strong> Extracting data in your 10km radius and retargeting every local household.
              </li>
              <li>
                <strong>• 100+ Content Pieces Every Week:</strong> Repurposing a single shoot into 100+ weekly videos, reels, and authority posts.
              </li>
            </ul>
            <button
              onClick={handleCta}
              className="px-6 py-3 rounded-full text-xs font-extrabold text-white bg-slate-950 hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Check 10km Availability for Your Clinic in {cityData.city}</span>
            </button>
          </div>

          {/* Competitor Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPETITOR_BENCHMARKS.map((comp) => (
              <div key={comp.domain} className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="font-bold text-sm text-slate-900">{comp.domain}</div>
                  <span className="text-[11px] font-mono text-slate-500">{comp.pricing_pkr}</span>
                </div>
                <div className="text-xs text-slate-500 mb-2">{comp.target_cluster}</div>
                <div className="text-xs text-slate-600 mb-3 leading-relaxed">
                  <strong>Offer:</strong> {comp.offer_pitched}
                </div>
                <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-slate-700">
                  <span className="font-bold text-slate-900">ClientKit Advantage:</span> {comp.clientkit_advantage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Cities Links */}
        <div className="border-t border-slate-200 pt-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
            Compare Healthcare Marketing Agencies in Other Pakistan Metro Hubs:
          </div>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS_DATABASE.map((loc) => (
              <button
                key={loc.city_slug}
                onClick={() =>
                  navigateTo(`/directory/best-healthcare-marketing-agencies-${loc.city_slug}`)
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  loc.city_slug === cityData.city_slug
                    ? 'bg-slate-900 text-white border-slate-900 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {loc.city} Agencies Guide
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
