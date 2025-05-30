
import React from 'react';
import PremiumCard from './PremiumCard';
import { Clock, Target, AlertTriangle, TrendingUp, DollarSign, Lightbulb } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    { text: "100s of hours/year on tasks AI could handle", icon: Clock },
    { text: "Thousands in wasted payroll on manual processes", icon: DollarSign },
    { text: "Deals lost to faster competitors using automation", icon: TrendingUp },
    { text: "Employee burnout from repetitive tasks", icon: AlertTriangle },
    { text: "Inconsistent service quality due to human error", icon: Target },
    { text: "Missed opportunities for innovation", icon: Lightbulb }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-gray-900 mb-4">
            Without ZaidiStudio, You're Losing
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Every day without automation costs your business time, money, and competitive advantage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <PremiumCard 
                key={index} 
                variant="warning" 
                className="p-6 text-center"
              >
                <div className="text-red-500 mb-4 flex justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <p className="text-feature font-medium text-red-700">
                  {point.text}
                </p>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
