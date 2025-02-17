import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Benefits from '../components/Benefits';
import AIContentGenerator from '../components/AIContentGenerator';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat/LiveChat';
import SEOMetadata from '../components/SEOMetadata';
import DemoTerminal from '../components/DemoTerminal';

const Index = () => {
  const location = useLocation();

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <svg width="0" height="0" className="hidden">
        <defs>
          <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <image href="/hero-pattern.svg" x="0" y="0" width="100" height="100" />
          </pattern>
        </defs>
      </svg>
      <SEOMetadata />
      <Header />
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <DemoTerminal />
        <Problem />
        <Solution />
        <Benefits />
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Experience AI in Action: Business Strategy Generator</h2>
          <AIContentGenerator />
        </section>
        <Features />
        <Testimonial />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;