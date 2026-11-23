import React, { useState, useEffect } from 'react';
import {
  SPECIALTIES,
  LOCATIONS_DATABASE,
  COMPETITOR_BENCHMARKS,
  BLOG_POSTS
} from '../../data/pseoData';
import { updateHeadTags, navigateTo } from '../../utils/router';
import {
  Search,
  Download,
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

  const wave1Urls = SPECIALTIES.map((spec) => ({
    url: `/specialties/${spec.slug}-marketing-agency-pakistan`,
    title: `${spec.name} Marketing Agency Pakistan`,
    wave: 1,
    tag: 'National Specialty'
  }));

  const wave2Urls: Array<{ url: string; title: string; wave: number; tag: string }> = [];
  LOCATIONS_DATABASE.forEach((loc) => {
    SPECIALTIES.forEach((spec) => {
      wave2Urls.push({
        url: `/pk/${loc.city_slug}/${spec.slug}-patient-acquisition`,
        title: `${spec.name} Patient Acquisition in ${loc.city}`,
        wave: 2,
        tag: 'City × Specialty'
      });
    });
  });

  const wave3Urls = BLOG_POSTS.map((post) => ({
    url: `/blog/${post.slug}`,
    title: post.title,
    wave: 3,
    tag: `Playbook · ${post.category}`
  }));

  const wave4Urls: Array<{ url: string; title: string; wave: number; tag: string }> = [];
  LOCATIONS_DATABASE.forEach((loc) => {
    wave4Urls.push({
      url: `/directory/best-healthcare-marketing-agencies-${loc.city_slug}`,
      title: `Best Healthcare Marketing Agencies in ${loc.city}`,
      wave: 4,
      tag: 'City Directory'
    });
  });
  COMPETITOR_BENCHMARKS.forEach((comp) => {
    wave4Urls.push({
      url: `/compare/clientkit-vs-${comp.slug}`,
      title: `ClientKit vs ${comp.domain} Comparison`,
      wave: 4,
      tag: 'Comparison'
    });
  });

  const wave5Urls: Array<{ url: string; title: string; wave: number; tag: string }> = [];
  LOCATIONS_DATABASE.forEach((city) => {
    city.localities.forEach((loc) => {
      SPECIALTIES.forEach((spec) => {
        wave5Urls.push({
          url: `/pk/${city.city_slug}/${loc.slug}/${spec.slug}-10km-domination`,
          title: `${spec.name} 10km Domination in ${loc.name}, ${city.city}`,
          wave: 5,
          tag: '10km Sector'
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
    <div className="min-h-screen bg-[#FAFAFA] text-[#0B0B0B] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-[#525252] mb-8">
          <button
            onClick={() => navigateTo('/')}
            className="hover:text-[#D81919] cursor-pointer"
          >
            ClientKit Home
          </button>
          <span>/</span>
          <span className="text-[#D81919] font-bold">
            Master Directory & URL Index
          </span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#D81919] mb-3">
            {allUrls.length} Indexed Healthcare Pages · Pakistan
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-[#D81919] uppercase tracking-tight leading-[1.06] mb-4">
            Pakistan Territory Index
          </h1>
          <p className="text-[#3F3F46] text-sm sm:text-base leading-relaxed">
            Complete hub-and-spoke directory covering every Pakistani city, specialty, agency comparison, and 10km hospital catchment sector served by ClientKit.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {[
            { label: 'Total Pages', value: allUrls.length, accent: true },
            { label: 'Wave 1 · Specialty', value: wave1Urls.length, accent: false },
            { label: 'Wave 2 · City Hub', value: wave2Urls.length, accent: false },
            { label: 'Wave 3 · Playbooks', value: wave3Urls.length, accent: false },
            { label: 'Wave 4 · Compare', value: wave4Urls.length, accent: false },
            { label: 'Wave 5 · 10km', value: wave5Urls.length, accent: false }
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-white border-2 border-[#0B0B0B]"
            >
              <div className="text-[11px] font-mono text-[#525252] uppercase mb-1">
                {stat.label}
              </div>
              <div
                className={`text-2xl font-display font-black tabular-nums ${
                  stat.accent ? 'text-[#D81919]' : 'text-[#0B0B0B]'
                }`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 pb-6 border-b-2 border-[#0B0B0B]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
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
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-2 text-xs font-mono font-bold uppercase whitespace-nowrap transition-colors cursor-pointer border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#D81919] text-white border-[#0B0B0B]'
                    : 'bg-white text-[#0B0B0B] border-[#0B0B0B]/20 hover:border-[#0B0B0B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#525252] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search URLs or keywords"
                placeholder="Search cities, specialties..."
                className="w-full bg-white border-2 border-[#0B0B0B] pl-9 pr-4 py-2 text-xs font-mono text-[#0B0B0B] placeholder-[#71717A] focus:outline-none focus:border-[#D81919]"
              />
            </div>
            <a
              href="/clientkit_pseo_data.json"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white border-2 border-[#0B0B0B] hover:border-[#D81919] text-[#0B0B0B] hover:text-[#D81919] transition-colors shrink-0"
              title="Open Master JSON Dataset"
              aria-label="Open Master JSON Dataset"
            >
              <Database className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-[#525252] mb-4 flex items-center justify-between">
          <span>Showing {displayedUrls.length} pages</span>
          <span>Select any row to open</span>
        </div>

        {/* URL List */}
        <div className="border-2 border-[#0B0B0B] bg-white divide-y divide-[#0B0B0B]/15 mb-12">
          {displayedUrls.slice(0, 100).map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigateTo(item.url)}
              className="w-full text-left p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#FAFAFA] transition-colors cursor-pointer group"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1 font-mono text-[11px] uppercase">
                  <span className="font-bold text-[#0B0B0B]">Wave {item.wave}</span>
                  <span className="text-[#71717A]">·</span>
                  <span className="font-bold text-[#D81919]">{item.tag}</span>
                </div>
                <div className="font-display text-sm font-bold text-[#0B0B0B] group-hover:text-[#D81919] transition-colors truncate">
                  {item.title}
                </div>
                <div className="text-xs font-mono text-[#525252] truncate mt-0.5">
                  https://clientkit.site{item.url}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0B0B0B] group-hover:text-[#D81919] shrink-0 self-end sm:self-center">
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}

          {displayedUrls.length > 100 && (
            <div className="p-4 text-center text-xs font-mono text-[#525252] bg-[#FAFAFA]">
              Showing first 100 matching entries of {displayedUrls.length}. Use search to filter by city, specialty, or sector.
            </div>
          )}
        </div>

        {/* JSON Export Reference Box */}
        <div className="p-6 bg-[#0B0B0B] text-white border-2 border-[#0B0B0B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#D81919] flex items-center justify-center text-white shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-sm font-bold text-white uppercase">
                Master Programmatic Dataset
              </div>
              <div className="text-xs text-[#D4D4D8] font-mono">
                /clientkit_pseo_data.json — schemas, benchmarks & sector coordinates
              </div>
            </div>
          </div>
          <a
            href="/clientkit_pseo_data.json"
            download="clientkit_pseo_data.json"
            className="px-5 py-3 bg-[#D81919] hover:bg-[#B01212] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download JSON</span>
          </a>
        </div>
      </div>
    </div>
  );
};
