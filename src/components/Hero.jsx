
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import ConsultationForm from './ConsultationForm';
import { Hotel, Banknote, Briefcase, CreditCard, Users } from 'lucide-react';

const Hero = () => {
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

  return (
    <section className="relative text-center py-16 sm:py-20 md:py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-blue-900 leading-tight">
          Kenya's #1 AI Services Provider—Scale Your Business with AI Agents & Automation
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-blue-900 font-semibold">
          Trusted by 500+ Kenyan Businesses. Get Real Results, Not Excuses.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700">
          Leading AI services in Kenya - From Nairobi to Mombasa, we're transforming businesses with AI agents and automation.
        </p>
        <Button 
          size="lg" 
          className="text-base sm:text-lg px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto" 
          onClick={() => setIsFormOpen(true)}
          disabled={hasRequestedConsultation}
          aria-label={hasRequestedConsultation ? "You've already requested a consultation" : "Get Your Free Strategy Session"}
        >
          {hasRequestedConsultation ? "Strategy Session Booked" : "Get Your Free Strategy Session"}
        </Button>
        <div className="mt-10 sm:mt-12 md:mt-16">
          <p className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Trusted by Growth-Driven Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Hotel className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" aria-label="Hotels and hospitality" />
            <Banknote className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" aria-label="Financial services" />
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" aria-label="Professional services" />
            <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" aria-label="E-commerce" />
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" aria-label="Service businesses" />
          </div>
        </div>
      </div>
      <ConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} onConsultationRequested={handleConsultationRequested} />
    </section>
  );
};

export default Hero;
