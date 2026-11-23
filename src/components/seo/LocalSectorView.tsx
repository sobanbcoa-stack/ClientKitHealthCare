import React, { useEffect } from 'react';
import {
  MapPin,
  ArrowRight,
  MessageSquare
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
    <div className="bg-[#FAFAFA] text-[#0B0B0B] pb-20">
      {/* Top Banner */}
      <div className="bg-[#0B0B0B] text-white border-b-2 border-[#D81919] py-3 px-4 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D81919]" />
            <span className="text-[#D81919] font-bold uppercase tracking-wider">
              {cityData.city} Territory Protection
            </span>
            <span className="text-[#525252]">|</span>
            <span className="text-[#E4E4E7]">
              Catchment: {localityName} (10km Radius)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo(`/specialties/${specialty.slug}-marketing-agency-pakistan`)}
              className="text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
            >
              National {specialty.name} Hub
            </button>
            <span className="text-[#525252]">/</span>
            <button
              onClick={() => navigateTo('/')}
              className="text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-20 border-b-2 border-[#0B0B0B] bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-4">
            {localityName}, {cityData.city} · Strict 1-Clinic Cap per 10km
          </p>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#D81919] uppercase tracking-tight leading-[1.06] mb-6 max-w-4xl mx-auto">
            Dominate 10km Around{' '}
            <span className="text-[#0B0B0B] underline decoration-[#D81919] decoration-4 underline-offset-8">
              {localityName}
            </span>
          </h1>

          <p className="text-base sm:text-lg font-display font-bold text-[#0B0B0B] mb-5">
            Make Your {specialty.name} #1 Around {localityData.landmarks} in 30 Days — Or We Work For Free.
          </p>

          <p className="text-sm sm:text-base text-[#3F3F46] max-w-3xl mx-auto mb-9 leading-relaxed">
            Our healthcare market audit of <strong>{cityData.city}</strong> tracks <strong>{clinicsInArea}+ active clinics</strong> within the 10-kilometer radius surrounding <strong>{localityName}</strong> (spanning <strong>{localityData.adjacent}</strong>). Average clinic rating is <strong>{cityData.avg_rating} stars</strong>, and breaking into the Top 3 Google Map Pack requires <strong>{cityData.top3_map_reviews_needed}+ verified patient reviews</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCta}
              className="w-full sm:w-auto px-8 py-4 text-sm font-display font-bold uppercase tracking-wider text-white bg-[#D81919] hover:bg-[#B01212] transition-colors flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#0B0B0B]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Check {localityName} Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo(`/directory/best-healthcare-marketing-agencies-${cityData.city_slug}`)}
              className="w-full sm:w-auto px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#0B0B0B] bg-white hover:bg-[#F4F4F5] border-2 border-[#0B0B0B] transition-colors text-center cursor-pointer"
            >
              Compare Agencies in {cityData.city}
            </button>
          </div>
        </div>
      </section>

      {/* Bottlenecks & Blueprint */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-2">
            Catchment Bottlenecks
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#0B0B0B] uppercase">
            Why {specialty.name}s in {localityName} Lose Patients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {[
              {
                num: '(01)',
                title: 'Zero Physical Community Presence',
                body: `Waiting for walk-ins instead of partnering with ${specialty.corporate_outreach_targets} around ${localityData.landmarks}.`
              },
              {
                num: '(02)',
                title: 'Unanswered Evening Inquiries',
                body: `When patients in ${localityName} inquire about ${specialty.high_ticket_treatments} on WhatsApp after 8:00 PM, nobody calls back.`
              },
              {
                num: '(03)',
                title: 'Invisible Local Authority',
                body: `Posting 2 generic graphics a week disappears inside a market of ${clinicsInArea}+ competing clinics.`
              }
            ].map((item) => (
              <div key={item.num} className="p-6 border-2 border-[#0B0B0B] bg-white">
                <div className="font-display text-xl font-black text-[#D81919] mb-3">
                  {item.num}
                </div>
                <h3 className="font-display font-bold text-[#0B0B0B] text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Lock Down Blueprint */}
        <div className="mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-2">
            Local Territory Monopoly
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#0B0B0B] uppercase mb-8">
            How We Lock Down {localityName} in 30 Days
          </h2>

          <div className="space-y-4">
            {[
              {
                num: '(01)',
                title: `In-Person Corporate & Community Outreach Across ${localityName} & ${localityData.adjacent}`,
                body: `Our outreach team works the exact 10km perimeter around ${localityData.landmarks}—connecting your ${specialty.name} with ${specialty.corporate_outreach_targets} through employee wellness tie-ups, camps, and local GP referral networks.`
              },
              {
                num: '(02)',
                title: `Dedicated Telemarketing Calling Your ${cityData.city} Database`,
                body: `Bilingual medical callers contact corporate HR managers and every inbound inquiry in ${localityName}, pre-qualifying for ${specialty.high_ticket_treatments} (${specialty.avg_treatment_value_pkr}) and booking confirmed tokens.`
              },
              {
                num: '(03)',
                title: '10km Geo-Fenced Data & Hyper-Local Retargeting',
                body: `We drop a strict 10km geo-fence around ${localityData.landmarks} and ${localityData.adjacent} across Instagram, Facebook, YouTube, and Google Search—capturing English and Roman Urdu queries like "${specialty.roman_urdu_keywords[0]} ${localityName}".`
              },
              {
                num: '(04)',
                title: '100+ Pieces of Content Published Every Week',
                body: `We turn your clinical expertise into 100+ short-form videos and posts weekly, outshining ${clinicsInArea} local competitors and answering every procedural question in ${cityData.city}.`
              }
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 bg-white border-2 border-[#0B0B0B] flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="font-display text-2xl font-black text-[#D81919] shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#0B0B0B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Economics Snapshot Table */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-black text-[#0B0B0B] uppercase mb-4">
            Local Economics Snapshot: {localityName}, {cityData.city}
          </h3>

          <div className="overflow-x-auto border-2 border-[#0B0B0B] bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0B0B0B] text-white font-mono text-xs uppercase">
                <tr>
                  <th className="p-4">Metric ({localityName} · 10km)</th>
                  <th className="p-4 text-[#A1A1AA]">Current Benchmark</th>
                  <th className="p-4 bg-[#D81919] text-white">ClientKit 30-Day Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B0B0B]/15">
                <tr>
                  <td className="p-4 font-bold text-[#0B0B0B]">Competing Clinics</td>
                  <td className="p-4 font-mono text-[#525252] tabular-nums">~{clinicsInArea} Facilities</td>
                  <td className="p-4 font-bold text-[#0B0B0B] bg-[#D81919]/5">#1 top-of-mind authority in {localityName}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0B0B0B]">Reviews for Top-3 Map Pack</td>
                  <td className="p-4 font-mono text-[#525252] tabular-nums">{cityData.top3_map_reviews_needed}+ Reviews</td>
                  <td className="p-4 font-bold text-[#0B0B0B] bg-[#D81919]/5">Automated post-visit review engine</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0B0B0B]">High-Ticket Procedure Value</td>
                  <td className="p-4 font-mono text-[#525252]">{specialty.avg_treatment_value_pkr}</td>
                  <td className="p-4 font-bold text-[#0B0B0B] bg-[#D81919]/5">Dedicated {specialty.high_ticket_treatments} funnel</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0B0B0B]">Catchment Landmarks</td>
                  <td className="p-4 text-[#525252]">{localityData.landmarks}</td>
                  <td className="p-4 font-bold text-[#0B0B0B] bg-[#D81919]/5">Full 10km + {localityData.adjacent} spillover</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#0B0B0B]">Weekly Content Volume</td>
                  <td className="p-4 font-mono text-[#525252]">2–3 posts/week avg</td>
                  <td className="p-4 font-bold text-[#D81919] bg-[#D81919]/5">100+ Pieces / Week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Claim Exclusive Territory CTA */}
        <div className="p-8 sm:p-10 bg-[#0B0B0B] text-white text-center mb-14 border-2 border-[#0B0B0B]">
          <p className="text-xs font-mono font-bold text-[#D81919] uppercase tracking-[0.2em]">
            Strict Territory Reservation
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase mt-2 mb-3">
            Lock 10km Exclusivity for {localityName}, {cityData.city}
          </h2>
          <p className="text-xs sm:text-sm text-[#D4D4D8] max-w-2xl mx-auto mb-6 leading-relaxed">
            We partner with strictly <strong>one {specialty.name} per 10km zone</strong> in {cityData.city}. Once {localityName} is locked, enrollment closes for that sector.
          </p>
          <button
            onClick={handleCta}
            className="px-8 py-4 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white bg-[#D81919] hover:bg-[#B01212] transition-colors cursor-pointer inline-flex items-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book 10km Audit for {localityName}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Adjacent Localities */}
        <div className="border-t-2 border-[#0B0B0B] pt-8">
          <div className="text-xs font-mono font-bold text-[#525252] uppercase tracking-wider mb-4">
            Adjacent 10km Sectors in {cityData.city}:
          </div>
          <div className="flex flex-wrap gap-2">
            {cityData.localities.map((loc) => (
              <button
                key={loc.slug}
                onClick={() =>
                  navigateTo(`/pk/${cityData.city_slug}/${loc.slug}/${specialty.slug}-10km-domination`)
                }
                className={`px-3.5 py-2 text-xs font-mono font-bold border-2 transition-colors cursor-pointer ${
                  loc.slug === localityData.slug
                    ? 'bg-[#D81919] text-white border-[#0B0B0B]'
                    : 'bg-white text-[#0B0B0B] border-[#0B0B0B]/20 hover:border-[#0B0B0B]'
                }`}
              >
                {loc.name}
              </button>
            ))}
            <button
              onClick={() => navigateTo(`/specialties/${specialty.slug}-marketing-agency-pakistan`)}
              className="px-4 py-2 text-xs font-mono font-bold bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] hover:bg-[#D81919] transition-colors cursor-pointer ml-auto"
            >
              All {specialty.name} Hubs →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
