import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const MobileStickyBar: React.FC = () => {
  const handleMobileCta = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I am on mobile reviewing your 30-day territory takeover engine for our clinic. Let\'s chat.'
    );
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-slate-900 truncate flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Territory Exclusivity</span>
          </div>
          <div className="text-[10px] text-slate-500 truncate font-mono">
            Strictly 1 Hospital Per 10-KM
          </div>
        </div>

        <button
          onClick={handleMobileCta}
          className="py-2.5 px-5 rounded-full text-xs font-black text-white bg-slate-950 shadow-md shadow-slate-950/20 flex items-center gap-2 shrink-0 cursor-pointer active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
          <span>Let's chat</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
