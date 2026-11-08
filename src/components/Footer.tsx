import React from 'react';
import { Logo } from './Logo';
import { MessageSquare, ArrowRight, ShieldCheck, MapPin, Layers, BookOpen, Building2 } from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../utils/calculator';
import { navigateTo } from '../utils/router';
import { SPECIALTIES, LOCATIONS_DATABASE, BLOG_POSTS, BRAND_RULES } from '../data/pseoData';

export const Footer: React.FC = () => {
  const handleFooterWhatsApp = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I am contacting you from the website footer to discuss our hospital / clinic area.'
    );
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-24 lg:pb-16 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800">
          <div className="max-w-md">
            <button onClick={() => navigateTo('/')} className="cursor-pointer text-left">
              <Logo size="md" theme="white" showTagline={true} />
            </button>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
              The proprietary local patient acquisition engine for hospitals, surgical centers, and clinics in Pakistan. We deploy in-person corporate outreach, localized doctor video tips, and 1-tap WhatsApp consultation tokens.
            </p>
            <div className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strictly 1 Hospital Per 10-KM Territory Policy</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-xs text-slate-400 font-medium">
              Ready to dominate your 10-km radius?
            </span>
            <button
              onClick={handleFooterWhatsApp}
              className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Let's chat</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

        {/* Structured SEO Link Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800/80">
          {/* Col 1: Specialties */}
          <div>
            <div className="text-white font-bold mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              8 Specialties (Pakistan)
            </div>
            <ul className="space-y-2">
              {SPECIALTIES.map((spec) => (
                <li key={spec.slug}>
                  <button
                    onClick={() =>
                      navigateTo(`/specialties/${spec.slug}-marketing-agency-pakistan`)
                    }
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left text-slate-400 truncate max-w-full block"
                  >
                    {spec.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: 10km Cities & Micro-Sectors */}
          <div>
            <div className="text-white font-bold mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              City 10km Hubs
            </div>
            <ul className="space-y-2">
              {LOCATIONS_DATABASE.map((city) => (
                <li key={city.city_slug}>
                  <button
                    onClick={() =>
                      navigateTo(`/directory/best-healthcare-marketing-agencies-${city.city_slug}`)
                    }
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left text-slate-400"
                  >
                    {city.city} (Sectors & Agencies)
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={() =>
                  navigateTo(
                    '/pk/karachi/clifton/dental-clinic-marketing-10km-domination'
                  )
                }
                className="text-[11px] font-mono text-emerald-400 hover:underline cursor-pointer block"
              >
                Clifton 10km Domination →
              </button>
              <button
                onClick={() =>
                  navigateTo(
                    '/pk/lahore/dha-phase-5-6/hair-transplant-patient-acquisition-10km-domination'
                  )
                }
                className="text-[11px] font-mono text-emerald-400 hover:underline cursor-pointer block mt-1"
              >
                DHA Lahore 10km Domination →
              </button>
            </div>
          </div>

          {/* Col 3: 12 Guides & Playbooks */}
          <div>
            <div className="text-white font-bold mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              Healthcare Playbooks
            </div>
            <ul className="space-y-2">
              {BLOG_POSTS.slice(0, 6).map((post) => (
                <li key={post.slug}>
                  <button
                    onClick={() => navigateTo(`/blog/${post.slug}`)}
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-left text-slate-400 truncate max-w-full block"
                    title={post.title}
                  >
                    {post.title.length > 36 ? `${post.title.slice(0, 36)}...` : post.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigateTo('/blog')}
                  className="text-emerald-400 font-bold hover:underline cursor-pointer block pt-1"
                >
                  View All 12 Guides →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Comparison & Rollout Architecture */}
          <div>
            <div className="text-white font-bold mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Agency Matrix & Index
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('/directory')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left text-slate-400 block"
                >
                  Best Agencies Benchmark 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/compare/clientkit-vs-brivon-media')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left text-slate-400 block"
                >
                  ClientKit vs Brivon Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/compare/clientkit-vs-oladoc-marham')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left text-slate-400 block"
                >
                  ClientKit vs Oladoc & Marham
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/compare/clientkit-vs-adymizing')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left text-slate-400 block"
                >
                  ClientKit vs Adymizing
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => navigateTo('/sitemap')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold cursor-pointer hover:bg-emerald-500/20"
                >
                  <Layers className="w-3 h-3" />
                  Master Sitemap (228 URLs)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ClientKit. All rights reserved. Dominate your area in 30 days or we work for free.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400 font-medium">
            <button onClick={() => navigateTo('/')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <a href="/#problem" className="hover:text-white transition-colors">
              The Problem
            </a>
            <a href="/#how-it-works" className="hover:text-white transition-colors">
              5-Step Funnel
            </a>
            <a href="/#pillars" className="hover:text-white transition-colors">
              How We Do It
            </a>
            <a href="/#facilities" className="hover:text-white transition-colors">
              Facilities & Results
            </a>
            <a href="/#calculator" className="hover:text-white transition-colors">
              Calculator (PKR)
            </a>
            <a href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
