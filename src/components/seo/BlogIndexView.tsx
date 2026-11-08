import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, BlogPost } from '../../data/pseoData';
import { updateHeadTags, navigateTo } from '../../utils/router';
import {
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { WHATSAPP_NUMBER_RAW, openWhatsApp } from '../../utils/calculator';

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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <button
            onClick={() => navigateTo('/')}
            className="hover:text-emerald-400 cursor-pointer"
          >
            ClientKit Home
          </button>
          <span>/</span>
          <span className="text-emerald-400 font-bold">
            Healthcare Marketing Intelligence & Playbooks
          </span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Operational Research Desk · November 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
            Healthcare Marketing Playbooks & Economics for Pakistani Clinics
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Written specifically for Hospital CEOs, Medical Directors, and Practice Owners. Detailed strategies on filling OPDs, booking surgical consultations, and dominating your 10km radius without wasting millions on generic agency retainer fees.
          </p>
        </div>

        {/* Controls: Search & Category filter */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-slate-800">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides or keywords..."
              className="w-full bg-slate-900 border border-slate-800 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => navigateTo(`/blog/${post.slug}`)}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3 h-3" />
                    {post.read_time}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug mb-3">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {post.executive_summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Read Full Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Territory Exclusivity Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase text-emerald-400 font-bold mb-1">
              Strict Guarantee
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              Dominate Your 10km Area in 30 Days — Or We Work For Free
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We never take on two competing hospitals in the same 10km zone. Lock your territory before your regional competitor does.
            </p>
          </div>
          <button
            onClick={handleLetsChat}
            className="px-6 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20 shrink-0 text-xs sm:text-sm"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Let's chat</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
