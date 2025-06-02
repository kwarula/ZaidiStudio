
import React, { useEffect, useState } from 'react';
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
    { name: "n8n", logo: "/logos/N8n-logo-new.svg.png" }
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      {/* AI-inspired Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-blue-300/20">
                <animate attributeName="r" values="1;2;1" dur="4s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container relative z-10 text-center px-4 py-20">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Business Transformation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero text-gray-900 leading-tight">
            Stop Wasting Time—
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scale Your Business
            </span>
            <br />
            with AI & Automation
          </h1>

          {/* Sub-headline */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-blue-800">
              Get Real Results, Not Excuses.
            </p>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              If you're still doing things the old way, you're leaving money on the table. 
              Transform your operations with intelligent automation that works 24/7.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              className="btn btn-primary ai-glow text-lg px-8 py-4 inline-flex items-center gap-3 group"
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

          {/* Tech Stack */}
          <div className="pt-12 space-y-6">
            <p className="text-feature font-medium text-gray-700">
              Powered by Industry-Leading AI Technology
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
              {techStack.map((tech) => (
                <div 
                  key={tech.name}
                  className="flex flex-col items-center space-y-2 p-3 hover:scale-110 transition-transform duration-300"
                >
                  <div className="h-12 w-32 flex items-center justify-center bg-white rounded">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="h-10 w-28 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Live Results Section */}
          <div className="pt-16">
            <div className="space-y-6">
              {/* Section Header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Live Results from Kenyan Businesses</span>
                </div>
                <p className="text-feature font-medium text-gray-800">
                  Real transformations happening right now
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {liveResults.map((result, index) => (
                  <div 
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:bg-white/80 hover:border-blue-200/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <result.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {result.metric}
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
