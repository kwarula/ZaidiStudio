import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <svg width="0" height="0" className="hidden">
        <defs>
          <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <image href="/hero-pattern.svg" x="0" y="0" width="100" height="100" />
          </pattern>
        </defs>
      </svg>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;