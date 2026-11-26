import React from 'react';
import { Logo } from './Logo';
import { ArrowRight, MapPin, Layers, BookOpen, Building2 } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { navigateTo } from '../utils/router';
import { SPECIALTIES, LOCATIONS_DATABASE, BLOG_POSTS } from '../data/pseoData';

export const Footer: React.FC = () => {
  const handleFooterWhatsApp = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I am contacting you from the website footer to discuss our hospital / clinic area.'
    );
  };

  return (
    <footer className="bg-[#0B0B0B] border-t-4 border-[#D81919] pt-16 pb-24 lg:pb-16 text-xs text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/15">
          <div className="max-w-md">
            <button onClick={() => navigateTo('/')} className="cursor-pointer text-left">
              <Logo size="md" theme="white" showTagline={true} />
            </button>
            <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed">
              The local patient acquisition engine for aesthetic clinics, dental practices, and hospitals in Pakistan. In-person local outreach, doctor authority reels, and 1-tap WhatsApp consultation tokens.
            </p>
            <div className="mt-3 text-[11px] font-mono text-[#FF4D4D] uppercase tracking-wider font-bold">
              Strictly 1 Partner Per 10-KM Territory Policy
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs text-neutral-300 font-medium">
              Ready to dominate your 10-km radius in 90 days?
            </span>
            <button
              onClick={handleFooterWhatsApp}
              className="px-7 py-3.5 bg-[#D81919] hover:bg-[#B01212] text-white font-display font-bold uppercase tracking-wide transition-colors flex items-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Structured Link Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/15">
          <div>
            <div className="text-white font-display font-bold mb-3 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#D81919]" />
              Clinics &amp; Portfolios
            </div>
            <ul className="space-y-2 mb-5">
              <li>
                <button
                  onClick={() => navigateTo('/portfolio')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#FF4D4D] font-bold block"
                >
                  All-Combined Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/portfolio/aesthetic')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-300 block"
                >
                  Aesthetic Clinics Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/portfolio/dental')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-300 block"
                >
                  Dental Clinics Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/aesthetic-clinics')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 block"
                >
                  Aesthetic Clinics Growth System
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/dental-clinics')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 block"
                >
                  Dental Clinics Growth System
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/hospitals')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 block"
                >
                  Proven Hospital Results (6)
                </button>
              </li>
            </ul>
            <ul className="space-y-1.5 pt-3 border-t border-white/10">
              {SPECIALTIES.slice(0, 4).map((spec) => (
                <li key={spec.slug}>
                  <button
                    onClick={() =>
                      navigateTo(`/specialties/${spec.slug}-marketing-agency-pakistan`)
                    }
                    className="hover:text-white transition-colors cursor-pointer text-left text-neutral-500 truncate max-w-full block text-[11px]"
                  >
                    {spec.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-display font-bold mb-3 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#D81919]" />
              City 10km Hubs
            </div>
            <ul className="space-y-2">
              {LOCATIONS_DATABASE.map((city) => (
                <li key={city.city_slug}>
                  <button
                    onClick={() =>
                      navigateTo(`/directory/best-healthcare-marketing-agencies-${city.city_slug}`)
                    }
                    className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400"
                  >
                    {city.city}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
              <button
                onClick={() =>
                  navigateTo('/pk/karachi/clifton/dental-clinic-10km-domination')
                }
                className="text-[11px] font-mono text-[#FF4D4D] hover:underline cursor-pointer block"
              >
                Clifton 10km Domination →
              </button>
              <button
                onClick={() =>
                  navigateTo('/pk/lahore/dha-lahore/hair-transplant-clinic-10km-domination')
                }
                className="text-[11px] font-mono text-[#FF4D4D] hover:underline cursor-pointer block"
              >
                DHA Lahore 10km Domination →
              </button>
            </div>
          </div>

          <div>
            <div className="text-white font-display font-bold mb-3 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#D81919]" />
              Healthcare Playbooks
            </div>
            <ul className="space-y-2">
              {BLOG_POSTS.slice(0, 6).map((post) => (
                <li key={post.slug}>
                  <button
                    onClick={() => navigateTo(`/blog/${post.slug}`)}
                    className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 truncate max-w-full block"
                    title={post.title}
                  >
                    {post.title.length > 34 ? `${post.title.slice(0, 34)}...` : post.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigateTo('/blog')}
                  className="text-[#FF4D4D] font-bold hover:underline cursor-pointer block pt-1"
                >
                  View All 12 Guides →
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white font-display font-bold mb-3 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#D81919]" />
              Agency Matrix &amp; Index
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('/directory')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 block"
                >
                  Best Agencies Benchmark 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/compare/clientkit-vs-brivon-marketing')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 block"
                >
                  ClientKit vs Brivon Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/compare/clientkit-vs-oladoc-marham')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 block"
                >
                  ClientKit vs Oladoc &amp; Marham
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/compare/clientkit-vs-adymizing')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400 block"
                >
                  ClientKit vs Adymizing
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => navigateTo('/sitemap')}
                  className="text-[11px] font-mono text-[#FF4D4D] font-bold cursor-pointer hover:underline"
                >
                  Master Sitemap (228 URLs) →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Mirror Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} ClientKit. All rights reserved. Dominate your area in 90 days or we work for free.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-neutral-400 font-medium">
            <button onClick={() => navigateTo('/')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => navigateTo('/portfolio')} className="hover:text-white transition-colors cursor-pointer">
              Portfolio
            </button>
            <button onClick={() => navigateTo('/aesthetic-clinics')} className="hover:text-white transition-colors cursor-pointer">
              Aesthetic Clinics
            </button>
            <button onClick={() => navigateTo('/dental-clinics')} className="hover:text-white transition-colors cursor-pointer">
              Dental Clinics
            </button>
            <button onClick={() => navigateTo('/hospitals')} className="hover:text-white transition-colors cursor-pointer">
              Hospitals
            </button>
            <a href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
