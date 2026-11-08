import React, { useState, useEffect } from 'react';
import {
  SPECIALTIES,
  LOCATIONS_DATABASE,
  COMPETITOR_BENCHMARKS,
  BLOG_POSTS,
  BRAND_RULES
} from '../../data/pseoData';
import { updateHeadTags, navigateTo } from '../../utils/router';
import {
  Globe,
  Layers,
  MapPin,
  ExternalLink,
  Search,
  Download,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Database
} from 'lucide-react';

export const MasterDirectoryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'wave1' | 'wave2' | 'wave3' | 'wave4' | 'wave5'>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    updateHeadTags({
      title: 'Master Sitemap & Programmatic URL Index | ClientKit Pakistan',
      description:
        'Complete programmatic SEO directory and wave rollout index for ClientKit Pakistan healthcare patient acquisition engine.'
    });
  }, []);

  // Generate Wave 1 URLs (8 Specialties)
  const wave1Urls = SPECIALTIES.map((spec) => ({
    url: `/specialties/${spec.slug}-marketing-agency-pakistan`,
    title: `${spec.name} Marketing Agency Pakistan`,
    wave: 1,
    tag: 'National Specialty Authority'
  }));

  // Generate Wave 2 URLs (6 Cities x 8 Specialties = 48 URLs)
  const wave2Urls: Array<{ url: string; title: string; wave: number; tag: string }> = [];
  LOCATIONS_DATABASE.forEach((loc) => {
    SPECIALTIES.forEach((spec) => {
      wave2Urls.push({
        url: `/pk/${loc.city_slug}/${spec.slug}-patient-acquisition`,
        title: `${spec.name} Patient Acquisition in ${loc.city}`,
        wave: 2,
        tag: 'City x Specialty Hub'
      });
    });
  });

  // Generate Wave 3 URLs (12 Blog Guides)
  const wave3Urls = BLOG_POSTS.map((post) => ({
    url: `/blog/${post.slug}`,
    title: post.title,
    wave: 3,
    tag: `Blog (${post.category})`
  }));

  // Generate Wave 4 URLs (City Directories + Competitor Comparisons)
  const wave4Urls: Array<{ url: string; title: string; wave: number; tag: string }> = [];
  LOCATIONS_DATABASE.forEach((loc) => {
    wave4Urls.push({
      url: `/directory/best-healthcare-marketing-agencies-${loc.city_slug}`,
      title: `Best Healthcare Marketing Agencies in ${loc.city}`,
      wave: 4,
      tag: 'City Agency Directory'
    });
  });
  COMPETITOR_BENCHMARKS.forEach((comp) => {
    wave4Urls.push({
      url: `/compare/clientkit-vs-${comp.slug}`,
      title: `ClientKit vs ${comp.domain} Comparison`,
      wave: 4,
      tag: 'Competitor Comparison'
    });
  });

  // Generate Wave 5 URLs (22 Micro-Localities x 8 Specialties = 176 URLs)
  const wave5Urls: Array<{ url: string; title: string; wave: number; tag: string }> = [];
  LOCATIONS_DATABASE.forEach((city) => {
    city.localities.forEach((loc) => {
      SPECIALTIES.forEach((spec) => {
        wave5Urls.push({
          url: `/pk/${city.city_slug}/${loc.slug}/${spec.slug}-10km-domination`,
          title: `${spec.name} 10km Domination in ${loc.name}, ${city.city}`,
          wave: 5,
          tag: '10km Sector Domination'
        });
      });
    });
  });

  const allUrls = [
    ...wave1Urls,
    ...wave2Urls,
    ...wave3Urls,
    ...wave4Urls,
    ...wave5Urls
  ];

  const getFilteredUrls = () => {
    let list = allUrls;
    if (activeTab === 'wave1') list = wave1Urls;
    if (activeTab === 'wave2') list = wave2Urls;
    if (activeTab === 'wave3') list = wave3Urls;
    if (activeTab === 'wave4') list = wave4Urls;
    if (activeTab === 'wave5') list = wave5Urls;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.url.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q)
      );
    }
    return list;
  };

  const displayedUrls = getFilteredUrls();

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
            Master Sitemap & Programmatic URL Engine
          </span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            228 Total Indexed Healthcare URLs · Hub-and-Spoke Topology
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
            ClientKit Programmatic SEO Master Index
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Full inventory of all programmatic landing pages across Pakistan, structured across five disciplined rollout waves. Every URL enforces strict territory exclusivity and points directly to verified 30-day patient acquisition funnels.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 mb-1">Total URLs</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
              {allUrls.length}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 mb-1">Wave 1 (Specialty)</div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              {wave1Urls.length}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 mb-1">Wave 2 (City Hub)</div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              {wave2Urls.length}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 mb-1">Wave 3 (Blog Playbooks)</div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              {wave3Urls.length}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 mb-1">Wave 4 (Directory)</div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              {wave4Urls.length}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 mb-1">Wave 5 (10km Sectors)</div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono">
              {wave5Urls.length}
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 pb-6 border-b border-slate-800">
          {/* Waves Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: `All (${allUrls.length})` },
              { id: 'wave1', label: `Wave 1 (${wave1Urls.length})` },
              { id: 'wave2', label: `Wave 2 (${wave2Urls.length})` },
              { id: 'wave3', label: `Wave 3 (${wave3Urls.length})` },
              { id: 'wave4', label: `Wave 4 (${wave4Urls.length})` },
              { id: 'wave5', label: `Wave 5 (${wave5Urls.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar & JSON link */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search URLs or keywords..."
                className="w-full bg-slate-900 border border-slate-800 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <a
              href="/clientkit_pseo_data.json"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer shrink-0"
              title="Download Master JSON Dataset"
            >
              <Database className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
          <span>Showing {displayedUrls.length} pages</span>
          <span>Click any row to test live rendering</span>
        </div>

        {/* URL List */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden divide-y divide-slate-800/80 mb-12 shadow-xl">
          {displayedUrls.slice(0, 100).map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigateTo(item.url)}
              className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-slate-850 hover:bg-slate-800/40 transition-colors cursor-pointer group"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                    Wave {item.wave}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    {item.tag}
                  </span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                  {item.title}
                </div>
                <div className="text-xs font-mono text-slate-400 truncate mt-0.5">
                  https://clientkit.site{item.url}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-emerald-400 shrink-0 self-end sm:self-center">
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {displayedUrls.length > 100 && (
            <div className="p-4 text-center text-xs font-mono text-slate-400 bg-slate-900">
              Showing first 100 matching entries of {displayedUrls.length}. Use search to narrow down by city, specialty, or locality.
            </div>
          )}
        </div>

        {/* JSON Export Reference Box */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full Programmatic JSON Master File</div>
              <div className="text-xs text-slate-400">
                Machine-readable JSON located at <code className="text-emerald-400">/clientkit_pseo_data.json</code> with all schemas, pricing benchmarks, and coordinates.
              </div>
            </div>
          </div>
          <a
            href="/clientkit_pseo_data.json"
            download="clientkit_pseo_data.json"
            className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0 border border-slate-700"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Dataset</span>
          </a>
        </div>
      </div>
    </div>
  );
};
