
import React from 'react';
import PremiumCard from './PremiumCard';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle2, BarChart2, LineChart, Users, Shield, Hotel, Dumbbell, Gavel, Briefcase } from 'lucide-react';

const IndustryBenefits = () => {
  const industryBenefits = [
    {
      industry: "Real Estate",
      benefits: ["24/7 lead qualification without hiring more staff", "Automated property matching based on client preferences", "Document preparation in minutes instead of hours"],
      icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
      industry: "E-commerce", 
      benefits: ["Inventory management that predicts stockouts before they happen", "Customer support that works while you sleep", "Marketing campaigns that optimize themselves"],
      icon: <BarChart2 className="h-8 w-8 text-purple-500" />
    },
    {
      industry: "Media & Marketing",
      benefits: ["Content creation that scales without hiring more writers", "Social media management that posts at optimal times", "Analytics that tell you exactly what's working and what's not"],
      icon: <LineChart className="h-8 w-8 text-green-500" />
    },
    {
      industry: "Financial Services",
      benefits: ["Automated compliance checks that never miss a deadline", "Client onboarding that takes minutes instead of days", "Risk assessment that catches issues humans would miss"],
      icon: <Shield className="h-8 w-8 text-orange-500" />
    },
    {
      industry: "Hospitality",
      benefits: [
        "Automated guest check-in and booking management",
        "Personalized guest recommendations powered by AI",
        "Instant feedback collection and sentiment analysis"
      ],
      icon: <Hotel className="h-8 w-8 text-pink-500" />
    },
    {
      industry: "Coaches/Trainers",
      benefits: [
        "Personalized training plans generated in seconds",
        "Automated scheduling and client reminders",
        "Progress tracking and analytics for every client"
      ],
      icon: <Dumbbell className="h-8 w-8 text-yellow-500" />
    },
    {
      industry: "Law Firms",
      benefits: [
        "Contract review and summarization in minutes",
        "Automated legal research and case law discovery",
        "Client intake and document automation"
      ],
      icon: <Gavel className="h-8 w-8 text-red-500" />
    },
    {
      industry: "Small Businesses",
      benefits: [
        "Automated invoicing and payment reminders",
        "Customer support chatbots available 24/7",
        "Marketing and social media automation"
      ],
      icon: <Briefcase className="h-8 w-8 text-gray-700" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-gray-900 mb-4">
            AI Benefits for Your Industry
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Discover how AI automation specifically helps your type of business
          </p>
        </div>
        
        {/* Enhanced Carousel with better responsiveness */}
        <div className="relative">
          <Carousel 
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {industryBenefits.map((industry, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="h-full">
                    <PremiumCard className="h-full p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" glow={true}>
                      <div className="flex flex-col h-full">
                        <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mx-auto">
                          {industry.icon}
                        </div>
                        <h3 className="text-subsection text-gray-900 mb-6 text-center">
                          {industry.industry}
                        </h3>
                        <ul className="space-y-3 mb-8 flex-grow">
                          {industry.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-body text-gray-700 leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          className="mt-auto w-full transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                        >
                          See {industry.industry} Solutions
                        </Button>
                      </div>
                    </PremiumCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Navigation Controls */}
            <div className="flex items-center justify-center mt-8 gap-4">
              {/* Navigation Buttons - Always visible on larger screens */}
              <div className="hidden md:flex items-center gap-4">
                <CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0 h-10 w-10 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200" />
                <CarouselNext className="relative top-0 right-0 translate-x-0 translate-y-0 h-10 w-10 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200" />
              </div>
              
              {/* Mobile swipe hint */}
              <div className="md:hidden text-sm text-gray-500 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-200 animate-pulse delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-100 animate-pulse delay-200"></div>
                </div>
                <span>Swipe to explore</span>
              </div>
            </div>
          </Carousel>
          
          {/* Gradient overlays for better visual indication */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
        
        {/* Additional responsive indicators */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            <span className="hidden sm:inline">Use arrow keys or click the buttons to navigate • </span>
            <span className="sm:hidden">Swipe left or right to see more industries • </span>
            {industryBenefits.length} industries covered
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;
