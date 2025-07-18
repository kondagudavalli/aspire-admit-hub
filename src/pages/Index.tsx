import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import AdmissionProcessSection from '@/components/AdmissionProcessSection';
import CollegeHighlightsSection from '@/components/CollegeHighlightsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AnnouncementsSection />
        <AdmissionProcessSection />
        <CollegeHighlightsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
