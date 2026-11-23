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
  Calendar,
  Clock,
  ArrowRight,
  ChevronDown,
  Building2,
  MessageSquare,
  Share2,
  AlertCircle
} from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../../utils/calculator';

interface BlogPostViewProps {
  blogSlug: string;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ blogSlug }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const post: BlogPost =
    BLOG_POSTS.find((p) => p.slug === blogSlug) || BLOG_POSTS[0];

  const relatedSpecialty =
    SPECIALTIES.find((s) => post.slug.includes(s.slug.replace('-clinic', ''))) ||
    SPECIALTIES[0];

  const primaryCity = LOCATIONS_DATABASE[0];
  const secondaryCity = LOCATIONS_DATABASE[1];

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
    <article className="min-h-screen bg-[#FAFAFA] text-[#0B0B0B] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-[#525252] mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => navigateTo('/')}
            className="hover:text-[#D81919] cursor-pointer shrink-0"
          >
            ClientKit Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigateTo('/blog')}
            className="hover:text-[#D81919] cursor-pointer shrink-0"
          >
            12 Guides
          </button>
          <span>/</span>
          <span className="text-[#D81919] font-bold truncate max-w-xs">
            {post.category}
          </span>
        </nav>

        {/* Meta Strip */}
        <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-[#0B0B0B]/15 font-mono text-xs text-[#525252]">
          <span className="font-bold uppercase tracking-wider text-[#D81919]">
            {post.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.read_time}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Updated Nov 2026
          </span>
          <button
            onClick={handleShare}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0B0B0B] hover:text-[#D81919] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>

        {/* H1 Title */}
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0B] tracking-tight leading-[1.12] mb-6">
          {post.title}
        </h1>

        {/* Executive Summary */}
        <div className="p-6 sm:p-7 bg-white border-2 border-[#0B0B0B] mb-12">
          <div className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-[#D81919] mb-3">
            Executive Playbook Briefing
          </div>
          <p className="text-[#27272A] text-sm sm:text-base leading-relaxed mb-4">
            {post.executive_summary}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#0B0B0B]/10 text-xs text-[#525252] font-mono">
            <span className="text-[#0B0B0B] font-bold">Focus Topics:</span>
            {post.target_keywords.map((kw, idx) => (
              <span key={idx}>
                {kw}{idx < post.target_keywords.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-12 mb-16">
          {post.sections.map((section, sIdx) => (
            <section key={sIdx} className="scroll-mt-24">
              <div className="flex items-baseline gap-4 mb-4 pb-3 border-b-2 border-[#0B0B0B]">
                <span className="font-display text-xl sm:text-2xl font-black text-[#D81919] shrink-0">
                  ({String(sIdx + 1).padStart(2, '0')})
                </span>
                <h2 className="font-display text-lg sm:text-2xl font-black text-[#0B0B0B] tracking-tight">
                  {section.heading}
                </h2>
              </div>

              <div className="text-[#27272A] leading-relaxed text-sm sm:text-base space-y-4">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {section.callout && (
                  <div className="p-5 bg-white border-l-4 border-[#D81919] border-y border-r border-y-[#0B0B0B]/15 border-r-[#0B0B0B]/15 flex items-start gap-3 text-xs sm:text-sm text-[#0B0B0B] mt-5">
                    <AlertCircle className="w-5 h-5 text-[#D81919] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-mono uppercase tracking-wider text-xs text-[#D81919] block mb-1">
                        Operational Takeaway
                      </strong>
                      {section.callout}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* FAQ Accordion */}
        {post.faq && post.faq.length > 0 && (
          <section className="mb-16">
            <h3 className="font-display text-lg sm:text-xl font-black text-[#0B0B0B] uppercase tracking-tight mb-6">
              Frequently Asked Questions
            </h3>
            <div className="divide-y-2 divide-[#0B0B0B] border-y-2 border-[#0B0B0B] bg-white">
              {post.faq.map((faqItem, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAFA] transition-colors"
                    >
                      <span className="font-bold text-sm sm:text-base text-[#0B0B0B]">
                        <span className="font-mono text-[#D81919] mr-3">
                          ({String(idx + 1).padStart(2, '0')})
                        </span>
                        {faqItem.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0B0B0B] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#D81919]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#3F3F46] leading-relaxed">
                        {faqItem.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Territory Exclusivity CTA */}
        <div className="p-8 sm:p-10 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] mb-16 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#D81919] font-bold mb-3">
            Strict Territory Exclusivity Policy
          </div>
          <h3 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3">
            {BRAND_RULES.core_guarantee}
          </h3>
          <p className="text-[#D4D4D8] text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            We partner with strictly <strong>ONE</strong> hospital or clinic per 10km sector. Check whether your area in Karachi, Lahore, Islamabad, or Rawalpindi is still open.
          </p>
          <button
            onClick={() => handleLetsChat('Blog Bottom CTA')}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D81919] hover:bg-[#B01212] text-white font-display font-bold uppercase tracking-wider transition-colors cursor-pointer text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hub-and-Spoke Internal Linking Bridge */}
        <div className="p-6 sm:p-8 bg-white border-2 border-[#0B0B0B]">
          <h4 className="text-xs font-mono font-bold uppercase text-[#D81919] tracking-[0.2em] mb-6 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Related Specialty & Hyper-Local Resources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div>
              <div className="font-display text-sm font-bold text-[#0B0B0B] mb-2">
                National Specialty Authority
              </div>
              <button
                onClick={() =>
                  navigateTo(`/specialties/${relatedSpecialty.slug}-marketing-agency-pakistan`)
                }
                className="text-[#D81919] hover:underline flex items-center gap-1.5 cursor-pointer font-bold mb-3"
              >
                <span>{relatedSpecialty.name} Marketing Agency Pakistan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[#525252] text-xs leading-relaxed">
                View national metrics, PKR patient acquisition benchmarks, and 30-day proof for {relatedSpecialty.name.toLowerCase()} providers.
              </p>
            </div>

            <div>
              <div className="font-display text-sm font-bold text-[#0B0B0B] mb-2">
                City 10km Sector Hubs
              </div>
              <div className="space-y-2.5">
                <button
                  onClick={() =>
                    navigateTo(
                      `/pk/${primaryCity.city_slug}/${primaryCity.localities[0].slug}/${relatedSpecialty.slug}-10km-domination`
                    )
                  }
                  className="text-[#0B0B0B] hover:text-[#D81919] font-semibold flex items-center gap-1.5 cursor-pointer text-xs"
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
                  className="text-[#0B0B0B] hover:text-[#D81919] font-semibold flex items-center gap-1.5 cursor-pointer text-xs"
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
                  className="text-[#525252] hover:text-[#D81919] flex items-center gap-1.5 cursor-pointer text-xs"
                >
                  <span>Best Healthcare Marketing Agencies in {primaryCity.city}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Read More Posts in Series */}
        <div className="mt-12 pt-8 border-t-2 border-[#0B0B0B]">
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-xs font-mono font-bold uppercase text-[#525252] tracking-[0.2em]">
              More Guides in This Series
            </h4>
            <button
              onClick={() => navigateTo('/blog')}
              className="text-xs font-mono font-bold text-[#D81919] hover:underline cursor-pointer"
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
                  className="p-5 bg-white border-2 border-[#0B0B0B] text-left hover:border-[#D81919] transition-colors cursor-pointer group"
                >
                  <span className="text-[11px] font-mono font-bold text-[#D81919] uppercase block mb-1.5">
                    {otherPost.category}
                  </span>
                  <div className="font-display text-xs sm:text-sm font-bold text-[#0B0B0B] group-hover:text-[#D81919] transition-colors line-clamp-2">
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
