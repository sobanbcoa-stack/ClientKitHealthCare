import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  XCircle,
  MapPin,
  Clock
} from 'lucide-react';
import { Specialty, SPECIALTIES, LOCATIONS_DATABASE, BLOG_POSTS, EXTRACTED_PAA_QUESTIONS } from '../../data/pseoData';
import { navigateTo, updateHeadTags } from '../../utils/router';
import { openWhatsApp, WHATSAPP_NUMBER_RAW } from '../../utils/calculator';
import { PixelHeartCluster } from '../BrandArt';

interface Props {
  specialtySlug: string;
}

export const NationalSpecialtyView: React.FC<Props> = ({ specialtySlug }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const specialty: Specialty =
    SPECIALTIES.find((s) => s.slug === specialtySlug) || SPECIALTIES[0];

  useEffect(() => {
    const title = `${specialty.name} Marketing Agency in Pakistan | Dominate Your 10km Radius in 30 Days | ClientKit`;
    const description = `Stop paying for empty clicks. ClientKit builds a Guaranteed Patient Acquisition Engine for ${specialty.name}s in Pakistan using 10km physical outreach, telemarketing, and 100+ weekly content pieces. Dominate in 30 days or we work for free.`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MarketingAgency",
          "name": `ClientKit — ${specialty.name} Patient Acquisition Engine`,
          "url": `https://clientkit.site/specialties/${specialty.slug}-marketing-agency-pakistan`,
          "areaServed": "Pakistan",
          "description": description,
          "priceRange": specialty.avg_treatment_value_pkr,
          "telephone": "+923000000000"
        },
        {
          "@type": "Service",
          "name": `10km Patient Acquisition Engine for ${specialty.name}s`,
          "provider": {
            "@type": "Organization",
            "name": "ClientKit"
          },
          "serviceType": "Healthcare Patient Acquisition & Physical B2B Outreach",
          "termsOfService": "Dominate Your 10km Area in 30 Days — Or We Work For Free."
        },
        {
          "@type": "FAQPage",
          "mainEntity": EXTRACTED_PAA_QUESTIONS.slice(0, 5).map((q) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `ClientKit guarantees 10km territory domination for ${specialty.name}s in Pakistan within 30 days using physical B2B outreach, bilingual telemarketing, and 100+ weekly repurposed authority videos.`
            }
          }))
        }
      ]
    };

    updateHeadTags({ title, description, schema });
  }, [specialty]);

  const handleCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      `Hi ClientKit! I run a ${specialty.name} in Pakistan. I want to check 10km territory exclusivity for my area and discuss the 30-day patient acquisition guarantee.`
    );
  };

  return (
    <div className="bg-[#FAFAFA] text-[#0B0B0B] pb-20">
      {/* Sub-navigation bar */}
      <div className="bg-[#0B0B0B] text-white border-b-2 border-[#D81919] py-3 px-4 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#D81919] font-bold uppercase tracking-wider">
              10-KM Exclusivity
            </span>
            <span className="text-[#525252]">|</span>
            <span className="text-[#E4E4E7]">
              Strictly ONE {specialty.name} per 10km Radius in Pakistan
            </span>
          </div>
          <button
            onClick={() => navigateTo('/')}
            className="text-[#D4D4D8] hover:text-white transition-colors cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-20 border-b-2 border-[#0B0B0B] bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-4">
            National Healthcare Growth Program · {specialty.doctor_title}s in Pakistan
          </p>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#D81919] uppercase tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">
            Guaranteed Patient Acquisition for{' '}
            <span className="text-[#0B0B0B] underline decoration-[#D81919] decoration-4 underline-offset-8">
              {specialty.name}s
            </span>
          </h1>

          <p className="text-base sm:text-xl font-display font-extrabold text-[#0B0B0B] mb-6">
            Dominate Your 10km Radius in 30 Days — Or We Work For Free.
          </p>

          <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed max-w-3xl mx-auto mb-6">
            Most "healthcare digital marketing agencies" in Pakistan sit behind a laptop, boost a few Facebook posts, and blame your reception desk when patients don't show up. Aggregators like Oladoc and Marham take 20% to 30% of your fee while listing five competing doctors right next to your name.
          </p>

          <div className="text-sm sm:text-base text-[#0B0B0B] font-medium leading-relaxed max-w-3xl mx-auto mb-9 bg-white p-5 border-2 border-[#0B0B0B] text-left">
            At <strong>ClientKit</strong>, we deploy a <strong>Physical + Omnichannel 10km Patient Acquisition Engine</strong> built specifically for <strong>{specialty.doctor_title}s</strong>. We go physically into your 10km radius, call your local market directly, publish 100+ pieces of authority content weekly, and fill your rooms with high-value <strong>{specialty.high_ticket_treatments}</strong> patients.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCta}
              className="w-full sm:w-auto px-8 py-4 text-sm font-display font-bold uppercase tracking-wider text-white bg-[#D81919] hover:bg-[#B01212] transition-colors flex items-center justify-center gap-2.5 cursor-pointer border-2 border-[#0B0B0B]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Claim Your 10km Territory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('/sitemap')}
              className="w-full sm:w-auto px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#0B0B0B] bg-white hover:bg-[#F4F4F5] border-2 border-[#0B0B0B] transition-colors text-center cursor-pointer"
            >
              Browse All Pakistan Sectors
            </button>
          </div>
        </div>
      </section>

      {/* Economics & Why Traditional Agencies Fail */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-2">
              The Traditional Bottleneck
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0B0B0B] uppercase tracking-tight">
              Why Agencies Fail {specialty.name}s in Pakistan
            </h2>
            <p className="text-sm sm:text-base text-[#3F3F46] mt-3 leading-relaxed">
              A single high-ticket case in <strong>{specialty.high_ticket_treatments}</strong> is worth <strong>{specialty.avg_treatment_value_pkr}</strong>. Yet digital-only agencies charge PKR 50,000–150,000/month to send cold WhatsApp messages asking <em>"Fee kya hai?"</em> that never walk through your door.
            </p>
          </div>
          <PixelHeartCluster color="#0B0B0B" className="w-20 h-16 shrink-0 hidden md:block" />
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border-2 border-[#0B0B0B] bg-white mb-16">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#0B0B0B] text-white font-mono text-xs uppercase">
                <th className="p-4 sm:p-5">Growth Channel</th>
                <th className="p-4 sm:p-5 text-[#A1A1AA]">Traditional Agencies</th>
                <th className="p-4 sm:p-5 text-[#A1A1AA]">Oladoc / Marham</th>
                <th className="p-4 sm:p-5 bg-[#D81919] text-white">
                  ClientKit 10km Engine
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0B0B0B]/15">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B]">Core Strategy</td>
                <td className="p-4 sm:p-5 text-[#525252]">Remote Meta/Google Ads only</td>
                <td className="p-4 sm:p-5 text-[#525252]">Shared directory listing</td>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B] bg-[#D81919]/5">
                  Physical 10km Outreach + Telemarketing + Hyper-Local Ads + 100x Content
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B]">In-Person Outreach</td>
                <td className="p-4 sm:p-5 text-[#D81919]">
                  <span className="inline-flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 shrink-0" /> None (100% remote)
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-[#D81919]">
                  <span className="inline-flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 shrink-0" /> None
                  </span>
                </td>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B] bg-[#D81919]/5">
                  <CheckCircle2 className="w-4 h-4 inline mr-1.5 text-[#D81919]" />
                  Physical B2B & community tie-ups across your 10km radius
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B]">Dedicated Telemarketing</td>
                <td className="p-4 sm:p-5 text-[#525252]">None (Receptionist chases leads)</td>
                <td className="p-4 sm:p-5 text-[#525252]">Shared call center routes to rivals</td>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B] bg-[#D81919]/5">
                  <CheckCircle2 className="w-4 h-4 inline mr-1.5 text-[#D81919]" />
                  Dedicated callers booking patients exclusively for your practice
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B]">Weekly Content Output</td>
                <td className="p-4 sm:p-5 text-[#525252]">2 to 3 static posts/week</td>
                <td className="p-4 sm:p-5 text-[#525252]">Zero content</td>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B] bg-[#D81919]/5">
                  <CheckCircle2 className="w-4 h-4 inline mr-1.5 text-[#D81919]" />
                  100+ repurposed authority videos, reels & local assets weekly
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-[#0B0B0B]">Speed & Guarantee</td>
                <td className="p-4 sm:p-5 text-[#525252]">90–180 days, no guarantee</td>
                <td className="p-4 sm:p-5 text-[#525252]">20%–30% commission/visit</td>
                <td className="p-4 sm:p-5 font-bold text-[#D81919] bg-[#D81919]/5">
                  Dominate Your 10km Area in 30 Days — Or We Work For Free
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Inside the 4-Pillar ClientKit Engine */}
        <div className="mb-16">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-2">
              The 4-Pillar Mechanism
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#0B0B0B] uppercase tracking-tight">
              Inside the ClientKit Engine for {specialty.name}s
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '(01)',
                title: 'Physical 10km Corporate & Community Outreach',
                body: `Our outreach team maps every high-value institution within 10km of your ${specialty.name}, structuring partnerships with ${specialty.corporate_outreach_targets}.`,
                meta: `Targets: ${specialty.corporate_outreach_targets}`
              },
              {
                num: '(02)',
                title: 'Dedicated Medical Telemarketing & Confirmation',
                body: `A bilingual (English + Urdu) unit calls corporate contacts, reactivates past records, pre-qualifies for ${specialty.high_ticket_treatments}, and books confirmed tokens.`,
                meta: `Avg Case Value: ${specialty.avg_treatment_value_pkr}`
              },
              {
                num: '(03)',
                title: '10km Data Extraction & Hyper-Local Retargeting',
                body: `When residents open Instagram, Facebook, YouTube, or Google Maps—searching in English or Roman Urdu like "${specialty.roman_urdu_keywords[0]}"—your doctors stay omnipresent.`,
                meta: `Roman Urdu: ${specialty.roman_urdu_keywords.join(' · ')}`
              },
              {
                num: '(04)',
                title: '100+ Authority Content Pieces Every Week',
                body: `45 minutes once a week becomes 100+ short-form Reels, TikToks, YouTube Shorts, WhatsApp Status assets, and bilingual clinical explainers.`,
                meta: 'Weekly Output: 100+ Short-Form Videos & Posts'
              }
            ].map((pillar) => (
              <div key={pillar.num} className="p-6 bg-white border-2 border-[#0B0B0B] flex flex-col justify-between">
                <div>
                  <div className="font-display text-2xl font-black text-[#D81919] mb-3">
                    {pillar.num}
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0B0B0B] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed mb-4">
                    {pillar.body}
                  </p>
                </div>
                <div className="text-xs font-mono text-[#0B0B0B] font-bold bg-[#FAFAFA] p-3 border-l-4 border-[#D81919]">
                  {pillar.meta}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 30-Day 10km Domination Roadmap */}
        <div className="p-8 bg-[#0B0B0B] text-white mb-16 border-2 border-[#0B0B0B]">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D81919] font-bold">
            Contractual Performance Milestone
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase mt-2 mb-6">
            30-Day 10km Domination Roadmap
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            {[
              {
                days: 'Days 01–07',
                title: 'Territory Mapping & Data',
                body: 'Audit your exact 10km radius, extract the local corporate database, optimize Google Business Profile for Top-3 Map Pack, and shoot batch 1.'
              },
              {
                days: 'Days 08–15',
                title: 'Ground Game & Calling',
                body: 'Physical outreach and bilingual telemarketing launch across local offices and patient lists while 10km retargeting goes live.'
              },
              {
                days: 'Days 16–30',
                title: 'Omnipresence & Full OPD',
                body: `400+ pieces of content saturate your 10km zone in Month 1 as corporate referrals and ${specialty.high_ticket_treatments} patients fill your schedule.`
              }
            ].map((step) => (
              <div key={step.days} className="p-5 bg-white/5 border border-white/15">
                <div className="text-[#D81919] font-mono font-bold mb-2">{step.days}</div>
                <div className="font-display font-bold text-white text-base mb-2">{step.title}</div>
                <p className="text-[#D4D4D8] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#E4E4E7] font-mono">
              Guaranteed: If you don't dominate your area in 30 days, we work for free.
            </div>
            <button
              onClick={handleCta}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#D81919] hover:bg-[#B01212] text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors"
            >
              Let's chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Local City Hub Links */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-xl font-black text-[#0B0B0B] uppercase">
                10km Territory Hubs Across Pakistan
              </h3>
              <p className="text-xs font-mono text-[#525252] mt-1">
                Explore clinic density, landmarks, and availability by city
              </p>
            </div>
            <button
              onClick={() => navigateTo('/sitemap')}
              className="text-xs font-mono font-bold text-[#D81919] hover:underline cursor-pointer hidden sm:block"
            >
              View All Sectors →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LOCATIONS_DATABASE.map((loc) => (
              <button
                key={loc.city_slug}
                onClick={() =>
                  navigateTo(`/pk/${loc.city_slug}/${specialty.slug}-patient-acquisition`)
                }
                className="p-4 border-2 border-[#0B0B0B] bg-white hover:border-[#D81919] transition-colors text-left cursor-pointer group"
              >
                <div className="font-display text-xs font-bold text-[#0B0B0B] group-hover:text-[#D81919]">
                  {loc.city}
                </div>
                <div className="text-[11px] font-mono text-[#525252] mt-1 tabular-nums">
                  ~{loc.total_clinics_est} Clinics
                </div>
                <div className="text-[10px] font-mono text-[#D81919] mt-2 font-bold flex items-center gap-1 uppercase">
                  <MapPin className="w-2.5 h-2.5" /> 10km Hub
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-black text-[#0B0B0B] uppercase mb-6">
            Frequently Asked Questions
          </h3>

          <div className="divide-y-2 divide-[#0B0B0B] border-y-2 border-[#0B0B0B] bg-white">
            {[
              {
                q: 'How is ClientKit different from a standard healthcare digital marketing agency in Pakistan?',
                a: 'Standard agencies only run remote social media ads and leave lead calling to your front desk. ClientKit combines physical 10km corporate/community outreach, a dedicated telemarketing team, 10km data extraction + retargeting, and 100+ weekly content pieces—backed by a 30-day "Dominate or We Work For Free" guarantee.'
              },
              {
                q: `Do you work with multiple competing ${specialty.name}s in the same area?`,
                a: `No. Because our goal is for you to dominate your 10km radius, we enforce strict territory exclusivity per specialty. Once we partner with your ${specialty.name} in your sector, competing practices in your radius are locked out.`
              },
              {
                q: `How do we increase high-ticket ${specialty.high_ticket_treatments} patients?`,
                a: `High-ticket procedures require trust, not discount flyers. Our 100+ weekly short videos educate local families on procedural safety, while our dedicated telemarketing team immediately calls prospects to pre-qualify cases valued at ${specialty.avg_treatment_value_pkr}.`
              },
              {
                q: `How much time does the ${specialty.doctor_title} have to dedicate?`,
                a: 'Just 45 to 60 minutes once a week. Our production team scripts clinical questions, shoots on-site at your clinic, and handles all editing, subtitles, and multi-channel publishing.'
              }
            ].map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#0B0B0B] text-left cursor-pointer hover:bg-[#FAFAFA]"
                >
                  <span>
                    <span className="font-mono text-[#D81919] mr-3">
                      ({String(idx + 1).padStart(2, '0')})
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#D81919]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="px-5 pb-5 text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Strategy Playbooks */}
        <div className="p-6 bg-white border-2 border-[#0B0B0B]">
          <h3 className="font-display text-base font-black text-[#0B0B0B] uppercase mb-4">
            Recommended Healthcare Playbooks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <button
                key={post.slug}
                onClick={() => navigateTo(`/blog/${post.slug}`)}
                className="p-4 bg-[#FAFAFA] border-2 border-[#0B0B0B]/20 hover:border-[#D81919] text-left transition-colors cursor-pointer group"
              >
                <div className="text-[10px] font-mono text-[#D81919] font-bold uppercase">
                  {post.category}
                </div>
                <div className="font-display text-xs font-bold text-[#0B0B0B] group-hover:text-[#D81919] mt-1.5 line-clamp-2">
                  {post.title}
                </div>
                <div className="text-[11px] font-mono text-[#525252] mt-2 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.read_time}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
