import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import ConsultationForm from './ConsultationForm';
import { Sparkles, Zap, ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const PremiumHero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasRequestedConsultation, setHasRequestedConsultation] = useState(false);

  useEffect(() => {
    const requested = localStorage.getItem('hasRequestedConsultation') === 'true';
    setHasRequestedConsultation(requested);
  }, []);

  const handleConsultationRequested = () => {
    setHasRequestedConsultation(true);
    localStorage.setItem('hasRequestedConsultation', 'true');
  };

  const techStack = [
    { name: "OpenAI", logo: "/logos/OpenAI-Logo.png" },
    { name: "Anthropic", logo: "/logos/Anthropic_logo.svg.png" },
    { name: "Google Gemini", logo: "/logos/gemini-brand-color.png" },
    { name: "CrewAI", logo: "/logos/crewai-brand-color.png" },
    { name: "n8n", logo: "/logos/N8n-logo-new.svg.png" },
    { name: "Make.com", logo: "/logos/Make.com.webp" },
    { name: "Lovable", logo: "/logos/Lovable.jpeg" },
    { name: "Pinecone", logo: "/logos/Pinecone.jpg" },
    { name: "Supabase", logo: "/logos/Supabase.png" }
  ];

  const liveResults = [
    {
      icon: Clock,
      metric: "72%",
      description: "Sales cycle time reduced for a Nairobi real estate firm"
    },
    {
      icon: TrendingUp,
      metric: "340%",
      description: "Lead conversion improvement for an e-commerce startup"
    },
    {
      icon: Users,
      metric: "85%",
      description: "Customer service automation for a logistics company"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Minimal Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Subtle Floating Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-50/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-50/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 px-6 py-24 md:py-32">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto">
          {/* Badge - Subtle and Clean */}
          <div className="flex justify-center mb-8 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>AI-Powered Business Transformation</span>
            </div>
          </div>

          {/* Main Headline - Large, Bold, Clean */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight text-center mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
            Stop Wasting Time—
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent">
              Scale Your Business
            </span>
            <br />
            with AI & Automation
          </h1>

          {/* Sub-headline - Clear Hierarchy */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900">
              Get Real Results, Not Excuses.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              If you're still doing things the old way, you're leaving money on the table. 
              Transform your operations with intelligent automation that works 24/7.
            </p>
          </div>

          {/* CTA Button - Clean and Prominent */}
          <div className="flex justify-center mb-16 fade-in" style={{ animationDelay: '0.3s' }}>
            <button
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              onClick={() => setIsFormOpen(true)}
              disabled={hasRequestedConsultation}
            >
              {hasRequestedConsultation ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Strategy Session Booked
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Live Results - Card-based, Clean */}
          <div className="mb-20 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {liveResults.map((result, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <result.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 text-center">{result.metric}</div>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack - Subtle and Professional */}
          <div className="fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm font-medium text-gray-500 text-center mb-8 uppercase tracking-wide">
              Powered by Industry-Leading AI Technology
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              {techStack.map((tech) => (
                <div 
                  key={tech.name}
                  className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ConsultationForm 
        open={isFormOpen} 
        onOpenChange={setIsFormOpen} 
        onConsultationRequested={handleConsultationRequested} 
      />
    </section>
  );
};

export default PremiumHero;