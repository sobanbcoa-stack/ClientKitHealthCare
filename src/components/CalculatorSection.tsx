import React, { useState } from 'react';
import { MessageSquare, ArrowRight, Calculator, Sparkles } from 'lucide-react';
import {
  calculateRevenue,
  WHATSAPP_NUMBER_RAW,
  openWhatsApp,
} from '../utils/calculator';

export const CalculatorSection: React.FC = () => {
  const [beds, setBeds] = useState<number>(60);
  const [avgFee, setAvgFee] = useState<number>(18000);

  const {
    extraOpd,
    extraSurgeries,
    formattedMonthly,
    formattedYearly,
  } = calculateRevenue(beds, avgFee);

  const handleVerifyCalculation = () => {
    const msg = `Hi ClientKit! I ran the numbers on your PKR calculator: ${beds} beds, Rs. ${avgFee.toLocaleString()} PKR average procedure ticket. Estimated extra revenue: ${formattedMonthly}/month. Let's chat about this for our hospital.`;
    openWhatsApp(WHATSAPP_NUMBER_RAW, msg);
  };

  return (
    <section
      id="calculator"
      className="py-20 sm:py-28 bg-slate-50 relative border-b border-slate-200/80"
    >
      {/* Background Subtle Grid & Crosshairs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Hospital Economics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Calculate Your Extra Monthly Revenue (PKR)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Adjust your hospital bed capacity and average procedure billing to project your monthly patient influx and surgical revenue.
          </p>
        </div>

        {/* LeadArc Style ROI Card Layout */}
        <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Container (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-2.5">
                <label htmlFor="bed-slider" className="text-slate-700 text-sm">
                  Hospital Bed Capacity in Pakistan:
                </label>
                <span className="text-emerald-700 font-mono text-base font-black px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200">
                  {beds} Beds
                </span>
              </div>
              <input
                id="bed-slider"
                type="range"
                min="15"
                max="350"
                step="5"
                value={beds}
                onChange={(e) => setBeds(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>15 Beds (Specialty Clinic)</span>
                <span>120 Beds (General Hospital)</span>
                <span>350+ Beds (Tertiary Complex)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-2.5">
                <label htmlFor="fee-slider" className="text-slate-700 text-sm">
                  Average Procedure / Case Fee (PKR):
                </label>
                <span className="text-cyan-700 font-mono text-base font-black px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200">
                  Rs. {avgFee.toLocaleString()} PKR
                </span>
              </div>
              <input
                id="fee-slider"
                type="range"
                min="3000"
                max="80000"
                step="1000"
                value={avgFee}
                onChange={(e) => setAvgFee(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>Rs. 3,000 (OPD & Consultation)</span>
                <span>Rs. 25,000 (Day Care Procedure)</span>
                <span>Rs. 80,000+ (Inpatient Surgery)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Realistic Pakistan Healthcare Metrics:</strong> Modeled after verified admissions across private healthcare facilities in Karachi (Clifton, Gulshan, PECHS) and Lahore (DHA). Territory exclusivity locks in all local patient demand for your facility.
            </div>
          </div>

          {/* Projection Card (5 cols - High Contrast Slate-950) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-2xl text-center">
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Extra OPD / Month</div>
                <div className="text-2xl font-black text-white font-mono mt-1">
                  +{extraOpd}
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">
                  Verified Patient Inquiries
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Surgeries / Month</div>
                <div className="text-2xl font-black text-cyan-400 font-mono mt-1">
                  +{extraSurgeries}
                </div>
                <div className="text-[10px] text-cyan-400 mt-0.5">
                  Direct Bookings
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 mb-5">
              <div className="text-[11px] text-emerald-400 font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Projected Monthly Added Billing
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1 tracking-tight">
                {formattedMonthly}
              </div>
              <div className="text-xs text-slate-300 mt-1.5 font-medium">
                ≈ {formattedYearly} / Year in additional revenue
              </div>
            </div>

            <button
              onClick={handleVerifyCalculation}
              className="w-full py-3.5 px-5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
