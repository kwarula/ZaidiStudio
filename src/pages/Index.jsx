import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
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
import { Helmet } from 'react-helmet';

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZaidiStudio",
    "description": "AI-powered business automation solutions to double your conversion rate in 30 days.",
    "url": "https://zaidistudio.com",
    "logo": "https://zaidistudio.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/zaidistudio",
      "https://www.twitter.com/zaidistudio",
      "https://www.linkedin.com/company/zaidistudio"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI-powered automation solutions",
      "price": "0",
      "priceCurrency": "USD"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://zaidistudio.com"
    },
    "potentialAction": {
      "@type": "ConsultAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://zaidistudio.com/#consultation",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Schedule",
        "name": "Free Consultation"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Helmet>
        <title>ZaidiStudio - AI-Powered Business Automation</title>
        <meta name="description" content="ZaidiStudio offers AI-powered business automation solutions to double your conversion rate in 30 days. Streamline operations and boost efficiency with our customized AI strategies." />
        <meta name="keywords" content="AI automation, business automation, conversion optimization, AI solutions, business efficiency" />
        <link rel="canonical" href="https://zaidistudio.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <svg width="0" height="0" className="hidden">
        <defs>
          <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <image href="/hero-pattern.svg" x="0" y="0" width="100" height="100" />
          </pattern>
        </defs>
      </svg>
      <Header />
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <Portfolio />
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