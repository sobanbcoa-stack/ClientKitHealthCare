/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FunnelSection } from './components/FunnelSection';
import { PillarsSection } from './components/PillarsSection';
import { ClinicsSection } from './components/ClinicsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { CalculatorSection } from './components/CalculatorSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';
import { MobileStickyBar } from './components/MobileStickyBar';

import { useCurrentRoute, updateHeadTags } from './utils/router';
import { NationalSpecialtyView } from './components/seo/NationalSpecialtyView';
import { LocalSectorView } from './components/seo/LocalSectorView';
import { DirectoryCompareView } from './components/seo/DirectoryCompareView';
import { BlogPostView } from './components/seo/BlogPostView';
import { BlogIndexView } from './components/seo/BlogIndexView';
import { MasterDirectoryView } from './components/seo/MasterDirectoryView';

export default function App() {
  const route = useCurrentRoute();

  useEffect(() => {
    if (route.type === 'home') {
      updateHeadTags({
        title: 'ClientKit - Dominate Your Area In 30 Days Or We Work For Free',
        description:
          'ClientKit is the patient acquisition engine for Pakistani hospitals and clinics. Strictly 1 partner per 10km area. In-person ground game, medical telemarketing, and doctor video content.',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'MarketingAgency',
          name: 'ClientKit',
          url: 'https://clientkit.site',
          description:
            'Hyper-local patient acquisition engine for private hospitals, surgical centers, and clinics in Pakistan.',
          areaServed: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan'],
          knowsAbout: [
            'Hospital Patient Acquisition',
            'Healthcare Telemarketing',
            'Local Doctor Video Content',
            'Hospital Territory Exclusivity'
          ]
        }
      });
    }
  }, [route.type]);

  const renderContent = () => {
    switch (route.type) {
      case 'national-specialty':
        return <NationalSpecialtyView specialtySlug={route.params.specialtySlug} />;
      case 'sector-specialty':
        return (
          <LocalSectorView
            citySlug={route.params.citySlug}
            localitySlug={route.params.localitySlug}
            specialtySlug={route.params.specialtySlug}
          />
        );
      case 'city-specialty':
        return (
          <LocalSectorView
            citySlug={route.params.citySlug}
            specialtySlug={route.params.specialtySlug}
          />
        );
      case 'city-directory':
        return <DirectoryCompareView citySlug={route.params.citySlug} />;
      case 'competitor-compare':
        return <DirectoryCompareView competitorSlug={route.params.competitorSlug} />;
      case 'directory-index':
        return <DirectoryCompareView />;
      case 'blog-post':
        return <BlogPostView blogSlug={route.params.blogSlug} />;
      case 'blog-index':
        return <BlogIndexView />;
      case 'master-sitemap':
        return <MasterDirectoryView />;
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <ProblemSection />
            <FunnelSection />
            <PillarsSection />
            <ClinicsSection />
            <ComparisonSection />
            <CalculatorSection />
            <FaqSection />
            <CtaSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
      <Header />
      {renderContent()}
      <Footer />
      <FloatingWidget />
      <MobileStickyBar />
    </div>
  );
}
