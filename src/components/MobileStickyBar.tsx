import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const MobileStickyBar: React.FC = () => {
  const handleMobileCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! I am on mobile reviewing your 30-day territory takeover engine for our clinic. Let's chat."
    );
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B] border-t-2 border-[#D81919] px-4 py-2.5">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="min-w-0">
          <div className="font-display font-bold text-[11px] uppercase text-white truncate">
            1 Hospital Per 10-KM
          </div>
          <div className="text-[10px] text-neutral-400 truncate font-mono">
            30-Day Performance Guarantee
          </div>
        </div>

        <button
          onClick={handleMobileCta}
          className="py-2.5 px-4 text-xs font-display font-bold uppercase text-white bg-[#D81919] hover:bg-[#B01212] flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95 whitespace-nowrap"
        >
          <span>Let's chat</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
