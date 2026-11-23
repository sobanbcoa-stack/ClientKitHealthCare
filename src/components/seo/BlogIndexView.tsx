import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../../data/pseoData';
import { updateHeadTags, navigateTo } from '../../utils/router';
import {
  Clock,
  ArrowRight,
  Search,
  MessageSquare
} from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../../utils/calculator';
import { PixelHeartCluster } from '../BrandArt';

export const BlogIndexView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    updateHeadTags({
      title: 'Healthcare Marketing Guides & Patient Acquisition Playbooks | ClientKit',
      description:
        '12 battle-tested playbooks for hospital administrators, clinic owners, and medical directors in Pakistan. Dominate your 10km radius in 30 days.'
    });
  }, []);

  const categories = [
    'All',
    ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.executive_summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.target_keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleLetsChat = () => {
    openWhatsApp(
      WHATSAPP_NUMBER_RAW,
      'Hi ClientKit! I was reviewing your healthcare marketing guides and would like to talk about acquiring patients for our medical facility.'
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0B0B0B] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-[#525252] mb-8">
          <button
            onClick={() => navigateTo('/')}
            className="hover:text-[#D81919] transition-colors cursor-pointer"
          >
            ClientKit Home
          </button>
          <span>/</span>
          <span className="text-[#D81919] font-bold">
            12 Healthcare Playbooks
          </span>
        </nav>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-10 border-b-2 border-[#0B0B0B]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-3">
              Operational Research Desk · Pakistan Healthcare
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-black text-[#D81919] uppercase tracking-tight leading-[1.06] mb-5">
              12 Patient Acquisition Playbooks
            </h1>
            <p className="text-[#3F3F46] text-sm sm:text-base leading-relaxed">
              Written specifically for Hospital CEOs, Medical Directors, and Practice Owners. Detailed strategies on filling OPDs, booking surgical consultations, and dominating your 10km radius without wasting millions on generic agency retainers.
            </p>
          </div>
          <div className="hidden lg:block shrink-0 pb-2">
            <PixelHeartCluster color="#D81919" className="w-24 h-20" />
          </div>
        </div>

        {/* Controls: Search & Category filter */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-[#0B0B0B]/15">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer border-2 ${
                  selectedCategory === cat
                    ? 'bg-[#D81919] text-white border-[#0B0B0B]'
                    : 'bg-white text-[#0B0B0B] border-[#0B0B0B]/20 hover:border-[#0B0B0B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#525252] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search guides or keywords"
              placeholder="Search guides or keywords..."
              className="w-full bg-white border-2 border-[#0B0B0B] pl-10 pr-4 py-2 text-xs font-mono text-[#0B0B0B] placeholder-[#71717A] focus:outline-none focus:border-[#D81919] transition-colors"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.slug}
              className="bg-white border-2 border-[#0B0B0B] hover:border-[#D81919] transition-all flex flex-col justify-between group"
            >
              <button
                onClick={() => navigateTo(`/blog/${post.slug}`)}
                className="p-6 text-left flex flex-col justify-between h-full cursor-pointer w-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#0B0B0B]/10">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D81919]">
                      ({String(idx + 1).padStart(2, '0')}) {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#525252]">
                      <Clock className="w-3 h-3" />
                      {post.read_time}
                    </span>
                  </div>

                  <h2 className="font-display text-base sm:text-lg font-extrabold text-[#0B0B0B] group-hover:text-[#D81919] transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed line-clamp-3 mb-5">
                    {post.executive_summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B0B0B]/10 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#0B0B0B] group-hover:text-[#D81919]">
                  <span>Read Full Playbook</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* Territory Exclusivity Banner */}
        <div className="p-8 sm:p-10 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase text-[#D81919] font-bold tracking-[0.2em] mb-2">
              Strict 10-KM Exclusivity
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
              Dominate Your Area in 30 Days — Or We Work For Free
            </h3>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              We never take on two competing hospitals in the same 10km zone. Lock your territory before your regional competitor does.
            </p>
          </div>
          <button
            onClick={handleLetsChat}
            className="px-7 py-4 bg-[#D81919] hover:bg-[#B01212] text-white font-display font-bold uppercase tracking-wider transition-colors flex items-center gap-2.5 cursor-pointer shrink-0 text-xs sm:text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
