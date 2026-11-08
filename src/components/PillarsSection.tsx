import React from 'react';
import {
  MapPin,
  Smartphone,
  Video,
  FileText,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const PillarsSection: React.FC = () => {
  const handlePillarsCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I want to deploy the 3 patient acquisition pillars for our hospital. Let\'s chat about next steps.'
    );
  };

  return (
    <section id="pillars" className="py-20 sm:py-28 bg-white relative border-b border-slate-200/80">
      {/* Background Grid & Crosshairs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold mb-3">
            <span>Our 3 Core Execution Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            The 3 Things We Do For Your Clinic
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A battle-tested clinical growth system designed to give you uncontested local territory dominance.
          </p>
        </div>

        {/* Pillar 1 */}
        <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200/90 mb-8 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 mb-2 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Pillar 01: In-Person Corporate & Community Outreach</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3">
            Walk-Ins to Corporate Plazas, Bank Towers & Gated Societies.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            We put real boots on the ground. Our team physically walks into commercial businesses, corporate offices, banks, and gated residential towers within your 10-kilometer radius.{' '}
            <strong className="text-slate-900 font-bold">
              We present a respectful persuasion about their family health, hand over official VIP checkup cards with handsome offers they remember, and collect verified, opt-in contact data one by one.
            </strong>
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-[11px] font-mono font-bold text-slate-500 mb-3 uppercase tracking-wide flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Real Field Outreach Dispatch (Karachi & Lahore Area)</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div>
                  <span className="text-slate-900 font-bold">1. Habib Bank Corporate Tower, Clifton</span>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Met HR Director · Handed VIP Cards & Executive Health Camp · 220 Staff Contacts Enrolled
                  </div>
                </div>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-bold text-[11px] shrink-0 self-start sm:self-center">
                  Corporate Camp Booked
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div>
                  <span className="text-slate-900 font-bold">2. Creek Vista Apartments, DHA Phase 8</span>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Met Resident Management · Distributed Handsome Family Vouchers · 450 Residents Reached
                  </div>
                </div>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-bold text-[11px] shrink-0 self-start sm:self-center">
                  Family Clinic Scheduled
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div>
                  <span className="text-slate-900 font-bold">3. Tech Park Office Hub, Shahrah-e-Faisal</span>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Met Corporate Admin · Emergency Protocol MOU Signed · 180 Tech Employees Registered
                  </div>
                </div>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-bold text-[11px] shrink-0 self-start sm:self-center">
                  MOU Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200/90 mb-8 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 mb-2 uppercase tracking-wider">
            <Smartphone className="w-4 h-4 text-cyan-600" />
            <span>Pillar 02: Hyper-Local Radius Social Retargeting</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3">
            Retargeting Them on Social Media + Lookalike Families in That Same 10-KM Radius.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            We upload the verified contact lists into our secure ad matrix to retarget those exact professionals across Facebook, Instagram, and YouTube. In addition, we target{' '}
            <strong className="text-slate-900 font-bold">people like them living and working in that exact same 10-km zone</strong>, repeatedly presenting your hospital facilities, specialist consultants, and emergency readiness.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Displaying your doctor tips & handsome offers continuously</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pinpoint radius targeting exclusively for people who can walk in</span>
            </div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 mb-2 uppercase tracking-wider">
            <Video className="w-4 h-4 text-indigo-600" />
            <span>Pillar 03: The 5-Hour Doctor Trust Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3">
            Repurposing 5 Core Specialist Sessions Into 100 Localized Assets.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            To build unshakeable patient trust, your doctors don't need to waste time making daily videos. We require just{' '}
            <strong className="text-slate-900 font-bold">5 hours once a month</strong>. Our studio crew records 5 core patient advisory topics. We then edit, caption, and repurpose those sessions into{' '}
            <strong className="text-slate-900 font-bold">100 short video reels and symptom explainers</strong> shown directly to your area.
          </p>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xl font-black text-slate-950 font-mono">5 Hours</div>
              <div className="text-[11px] text-slate-500 mt-1">Doctor Time / Mo</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xl font-black text-emerald-600 font-mono">100 Clips</div>
              <div className="text-[11px] text-slate-500 mt-1">Repurposed Video Tips</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xl font-black text-slate-950 font-mono">WhatsApp</div>
              <div className="text-[11px] text-slate-500 mt-1">1-Tap Direct Tokens</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handlePillarsCta}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all shadow-md shadow-slate-950/15 cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
