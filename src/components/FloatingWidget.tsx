import React, { useState, useEffect } from 'react';
import { MessageSquare, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const FloatingWidget: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleGrowthDeskChat = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I am on your website and want to chat about dominating our hospital / clinic local area.'
    );
  };

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble (Shown on tablet/desktop) */}
      {showPrompt && (
        <div className="hidden sm:block mb-3 w-76 max-w-[calc(100vw-2.5rem)] p-4 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-2xl text-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowPrompt(false)}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-white p-1 cursor-pointer"
            aria-label="Close Message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
              Hospital Territory Desk
            </span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Dominate your 10-km radius in 30 days or we work for free. Have questions about our territory exclusivity?
          </p>
          <button
            onClick={handleGrowthDeskChat}
            className="mt-3 w-full py-2 px-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
            <span>Let's chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleGrowthDeskChat}
        title="Chat with ClientKit Territory Desk"
        aria-label="Chat with ClientKit Territory Desk"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-2xl shadow-slate-950/40 hover:scale-105 active:scale-95 transition-all group relative border-2 border-emerald-400 cursor-pointer"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-emerald-400 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-ping pointer-events-none" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950 flex items-center justify-center" />
      </button>
    </div>
  );
};
