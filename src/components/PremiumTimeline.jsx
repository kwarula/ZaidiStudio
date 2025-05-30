
import React from 'react';
import { Target, Zap, ArrowRight, LineChart } from 'lucide-react';
import PremiumCard from './PremiumCard';

const PremiumTimeline = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "We analyze your business processes to find automation opportunities that deliver maximum ROI.",
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      title: "Design",
      description: "Our experts create custom AI workflows tailored to your specific business needs and goals.",
      icon: Zap,
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      id: 3,
      title: "Deploy",
      description: "We implement and thoroughly test your automation solutions for seamless integration.",
      icon: ArrowRight,
      color: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      id: 4,
      title: "Optimize",
      description: "Continuous improvement and monitoring to maximize efficiency and business impact.",
      icon: LineChart,
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-gray-900 mb-4">
            How ZaidiStudio Works For You
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step process transforms your business operations with intelligent automation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 via-green-200 to-orange-200"></div>

          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Step Content */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <PremiumCard 
                      className="p-8 h-full"
                      hover={true}
                      glow={false}
                    >
                      <div className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} items-center text-center`}>
                        <div className={`${step.bgColor} ${step.color} p-4 rounded-2xl mb-6 inline-flex`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        
                        <h3 className="text-subsection text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        
                        <p className="text-body text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Step Number Badge */}
                        <div className="mt-6 lg:hidden">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {step.id}
                          </div>
                        </div>
                      </div>
                    </PremiumCard>
                  </div>

                  {/* Central Circle - Desktop Only */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                    {step.id}
                  </div>

                  {/* Mobile Step Indicator */}
                  <div className="lg:hidden flex items-center justify-center my-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Empty space for desktop layout */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumTimeline;
