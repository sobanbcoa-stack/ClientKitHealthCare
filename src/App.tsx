/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudiesShowcase } from './components/CaseStudiesShowcase';
import { ClinicsSection } from './components/ClinicsSection';
import { ResultsNumbersSection } from './components/ResultsNumbersSection';
import { ProblemSection } from './components/ProblemSection';
import { PillarsSection } from './components/PillarsSection';
import { FunnelSection } from './components/FunnelSection';
import { ComparisonSection } from './components/ComparisonSection';
import { CalculatorSection } from './components/CalculatorSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';
import { MobileStickyBar } from './components/MobileStickyBar';

import { PortfolioView } from './components/PortfolioView';
import { CaseStudyDetailView } from './components/CaseStudyDetailView';
import { NicheLandingView } from './components/NicheLandingView';
import { HospitalsPageView } from './components/HospitalsPageView';

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
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route.rawPath]);

  useEffect(() => {
    if (route.type === 'home') {
      updateHeadTags({
        title: 'ClientKit™ — Aesthetic & Dental Clinic Growth in 90 Days or Free',
        description:
          'ClientKit makes your aesthetic clinic, dental clinic, or hospital the #1 choice within your 10-kilometer radius in 90 days or we work for free.',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'MarketingAgency',
          name: 'ClientKit',
          url: 'https://clientkit.site',
          description:
            'Hyper-local patient acquisition engine for aesthetic clinics, dental clinics, and hospitals in Pakistan.',
          areaServed: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan'],
          knowsAbout: [
            'Aesthetic Clinic Patient Acquisition',
            'Dental Clinic Marketing',
            'Hospital Patient Acquisition',
            'Local Doctor Video Content',
            '10km Territory Exclusivity'
          ]
        }
      });
    }
  }, [route.type]);

  const renderContent = () => {
    switch (route.type) {
      case 'portfolio-all':
        return <PortfolioView mode="all" />;
      case 'portfolio-aesthetic':
        return <PortfolioView mode="aesthetic" />;
      case 'portfolio-dental':
        return <PortfolioView mode="dental" />;
      case 'niche-aesthetic':
        return <NicheLandingView niche="aesthetic" />;
      case 'niche-dental':
        return <NicheLandingView niche="dental" />;
      case 'hospitals-page':
        return <HospitalsPageView />;
      case 'case-study-detail':
        return <CaseStudyDetailView slug={route.params.slug} />;
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
            {/* 1. Hero Banner (Meadow Hill + Pixel T-Rex + 90 Days Headline) */}
            <Hero />
            {/* 2. Alternating Aesthetic & Dental Case Studies Showcase Right After Banner */}
            <CaseStudiesShowcase />
            {/* 3. Combined Proven Hospital Results (All 6 Hospitals) */}
            <ClinicsSection />
            {/* 4. Numbers Showcase Section */}
            <ResultsNumbersSection />
            {/* 5. Problem, System Pillars, Funnel, Comparison, Calculator, FAQ & Finale */}
            <ProblemSection />
            <PillarsSection />
            <FunnelSection />
            <ComparisonSection />
            <CalculatorSection />
            <FaqSection />
            <CtaSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] selection:bg-[#D81919] selection:text-white font-sans antialiased overflow-x-hidden">
      <Header />
      {renderContent()}
      <Footer />
      <FloatingWidget />
      <MobileStickyBar />
    </div>
  );
}
