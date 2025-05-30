
import React from 'react';
import PremiumCard from './PremiumCard';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Real Estate Automation",
      before: "12 hours per week manually following up with leads",
      after: "AI handles all follow-ups automatically, saving 45 hours monthly",
      result: "37% more deals closed with zero additional staff",
      bgImage: "/placeholder.svg"
    },
    {
      title: "E-commerce Operations", 
      before: "Customer support team overwhelmed with 200+ queries daily",
      after: "AI handles 85% of routine questions instantly",
      result: "Customer satisfaction up 28%, support team now focuses on complex issues only",
      bgImage: "/placeholder.svg"
    },
    {
      title: "Media Production",
      before: "Content creation bottlenecks delayed projects by weeks", 
      after: "AI generates first drafts and handles routine edits",
      result: "Production time cut by 62%, team now handles 3x more projects",
      bgImage: "/placeholder.svg"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-gray-900 mb-4">
            Real Results for Kenyan Businesses
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            See how we've transformed operations for companies just like yours
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <PremiumCard key={index} className="overflow-hidden group" hover={true}>
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center px-4">
                    {study.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-700 mb-2">Before:</h4>
                    <p className="text-sm text-gray-700">{study.before}</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-700 mb-2">After:</h4>
                    <p className="text-sm text-gray-700">{study.after}</p>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Result:</h4>
                  <p className="text-sm font-medium text-gray-800">{study.result}</p>
                </div>
                
                <Button variant="outline" className="w-full group">
                  View Full Case Study
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
