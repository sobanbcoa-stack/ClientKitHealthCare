import React, { useEffect, useState } from 'react';
import {
  BLOG_POSTS,
  SPECIALTIES,
  LOCATIONS_DATABASE,
  BRAND_RULES,
  BlogPost
} from '../../data/pseoData';
import { updateHeadTags, navigateTo } from '../../utils/router';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ChevronDown,
  Building2,
  ShieldAlert,
  MessageSquare,
  Sparkles,
  Share2,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../../utils/calculator';

interface BlogPostViewProps {
  blogSlug: string;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ blogSlug }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find the blog post or fallback to first
  const post: BlogPost =
    BLOG_POSTS.find((p) => p.slug === blogSlug) || BLOG_POSTS[0];

  // Pick related specialty based on slug keywords or default to first
  const relatedSpecialty =
    SPECIALTIES.find((s) => post.slug.includes(s.slug.replace('-clinic', ''))) ||
    SPECIALTIES[0];

  const primaryCity = LOCATIONS_DATABASE[0]; // Karachi
  const secondaryCity = LOCATIONS_DATABASE[1]; // Lahore

  useEffect(() => {
    const title = `${post.title} | ClientKit Healthcare Guide`;
    const description = post.executive_summary;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.executive_summary,
      inLanguage: ['en-PK', 'ur-PK'],
      datePublished: '2026-11-01',
      dateModified: '2026-11-08',
      author: {
        '@type': 'Organization',
        name: 'ClientKit Healthcare Research Desk',
        url: 'https://clientkit.site'
      },
      publisher: {
        '@type': 'Organization',
        name: 'ClientKit',
        url: 'https://clientkit.site',
        logo: {
          '@type': 'ImageObject',
          url: 'https://clientkit.site/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://clientkit.site/blog/${post.slug}`
      },
      about: {
        '@type': 'MedicalSpecialty',
        name: relatedSpecialty.name
      }
    };

    updateHeadTags({ title, description, schema });
  }, [post, relatedSpecialty]);

  const handleLetsChat = (contextNote: string) => {
    const msg = `Hi ClientKit! I read your guide "${post.title}". I operate a clinic / hospital in Pakistan and want to discuss dominating our 10km radius. (${contextNote})`;
    openWhatsApp(WHATSAPP_NUMBER_RAW, msg);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => navigateTo('/')}
            className="hover:text-emerald-400 cursor-pointer shrink-0"
          >
            ClientKit Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigateTo('/blog')}
            className="hover:text-emerald-400 cursor-pointer shrink-0"
          >
            Healthcare Guides & Playbooks
          </button>
          <span>/</span>
          <span className="text-emerald-400 font-bold truncate max-w-xs">
            {post.category}
          </span>
        </nav>

        {/* Category Pill & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {post.read_time}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            Updated November 2026
          </span>
          <button
            onClick={handleShare}
            className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* H1 Main Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] mb-6">
          {post.title}
        </h1>

        {/* Subtitle / Executive Summary */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 border-l-2 border-emerald-500 pl-4 py-1">
          {post.executive_summary}
        </p>

        {/* Executive Summary Card */}
        <div className="rounded-2xl p-6 sm:p-7 bg-slate-900/90 border border-emerald-500/30 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            Executive Playbook Briefing
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
            {post.executive_summary}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
            <span className="text-emerald-400 font-bold">Target Keywords:</span>
            {post.target_keywords.map((kw, idx) => (
              <span key={idx}>
                "{kw}"{idx < post.target_keywords.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Sections from BlogPost */}
        <div className="space-y-14 mb-16">
          {post.sections.map((section, sIdx) => (
            <section key={sIdx} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {String(sIdx + 1).padStart(2, '0')}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>
              </div>

              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-sm sm:text-base space-y-4">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {section.callout && (
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-start gap-3 text-xs sm:text-sm text-slate-200 mt-4">
                    <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-300 block mb-1">
                        Operational Takeaway:
                      </strong>
                      {section.callout}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* People Also Ask (PAA) Accordion */}
        {post.faq && post.faq.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Frequently Asked Questions (PAA Breakdown)
              </h3>
            </div>
            <div className="space-y-3">
              {post.faq.map((faqItem, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                    >
                      <span className="font-semibold text-sm sm:text-base text-slate-200">
                        {faqItem.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 pt-3 leading-relaxed">
                        {faqItem.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Territory Exclusivity Callout Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 border border-emerald-500/40 shadow-2xl relative overflow-hidden mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            Strict Territory Exclusivity Policy
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight mb-3">
            {BRAND_RULES.core_guarantee}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            We partner with strictly <strong>ONE</strong> hospital or clinic per 10km sector. Check whether your facility's area in Karachi, Lahore, Islamabad, or Rawalpindi is still available.
          </p>
          <button
            onClick={() => handleLetsChat('Blog Bottom CTA')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer text-sm"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Hub-and-Spoke Internal Linking Bridge */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider mb-6 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            Related Specialty & Hyper-Local Resources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div>
              <div className="text-white font-bold mb-2">National Specialty Authority</div>
              <button
                onClick={() =>
                  navigateTo(`/specialties/${relatedSpecialty.slug}-marketing-agency-pakistan`)
                }
                className="text-emerald-400 hover:underline flex items-center gap-1.5 cursor-pointer font-medium mb-3"
              >
                <span>{relatedSpecialty.name} Marketing Agency Pakistan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-slate-400 text-xs">
                View national metrics, PKR patient acquisition benchmarks, and 30-day proof for {relatedSpecialty.name.toLowerCase()} providers.
              </p>
            </div>

            <div>
              <div className="text-white font-bold mb-2">City 10km Sector Hubs</div>
              <div className="space-y-2">
                <button
                  onClick={() =>
                    navigateTo(
                      `/pk/${primaryCity.city_slug}/${primaryCity.localities[0].slug}/${relatedSpecialty.slug}-10km-domination`
                    )
                  }
                  className="text-emerald-400 hover:underline flex items-center gap-1.5 cursor-pointer text-xs"
                >
                  <span>
                    {primaryCity.city} ({primaryCity.localities[0].name}) 10km Domination
                  </span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() =>
                    navigateTo(
                      `/pk/${secondaryCity.city_slug}/${secondaryCity.localities[0].slug}/${relatedSpecialty.slug}-10km-domination`
                    )
                  }
                  className="text-emerald-400 hover:underline flex items-center gap-1.5 cursor-pointer text-xs"
                >
                  <span>
                    {secondaryCity.city} ({secondaryCity.localities[0].name}) 10km Domination
                  </span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() =>
                    navigateTo(`/directory/best-healthcare-marketing-agencies-${primaryCity.city_slug}`)
                  }
                  className="text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer text-xs"
                >
                  <span>Best Healthcare Marketing Agencies in {primaryCity.city}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Read More Posts in Series */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-mono uppercase text-slate-400 tracking-wider">
              More Guides in This Series
            </h4>
            <button
              onClick={() => navigateTo('/blog')}
              className="text-xs font-mono text-emerald-400 hover:underline cursor-pointer"
            >
              View All 12 Guides →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BLOG_POSTS.filter((p) => p.slug !== post.slug)
              .slice(0, 4)
              .map((otherPost) => (
                <button
                  key={otherPost.slug}
                  onClick={() => navigateTo(`/blog/${otherPost.slug}`)}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left hover:border-emerald-500/40 hover:bg-slate-900 transition-all cursor-pointer group"
                >
                  <span className="text-[11px] font-mono text-emerald-400 uppercase block mb-1">
                    {otherPost.category}
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {otherPost.title}
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};
