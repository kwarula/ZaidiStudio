
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
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {industryBenefits.map((industry, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PremiumCard className="h-full p-6" glow={true}>
                  <div className="flex flex-col h-full">
                    <div className="mb-6">{industry.icon}</div>
                    <h3 className="text-subsection text-gray-900 mb-6">
                      {industry.industry}
                    </h3>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-body text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="mt-auto">
                      See {industry.industry} Solutions
                    </Button>
                  </div>
                </PremiumCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-8 gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default IndustryBenefits;
