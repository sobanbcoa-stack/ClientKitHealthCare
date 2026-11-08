import React, { useEffect, useState } from 'react';
import {
  ShieldCheck,
  Building2,
  Users,
  PhoneCall,
  Video,
  Share2,
  ArrowRight,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { Specialty, SPECIALTIES, LOCATIONS_DATABASE, BLOG_POSTS, EXTRACTED_PAA_QUESTIONS } from '../../data/pseoData';
import { navigateTo, updateHeadTags } from '../../utils/router';
import { openWhatsApp, WHATSAPP_NUMBER_RAW } from '../../utils/calculator';

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
    <div className="bg-white text-slate-900 pb-20">
      {/* Top Breadcrumb & Territory Exclusivity Banner */}
      <div className="bg-slate-950 text-white border-b border-slate-800 py-3 px-4 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider">
              Territory Exclusivity
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              Strictly ONE {specialty.name} per 10km Radius in Pakistan
            </span>
          </div>
          <button
            onClick={() => navigateTo('/')}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 overflow-hidden bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>National Healthcare Growth Program · Pakistan</span>
            <span className="text-slate-300">|</span>
            <span>Targeting {specialty.doctor_title}s</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            The Only Guaranteed Patient Acquisition Engine for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              {specialty.name}s
            </span>{' '}
            in Pakistan
          </h1>

          <p className="text-lg sm:text-xl font-bold text-emerald-700 mb-6 font-mono">
            Dominate Your 10km Radius in 30 Days — Or We Work For Free.
          </p>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-9">
            Most "healthcare digital marketing agencies" in Pakistan sit behind a laptop, run a few generic Facebook boosts, post 8 Canva graphics a month, and blame your reception staff when patients don't show up. Meanwhile, aggregators like Oladoc and Marham take 20% to 30% of your hard-earned consultation fee while showing your patients five competing doctors on the exact same screen.
          </p>

          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto mb-9 bg-slate-100 p-4 rounded-xl border border-slate-200">
            At <strong>ClientKit</strong>, we don't sell "clicks," "likes," or 6-month SEO promises. Having partnered with leading medical facilities in Karachi and Lahore, we deploy a <strong>Physical + Omnichannel 10km Patient Acquisition Engine</strong> built specifically for <strong>{specialty.doctor_title}s</strong>. We go physically into your 10km radius, call your local market directly, publish 100+ pieces of authority content every single week, and fill your OPD and procedure rooms with high-value <strong>{specialty.high_ticket_treatments}</strong> patients.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCta}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-extrabold text-white bg-slate-950 hover:bg-slate-800 shadow-xl shadow-slate-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400" />
              <span>Claim Your 10km Territory Before a Competing {specialty.name} Does</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => navigateTo('/sitemap')}
              className="w-full sm:w-auto px-6 py-4 rounded-full text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all text-center cursor-pointer"
            >
              Browse All Pakistan City Sectors
            </button>
          </div>
        </div>
      </section>

      {/* Economics & Why Traditional Agencies Fail */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
            The Traditional Bottleneck
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-3">
            Why Traditional Digital Marketing Agencies Fail {specialty.name}s in Pakistan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            If you run a <strong>{specialty.name}</strong> in Lahore, Islamabad, Rawalpindi, Karachi, or any growing commercial hub in Pakistan, you already know the math: a single high-ticket case in <strong>{specialty.high_ticket_treatments}</strong> is worth <strong>{specialty.avg_treatment_value_pkr}</strong> to your practice. Yet digital-only agencies charge PKR 50,000 to PKR 150,000 per month to send you cold WhatsApp messages asking <em>"Fee kya hai?"</em> that never walk through your door.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white mb-16">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white font-mono text-xs">
                <th className="p-4 sm:p-5 border-b border-slate-800">Feature / Growth Channel</th>
                <th className="p-4 sm:p-5 border-b border-slate-800 text-slate-300">Traditional Pakistani Agencies</th>
                <th className="p-4 sm:p-5 border-b border-slate-800 text-slate-300">Oladoc / Marham Aggregators</th>
                <th className="p-4 sm:p-5 border-b border-slate-800 text-emerald-400 bg-slate-950">
                  ClientKit 10km Domination Engine
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-900">Core Strategy</td>
                <td className="p-4 sm:p-5 text-slate-600">Remote Meta/Google Ads only</td>
                <td className="p-4 sm:p-5 text-slate-600">Shared directory listing</td>
                <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-emerald-50/50">
                  Physical 10km Outreach + Telemarketing + Hyper-Local Ads + 100x Content
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-900">In-Person Corporate & Community Outreach</td>
                <td className="p-4 sm:p-5 text-red-600 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> None (100% remote)
                </td>
                <td className="p-4 sm:p-5 text-red-600 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> None
                </td>
                <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-emerald-50/50">
                  <CheckCircle2 className="w-4 h-4 inline mr-1 text-emerald-600" />
                  Yes — Physical B2B & community tie-ups across your 10km radius
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-900">Dedicated Telemarketing Team</td>
                <td className="p-4 sm:p-5 text-slate-600">None (Your receptionist chases leads)</td>
                <td className="p-4 sm:p-5 text-slate-600">Call center routes patients to multiple doctors</td>
                <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-emerald-50/50">
                  <CheckCircle2 className="w-4 h-4 inline mr-1 text-emerald-600" />
                  Yes — Dedicated callers booking patients exclusively into your chair
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-900">Weekly Content Output</td>
                <td className="p-4 sm:p-5 text-slate-600">2 to 3 static posts per week</td>
                <td className="p-4 sm:p-5 text-slate-600">Zero content</td>
                <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-emerald-50/50">
                  <CheckCircle2 className="w-4 h-4 inline mr-1 text-emerald-600" />
                  100+ repurposed authority videos, reels & local assets every week
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-900">Data & Hyper-Local Retargeting</td>
                <td className="p-4 sm:p-5 text-slate-600">Broad city-wide targeting</td>
                <td className="p-4 sm:p-5 text-slate-600">You don't own the patient data</td>
                <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-emerald-50/50">
                  <CheckCircle2 className="w-4 h-4 inline mr-1 text-emerald-600" />
                  10km radius data extraction + omnipresent household retargeting
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-slate-900">Speed & Risk Guarantee</td>
                <td className="p-4 sm:p-5 text-slate-600">90 to 180 days, no guarantee</td>
                <td className="p-4 sm:p-5 text-slate-600">20%–30% commission per visit</td>
                <td className="p-4 sm:p-5 font-bold text-emerald-800 bg-emerald-50/50">
                  Dominate Your 10km Area in 30 Days — Or We Work For Free
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Inside the 4-Pillar ClientKit Engine */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
              The 4-Pillar Mechanism
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-3">
              Inside the 4-Pillar ClientKit Engine for {specialty.name}s
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Patients in Pakistan rarely travel more than 10 kilometers for a {specialty.doctor_title} unless you are the undisputed authority in their neighborhood. Here is how we lock down your 10km radius in 30 days:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1. Physical 10km Corporate & Community Outreach
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Digital ads only reach the 3% of people scrolling with immediate pain. Our physical outreach team maps out every high-value institution within 10 kilometers of your {specialty.name}. For a <strong>{specialty.doctor_title}</strong>, we physically approach and structure partnerships with <strong>{specialty.corporate_outreach_targets}</strong>.
              </p>
              <div className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                Outreach Targets: {specialty.corporate_outreach_targets}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                2. Dedicated Medical Telemarketing & Confirmation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                A lead that isn't called within 5 minutes in Pakistan goes cold. Instead of burdening your front desk, ClientKit deploys a dedicated bilingual (English + Urdu) telemarketing unit for your {specialty.name}. We call every corporate contact, reactivate past patient records, pre-qualify for <strong>{specialty.high_ticket_treatments}</strong>, and book confirmed tokens.
              </p>
              <div className="text-xs font-mono text-cyan-800 font-bold bg-cyan-50 p-2.5 rounded-lg border border-cyan-100">
                Average Case Value: {specialty.avg_treatment_value_pkr}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                3. 10km Data Extraction & Hyper-Local Social Retargeting
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                We extract verified local business, institutional, and consumer audience data within your exact 10km radius. When a resident opens Instagram, Facebook, YouTube, or Google Maps—whether searching in English or Roman Urdu like <em>"{specialty.roman_urdu_keywords[0]}"</em>—your clinic's face, patient reviews, and procedure breakdowns follow them everywhere.
              </p>
              <div className="text-xs font-mono text-purple-800 font-bold bg-purple-50 p-2.5 rounded-lg border border-purple-100">
                Targeting Roman Urdu: {specialty.roman_urdu_keywords.join(' · ')}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                4. 100+ Pieces of Repurposed Authority Content Every Week
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Patients trust doctors they see educating them daily. You give us just <strong>45 minutes once a week</strong> (or raw clinic footage), and our production engine turns it into <strong>100+ pieces of localized content every single week</strong>—short-form Reels, TikToks, YouTube Shorts, WhatsApp Status broadcasts, and bilingual educational explainers.
              </p>
              <div className="text-xs font-mono text-amber-800 font-bold bg-amber-50 p-2.5 rounded-lg border border-amber-100">
                Weekly Volume: 100+ Short-Form Videos, Reels & Posts
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day 10km Domination Roadmap */}
        <div className="p-8 rounded-2xl bg-slate-950 text-white mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Contractual Performance Milestone
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2 mb-6">
              The 30-Day 10km Domination Roadmap for Your {specialty.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 font-mono font-bold mb-2">Days 1–7</div>
                <div className="font-bold text-white text-base mb-2">Territory Mapping & Data</div>
                <p className="text-slate-400 leading-relaxed">
                  We audit your exact 10km radius, extract the local corporate/community database, optimize your Google Business Profile for Top-3 Map Pack placement, and script your first 100+ weekly content batch.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 font-mono font-bold mb-2">Days 8–15</div>
                <div className="font-bold text-white text-base mb-2">Ground Game & Telemarketing</div>
                <p className="text-slate-400 leading-relaxed">
                  Our outreach and telemarketing teams begin contacting local corporate offices and reactivating your local patient records while your hyper-local 10km retargeting ads go live.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 font-mono font-bold mb-2">Days 16–30</div>
                <div className="font-bold text-white text-base mb-2">Omnipresence & High-Ticket OPD</div>
                <p className="text-slate-400 leading-relaxed">
                  Over 400+ pieces of content flood your 10km zone in Month 1 alone, corporate and community referrals begin walking in, and your high-ticket schedule for {specialty.high_ticket_treatments} fills up.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300 font-mono">
                <Sparkles className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
                Guaranteed: If you don't dominate your area in 30 days, we work for free until you do.
              </div>
              <button
                onClick={handleCta}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Let's chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Local City Hub Links (Hub & Spoke Internal Linking) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Available 10km Territory Hubs for {specialty.name}s in Pakistan
              </h3>
              <p className="text-xs text-slate-500">
                Explore local clinic density, landmarks, and territory availability by city
              </p>
            </div>
            <button
              onClick={() => navigateTo('/sitemap')}
              className="text-xs font-mono font-bold text-emerald-700 hover:underline cursor-pointer hidden sm:block"
            >
              View All 20 Localities →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LOCATIONS_DATABASE.map((loc) => (
              <button
                key={loc.city_slug}
                onClick={() =>
                  navigateTo(`/pk/${loc.city_slug}/${specialty.slug}-patient-acquisition`)
                }
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all text-left cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                  {loc.city}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  ~{loc.total_clinics_est} Clinics
                </div>
                <div className="text-[10px] font-mono text-emerald-700 mt-1 font-semibold flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" /> 10km Hub
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>Frequently Asked Questions ({specialty.name} Growth in Pakistan)</span>
          </h3>

          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full flex items-center justify-between font-bold text-sm text-slate-900 text-left cursor-pointer"
              >
                <span>How is ClientKit different from a standard healthcare digital marketing agency in Pakistan?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Standard agencies only run remote social media ads and leave lead calling and community building to you. ClientKit combines <strong>physical 10km corporate/community outreach</strong>, a <strong>dedicated telemarketing team</strong>, <strong>10km data extraction + retargeting</strong>, and <strong>100+ weekly content pieces</strong>—backed by a 30-day "Dominate or We Work For Free" guarantee.
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full flex items-center justify-between font-bold text-sm text-slate-900 text-left cursor-pointer"
              >
                <span>Do you work with multiple competing {specialty.name}s in the same area?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No. Because our goal is for you to <strong>dominate your 10km radius</strong>, we enforce strict territory exclusivity per specialty. Once we partner with your {specialty.name} in your sector, we will not take on a competing {specialty.name} in your primary radius.
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full flex items-center justify-between font-bold text-sm text-slate-900 text-left cursor-pointer"
              >
                <span>How do we increase high-ticket {specialty.high_ticket_treatments} patients?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-ticket procedures require trust, not discount flyers. Our 100+ weekly short videos educate local families on procedural safety, technology, and financing, while our dedicated telemarketing team immediately calls prospects to answer pricing and pre-qualify cases valued at {specialty.avg_treatment_value_pkr}.
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full flex items-center justify-between font-bold text-sm text-slate-900 text-left cursor-pointer"
              >
                <span>How much time does the {specialty.doctor_title} have to dedicate?</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Just 45 to 60 minutes once a week. Our production team scripts clinical questions, shoots with broadcast cameras and wireless audio at your clinic, and handles all editing, subtitles, and multi-channel publishing.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Related Strategy Playbooks */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="text-base font-bold text-slate-900 mb-4">
            Recommended Healthcare Strategy Playbooks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <button
                key={post.slug}
                onClick={() => navigateTo(`/blog/${post.slug}`)}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-left transition-all cursor-pointer"
              >
                <div className="text-[10px] font-mono text-emerald-700 font-bold uppercase">
                  {post.category}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1 line-clamp-2">
                  {post.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
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
