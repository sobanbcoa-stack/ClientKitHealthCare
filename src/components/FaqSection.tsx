import React, { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';
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
      'Hi ClientKit! I have a specific question about dominating our hospital / clinic area. Let\'s chat.'
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative border-b border-slate-200/80">
      {/* Background Subtle Grid & Crosshairs */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs select-none hidden lg:block">+</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Terms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clear, transparent answers to questions hospital directors, chief operating officers, and senior doctors ask us.
          </p>
        </div>

        {/* LeadArc Accordion Style */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'bg-slate-950 text-white border-slate-950'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.answer}</p>
                    <button
                      onClick={() => handleAskFaqOnWhatsApp(item.question)}
                      className="mt-3.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Have follow-up questions? Let's chat →</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-between gap-4 text-center sm:text-left flex-wrap sm:flex-nowrap max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm text-slate-700 font-medium">
            Have a unique facility requirement or territory question?
          </span>
          <button
            onClick={handleCustomQuestion}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>Let's chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
