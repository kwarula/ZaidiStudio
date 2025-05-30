
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PremiumHero from '../components/PremiumHero';
import PremiumTimeline from '../components/PremiumTimeline';
import PainPoints from '../components/PainPoints';
import CaseStudies from '../components/CaseStudies';
import IndustryBenefits from '../components/IndustryBenefits';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat/LiveChat';
import SEOMetadata from '../components/SEOMetadata';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOMetadata />
      <Header />
      
      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Pain Points Section */}
      <PainPoints />

      {/* How It Works Timeline */}
      <PremiumTimeline />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Industry Benefits Carousel */}
      <IndustryBenefits />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
      
      {/* Final CTA */}
      <CTA />

      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
