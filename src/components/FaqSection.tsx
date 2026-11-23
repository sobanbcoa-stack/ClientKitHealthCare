import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskFaqOnWhatsApp = (question: string) => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      `Hi ClientKit! I have a question about: "${question}". Let's chat.`
    );
  };

  const handleCustomQuestion = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      "Hi ClientKit! I have a specific question about dominating our hospital / clinic area. Let's chat."
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t-2 border-[#0B0B0B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D81919] mb-2.5">
            Clarity &amp; Terms
          </div>
          <h2 className="font-display font-black uppercase text-[#D81919] tracking-[-0.03em] leading-[1.04] text-[clamp(1.75rem,4vw,3rem)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#262626]">
            Direct, transparent answers to questions hospital directors, COOs, and senior consultants ask us.
          </p>
        </div>

        <div className="divide-y-2 divide-[#0B0B0B] border-y-2 border-[#0B0B0B]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 sm:py-6 px-2 sm:px-3 text-left flex items-center justify-between gap-4 hover:bg-[#FAFAFA] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-3.5 min-w-0">
                    <span className="font-display font-black text-sm sm:text-base text-[#D81919] tabular-nums shrink-0">
                      (0{index + 1})
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-[#0B0B0B]">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 flex items-center justify-center shrink-0 border-2 transition-colors ${
                      isOpen
                        ? 'bg-[#D81919] text-white border-[#D81919]'
                        : 'bg-white text-[#0B0B0B] border-[#0B0B0B]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-2 sm:px-3 pb-6 pt-1 pl-10 sm:pl-14 text-sm text-[#333333] leading-relaxed">
                    <p>{item.answer}</p>
                    <button
                      onClick={() => handleAskFaqOnWhatsApp(item.question)}
                      className="mt-3.5 text-xs font-display font-bold uppercase tracking-wide text-[#D81919] hover:text-[#0B0B0B] inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Ask a follow-up question</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-[#FAFAFA] border-2 border-[#0B0B0B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-sm text-[#0B0B0B] font-bold">
            Have a specific facility requirement or 10-km territory question?
          </span>
          <button
            onClick={handleCustomQuestion}
            className="px-6 py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-white bg-[#0B0B0B] hover:bg-[#D81919] transition-colors flex items-center gap-2 shrink-0 cursor-pointer active:scale-[0.98]"
          >
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
