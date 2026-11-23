import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  calculateRevenue,
  WHATSAPP_NUMBER_RAW,
  openWhatsApp,
} from '../utils/calculator';
import { RedMarkerCircle } from './BrandArt';

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
      className="py-20 sm:py-28 bg-[#FAFAFA] border-t-2 border-[#0B0B0B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2.5">
            Interactive Hospital Economics · PKR
          </div>
          <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.04] text-[clamp(1.75rem,4vw,3.1rem)]">
            Calculate Your Extra Monthly Revenue
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#262626] leading-relaxed">
            Adjust your hospital bed capacity and average procedure billing to project your monthly patient influx and surgical revenue.
          </p>
        </div>

        {/* High-Contrast Editorial Calculator Grid */}
        <div className="bg-white border-2 border-[#0B0B0B] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline gap-4 mb-3">
                  <label
                    htmlFor="bed-slider"
                    className="text-sm font-extrabold text-[#0B0B0B]"
                  >
                    Hospital Bed Capacity in Pakistan
                  </label>
                  <span className="font-display font-black text-lg text-[#D81919] tabular-nums">
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
                  className="w-full h-2 bg-neutral-200 appearance-none cursor-pointer accent-[#D81919]"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono tabular-nums">
                  <span>15 Beds</span>
                  <span>120 Beds</span>
                  <span>350+ Beds</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline gap-4 mb-3">
                  <label
                    htmlFor="fee-slider"
                    className="text-sm font-extrabold text-[#0B0B0B]"
                  >
                    Average Procedure / Case Fee (PKR)
                  </label>
                  <span className="font-display font-black text-lg text-[#D81919] tabular-nums">
                    Rs. {avgFee.toLocaleString()}
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
                  className="w-full h-2 bg-neutral-200 appearance-none cursor-pointer accent-[#D81919]"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono tabular-nums">
                  <span>Rs. 3,000 (OPD)</span>
                  <span>Rs. 25,000 (Day Care)</span>
                  <span>Rs. 80,000+ (Surgery)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-black/15 text-xs text-[#333333] leading-relaxed">
              <strong className="text-[#0B0B0B]">Realistic Pakistan Healthcare Metrics:</strong>{' '}
              Modeled after verified admissions across private healthcare facilities in Karachi (Clifton, Gulshan, PECHS) and Lahore (DHA). Territory exclusivity locks local patient demand exclusively for your facility.
            </div>
          </div>

          {/* Projection Scoreboard (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-7 bg-[#0B0B0B] text-white flex flex-col justify-between text-center">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-4 border border-white/15 bg-white/5">
                <div className="text-[10px] text-neutral-400 uppercase font-mono">
                  Extra OPD / Mo
                </div>
                <div className="text-2xl font-display font-black text-white tabular-nums mt-1">
                  +{extraOpd}
                </div>
                <div className="text-[10px] text-[#FF4D4D] font-semibold mt-1">
                  Verified Inquiries
                </div>
              </div>

              <div className="p-4 border border-white/15 bg-white/5">
                <div className="text-[10px] text-neutral-400 uppercase font-mono">
                  Surgeries / Mo
                </div>
                <div className="text-2xl font-display font-black text-[#FF4D4D] tabular-nums mt-1">
                  +{extraSurgeries}
                </div>
                <div className="text-[10px] text-neutral-300 font-semibold mt-1">
                  Direct Bookings
                </div>
              </div>
            </div>

            <div className="py-5 px-4 border-y border-white/15 mb-6">
              <div className="text-[11px] text-neutral-300 font-mono uppercase tracking-wider">
                Projected Monthly Added Billing
              </div>
              <div className="relative inline-block mt-2 px-4 py-1">
                <RedMarkerCircle className="absolute -inset-x-2 -inset-y-1.5 w-[calc(100%+16px)] h-[calc(100%+12px)]" />
                <div className="relative font-display font-black text-2xl sm:text-3xl text-white tabular-nums">
                  {formattedMonthly}
                </div>
              </div>
              <div className="text-xs text-neutral-300 mt-3 font-mono tabular-nums">
                ≈ {formattedYearly} / Year
              </div>
            </div>

            <button
              onClick={handleVerifyCalculation}
              className="w-full py-4 px-5 text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-white bg-[#D81919] hover:bg-[#B01212] transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
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
