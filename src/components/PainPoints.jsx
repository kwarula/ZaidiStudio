
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
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-section text-gray-900 mb-6">
            Without ZaidiStudio, You're Losing
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Every day without automation costs your business time, money, and competitive advantage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-red-50/50 border border-red-100 rounded-2xl p-8 text-center hover:shadow-lg hover:border-red-200 transition-all duration-200"
              >
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
