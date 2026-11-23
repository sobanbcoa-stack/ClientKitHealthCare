import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const FloatingWidget: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleGrowthDeskChat = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I am on your website and want to chat about dominating our hospital / clinic local area.'
    );
  };

  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-end">
      {showPrompt && (
        <div className="mb-3 w-76 p-5 bg-[#0B0B0B] text-white border-2 border-[#D81919] shadow-2xl text-xs relative">
          <button
            onClick={() => setShowPrompt(false)}
            className="absolute top-3 right-3 text-neutral-400 hover:text-white p-1 cursor-pointer"
            aria-label="Close Message"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="font-display font-bold text-[#FF4D4D] text-[11px] uppercase tracking-wider mb-1.5">
            Hospital Territory Desk
          </div>
          <p className="text-neutral-300 text-xs leading-relaxed">
            Dominate your 10-km radius in 30 days or we work for free. Check if your hospital area is still available.
          </p>
          <button
            onClick={handleGrowthDeskChat}
            className="mt-4 w-full py-2.5 px-4 bg-[#D81919] hover:bg-[#B01212] text-white font-display font-bold uppercase text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Let's chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <button
        onClick={() => setShowPrompt((prev) => !prev)}
        title="Chat with ClientKit Territory Desk"
        aria-label="Chat with ClientKit Territory Desk"
        className="w-14 h-14 bg-[#0B0B0B] hover:bg-[#D81919] text-white flex items-center justify-center shadow-xl border-2 border-white transition-colors cursor-pointer active:scale-95"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};
