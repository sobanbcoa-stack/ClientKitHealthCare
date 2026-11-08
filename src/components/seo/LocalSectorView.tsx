import React, { useEffect, useState } from 'react';
import {
  MapPin,
  Building2,
  Users,
  PhoneCall,
  Video,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Star,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import {
  LOCATIONS_DATABASE,
  SPECIALTIES,
  Specialty,
  CityLocation,
  Locality
} from '../../data/pseoData';
import { navigateTo, updateHeadTags } from '../../utils/router';
import { openWhatsApp, WHATSAPP_NUMBER_RAW } from '../../utils/calculator';

interface Props {
  citySlug: string;
  specialtySlug: string;
  localitySlug?: string;
}

export const LocalSectorView: React.FC<Props> = ({
  citySlug,
  specialtySlug,
  localitySlug
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Find location and specialty
  const cityData: CityLocation =
    LOCATIONS_DATABASE.find((c) => c.city_slug === citySlug) ||
    LOCATIONS_DATABASE[0];

  const localityData: Locality =
    (localitySlug
      ? cityData.localities.find((l) => l.slug === localitySlug)
      : cityData.localities[0]) || cityData.localities[0];

  const specialty: Specialty =
    SPECIALTIES.find((s) => s.slug === specialtySlug) || SPECIALTIES[0];

  const localityName = localitySlug ? localityData.name : cityData.city;
  const clinicsInArea = localitySlug
    ? localityData.clinics_in_10km
    : cityData.total_clinics_est;

  useEffect(() => {
    const title = `${specialty.name} Marketing & Patient Acquisition in ${localityName}, ${cityData.city} | 10km Domination in 30 Days | ClientKit`;
    const description = `Compete against ${clinicsInArea}+ clinics in ${localityName}, ${cityData.city} and win. ClientKit uses physical 10km outreach, telemarketing & 100+ weekly content pieces to fill your ${specialty.name}. Dominate in 30 days or we work for free.`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalBusiness",
          "name": `ClientKit 10km Patient Acquisition — ${localityName}`,
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": `${localityName}, ${cityData.city}, Pakistan`
          },
          "description": description,
          "telephone": "+923000000000"
        },
        {
          "@type": "Service",
          "name": `10km ${specialty.name} Patient Acquisition Engine`,
          "provider": {
            "@type": "Organization",
            "name": "ClientKit"
          },
          "areaServed": `${localityName}, ${cityData.city}`,
          "termsOfService": "Dominate Your 10km Area in 30 Days — Or We Work For Free."
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `How many competing clinics operate in ${localityName}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Our November 2026 SERP audit indicates approximately ${clinicsInArea} active clinics and healthcare centers operating within the 10km radius of ${localityName}.`
              }
            },
            {
              "@type": "Question",
              "name": `Can another ${specialty.name} in ${localityName} hire ClientKit?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `No. ClientKit enforces a strict 1-clinic-per-10km territory exclusivity guarantee. Once reserved for ${localityName}, rival practices are locked out.`
              }
            }
          ]
        }
      ]
    };

    updateHeadTags({ title, description, schema });
  }, [cityData, localityData, specialty, localityName, clinicsInArea]);

  const handleCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      `Hi ClientKit! I run a ${specialty.name} in ${localityName}, ${cityData.city}. I want to verify if the 10km exclusive territory around ${localityData.landmarks} is available under the 30-day guarantee.`
    );
  };

  return (
    <div className="bg-white text-slate-900 pb-20">
      {/* Top Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-3 px-4 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider">
              {cityData.city} Territory Protection
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              Catchment: {localityName} (10km Radius)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo(`/specialties/${specialty.slug}-marketing-agency-pakistan`)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              National {specialty.name} Hub
            </button>
            <span className="text-slate-600">/</span>
            <button
              onClick={() => navigateTo('/')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold mb-6">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{localityName}, {cityData.city} (10km Radius)</span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400">Strict 1 Clinic Cap</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Dominate the 10km Radius Around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {localityName}, {cityData.city}
            </span>
            : Guaranteed Patient Acquisition for {specialty.name}s
          </h1>

          <p className="text-base sm:text-lg font-bold text-slate-900 mb-4 font-mono">
            We Make Your {specialty.name} the #1 Choice Around {localityData.landmarks} in 30 Days — Or We Work For Free.
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            According to ClientKit’s November 2026 healthcare market audit of <strong>{cityData.city}</strong>, there are currently <strong>{clinicsInArea}+ active clinics and medical practices</strong> operating within the 10-kilometer radius surrounding <strong>{localityName}</strong> (extending across <strong>{localityData.adjacent}</strong>). Across {cityData.city}, the average clinic holds a <strong>{cityData.avg_rating}-star Google rating</strong>, and breaking into the Top 3 Google Map Pack in this corridor requires at least <strong>{cityData.top3_map_reviews_needed}+ verified, keyword-rich patient reviews</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCta}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-extrabold text-white bg-slate-950 hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400" />
              <span>Check Territory Availability for {localityName}, {cityData.city}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => navigateTo(`/directory/best-healthcare-marketing-agencies-${cityData.city_slug}`)}
              className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all text-center cursor-pointer"
            >
              Compare Agencies in {cityData.city}
            </button>
          </div>
        </div>
      </section>

      {/* Why Clinics Lose High-Ticket Patients in this Area */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Catchment Bottlenecks
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-3">
            Why {specialty.name}s in {localityName}, {cityData.city} Lose High-Ticket Patients
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Families and corporate employees living in <strong>{localityName}</strong> and neighboring <strong>{localityData.adjacent}</strong> want convenient, trusted care within a 15-minute drive (a 10km radius). Yet over 70% of clinics in {cityData.city} make three fatal mistakes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="p-5 rounded-xl border border-red-100 bg-red-50/40">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 font-bold font-mono text-sm flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                Zero Physical Presence in the Community
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You sit inside your clinic waiting for walk-ins instead of partnering with <strong>{specialty.corporate_outreach_targets}</strong> located right around {localityData.landmarks}.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-red-100 bg-red-50/40">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 font-bold font-mono text-sm flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                Slow or Unanswered Inquiries
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a patient in {localityName} asks about <strong>{specialty.high_ticket_treatments}</strong> on WhatsApp or phone after 8:00 PM, nobody calls them back immediately.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-red-100 bg-red-50/40">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 font-bold font-mono text-sm flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                Invisible Local Authority
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Posting 2 generic graphics a week cannot make you famous in a crowded market of <strong>{clinicsInArea} competing clinics</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Step 10km Lock Down Blueprint */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
              Local Territory Monopoly
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-3">
              How ClientKit Locks Down Your 10km Radius in {localityName} in 30 Days
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-black font-mono flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Step 1: In-Person Corporate & Community Outreach Across {localityName} & {localityData.adjacent}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We don't just target {localityName} from behind a computer screen. Our outreach system targets the exact 10km perimeter around <strong>{localityData.landmarks}</strong>—connecting your {specialty.name} with <strong>{specialty.corporate_outreach_targets}</strong> across {localityName} and {localityData.adjacent}. Whether it is corporate employee wellness tie-ups, school/college health camps, or local pharmacy and GP referral networks, we build physical pipelines that competitors running Facebook ads can never copy.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 font-black font-mono flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Step 2: Dedicated Telemarketing Calling Your {cityData.city} Database
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our bilingual telemarketing specialists actively call corporate HR departments, community coordinators, and every single inbound and past patient inquiry in {localityName}. Instead of leaving leads in a spreadsheet, we pre-qualify patients for <strong>{specialty.high_ticket_treatments}</strong> (valued at <strong>{specialty.avg_treatment_value_pkr}</strong>) and book them directly into your OPD slots.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 font-black font-mono flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Step 3: 10km Geo-Fenced Data & Hyper-Local Social Retargeting
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We extract local audience data and drop a strict 10km geo-fence around <strong>{localityData.landmarks}</strong> and <strong>{localityData.adjacent}</strong>. Every resident in your catchment area sees your doctor authority videos, patient testimonials, and Google Map directions daily across Instagram, Facebook, YouTube, and Google Search (capturing both English queries and local searches like <em>"{specialty.roman_urdu_keywords[0]} {localityName}"</em>).
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 font-black font-mono flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Step 4: 100+ Pieces of Content Published Every Single Week
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To outshine <strong>{clinicsInArea} competing clinics</strong> in {localityName}, volume and quality win. We take your clinical expertise and repurpose it into <strong>100+ pieces of localized short-form content every single week</strong>—answering every patient fear, pricing question, and procedure myth about <strong>{specialty.high_ticket_treatments}</strong> in {cityData.city}.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Search & Patient Economics Snapshot Table */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Local Search & Patient Economics Snapshot: {localityName}, {cityData.city}
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-mono text-xs">
                <tr>
                  <th className="p-4 border-b border-slate-800">Metric in {localityName} (10km Radius)</th>
                  <th className="p-4 border-b border-slate-800 text-slate-300">Current November 2026 Benchmark</th>
                  <th className="p-4 border-b border-slate-800 text-emerald-400">ClientKit 30-Day Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Competing Clinics in 10km Zone</td>
                  <td className="p-4 text-slate-600">~{clinicsInArea} Facilities</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Top-of-mind #1 authority in {localityName}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Reviews Needed for Top-3 Map Pack</td>
                  <td className="p-4 text-slate-600">{cityData.top3_map_reviews_needed}+ Verified Reviews</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Automated post-visit WhatsApp & call review engine</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Average High-Ticket Procedure Value</td>
                  <td className="p-4 text-slate-600">{specialty.avg_treatment_value_pkr}</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Focused campaigns on {specialty.high_ticket_treatments}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Primary Catchment Landmarks</td>
                  <td className="p-4 text-slate-600">{localityData.landmarks}</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Full 10km radius + {localityData.adjacent} spillover</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Weekly Content Visibility</td>
                  <td className="p-4 text-slate-600">Industry Avg: 2–3 posts/week</td>
                  <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">100+ Repurposed Content Pieces / Week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Claim Exclusive Territory CTA Card */}
        <div className="p-8 rounded-2xl bg-slate-950 text-white text-center mb-14 border border-slate-800">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            Strict Territory Reservation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-2 mb-3">
            Claim Exclusive 10km Territory Rights for {localityName}, {cityData.city}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-6">
            We only partner with <strong>one {specialty.name} per 10km zone</strong> in {cityData.city} so we never compete against ourselves. Once {localityName} is locked by a partner clinic, we close enrollment for that sector.
          </p>
          <button
            onClick={handleCta}
            className="px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950" />
            <span>Book 10km Domination Audit for {localityName} — 30 Days or We Work For Free</span>
          </button>
        </div>

        {/* Adjacent Localities & Hub-and-Spoke Links */}
        <div className="border-t border-slate-200 pt-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
            Serving {localityName} and Adjacent Catchments in {cityData.city}:
          </div>
          <div className="flex flex-wrap gap-2">
            {cityData.localities.map((loc) => (
              <button
                key={loc.slug}
                onClick={() =>
                  navigateTo(`/pk/${cityData.city_slug}/${loc.slug}/${specialty.slug}-10km-domination`)
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  loc.slug === localityData.slug
                    ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {loc.name}
              </button>
            ))}
            <button
              onClick={() => navigateTo(`/specialties/${specialty.slug}-marketing-agency-pakistan`)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 transition-all cursor-pointer ml-auto"
            >
              All {specialty.name} Hubs in Pakistan →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
