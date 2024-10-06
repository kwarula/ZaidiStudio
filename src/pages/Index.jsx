import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AIContentGenerator from '../components/AIContentGenerator';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
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
      <main className="pt-16">
        <Hero />
        <Features />
        <section className="py-20 px-6 md:px-12 bg-white">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Experience AI in Action</h2>
          <AIContentGenerator />
        </section>
        <Testimonial />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;